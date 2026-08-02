/**
 * upskilling-data.mjs
 * Contenuto specifico di upskilling per le 20 professioni ad alto rischio AI.
 * Struttura per professione:
 *   { timeline, urgency, skills: [{ name, why, courses: [{name, provider, url, free, cert, duration}] }] }
 *
 * "urgency": "urgente" | "alta" | "media"
 */

export const jobUpskilling = {

  /* ─────────────────────────── 1. DATA ENTRY (92%) ─────────────────────────── */
  data_entry: {
    timeline: '3-6 mesi',
    urgency: 'urgente',
    skills: [
      {
        name: 'Automazione con Excel / Google Sheets avanzato',
        why: 'Macro, XLOOKUP e Power Query eliminano il 60-70% del lavoro manuale ripetitivo che l\'AI sostituirà per prima.',
        courses: [
          { name: 'Excel Skills for Business (Specialization)', provider: 'Macquarie University – Coursera', url: 'https://www.coursera.org/specializations/excel', free: false, cert: true, duration: '5 mesi' },
          { name: 'Google Sheets – Advanced Topics', provider: 'Google Workspace Learning Center', url: 'https://support.google.com/a/users/answer/9282959', free: true, cert: false, duration: 'Auto-paced' },
          { name: 'Power Query & Power Pivot for Excel', provider: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/power-query/power-query-what-is-power-query', free: true, cert: false, duration: '3 settimane' },
        ],
      },
      {
        name: 'RPA con UiPath (Robotic Process Automation)',
        why: 'Chi sa programmare bot di automazione rimane indispensabile mentre i bot sostituiscono i data-entry manuali.',
        courses: [
          { name: 'UiPath RPA Developer Foundation', provider: 'UiPath Academy', url: 'https://academy.uipath.com/learning-plans/rpa-developer-foundation', free: true, cert: true, duration: '40 ore' },
          { name: 'Automation Anywhere Essentials', provider: 'Automation Anywhere University', url: 'https://upskill.automationanywhere.com/path/automation-anywhere-rpa-essentials-for-students-automation-360', free: true, cert: true, duration: '20 ore' },
        ],
      },
      {
        name: 'Data Quality & Governance',
        why: 'Verificare, pulire e certificare i dati prodotti dall\'AI è un ruolo emergente che nessun software fa da solo.',
        courses: [
          { name: 'Data Quality Fundamentals', provider: 'DAMA International – Udemy', url: 'https://www.udemy.com/course/data-quality-management-masterclass-the-complete-course/', free: false, cert: true, duration: '8 ore' },
          { name: 'Google Data Analytics Certificate', provider: 'Google – Coursera', url: 'https://www.coursera.org/professional-certificates/google-data-analytics', free: false, cert: true, duration: '6 mesi' },
        ],
      },
      {
        name: 'Python per automazione dati',
        why: 'Anche solo 20 ore di Python + pandas bastano per automatizzare task di trasformazione dati che valgono mesi di lavoro manuale.',
        courses: [
          { name: 'Python for Everybody', provider: 'University of Michigan – Coursera', url: 'https://www.coursera.org/specializations/python', free: false, cert: true, duration: '4 mesi' },
          { name: 'Automate the Boring Stuff with Python', provider: 'Al Sweigart – free online', url: 'https://automatetheboringstuff.com/', free: true, cert: false, duration: 'Auto-paced' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 2. CONTABILE (85%) ─────────────────────────── */
  contabile: {
    timeline: '12-18 mesi',
    urgency: 'urgente',
    skills: [
      {
        name: 'Software ERP e contabilità digitale (Zucchetti, SAP, Odoo)',
        why: 'La contabilità di base è già automatizzata nei principali ERP; essere l\'esperto del software è l\'unico modo per restare rilevanti.',
        courses: [
          { name: 'SAP S/4HANA Finance Fundamentals', provider: 'SAP Learning Hub', url: 'https://learning.sap.com/learning-journeys/explore-the-basics-of-sap-s-4hana', free: true, cert: true, duration: '20 ore' },
          { name: 'Odoo Accounting Functional Training', provider: 'Odoo eLearning', url: 'https://www.odoo.com/slides/odoo-academy-accounting-458', free: true, cert: true, duration: '15 ore' },
        ],
      },
      {
        name: 'Analisi finanziaria e controllo di gestione',
        why: 'L\'interpretazione strategica dei numeri (budget, forecast, scostamenti) resta umana; aggiornare il libro paga no.',
        courses: [
          { name: 'Financial Analysis and Reporting', provider: 'University of Illinois – Coursera', url: 'https://www.coursera.org/learn/financial-analysis', free: false, cert: true, duration: '4 settimane' },
          { name: 'Controllo di Gestione – Percorso Pratico', provider: 'IFAF Milano (CFP Commissione)', url: 'https://www.ifaf.it/', free: false, cert: true, duration: '32 ore' },
        ],
      },
      {
        name: 'Fiscalità digitale e fatturazione elettronica avanzata',
        why: 'Il regime OSS/IVA internazionale, il precompilato IVA e le novità normative sono aree dove serve specializzazione umana.',
        courses: [
          { name: 'Percorso Fiscalità Digitale', provider: 'Agenzia delle Entrate – Scuola Superiore Economia e Finanze', url: 'https://www.ssef.it/', free: true, cert: false, duration: 'Auto-paced' },
          { name: 'Tax Technology & Digital Transformation', provider: 'ODCEC Milano – Formazione Continua', url: 'https://www.odcec.mi.it/formazione', free: false, cert: true, duration: '16 ore' },
        ],
      },
      {
        name: 'Power BI per reporting finanziario',
        why: 'Produrre dashboard finanziarie leggibili dai manager vale 5x rispetto a stampare PDF di estratti conto.',
        courses: [
          { name: 'Microsoft Power BI Data Analyst (PL-300)', provider: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/credentials/certifications/power-bi-data-analyst-associate/', free: true, cert: true, duration: '3 mesi' },
          { name: 'Power BI for Finance Professionals', provider: 'Pragmatic Works – Udemy', url: 'https://www.udemy.com/course/power-bi-for-finance-professionals/', free: false, cert: true, duration: '12 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 3. CUSTOMER SERVICE (80%) ─────────────────────────── */
  customer_service: {
    timeline: '6-12 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Gestione escalation complesse e clienti difficili',
        why: 'I chatbot AI gestiscono il Tier-1; gli umani servono per escalation emotive, frodi, eccezioni di policy — il segmento che cresce.',
        courses: [
          { name: 'De-escalation & Conflict Resolution', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/conflict-resolution-foundations-4', free: false, cert: true, duration: '1 ora' },
          { name: 'Customer Experience (CX) Fundamentals', provider: 'CX University – free', url: 'https://cxuniversity.com/courses/', free: true, cert: true, duration: '5 ore' },
        ],
      },
      {
        name: 'CRM avanzato (Salesforce, HubSpot, Zendesk)',
        why: 'Saper configurare, segmentare e analizzare dati CRM trasforma un operatore in un profilo difficilmente sostituibile.',
        courses: [
          { name: 'Salesforce Service Cloud Consultant', provider: 'Salesforce Trailhead', url: 'https://trailhead.salesforce.com/en/credentials/servicecloudconsultant', free: true, cert: true, duration: '60 ore' },
          { name: 'HubSpot Service Hub Certification', provider: 'HubSpot Academy', url: 'https://academy.hubspot.com/courses/service-hub', free: true, cert: true, duration: '4 ore' },
          { name: 'Zendesk Customer Service Professional', provider: 'Zendesk Training', url: 'https://training.zendesk.com/page/zendesk-certifications', free: false, cert: true, duration: '8 ore' },
        ],
      },
      {
        name: 'Comunicazione scritta professionale multicanale',
        why: 'Rispondere con empatia, chiarezza e coerenza di brand su email/chat/social è ciò che distingue umani da bot.',
        courses: [
          { name: 'Writing Winning Business Proposals', provider: 'University of Maryland – Coursera', url: 'https://www.coursera.org/learn/business-writing', free: false, cert: true, duration: '4 settimane' },
          { name: 'Business English Communication Skills', provider: 'University of Washington – Coursera', url: 'https://www.coursera.org/specializations/business-english', free: false, cert: true, duration: '3 mesi' },
        ],
      },
      {
        name: 'Gestione chatbot e supervisione AI',
        why: 'Le aziende hanno bisogno di persone che configurino, testino e migliorino i bot: è il ruolo emergente nel customer care.',
        courses: [
          { name: 'Conversational AI & Chatbot Design', provider: 'IBM – Coursera', url: 'https://www.coursera.org/learn/building-ai-powered-chatbots', free: false, cert: true, duration: '3 settimane' },
          { name: 'Dialogflow CX Foundations', provider: 'Google Cloud Skills Boost', url: 'https://www.cloudskillsboost.google/paths/183', free: true, cert: false, duration: '10 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 4. IMPIEGATO AMMINISTRATIVO (80%) ─────────────────────────── */
  impiegato_amm: {
    timeline: '6-12 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Microsoft 365 avanzato (Teams, SharePoint, Power Automate)',
        why: 'Power Automate permette di creare flussi di approvazione, notifiche e integrazioni senza scrivere codice.',
        courses: [
          { name: 'Microsoft 365 Fundamentals (MS-900)', provider: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/credentials/certifications/microsoft-365-fundamentals/', free: true, cert: true, duration: '4 settimane' },
          { name: 'Power Automate per utenti aziendali', provider: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/training/paths/automate-process-power-automate/', free: true, cert: false, duration: '8 ore' },
        ],
      },
      {
        name: 'Gestione documentale digitale e GDPR',
        why: 'La compliance documentale (conservazione digitale, firma elettronica, protezione dati) richiede un presidio umano qualificato.',
        courses: [
          { name: 'GDPR Practitioner Certificate', provider: 'ISACA – BCS', url: 'https://www.bcs.org/qualifications-and-certifications/certifications-for-it-professionals/data-protection-and-privacy/bcs-practitioner-certificate-in-data-protection/', free: false, cert: true, duration: '16 ore' },
          { name: 'Gestione documentale e conservazione digitale', provider: 'FormezPA', url: 'https://www.formez.it/formazione/', free: true, cert: false, duration: '8 ore' },
        ],
      },
      {
        name: 'Project management di base (Agile / Kanban)',
        why: 'Coordinare attività, scadenze e fornitori è un\'evoluzione naturale dall\'amministrazione pura.',
        courses: [
          { name: 'Google Project Management Certificate', provider: 'Google – Coursera', url: 'https://www.coursera.org/professional-certificates/google-project-management', free: false, cert: true, duration: '6 mesi' },
          { name: 'Agile Foundations', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/agile-foundations', free: false, cert: true, duration: '1.5 ore' },
        ],
      },
      {
        name: 'Analisi dati con Excel / Power BI',
        why: 'Trasformare i dati amministrativi in report decisionali è una skill rara e molto richiesta tra i profili amministrativi.',
        courses: [
          { name: 'Data Analysis with Excel', provider: 'IBM – Coursera', url: 'https://www.coursera.org/learn/excel-basics-data-analysis-ibm', free: false, cert: true, duration: '11 ore' },
          { name: 'Power BI Desktop Essential Training', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/power-bi-desktop-essential-training', free: false, cert: true, duration: '5 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 5. SOC ANALYST (78%) ─────────────────────────── */
  soc_analyst: {
    timeline: '12-18 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Threat Hunting e analisi avanzata SIEM',
        why: 'I SIEM di nuova generazione con AI generano alert automatici; serve un umano per interpretare pattern anomali e condurre hunting proattivo.',
        courses: [
          { name: 'IBM Cybersecurity Analyst Professional Certificate', provider: 'IBM – Coursera', url: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst', free: false, cert: true, duration: '8 mesi' },
          { name: 'CompTIA Security+ (SY0-701)', provider: 'CompTIA', url: 'https://www.comptia.org/certifications/security', free: false, cert: true, duration: '3 mesi' },
        ],
      },
      {
        name: 'Incident Response e Digital Forensics',
        why: 'Gestire una violazione in tempo reale — contenimento, eradicazione, recovery — resta irriproducibile da sistemi automatici.',
        courses: [
          { name: 'Incident Response & Forensics', provider: 'EC-Council – Coursera', url: 'https://www.coursera.org/learn/incident-response-forensics', free: false, cert: true, duration: '4 settimane' },
          { name: 'SANS FOR508: Advanced Incident Response', provider: 'SANS Institute', url: 'https://www.sans.org/courses/advanced-incident-response-threat-hunting-training/', free: false, cert: true, duration: '5 giorni' },
        ],
      },
      {
        name: 'Cloud Security (AWS / Azure / GCP)',
        why: 'La superficie d\'attacco si è spostata sul cloud: servono competenze specifiche su identity, storage e network security cloud-native.',
        courses: [
          { name: 'AWS Security Specialty (SCS-C02)', provider: 'AWS Skill Builder', url: 'https://skillbuilder.aws/exam-prep/security-specialty', free: true, cert: true, duration: '3 mesi' },
          { name: 'Microsoft Security, Compliance & Identity (SC-900)', provider: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/credentials/certifications/security-compliance-and-identity-fundamentals/', free: true, cert: true, duration: '4 settimane' },
        ],
      },
      {
        name: 'AI Security e adversarial ML',
        why: 'Gli attacchi ai modelli AI (prompt injection, poisoning) sono la nuova frontiera: i SOC che la dominano avranno un vantaggio unico.',
        courses: [
          { name: 'AI Security Fundamentals', provider: 'Microsoft Learn – AI Security', url: 'https://learn.microsoft.com/en-us/security/ai-security/', free: true, cert: false, duration: '5 ore' },
          { name: 'Adversarial Machine Learning', provider: 'University of Maryland – Coursera', url: 'https://www.coursera.org/learn/adversarial-machine-learning', free: false, cert: true, duration: '6 settimane' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 6. TRADUTTORE (78%) ─────────────────────────── */
  traduttore: {
    timeline: '12-18 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Post-editing di Machine Translation (MTPE)',
        why: 'Il mercato si è già trasformato: agenzie e clienti pagano per correggere output AI velocemente, non per tradurre da zero.',
        courses: [
          { name: 'Machine Translation & Post-Editing', provider: 'Udemy', url: 'https://www.udemy.com/course/machine-translation-post-editing-mtpe-for-beginners/', free: false, cert: true, duration: '6 ore' },
          { name: 'MOOC Translation in the Digital Age', provider: 'University of Geneva – Coursera', url: 'https://www.coursera.org/learn/translation', free: false, cert: true, duration: '5 settimane' },
        ],
      },
      {
        name: 'Localizzazione software e UI (CAT tools)',
        why: 'SDL Trados, MemoQ e Phrase (ex-Memsource) sono standard industriali; chi li padroneggia lavora su volumi che l\'AI da sola non può gestire end-to-end.',
        courses: [
          { name: 'SDL Trados Studio Essentials', provider: 'RWS – Trados Academy', url: 'https://www.rws.com/localization/products/trados/training/', free: false, cert: true, duration: '16 ore' },
          { name: 'MemoQ Certified Translator Training', provider: 'MemoQ Academy', url: 'https://www.memoq.com/memoq-training', free: false, cert: true, duration: '8 ore' },
        ],
      },
      {
        name: 'Traduzione specializzata (legale, medica, tecnica)',
        why: 'La specializzazione verticale difende dalla commoditizzazione: i clienti pagano 3-5× per un traduttore medico-legale rispetto a uno generalista.',
        courses: [
          { name: 'Legal Translation & Terminology', provider: 'University of Geneva – Coursera', url: 'https://www.coursera.org/learn/legal-translation', free: false, cert: true, duration: '6 settimane' },
          { name: 'Medical Terminology for Healthcare Professionals', provider: 'University of Pittsburgh – Coursera', url: 'https://www.coursera.org/learn/medical-terminology', free: false, cert: true, duration: '4 settimane' },
        ],
      },
      {
        name: 'Copywriting e transcreazione culturale',
        why: 'Adattare contenuti di marketing preservando tono e impatto culturale è dove l\'AI fallisce sistematicamente — ed è il segmento meglio pagato.',
        courses: [
          { name: 'The Strategy of Content Marketing', provider: 'UC Davis – Coursera', url: 'https://www.coursera.org/learn/content-marketing', free: false, cert: true, duration: '4 settimane' },
          { name: 'Copywriting Secrets – Udemy Bestseller', provider: 'Udemy', url: 'https://www.udemy.com/course/copywriting-secrets/', free: false, cert: true, duration: '10 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 7. MAGAZZINIERE (78%) ─────────────────────────── */
  magazziniere: {
    timeline: '18-36 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Operatore di robot collaborativi (cobot) e AMR',
        why: 'Amazon, DHL e GLS stanno installando robot AMR in tutti i magazzini: chi sa affiancarli e mantenerli vale il doppio.',
        courses: [
          { name: 'Collaborative Robotics Fundamentals', provider: 'Universal Robots Academy', url: 'https://www.universal-robots.com/academy/', free: true, cert: true, duration: '6 ore' },
          { name: 'Automation & Robotics in Supply Chain', provider: 'MITx – edX', url: 'https://www.edx.org/learn/supply-chain-management/massachusetts-institute-of-technology-supply-chain-technology-and-systems', free: false, cert: true, duration: '6 settimane' },
        ],
      },
      {
        name: 'WMS (Warehouse Management System) avanzato',
        why: 'SAP Extended Warehouse Management e Manhattan WMS gestiscono milioni di movimenti al giorno; servirà sempre qualcuno che li configuri e supervisioni.',
        courses: [
          { name: 'SAP Extended Warehouse Management (EWM)', provider: 'SAP Learning Hub', url: 'https://learning.sap.com/learning-journeys/shipping-and-receiving-using-sap-extended-warehouse-management', free: true, cert: true, duration: '20 ore' },
          { name: 'Warehouse Management Fundamentals', provider: 'APICS / ASCM – Coursera', url: 'https://www.coursera.org/learn/supply-chain-logistics', free: false, cert: true, duration: '4 settimane' },
        ],
      },
      {
        name: 'Patente muletto e carrelli elevatori avanzati (AGV/LGV)',
        why: 'I veicoli a guida autonoma (AGV) richiedono operatori certificati per supervisione, manutenzione di primo livello e gestione eccezioni.',
        courses: [
          { name: 'Carrelli elevatori – Abilitazione specifica (D.Lgs. 81/2008)', provider: 'INAIL – provider locali accreditati', url: 'https://www.inail.it/cs/internet/attivita/prevenzione-e-sicurezza/formazione.html', free: false, cert: true, duration: '12 ore' },
        ],
      },
      {
        name: 'Lean Logistics e controllo qualità picking',
        why: 'Ottimizzare i processi di picking, packing e slotting con metodi Lean riduce i costi del 15-30% e rende il profilo indispensabile.',
        courses: [
          { name: 'Lean Six Sigma Yellow Belt', provider: 'Coursera Project Network', url: 'https://www.coursera.org/learn/six-sigma-and-the-organization', free: false, cert: true, duration: '3 settimane' },
          { name: 'Supply Chain Fundamentals', provider: 'MITx – edX', url: 'https://www.edx.org/learn/supply-chain-design/massachusetts-institute-of-technology-supply-chain-fundamentals', free: false, cert: true, duration: '10 settimane' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 8. ASSISTENTE AMMINISTRATIVO PA (78%) ─────────────────────────── */
  assistente_amministrativo_pa: {
    timeline: '6-12 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Codice Appalti digitale (CAD, D.Lgs. 36/2023)',
        why: 'La riforma del Codice Appalti 2023 introduce obblighi digitali che molti enti faticano a gestire: essere l\'esperto interno è protettivo.',
        courses: [
          { name: 'Nuovo Codice Appalti – Aggiornamento professionale', provider: 'FormezPA – Percorso PA digitale', url: 'https://www.formez.it/formazione/', free: true, cert: true, duration: '16 ore' },
          { name: 'e-Procurement e Mercato Elettronico PA (MEPA)', provider: 'Acquistinretepa – Consip Academy', url: 'https://www.acquistinretepa.it/', free: true, cert: false, duration: 'Auto-paced' },
        ],
      },
      {
        name: 'Trasparenza amministrativa e accesso agli atti (FOIA)',
        why: 'La normativa sull\'accesso civico generalizzato (D.Lgs. 33/2013) è spesso mal applicata; saperla gestire vale promozioni interne.',
        courses: [
          { name: 'Open Government & Trasparenza – Percorso PA', provider: 'FormezPA', url: 'https://www.formez.it/formazione/', free: true, cert: false, duration: '8 ore' },
          { name: 'Gestione documentale e protocollo informatico', provider: 'AGID – Scuola Nazionale della PA', url: 'https://www.sna.gov.it/', free: true, cert: false, duration: '8 ore' },
        ],
      },
      {
        name: 'Gestione fondi PNRR e rendicontazione europea',
        why: 'I fondi PNRR richiedono rendicontazione granulare: chi sa usare i sistemi di monitoraggio (ReGiS) è introvabile in molti enti.',
        courses: [
          { name: 'PNRR – Gestione e rendicontazione progetti', provider: 'Scuola Nazionale dell\'Amministrazione (SNA)', url: 'https://www.sna.gov.it/corsi/', free: true, cert: true, duration: '16 ore' },
          { name: 'EU Project Management Fundamentals', provider: 'European Institute of Public Administration', url: 'https://www.eipa.eu/training/', free: false, cert: true, duration: '3 giorni' },
        ],
      },
      {
        name: 'Privacy e DPO basics (Reg. UE 2016/679)',
        why: 'Ogni PA deve avere un DPO o un referente privacy: la formazione è obbligatoria e scarseggia nei ruoli amministrativi.',
        courses: [
          { name: 'GDPR for Public Sector', provider: 'Privacy & Data Protection – Udemy', url: 'https://www.udemy.com/course/gdpr-for-public-sector/', free: false, cert: true, duration: '6 ore' },
          { name: 'Percorso DPO – Garante Privacy', provider: 'Garante per la Protezione dei Dati Personali', url: 'https://www.garanteprivacy.it/formazione', free: true, cert: false, duration: 'Auto-paced' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 9. DEVELOPER (75%) ─────────────────────────── */
  developer: {
    timeline: '6-12 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'AI-assisted development e prompt engineering per codice',
        why: 'GitHub Copilot, Cursor e Claude Code moltiplicano la produttività: i dev che li padronegiano scrivono 3-5× più codice dello stesso livello qualitativo.',
        courses: [
          { name: 'GitHub Copilot Fundamentals', provider: 'GitHub Skills', url: 'https://skills.github.com/', free: true, cert: false, duration: '4 ore' },
          { name: 'Prompt Engineering for Developers', provider: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', free: true, cert: false, duration: '2 ore' },
        ],
      },
      {
        name: 'Architetture LLM e integrazione AI nelle applicazioni',
        why: 'Saper integrare API OpenAI/Anthropic/Gemini in prodotti software è la skill più richiesta e meglio pagata del momento.',
        courses: [
          { name: 'LangChain for LLM Application Development', provider: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/courses/langchain', free: true, cert: false, duration: '3 ore' },
          { name: 'Building Systems with the ChatGPT API', provider: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/', free: true, cert: false, duration: '2 ore' },
          { name: 'Developing AI Applications on Azure', provider: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/training/paths/develop-ai-solutions-azure-openai/', free: true, cert: false, duration: '6 ore' },
        ],
      },
      {
        name: 'Cloud-native development (AWS / Azure / GCP)',
        why: 'Il mercato è già cloud-first: Lambda, Container Apps e Cloud Run sono standard su cui la maggior parte dei dev italiani è ancora indietro.',
        courses: [
          { name: 'AWS Certified Developer – Associate (DVA-C02)', provider: 'AWS Skill Builder', url: 'https://skillbuilder.aws/exam-prep/developer-associate', free: true, cert: true, duration: '3 mesi' },
          { name: 'Google Associate Cloud Engineer', provider: 'Google Cloud Skills Boost', url: 'https://www.cloudskillsboost.google/paths/11', free: false, cert: true, duration: '3 mesi' },
        ],
      },
      {
        name: 'Security-first development (OWASP, SAST, DAST)',
        why: 'Con l\'AI che genera codice a velocità record, la code review focalizzata sulla sicurezza diventa il valore differenziale dell\'umano.',
        courses: [
          { name: 'OWASP Top 10 Security Risks', provider: 'OWASP Foundation – gratuito', url: 'https://owasp.org/www-project-top-ten/', free: true, cert: false, duration: 'Auto-paced' },
          { name: 'Secure Coding Practices', provider: 'UC Davis – Coursera', url: 'https://www.coursera.org/specializations/secure-coding-practices', free: false, cert: true, duration: '4 mesi' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 10. CREDIT COLLECTOR (75%) ─────────────────────────── */
  credit_collector: {
    timeline: '6-12 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Tecniche di negoziazione e recupero stragiudiziale avanzato',
        why: 'I sistemi AI gestiscono i solleciti standard; i casi complessi (accordi di saldo-e-stralcio, piani di rientro) richiedono negoziazione umana qualificata.',
        courses: [
          { name: 'Successful Negotiation: Essential Strategies', provider: 'University of Michigan – Coursera', url: 'https://www.coursera.org/learn/negotiation-skills', free: false, cert: true, duration: '4 settimane' },
          { name: 'Tecniche di Recupero Crediti Avanzate', provider: 'IFAF Milano', url: 'https://www.ifaf.it/', free: false, cert: true, duration: '16 ore' },
        ],
      },
      {
        name: 'Analisi del rischio di credito con dati alternativi',
        why: 'Valutare la solvibilità usando open banking data, big data comportamentali e scoring AI è la direzione del mercato.',
        courses: [
          { name: 'Credit Risk Management', provider: 'New York Institute of Finance – Coursera', url: 'https://www.coursera.org/learn/credit-risk-management', free: false, cert: true, duration: '4 settimane' },
          { name: 'Financial Risk Manager (FRM) – Part 1 Prep', provider: 'GARP', url: 'https://www.garp.org/frm', free: false, cert: true, duration: '6 mesi' },
        ],
      },
      {
        name: 'Normativa Codice della Crisi d\'Impresa (D.Lgs. 14/2019)',
        why: 'La riforma della crisi d\'impresa crea nuovi sbocchi per chi conosce le procedure concorsuali e le composizioni negoziali della crisi.',
        courses: [
          { name: 'Codice della Crisi d\'Impresa – Aggiornamento', provider: 'Il Sole 24 Ore Formazione', url: 'https://formazione.ilsole24ore.com/', free: false, cert: true, duration: '16 ore' },
          { name: 'Gestione Crisi Aziendali – Percorso Avanzato', provider: 'ODCEC – Ordine Dottori Commercialisti', url: 'https://www.odcec.mi.it/formazione', free: false, cert: true, duration: '24 ore' },
        ],
      },
      {
        name: 'CRM e automazione pipeline recupero crediti (Salesforce, Kredit)',
        why: 'Configurare workflow automatici di sollecito multi-canale (SMS, email, AI call) è il futuro del ruolo e richiede profili tecnico-commerciali.',
        courses: [
          { name: 'Salesforce CRM Fundamentals', provider: 'Salesforce Trailhead', url: 'https://trailhead.salesforce.com/content/learn/trails/force_com_admin_beginner', free: true, cert: false, duration: '20 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 11. REVISORE CONTABILE (75%) ─────────────────────────── */
  revisore_contabile: {
    timeline: '12-18 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Audit Analytics e data analysis per revisione',
        why: 'Con AI che analizza il 100% delle transazioni anziché campioni, il revisore deve saper interpretare output statistici complessi.',
        courses: [
          { name: 'Audit Analytics – CPA Review', provider: 'AICPA – CPA Exam Prep', url: 'https://www.aicpa.org/professional-insights/download/audit-analytics-and-continuous-audit', free: false, cert: true, duration: '16 ore' },
          { name: 'Data Analytics for Accounting', provider: 'University of Illinois – Coursera', url: 'https://www.coursera.org/specializations/data-analytics-accountancy', free: false, cert: true, duration: '6 mesi' },
        ],
      },
      {
        name: 'ESG Reporting e assurance (GRI, CSRD)',
        why: 'La Direttiva CSRD (obbligatoria per le PMI dal 2026) richiede revisori specializzati in sostenibilità: un mercato nuovo da zero.',
        courses: [
          { name: 'Sustainability Reporting – GRI Standards', provider: 'GRI Academy', url: 'https://www.globalreporting.org/capacity-building/gri-academy/', free: false, cert: true, duration: '3 giorni' },
          { name: 'CSRD & ESG Assurance', provider: 'ICAEW – Sustainability', url: 'https://www.icaew.com/learning-and-development/courses/sustainability-courses', free: false, cert: true, duration: '16 ore' },
        ],
      },
      {
        name: 'Blockchain audit e asset digitali',
        why: 'Le aziende con crypto-asset e smart contract hanno bisogno di revisori che capiscano la tecnologia per auditarla correttamente.',
        courses: [
          { name: 'Blockchain Fundamentals for Finance Professionals', provider: 'Frankfurt School Blockchain Center – Coursera', url: 'https://www.coursera.org/learn/blockchain-and-cryptocurrency-explained', free: false, cert: true, duration: '4 settimane' },
          { name: 'Digital Assets Audit – ISACA CISA Track', provider: 'ISACA', url: 'https://www.isaca.org/credentialing/cisa', free: false, cert: true, duration: '3 mesi' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 12. AUTISTA CAMION (75%) ─────────────────────────── */
  autista_camion: {
    timeline: '18-36 mesi',
    urgency: 'alta',
    skills: [
      {
        name: 'Supervisione e teleoperazione veicoli autonomi',
        why: 'I truck autonomi di Waymo/Aurora/Torc richiedono operatori remoti per zone urbane, emergenze e trasporti eccezionali.',
        courses: [
          { name: 'Autonomous Vehicles – Technology & Ethics', provider: 'TU Delft – edX', url: 'https://www.edx.org/course/self-driving-cars-with-duckietown', free: false, cert: true, duration: '8 settimane' },
          { name: 'Fleet Management & Telematics', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/topics/fleet-management', free: false, cert: false, duration: '3 ore' },
        ],
      },
      {
        name: 'ADR – Trasporto merci pericolose (patente specialistica)',
        why: 'Il trasporto di materiali pericolosi richiederà sempre un operatore umano certificato: è un\'area dove il lawful override della guida autonoma è garantito per legge.',
        courses: [
          { name: 'Corso ADR Completo – Tutte le classi', provider: 'Provider accreditati MIT – Motorizzazione', url: 'https://www.mit.gov.it/comunicazione/news/autotrasporto', free: false, cert: true, duration: '32 ore' },
        ],
      },
      {
        name: 'Logistica e supply chain management',
        why: 'Evolvere da autista a coordinatore logistico / dispatcher protegge dalla sostituzione automatica pur valorizzando l\'esperienza sul campo.',
        courses: [
          { name: 'Supply Chain Management Specialization', provider: 'Rutgers University – Coursera', url: 'https://www.coursera.org/specializations/supply-chain-management', free: false, cert: true, duration: '5 mesi' },
          { name: 'Logistica e Trasporti – Operatore CQC', provider: 'Confartigianato Trasporti / CNA', url: 'https://www.unatras.it/', free: false, cert: true, duration: '35 ore' },
        ],
      },
      {
        name: 'Eco-driving e veicoli elettrici pesanti (BEV/HEV)',
        why: 'La transizione ai truck elettrici (Mercedes eActros, Volvo FH Electric) richiede nuove competenze di ricarica, range management e manutenzione.',
        courses: [
          { name: 'Electric Vehicle Technology – Fundamentals', provider: 'IEEE – edX', url: 'https://www.edx.org/learn/engineering/delft-university-of-technology-electric-cars-policy', free: false, cert: true, duration: '5 settimane' },
          { name: 'Eco Driving Professional', provider: 'ACI – Automobile Club d\'Italia', url: 'https://www.aci.it/laci/scuola-guida-sicura/guida-sicura-on-road/eco-driving.html', free: false, cert: true, duration: '1 giorno' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 13. QA ENGINEER (72%) ─────────────────────────── */
  qa_engineer: {
    timeline: '6-12 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'AI testing e validazione modelli ML',
        why: 'Testare sistemi AI (bias, hallucination, drift) è un dominio che nessun tool automatico copre completamente — richiede expertise umana.',
        courses: [
          { name: 'Testing and Evaluating LLMs', provider: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/evaluating-and-debugging-generative-ai/', free: true, cert: false, duration: '2 ore' },
          { name: 'Machine Learning Test & Validation', provider: 'Stanford – Coursera', url: 'https://www.coursera.org/learn/machine-learning-projects', free: false, cert: true, duration: '3 settimane' },
        ],
      },
      {
        name: 'Test automation avanzata (Playwright, Cypress, Selenium)',
        why: 'Il testing manuale scompare per primo; chi sa costruire framework di automazione robusti ha un vantaggio strutturale.',
        courses: [
          { name: 'Playwright: End-to-End Testing (2024)', provider: 'Udemy – Bondar Academy', url: 'https://www.udemy.com/course/playwright-from-zero-to-hero/', free: false, cert: true, duration: '12 ore' },
          { name: 'ISTQB Foundation Level (CTFL)', provider: 'ISTQB', url: 'https://istqb.org/certifications/certified-tester-foundation-level', free: false, cert: true, duration: '3 mesi' },
        ],
      },
      {
        name: 'Performance & security testing (k6, OWASP ZAP)',
        why: 'Load testing e vulnerability scanning sono skill ad alto valore che richiedono analisi e interpretazione umana dei risultati.',
        courses: [
          { name: 'Performance Testing with JMeter', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/performance-testing-foundations', free: false, cert: true, duration: '3 ore' },
          { name: 'Web Application Security Testing (OWASP)', provider: 'OWASP Foundation', url: 'https://owasp.org/www-project-web-security-testing-guide/', free: true, cert: false, duration: 'Auto-paced' },
        ],
      },
      {
        name: 'ISTQB AI Testing Specialist',
        why: 'La certificazione ISTQB CT-AI (Certified Tester AI Testing) è la credenziale emergente più richiesta dai team QA nel 2024-25.',
        courses: [
          { name: 'ISTQB CT-AI – Certified Tester AI Testing', provider: 'ISTQB', url: 'https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/', free: false, cert: true, duration: '2 mesi' },
          { name: 'AI Quality Assurance Foundations', provider: 'Coursera Project Network', url: 'https://www.coursera.org/projects/ai-quality-assurance', free: false, cert: true, duration: '2 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 14. COMMERCIALISTA (72%) ─────────────────────────── */
  commercialista: {
    timeline: '12-18 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'Tax technology e digital advisory',
        why: 'Il software ora produce le dichiarazioni; il commercialista deve diventare il consulente strategico fiscale che interpreta e pianifica.',
        courses: [
          { name: 'International Taxation – Advanced', provider: 'University of Michigan – Coursera', url: 'https://www.coursera.org/learn/international-business-taxation', free: false, cert: true, duration: '4 settimane' },
          { name: 'Fiscal Technology & RegTech', provider: 'Il Sole 24 Ore Formazione', url: 'https://formazione.ilsole24ore.com/', free: false, cert: true, duration: '8 ore' },
        ],
      },
      {
        name: 'M&A, due diligence e valutazione d\'azienda',
        why: 'La consulenza straordinaria (fusioni, acquisizioni, ristrutturazioni) è anti-ciclica rispetto all\'automazione fiscale ordinaria.',
        courses: [
          { name: 'Mergers & Acquisitions (M&A) Specialization', provider: 'Lund University – Coursera', url: 'https://www.coursera.org/specializations/mergers-and-acquisitions', free: false, cert: true, duration: '4 mesi' },
          { name: 'Business Valuation', provider: 'New York Institute of Finance – Coursera', url: 'https://www.coursera.org/learn/business-valuation', free: false, cert: true, duration: '4 settimane' },
        ],
      },
      {
        name: 'ESG e reporting di sostenibilità (CSRD)',
        why: 'Dal 2026, migliaia di PMI italiane dovranno redigere report di sostenibilità: chi già conosce CSRD è avvantaggiato di anni.',
        courses: [
          { name: 'CSRD & Sustainability Reporting for SMEs', provider: 'GRI Academy', url: 'https://www.globalreporting.org/capacity-building/gri-academy/', free: false, cert: true, duration: '2 giorni' },
          { name: 'ESG Investing Foundations', provider: 'CFA Institute', url: 'https://www.cfainstitute.org/en/programs/esg-investing', free: false, cert: true, duration: '3 mesi' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 15. AGENTE ASSICURATIVO (72%) ─────────────────────────── */
  agente_assicurativo: {
    timeline: '12-18 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'InsurTech e valutazione rischio con AI',
        why: 'Capire come funzionano i modelli attuariali AI (telematics, IoT, satellite) permette di vendere prodotti avanzati che i competitor non sanno spiegare.',
        courses: [
          { name: 'InsurTech Fundamentals', provider: 'University of Pennsylvania – Coursera', url: 'https://www.coursera.org/learn/wharton-insurtech', free: false, cert: true, duration: '4 settimane' },
          { name: 'Insurance Data Science with Python', provider: 'Udemy', url: 'https://www.udemy.com/course/machine-learning-for-insurance-predict-claim-assess-risk/', free: false, cert: true, duration: '8 ore' },
        ],
      },
      {
        name: 'Consulenza finanziaria integrata (assicurazione vita + investimenti)',
        why: 'L\'agente che sa consigliare soluzioni welfare complete (vita, LTC, previdenza complementare) difende il portafoglio dall\'online.',
        courses: [
          { name: 'Financial Planning Fundamentals', provider: 'University of Illinois – Coursera', url: 'https://www.coursera.org/specializations/financial-planning', free: false, cert: true, duration: '4 mesi' },
          { name: 'EFPA EFP – European Financial Planner', provider: 'EFPA Italia', url: 'https://www.efpa.it/formazione/', free: false, cert: true, duration: '6 mesi' },
        ],
      },
      {
        name: 'Digital marketing e acquisizione clienti online',
        why: 'Generare lead con LinkedIn Ads, Google Ads e content marketing è l\'unico modo per competere con i comparatori online.',
        courses: [
          { name: 'Google Digital Marketing & E-commerce Certificate', provider: 'Google – Coursera', url: 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce', free: false, cert: true, duration: '6 mesi' },
          { name: 'LinkedIn Marketing Labs Certified', provider: 'LinkedIn Marketing Labs', url: 'https://training.marketing.linkedin.com/', free: true, cert: true, duration: '3 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 16. ANALISTA CREDITO (72%) ─────────────────────────── */
  analista_credito: {
    timeline: '6-12 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'Credit scoring con machine learning',
        why: 'I modelli ML sostituiscono le scorecard tradizionali: sapere come funzionano (XGBoost, SHAP) è cruciale per supervisarli e contestarli.',
        courses: [
          { name: 'Credit Risk Modeling in Python', provider: 'DataCamp', url: 'https://www.datacamp.com/courses/credit-risk-modeling-in-python', free: false, cert: true, duration: '4 ore' },
          { name: 'Machine Learning for Finance', provider: 'NYU – Coursera', url: 'https://www.coursera.org/learn/machine-learning-for-finance', free: false, cert: true, duration: '4 settimane' },
        ],
      },
      {
        name: 'Open Banking e dati alternativi per il credito',
        why: 'PSD2 ha aperto l\'accesso ai dati di conto corrente: chi sa costruire score su flussi transazionali reali ha un vantaggio competitivo.',
        courses: [
          { name: 'Open Banking & PSD2 Essentials', provider: 'Finastra University – Udemy', url: 'https://www.udemy.com/course/a-course-on-api-and-open-banking-gdpr-by-piyush-singh/', free: false, cert: true, duration: '5 ore' },
          { name: 'FinTech: Finance Industry Transformation', provider: 'INSEAD – Coursera', url: 'https://www.coursera.org/learn/fintech', free: false, cert: true, duration: '4 settimane' },
        ],
      },
      {
        name: 'Analisi di bilancio avanzata e previsione insolvenza',
        why: 'I modelli Altman Z-Score e gli algoritmi di early warning sono standard bancari che richiedono interpretazione umana qualificata.',
        courses: [
          { name: 'Financial Statement Analysis', provider: 'Moody\'s Analytics – Coursera', url: 'https://www.coursera.org/learn/financial-statement-analysis', free: false, cert: true, duration: '4 settimane' },
          { name: 'Corporate Finance Essentials', provider: 'IESE Business School – Coursera', url: 'https://www.coursera.org/learn/corporate-finance-essentials', free: false, cert: true, duration: '4 settimane' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 17. PROJECT PLANNER (70%) ─────────────────────────── */
  project_planner: {
    timeline: '6-12 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'PMP / CAPM – Project Management Professional',
        why: 'La certificazione PMP è lo standard globale del settore: difende il profilo dalla commoditizzazione e apre porte internazionali.',
        courses: [
          { name: 'Google Project Management Certificate', provider: 'Google – Coursera', url: 'https://www.coursera.org/professional-certificates/google-project-management', free: false, cert: true, duration: '6 mesi' },
          { name: 'PMP Exam Prep Course', provider: 'PMI – Simplilearn', url: 'https://www.simplilearn.com/pmp-certification-training', free: false, cert: true, duration: '35 ore PDU' },
        ],
      },
      {
        name: 'AI Project Management Tools (Asana AI, Monday.com, Notion AI)',
        why: 'Saper configurare workspace AI per tracking automatico, risk prediction e reporting riduce il lavoro di reporting dell\'80%.',
        courses: [
          { name: 'Asana Academy – Advanced Workflows', provider: 'Asana Academy', url: 'https://academy.asana.com/path/asana-foundations-skill-badge', free: true, cert: true, duration: '3 ore' },
          { name: 'Monday.com – Automation & AI Features', provider: 'Monday.com Learning', url: 'https://monday.com/helpcenter/how-to-use-monday-ai/', free: true, cert: false, duration: 'Auto-paced' },
        ],
      },
      {
        name: 'Agile & Scrum Master avanzato',
        why: 'La certificazione CSM o PSM è richiesta in oltre il 60% degli annunci PM in Italia; l\'Agile applicato con l\'AI è il combo vincente.',
        courses: [
          { name: 'Professional Scrum Master (PSM I)', provider: 'Scrum.org', url: 'https://www.scrum.org/professional-scrum-master-i-certification', free: false, cert: true, duration: '2 giorni' },
          { name: 'Agile Project Management', provider: 'Google – Coursera (incluso nel PM Certificate)', url: 'https://www.coursera.org/learn/agile-project-management', free: false, cert: true, duration: '4 settimane' },
        ],
      },
      {
        name: 'Gestione rischi di progetto con dati quantitativi',
        why: 'Costruire risk register basati su Monte Carlo simulation e dati storici è il livello di analisi che distingue un senior PM dall\'AI.',
        courses: [
          { name: 'Risk Management for Projects (PMI-RMP Prep)', provider: 'Udemy', url: 'https://www.udemy.com/course/risk-management-professional/', free: false, cert: true, duration: '12 ore' },
          { name: 'Quantitative Risk Analysis', provider: 'Coursera Project Network', url: 'https://www.coursera.org/projects/quantitative-risk-analysis', free: false, cert: true, duration: '2 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 18. PERITO IMMOBILIARE (70%) ─────────────────────────── */
  perito_immobiliare: {
    timeline: '12-18 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'Perizia immobiliare digitale (AVM e valutazione ibrida)',
        why: 'Gli AVM (Automated Valuation Models) di Idealista, Nomisma e banche sono diffusi ma richiedono un perito umano per le perizie bancarie di legge.',
        courses: [
          { name: 'Real Estate Valuation – Advanced Methods', provider: 'NYU – Coursera', url: 'https://www.coursera.org/learn/real-estate-valuation', free: false, cert: true, duration: '4 settimane' },
          { name: 'Perizia Immobiliare con Strumenti Digitali', provider: 'FIAIP Formazione', url: 'https://www.fiaip.it/corsi/', free: false, cert: true, duration: '16 ore' },
        ],
      },
      {
        name: 'Efficienza energetica e APE (Attestato di Prestazione Energetica)',
        why: 'Con la Direttiva UE Case Green (2024), ogni compravendita richiede un APE aggiornato: i periti specializzati sono pochi.',
        courses: [
          { name: 'Riqualificazione Energetica Edifici – Corso APE', provider: 'ENEA – CTI Energia', url: 'https://www.cti2000.it/corsi/', free: false, cert: true, duration: '24 ore' },
          { name: 'Green Building – LEED Green Associate', provider: 'USGBC – LEED', url: 'https://www.usgbc.org/credentials/leed-green-associate', free: false, cert: true, duration: '3 mesi' },
        ],
      },
      {
        name: 'Analisi GIS e dati di mercato immobiliare',
        why: 'Usare QGIS, OMI (Osservatorio Mercato Immobiliare) e big data satellitari per supportare stime è la differenziazione rispetto agli AVM.',
        courses: [
          { name: 'Geographic Information Systems (GIS) Specialization', provider: 'UC Davis – Coursera', url: 'https://www.coursera.org/specializations/gis', free: false, cert: true, duration: '5 mesi' },
          { name: 'Real Estate Market Analysis with Data', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/real-estate-market-analysis', free: false, cert: true, duration: '2 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 19. FRONTEND DEVELOPER (68%) ─────────────────────────── */
  frontend_developer: {
    timeline: '6-12 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'AI-augmented frontend: Cursor, v0, Copilot',
        why: 'I tool AI generano già il 70% del boilerplate; il valore umano si sposta su architettura, accessibilità e UX critica.',
        courses: [
          { name: 'GitHub Copilot for Developers', provider: 'GitHub Skills', url: 'https://skills.github.com/', free: true, cert: false, duration: '4 ore' },
          { name: 'Vercel v0 & AI-assisted UI Development', provider: 'Vercel Docs & YouTube', url: 'https://v0.dev/docs', free: true, cert: false, duration: 'Auto-paced' },
        ],
      },
      {
        name: 'Accessibilità web (WCAG 2.2 / EN 301 549)',
        why: 'Dal 2025 la Direttiva UE sull\'accessibilità è obbligatoria per i servizi digitali pubblici e privati: pochissimi frontend la sanno applicare.',
        courses: [
          { name: 'Web Accessibility (WCAG 2.1)', provider: 'Google – Udacity', url: 'https://www.udacity.com/course/web-accessibility--ud891', free: true, cert: false, duration: '2 settimane' },
          { name: 'Accessibility in JavaScript Applications', provider: 'Frontend Masters', url: 'https://frontendmasters.com/courses/javascript-accessibility/', free: false, cert: false, duration: '4 ore' },
        ],
      },
      {
        name: 'React avanzato + Next.js 15 / App Router',
        why: 'Il mercato si è consolidato su React + Next.js come stack dominante; specializzarsi in Server Components e streaming è la skill 2025.',
        courses: [
          { name: 'Meta React Native Specialization', provider: 'Meta – Coursera', url: 'https://www.coursera.org/specializations/meta-react-native', free: false, cert: true, duration: '6 mesi' },
          { name: 'Next.js & React – The Complete Guide', provider: 'Udemy – Maximilian Schwarzmüller', url: 'https://www.udemy.com/course/nextjs-react-the-complete-guide/', free: false, cert: true, duration: '25 ore' },
        ],
      },
      {
        name: 'Design systems e UI component architecture',
        why: 'Progettare un design system scalabile (Storybook, Figma tokens, headless UI) è lavoro creativo-architetturale che l\'AI non ottimizza.',
        courses: [
          { name: 'Design Systems with Storybook', provider: 'Frontend Masters', url: 'https://frontendmasters.com/courses/design-systems-management/', free: false, cert: false, duration: '5 ore' },
          { name: 'Figma for Developers – Advanced', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/figma-for-developers', free: false, cert: true, duration: '3 ore' },
        ],
      },
    ],
  },

  /* ─────────────────────────── 20. SDR / SALES DEV REP (68%) ─────────────────────────── */
  sdr: {
    timeline: '6-12 mesi',
    urgency: 'media',
    skills: [
      {
        name: 'AI-powered prospecting (Clay, Apollo, Outreach AI)',
        why: 'L\'outreach manuale è già automatizzato dai tool AI; il valore umano è nella strategia di segmentazione e nella personalizzazione profonda.',
        courses: [
          { name: 'HubSpot Sales Software Certification', provider: 'HubSpot Academy', url: 'https://academy.hubspot.com/courses/sales-software', free: true, cert: true, duration: '4 ore' },
          { name: 'Sales Operations Professional Certificate', provider: 'Salesforce – Coursera', url: 'https://www.coursera.org/professional-certificates/salesforce-sales-operations', free: false, cert: true, duration: '4 mesi' },
        ],
      },
      {
        name: 'Consultative selling e MEDDIC/SPIN',
        why: 'Le metodologie strutturate di vendita complessa (MEDDIC, SPIN, Challenger) sono difficili da automatizzare e valorizzate nei deal enterprise.',
        courses: [
          { name: 'The Art of Sales Specialization', provider: 'Northwestern University – Coursera', url: 'https://www.coursera.org/specializations/the-art-of-sales-closing-deals', free: false, cert: true, duration: '5 mesi' },
          { name: 'SPIN Selling Foundations', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/selling-with-stories-part-1-what-makes-a-great-story', free: false, cert: true, duration: '2 ore' },
        ],
      },
      {
        name: 'Revenue Operations (RevOps) e CRM analytics',
        why: 'Evolvere in RevOps – che allinea sales, marketing e CS su dati condivisi – è il percorso di crescita più protetto dall\'automazione.',
        courses: [
          { name: 'Revenue Operations Certification', provider: 'HubSpot Academy', url: 'https://academy.hubspot.com/courses/revenue-operations', free: true, cert: true, duration: '4 ore' },
          { name: 'Salesforce CRM Analytics', provider: 'Salesforce Trailhead', url: 'https://trailhead.salesforce.com/content/learn/trails/build-reports-dashboards-for-sales-managers', free: true, cert: false, duration: '8 ore' },
        ],
      },
      {
        name: 'LinkedIn Social Selling e personal branding',
        why: 'Il Social Selling Index (SSI) di LinkedIn correla direttamente con il tasso di risposta ai cold outreach: è misurabile e migliorabile in 30 giorni.',
        courses: [
          { name: 'LinkedIn Marketing Solutions Certified', provider: 'LinkedIn Marketing Labs', url: 'https://training.marketing.linkedin.com/', free: true, cert: true, duration: '3 ore' },
          { name: 'Social Selling Mastery', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/social-selling-with-linkedin', free: false, cert: true, duration: '2 ore' },
        ],
      },
    ],
  },

};
