// scripts/build-country-pages.mjs
// Genera pagine SEO per paese: /rischio-ai-lavoro-[paese].html
// Eseguire con: node scripts/build-country-pages.mjs

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Estrai jobData da jobs.js
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
  return Function(`"use strict"; return (${objText})`)();
}

const jobsText = readFileSync(join(ROOT, 'public/jobs.js'), 'utf8');
const jobData  = extractExport(jobsText, 'jobData');

// ── Dati paese ─────────────────────────────────────────────
const COUNTRIES = [
  {
    slug: 'germania',
    code: 'de',
    flag: '🇩🇪',
    name: 'Germania',
    localName: 'Deutschland',
    langCode: 'de',
    salaryMultiplier: 1.55,
    aiAdoptionIndex: 1.10,
    criticalYearOffset: -1,
    currency: '€',
    description: 'La Germania è tra i paesi europei con la più alta adozione AI nel settore manifatturiero (Industrie 4.0). Gli stipendi sono mediamente il 55% più alti rispetto all\'Italia, ma l\'automazione avanza più velocemente — l\'anno critico arriva circa 1 anno prima.',
    keyFacts: [
      'Stipendi white-collar: +55% vs Italia (fonte: Eurostat 2024)',
      'Adozione AI: 10% più rapida vs media EU (fonte: McKinsey 2026)',
      'Settori più a rischio: manifatturiero, logistica, contabilità',
      'Settori più protetti: ingegneria specializzata, sanità, artigianato di precisione',
      'Normativa: EU AI Act + BDSG (protezione dati), adozione AI più regolamentata',
    ],
    seoTitle: 'Rischio AI nel Lavoro in Germania 2026 | JobRiskAI',
    metaDesc: 'Come l\'AI impatta il lavoro in Germania? Confronta stipendi, anno critico e rischio automazione per 235 professioni adattati al mercato tedesco 2026.',
    topAtRisk: ['data_entry','traduttore','contabile','credit_collector','customer_service','magazziniere'],
    topSafe:   ['chirurgo','ingegnere_civile','infermiere','insegnante','idraulico','elettricista'],
  },
  {
    slug: 'spagna',
    code: 'es',
    flag: '🇪🇸',
    name: 'Spagna',
    localName: 'España',
    langCode: 'es',
    salaryMultiplier: 0.85,
    aiAdoptionIndex: 0.80,
    criticalYearOffset: 1,
    currency: '€',
    description: 'La Spagna ha stipendi mediamente più bassi rispetto all\'Italia (-15%) e un\'adozione AI più lenta. Questo ritardo non protegge: significa solo che la disruption arriverà con 1-2 anni di ritardo rispetto ai mercati più avanzati.',
    keyFacts: [
      'Stipendi white-collar: -15% vs Italia (fonte: Eurostat 2024)',
      'Adozione AI: 20% più lenta vs media EU (fonte: OECD AI Outlook 2025)',
      'Settori più a rischio: turismo/hospitality, customer service, amministrazione',
      'Settori più protetti: sanità, artigianato, formazione professionale',
      'Normativa: EU AI Act in implementazione; AEPD più restrittiva sui dati',
    ],
    seoTitle: 'Rischio AI nel Lavoro in Spagna 2026 | JobRiskAI',
    metaDesc: 'Come l\'AI impatta il lavoro in Spagna? Rischio automazione, stipendi adattati e anno critico per 235 professioni nel mercato spagnolo 2026.',
    topAtRisk: ['traduttore','customer_service','contabile','data_entry','receptionist','copywriter'],
    topSafe:   ['infermiere','chirurgo','insegnante','idraulico','chef','psicologo'],
  },
  {
    slug: 'francia',
    code: 'fr',
    flag: '🇫🇷',
    name: 'Francia',
    localName: 'France',
    langCode: 'fr',
    salaryMultiplier: 1.25,
    aiAdoptionIndex: 0.95,
    criticalYearOffset: 0,
    currency: '€',
    description: 'La Francia ha un\'adozione AI vicina alla media europea (+25% sugli stipendi vs Italia) e una normativa molto attiva sulla privacy (CNIL). L\'anno critico è simile all\'Italia, con un mercato del lavoro storicamente più protetto dalle riforme.',
    keyFacts: [
      'Stipendi white-collar: +25% vs Italia (fonte: INSEE / Eurostat 2024)',
      'Adozione AI: in linea con media EU, ma settore pubblico più cauto',
      'Settori più a rischio: amministrazione pubblica, servizi legali standardizzati, logistica',
      'Settori più protetti: arte, cucina gourmet, artigianato di lusso, sanità',
      'Normativa: CNIL tra le più severe in EU; Grande piano AI nazionale (2025)',
    ],
    seoTitle: 'Rischio AI nel Lavoro in Francia 2026 | JobRiskAI',
    metaDesc: 'Come l\'AI impatta il lavoro in Francia? Analisi del rischio automazione per 235 professioni adattata al mercato francese con stipendi e anno critico 2026.',
    topAtRisk: ['traduttore','contabile','data_entry','paralegal','customer_service','magazziniere'],
    topSafe:   ['chirurgo','chef','psicologo','insegnante','notaio','infermiere'],
  },
  {
    slug: 'regno-unito',
    code: 'gb',
    flag: '🇬🇧',
    name: 'Regno Unito',
    localName: 'United Kingdom',
    langCode: 'en',
    salaryMultiplier: 1.45,
    aiAdoptionIndex: 1.15,
    criticalYearOffset: -1,
    currency: '£',
    description: 'Il Regno Unito è uno dei mercati più avanzati nell\'adozione AI in Europa, con un forte ecosistema fintech e startup AI a Londra. Gli stipendi sono il 45% più alti rispetto all\'Italia e l\'anno critico arriva circa 1 anno prima.',
    keyFacts: [
      'Stipendi white-collar: +45% vs Italia (fonte: ONS / Glassdoor UK 2024)',
      'Adozione AI: 15% più rapida vs media EU (fonte: Stanford AI Index 2026)',
      'Settori più a rischio: servizi legali, finanza tradizionale, customer service, editoria',
      'Settori più protetti: sanità NHS (vincoli normativi), artigianato, educazione pubblica',
      'Normativa: ICO + nuovo AI Regulation Act (2025); post-Brexit più flessibile dell\'EU AI Act',
    ],
    seoTitle: 'Rischio AI nel Lavoro nel Regno Unito 2026 | JobRiskAI',
    metaDesc: 'Come l\'AI impatta il lavoro nel Regno Unito? Rischio automazione, stipendi in sterline e anno critico per 235 professioni nel mercato UK 2026.',
    topAtRisk: ['paralegal','traduttore','data_entry','customer_service','contabile','copywriter'],
    topSafe:   ['chirurgo','infermiere','ingegnere_civile','psicologo','idraulico','chef'],
  },
  {
    slug: 'stati-uniti',
    code: 'us',
    flag: '🇺🇸',
    name: 'Stati Uniti',
    localName: 'United States',
    langCode: 'en',
    salaryMultiplier: 2.55,
    aiAdoptionIndex: 1.35,
    criticalYearOffset: -2,
    currency: '$',
    description: 'Gli USA sono l\'epicentro globale dell\'AI (OpenAI, Google, Meta, Anthropic). Gli stipendi tech sono 2,5x quelli italiani ma la disruption arriva 2 anni prima. Il "punto critico" per molte professioni è già iniziato nei mercati americani.',
    keyFacts: [
      'Stipendi white-collar: +155% vs Italia (fonte: BLS / Glassdoor US 2024)',
      'Adozione AI: 35% più rapida vs media EU — la più alta tra i paesi analizzati',
      'Settori più a rischio: legale (contrattualistica), contabilità, customer service, giornalismo',
      'Settori più protetti: sanità (FDA), artigianato specializzato, educazione K-12',
      'Normativa: meno regolamentata rispetto all\'EU AI Act; EO on AI (2023) solo linee guida',
    ],
    seoTitle: 'Rischio AI nel Lavoro negli Stati Uniti 2026 | JobRiskAI',
    metaDesc: 'Come l\'AI impatta il lavoro negli USA? Analisi del rischio automazione per 235 professioni adattata al mercato americano con stipendi in dollari 2026.',
    topAtRisk: ['paralegal','traduttore','data_entry','customer_service','contabile','giornalista'],
    topSafe:   ['chirurgo','infermiere','insegnante','idraulico','psicologo','elettricista'],
  },
];

