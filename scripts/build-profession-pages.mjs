// scripts/build-profession-pages.mjs
// Genera public/professione/[slug].html per ogni professione (235 pagine).
// Genera anche public/classifica.html — ranking completo per backlink.
// Eseguire con: node scripts/build-profession-pages.mjs

import { readFileSync, writeFileSync, mkdirSync, promises as fsPromises } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { jobUpskilling } from './upskilling-data.mjs';
import { PILL_NAV } from './shared-nav.mjs';

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

// ── Articoli blog correlati per categoria ─────────────────
const CATEGORY_ARTICLES = {
  'Tech & AI': [
    { url: '/blog/computer-quantistici-e-ai-cosa-cambia', label: '🔬 Computer quantistici e AI: cosa cambia davvero' },
    { url: '/blog/ai-e-cybersecurity-per-le-pmi', label: '🛡️ AI e Cybersecurity: attacchi automatizzati e difese' },
    { url: '/blog/progettazione-ingegneristica-con-ai-dal-cad-al-generativo', label: '⚙️ Progettazione ingegneristica con AI: dal CAD al generativo' },
  ],
  'Commerciale': [
    { url: '/blog/ai-e-ecommerce-personalizzazione', label: '🛒 AI nell\'E-commerce: come Amazon sa cosa vuoi comprare' },
    { url: '/blog/ai-per-freelance-e-liberi-professionisti', label: '💼 AI per Freelance: strumenti che moltiplicano la produttività' },
    { url: '/blog/ai-nel-settore-immobiliare', label: '🏠 AI nel Settore Immobiliare: valutazioni automatiche e agenti' },
  ],
  'Marketing': [
    { url: '/blog/ai-e-arte-generativa-copyright-e-creativita', label: '🎨 AI e Arte Generativa: Midjourney sta uccidendo gli artisti?' },
    { url: '/blog/ai-e-musica-composizione-generativa', label: '🎵 AI e Musica: Suno e Udio stanno uccidendo la musica?' },
    { url: '/blog/deepfake-disinformazione-ai-come-riconoscerli', label: '🎭 Deepfake e Disinformazione: come riconoscerli' },
  ],
  'Management & Finanza': [
    { url: '/blog/ai-e-finanza-personale-investimenti-automatici', label: '💰 AI e Finanza: i robo-advisor battono i consulenti umani?' },
    { url: '/blog/ai-nel-settore-assicurativo-rischi-e-opportunita', label: '📋 AI nel Settore Assicurativo: come gli algoritmi decidono le polizze' },
    { url: '/blog/ai-e-hr-gestione-del-personale', label: '👔 AI nelle Risorse Umane: come gli algoritmi assumono e valutano' },
  ],
  'Operations': [
    { url: '/blog/robot-umanoidi-e-ai-il-futuro-del-lavoro-fisico', label: '🤖 Robot Umanoidi e AI: il futuro del lavoro fisico' },
    { url: '/blog/ai-e-trasporti-guida-autonoma-2026', label: '🚗 Guida Autonoma 2026: Tesla, Waymo e il ritardo' },
    { url: '/blog/ai-e-lavoro-da-remoto-futuro-dello-smart-working', label: '🏠 AI e Smart Working: il futuro del lavoro da remoto' },
  ],
  'HR': [
    { url: '/blog/ai-e-hr-gestione-del-personale', label: '👔 AI nelle Risorse Umane: algoritmi di selezione e valutazione' },
    { url: '/blog/ai-per-freelance-e-liberi-professionisti', label: '💼 AI per Freelance: opportunità e minacce' },
    { url: '/blog/reddito-universale-e-ai-scenari-per-il-futuro-del-lavoro', label: '🌐 Reddito Universale e AI: scenari per il futuro del lavoro' },
  ],
  'Sanità': [
    { url: '/blog/chirurgia-assistita-da-ai-il-futuro-della-sala-operatoria', label: '🏥 Chirurgia Assistita da AI: il futuro della sala operatoria' },
    { url: '/blog/prevenzione-malattie-con-ai-diagnosi-predittiva', label: '🔬 Prevenzione Malattie con AI: diagnosi predittiva' },
    { url: '/blog/ai-e-salute-mentale-terapia-digitale', label: '🧠 AI e Salute Mentale: i chatbot terapeutici funzionano?' },
  ],
  'Creatività': [
    { url: '/blog/ai-e-arte-generativa-copyright-e-creativita', label: '🎨 AI e Arte Generativa: copyright e creatività' },
    { url: '/blog/ai-e-musica-composizione-generativa', label: '🎵 AI e Musica: composizione generativa e futuro degli artisti' },
    { url: '/blog/deepfake-disinformazione-ai-come-riconoscerli', label: '🎭 Deepfake e Disinformazione: come riconoscerli' },
  ],
  'Istruzione': [
    { url: '/blog/ai-nell-istruzione-scuola-e-universita', label: '📚 AI nell\'Istruzione: come ChatGPT sta cambiando scuola e università' },
    { url: '/blog/ai-per-freelance-e-liberi-professionisti', label: '💼 AI per Professionisti: strumenti e strategie' },
    { url: '/blog/reddito-universale-e-ai-scenari-per-il-futuro-del-lavoro', label: '🌐 Reddito Universale e AI: scenari per il futuro' },
  ],
  'Legale & PA': [
    { url: '/blog/ai-e-privacy-gdpr-intelligenza-artificiale', label: '🔒 AI e Privacy: cosa cambia con il GDPR e l\'AI Act' },
    { url: '/blog/avvocato-rischio-ai-2026', label: '⚖️ Avvocato e AI: rischio 42% — i task già automatizzati' },
    { url: '/blog/modelli-ai-pericolosi-il-dibattito-sulla-sicurezza', label: '⚠️ Modelli AI Pericolosi: il dibattito sulla sicurezza' },
  ],
  'Ingegneria': [
    { url: '/blog/progettazione-ingegneristica-con-ai-dal-cad-al-generativo', label: '⚙️ Progettazione Ingegneristica con AI: dal CAD al generativo' },
    { url: '/blog/computer-quantistici-e-ai-cosa-cambia', label: '🔬 Computer Quantistici e AI: cosa cambia' },
    { url: '/blog/robot-umanoidi-e-ai-il-futuro-del-lavoro-fisico', label: '🤖 Robot Umanoidi e AI: il futuro del lavoro fisico' },
  ],
  'Artigianato': [
    { url: '/blog/robot-umanoidi-e-ai-il-futuro-del-lavoro-fisico', label: '🤖 Robot Umanoidi e AI: il futuro del lavoro fisico' },
    { url: '/blog/reddito-universale-e-ai-scenari-per-il-futuro-del-lavoro', label: '🌐 Reddito Universale e AI: scenari per il futuro del lavoro' },
    { url: '/blog/come-difendere-il-lavoro-dallai', label: '🛡️ Come difendere il tuo lavoro dall\'AI' },
  ],
  'Ristorazione': [
    { url: '/blog/ai-e-alimentazione-nutrizione-personalizzata', label: '🍽️ AI e Nutrizione: diete personalizzate e microbioma' },
    { url: '/blog/robot-umanoidi-e-ai-il-futuro-del-lavoro-fisico', label: '🤖 Robot Umanoidi e AI: il futuro del lavoro fisico' },
    { url: '/blog/reddito-universale-e-ai-scenari-per-il-futuro-del-lavoro', label: '🌐 Reddito Universale e AI: scenari futuri' },
  ],
  'Servizi & Turismo': [
    { url: '/blog/ai-nel-turismo-e-viaggi', label: '✈️ AI nel Turismo: chatbot di viaggio e prezzi dinamici' },
    { url: '/blog/ai-nello-sport-analisi-delle-performance', label: '⚽ AI nello Sport: algoritmi, tattiche e scouting' },
    { url: '/blog/ai-per-freelance-e-liberi-professionisti', label: '💼 AI per Professionisti: strumenti che moltiplicano la produttività' },
  ],
  'Agricoltura & Ambiente': [
    { url: '/blog/ai-e-agricoltura-precision-farming', label: '🌾 AI e Agricoltura: il Precision Farming che salva i raccolti' },
    { url: '/blog/ai-e-cambiamenti-climatici-soluzioni-o-problema', label: '🌍 AI e Cambiamenti Climatici: soluzione o problema?' },
    { url: '/blog/ricerca-scientifica-con-ai-laboratori-del-futuro', label: '🔬 Ricerca Scientifica con AI: i laboratori del futuro' },
  ],
  'Ricerca & Scienza': [
    { url: '/blog/ricerca-scientifica-con-ai-laboratori-del-futuro', label: '🔬 Ricerca Scientifica con AI: i laboratori del futuro' },
    { url: '/blog/computer-quantistici-e-ai-cosa-cambia', label: '💻 Computer Quantistici e AI: cosa cambia' },
    { url: '/blog/ai-e-cambiamenti-climatici-soluzioni-o-problema', label: '🌍 AI e Cambiamenti Climatici: soluzione o problema?' },
  ],
  'Media & Spettacolo': [
    { url: '/blog/ai-e-musica-composizione-generativa', label: '🎵 AI e Musica: Suno e Udio stanno uccidendo gli artisti?' },
    { url: '/blog/ai-e-arte-generativa-copyright-e-creativita', label: '🎨 AI e Arte Generativa: copyright e creatività' },
    { url: '/blog/ai-e-giornalismo-fact-checking-notizie', label: '📰 AI e Giornalismo: fact-checking e futuro dell\'informazione' },
  ],
  'default': [
    { url: '/blog/le-20-professioni-piu-a-rischio-ai', label: '🔴 Le 20 professioni più a rischio AI in Italia' },
    { url: '/blog/come-difendere-il-lavoro-dallai', label: '🛡️ Come difendere il tuo lavoro dall\'AI' },
    { url: '/blog/competenze-che-lai-non-sostituira', label: '💡 Le competenze che l\'AI non sostituirà mai' },
  ],
};

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

