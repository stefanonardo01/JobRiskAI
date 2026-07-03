// scripts/build-seo-pages.mjs
// Genera pagine SEO per ~70 professioni aggiuntive (non nel calcolatore principale).
// Output: public/professione/[slug].html — stessa directory delle 105 pagine esistenti.
// Eseguire con: node scripts/build-seo-pages.mjs

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { seoProfessions } from './professions-seo-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const outDir    = join(ROOT, 'public/professione');

// ── Slug delle 105 professioni già esistenti (non sovrascrivere) ──────────────
const EXISTING_SLUGS = new Set([
  'ai-engineer','ai-director','data-engineer','backend-developer','frontend-developer',
  'fullstack-developer','cloud-engineer','cloud-consultant','soc-analyst','cyber-security-engineer',
  'data-scientist','devops-engineer','solutions-consultant','scrum-master','it-project-manager',
  'ml-engineer','product-owner','sysadmin','qa-engineer','network-engineer','it-consultant',
  'developer','bdr','sdr','account-manager','key-account-manager','sales-manager',
  'technical-sales','customer-success-manager','store-manager','digital-marketing-specialist',
  'seo-specialist','growth-hacker','content-creator','brand-manager','ecommerce-manager',
  'contabile','copywriter','social-media','customer-service','hr-manager','data-analyst',
  'insegnante','grafico','traduttore','ux-ui-designer','video-editor','art-director',
  'fotografo','illustratore','sound-designer','docente-universitario','formatore-aziendale',
  'instructional-designer','tutor-online','dirigente-scolastico','educatore-infanzia',
  'product-owner','sysadmin','qa-engineer','network-engineer','it-consultant',
  'sales-executive','sales-director','addetto-vendite','commerciale-estero','marketing-manager',
  'pr-specialist','cfo','auditor','credit-collector','office-manager','impiegato-amm','ceo',
  'executive-assistant','data-entry','cost-controller','project-planner','cost-estimator',
  'project-controller','project-manager','controller-gestione','tax-advisor',
  'management-consultant','financial-analyst','risk-manager','legal-counsel',
  'procurement-manager','supply-chain-specialist','process-engineer','logistics-manager',
  'operations-manager','production-planner','plant-manager','automation-engineer',
  'qa-manager','buyer','talent-acquisition','hr-generalist','hr-business-partner',
  'receptionist','paralegal','infermiere','sustainability-specialist','hse-specialist',
  'medical-science-liaison','clinical-research-associate','informatore-scientifico',
  'regulatory-affairs','rd-specialist',
]);