// ── Template HTML ───────────────────────────────────────────
function buildPage(country) {
  const { salaryMultiplier, aiAdoptionIndex, criticalYearOffset, currency } = country;

  // Top 10 professioni per rischio (adattate al paese)
  const allJobs = Object.entries(jobData);
  const sortedByRisk = [...allJobs].sort((a,b) => b[1].riskFactor - a[1].riskFactor);
  const top10Risk = sortedByRisk.slice(0, 10);
  const top5Safe  = [...allJobs].sort((a,b) => a[1].riskFactor - b[1].riskFactor).slice(0, 5);

  function fmtSalary(base) {
    const adjusted = Math.round((base || 40000) * salaryMultiplier / 1000) * 1000;
    return currency + adjusted.toLocaleString('it-IT');
  }

  function fmtYear(base) {
    const y = (base || 2028) + criticalYearOffset;
    return y;
  }

  const top10Rows = top10Risk.map(([slug, j]) => {
    const risk = Math.round(j.riskFactor * 100);
    const badgeColor = risk >= 70 ? '#ef4444' : risk >= 40 ? '#f59e0b' : '#10b981';
    return `<tr>
      <td><a href="/professione/${slug}" style="color:#818cf8; text-decoration:none;">${j.icon || ''} ${j.title}</a></td>
      <td><span style="background:${badgeColor}22; color:${badgeColor}; padding:0.2rem 0.6rem; border-radius:999px; font-weight:700; font-size:0.85rem;">${risk}%</span></td>
      <td style="color:#94a3b8;">${fmtYear(j.targetYear)}</td>
      <td style="color:#94a3b8;">${fmtSalary(j.defaultHumanSalary)}</td>
    </tr>`;
  }).join('');

  const top5SafeRows = top5Safe.map(([slug, j]) => {
    const risk = Math.round(j.riskFactor * 100);
    return `<tr>
      <td><a href="/professione/${slug}" style="color:#818cf8; text-decoration:none;">${j.icon || ''} ${j.title}</a></td>
      <td><span style="background:#10b98122; color:#10b981; padding:0.2rem 0.6rem; border-radius:999px; font-weight:700; font-size:0.85rem;">${risk}%</span></td>
      <td style="color:#94a3b8;">${fmtYear(j.targetYear)}</td>
      <td style="color:#94a3b8;">${fmtSalary(j.defaultHumanSalary)}</td>
    </tr>`;
  }).join('');

  const keyFactsHtml = country.keyFacts.map(f => `<li>${f}</li>`).join('');

  const topAtRiskProf = country.topAtRisk
    .filter(s => jobData[s])
    .map(s => `<a href="/professione/${s}" style="display:inline-block; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.25); color:#fca5a5; padding:0.4rem 0.85rem; border-radius:999px; font-size:0.85rem; text-decoration:none; margin:0.25rem;">${jobData[s].icon || ''} ${jobData[s].title}</a>`)
    .join('');

  const topSafeProf = country.topSafe
    .filter(s => jobData[s])
    .map(s => `<a href="/professione/${s}" style="display:inline-block; background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.25); color:#6ee7b7; padding:0.4rem 0.85rem; border-radius:999px; font-size:0.85rem; text-decoration:none; margin:0.25rem;">${jobData[s].icon || ''} ${jobData[s].title}</a>`)
    .join('');

  const avgRisk = Math.round(allJobs.reduce((s,[,j]) => s + j.riskFactor, 0) / allJobs.length * 100);
  const avgRiskCountry = Math.round(avgRisk * (0.85 + aiAdoptionIndex * 0.18));

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${country.seoTitle}</title>
  <meta name="description" content="${country.metaDesc}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://jobriskai.it/rischio-ai-lavoro-${country.slug}">
  <link rel="alternate" hreflang="it" href="https://jobriskai.it/rischio-ai-lavoro-${country.slug}">
  <link rel="alternate" hreflang="x-default" href="https://jobriskai.it/rischio-ai-lavoro-${country.slug}">
  <link rel="alternate" type="text/plain" href="/llms.txt">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${country.seoTitle}">
  <meta property="og:description" content="${country.metaDesc}">
  <meta property="og:url" content="https://jobriskai.it/rischio-ai-lavoro-${country.slug}">
  <meta property="og:site_name" content="JobRiskAI">

  <!-- Citation / DC -->
  <meta name="citation_title" content="Rischio AI nel Lavoro in ${country.name} 2026 — JobRiskAI">
  <meta name="citation_author" content="Team JobRiskAI">
  <meta name="citation_publication_date" content="2026-07-29">
  <meta name="citation_online_date" content="2026-07-29">
  <meta name="citation_language" content="it">
  <meta name="dc.title" content="Rischio AI nel Lavoro in ${country.name} 2026 — JobRiskAI">
  <meta name="dc.creator" content="Team JobRiskAI">
  <meta name="dc.subject" content="rischio AI, automazione lavoro, ${country.name.toLowerCase()}, futuro del lavoro">
  <meta name="dc.date" content="2026-07-29">
  <meta name="dc.type" content="Article">
  <meta name="dc.identifier" content="https://jobriskai.it/rischio-ai-lavoro-${country.slug}">
  <meta name="dc.language" content="it">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rischio AI nel Lavoro in ${country.name} 2026",
    "description": "${country.metaDesc}",
    "url": "https://jobriskai.it/rischio-ai-lavoro-${country.slug}",
    "datePublished": "2026-07-29",
    "dateModified": "2026-07-29",
    "inLanguage": "it",
    "author": {"@type": "Organization", "name": "JobRiskAI", "url": "https://jobriskai.it"},
    "publisher": {"@type": "Organization", "name": "JobRiskAI", "url": "https://jobriskai.it"},
    "about": {
      "@type": "Country",
      "name": "${country.name}",
      "alternateName": "${country.localName}"
    },
    "isPartOf": {"@type": "WebSite", "name": "JobRiskAI", "url": "https://jobriskai.it"}
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://jobriskai.it/"},
      {"@type": "ListItem", "position": 2, "name": "Rischio AI per Paese", "item": "https://jobriskai.it/dati"},
      {"@type": "ListItem", "position": 3, "name": "${country.name}", "item": "https://jobriskai.it/rischio-ai-lavoro-${country.slug}"}
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quali professioni sono più a rischio AI in ${country.name}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In ${country.name}, le professioni più a rischio AI sono quelle con task altamente standardizzabili: data entry, traduttore, customer service, contabile e paralegal. Con un indice di adozione AI del ${Math.round(aiAdoptionIndex * 100)}% rispetto alla media italiana, l'anno critico arriva circa ${Math.abs(criticalYearOffset)} ${criticalYearOffset <= 0 ? 'anni prima' : 'anni dopo'} rispetto all'Italia."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto guadagna un professionista in ${country.name} rispetto all'Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In ${country.name} gli stipendi white-collar sono mediamente ${salaryMultiplier >= 1 ? '+' : ''}${Math.round((salaryMultiplier - 1) * 100)}% rispetto all'Italia (fonte: Eurostat 2024). Per esempio, un contabile che guadagna €40.000 lordi in Italia guadagnerebbe circa ${fmtSalary(40000)} in ${country.name}."
        }
      },
      {
        "@type": "Question",
        "name": "L'AI sostituirà i lavori in ${country.name} prima o dopo che in Italia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${criticalYearOffset < 0 ? `In ${country.name} la disruption AI arriva mediamente ${Math.abs(criticalYearOffset)} anni prima rispetto all'Italia, grazie a un ecosistema AI più maturo e maggiori investimenti.` : criticalYearOffset > 0 ? `In ${country.name} la disruption AI arriva mediamente ${criticalYearOffset} anni dopo rispetto all'Italia, a causa di una minore adozione AI e stipendi più contenuti che rallentano il ROI dell'automazione.` : `In ${country.name} la timeline di disruption AI è simile a quella italiana, con un anno critico equivalente per la maggior parte delle professioni.`}"
        }
      }
    ]
  }
  </script>

  <style>
    :root {
      --bg: #0f0f1a; --surface: rgba(255,255,255,0.04);
      --border: rgba(255,255,255,0.1); --border-accent: rgba(99,102,241,0.35);
      --text: #f1f5f9; --text-2: #94a3b8; --text-3: #64748b;
      --indigo: #6366f1; --indigo-lt: #818cf8;
      --green: #10b981; --red: #ef4444; --amber: #f59e0b;
      --radius: 16px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }

    nav.topnav { position: sticky; top: 0; z-index: 50; background: rgba(15,15,26,0.93); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); padding: 0.9rem 1.5rem; }
    .topnav-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .topnav-logo { font-weight: 700; font-size: 1.05rem; background: linear-gradient(135deg,#818cf8,#3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-decoration: none; }
    .topnav-links { display: flex; align-items: center; gap: 0.25rem; flex-wrap: wrap; }
    .topnav-links a { color: var(--text-2); text-decoration: none; font-size: 0.85rem; padding: 0.35rem 0.75rem; border-radius: 999px; transition: background 0.15s, color 0.15s; }
    .topnav-links a:hover { background: var(--surface); color: var(--text); }
    @media(max-width:640px){.topnav-links{display:none;}}

    .hero { max-width: 820px; margin: 0 auto; padding: 4rem 1.5rem 2.5rem; text-align: center; }
    .hero-badge { display: inline-block; background: rgba(99,102,241,0.15); color: var(--indigo-lt); border: 1px solid rgba(99,102,241,0.3); border-radius: 999px; padding: 0.35rem 1rem; font-size: 0.82rem; font-weight: 600; margin-bottom: 1.25rem; }
    .hero h1 { font-size: clamp(1.9rem,5vw,2.8rem); font-weight: 800; line-height: 1.2; margin-bottom: 1rem; }
    .hero h1 em { font-style: normal; background: linear-gradient(135deg,#818cf8,#3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .hero-lead { color: var(--text-2); font-size: 1.05rem; max-width: 640px; margin: 0 auto 2rem; }

    .stats-bar { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 3rem; padding: 0 1.5rem; }
    .stat-pill { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1.5rem; text-align: center; min-width: 140px; }
    .stat-pill .num { font-size: 1.6rem; font-weight: 800; line-height: 1; }
    .stat-pill .lbl { font-size: 0.78rem; color: var(--text-2); margin-top: 0.3rem; }

    .section { max-width: 900px; margin: 0 auto 3.5rem; padding: 0 1.25rem; }
    .section h2 { font-size: 1.4rem; font-weight: 700; margin-bottom: 1.25rem; }
    .section p { color: var(--text-2); line-height: 1.75; margin-bottom: 1rem; }

    .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 1.25rem; }
    .card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem; }

    ul.facts { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
    ul.facts li { display: flex; align-items: flex-start; gap: 0.6rem; color: var(--text-2); font-size: 0.92rem; }
    ul.facts li::before { content: '→'; color: var(--indigo-lt); flex-shrink: 0; margin-top: 0.05rem; }

    .table-wrap { overflow-x: auto; border-radius: var(--radius); border: 1px solid var(--border); }
    table.rtable { width: 100%; border-collapse: collapse; }
    .rtable th, .rtable td { padding: 0.85rem 1.1rem; text-align: left; border-bottom: 1px solid var(--border); font-size: 0.88rem; }
    .rtable th { color: var(--text-3); font-weight: 600; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em; background: rgba(255,255,255,0.02); }
    .rtable tr:last-child td { border-bottom: none; }
    .rtable tr:hover td { background: rgba(255,255,255,0.02); }

    .cta-box { background: rgba(99,102,241,0.08); border: 1.5px solid rgba(99,102,241,0.25); border-radius: var(--radius); padding: 2rem; text-align: center; margin-bottom: 3.5rem; }
    .cta-box h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
    .cta-box p { color: var(--text-2); margin-bottom: 1.5rem; }
    .cta-btn { display: inline-block; background: var(--indigo); color: #fff; border-radius: 10px; padding: 0.75rem 1.75rem; text-decoration: none; font-weight: 700; font-size: 0.95rem; transition: background 0.15s; margin: 0.25rem; }
    .cta-btn:hover { background: var(--indigo-lt); }
    .cta-btn.secondary { background: transparent; border: 1.5px solid var(--indigo); color: var(--indigo-lt); }

    .country-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
    .country-link { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--text-2); text-decoration: none; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 0.4rem 0.85rem; font-size: 0.85rem; transition: border-color 0.15s, color 0.15s; }
    .country-link:hover { border-color: var(--indigo); color: var(--text); }

    footer { border-top: 1px solid var(--border); padding: 2rem 1.5rem; text-align: center; }
    .footer-inner { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
    .footer-logo { font-weight: 700; background: linear-gradient(135deg,#818cf8,#3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1.25rem; }
    .footer-links a { color: var(--text-2); text-decoration: none; font-size: 0.82rem; transition: color 0.15s; }
    .footer-links a:hover { color: var(--text); }
    .footer-copy { font-size: 0.78rem; color: var(--text-3); }
  </style>
</head>
<body>

<nav class="topnav">
  <div class="topnav-inner">
    <a href="/" class="topnav-logo">JobRiskAI</a>
    <div class="topnav-links">
      <a href="/classifica">Classifica</a>
      <a href="/calcolatore">Calcolatore</a>
      <a href="/confronta">Confronta</a>
      <a href="/dati">Dati</a>
      <a href="/blog">Blog</a>
      <a href="/chi-siamo">Chi Siamo</a>
    </div>
  </div>
</nav>

<header class="hero">
  <div class="hero-badge">${country.flag} Analisi per Paese · ${country.name} 2026</div>
  <h1>Rischio AI nel Lavoro<br>in <em>${country.name}</em></h1>
  <p class="hero-lead">${country.description}</p>
</header>

<!-- STATS -->
<div class="stats-bar" aria-label="Statistiche chiave ${country.name}">
  <div class="stat-pill">
    <div class="num" style="color:#818cf8;">${salaryMultiplier >= 1 ? '+' : ''}${Math.round((salaryMultiplier - 1) * 100)}%</div>
    <div class="lbl">Stipendi vs Italia</div>
  </div>
  <div class="stat-pill">
    <div class="num" style="color:${criticalYearOffset < 0 ? '#ef4444' : '#10b981'};">${criticalYearOffset < 0 ? criticalYearOffset : '+' + criticalYearOffset} anni</div>
    <div class="lbl">Anno critico vs IT</div>
  </div>
  <div class="stat-pill">
    <div class="num" style="color:#f59e0b;">${Math.round(aiAdoptionIndex * 100)}%</div>
    <div class="lbl">Indice adozione AI</div>
  </div>
  <div class="stat-pill">
    <div class="num" style="color:#94a3b8;">235</div>
    <div class="lbl">Professioni analizzate</div>
  </div>
</div>

<main>

  <!-- DATI CHIAVE -->
  <section class="section">
    <div class="card">
      <h3>📊 Dati chiave sul mercato del lavoro in ${country.name}</h3>
      <ul class="facts">${keyFactsHtml}</ul>
    </div>
  </section>

  <!-- PROFESSIONI PIÙ A RISCHIO -->
  <section class="section">
    <h2>🔴 Professioni più a rischio AI in ${country.name}</h2>
    <p>Le professioni con il rischio di automazione più alto, con stipendi e anno critico adattati al mercato ${country.name.toLowerCase()}.</p>
    <div class="table-wrap">
      <table class="rtable" aria-label="Top 10 professioni a rischio AI in ${country.name}">
        <thead>
          <tr>
            <th>Professione</th>
            <th>Rischio AI</th>
            <th>Anno critico in ${country.name}</th>
            <th>Stipendio lordo/anno</th>
          </tr>
        </thead>
        <tbody>${top10Rows}</tbody>
      </table>
    </div>
  </section>

  <!-- PROFESSIONI PIÙ SICURE -->
  <section class="section">
    <h2>🟢 Professioni più protette dall'AI in ${country.name}</h2>
    <p>Le professioni con il rischio di automazione più basso, che richiedono presenza fisica, empatia o creatività difficili da replicare.</p>
    <div class="table-wrap">
      <table class="rtable" aria-label="Top 5 professioni sicure in ${country.name}">
        <thead>
          <tr>
            <th>Professione</th>
            <th>Rischio AI</th>
            <th>Anno critico</th>
            <th>Stipendio lordo/anno</th>
          </tr>
        </thead>
        <tbody>${top5SafeRows}</tbody>
      </table>
    </div>
  </section>

  <!-- SPOTLIGHT -->
  <section class="section">
    <h2>🔍 Professioni da tenere d'occhio in ${country.name}</h2>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
      <div class="card">
        <h3 style="color:#fca5a5;">🔴 Più a rischio</h3>
        <div style="margin-top:0.75rem;">${topAtRiskProf}</div>
      </div>
      <div class="card">
        <h3 style="color:#6ee7b7;">🟢 Più protette</h3>
        <div style="margin-top:0.75rem;">${topSafeProf}</div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="section">
    <div class="cta-box">
      <h2>Calcola il tuo rischio AI in ${country.name}</h2>
      <p>Usa il calcolatore gratuito per vedere il tuo rischio personale con stipendi adattati al mercato ${country.name.toLowerCase()}. Puoi selezionare il paese direttamente nel calcolatore.</p>
      <a href="/calcolatore" class="cta-btn">Vai al Calcolatore →</a>
      <a href="/confronta" class="cta-btn secondary">Confronta Professioni</a>
    </div>
  </div>

  <!-- ALTRI PAESI -->
  <section class="section">
    <h2>🌍 Analisi per altri paesi</h2>
    <p>Confronta il rischio AI del lavoro in altri mercati europei e internazionali.</p>
    <div class="country-grid">
      <a href="/rischio-ai-lavoro-germania" class="country-link">🇩🇪 Germania</a>
      <a href="/rischio-ai-lavoro-spagna" class="country-link">🇪🇸 Spagna</a>
      <a href="/rischio-ai-lavoro-francia" class="country-link">🇫🇷 Francia</a>
      <a href="/rischio-ai-lavoro-regno-unito" class="country-link">🇬🇧 Regno Unito</a>
      <a href="/rischio-ai-lavoro-stati-uniti" class="country-link">🇺🇸 Stati Uniti</a>
    </div>
  </section>

</main>

<footer>
  <div class="footer-inner">
    <div class="footer-logo">JobRiskAI</div>
    <nav class="footer-links">
      <a href="/">Home</a>
      <a href="/classifica">Classifica</a>
      <a href="/calcolatore">Calcolatore</a>
      <a href="/confronta">Confronta</a>
      <a href="/dati">Dati</a>
      <a href="/blog">Blog</a>
      <a href="/glossario">Glossario</a>
      <a href="/metodologia">Metodologia</a>
      <a href="/chi-siamo">Chi Siamo</a>
      <a href="/privacy-policy">Privacy</a>
    </nav>
    <p class="footer-copy">© 2026 JobRiskAI · Dati aggiornati al 2026 · Fonti: Eurostat, McKinsey, Stanford AI Index</p>
  </div>
</footer>

</body>
</html>`;
}

// ── Genera le pagine ────────────────────────────────────────
let count = 0;
for (const country of COUNTRIES) {
  const html = buildPage(country);
  const outPath = join(ROOT, 'public', `rischio-ai-lavoro-${country.slug}.html`);
  writeFileSync(outPath, html, 'utf8');
  console.log(`✅ Generata: /rischio-ai-lavoro-${country.slug}`);
  count++;
}
console.log(`\n🌍 ${count} pagine paese generate con successo.`);
