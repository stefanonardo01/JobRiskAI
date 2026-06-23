// scripts/build-profession-pages.mjs
// Genera public/professione/[slug].html per ogni professione (105 pagine).
// Genera anche public/classifica.html — ranking completo per backlink.
// Eseguire con: node scripts/build-profession-pages.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');

// ── Carica jobs.js come testo ed estrae jobData e jobExtra ──
// (jobs.js usa path web assoluti, non possiamo importarlo direttamente)
function extractExport(text, exportName) {
  const marker = `export const ${exportName} = {`;
  const start  = text.indexOf(marker);
  if (start === -1) throw new Error(`${exportName} non trovato`);
  let depth = 0; let i = start + marker.length - 1;
  while (i < text.length) {
    if (text[i] === '{') depth++;
    if (text[i] === '}') { depth--; if (depth === 0) break; }
    i++;
  }
  const objText = text.slice(start + marker.length - 1, i + 1);
  // eval sicuro: è il nostro stesso file statico
  return Function(`"use strict"; return (${objText})`)();
}

const jobsText = readFileSync(join(ROOT, 'public/jobs.js'), 'utf8');
const jobData  = extractExport(jobsText, 'jobData');
const jobExtra = extractExport(jobsText, 'jobExtra');

// ── Categoria → label e job keys ──────────────────────────
const CATEGORIES = {
  'Tech & AI':            ['ai_engineer','ai_director','data_engineer','backend_developer','frontend_developer','fullstack_developer','cloud_engineer','cloud_consultant','soc_analyst','cyber_security_engineer','data_scientist','devops_engineer','solutions_consultant','scrum_master','it_project_manager','ml_engineer','product_owner','sysadmin','qa_engineer','network_engineer','it_consultant','developer'],
  'Commerciale':          ['bdr','sdr','account_manager','key_account_manager','sales_manager','technical_sales','customer_success_manager','store_manager','sales_executive','sales_director','addetto_vendite','commerciale_estero'],
  'Marketing':            ['digital_marketing_specialist','seo_specialist','growth_hacker','content_creator','brand_manager','ecommerce_manager','copywriter','social_media','marketing_manager','pr_specialist'],
  'Management & Finanza': ['cfo','auditor','credit_collector','office_manager','impiegato_amm','ceo','executive_assistant','data_entry','contabile','data_analyst','cost_controller','project_planner','cost_estimator','project_controller','project_manager','controller_gestione','tax_advisor','management_consultant','financial_analyst','risk_manager','legal_counsel'],
  'Operations':           ['production_planner','plant_manager','automation_engineer','qa_manager','buyer','procurement_manager','supply_chain_specialist','process_engineer','logistics_manager','operations_manager','receptionist','paralegal','customer_service'],
  'HR':                   ['hr_manager','talent_acquisition','hr_generalist','hr_business_partner'],
  'Sanità':               ['infermiere','sustainability_specialist','hse_specialist','medical_science_liaison','clinical_research_associate','informatore_scientifico','regulatory_affairs','rd_specialist'],
  'Creatività':           ['grafico','traduttore','ux_ui_designer','video_editor','art_director','fotografo','illustratore','sound_designer'],
  'Istruzione':           ['insegnante','docente_universitario','formatore_aziendale','instructional_designer','tutor_online','dirigente_scolastico','educatore_infanzia'],
};

function categoryOf(key) {
  for (const [cat, keys] of Object.entries(CATEGORIES)) {
    if (keys.includes(key)) return cat;
  }
  return 'Altro';
}

function relatedJobs(key, max = 4) {
  const cat = categoryOf(key);
  return (CATEGORIES[cat] || [])
    .filter(k => k !== key && jobData[k])
    .slice(0, max);
}

// ── Slug ──────────────────────────────────────────────────
function slug(key) { return key.replace(/_/g, '-'); }

// ── HTML escape ───────────────────────────────────────────
function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Colore badge rischio ───────────────────────────────────
function riskColor(pct) {
  if (pct >= 70) return '#ef4444';
  if (pct >= 40) return '#f59e0b';
  return '#10b981';
}
function riskLabel(pct) {
  if (pct >= 70) return 'Alto rischio';
  if (pct >= 40) return 'Rischio medio';
  return 'Basso rischio';
}

