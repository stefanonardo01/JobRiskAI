// api/analyze-cv.js
// Stateless serverless function (Vercel format): receives CV text, calls Gemini,
// returns strict JSON risk analysis. No auth, no DB, no persistence.

const { GoogleGenerativeAI } = require('@google/generative-ai');

const MAX_CV_CHARS = 15000; // guard against oversized payloads / prompt abuse
const MODEL_NAME = 'gemini-2.5-flash';

function buildPrompt(cvText) {
  return `You are a career risk analyst. Return ONLY JSON, no markdown, no code fences, no commentary before or after. Be strict, realistic, and CONSISTENT: the same CV should always produce the same score.

SCORING RUBRIC (use EXACTLY these ranges):
- 0-20: No automation risk. Role requires human judgment, creativity, or physical presence (e.g., surgeon, therapist, chef)
- 21-40: Low risk. Role has some routine tasks but requires domain expertise and interpersonal skills (e.g., senior accountant, project manager)
- 41-60: Medium risk. Role has significant routine components but some irreplaceable human elements (e.g., junior developer, customer service lead)
- 61-80: High risk. Role is mostly standardizable tasks with limited human differentiation (e.g., data analyst, junior accountant, customer support)
- 81-100: Critical risk. Role is almost entirely automatable with current AI tech (e.g., data entry, basic copywriting, call center)

EVALUATION FRAMEWORK:
1. Task repeatability: How standardized/repeatable are the tasks? (Higher = higher risk)
2. Required judgment: How much subjective decision-making? (More = lower risk)
3. Interpersonal dependency: Client/team interaction criticality? (More = lower risk)
4. Domain specialization: Years/expertise required? (More = lower risk)
5. AI tooling availability: Existing AI solutions for this role? (More = higher risk)

Return exactly this JSON shape:
{
  "ai_exposure_score": number (0-100, must be consistent for same CV),
  "risk_level": "low" | "medium" | "high",
  "missing_skills": string[] (3-6 concrete skills to reduce risk),
  "recommended_roles": string[] (2-4 realistic adjacent roles with lower risk),
  "insight": string (1-2 sentences, direct and specific to this CV),
  "recommended_courses": [
    { "title": string, "platform": "Coursera" | "LinkedIn Learning", "search_query": string }
  ] (3-4 online courses — real course names that exist on the platform — directly addressing the missing skills),
  "recommended_books": [
    { "title": string, "author": string, "isbn13": string }
  ] (3-4 real published books on topics relevant to surviving automation in this role)
}

IMPORTANT: Use the rubric above consistently. If analyzing the same CV twice, produce identical scores.

ORDERING RULES (critical for revenue):
- recommended_books: ONLY suggest internationally famous bestsellers with 10,000+ reviews on Amazon (e.g. "Atomic Habits", "Deep Work", "The Lean Startup", "Zero to One", "Thinking Fast and Slow"). Never suggest niche, academic, or little-known books. The book must be easily findable on Google Books with a cover image.
- recommended_courses: sort by enrollment popularity — put the most enrolled/highest-rated courses first. Prefer Coursera courses over LinkedIn Learning when quality is equivalent (Coursera has broader reach).
- For books: pick only real published books with a valid ISBN-13 (13 digits, starts with 978 or 979). No invented titles. Verify the ISBN matches the exact title and author.

CV:
${cvText}`;
}

// Gemini sometimes wraps output in ```json fences or adds stray whitespace
// even when told not to. Extract the first valid JSON object defensively.
function extractJson(rawText) {
  if (!rawText) throw new Error('Empty model response');

  let candidate = rawText.trim();

  // Strip markdown code fences if present
  const fenceMatch = candidate.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fenceMatch) {
    candidate = fenceMatch[1].trim();
  }

  // If still not starting with '{', find the first '{' and last '}'
  if (!candidate.startsWith('{')) {
    const start = candidate.indexOf('{');
    const end = candidate.lastIndexOf('}');
    if (start !== -1 && end !== -1 && end > start) {
      candidate = candidate.slice(start, end + 1);
    }
  }

  return JSON.parse(candidate);
}

// Round score to nearest multiple of 5 for stability
function roundScoreToFive(score) {
  return Math.round(score / 5) * 5;
}