// ── Rendering sezione upskilling ricca ────────────────────
function renderUpskillingCard(title, up) {
  const urgencyColors = {
    urgente: { bg: '#fee2e2', text: '#991b1b', border: '#fecaca' },
    alta:    { bg: '#fff7ed', text: '#9a3412', border: '#fed7aa' },
    media:   { bg: '#fefce8', text: '#854d0e', border: '#fde68a' },
  };
  const uc = urgencyColors[up.urgency] || urgencyColors.media;

  const skillsHtml = up.skills.map((skill, i) => {
    const coursesHtml = skill.courses.map(c => `
      <a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer"
         style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem 0.9rem;background:#f8f9ff;border:1px solid #e0e7ff;border-radius:10px;text-decoration:none;color:#0f172a;transition:all 0.15s;"
         onmouseover="this.style.borderColor='#6366f1';this.style.background='#eef2ff'"
         onmouseout="this.style.borderColor='#e0e7ff';this.style.background='#f8f9ff'">
        <div style="flex:1;min-width:0;">
          <div style="font-size:0.85rem;font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(c.name)}</div>
          <div style="font-size:0.74rem;color:#64748b;margin-top:0.1rem;">${esc(c.provider)}${c.duration ? ' · ' + esc(c.duration) : ''}</div>
        </div>
        <div style="display:flex;gap:0.3rem;flex-shrink:0;align-items:center;">
          ${c.free  ? '<span style="font-size:0.67rem;font-weight:700;background:#dcfce7;color:#166534;padding:0.15rem 0.45rem;border-radius:999px;white-space:nowrap;">Gratuito</span>' : ''}
          ${c.cert  ? '<span style="font-size:0.67rem;font-weight:700;background:#e0e7ff;color:#4338ca;padding:0.15rem 0.45rem;border-radius:999px;white-space:nowrap;">Certificato</span>' : ''}
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
      </a>`).join('');

    const isLast = i === up.skills.length - 1;
    return `
    <div style="margin-bottom:${isLast ? '0.5rem' : '1.5rem'};${isLast ? '' : 'padding-bottom:1.5rem;border-bottom:1px solid #f1f5f9;'}">
      <div style="display:flex;align-items:flex-start;gap:0.75rem;margin-bottom:0.75rem;">
        <span style="width:24px;height:24px;border-radius:50%;background:#6366f1;color:white;font-size:0.72rem;font-weight:700;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:0.15rem;">${i + 1}</span>
        <div>
          <div style="font-weight:700;font-size:0.95rem;color:#0f172a;">${esc(skill.name)}</div>
          <div style="font-size:0.82rem;color:#64748b;margin-top:0.2rem;line-height:1.4;">${esc(skill.why)}</div>
        </div>
      </div>
      <div style="margin-left:2.25rem;display:flex;flex-direction:column;gap:0.45rem;">
        ${coursesHtml}
      </div>
    </div>`;
  }).join('');

  return `
  <!-- Piano di upskilling specifico -->
  <div class="prof-card" style="border-left:3px solid #6366f1;">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.5rem;">
      <h2 style="margin:0;">🎯 Piano di upskilling per il ${esc(title)}</h2>
      <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;">
        <span style="font-size:0.72rem;font-weight:700;color:#1e40af;background:#dbeafe;border:1px solid #bfdbfe;padding:0.2rem 0.65rem;border-radius:999px;">⏱ ${esc(up.timeline)}</span>
        <span style="font-size:0.72rem;font-weight:700;color:${uc.text};background:${uc.bg};border:1px solid ${uc.border};padding:0.2rem 0.65rem;border-radius:999px;">Priorità ${esc(up.urgency)}</span>
      </div>
    </div>
    ${skillsHtml}
    <p style="font-size:0.76rem;color:#94a3b8;margin-top:1.25rem;margin-bottom:0;line-height:1.5;">
      🔬 I link portano a risorse esterne — verifica disponibilità e prezzi al momento dell'iscrizione. ·
      <a href="/metodologia" style="color:#6366f1;text-decoration:none;">Come calcoliamo il rischio →</a>
    </p>
  </div>`;
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
  const changelog  = ex?.changelog    || [];
  const upskilling = jobUpskilling[key] || null;

  // ── Data ultimo aggiornamento ──────────────────────────────
  const rawDate    = d.lastUpdated || '2026-07-05';
  const lastUpdFmt = (() => {
    try {
      const dt = new Date(rawDate + 'T00:00:00Z');
      return dt.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    } catch { return rawDate; }
  })();

  // ── HTML sezione changelog ─────────────────────────────────
  const changelogRows = changelog.length > 0
    ? changelog.map(entry => {
        const scoreDisplay = entry.score !== null && entry.score !== undefined
          ? `<span style="display:inline-flex;align-items:center;gap:0.3rem;font-weight:700;color:${riskColor(entry.score)};">${entry.score}%</span>`
          : `<span style="color:#9ca3af;font-size:0.8rem;">—</span>`;
        const entryDate = (() => {
          try {
            const dt = new Date(entry.date + 'T00:00:00Z');
            return dt.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
          } catch { return entry.date; }
        })();
        return `
              <div style="display:grid;grid-template-columns:140px 48px 1fr;gap:0.5rem 1rem;align-items:start;padding:0.65rem 0;border-bottom:1px solid #f3f4f6;">
                <span style="font-size:0.82rem;color:#6b7280;white-space:nowrap;">${esc(entryDate)}</span>
                <div style="text-align:center;">${scoreDisplay}</div>
                <span style="font-size:0.85rem;color:#374151;line-height:1.5;">${esc(entry.note)}</span>
              </div>`;
      }).join('')
    : `<p style="font-size:0.85rem;color:#9ca3af;padding:0.5rem 0;">Nessuna variazione registrata — primo aggiornamento il ${lastUpdFmt}.</p>`;

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
      a: upskilling
        ? `Per ridurre il rischio AI, il ${title} dovrebbe sviluppare: ${upskilling.skills.slice(0, 3).map(s => s.name).join(', ')}. Timeline consigliata: ${upskilling.timeline}.`
        : survival.length > 0
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

  // Occupation schema
  const occupationJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Occupation',
    'name': title,
    'description': d.description || `Analisi del rischio di automazione AI per la professione di ${title} in Italia.`,
    'occupationLocation': { '@type': 'Country', 'name': 'Italia' },
    'estimatedSalary': humanTotal > 0 ? {
      '@type': 'MonetaryAmountDistribution',
      'name': 'Retribuzione annua lorda',
      'currency': 'EUR',
      'duration': 'P1Y',
      'median': humanTotal,
    } : undefined,
    'occupationalCategory': cat,
    'skills': survival.slice(0, 5).join(', ') || 'Competenze professionali avanzate',
    'mainEntityOfPage': `https://www.jobriskai.it/professione/${sl}`,
  }, null, 2);

  // Speakable schema
  const speakableJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': `${title}: rischio AI ${pct}% — JobRiskAI`,
    'url': `https://www.jobriskai.it/professione/${sl}`,
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['.prof-hero', '.prof-speakable'],
    },
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
  <link rel="alternate" hreflang="it" href="https://www.jobriskai.it/professione/${sl}">
  <link rel="alternate" hreflang="en" href="https://www.jobriskai.it/professione/${sl}">
  <link rel="alternate" hreflang="es" href="https://www.jobriskai.it/professione/${sl}">
  <link rel="alternate" hreflang="de" href="https://www.jobriskai.it/professione/${sl}">
  <link rel="alternate" hreflang="fr" href="https://www.jobriskai.it/professione/${sl}">
  <link rel="alternate" hreflang="x-default" href="https://www.jobriskai.it/professione/${sl}">
  <link rel="alternate" type="text/plain" href="https://www.jobriskai.it/llms.txt" title="LLM-readable site description">
  <!-- AI citation meta tags -->
  <meta name="citation_title" content="${esc(title)}: rischio AI ${pct}% — Analisi JobRiskAI 2026">
  <meta name="citation_author" content="JobRiskAI">
  <meta name="citation_publication_date" content="2026">
  <meta name="citation_online_date" content="${d.lastUpdated || '2026-07-29'}">
  <meta name="citation_language" content="it">
  <meta name="dc.title" content="${esc(title)}: rischio di sostituzione AI ${pct}%, anno critico ${year}">
  <meta name="dc.creator" content="JobRiskAI">
  <meta name="dc.subject" content="rischio AI, automazione, ${esc(title)}, futuro del lavoro, ${esc(cat)}">
  <meta name="dc.description" content="Il ${esc(title)} ha un rischio di sostituzione AI del ${pct}% con anno critico ${year}. Analisi dei task automatizzabili, piano upskilling e confronto costi umano vs agente AI.">
  <meta name="dc.date" content="${d.lastUpdated || '2026-07-29'}">
  <meta name="dc.type" content="Text">
  <meta name="dc.identifier" content="https://www.jobriskai.it/professione/${sl}">
  <meta name="dc.language" content="it">
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
  <script type="application/ld+json">${occupationJsonLd}</script>
  <script type="application/ld+json">${speakableJsonLd}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet"></noscript>
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
  