// ── Genera pagina singola professione ─────────────────────
function buildProfessionPage(key) {
  const d   = jobData[key];
  const ex  = jobExtra[key];
  if (!d) return null;

  const pct        = Math.round(d.riskFactor * 100);
  const year       = d.targetYear;
  const humanTotal = (d.defaultHumanSalary || 0) + (d.defaultHumanExtra || 0);
  const aiAnnual   = (d.defaultAiMonthly || 0) * 12 + (d.defaultAiSetup || 0);
  const saving     = humanTotal - aiAnnual;
  const savingPct  = humanTotal > 0 ? Math.round((saving / humanTotal) * 100) : 0;
  const title      = d.title || key;
  const sl         = slug(key);
  const related    = relatedJobs(key);
  const cat        = categoryOf(key);

  const tasks      = ex?.tasks        || [];
  const survival   = ex?.survivalPlan || [];

  // FAQ JSON-LD
  const faqItems = [
    {
      q: `Il ${title} sarà sostituito dall'intelligenza artificiale?`,
      a: `Secondo l'analisi di JobRiskAI, il ${title} ha un rischio di sostituzione AI del ${pct}%, con anno critico stimato ${year}. ${d.survivalNote ? d.survivalNote.charAt(0).toUpperCase() + d.survivalNote.slice(1) + '.' : ''} Il rischio dipende dalla capacità di sviluppare competenze non automatizzabili.`,
    },
    {
      q: `Quando l'AI sostituirà il ${title}?`,
      a: `L'anno critico stimato per il ${title} è il ${year}, ovvero quando i sistemi AI potrebbero svolgere la maggior parte dei task del ruolo in modo economicamente conveniente per le aziende. Questa stima è basata su trend tecnologici attuali e può variare.`,
    },
    {
      q: `Come può un ${title} ridurre il rischio di sostituzione AI?`,
      a: survival.length > 0
        ? `Per ridurre il rischio AI come ${title}: ${survival.slice(0, 3).join('; ')}.`
        : `Per ridurre il rischio, il ${title} dovrebbe sviluppare competenze di giudizio strategico, relazione con i clienti e specializzazione di dominio difficilmente automatizzabili.`,
    },
    {
      q: `Quanto costa un agente AI rispetto a un ${title}?`,
      a: aiAnnual > 0 && humanTotal > 0
        ? `Un ${title} costa mediamente €${humanTotal.toLocaleString('it')} l'anno (stipendio + contributi). Un agente AI equivalente costa circa €${aiAnnual.toLocaleString('it')} l'anno (${savingPct}% di risparmio). Il confronto completo è disponibile sul calcolatore di JobRiskAI.`
        : `Il confronto dettagliato tra costi umani e AI per il ruolo di ${title} è disponibile gratuitamente sul calcolatore di JobRiskAI.`,
    },
  ];

  const faqJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }, null, 2);

  const breadcrumbJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'JobRiskAI', item: 'https://www.jobriskai.it/' },
      { '@type': 'ListItem', position: 2, name: 'Professioni', item: 'https://www.jobriskai.it/classifica.html' },
      { '@type': 'ListItem', position: 3, name: title, item: `https://www.jobriskai.it/professione/${sl}` },
    ],
  }, null, 2);

  const taskRows = tasks.map(t => `
              <div style="display:flex;align-items:center;gap:1rem;padding:0.7rem 0;border-bottom:1px solid var(--border);">
                <div style="flex:1;font-size:0.92rem;color:var(--text-primary);">${esc(t.name)}</div>
                <div style="display:flex;align-items:center;gap:0.5rem;flex-shrink:0;">
                  <div style="width:80px;height:6px;background:var(--border);border-radius:999px;overflow:hidden;">
                    <div style="width:${t.risk}%;height:100%;background:${t.risk >= 70 ? '#ef4444' : t.risk >= 40 ? '#f59e0b' : '#10b981'};border-radius:999px;"></div>
                  </div>
                  <span style="font-size:0.8rem;font-weight:600;color:${t.risk >= 70 ? '#ef4444' : t.risk >= 40 ? '#d97706' : '#059669'};min-width:32px;">${t.risk}%</span>
                </div>
              </div>`).join('');

  const survivalItems = survival.map(s =>
    `<li style="padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.92rem;color:var(--text-primary);line-height:1.5;">✅ ${esc(s)}</li>`
  ).join('');

  const relatedCards = related.map(rk => {
    const rd  = jobData[rk];
    if (!rd) return '';
    const rp  = Math.round(rd.riskFactor * 100);
    return `<a href="/professione/${slug(rk)}" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border:1px solid var(--border);border-radius:10px;text-decoration:none;color:var(--text-primary);background:white;transition:all 0.18s ease;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">
      <span style="font-size:1.3rem;">${rd.icon || '💼'}</span>
      <div>
        <div style="font-size:0.88rem;font-weight:600;">${esc(rd.title)}</div>
        <div style="font-size:0.78rem;color:${riskColor(rp)};">${rp}% rischio</div>
      </div>
    </a>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}: rischio AI ${pct}% — Anno critico ${year} | JobRiskAI</title>
  <meta name="description" content="Il ${esc(title)} sarà sostituito dall'AI? Rischio automazione ${pct}%, anno critico ${year}. Scopri le competenze da sviluppare e il confronto costi con un agente AI. Analisi gratuita su JobRiskAI.">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="https://www.jobriskai.it/professione/${sl}">
  <meta property="og:title" content="${esc(title)}: rischio AI ${pct}% | JobRiskAI">
  <meta property="og:description" content="Il ${esc(title)} sarà sostituito dall'AI? Rischio ${pct}%, anno critico ${year}. Piano di sopravvivenza e confronto costi gratuito.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.jobriskai.it/professione/${sl}">
  <meta property="og:image" content="https://www.jobriskai.it/og-image.png">
  <meta property="og:site_name" content="JobRiskAI">
  <meta property="og:locale" content="it_IT">
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <script type="application/ld+json">${faqJsonLd}</script>
  <script type="application/ld+json">${breadcrumbJsonLd}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <style>
    .prof-shell { max-width: 760px; margin: 3rem auto 5rem; padding: 0 1.5rem; }
    .prof-hero  { background: linear-gradient(135deg, rgba(99,102,241,0.06), rgba(59,130,246,0.03)); border: 1px solid rgba(99,102,241,0.18); border-radius: 20px; padding: 2.5rem 2rem; margin-bottom: 2rem; text-align: center; }
    .prof-score { font-family: 'Space Grotesk', sans-serif; font-size: 4rem; font-weight: 700; line-height: 1; }
    .prof-card  { background: white; border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; }
    .prof-card h2 { font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 1rem; }
    .prof-stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0; }
    .prof-stat { text-align: center; }
    .prof-stat-value { font-family: 'Space Grotesk', sans-serif; font-size: 1.8rem; font-weight: 700; }
    .prof-stat-label { font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem; }
    .prof-cta { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; padding: 1rem 2rem; border-radius: 999px; text-decoration: none; font-weight: 700; font-size: 1rem; display: inline-block; margin: 0.5rem; transition: transform 0.15s, box-shadow 0.15s; }
    .prof-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px -8px rgba(99,102,241,0.5); }
    .prof-cta-ghost { background: white; color: var(--primary); border: 2px solid var(--primary); padding: 0.9rem 1.8rem; border-radius: 999px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-block; margin: 0.5rem; transition: all 0.15s; }
    .prof-cta-ghost:hover { background: var(--primary); color: white; }
    .prof-related { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
    @media (max-width: 480px) {
      .prof-score { font-size: 2.8rem; }
      .prof-stat-grid { grid-template-columns: repeat(3,1fr); gap: 0.5rem; }
      .prof-related { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header role="banner">
    <div class="header-content">
      <a href="/" style="display:inline-flex;align-items:center;gap:0.45rem;color:var(--primary);text-decoration:none;font-weight:600;font-size:0.88rem;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.22);border-radius:8px;padding:0.42rem 0.9rem;" onmouseover="this.style.background='rgba(99,102,241,0.14)'" onmouseout="this.style.background='rgba(99,102,241,0.07)'">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
        Home
      </a>
      <div class="header-info">Rischio AI per professione</div>
      <a href="/classifica.html" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">📊 Classifica completa</a>
    </div>
  </header>

  <main role="main">
    <div class="prof-shell">

      <!-- Breadcrumb visivo -->
      <nav style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:1.5rem;">
        <a href="/" style="color:var(--text-secondary);text-decoration:none;">JobRiskAI</a>
        <span style="margin:0 0.4rem;">›</span>
        <a href="/classifica.html" style="color:var(--text-secondary);text-decoration:none;">Professioni</a>
        <span style="margin:0 0.4rem;">›</span>
        <span style="color:var(--text-primary);font-weight:500;">${esc(title)}</span>
      </nav>

      <!-- Hero -->
      <div class="prof-hero">
        <div style="font-size:2.5rem;margin-bottom:0.75rem;">${d.icon || '💼'}</div>
        <h1 style="font-family:'Space Grotesk',sans-serif;font-size:1.9rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;line-height:1.2;">
          Il ${esc(title)} sarà sostituito dall'AI?
        </h1>
        <p style="color:var(--text-secondary);font-size:0.95rem;margin-bottom:1.5rem;">${esc(d.description || '')}</p>

        <div class="prof-stat-grid">
          <div class="prof-stat">
            <div class="prof-stat-value" style="color:${riskColor(pct)};">${pct}%</div>
            <div class="prof-stat-label">Rischio AI</div>
          </div>
          <div class="prof-stat">
            <div class="prof-stat-value" style="color:var(--text-primary);">${year}</div>
            <div class="prof-stat-label">Anno critico</div>
          </div>
          <div class="prof-stat">
            <div class="prof-stat-value" style="color:var(--text-primary);">${savingPct > 0 ? savingPct + '%' : '—'}</div>
            <div class="prof-stat-label">Risparmio AI</div>
          </div>
        </div>

        <div style="display:inline-block;padding:0.5rem 1.2rem;border-radius:999px;font-weight:700;font-size:0.9rem;background:${riskColor(pct)}22;color:${riskColor(pct)};border:1px solid ${riskColor(pct)}44;margin-bottom:1.5rem;">
          ${riskLabel(pct)}
        </div>

        ${d.survivalNote ? `<p style="color:var(--text-secondary);font-size:0.88rem;font-style:italic;max-width:520px;margin:0 auto;">💡 ${esc(d.survivalNote.charAt(0).toUpperCase() + d.survivalNote.slice(1))}.</p>` : ''}
      </div>

      ${tasks.length > 0 ? `
      <!-- Analisi task -->
      <div class="prof-card">
        <h2>📋 Analisi dei task — cosa automatizzerà l'AI</h2>
        ${taskRows}
      </div>` : ''}

      ${survival.length > 0 ? `
      <!-- Piano di sopravvivenza -->
      <div class="prof-card" style="border-left:3px solid var(--success);">
        <h2>🛡️ Piano di sopravvivenza per il ${esc(title)}</h2>
        <ul style="list-style:none;padding:0;margin:0;">${survivalItems}</ul>
      </div>` : ''}

      ${humanTotal > 0 && aiAnnual > 0 ? `
      <!-- Confronto costi -->
      <div class="prof-card" style="background:linear-gradient(135deg,rgba(99,102,241,0.04),rgba(59,130,246,0.02));">
        <h2>💰 Confronto costi: ${esc(title)} vs agente AI</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
          <div style="text-align:center;padding:1rem;background:rgba(239,68,68,0.05);border-radius:12px;border:1px solid rgba(239,68,68,0.15);">
            <div style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.3rem;">👤 ${esc(title)} umano</div>
            <div style="font-size:1.5rem;font-weight:700;color:var(--text-primary);">€${humanTotal.toLocaleString('it')}</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">all'anno</div>
          </div>
          <div style="text-align:center;padding:1rem;background:rgba(16,185,129,0.05);border-radius:12px;border:1px solid rgba(16,185,129,0.15);">
            <div style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.3rem;">🤖 Agente AI equivalente</div>
            <div style="font-size:1.5rem;font-weight:700;color:var(--success);">€${aiAnnual.toLocaleString('it')}</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">all'anno</div>
          </div>
        </div>
        <p style="text-align:center;color:var(--text-secondary);font-size:0.88rem;">Risparmio potenziale: <strong style="color:var(--success);">€${saving.toLocaleString('it')} l'anno (${savingPct}%)</strong></p>
      </div>` : ''}

      <!-- CTA -->
      <div style="text-align:center;margin:2.5rem 0;">
        <p style="color:var(--text-secondary);margin-bottom:1.25rem;font-size:0.95rem;">Calcola il rischio personalizzato in base al tuo stipendio e alla tua situazione</p>
        <a href="/calcolatore.html?job=${key}" class="prof-cta">🎯 Calcola il tuo rischio personalizzato</a>
        <a href="/cv-analyzer.html" class="prof-cta-ghost">📄 Analizza il tuo CV</a>
      </div>

      ${related.length > 0 ? `
      <!-- Professioni correlate -->
      <div class="prof-card">
        <h2>🔗 Professioni correlate — categoria ${esc(cat)}</h2>
        <div class="prof-related">${relatedCards}</div>
      </div>` : ''}

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p class="footer-text">JobRiskAI · Analisi gratuita del rischio AI per 105 professioni italiane</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/classifica.html" style="color:var(--text-secondary);">Classifica completa</a> · <a href="/calcolatore.html" style="color:var(--text-secondary);">Calcolatore</a> · <a href="/cv-analyzer.html" style="color:var(--text-secondary);">Analisi CV</a></p>
    </div>
  </footer>
</body>
</html>`;
}

// ── Genera classifica.html ─────────────────────────────────
function buildClassificaPage() {
  const sorted = Object.entries(jobData)
    .map(([key, d]) => ({ key, ...d, pct: Math.round(d.riskFactor * 100), cat: categoryOf(key) }))
    .sort((a, b) => b.pct - a.pct);

  const rows = sorted.map((d, i) => `
    <tr>
      <td style="font-weight:600;color:var(--text-secondary);font-size:0.85rem;padding:0.75rem 0.5rem;">${i + 1}</td>
      <td style="padding:0.75rem 0.5rem;">
        <a href="/professione/${slug(d.key)}" style="display:flex;align-items:center;gap:0.6rem;text-decoration:none;color:var(--text-primary);">
          <span style="font-size:1.2rem;">${d.icon || '💼'}</span>
          <span style="font-weight:600;font-size:0.92rem;">${esc(d.title)}</span>
        </a>
      </td>
      <td style="padding:0.75rem 0.5rem;font-size:0.82rem;color:var(--text-secondary);">${esc(d.cat)}</td>
      <td style="padding:0.75rem 0.5rem;">
        <div style="display:flex;align-items:center;gap:0.5rem;">
          <div style="width:60px;height:6px;background:var(--border);border-radius:999px;overflow:hidden;"><div style="width:${d.pct}%;height:100%;background:${riskColor(d.pct)};border-radius:999px;"></div></div>
          <span style="font-weight:700;font-size:0.9rem;color:${riskColor(d.pct)};">${d.pct}%</span>
        </div>
      </td>
      <td style="padding:0.75rem 0.5rem;font-size:0.88rem;color:var(--text-secondary);">${d.targetYear}</td>
    </tr>`).join('');

  const faqJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Qual è il lavoro più a rischio di sostituzione AI in Italia?', acceptedAnswer: { '@type': 'Answer', text: 'Il lavoro più a rischio AI in Italia nel 2026 è il Data Entry Clerk (92%, anno critico 2027), seguito da Contabile (85%), Impiegato Amministrativo e Customer Service (80%).' } },
      { '@type': 'Question', name: 'Quali lavori non saranno sostituiti dall\'AI?', acceptedAnswer: { '@type': 'Answer', text: 'I lavori meno a rischio sono CEO/General Manager e Educatore di Prima Infanzia (8%), AI Director (10%), Infermiere (12%). Questi ruoli richiedono giudizio umano, relazione e responsabilità che l\'AI non può replicare.' } },
      { '@type': 'Question', name: 'Come viene calcolato il rischio di sostituzione AI?', acceptedAnswer: { '@type': 'Answer', text: 'JobRiskAI valuta 5 dimensioni: ripetitività dei task, giudizio richiesto, dipendenza interpersonale, specializzazione di dominio e disponibilità di strumenti AI. Il punteggio finale va da 0 (nessun rischio) a 100 (sostituzione imminente).' } },
      { '@type': 'Question', name: 'Entro quando l\'AI sostituirà la maggior parte dei lavori?', acceptedAnswer: { '@type': 'Answer', text: 'L\'anno critico varia molto per professione: dal 2027 per il Data Entry Clerk al 2045 per CEO e Educatori. Non si tratta di sostituzione totale ma del momento in cui l\'AI diventa economicamente preferibile per la maggior parte dei task del ruolo.' } },
    ],
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>I 105 lavori più a rischio AI in Italia [2026] | Classifica JobRiskAI</title>
  <meta name="description" content="Classifica completa dei 105 lavori italiani per rischio di sostituzione AI. Dal Data Entry Clerk (92%) al CEO (8%). Scopri dove si colloca la tua professione e quando l'AI arriverà.">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="https://www.jobriskai.it/classifica.html">
  <meta property="og:title" content="I 105 lavori più a rischio AI in Italia [2026] | JobRiskAI">
  <meta property="og:description" content="Classifica completa: dal Data Entry Clerk (92%) al CEO (8%). Scopri il rischio AI di ogni professione italiana.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.jobriskai.it/classifica.html">
  <meta property="og:image" content="https://www.jobriskai.it/og-image.png">
  <meta property="og:site_name" content="JobRiskAI">
  <script type="application/ld+json">${faqJsonLd}</script>
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'JobRiskAI', item: 'https://www.jobriskai.it/' }, { '@type': 'ListItem', position: 2, name: 'Classifica professioni a rischio AI', item: 'https://www.jobriskai.it/classifica.html' }] })}</script>
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <style>
    .cla-shell { max-width: 900px; margin: 3rem auto 5rem; padding: 0 1.5rem; }
    table { width: 100%; border-collapse: collapse; }
    thead th { text-align: left; font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; padding: 0.6rem 0.5rem; border-bottom: 2px solid var(--border); }
    tbody tr { border-bottom: 1px solid var(--border); transition: background 0.15s; }
    tbody tr:hover { background: rgba(99,102,241,0.03); }
    .filter-btn { background: white; border: 1px solid var(--border); border-radius: 999px; padding: 0.4rem 0.9rem; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: all 0.15s; color: var(--text-secondary); }
    .filter-btn.active, .filter-btn:hover { background: var(--primary); color: white; border-color: var(--primary); }
    @media (max-width: 600px) { .hide-mobile { display: none; } }
  </style>