function validateAndNormalize(parsed) {
  const errors = [];

  let score = Number(parsed.ai_exposure_score);
  if (!Number.isFinite(score)) errors.push('ai_exposure_score missing/invalid');
  score = Math.max(0, Math.min(100, Math.round(score)));

  // Round to nearest multiple of 5 for consistent results
  score = roundScoreToFive(score);

  let riskLevel = String(parsed.risk_level || '').toLowerCase();
  if (!['low', 'medium', 'high'].includes(riskLevel)) {
    // derive from score if model gave a bad/missing value
    // Thresholds: 0-30=low, 35-65=medium, 70-100=high
    riskLevel = score >= 70 ? 'high' : score >= 35 ? 'medium' : 'low';
  }

  const missingSkills = Array.isArray(parsed.missing_skills)
    ? parsed.missing_skills.filter((s) => typeof s === 'string' && s.trim()).slice(0, 6)
    : [];

  const recommendedRoles = Array.isArray(parsed.recommended_roles)
    ? parsed.recommended_roles.filter((s) => typeof s === 'string' && s.trim()).slice(0, 4)
    : [];

  const insight = typeof parsed.insight === 'string' && parsed.insight.trim()
    ? parsed.insight.trim()
    : 'No additional insight was generated for this CV.';

  const recommendedCourses = Array.isArray(parsed.recommended_courses)
    ? parsed.recommended_courses
        .filter(c => c && typeof c.title === 'string' && typeof c.platform === 'string')
        .slice(0, 4)
        .map(c => ({
          title: String(c.title).trim(),
          platform: ['Coursera', 'LinkedIn Learning'].includes(c.platform) ? c.platform : 'Coursera',
          search_query: typeof c.search_query === 'string' ? c.search_query.trim() : c.title.trim(),
        }))
    : [];

  const recommendedBooks = Array.isArray(parsed.recommended_books)
    ? parsed.recommended_books
        .filter(b => b && typeof b.title === 'string' && typeof b.author === 'string')
        .slice(0, 4)
        .map(b => {
          const isbn = typeof b.isbn13 === 'string' ? b.isbn13.replace(/[^\d]/g, '') : '';
          return {
            title:  String(b.title).trim(),
            author: String(b.author).trim(),
            isbn13: /^\d{13}$/.test(isbn) ? isbn : null,
          };
        })
    : [];

  if (errors.length) {
    console.warn('Gemini output normalization warnings:', errors.join('; '));
  }

  return {
    ai_exposure_score: score,
    risk_level: riskLevel,
    missing_skills: missingSkills,
    recommended_roles: recommendedRoles,
    insight,
    recommended_courses: recommendedCourses,
    recommended_books: recommendedBooks,
  };
}

async function handler(req, res) {
  // CORS headers (useful for local dev / preview deploys)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error('Missing GEMINI_API_KEY environment variable');
    res.status(500).json({ error: 'Server misconfiguration' });
    return;
  }

  // Vercel parses JSON bodies automatically when Content-Type is application/json,
  // but we defensively handle the case where req.body is a raw string too.
  let payload = req.body;
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload || '{}');
    } catch {
      res.status(400).json({ error: 'Invalid JSON body' });
      return;
    }
  }
  payload = payload || {};

  const cvText = typeof payload.cvText === 'string' ? payload.cvText.trim() : '';

  if (!cvText) {
    res.status(400).json({ error: 'cvText is required' });
    return;
  }
  if (cvText.length < 50) {
    res.status(400).json({ error: 'cvText too short to analyze' });
    return;
  }

  const truncatedText = cvText.slice(0, MAX_CV_CHARS);

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      generationConfig: {
        temperature: 0,
        responseMimeType: 'application/json',
      },
    });

    const result = await model.generateContent(buildPrompt(truncatedText));
    const rawText = result.response.text();

    let parsed;
    try {
      parsed = extractJson(rawText);
    } catch (parseErr) {
      console.error('Failed to parse Gemini JSON output:', parseErr.message, '\nRaw:', rawText);
      res.status(502).json({ error: 'AI returned an unparseable response. Please try again.' });
      return;
    }

    const normalized = validateAndNormalize(parsed);
    res.status(200).json(normalized);
  } catch (err) {
    console.error('Gemini call failed:', err);
    res.status(502).json({ error: 'AI analysis failed. Please try again.' });
  }
}

module.exports = handler;
// Extend the default 10s Hobby timeout to 30s as a safety margin for slower Gemini responses.
module.exports.config = {
  maxDuration: 30,
};