// ── Helpers ───────────────────────────────────────────────────────────────────
function esc(s) {
  return String(s ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

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

// ── Costruisci una pagina ─────────────────────────────────────────────────────
function buildPage(p) {
  const { slug, title, icon, category, risk, year, description, tasks, skills, related, survivalNote } = p;

  const taskRows = (tasks || []).map(t => `
    <div style="display:flex;align-items:center;gap:1rem;padding:0.7rem 0;border-bottom:1px solid var(--border);">
      <div style="flex:1;font-size:0.92rem;color:var(--text-primary);">${esc(t.name)}</div>
      <div style="display:flex;align-items:center;gap:0.5rem;flex-shrink:0;">
        <div style="width:80px;height:6px;background:var(--border);border-radius:999px;overflow:hidden;">
          <div style="width:${t.risk}%;height:100%;background:${t.risk>=70?'#ef4444':t.risk>=40?'#f59e0b':'#10b981'};border-radius:999px;"></div>
        </div>
        <span style="font-size:0.8rem;font-weight:600;color:${t.risk>=70?'#ef4444':t.risk>=40?'#d97706':'#059669'};min-width:32px;">${t.risk}%</span>
      </div>
    </div>`).join('');

  const skillItems = (skills || []).map(s =>
    `<li style="padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.92rem;color:var(--text-primary);line-height:1.5;">✅ ${esc(s)}</li>`
  ).join('');

  // Professioni correlate: prima cerca tra le SEO, poi tra le esistenti
  const relatedCards = (related || []).slice(0, 4).map(rslug => {
    const rSeo = seoProfessions.find(x => x.slug === rslug);
    if (rSeo) {
      return `<a href="/professione/${esc(rslug)}" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border:1px solid var(--border);border-radius:10px;text-decoration:none;color:var(--text-primary);background:white;transition:all 0.18s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">
        <span style="font-size:1.3rem;">${rSeo.icon||'💼'}</span>
        <div>
          <div style="font-size:0.88rem;font-weight:600;">${esc(rSeo.title)}</div>
          <div style="font-size:0.78rem;color:${riskColor(rSeo.risk)};">${rSeo.risk}% rischio</div>
        </div>
      </a>`;
    }
    // professione nel calcolatore — mostra senza dati di rischio
    const label = rslug.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
    return `<a href="/professione/${esc(rslug)}" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border:1px solid var(--border);border-radius:10px;text-decoration:none;color:var(--text-primary);background:white;transition:all 0.18s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">
      <span style="font-size:1.3rem;">💼</span>
      <div><div style="font-size:0.88rem;font-weight:600;">${esc(label)}</div></div>
    </a>`;
  }).join('');

  const faqItems = [
    {
      q: `Il ${title} sarà sostituito dall'intelligenza artificiale?`,
      a: `Secondo l'analisi di JobRiskAI, il ${title} ha un rischio di sostituzione AI del ${risk}%, con anno critico stimato ${year}. ${survivalNote ? survivalNote.charAt(0).toUpperCase()+survivalNote.slice(1)+'.' : ''} Il rischio dipende dalla capacità di sviluppare competenze non automatizzabili.`,
    },
    {
      q: `Quando l'AI sostituirà il ${title}?`,
      a: `L'anno critico stimato per il ${title} è il ${year}, quando i sistemi AI potrebbero svolgere la maggior parte dei task del ruolo in modo economicamente vantaggioso per le aziende. Questa stima si basa sui trend tecnologici attuali.`,
    },
    {
      q: `Come può un ${title} ridurre il rischio AI?`,
      a: skills && skills.length > 0
        ? `Per ridurre il rischio AI come ${title}: ${skills.slice(0,3).join('; ')}.`
        : `Il ${title} dovrebbe sviluppare competenze di giudizio strategico, relazione con clienti e specializzazione di dominio difficilmente automatizzabili.`,
    },
    {
      q: `Quali task del ${title} saranno automatizzati prima?`,
      a: tasks && tasks.length > 0
        ? `I task più a rischio per il ${title} sono: ${tasks.filter(t=>t.risk>=70).map(t=>t.name).slice(0,3).join(', ')||tasks[0].name}. I task meno automatizzabili: ${tasks.filter(t=>t.risk<30).map(t=>t.name).slice(0,2).join(', ')||'quelli che richiedono giudizio e relazione umana'}.`
        : `I task ripetitivi e basati su dati strutturati saranno automatizzati per primi. Quelli che richiedono giudizio, creatività e relazione umana resteranno prerogativa del ${title}.`,
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
      { '@type': 'ListItem', position: 2, name: 'Professioni a rischio AI', item: 'https://www.jobriskai.it/classifica' },
      { '@type': 'ListItem', position: 3, name: title, item: `https://www.jobriskai.it/professione/${slug}` },
    ],
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rischio AI ${esc(title)} ${year}: ${risk}% — Sarà Sostituito? | JobRiskAI</title>
  <meta name="description" content="Il ${esc(title)} sarà sostituito dall'AI? Rischio automazione ${risk}%, anno critico ${year}. Analisi dei task, competenze da sviluppare e piano di sopravvivenza. Gratuito su JobRiskAI.">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="https://www.jobriskai.it/professione/${slug}">
  <meta property="og:title" content="Rischio AI ${esc(title)}: ${risk}% | JobRiskAI">
  <meta property="og:description" content="Il ${esc(title)} sarà sostituito dall'AI? Rischio ${risk}%, anno critico ${year}. Piano di sopravvivenza gratuito.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.jobriskai.it/professione/${slug}">
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
    .prof-stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0; }
    .prof-stat { text-align: center; }
    .prof-stat-value { font-family: 'Space Grotesk', sans-serif; font-size: 1.8rem; font-weight: 700; }
    .prof-stat-label { font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.2rem; }
    .prof-cta { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; padding: 1rem 2rem; border-radius: 999px; text-decoration: none; font-weight: 700; font-size: 1rem; display: inline-block; margin: 0.5rem; transition: transform 0.15s, box-shadow 0.15s; }
    .prof-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px -8px rgba(99,102,241,0.5); }
    .prof-cta-ghost { background: white; color: var(--primary); border: 2px solid var(--primary); padding: 0.9rem 1.8rem; border-radius: 999px; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-block; margin: 0.5rem; transition: all 0.15s; }
    .prof-cta-ghost:hover { background: var(--primary); color: white; }
    .prof-related { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
    .faq-item { padding: 1rem 0; border-bottom: 1px solid var(--border); }
    .faq-q { font-weight: 600; font-size: 0.93rem; color: var(--text-primary); margin-bottom: 0.4rem; }
    .faq-a { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }
    @media (max-width: 480px) {
      .prof-score { font-size: 2.8rem; }
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
      <div class="header-info">Rischio AI — ${esc(title)}</div>
      <a href="/classifica" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">📊 Tutte le professioni</a>
    </div>
  </header>

  <main role="main">
    <div class="prof-shell">

      <!-- Breadcrumb -->
      <nav style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:1.5rem;">
        <a href="/" style="color:var(--text-secondary);text-decoration:none;">JobRiskAI</a>
        <span style="margin:0 0.4rem;">›</span>
        <a href="/classifica" style="color:var(--text-secondary);text-decoration:none;">Professioni</a>
        <span style="margin:0 0.4rem;">›</span>
        <span style="color:var(--text-primary);font-weight:500;">${esc(title)}</span>
      </nav>

      <!-- Hero -->
      <div class="prof-hero">
        <div style="font-size:2.5rem;margin-bottom:0.75rem;">${icon || '💼'}</div>
        <h1 style="font-family:'Space Grotesk',sans-serif;font-size:1.9rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;line-height:1.2;">
          Il ${esc(title)} sarà sostituito dall'AI?
        </h1>
        <p style="color:var(--text-secondary);font-size:0.95rem;margin-bottom:1.5rem;">${esc(description || '')}</p>

        <div class="prof-stat-grid">
          <div class="prof-stat">
            <div class="prof-stat-value" style="color:${riskColor(risk)};">${risk}%</div>
            <div class="prof-stat-label">Rischio AI</div>
          </div>
          <div class="prof-stat">
            <div class="prof-stat-value" style="color:var(--text-primary);">${year}</div>
            <div class="prof-stat-label">Anno critico</div>
          </div>
        </div>

        <div style="display:inline-block;padding:0.5rem 1.2rem;border-radius:999px;font-weight:700;font-size:0.9rem;background:${riskColor(risk)}22;color:${riskColor(risk)};border:1px solid ${riskColor(risk)}44;margin-bottom:1.5rem;">
          ${riskLabel(risk)}
        </div>

        ${survivalNote ? `<p style="color:var(--text-secondary);font-size:0.88rem;font-style:italic;max-width:520px;margin:0 auto;">💡 ${esc(survivalNote.charAt(0).toUpperCase()+survivalNote.slice(1))}.</p>` : ''}
      </div>

      <!-- Analisi task -->
      ${taskRows ? `
      <div class="prof-card">
        <h2>📋 Analisi dei task — cosa automatizzerà l'AI</h2>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.75rem;">Ogni task è valutato per probabilità di automazione. Sopra il 70% = già in corso o imminente.</p>
        ${taskRows}
      </div>` : ''}

      <!-- Piano di sopravvivenza -->
      ${skillItems ? `
      <div class="prof-card" style="border-left:3px solid var(--success);">
        <h2>🛡️ Piano di sopravvivenza per il ${esc(title)}</h2>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.75rem;">Competenze da sviluppare per restare rilevante nell'era AI:</p>
        <ul style="list-style:none;padding:0;margin:0;">${skillItems}</ul>
      </div>` : ''}

      <!-- CTA calcolatore -->
      <div style="background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(59,130,246,0.04));border:1px solid rgba(99,102,241,0.2);border-radius:16px;padding:2rem;text-align:center;margin-bottom:1.5rem;">
        <p style="font-weight:600;color:var(--text-primary);margin-bottom:0.5rem;font-size:1.05rem;">Hai il lavoro di ${esc(title)}?</p>
        <p style="color:var(--text-secondary);margin-bottom:1.5rem;font-size:0.92rem;">Calcola il rischio personalizzato con il tuo stipendio reale — scopri quando l'AI diventerà più conveniente della tua figura professionale.</p>
        <a href="/calcolatore" class="prof-cta">🎯 Calcola il tuo rischio personalizzato</a>
        <a href="/cv-analyzer" class="prof-cta-ghost">📄 Analizza il tuo CV</a>
      </div>

      <!-- Professioni correlate -->
      ${relatedCards ? `
      <div class="prof-card">
        <h2>🔗 Professioni simili — ${esc(category)}</h2>
        <div class="prof-related">${relatedCards}</div>
      </div>` : ''}

      <!-- FAQ -->
      <div class="prof-card">
        <h2>❓ Domande frequenti sul rischio AI per ${esc(title)}</h2>
        ${faqItems.map(({q,a})=>`
        <div class="faq-item">
          <div class="faq-q">${esc(q)}</div>
          <div class="faq-a">${esc(a)}</div>
        </div>`).join('')}
      </div>

      <!-- Nota metodologica -->
      <div style="background:var(--bg-secondary,#f8f8f8);border-radius:12px;padding:1.2rem 1.5rem;margin-top:1rem;font-size:0.82rem;color:var(--text-secondary);line-height:1.6;">
        <strong>Metodologia:</strong> Il punteggio di rischio AI è basato su analisi della struttura dei task della professione (automazione cognitiva, manipolazione di dati strutturati, creatività richiesta, interazione sociale), trend di adozione AI per settore (McKinsey, OECD, Frey/Osborne) e benchmark di costo degli strumenti AI disponibili al ${year-3}. Non costituisce previsione certa ma stima probabilistica soggetta ad aggiornamento. <a href="/chi-siamo" style="color:var(--primary);">Leggi la metodologia completa</a>.
      </div>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p class="footer-text">JobRiskAI · Analisi gratuita del rischio AI per professioni italiane</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/classifica" style="color:var(--text-secondary);">Tutte le professioni</a> · <a href="/calcolatore" style="color:var(--text-secondary);">Calcolatore</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
      <nav aria-label="Footer links" style="margin-top:0.5rem;">
        <a href="/privacy-policy" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Privacy Policy</a>
        <a href="/termini-servizio" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Termini di Servizio</a>
        <a href="/chi-siamo" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Chi Siamo</a>
        <a href="mailto:hello@jobriskai.it" style="color:var(--text-secondary);font-size:0.8rem;">Contatti</a>
      </nav>
    </div>
  </footer>
</body>
</html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
mkdirSync(outDir, { recursive: true });

let generated = 0;
let skipped   = 0;
const newSlugs = [];

for (const prof of seoProfessions) {
  if (EXISTING_SLUGS.has(prof.slug)) {
    console.log(`⏭️  Skip (già esistente): ${prof.slug}`);
    skipped++;
    continue;
  }
  const outPath = join(outDir, `${prof.slug}.html`);
  writeFileSync(outPath, buildPage(prof), 'utf8');
  newSlugs.push(`https://www.jobriskai.it/professione/${prof.slug}`);
  generated++;
}

console.log(`\n✅ Pagine SEO generate: ${generated}`);
console.log(`⏭️  Saltate (già esistenti): ${skipped}`);
console.log(`📄 Nuovi slug:`);
newSlugs.forEach(s => console.log('  ', s));

// Aggiorna sitemap.xml aggiungendo le nuove URL
import { readFileSync } from 'fs';
const sitemapPath = join(ROOT, 'public/sitemap.xml');
let sitemap = readFileSync(sitemapPath, 'utf8');
const today = new Date().toISOString().split('T')[0];

const newEntries = newSlugs.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('');

sitemap = sitemap.replace('</urlset>', newEntries + '\n</urlset>');
writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`\n🗺️  Sitemap aggiornata con ${newSlugs.length} nuove URL.`);