</head>
<body>
  <header role="banner">
    <div class="header-content">
      <a href="/" data-i18n="cla_back_home" style="display:inline-flex;align-items:center;gap:0.45rem;color:var(--primary);text-decoration:none;font-weight:600;font-size:0.88rem;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.22);border-radius:8px;padding:0.42rem 0.9rem;" onmouseover="this.style.background='rgba(99,102,241,0.14)'" onmouseout="this.style.background='rgba(99,102,241,0.07)'">Home</a>
      <div class="header-info" data-i18n="cla_header_info">Classifica rischio AI 2026</div>
      <nav style="display:flex;align-items:center;gap:1rem;">
        <a href="/calcolatore.html" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">🎯 Calcolatore</a>
        <div class="lang-selector" role="group" aria-label="Seleziona lingua">
          <select id="langSelect" aria-label="Lingua" style="background:white;color:var(--text-primary);border:1px solid var(--border);border-radius:8px;padding:0.4rem 0.6rem;font-size:0.9rem;cursor:pointer;">
            <option value="it">🇮🇹 Italiano</option>
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </nav>
    </div>
  </header>

  <main role="main">
    <div class="cla-shell">

      <div style="margin-bottom:2.5rem;">
        <div data-i18n="cla_badge" style="display:inline-flex;align-items:center;gap:0.4rem;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);color:var(--primary);padding:0.4rem 0.9rem;border-radius:999px;font-size:0.78rem;font-weight:600;letter-spacing:0.02em;text-transform:uppercase;margin-bottom:1rem;">📊 Dati 2026</div>
        <h1 data-i18n="cla_title" style="font-family:'Space Grotesk',sans-serif;font-size:2.2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.75rem;line-height:1.2;">I 105 lavori più a rischio AI in Italia</h1>
        <p data-i18n="cla_subtitle" style="color:var(--text-secondary);font-size:1rem;line-height:1.6;max-width:620px;">Classifica completa delle professioni italiane per rischio di sostituzione da parte dell'intelligenza artificiale. Clicca su una professione per l'analisi dettagliata.</p>
      </div>

      <!-- Filtri categoria -->
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.5rem;" id="filterBtns">
        <button class="filter-btn active" data-i18n="cla_filter_all" onclick="filterCat(this,'')">Tutte</button>
        ${Object.keys(CATEGORIES).map(c => `<button class="filter-btn" onclick="filterCat(this,'${esc(c)}')">${esc(c)}</button>`).join('')}
      </div>

      <!-- Search -->
      <div style="margin-bottom:1.25rem;">
        <input type="search" id="searchBox" placeholder="🔍 Cerca professione..." data-i18n-placeholder="cla_search_placeholder" oninput="filterSearch(this.value)" style="width:100%;padding:0.65rem 1rem;border:1px solid var(--border);border-radius:10px;font-size:0.92rem;outline:none;box-sizing:border-box;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'">
      </div>

      <!-- Tabella -->
      <div style="background:white;border:1px solid var(--border);border-radius:16px;overflow:hidden;">
        <table id="jobTable">
          <thead>
            <tr>
              <th style="width:36px;">#</th>
              <th data-i18n="cla_col_profession">Professione</th>
              <th class="hide-mobile" data-i18n="cla_col_category">Categoria</th>
              <th data-i18n="cla_col_risk">Rischio AI</th>
              <th class="hide-mobile" data-i18n="cla_col_year">Anno critico</th>
            </tr>
          </thead>
          <tbody id="jobTableBody">
            ${rows}
          </tbody>
        </table>
      </div>

      <p style="text-align:center;color:var(--text-secondary);font-size:0.82rem;margin-top:1rem;" id="rowCount">105 <span data-i18n="cla_count_suffix">professioni</span></p>

      <!-- CTA -->
      <div style="text-align:center;margin:3rem 0 1rem;">
        <p data-i18n="cla_cta_sub" style="color:var(--text-secondary);margin-bottom:1.25rem;">Vuoi sapere quanto sei personalmente a rischio?</p>
        <a href="/calcolatore.html" data-i18n="cla_cta_btn1" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:white;padding:1rem 2rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;display:inline-block;margin:0.5rem;transition:transform 0.15s,box-shadow 0.15s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px -8px rgba(99,102,241,0.5)'" onmouseout="this.style.transform='';this.style.boxShadow=''">🎯 Calcola il tuo rischio personale</a>
        <a href="/cv-analyzer.html" data-i18n="cla_cta_btn2" style="background:white;color:var(--primary);border:2px solid var(--primary);padding:0.9rem 1.8rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.95rem;display:inline-block;margin:0.5rem;" onmouseover="this.style.background='var(--primary)';this.style.color='white'" onmouseout="this.style.background='white';this.style.color='var(--primary)'">📄 Analizza il tuo CV</a>
      </div>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p data-i18n="cla_footer" class="footer-text">JobRiskAI · Analisi gratuita del rischio AI per 105 professioni</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI</p>
    </div>
  </footer>

  <script>
    let currentCat = '';
    function filterCat(btn, cat) {
      currentCat = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    }
    function filterSearch(q) { applyFilters(q); }
    function applyFilters(q) {
      q = (q || document.getElementById('searchBox').value).toLowerCase();
      let count = 0;
      document.querySelectorAll('#jobTableBody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        const catCell = row.cells[2]?.textContent || '';
        const matchCat = !currentCat || catCell === currentCat;
        const matchQ   = !q || text.includes(q);
        row.style.display = matchCat && matchQ ? '' : 'none';
        if (matchCat && matchQ) count++;
      });
      const suffix = (window.getT && window.getT().cla_count_suffix) || 'professioni';
      document.getElementById('rowCount').textContent = count + ' ' + suffix;
    }
  </script>
  <script src="/cookie-consent.js"></script>
  <script type="module" src="/page-i18n.js"></script>
</body>
</html>`;
}

// ── Main ───────────────────────────────────────────────────
const outDir = join(ROOT, 'public/professione');
mkdirSync(outDir, { recursive: true });

let generated = 0;
const urls = [];

for (const key of Object.keys(jobData)) {
  const html = buildProfessionPage(key);
  if (!html) { console.warn(`Skip ${key} (no data)`); continue; }
  const sl   = slug(key);
  writeFileSync(join(outDir, `${sl}.html`), html, 'utf8');
  urls.push(`https://www.jobriskai.it/professione/${sl}`);
  generated++;
}

writeFileSync(join(ROOT, 'public/classifica.html'), buildClassificaPage(), 'utf8');
urls.push('https://www.jobriskai.it/classifica.html');

// Scrivi urls.json per il sitemap
writeFileSync(join(ROOT, 'scripts/generated-urls.json'), JSON.stringify(urls, null, 2), 'utf8');

console.log(`✅ Generati ${generated} pagine professione + classifica.html`);
console.log(`📝 URL salvati in scripts/generated-urls.json`);