${PILL_NAV}
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
          Rischio AI per il ${esc(title)}
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

        <div style="display:flex;align-items:center;justify-content:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:1.5rem;">
          <div style="display:inline-block;padding:0.5rem 1.2rem;border-radius:999px;font-weight:700;font-size:0.9rem;background:${riskColor(pct)}22;color:${riskColor(pct)};border:1px solid ${riskColor(pct)}44;">
            ${riskLabel(pct)}
          </div>
          <a href="#changelog" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.4rem 0.9rem;border-radius:999px;font-size:0.78rem;font-weight:500;color:#6b7280;background:#f9fafb;border:1px solid #e5e7eb;text-decoration:none;transition:all 0.15s;" title="Storico variazioni punteggio" onmouseover="this.style.borderColor='#6366f1';this.style.color='#6366f1'" onmouseout="this.style.borderColor='#e5e7eb';this.style.color='#6b7280'">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            Aggiornato: ${lastUpdFmt}
          </a>
        </div>

        ${d.survivalNote ? `<p style="color:var(--text-secondary);font-size:0.88rem;font-style:italic;max-width:520px;margin:0 auto;">💡 ${esc(d.survivalNote.charAt(0).toUpperCase() + d.survivalNote.slice(1))}.</p>` : ''}
        <div style="margin-top:1.25rem;padding:0.7rem 1rem;background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.18);border-radius:10px;font-size:0.78rem;color:#4b5563;line-height:1.5;max-width:500px;margin-left:auto;margin-right:auto;">
          ℹ️ <strong>Il punteggio indica la quota di task automatizzabili</strong>, non la probabilità personale di perdere il lavoro. I ruoli si trasformano, non solo scompaiono. <a href="/metodologia" style="color:#6366f1;font-weight:600;text-decoration:none;">Leggi la metodologia →</a>
        </div>
      </div>

      <!-- Paragrafo descrittivo unico per SEO -->
      <div class="prof-card prof-speakable" style="border-left:3px solid #e5e7eb;">
        <h2>📊 Analisi del rischio AI per il ${esc(title)}</h2>
        <p style="font-size:0.94rem;color:var(--text-primary);line-height:1.75;margin-bottom:0.75rem;">
          Il <strong>${esc(title)}</strong> è una professione nel settore <strong>${esc(cat)}</strong> con un rischio di automazione AI del <strong style="color:${riskColor(pct)};">${pct}%</strong> — ${pct >= 70 ? 'tra i più alti nel panorama lavorativo italiano' : pct >= 40 ? 'nella fascia media di rischio nel panorama lavorativo italiano' : 'tra i più bassi nel panorama lavorativo italiano'}.
          L'anno critico stimato è il <strong>${year}</strong>, ovvero il momento in cui i sistemi AI potrebbero essere in grado di svolgere la maggior parte dei task del ruolo in modo economicamente conveniente per le aziende.
        </p>
        <p style="font-size:0.94rem;color:var(--text-primary);line-height:1.75;margin-bottom:0.75rem;">
          ${pct >= 70
            ? `Questo livello di rischio elevato è determinato dall'alto grado di automazione già possibile con i sistemi AI attuali. I task più ripetitivi e strutturati del ruolo sono già parzialmente automatizzabili, e la tecnologia è in rapida evoluzione. Per i ${esc(title)}i che vogliono proteggere la propria carriera, è fondamentale sviluppare competenze ad alto valore aggiunto che l'AI non può replicare.`
            : pct >= 40
            ? `Questo livello di rischio intermedio riflette una realtà complessa: alcune attività del ${esc(title)} sono già parzialmente automatizzabili dall'AI, mentre altre — quelle che richiedono giudizio, relazione umana e creatività — restano fuori dalla portata dei sistemi attuali. Il rischio è reale ma gestibile con le giuste strategie di adattamento.`
            : `Questo basso livello di rischio indica che il ${esc(title)} svolge attività che richiedono capacità difficilmente replicabili dall'AI: giudizio contestuale complesso, relazioni umane profonde, responsabilità legale o etica, e competenze fisiche o sensoriali specializzate. La professione è relativamente protetta nel breve e medio termine.`
          }
        </p>
        ${humanTotal > 0 && aiAnnual > 0 ? `<p style="font-size:0.94rem;color:var(--text-primary);line-height:1.75;margin-bottom:0;">
          Dal punto di vista economico, il costo annuale di un <strong>${esc(title)}</strong> (stipendio + contributi) è di circa <strong>€${humanTotal.toLocaleString('it')}</strong>, rispetto a <strong style="color:var(--success);">€${aiAnnual.toLocaleString('it')}</strong> per un agente AI equivalente — un risparmio potenziale del <strong>${savingPct}%</strong> per le aziende. Questo differenziale di costo è uno dei principali driver dell'adozione AI nel settore ${esc(cat)}.
        </p>` : ''}
      </div>

      ${tasks.length > 0 ? `
      <!-- Analisi task -->
      <div class="prof-card">
        <h2>📋 Analisi dei task — cosa automatizzerà l'AI</h2>
        ${taskRows}
      </div>` : ''}

      ${upskilling
        ? renderUpskillingCard(title, upskilling)
        : survival.length > 0
          ? `<!-- Piano di sopravvivenza (legacy) -->
      <div class="prof-card" style="border-left:3px solid var(--success);">
        <h2>🛡️ Piano di sopravvivenza per il ${esc(title)}</h2>
        <ul style="list-style:none;padding:0;margin:0;">${survivalItems}</ul>
      </div>`
          : ''
      }

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

      <!-- Articoli correlati dinamici per categoria -->
      <div class="prof-card">
        <h2>📖 Approfondisci — Articoli correlati</h2>
        <div style="display:flex;flex-direction:column;gap:0.6rem;">
          ${(CATEGORY_ARTICLES[cat] || CATEGORY_ARTICLES['default']).map(a =>
            `<a href="${esc(a.url)}" style="display:block;padding:0.75rem 1rem;border:1px solid var(--border);border-radius:10px;text-decoration:none;color:var(--text-primary);font-size:0.9rem;font-weight:500;transition:all 0.15s;" onmouseover="this.style.borderColor='var(--primary)';this.style.background='rgba(99,102,241,0.04)'" onmouseout="this.style.borderColor='var(--border)';this.style.background=''">${esc(a.label)}</a>`
          ).join('\n          ')}
        </div>
      </div>

      <!-- ── CHANGELOG ─────────────────────────────────────── -->
      <details id="changelog" style="background:white;border:1.5px solid #e5e7eb;border-radius:14px;overflow:hidden;margin-bottom:1.5rem;">
        <summary style="display:flex;align-items:center;justify-content:space-between;padding:1rem 1.25rem;cursor:pointer;user-select:none;list-style:none;gap:1rem;" onclick="">
          <div style="display:flex;align-items:center;gap:0.6rem;">
            <span style="font-size:1rem;">🕐</span>
            <span style="font-family:'Space Grotesk',sans-serif;font-size:0.95rem;font-weight:700;color:#1f2937;">Changelog — Storico variazioni punteggio</span>
          </div>
          <div style="display:flex;align-items:center;gap:0.75rem;flex-shrink:0;">
            <span style="font-size:0.78rem;color:#9ca3af;">Ultimo agg.: ${lastUpdFmt}</span>
            <svg class="cl-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" style="transition:transform 0.2s;flex-shrink:0;"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </summary>
        <div style="padding:0 1.25rem 1.25rem;">
          <div style="display:grid;grid-template-columns:140px 48px 1fr;gap:0 1rem;padding:0.4rem 0 0.5rem;border-bottom:2px solid #f3f4f6;margin-bottom:0.25rem;">
            <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#9ca3af;">Data</span>
            <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#9ca3af;text-align:center;">Score</span>
            <span style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#9ca3af;">Nota</span>
          </div>
          ${changelogRows}
          <p style="font-size:0.78rem;color:#9ca3af;margin-top:0.9rem;padding-top:0.75rem;border-top:1px solid #f3f4f6;">
            Il changelog viene aggiornato ad ogni revisione semestrale del dataset. <a href="/metodologia" style="color:#6366f1;">Come funziona il calcolo →</a>
          </p>
        </div>
      </details>
      <script>
        (function(){
          var d = document.getElementById('changelog');
          if (!d) return;
          d.addEventListener('toggle', function(){
            var arrow = d.querySelector('.cl-arrow');
            if (arrow) arrow.style.transform = d.open ? 'rotate(180deg)' : '';
          });
          // Apri automaticamente se URL contiene #changelog
          if (window.location.hash === '#changelog') d.open = true;
        })();
      </script>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p class="footer-text">JobRiskAI · Analisi gratuita del rischio AI per 235 professioni italiane</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/classifica" style="color:var(--text-secondary);">Classifica</a> · <a href="/calcolatore" style="color:var(--text-secondary);">Calcolatore</a> · <a href="/confronta" style="color:var(--text-secondary);">Confronta</a> · <a href="/dati" style="color:var(--text-secondary);">Dati</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
      <nav aria-label="Footer links" style="margin-top:0.5rem; display:flex; flex-wrap:wrap; gap:0.25rem 1rem;">
        <a href="/blog" style="color:var(--text-secondary); font-size:0.8rem;">Blog</a>
        <a href="/glossario" style="color:var(--text-secondary); font-size:0.8rem;">Glossario</a>
        <a href="/metodologia" style="color:#6366f1; font-size:0.8rem; font-weight:600;">Metodologia</a>
        <a href="/chi-siamo" style="color:var(--text-secondary); font-size:0.8rem;">Chi Siamo</a>
        <a href="/privacy-policy" style="color:var(--text-secondary); font-size:0.8rem;">Privacy Policy</a>
        <a href="/termini-servizio" style="color:var(--text-secondary); font-size:0.8rem;">Termini</a>
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

  const rows = sorted.map((d, i) => `<tr><td class="td-rank">${i + 1}</td><td class="td-prof"><a href="/professione/${slug(d.key)}"><span class="icon">${d.icon || '💼'}</span><span class="name">${esc(d.title)}</span></a></td><td class="td-cat hide-mobile">${esc(d.cat)}</td><td class="risk-cell td-risk" data-base-risk="${d.pct}"><div class="td-risk-inner"><div class="td-risk-bar-wrap"><div class="risk-bar" style="width:${d.pct}%;background:${riskColor(d.pct)};"></div></div><span class="risk-pct" style="color:${riskColor(d.pct)};">${d.pct}%</span></div></td><td class="year-cell td-year" data-base-year="${d.targetYear}">${d.targetYear}</td></tr>`).join('\n');

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
  <link rel="alternate" type="text/plain" href="https://www.jobriskai.it/llms.txt" title="LLM-readable site description">
  <!-- AI citation meta tags -->
  <meta name="citation_title" content="Classifica 235 professioni per rischio AI — JobRiskAI 2026">
  <meta name="citation_author" content="JobRiskAI">
  <meta name="citation_publication_date" content="2025">
  <meta name="citation_online_date" content="2026-07-29">
  <meta name="citation_language" content="it">
  <meta name="dc.title" content="I 235 lavori più a rischio AI in Italia — Classifica JobRiskAI 2026">
  <meta name="dc.creator" content="JobRiskAI">
  <meta name="dc.subject" content="classifica rischio AI, lavori a rischio automazione, professioni italiane, futuro del lavoro 2026">
  <meta name="dc.description" content="Classifica completa di 235 professioni italiane ordinate per rischio di sostituzione AI. Dal Data Entry Clerk (92%) al CEO (8%). Anno critico, costi e confronto per ogni ruolo.">
  <meta name="dc.date" content="2026-07-29">
  <meta name="dc.type" content="Dataset">
  <meta name="dc.identifier" content="https://www.jobriskai.it/classifica">
  <meta name="dc.language" content="it">
  <meta property="og:title" content="I 235 lavori più a rischio AI in Italia [2026] | JobRiskAI">
  <meta property="og:description" content="Classifica completa: dal Data Entry Clerk (92%) al CEO (8%). Scopri il rischio AI di ogni professione italiana.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.jobriskai.it/classifica">
  <meta property="og:image" content="https://www.jobriskai.it/og-image.png">
  <meta property="og:site_name" content="JobRiskAI">
  <script type="application/ld+json">${faqJsonLd}</script>
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'JobRiskAI', item: 'https://www.jobriskai.it/' }, { '@type': 'ListItem', position: 2, name: 'Classifica professioni a rischio AI', item: 'https://www.jobriskai.it/classifica' }] })}</script>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"I 235 lavori più a rischio AI in Italia — Classifica JobRiskAI 2026","url":"https://www.jobriskai.it/classifica","speakable":{"@type":"SpeakableSpecification","cssSelector":[".cla-hero-text",".cla-speakable"]}}</script>
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet"></noscript>
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
    /* Row cell utility classes — evitano stili inline ripetuti 235× */
    .td-rank { font-weight:600;color:var(--text-secondary);font-size:0.85rem;padding:0.75rem 0.5rem; }
    .td-prof { padding:0.75rem 0.5rem; }
    .td-prof a { display:flex;align-items:center;gap:0.6rem;text-decoration:none;color:var(--text-primary); }
    .td-prof .icon { font-size:1.2rem; }
    .td-prof .name { font-weight:600;font-size:0.92rem; }
    .td-cat { padding:0.75rem 0.5rem;font-size:0.82rem;color:var(--text-secondary); }
    .td-risk { padding:0.75rem 0.5rem; }
    .td-risk-inner { display:flex;align-items:center;gap:0.5rem; }
    .td-risk-bar-wrap { width:60px;height:6px;background:var(--border);border-radius:999px;overflow:hidden; }
    .risk-bar { height:100%;border-radius:999px; }
    .risk-pct { font-weight:700;font-size:0.9rem; }
    .td-year { padding:0.75rem 0.5rem;font-size:0.88rem;color:var(--text-secondary); }
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
  
