// scripts/build-profession-pages.mjs
// Genera public/professione/[slug].html per ogni professione (235 pagine).
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
  'Tech & AI':            ['ai_engineer','ai_director','data_engineer','backend_developer','frontend_developer','fullstack_developer','cloud_engineer','cloud_consultant','soc_analyst','cyber_security_engineer','data_scientist','devops_engineer','solutions_consultant','scrum_master','it_project_manager','ml_engineer','product_owner','sysadmin','qa_engineer','network_engineer','it_consultant','developer',
                           'ingegnere_informatico','tecnico_informatico','web_designer','data_engineer_senior','cybersecurity_analyst','e_commerce_specialist'],
  'Commerciale':          ['bdr','sdr','account_manager','key_account_manager','sales_manager','technical_sales','customer_success_manager','store_manager','sales_executive','sales_director','addetto_vendite','commerciale_estero',
                           'venditore_porta_a_porta','agente_commerciale','buyer_moda','agente_immobiliare'],
  'Marketing':            ['digital_marketing_specialist','seo_specialist','growth_hacker','content_creator','brand_manager','ecommerce_manager','copywriter','social_media','marketing_manager','pr_specialist',
                           'social_media_manager','pubblicitario','ufficio_stampa','podcaster'],
  'Management & Finanza': ['cfo','auditor','credit_collector','office_manager','impiegato_amm','ceo','executive_assistant','data_entry','contabile','data_analyst','cost_controller','project_planner','cost_estimator','project_controller','project_manager','controller_gestione','tax_advisor','management_consultant','financial_analyst','risk_manager','legal_counsel',
                           'commercialista','consulente_fiscale','analista_credito','actuario','private_banker','assicuratore','agente_assicurativo','revisore_contabile','consulente_finanziario','compliance_officer'],
  'Operations':           ['production_planner','plant_manager','automation_engineer','qa_manager','buyer','procurement_manager','supply_chain_specialist','process_engineer','logistics_manager','operations_manager','receptionist','paralegal','customer_service',
                           'autista_camion','magazziniere','pilota'],
  'HR':                   ['hr_manager','talent_acquisition','hr_generalist','hr_business_partner',
                           'recruiter','hr_analytics','coach_aziendale'],
  'Sanità':               ['infermiere','sustainability_specialist','hse_specialist','medical_science_liaison','clinical_research_associate','informatore_scientifico','regulatory_affairs','rd_specialist',
                           'medico_base','chirurgo','dentista','fisioterapista','psicologo','farmacista','veterinario','nutrizionista','radiologo','osteopata','logopedista','oss',
                           'medico_specialista','infermiere_specializzato','tecnico_radiologia','biologo','ottico','logopedista_pediatrico','tecnico_laboratorio','dietista','psicologo_clinico'],
  'Creatività':           ['grafico','traduttore','ux_ui_designer','video_editor','art_director','fotografo','illustratore','sound_designer',
                           'scrittore','sceneggiatore','stilista','redattore','fotografo_commerciale','giornalista_investigativo'],
  'Istruzione':           ['insegnante','docente_universitario','formatore_aziendale','instructional_designer','tutor_online','dirigente_scolastico','educatore_infanzia',
                           'insegnante_scuola_primaria','professore_liceo','educatore_asilo_nido','tutor_specializzato','psicologo_scolastico'],
  'Legale & PA':          ['avvocato','notaio','magistrato','consulente_del_lavoro','criminologo','lobbista',
                           'avvocato_penalista','consulente_del_lavoro_senior','mediatore_civile','notaio_digitale',
                           'vigile_urbano','funzionario_pubblico','dirigente_pa','assistente_amministrativo_pa'],
  'Ingegneria':           ['ingegnere_civile','architetto','geometra','topografo','ingegnere_meccanico','urbanista','ingegnere_ambientale',
                           'ingegnere_elettrico','ingegnere_biomedico','geometra_catasto','perito_industriale','perito_immobiliare'],
  'Artigianato':          ['idraulico','elettricista','falegname','meccanico','parrucchiere','estetista',
                           'falegname_artigiano','sarto','orafo'],
  'Ristorazione':         ['chef','pasticcere','barista','sommelier','enologo',
                           'cuoco_pizzaiolo','pasticcere_artigiano','cameriere','panettiere'],
  'Servizi & Turismo':    ['personal_trainer','allenatore','assistente_sociale','educatore_sociale','pompiere',
                           'guida_turistica','receptionist_hotel','travel_planner','wedding_planner',
                           'preparatore_atletico','istruttore_fitness'],
  'Agricoltura & Ambiente':['agronomo','agricoltore',
                            'esperto_energia','geologo','agronomo_consulente'],
  'Ricerca & Scienza':    ['chimico','fisico'],
  'Media & Spettacolo':   ['giornalista','doppiatore','attore','regista','musicista','cantante'],
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
      { '@type': 'ListItem', position: 2, name: 'Professioni', item: 'https://www.jobriskai.it/classifica' },
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
      <a href="/classifica" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">📊 Classifica completa</a>
    </div>
  </header>

  <main role="main">
    <div class="prof-shell">

      <!-- Breadcrumb visivo -->
      <nav style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:1.5rem;">
        <a href="/" style="color:var(--text-secondary);text-decoration:none;">JobRiskAI</a>
        <span style="margin:0 0.4rem;">›</span>
        <a href="/classifica" style="color:var(--text-secondary);text-decoration:none;">Professioni</a>
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
        <p style="color:var(--text-secondary);margin-bottom:1.25rem;font-size:0.95rem;">Scopri come si posiziona questo lavoro rispetto agli altri — o analizza il tuo CV per un punteggio personale.</p>
        <a href="/classifica" class="prof-cta">🔍 Confronta con gli altri lavori</a>
        <a href="/cv-analyzer" class="prof-cta-ghost">📄 Analizza il tuo CV</a>
      </div>

      <!-- Link metodologia -->
      <div style="text-align:center;margin:0 0 2rem;">
        <a href="/metodologia" style="display:inline-flex;align-items:center;gap:0.4rem;color:#6366f1;font-size:0.85rem;font-weight:600;text-decoration:none;padding:0.45rem 1rem;border:1px solid rgba(99,102,241,0.3);border-radius:999px;background:rgba(99,102,241,0.05);transition:all 0.15s;" onmouseover="this.style.background='rgba(99,102,241,0.12)'" onmouseout="this.style.background='rgba(99,102,241,0.05)'">
          🔬 Come calcoliamo questo punteggio →
        </a>
      </div>

      <!-- Share buttons -->
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1.5rem;">
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.jobriskai.it%2Fprofessione%2F${sl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.55rem 1.1rem;border-radius:999px;font-size:0.85rem;font-weight:600;text-decoration:none;background:#0A66C2;color:white;transition:opacity 0.15s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          Condividi su LinkedIn
        </a>
        <a href="https://api.whatsapp.com/send?text=Il+${encodeURIComponent(title)}+ha+un+rischio+AI+del+${pct}%25+entro+il+${year}.+Scopri+il+tuo+rischio+gratis%3A+https%3A%2F%2Fwww.jobriskai.it%2Fprofessione%2F${sl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.55rem 1.1rem;border-radius:999px;font-size:0.85rem;font-weight:600;text-decoration:none;background:#25D366;color:white;transition:opacity 0.15s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Condividi su WhatsApp
        </a>
      </div>

      ${related.length > 0 ? `
      <!-- Professioni correlate -->
      <div class="prof-card">
        <h2>🔗 Professioni correlate — categoria ${esc(cat)}</h2>
        <div class="prof-related">${relatedCards}</div>
      </div>` : ''}

      <!-- Articoli correlati -->
      <div class="prof-card">
        <h2>📖 Approfondisci — Articoli correlati</h2>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
          <a href="/blog/le-20-professioni-piu-a-rischio-ai" style="display:block;padding:0.75rem 1rem;border:1px solid var(--border);border-radius:10px;text-decoration:none;color:var(--text-primary);font-size:0.9rem;font-weight:500;transition:all 0.15s;" onmouseover="this.style.borderColor='var(--primary)';this.style.background='rgba(99,102,241,0.04)'" onmouseout="this.style.borderColor='var(--border)';this.style.background=''">🔴 Le 20 professioni più a rischio AI in Italia</a>
          <a href="/blog/come-difendere-il-lavoro-dallai" style="display:block;padding:0.75rem 1rem;border:1px solid var(--border);border-radius:10px;text-decoration:none;color:var(--text-primary);font-size:0.9rem;font-weight:500;transition:all 0.15s;" onmouseover="this.style.borderColor='var(--primary)';this.style.background='rgba(99,102,241,0.04)'" onmouseout="this.style.borderColor='var(--border)';this.style.background=''">🛡️ Come difendere il tuo lavoro dall'AI</a>
          <a href="/blog/competenze-che-lai-non-sostituira" style="display:block;padding:0.75rem 1rem;border:1px solid var(--border);border-radius:10px;text-decoration:none;color:var(--text-primary);font-size:0.9rem;font-weight:500;transition:all 0.15s;" onmouseover="this.style.borderColor='var(--primary)';this.style.background='rgba(99,102,241,0.04)'" onmouseout="this.style.borderColor='var(--border)';this.style.background=''">💡 Le competenze che l'AI non sostituirà mai</a>
        </div>
      </div>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p class="footer-text">JobRiskAI · Analisi gratuita del rischio AI per 235 professioni italiane</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/classifica" style="color:var(--text-secondary);">Classifica completa</a> · <a href="/calcolatore" style="color:var(--text-secondary);">Calcolatore</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
      <nav aria-label="Footer links" style="margin-top:0.5rem;">
        <a href="/metodologia" style="color:#6366f1; font-size:0.8rem; margin-right:1rem; font-weight:600;">Metodologia</a>
        <a href="/privacy-policy" style="color:var(--text-secondary); font-size:0.8rem; margin-right:1rem;">Privacy Policy</a>
        <a href="/termini-servizio" style="color:var(--text-secondary); font-size:0.8rem; margin-right:1rem;">Termini di Servizio</a>
        <a href="/chi-siamo" style="color:var(--text-secondary); font-size:0.8rem; margin-right:1rem;">Chi Siamo</a>
        <a href="mailto:hello@jobriskai.it" style="color:var(--text-secondary); font-size:0.8rem;">Contatti</a>
      </nav>
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
      <td class="risk-cell" data-base-risk="${d.pct}" style="padding:0.75rem 0.5rem;">
        <div style="display:flex;align-items:center;gap:0.5rem;">
          <div style="width:60px;height:6px;background:var(--border);border-radius:999px;overflow:hidden;"><div class="risk-bar" style="width:${d.pct}%;height:100%;background:${riskColor(d.pct)};border-radius:999px;"></div></div>
          <span class="risk-pct" style="font-weight:700;font-size:0.9rem;color:${riskColor(d.pct)};">${d.pct}%</span>
        </div>
      </td>
      <td class="year-cell" data-base-year="${d.targetYear}" style="padding:0.75rem 0.5rem;font-size:0.88rem;color:var(--text-secondary);">${d.targetYear}</td>
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
  <title>I 235 lavori più a rischio AI in Italia [2026] | Classifica JobRiskAI</title>
  <meta name="description" content="Classifica completa dei 235 lavori italiani per rischio di sostituzione AI. Dal Data Entry Clerk (92%) al CEO (8%). Scopri dove si colloca la tua professione e quando l'AI arriverà.">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="https://www.jobriskai.it/classifica">
  <meta property="og:title" content="I 235 lavori più a rischio AI in Italia [2026] | JobRiskAI">
  <meta property="og:description" content="Classifica completa: dal Data Entry Clerk (92%) al CEO (8%). Scopri il rischio AI di ogni professione italiana.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.jobriskai.it/classifica">
  <meta property="og:image" content="https://www.jobriskai.it/og-image.png">
  <meta property="og:site_name" content="JobRiskAI">
  <script type="application/ld+json">${faqJsonLd}</script>
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'JobRiskAI', item: 'https://www.jobriskai.it/' }, { '@type': 'ListItem', position: 2, name: 'Classifica professioni a rischio AI', item: 'https://www.jobriskai.it/classifica' }] })}</script>
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
    .sh { background: rgba(255,255,255,0.95); border-bottom: 1px solid var(--border,#E7E0D2); padding: 0 2rem; position: sticky; top: 0; z-index: 200; backdrop-filter: blur(14px); height: 60px; display: flex; align-items: center; }
    .sh-inner { max-width: 1200px; width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .sh-links { display: flex; align-items: center; gap: 0.4rem; }
    .sh-links a { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--primary,#6366f1); text-decoration: none; font-weight: 600; font-size: 0.82rem; background: rgba(99,102,241,0.07); border: 1px solid rgba(99,102,241,0.2); border-radius: 8px; padding: 0.5rem 0.8rem; white-space: nowrap; min-height: 44px; transition: background 0.15s; }
    .sh-links a:hover { background: rgba(99,102,241,0.14); }
    .sh-links a.sh-cta { background: var(--primary,#6366f1); color: white; border-color: var(--primary,#6366f1); }
    .sh-links a.sh-cta:hover { background: #4338ca; }
    .sh-lang select { background: white; border: 1px solid var(--border,#E7E0D2); border-radius: 8px; padding: 0.45rem 0.5rem; font-size: 0.82rem; cursor: pointer; min-height: 44px; color: var(--text-primary,#1C1A17); }
    .sh-burger { display: none; flex-direction: column; justify-content: center; align-items: center; width: 44px; height: 44px; border: none; background: transparent; cursor: pointer; border-radius: 8px; flex-shrink: 0; }
    .sh-burger span { display: block; width: 22px; height: 2px; background: #374151; border-radius: 2px; margin: 3px 0; }
    .sh-drawer { display: none; position: fixed; top: 60px; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.4); z-index: 199; }
    .sh-drawer-inner { background: white; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.25rem; box-shadow: 0 8px 32px rgba(0,0,0,0.15); }
    .sh-drawer-inner a { display: flex; align-items: center; gap: 0.6rem; padding: 0.85rem 1rem; border-radius: 10px; color: #374151; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: background 0.15s; min-height: 48px; }
    .sh-drawer-inner a:hover { background: #f3f4f6; }
    .sh-drawer-inner a.sh-cta { background: var(--primary,#6366f1); color: white; margin-top: 0.5rem; }
    @media (max-width: 768px) { .sh { padding: 0 1rem; } .sh-links { display: none !important; } .sh-burger { display: flex !important; } }
  </style>
</head>
<body>
  <header class="sh" role="banner">
    <div class="sh-inner">
      <a href="/" aria-label="JobRiskAI Home" style="display:inline-block;line-height:0;flex-shrink:0;">
        <img src="/logo.png" alt="JobRiskAI" style="height:34px;width:auto;display:block;">
      </a>
      <nav class="sh-links" aria-label="Navigazione principale">
        <a href="/">🏠 Home</a>
        <a href="/calcolatore">🎯 Calcolatore</a>
        <a href="/classifica">📊 Classifica</a>
        <a href="/cv-analyzer">📄 Analisi CV</a>
        <a href="/aziende">🏢 Aziende</a>
        <a href="/blog">📖 Blog</a>
        <a href="/chi-siamo">👥 Chi Siamo</a>
        <div class="sh-lang">
          <select id="langSelect" aria-label="Lingua">
            <option value="it">🇮🇹 Italiano</option>
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </nav>
      <button class="sh-burger" aria-label="Apri menu" aria-expanded="false" onclick="toggleShDrawer()" id="shBurger">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="sh-drawer" id="shDrawer" onclick="closeShDrawer()">
    <div class="sh-drawer-inner" onclick="event.stopPropagation()">
      <a href="/">🏠 Home</a>
      <a href="/calcolatore">🎯 Calcolatore</a>
      <a href="/classifica">📊 Classifica</a>
      <a href="/cv-analyzer">📄 Analisi CV</a>
      <a href="/aziende">🏢 Aziende</a>
      <a href="/blog">📖 Blog</a>
      <a href="/chi-siamo">👥 Chi Siamo</a>
      <a href="/cv-analyzer" class="sh-cta">📄 Analizza il tuo CV →</a>
    </div>
  </div>
  <script>
    function toggleShDrawer(){var d=document.getElementById("shDrawer"),b=document.getElementById("shBurger"),o=d.style.display==="block";d.style.display=o?"none":"block";b.setAttribute("aria-expanded",o?"false":"true");}
    function closeShDrawer(){document.getElementById("shDrawer").style.display="none";document.getElementById("shBurger").setAttribute("aria-expanded","false");}
  </script>

  <main role="main">
    <div class="cla-shell">

      <div style="margin-bottom:2rem;">
        <div data-i18n="cla_badge" style="display:inline-flex;align-items:center;gap:0.4rem;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);color:var(--primary);padding:0.4rem 0.9rem;border-radius:999px;font-size:0.78rem;font-weight:600;letter-spacing:0.02em;text-transform:uppercase;margin-bottom:1rem;">📊 Dati 2026</div>
        <h1 id="claTitle" data-i18n="cla_title" style="font-family:'Space Grotesk',sans-serif;font-size:2.2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.75rem;line-height:1.2;">I 235 lavori più a rischio AI in Italia</h1>
        <p data-i18n="cla_subtitle" style="color:var(--text-secondary);font-size:1rem;line-height:1.6;max-width:620px;">Classifica completa delle professioni italiane per rischio di sostituzione da parte dell'intelligenza artificiale. Clicca su una professione per l'analisi dettagliata.</p>
      </div>

      <!-- COUNTRY SELECTOR BANNER -->
      <div style="margin-bottom:2rem;">
        <div style="background:rgba(255,255,255,0.96); border:1.5px solid rgba(99,102,241,0.30); border-radius:16px; padding:1.25rem 1.75rem; display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
          <div id="countryFlagDisplay" style="font-size:2.6rem; line-height:1; flex-shrink:0;">🇮🇹</div>
          <div style="flex:1; min-width:180px;">
            <div style="font-size:0.72rem; font-weight:700; color:#4f46e5; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:0.5rem;" data-i18n="country_selector_label">Stai calcolando per</div>
            <div style="position:relative; display:flex; align-items:center; background:#f5f3ff; border:1.5px solid #a5b4fc; border-radius:10px; padding:0.55rem 2.5rem 0.55rem 0.9rem; cursor:pointer; transition:border-color 0.15s;" onmouseover="this.style.borderColor='#6366f1'" onmouseout="this.style.borderColor='#a5b4fc'">
              <select id="countrySelect" aria-label="Paese" style="background:transparent; color:#111827; border:none; font-size:1.1rem; font-weight:700; cursor:pointer; padding:0; outline:none; appearance:none; -webkit-appearance:none; width:100%; min-width:140px;">
                <optgroup label="Europa">
                  <option value="it">🇮🇹 Italia</option>
                  <option value="de">🇩🇪 Deutschland</option>
                  <option value="fr">🇫🇷 France</option>
                  <option value="es">🇪🇸 España</option>
                  <option value="pt">🇵🇹 Portugal</option>
                  <option value="nl">🇳🇱 Nederland</option>
                  <option value="be">🇧🇪 Belgique</option>
                  <option value="at">🇦🇹 Österreich</option>
                  <option value="pl">🇵🇱 Polska</option>
                  <option value="ro">🇷🇴 România</option>
                  <option value="cz">🇨🇿 Česká republika</option>
                  <option value="gb">🇬🇧 United Kingdom</option>
                  <option value="ch">🇨🇭 Schweiz</option>
                  <option value="se">🇸🇪 Sverige</option>
                  <option value="dk">🇩🇰 Danmark</option>
                  <option value="no">🇳🇴 Norge</option>
                  <option value="fi">🇫🇮 Suomi</option>
                  <option value="ie">🇮🇪 Ireland</option>
                  <option value="gr">🇬🇷 Ελλάδα</option>
                </optgroup>
                <optgroup label="Americhe">
                  <option value="us">🇺🇸 United States</option>
                  <option value="ca">🇨🇦 Canada</option>
                  <option value="mx">🇲🇽 México</option>
                  <option value="br">🇧🇷 Brasil</option>
                </optgroup>
                <optgroup label="Asia-Pacifico &amp; ME">
                  <option value="au">🇦🇺 Australia</option>
                  <option value="sg">🇸🇬 Singapore</option>
                  <option value="jp">🇯🇵 Japan</option>
                  <option value="in">🇮🇳 India</option>
                  <option value="ae">🇦🇪 UAE / Dubai</option>
                </optgroup>
              </select>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="position:absolute; right:0.65rem; pointer-events:none;" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          <div style="font-size:0.78rem; color:#6b7280; max-width:200px; line-height:1.4;" data-i18n="country_selector_hint">Rischio, anno critico e titolo si aggiornano automaticamente</div>
        </div>
      </div>

      <!-- Come vengono calcolati i rischi -->
      <details style="margin-bottom:1.75rem;" id="methodologyBox">
        <summary style="cursor:pointer; display:inline-flex; align-items:center; gap:0.5rem; font-size:0.85rem; font-weight:600; color:#4f46e5; list-style:none; padding:0.5rem 0.9rem; background:rgba(99,102,241,0.06); border:1px solid rgba(99,102,241,0.2); border-radius:999px; user-select:none;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Come vengono calcolati i rischi per nazione?
        </summary>
        <div style="margin-top:0.75rem; padding:1.25rem 1.5rem; background:rgba(255,255,255,0.97); border:1.5px solid rgba(99,102,241,0.18); border-radius:14px; font-size:0.88rem; color:#374151; line-height:1.7;">
          <p style="margin:0 0 0.75rem 0;">I valori base di rischio (%) e anno critico sono calcolati per l'<strong>Italia</strong>. Quando selezioni un altro paese, vengono applicati due adattamenti:</p>
          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            <div style="display:flex; gap:0.75rem; align-items:flex-start;">
              <span style="font-size:1.1rem; flex-shrink:0;">📈</span>
              <div><strong>Rischio %</strong> — scalato in base all'<em>indice di adozione AI</em> del paese rispetto all'Italia (base 0.85). Paesi con forte ecosistema AI (es. USA 1.35, Singapore 1.25) mostrano rischi più alti; paesi con adozione più lenta (es. Brasile 0.65, Messico 0.70) mostrano rischi più contenuti.</div>
            </div>
            <div style="display:flex; gap:0.75rem; align-items:flex-start;">
              <span style="font-size:1.1rem; flex-shrink:0;">📅</span>
              <div><strong>Anno critico</strong> — anticipato o posticipato in base alla maturità del mercato locale. Ad esempio, negli USA l'anno critico arriva ~2 anni prima rispetto all'Italia; in Polonia o Brasile ~2–3 anni dopo.</div>
            </div>
          </div>
          <p style="margin:0.75rem 0 0 0; color:#6b7280; font-size:0.82rem;">I dati si basano su stime comparative OECD/Eurostat 2024 e report sull'adozione AI per settore.</p>
        </div>
      </details>

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

      <p style="text-align:center;color:var(--text-secondary);font-size:0.82rem;margin-top:1rem;" id="rowCount">235 <span data-i18n="cla_count_suffix">professioni</span></p>

      <!-- CTA -->
      <div style="text-align:center;margin:3rem 0 1rem;">
        <p data-i18n="cla_cta_sub" style="color:var(--text-secondary);margin-bottom:1.25rem;">Vuoi sapere quanto sei personalmente a rischio?</p>
        <a href="/calcolatore" data-i18n="cla_cta_btn1" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:white;padding:1rem 2rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;display:inline-block;margin:0.5rem;transition:transform 0.15s,box-shadow 0.15s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px -8px rgba(99,102,241,0.5)'" onmouseout="this.style.transform='';this.style.boxShadow=''">🎯 Calcola il tuo rischio personale</a>
        <a href="/cv-analyzer" data-i18n="cla_cta_btn2" style="background:white;color:var(--primary);border:2px solid var(--primary);padding:0.9rem 1.8rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.95rem;display:inline-block;margin:0.5rem;" onmouseover="this.style.background='var(--primary)';this.style.color='white'" onmouseout="this.style.background='white';this.style.color='var(--primary)'">📄 Analizza il tuo CV</a>
      </div>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p data-i18n="cla_footer" class="footer-text">JobRiskAI · Analisi gratuita del rischio AI per 235 professioni</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI</p>
      <nav aria-label="Footer links" style="margin-top:0.5rem;">
        <a href="/metodologia" style="color:#6366f1; font-size:0.8rem; margin-right:1rem; font-weight:600;">Metodologia</a>
        <a href="/privacy-policy" style="color:var(--text-secondary); font-size:0.8rem; margin-right:1rem;">Privacy Policy</a>
        <a href="/termini-servizio" style="color:var(--text-secondary); font-size:0.8rem; margin-right:1rem;">Termini di Servizio</a>
        <a href="/chi-siamo" style="color:var(--text-secondary); font-size:0.8rem; margin-right:1rem;">Chi Siamo</a>
        <a href="mailto:hello@jobriskai.it" style="color:var(--text-secondary); font-size:0.8rem;">Contatti</a>
      </nav>
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
  <script type="module">
    import { COUNTRIES, getCountry } from '/country-data.js';

    const ITALY_AI_INDEX = 0.85; // base di riferimento

    function riskColor(pct) {
      if (pct >= 70) return '#ef4444';
      if (pct >= 40) return '#f59e0b';
      return '#10b981';
    }

    let currentCountry = (function() {
      try { const s = localStorage.getItem('site_country'); if (s && COUNTRIES[s]) return s; } catch(e) {}
      return 'it';
    })();

    function applyCountry(code) {
      if (!COUNTRIES[code]) return;
      currentCountry = code;
      try { localStorage.setItem('site_country', code); } catch(e) {}
      const c = getCountry(code);

      // Anno critico
      document.querySelectorAll('.year-cell').forEach(td => {
        td.textContent = parseInt(td.dataset.baseYear) + c.criticalYearOffset;
      });

      // Rischio % scalato per aiAdoptionIndex del paese
      const ratio = c.aiAdoptionIndex / ITALY_AI_INDEX;
      document.querySelectorAll('.risk-cell').forEach(td => {
        const base = parseInt(td.dataset.baseRisk);
        const adjusted = Math.min(Math.round(base * ratio), 99);
        const bar  = td.querySelector('.risk-bar');
        const span = td.querySelector('.risk-pct');
        const color = riskColor(adjusted);
        if (bar)  { bar.style.width = adjusted + '%'; bar.style.background = color; }
        if (span) { span.textContent = adjusted + '%'; span.style.color = color; }
      });

      // Titolo pagina
      const titleEl = document.getElementById('claTitle');
      if (titleEl) {
        const countryName = code === 'it' ? 'Italia' : c.name;
        titleEl.textContent = 'I 235 lavori più a rischio AI in ' + countryName;
      }

      // Bandiera e select
      const flagEl = document.getElementById('countryFlagDisplay');
      if (flagEl) flagEl.textContent = c.flag;
      const sel = document.getElementById('countrySelect');
      if (sel) sel.value = code;
    }

    const sel = document.getElementById('countrySelect');
    if (sel) {
      sel.value = currentCountry;
      sel.addEventListener('change', function() { applyCountry(this.value); });
    }

    applyCountry(currentCountry);
  </script>
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
urls.push('https://www.jobriskai.it/classifica');

// Scrivi urls.json per il sitemap
writeFileSync(join(ROOT, 'scripts/generated-urls.json'), JSON.stringify(urls, null, 2), 'utf8');

console.log(`✅ Generati ${generated} pagine professione + classifica.html`);
console.log(`📝 URL salvati in scripts/generated-urls.json`);