${PILL_NAV}
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
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/confronta" style="color:var(--text-secondary);">Confronta</a> · <a href="/dati" style="color:var(--text-secondary);">Dati</a> · <a href="/calcolatore" style="color:var(--text-secondary);">Calcolatore</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
      <nav aria-label="Footer links" style="margin-top:0.5rem; display:flex; flex-wrap:wrap; gap:0.25rem 1rem;">
        <a href="/blog" style="color:var(--text-secondary); font-size:0.8rem;">Blog</a>
        <a href="/glossario" style="color:var(--text-secondary); font-size:0.8rem;">Glossario</a>
        <a href="/metodologia" style="color:#6366f1; font-size:0.8rem; font-weight:600;">Metodologia</a>
        <a href="/chi-siamo" style="color:var(--text-secondary); font-size:0.8rem;">Chi Siamo</a>
        <a href="/privacy-policy" style="color:var(--text-secondary); font-size:0.8rem;">Privacy Policy</a>
        <a href="/termini-servizio" style="color:var(--text-secondary); font-size:0.8rem;">Termini</a>
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
(async () => {
  const outDir = join(ROOT, 'public/professione');
  mkdirSync(outDir, { recursive: true });

  const urls = [];

  // Genera tutte le pagine in parallelo per build più veloce
  const keys = Object.keys(jobData);
  const writePromises = keys.map(async (key) => {
    const html = buildProfessionPage(key);
    if (!html) { console.warn(`Skip ${key} (no data)`); return null; }
    const sl = slug(key);
    await fsPromises.writeFile(join(outDir, `${sl}.html`), html, 'utf8');
    return `https://www.jobriskai.it/professione/${sl}`;
  });

  const results = await Promise.all(writePromises);
  const profUrls = results.filter(Boolean);
  urls.push(...profUrls);

  writeFileSync(join(ROOT, 'public/classifica.html'), buildClassificaPage(), 'utf8');
  urls.push('https://www.jobriskai.it/classifica');

  // Scrivi urls.json per il sitemap
  writeFileSync(join(ROOT, 'scripts/generated-urls.json'), JSON.stringify(urls, null, 2), 'utf8');

  console.log(`✅ Generati ${profUrls.length} pagine professione + classifica.html`);
  console.log(`📝 URL salvati in scripts/generated-urls.json`);
})();
