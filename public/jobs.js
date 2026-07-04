// jobs.js
// Dati job: tasks, survival plan, metriche, salari, accuratezza
// Importato da ui.js

// Task analysis e survival plan (fonte italiana)
export const jobExtra = {
    ai_engineer: {
        tasks: [
            { name: "Fine-tuning e training di modelli standard", risk: 50 },
            { name: "Integrazione API di modelli AI esistenti", risk: 55 },
            { name: "Progettazione architettura di sistemi AI", risk: 20 },
            { name: "Validazione etica e affidabilità dei modelli", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in architetture AI complesse e sistemi multi-agente",
            "Sviluppare competenze di MLOps e affidabilità dei modelli in produzione",
            "Imparare a valutare criticamente output e limiti dei modelli AI",
            "Costruire competenze trasversali su etica, sicurezza e governance dell'AI"
        ]
    },
    ai_director: {
        tasks: [
            { name: "Reportistica e monitoraggio KPI di progetti AI", risk: 45 },
            { name: "Valutazione tool e vendor AI", risk: 30 },
            { name: "Definizione strategia di adozione AI aziendale", risk: 10 },
            { name: "Gestione del cambiamento organizzativo", risk: 5 }
        ],
        survivalPlan: [
            "Sviluppare competenze di change management e leadership trasformativa",
            "Costruire una rete di relazioni con vendor, board e stakeholder chiave",
            "Mantenere una visione aggiornata sull'evoluzione tecnologica del settore",
            "Specializzarsi in governance, etica e compliance dell'intelligenza artificiale"
        ]
    },
    data_engineer: {
        tasks: [
            { name: "Costruzione pipeline ETL standard", risk: 70 },
            { name: "Pulizia e trasformazione dati ricorrenti", risk: 65 },
            { name: "Progettazione architetture dati complesse", risk: 25 },
            { name: "Governance e qualità dei dati aziendali", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in architetture dati distribuite e data mesh",
            "Sviluppare competenze di data governance e qualità a livello enterprise",
            "Imparare a supervisionare pipeline generate automaticamente dall'AI",
            "Costruire competenze trasversali su sicurezza e privacy dei dati"
        ]
    },
    backend_developer: {
        tasks: [
            { name: "Scrittura di API e endpoint standard", risk: 75 },
            { name: "Bug fix e manutenzione ordinaria", risk: 70 },
            { name: "Progettazione architettura di sistemi distribuiti", risk: 25 },
            { name: "Ottimizzazione performance su sistemi critici", risk: 20 }
        ],
        survivalPlan: [
            "Spostarsi verso ruoli di architettura backend e system design",
            "Specializzarsi in sistemi ad alta affidabilità e scalabilità",
            "Imparare a usare l'AI come acceleratore di sviluppo, non come sostituto",
            "Sviluppare competenze di sicurezza applicativa e performance tuning"
        ]
    },
    frontend_developer: {
        tasks: [
            { name: "Implementazione componenti UI standard", risk: 78 },
            { name: "Adattamento layout responsive", risk: 70 },
            { name: "Progettazione UX per flussi complessi", risk: 25 },
            { name: "Accessibilità e design system avanzati", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in UX research e design di esperienze complesse",
            "Sviluppare competenze avanzate di accessibilità e design system",
            "Imparare a guidare strumenti di generazione UI basati su AI",
            "Costruire competenze trasversali su performance e architettura frontend"
        ]
    },
    fullstack_developer: {
        tasks: [
            { name: "Sviluppo feature end-to-end standard", risk: 68 },
            { name: "Integrazione frontend-backend ricorrente", risk: 62 },
            { name: "Architettura di sistema completo", risk: 25 },
            { name: "Decisioni tecniche cross-stack complesse", risk: 20 }
        ],
        survivalPlan: [
            "Spostarsi verso ruoli di tech lead e architettura full-stack",
            "Specializzarsi in domini verticali complessi (fintech, sanità, ecc.)",
            "Imparare a orchestrare strumenti AI su tutto il ciclo di sviluppo",
            "Sviluppare competenze di mentoring e revisione tecnica del team"
        ]
    },
    cloud_engineer: {
        tasks: [
            { name: "Provisioning infrastruttura standard", risk: 65 },
            { name: "Configurazione Infrastructure as Code ricorrente", risk: 60 },
            { name: "Progettazione architetture multi-cloud", risk: 25 },
            { name: "Ottimizzazione costi e sicurezza cloud avanzata", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in architetture multi-cloud e hybrid cloud complesse",
            "Sviluppare competenze avanzate di FinOps e ottimizzazione costi",
            "Imparare a supervisionare automazioni IaC generate dall'AI",
            "Costruire competenze di sicurezza cloud e compliance normativa"
        ]
    },
    cloud_consultant: {
        tasks: [
            { name: "Analisi tecnica preliminare di migrazione", risk: 40 },
            { name: "Documentazione e reportistica standard", risk: 45 },
            { name: "Consulenza strategica al cliente", risk: 15 },
            { name: "Negoziazione e gestione relazione enterprise", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi in trasformazione digitale e strategia enterprise",
            "Sviluppare competenze di negoziazione e relazione con i decisori",
            "Imparare a usare l'AI per accelerare analisi e proposte tecniche",
            "Costruire una reputazione di settore tramite case study e referenze"
        ]
    },
    soc_analyst: {
        tasks: [
            { name: "Triage di alert di sicurezza standard", risk: 88 },
            { name: "Monitoraggio dashboard e log ricorrenti", risk: 80 },
            { name: "Threat hunting su minacce sofisticate", risk: 25 },
            { name: "Gestione incidenti critici complessi", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in threat hunting e detection engineering",
            "Sviluppare competenze di incident response su attacchi complessi",
            "Imparare a supervisionare e validare l'output dei sistemi AI SOC",
            "Costruire competenze di forensics e analisi malware avanzata"
        ]
    },
    cyber_security_engineer: {
        tasks: [
            { name: "Configurazione standard di strumenti di sicurezza", risk: 50 },
            { name: "Patch management e vulnerability scanning ricorrente", risk: 55 },
            { name: "Progettazione architetture di difesa complesse", risk: 20 },
            { name: "Risposta a incidenti critici e minacce avanzate", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in architetture di sicurezza zero-trust e cloud security",
            "Sviluppare competenze avanzate di incident response e forensics",
            "Imparare a orchestrare strumenti AI di difesa automatizzata",
            "Costruire competenze di compliance, governance e gestione del rischio"
        ]
    },
    data_scientist: {
        tasks: [
            { name: "Analisi esplorativa dati standard", risk: 55 },
            { name: "Costruzione modelli predittivi ricorrenti", risk: 50 },
            { name: "Problem framing strategico per il business", risk: 20 },
            { name: "Interpretazione e comunicazione di insight complessi", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in problem framing e traduzione business-to-data",
            "Sviluppare competenze di comunicazione e storytelling con i dati",
            "Imparare a validare criticamente modelli generati automaticamente",
            "Costruire competenze di dominio verticale (es. sanità, finanza, retail)"
        ]
    },
    devops_engineer: {
        tasks: [
            { name: "Configurazione pipeline CI/CD standard", risk: 68 },
            { name: "Automazione deployment ricorrente", risk: 62 },
            { name: "Progettazione architetture di affidabilità complesse", risk: 22 },
            { name: "Platform engineering e gestione incidenti critici", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in platform engineering e affidabilità di sistemi complessi",
            "Sviluppare competenze di site reliability engineering (SRE)",
            "Imparare a supervisionare pipeline e automazioni generate dall'AI",
            "Costruire competenze di sicurezza integrata (DevSecOps)"
        ]
    },
    solutions_consultant: {
        tasks: [
            { name: "Documentazione tecnica standard di architettura", risk: 40 },
            { name: "Valutazione comparativa di soluzioni software", risk: 35 },
            { name: "Disegno di architetture aziendali complesse", risk: 12 },
            { name: "Gestione relazione con stakeholder e board tecnico", risk: 8 }
        ],
        survivalPlan: [
            "Specializzarsi in architetture enterprise e trasformazione digitale",
            "Sviluppare competenze di comunicazione con stakeholder non tecnici",
            "Imparare a usare l'AI per accelerare valutazioni e documentazione",
            "Costruire una visione strategica trasversale su più tecnologie"
        ]
    },
    scrum_master: {
        tasks: [
            { name: "Organizzazione e schedulazione cerimonie standard", risk: 35 },
            { name: "Reportistica metriche di team ricorrente", risk: 40 },
            { name: "Facilitazione e gestione conflitti nel team", risk: 8 },
            { name: "Coaching organizzativo e trasformazione agile", risk: 5 }
        ],
        survivalPlan: [
            "Specializzarsi in agile coaching a livello organizzativo",
            "Sviluppare competenze avanzate di facilitazione e gestione conflitti",
            "Imparare a usare strumenti AI per automatizzare reportistica e metriche",
            "Costruire competenze di change management su larga scala"
        ]
    },
    it_project_manager: {
        tasks: [
            { name: "Pianificazione standard (Gantt, timeline)", risk: 50 },
            { name: "Reportistica stato avanzamento ricorrente", risk: 45 },
            { name: "Gestione stakeholder e negoziazione", risk: 15 },
            { name: "Leadership di progetti complessi e crisi", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di programmi e portfolio complessi",
            "Sviluppare competenze avanzate di negoziazione e gestione stakeholder",
            "Imparare a usare l'AI per pianificazione e reportistica automatizzata",
            "Costruire competenze di leadership in contesti di crisi e cambiamento"
        ]
    },
    bdr: {
        tasks: [
            { name: "Ricerca e identificazione prospect standard", risk: 75 },
            { name: "Outreach a freddo (email, telefono) ricorrente", risk: 70 },
            { name: "Qualificazione strategica di lead complessi", risk: 25 },
            { name: "Costruzione di relazioni con decision maker", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di trattative complesse con il C-level",
            "Sviluppare competenze di networking e relazione diretta",
            "Imparare a supervisionare e perfezionare campagne di outreach AI",
            "Passare a ruoli di Account Executive o Sales Development Manager"
        ]
    },
    sdr: {
        tasks: [
            { name: "Invio sequenze email standard", risk: 80 },
            { name: "Follow-up automatizzabili su lead freddi", risk: 75 },
            { name: "Qualificazione strategica di lead caldi", risk: 25 },
            { name: "Gestione obiezioni complesse in chiamata", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di obiezioni e conversazioni complesse",
            "Sviluppare competenze di ascolto attivo e diagnosi dei bisogni del cliente",
            "Imparare a supervisionare e ottimizzare agenti AI di outreach",
            "Costruire un percorso di crescita verso ruoli di Account Executive"
        ]
    },
    account_manager: {
        tasks: [
            { name: "Reportistica e aggiornamento CRM ricorrente", risk: 65 },
            { name: "Monitoraggio standard della soddisfazione cliente", risk: 55 },
            { name: "Costruzione di relazioni di fiducia a lungo termine", risk: 15 },
            { name: "Negoziazione di rinnovi e upselling complessi", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di account strategici e complessi",
            "Sviluppare competenze avanzate di negoziazione e relazione",
            "Imparare a usare l'AI per automatizzare reportistica e monitoraggio",
            "Costruire una rete di fiducia con i decision maker dei clienti chiave"
        ]
    },
    key_account_manager: {
        tasks: [
            { name: "Reportistica e analisi account ricorrente", risk: 55 },
            { name: "Monitoraggio KPI e performance contrattuale", risk: 45 },
            { name: "Negoziazione di partnership strategiche", risk: 10 },
            { name: "Gestione di relazioni C-level di lungo periodo", risk: 8 }
        ],
        survivalPlan: [
            "Specializzarsi in negoziazione strategica e partnership complesse",
            "Sviluppare una rete di relazioni dirette con i decision maker C-level",
            "Imparare a usare l'AI per analisi predittiva degli account",
            "Costruire competenze di consulenza strategica per il cliente"
        ]
    },
    sales_manager: {
        tasks: [
            { name: "Forecasting e reportistica di vendita ricorrente", risk: 60 },
            { name: "Monitoraggio KPI del team commerciale", risk: 50 },
            { name: "Coaching e motivazione del team", risk: 10 },
            { name: "Definizione di strategie commerciali complesse", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in leadership e coaching di team commerciali",
            "Sviluppare competenze di definizione strategica e visione di mercato",
            "Imparare a usare l'AI per forecasting e analisi delle performance",
            "Costruire competenze di gestione del cambiamento organizzativo"
        ]
    },
    technical_sales: {
        tasks: [
            { name: "Documentazione tecnica standard per i clienti", risk: 55 },
            { name: "Demo di prodotto ricorrenti", risk: 45 },
            { name: "Traduzione di esigenze tecniche complesse in soluzioni", risk: 15 },
            { name: "Consulenza su configurazioni personalizzate", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in soluzioni tecniche altamente personalizzate",
            "Sviluppare competenze di consulenza ingegneristica avanzata",
            "Imparare a usare l'AI per generare documentazione e demo standard",
            "Costruire una reputazione di esperto di settore verticale"
        ]
    },
    customer_success_manager: {
        tasks: [
            { name: "Monitoraggio health score e dati di utilizzo", risk: 70 },
            { name: "Invio comunicazioni di onboarding standard", risk: 60 },
            { name: "Intervento su clienti a rischio di abbandono", risk: 18 },
            { name: "Gestione di Quarterly Business Review strategiche", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di clienti enterprise complessi",
            "Sviluppare competenze di empatia e gestione delle relazioni a rischio",
            "Imparare a usare l'AI per monitorare proattivamente la salute degli account",
            "Costruire competenze di consulenza su adozione e crescita del prodotto"
        ]
    },
    store_manager: {
        tasks: [
            { name: "Gestione turni e inventario standard", risk: 60 },
            { name: "Reportistica vendite ricorrente", risk: 55 },
            { name: "Leadership e motivazione del team in negozio", risk: 12 },
            { name: "Gestione esperienza cliente e situazioni complesse", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione dell'esperienza cliente in negozio",
            "Sviluppare competenze di leadership e formazione del team",
            "Imparare a usare l'AI per ottimizzare inventario e turni",
            "Costruire competenze di visual merchandising e local marketing"
        ]
    },
    digital_marketing_specialist: {
        tasks: [
            { name: "Gestione campagne ads standard", risk: 65 },
            { name: "Reportistica performance ricorrente", risk: 60 },
            { name: "Strategia cross-canale complessa", risk: 22 },
            { name: "Interpretazione dati e ottimizzazione avanzata", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in strategia di marketing cross-canale integrata",
            "Sviluppare competenze avanzate di analisi dati e attribuzione",
            "Imparare a supervisionare e ottimizzare campagne gestite dall'AI",
            "Costruire competenze di marketing automation e personalizzazione"
        ]
    },
    seo_specialist: {
        tasks: [
            { name: "Ottimizzazione on-page standard", risk: 70 },
            { name: "Ricerca keyword e reportistica ricorrente", risk: 65 },
            { name: "Strategia di visibilità su AI generativa", risk: 25 },
            { name: "Audit tecnico complesso e link building", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in ottimizzazione per motori di ricerca generativi (GEO/AEO)",
            "Sviluppare competenze di strategia SEO a livello enterprise",
            "Imparare a supervisionare strumenti AI di ottimizzazione contenuti",
            "Costruire competenze di analisi dati e attribuzione cross-canale"
        ]
    },
    growth_hacker: {
        tasks: [
            { name: "Test A/B standard e analisi dati ricorrente", risk: 60 },
            { name: "Automazione di campagne di acquisizione", risk: 55 },
            { name: "Ideazione di esperimenti di crescita creativi", risk: 20 },
            { name: "Strategia di prodotto e funnel complessi", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in strategia di crescita e visione di prodotto",
            "Sviluppare competenze di creatività negli esperimenti di marketing",
            "Imparare a usare l'AI per automatizzare test e analisi dati",
            "Costruire competenze trasversali su prodotto, dati e business"
        ]
    },
    content_creator: {
        tasks: [
            { name: "Editing video/foto standard", risk: 65 },
            { name: "Pubblicazione contenuti ricorrenti su format noti", risk: 60 },
            { name: "Costruzione di una voce personale autentica", risk: 20 },
            { name: "Creazione di format innovativi e virali", risk: 25 }
        ],
        survivalPlan: [
            "Costruire una voce e un'identità personale riconoscibile",
            "Sviluppare un legame diretto e autentico con la community",
            "Imparare a usare l'AI come acceleratore di produzione, non sostituto",
            "Specializzarsi in formati innovativi e storytelling distintivo"
        ]
    },
    brand_manager: {
        tasks: [
            { name: "Analisi di mercato e concorrenza standard", risk: 50 },
            { name: "Reportistica su brand awareness ricorrente", risk: 45 },
            { name: "Costruzione di identità di marca autentica", risk: 12 },
            { name: "Decisioni strategiche di posizionamento", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi nella costruzione di identità di marca distintive",
            "Sviluppare competenze di storytelling e narrazione strategica",
            "Imparare a usare l'AI per analisi di mercato e ricerche rapide",
            "Costruire una visione di lungo periodo per il posizionamento del brand"
        ]
    },
    ecommerce_manager: {
        tasks: [
            { name: "Gestione operativa del funnel standard", risk: 55 },
            { name: "Reportistica performance e KPI ricorrente", risk: 50 },
            { name: "Strategia commerciale cross-canale complessa", risk: 18 },
            { name: "Ottimizzazione esperienza cliente end-to-end", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in strategia omnicanale e ottimizzazione cross-platform",
            "Sviluppare competenze di analisi predittiva e pricing dinamico",
            "Imparare a supervisionare automazioni AI su funnel e logistica",
            "Costruire competenze di gestione del cliente end-to-end"
        ]
    },
    contabile: {
        tasks: [
            { name: "Inserimento dati e fatturazione", risk: 95 },
            { name: "Riconciliazione bancaria", risk: 90 },
            { name: "Dichiarazioni fiscali standard", risk: 80 },
            { name: "Consulenza fiscale strategica", risk: 25 }
        ],
        survivalPlan: [
            "Specializzarsi in consulenza fiscale strategica per casi complessi",
            "Imparare a supervisionare e validare l'output degli strumenti AI",
            "Sviluppare competenze di relazione diretta con i clienti",
            "Offrire pianificazione finanziaria invece di sola compilazione"
        ]
    },
    copywriter: {
        tasks: [
            { name: "Copy standard per prodotti", risk: 85 },
            { name: "Post social ricorrenti", risk: 75 },
            { name: "Storytelling di marca", risk: 35 },
            { name: "Strategia di contenuto", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in storytelling e narrazione di marca distintiva",
            "Imparare a guidare e correggere l'output di strumenti AI generativi",
            "Sviluppare una voce editoriale riconoscibile e personale",
            "Offrire strategia di contenuto, non solo scrittura"
        ]
    },
    developer: {
        tasks: [
            { name: "Bug fix ripetitivi", risk: 80 },
            { name: "Scrittura codice da specifiche chiare", risk: 70 },
            { name: "Code review e architettura", risk: 30 },
            { name: "Decisioni di design del sistema", risk: 20 }
        ],
        survivalPlan: [
            "Spostarsi verso ruoli di architettura software e system design",
            "Imparare a usare l'AI come acceleratore, non come sostituto",
            "Sviluppare competenze di code review e mentoring",
            "Specializzarsi in domini complessi (sicurezza, performance, scalabilità)"
        ]
    },
    social_media: {
        tasks: [
            { name: "Pubblicazione contenuti programmati", risk: 85 },
            { name: "Risposte standard alla community", risk: 65 },
            { name: "Gestione crisi e community sensibile", risk: 25 },
            { name: "Strategia di brand voice", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di crisi e situazioni delicate",
            "Sviluppare e proteggere la voce di marca in modo strategico",
            "Imparare ad analizzare dati e trend invece di solo pubblicare",
            "Costruire relazioni dirette con community e influencer"
        ]
    },
    customer_service: {
        tasks: [
            { name: "Risposte a domande frequenti", risk: 90 },
            { name: "Gestione ticket standard", risk: 80 },
            { name: "Escalation complesse", risk: 30 },
            { name: "Gestione clienti insoddisfatti", risk: 25 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di escalation e casi complessi",
            "Sviluppare competenze di de-escalation emotiva con clienti difficili",
            "Imparare a supervisionare chatbot e flussi automatizzati",
            "Offrire consulenza personalizzata oltre il supporto standard"
        ]
    },
    hr_manager: {
        tasks: [
            { name: "Screening CV iniziale", risk: 75 },
            { name: "Gestione payroll amministrativa", risk: 70 },
            { name: "Colloqui e selezione finale", risk: 15 },
            { name: "Gestione conflitti e clima aziendale", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione dei conflitti e relazioni industriali",
            "Sviluppare competenze di valutazione del potenziale umano",
            "Imparare a usare l'AI per screening, lasciando a sé le decisioni finali",
            "Diventare punto di riferimento per cultura e benessere aziendale"
        ]
    },
    data_analyst: {
        tasks: [
            { name: "Query SQL ricorrenti", risk: 85 },
            { name: "Dashboard standard", risk: 75 },
            { name: "Interpretazione strategica dei dati", risk: 30 },
            { name: "Storytelling con i dati per il management", risk: 25 }
        ],
        survivalPlan: [
            "Specializzarsi nell'interpretazione strategica, non solo nell'estrazione",
            "Sviluppare competenze di comunicazione dei dati al management",
            "Imparare a validare e correggere modelli predittivi AI",
            "Collegare i dati alle decisioni di business reali"
        ]
    },
    insegnante: {
        tasks: [
            { name: "Preparazione materiali standard", risk: 60 },
            { name: "Correzione compiti ripetitivi", risk: 55 },
            { name: "Relazione educativa con gli studenti", risk: 10 },
            { name: "Gestione classe e motivazione", risk: 8 }
        ],
        survivalPlan: [
            "Concentrarsi sulla relazione educativa e il supporto motivazionale",
            "Usare l'AI per preparare materiali, risparmiando tempo per gli studenti",
            "Sviluppare competenze di gestione di classi eterogenee",
            "Specializzarsi in supporto a studenti con bisogni educativi speciali"
        ]
    },
    grafico: {
        tasks: [
            { name: "Design di base e template", risk: 80 },
            { name: "Adattamento grafiche per social", risk: 70 },
            { name: "Direzione creativa di brand", risk: 25 },
            { name: "Concept originali e identità visiva", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in direzione creativa e strategia di brand",
            "Sviluppare un proprio stile distintivo difficile da replicare",
            "Imparare a usare l'AI come strumento di ideazione rapida",
            "Offrire consulenza di identità visiva, non solo esecuzione grafica"
        ]
    },
    traduttore: {
        tasks: [
            { name: "Traduzione tecnica standard", risk: 90 },
            { name: "Sottotitoli e localizzazione semplice", risk: 80 },
            { name: "Traduzione letteraria e creativa", risk: 35 },
            { name: "Localizzazione culturale complessa", risk: 30 }
        ],
        survivalPlan: [
            "Specializzarsi in traduzione letteraria e contenuti creativi",
            "Sviluppare competenze di localizzazione culturale profonda",
            "Imparare il post-editing professionale di traduzioni AI",
            "Offrire consulenza linguistica per contenuti legali o sensibili"
        ]
    },
    docente_universitario: {
        tasks: [
            { name: "Preparazione materiali didattici standard", risk: 50 },
            { name: "Correzione elaborati e testing ricorrente", risk: 55 },
            { name: "Ricerca scientifica e pubblicazioni originali", risk: 18 },
            { name: "Tutoraggio avanzato e relazione con studenti", risk: 10 }
        ],
        survivalPlan: [
            "Concentrarsi sulla ricerca originale e la produzione scientifica",
            "Sviluppare competenze di supervisione di ricercatori e dottorandi",
            "Usare l'AI per revisione letteratura e analisi dati, liberando tempo per la ricerca",
            "Costruire una rete internazionale di collaborazioni accademiche"
        ]
    },
    formatore_aziendale: {
        tasks: [
            { name: "Creazione contenuti formativi standard", risk: 60 },
            { name: "Erogazione corsi in aula o e-learning", risk: 45 },
            { name: "Progettazione percorsi formativi personalizzati", risk: 20 },
            { name: "Coaching individuale e sviluppo leadership", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi nel coaching individuale e nella formazione esperienziale",
            "Sviluppare competenze di facilitazione e gestione dell'aula avanzate",
            "Usare l'AI per creare contenuti, concentrandosi sull'erogazione live",
            "Costruire competenze di learning design per programmi di alto impatto"
        ]
    },
    instructional_designer: {
        tasks: [
            { name: "Strutturazione contenuti in moduli e-learning standard", risk: 68 },
            { name: "Creazione quiz e materiali di valutazione", risk: 72 },
            { name: "Progettazione di esperienze formative complesse", risk: 22 },
            { name: "Analisi dei bisogni formativi e gap di competenze", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi nella progettazione di esperienze formative immersive",
            "Sviluppare competenze di learning analytics e misurazione dell'impatto",
            "Usare l'AI per produzione contenuti, concentrandosi sull'architettura didattica",
            "Costruire competenze di instructional design per contesti regolamentati"
        ]
    },
    tutor_online: {
        tasks: [
            { name: "Risposta a domande frequenti degli studenti", risk: 78 },
            { name: "Correzione esercizi e feedback standard", risk: 72 },
            { name: "Supporto personalizzato a studenti in difficoltà", risk: 20 },
            { name: "Motivazione e gestione emotiva dello studente", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi nel supporto a studenti con difficoltà specifiche",
            "Sviluppare competenze di tutoring ad alto valore in discipline complesse",
            "Usare l'AI per feedback su esercizi, concentrandosi sulla relazione",
            "Costruire competenze in area BES/DSA per supporto specializzato"
        ]
    },
    dirigente_scolastico: {
        tasks: [
            { name: "Gestione adempimenti burocratici e reportistica", risk: 52 },
            { name: "Coordinamento calendario e orari scolastici", risk: 48 },
            { name: "Gestione del personale docente e ATA", risk: 12 },
            { name: "Relazioni con famiglie, enti e territorio", risk: 8 }
        ],
        survivalPlan: [
            "Rafforzare le competenze di leadership educativa e gestione del personale",
            "Sviluppare visione strategica per l'innovazione didattica della scuola",
            "Usare l'AI per burocrazia, liberando tempo per la leadership",
            "Costruire reti con enti locali, aziende e università del territorio"
        ]
    },
    educatore_infanzia: {
        tasks: [
            { name: "Documentazione delle attività e reportistica famiglie", risk: 45 },
            { name: "Pianificazione attività educative standard", risk: 40 },
            { name: "Cura fisica e relazione con bambini 0-6 anni", risk: 5 },
            { name: "Supporto emotivo e sviluppo psicomotorio", risk: 4 }
        ],
        survivalPlan: [
            "Concentrarsi sulla relazione fisica e affettiva con i bambini",
            "Sviluppare competenze di osservazione e documentazione pedagogica",
            "Usare l'AI per comunicazioni alle famiglie e pianificazione",
            "Specializzarsi in supporto a bambini con bisogni speciali"
        ]
    },
    ml_engineer: {
        tasks: [
            { name: "Training e fine-tuning di modelli standard", risk: 60 },
            { name: "Monitoraggio performance modelli in produzione", risk: 55 },
            { name: "Progettazione di architetture ML avanzate", risk: 20 },
            { name: "MLOps e gestione del ciclo di vita dei modelli", risk: 22 }
        ],
        survivalPlan: [
            "Specializzarsi in MLOps e gestione modelli in produzione su larga scala",
            "Sviluppare competenze su LLM fine-tuning e architetture avanzate",
            "Imparare a valutare e correggere bias nei modelli AI",
            "Costruire competenze trasversali tra ML engineering e business impact"
        ]
    },
    product_owner: {
        tasks: [
            { name: "Redazione e aggiornamento di user stories standard", risk: 55 },
            { name: "Gestione e prioritizzazione del backlog ricorrente", risk: 50 },
            { name: "Definizione della visione di prodotto e roadmap", risk: 12 },
            { name: "Negoziazione con stakeholder e gestione delle aspettative", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi nella strategia di prodotto e nella visione a lungo termine",
            "Sviluppare competenze di product discovery e customer research",
            "Imparare a usare l'AI per analisi dati prodotto e priorizzazione",
            "Costruire competenze di leadership influenzale senza autorità diretta"
        ]
    },
    sysadmin: {
        tasks: [
            { name: "Gestione patch, backup e monitoring di routine", risk: 78 },
            { name: "Risposta a ticket standard di primo livello", risk: 72 },
            { name: "Progettazione infrastrutture ibride complesse", risk: 20 },
            { name: "Gestione sicurezza e incident response avanzata", risk: 18 }
        ],
        survivalPlan: [
            "Spostarsi verso ruoli di Cloud/Infrastructure Engineer",
            "Specializzarsi in sicurezza dei sistemi e gestione delle identità",
            "Imparare Infrastructure as Code e automazione con Ansible/Terraform",
            "Sviluppare competenze di gestione di ambienti ibridi on-prem/cloud"
        ]
    },
    qa_engineer: {
        tasks: [
            { name: "Scrittura ed esecuzione di test case manuali standard", risk: 85 },
            { name: "Regression testing ricorrente", risk: 80 },
            { name: "Test explorativi e di usabilità complessi", risk: 25 },
            { name: "Definizione della strategia di qualità del prodotto", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in test strategy e quality engineering",
            "Sviluppare competenze di test automation con AI-assisted tools",
            "Imparare security testing e performance testing avanzato",
            "Spostarsi verso ruoli di Quality Engineering o SDET"
        ]
    },
    network_engineer: {
        tasks: [
            { name: "Monitoring e troubleshooting di rete di routine", risk: 65 },
            { name: "Configurazione switch e router standard", risk: 60 },
            { name: "Progettazione di architetture SD-WAN e multi-cloud", risk: 20 },
            { name: "Gestione della sicurezza di rete avanzata", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in network security e zero-trust architecture",
            "Sviluppare competenze su SD-WAN, SASE e reti cloud-native",
            "Imparare a gestire reti con strumenti AIOps e automazione",
            "Costruire competenze trasversali tra networking e sicurezza informatica"
        ]
    },
    it_consultant: {
        tasks: [
            { name: "Analisi e documentazione requisiti standard", risk: 60 },
            { name: "Redazione di specifiche funzionali ricorrenti", risk: 55 },
            { name: "Consulenza strategica su trasformazione digitale", risk: 18 },
            { name: "Facilitazione tra business e IT su progetti complessi", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in digital transformation e change management",
            "Sviluppare competenze di facilitazione e stakeholder management",
            "Imparare a usare l'AI per accelerare analisi e documentazione",
            "Costruire expertise verticale su un dominio specifico"
        ]
    },
    sales_executive: {
        tasks: [
            { name: "Aggiornamento CRM e reportistica pipeline standard", risk: 68 },
            { name: "Qualificazione lead di routine", risk: 60 },
            { name: "Negoziazione e closing di deal complessi", risk: 15 },
            { name: "Costruzione di relazioni fiduciarie con decision maker", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi nel closing di contratti enterprise ad alto valore",
            "Sviluppare competenze di consultative selling e solution selling",
            "Imparare a usare l'AI per ricerca prospect e personalizzazione outreach",
            "Costruire una rete professionale solida nel settore di riferimento"
        ]
    },
    sales_director: {
        tasks: [
            { name: "Reporting e forecasting di vendita ricorrente", risk: 58 },
            { name: "Monitoraggio KPI commerciali standard", risk: 52 },
            { name: "Definizione strategia commerciale e go-to-market", risk: 10 },
            { name: "Sviluppo e motivazione del team vendite", risk: 8 }
        ],
        survivalPlan: [
            "Rafforzare la capacità di guidare team commerciali ad alte prestazioni",
            "Sviluppare visione strategica su mercati, segmenti e pricing",
            "Usare l'AI per analisi predittiva della pipeline e coaching del team",
            "Costruire relazioni dirette con i clienti enterprise più strategici"
        ]
    },
    addetto_vendite: {
        tasks: [
            { name: "Operazioni di cassa e gestione transazioni", risk: 80 },
            { name: "Allestimento e riordino scaffali standard", risk: 72 },
            { name: "Assistenza personalizzata e consulenza al cliente", risk: 25 },
            { name: "Gestione di reclami e situazioni difficili in store", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi nell'assistenza consultiva ad alto valore",
            "Sviluppare competenze di visual merchandising e customer experience",
            "Imparare strumenti digitali di vendita assistita e loyalty",
            "Costruire competenze di store management per percorsi di crescita"
        ]
    },
    commerciale_estero: {
        tasks: [
            { name: "Gestione ordini e corrispondenza standard con clienti esteri", risk: 55 },
            { name: "Preparazione documentazione export ricorrente", risk: 60 },
            { name: "Sviluppo nuovi mercati e scouting partner internazionali", risk: 15 },
            { name: "Negoziazione cross-cultural con buyer e distributori", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in market entry strategy su mercati emergenti",
            "Sviluppare competenze di negoziazione cross-cultural",
            "Imparare a usare l'AI per ricerca mercati e analisi competitor",
            "Costruire una rete di partner consolidata nei mercati chiave"
        ]
    },
    marketing_manager: {
        tasks: [
            { name: "Reportistica e analisi campagne standard", risk: 62 },
            { name: "Coordinamento produzione contenuti ricorrente", risk: 55 },
            { name: "Definizione strategia di marketing e posizionamento", risk: 15 },
            { name: "Gestione e sviluppo del team marketing", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in brand strategy e posizionamento a lungo termine",
            "Sviluppare competenze di marketing data-driven e customer insight",
            "Imparare a orchestrare strumenti AI per automazione e personalizzazione",
            "Costruire competenze di leadership e gestione di team creativi"
        ]
    },
    pr_specialist: {
        tasks: [
            { name: "Redazione comunicati stampa standard", risk: 70 },
            { name: "Monitoraggio rassegna stampa e menzioni", risk: 75 },
            { name: "Gestione crisi reputazionali e media relations sensibili", risk: 15 },
            { name: "Costruzione di relazioni con i giornalisti chiave", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di crisi reputazionali complesse",
            "Sviluppare relazioni solide e personali con i giornalisti chiave",
            "Imparare a usare l'AI per monitoring e sentiment analysis",
            "Costruire competenze di storytelling strategico e thought leadership"
        ]
    },
    cfo: {
        tasks: [
            { name: "Supervisione reportistica finanziaria standard", risk: 50 },
            { name: "Monitoraggio KPI finanziari ricorrenti", risk: 45 },
            { name: "Definizione strategia finanziaria e allocazione capitale", risk: 8 },
            { name: "Gestione relazioni con investitori, banche e board", risk: 6 }
        ],
        survivalPlan: [
            "Rafforzare il ruolo di business partner strategico per il CEO e il board",
            "Sviluppare expertise in M&A, capital markets e pianificazione strategica",
            "Usare l'AI per automazione reporting, liberando tempo per la strategia",
            "Costruire competenze di gestione del rischio in contesti di incertezza"
        ]
    },
    auditor: {
        tasks: [
            { name: "Verifica documentazione e riconciliazioni standard", risk: 72 },
            { name: "Analisi dati e campionamento statistico ricorrente", risk: 68 },
            { name: "Audit di processi complessi e valutazione rischi", risk: 20 },
            { name: "Reporting al board e interazione con le autorità di vigilanza", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in IT audit e cybersecurity audit",
            "Sviluppare competenze di risk-based auditing e fraud investigation",
            "Imparare a usare l'AI per analisi continua dei dati di audit",
            "Costruire competenze normative su ESG reporting e AI Act"
        ]
    },
    credit_collector: {
        tasks: [
            { name: "Invio solleciti automatici e gestione scadenzario", risk: 88 },
            { name: "Monitoring scaduti e aging report standard", risk: 82 },
            { name: "Negoziazione piani di rientro con debitori complessi", risk: 25 },
            { name: "Gestione pratiche legali e azioni di recupero giudiziale", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi nel recupero crediti complessi e nella negoziazione avanzata",
            "Sviluppare competenze legali per la gestione di procedure giudiziali",
            "Imparare a supervisionare sistemi AI di sollecito automatico",
            "Spostarsi verso ruoli di credit risk management"
        ]
    },
    office_manager: {
        tasks: [
            { name: "Gestione agenda, prenotazioni e travel standard", risk: 68 },
            { name: "Ordini forniture e gestione fornitori di routine", risk: 65 },
            { name: "Coordinamento spazi fisici e supporto alla direzione", risk: 25 },
            { name: "Gestione di eventi, ospiti e situazioni impreviste", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi nel workplace management e nell'employee experience",
            "Sviluppare competenze di project management per eventi aziendali",
            "Imparare a gestire strumenti digitali di office automation",
            "Costruire competenze di comunicazione interna e supporto al management"
        ]
    },
    impiegato_amm: {
        tasks: [
            { name: "Inserimento dati e archiviazione documentale standard", risk: 90 },
            { name: "Gestione corrispondenza e pratiche burocratiche ricorrenti", risk: 85 },
            { name: "Supporto a processi amministrativi complessi", risk: 30 },
            { name: "Interfaccia con clienti, fornitori ed enti esterni", risk: 22 }
        ],
        survivalPlan: [
            "Specializzarsi in un'area amministrativa verticale (HR, contabilità, legale)",
            "Sviluppare competenze digitali avanzate su ERP e software gestionali",
            "Imparare a gestire e supervisionare processi automatizzati",
            "Costruire competenze relazionali per i processi con componente umana"
        ]
    },
    ceo: {
        tasks: [
            { name: "Reporting e comunicazione standard al board", risk: 35 },
            { name: "Monitoraggio KPI aziendali ricorrenti", risk: 30 },
            { name: "Definizione visione e strategia aziendale", risk: 5 },
            { name: "Leadership organizzativa e gestione della cultura aziendale", risk: 4 }
        ],
        survivalPlan: [
            "Rafforzare la visione strategica e la capacità di lettura del contesto competitivo",
            "Sviluppare competenze di gestione di team in ambienti di trasformazione AI",
            "Usare l'AI come strumento di supporto decisionale, mantenendo il giudizio finale",
            "Costruire competenze di stakeholder management con board, investitori e mercato"
        ]
    },
    executive_assistant: {
        tasks: [
            { name: "Gestione agenda e scheduling ricorrente", risk: 75 },
            { name: "Prenotazioni travel e logistica standard", risk: 72 },
            { name: "Preparazione presentazioni e report per il management", risk: 50 },
            { name: "Gestione comunicazioni sensibili e relazioni con stakeholder", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi nel supporto strategico al top management (chief of staff)",
            "Sviluppare competenze di project management e coordinamento interfunzionale",
            "Imparare a usare l'AI per automatizzare scheduling e travel",
            "Costruire competenze di comunicazione executive e gestione della riservatezza"
        ]
    },
    data_entry: {
        tasks: [
            { name: "Inserimento dati manuali da documenti cartacei/digitali", risk: 95 },
            { name: "Verifica e correzione dati standard", risk: 88 },
            { name: "Controllo qualità su dati complessi o ambigui", risk: 40 },
            { name: "Gestione di eccezioni e casi non standard", risk: 35 }
        ],
        survivalPlan: [
            "Spostarsi URGENTEMENTE verso ruoli di data quality o data stewardship",
            "Sviluppare competenze di analisi dati con Excel/Power BI avanzato",
            "Imparare a configurare e supervisionare strumenti di automazione RPA",
            "Costruire expertise in un dominio specifico per uscire dal puro inserimento dati"
        ]
    },
    production_planner: {
        tasks: [
            { name: "Elaborazione piani di produzione con APS standard", risk: 72 },
            { name: "Monitoraggio avanzamento produzione ricorrente", risk: 68 },
            { name: "Gestione di disruption e scenari produttivi complessi", risk: 20 },
            { name: "Coordinamento tra produzione, acquisti e vendite su criticità", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di supply chain disruption e scenari complessi",
            "Sviluppare competenze su sistemi APS avanzati e digital twin della produzione",
            "Imparare a interpretare e ottimizzare output di pianificazione AI",
            "Costruire competenze di coordinamento interfunzionale tra operations e vendite"
        ]
    },
    plant_manager: {
        tasks: [
            { name: "Monitoring KPI operativi e reportistica standard", risk: 45 },
            { name: "Coordinamento turni e gestione risorse standard", risk: 42 },
            { name: "Gestione della sicurezza e delle emergenze sul campo", risk: 10 },
            { name: "Leadership del personale e gestione delle relazioni sindacali", risk: 8 }
        ],
        survivalPlan: [
            "Rafforzare le competenze di leadership operativa e gestione del personale",
            "Sviluppare expertise in Industry 4.0 e digitalizzazione della produzione",
            "Usare l'AI per monitoring e analytics, concentrandosi sulle decisioni operative",
            "Costruire competenze di lean manufacturing e continuous improvement"
        ]
    },
    automation_engineer: {
        tasks: [
            { name: "Programmazione PLC e HMI per funzionalità standard", risk: 48 },
            { name: "Manutenzione e troubleshooting impianti automatizzati", risk: 42 },
            { name: "Progettazione di sistemi di automazione complessi", risk: 18 },
            { name: "Integrazione tra sistemi robotici e linee produttive", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in robotica collaborativa e sistemi cyber-fisici (IIoT)",
            "Sviluppare competenze di AI per manutenzione predittiva e visione artificiale",
            "Imparare a progettare sistemi di automazione con AI integrata",
            "Costruire competenze trasversali tra automazione industriale e IT"
        ]
    },
    qa_manager: {
        tasks: [
            { name: "Gestione documentazione qualità standard e audit interni", risk: 55 },
            { name: "Monitoraggio KPI qualità ricorrente", risk: 52 },
            { name: "Gestione non conformità complesse e relazioni con clienti", risk: 18 },
            { name: "Sviluppo e manutenzione del sistema qualità aziendale", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in quality management per ambienti regolamentati",
            "Sviluppare competenze di supplier quality management avanzato",
            "Imparare a usare l'AI per controllo qualità predittivo",
            "Costruire expertise normativa su ISO 9001, IATF, FDA e standard di settore"
        ]
    },
    buyer: {
        tasks: [
            { name: "Ricerca fornitori e gestione RFQ standard", risk: 68 },
            { name: "Elaborazione ordini e gestione scadenzario fornitori", risk: 65 },
            { name: "Negoziazione strategica con fornitori chiave", risk: 18 },
            { name: "Sviluppo e qualifica di nuovi fornitori critici", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in strategic sourcing e category management avanzato",
            "Sviluppare competenze di supplier development e partnership strategica",
            "Imparare a usare l'AI per market intelligence e analisi prezzi",
            "Costruire competenze di supply risk management su fornitori critici"
        ]
    },
    informatore_scientifico: {
        tasks: [
            { name: "Preparazione e aggiornamento materiali scientifici standard", risk: 60 },
            { name: "Reportistica visite medici e CRM pharma", risk: 65 },
            { name: "Visita medica con comunicazione scientifica avanzata", risk: 18 },
            { name: "Costruzione di relazioni di fiducia con KOL e specialisti", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in aree terapeutiche ad alta complessità scientifica",
            "Sviluppare competenze di medical education e supporto ai KOL",
            "Usare l'AI per preparazione scientifica, concentrandosi sulla relazione medica",
            "Costruire una rete consolidata di medici e specialisti nel proprio territorio"
        ]
    },
    regulatory_affairs: {
        tasks: [
            { name: "Redazione di sezioni standard di dossier regolatorie", risk: 65 },
            { name: "Monitoraggio normative e aggiornamenti regolatori", risk: 58 },
            { name: "Interpretazione di normative ambigue e strategie regolatori", risk: 18 },
            { name: "Dialogo strategico con le autorità regolatorie", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in normative emergenti (AI Act, MDR, nuove direttive EU)",
            "Sviluppare competenze di regulatory strategy per nuovi mercati",
            "Imparare a usare l'AI per ricerca normativa e redazione standard",
            "Costruire competenze di dialogo con EMA, AIFA e autorità internazionali"
        ]
    },
    rd_specialist: {
        tasks: [
            { name: "Esecuzione di test ed esperimenti standard di laboratorio", risk: 58 },
            { name: "Analisi dati sperimentali e redazione report ricorrenti", risk: 55 },
            { name: "Formulazione di ipotesi originali e design sperimentale", risk: 15 },
            { name: "Pubblicazione e valorizzazione dei risultati di ricerca", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in aree di ricerca ad alta complessità",
            "Sviluppare competenze di AI-assisted research e bioinformatica",
            "Imparare a usare strumenti AI per accelerare analisi e sintesi bibliografica",
            "Costruire una rete di collaborazioni accademiche e industriali"
        ]
    },
    receptionist: {
        tasks: [
            { name: "Smistamento chiamate e gestione prenotazioni standard", risk: 78 },
            { name: "Registrazione visitatori e gestione badge standard", risk: 72 },
            { name: "Accoglienza personalizzata e gestione situazioni complesse", risk: 22 },
            { name: "Supporto logistico a eventi e riunioni aziendali", risk: 25 }
        ],
        survivalPlan: [
            "Specializzarsi in strutture di alto profilo con forte componente relazionale",
            "Sviluppare competenze di office management e supporto amministrativo allargato",
            "Imparare a gestire strumenti di visitor management digitale",
            "Costruire competenze di comunicazione professionale multilingue"
        ]
    },
    ux_ui_designer: {
        tasks: [
            { name: "Wireframe e mockup standard", risk: 65 },
            { name: "Adattamento design a nuove piattaforme", risk: 58 },
            { name: "User research e test di usabilità", risk: 20 },
            { name: "Progettazione di esperienze complesse e accessibili", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in UX research e design strategy",
            "Sviluppare competenze di design system e accessibilità avanzata",
            "Usare l'AI per wireframing rapido, concentrandosi sulla ricerca utente",
            "Costruire competenze trasversali su psicologia cognitiva e comportamentale"
        ]
    },
    video_editor: {
        tasks: [
            { name: "Montaggio video standard e formati social", risk: 75 },
            { name: "Color grading e correzione colore di base", risk: 68 },
            { name: "Motion graphics complesse e animazioni custom", risk: 30 },
            { name: "Direzione creativa e storytelling visivo", risk: 22 }
        ],
        survivalPlan: [
            "Specializzarsi in motion design e visual storytelling avanzato",
            "Sviluppare competenze di direzione creativa per produzioni complesse",
            "Usare l'AI per tagli standard, concentrandosi sulla narrativa visiva",
            "Costruire un portfolio distintivo con lavori ad alto impatto creativo"
        ]
    },
    art_director: {
        tasks: [
            { name: "Brief e coordinamento produzione materiali standard", risk: 45 },
            { name: "Selezione e approvazione esecutivi grafici", risk: 38 },
            { name: "Definizione di concept creativi originali", risk: 18 },
            { name: "Direzione strategica dell'identità visiva del brand", risk: 12 }
        ],
        survivalPlan: [
            "Concentrarsi sulla direzione strategica e lo sviluppo dei concept",
            "Sviluppare capacità di guida creativa dei team e dei freelance",
            "Usare l'AI per la produzione esecutiva, liberando tempo per la visione",
            "Costruire competenze trasversali tra brand strategy e comunicazione"
        ]
    },
    fotografo: {
        tasks: [
            { name: "Fotografia di prodotto e catalogo standard", risk: 72 },
            { name: "Ritocco e post-produzione di base", risk: 80 },
            { name: "Fotografia editoriale e reportage", risk: 28 },
            { name: "Direzione fotografica e comunicazione visiva complessa", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in reportage, editorial e fotografia di storie",
            "Sviluppare uno stile fotografico personale e riconoscibile",
            "Usare l'AI per ritocco e varianti standard, risparmiando tempo creativo",
            "Costruire competenze di direzione fotografica per campagne complesse"
        ]
    },
    illustratore: {
        tasks: [
            { name: "Illustrazioni standard e varianti di stile", risk: 78 },
            { name: "Adattamento illustrazioni a diverse piattaforme", risk: 70 },
            { name: "Sviluppo di stili e universi visivi originali", risk: 22 },
            { name: "Narrazione visiva complessa e character design", risk: 18 }
        ],
        survivalPlan: [
            "Sviluppare uno stile distintivo e un universo visivo difficile da replicare",
            "Specializzarsi in character design narrativo e world building visivo",
            "Usare l'AI per varianti e adattamenti, concentrandosi sulla creazione originale",
            "Costruire una presenza artistica personale riconoscibile e fedele"
        ]
    },
    sound_designer: {
        tasks: [
            { name: "Editing audio standard e noise reduction", risk: 72 },
            { name: "Mixaggio e mastering di base", risk: 65 },
            { name: "Composizione e sound design originale per media", risk: 28 },
            { name: "Direzione artistica sonora di progetti complessi", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi nella composizione originale e sound design narrativo",
            "Sviluppare competenze di audio branding e identità sonora aziendale",
            "Usare l'AI per editing di base, concentrandosi sulla creazione originale",
            "Costruire competenze trasversali tra musica, game audio e post-produzione"
        ]
    },
    paralegal: {
        tasks: [
            { name: "Redazione contratti standard", risk: 85 },
            { name: "Ricerca giuridica di base", risk: 75 },
            { name: "Negoziazione e casi complessi", risk: 25 },
            { name: "Consulenza diretta al cliente", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in negoziazione e gestione di casi complessi",
            "Sviluppare competenze di consulenza diretta al cliente",
            "Imparare a validare e correggere documenti generati da AI legale",
            "Concentrarsi su aree legali con forte componente di giudizio umano"
        ]
    },
    infermiere: {
        tasks: [
            { name: "Monitoraggio parametri di routine", risk: 50 },
            { name: "Documentazione clinica standard", risk: 45 },
            { name: "Assistenza fisica diretta al paziente", risk: 8 },
            { name: "Supporto emotivo e relazione di cura", risk: 5 }
        ],
        survivalPlan: [
            "Concentrarsi sull'assistenza fisica diretta e la relazione di cura",
            "Usare l'AI per documentazione e monitoraggio, risparmiando tempo clinico",
            "Sviluppare competenze in aree di alta specializzazione clinica",
            "Diventare punto di riferimento per il supporto emotivo dei pazienti"
        ]
    },
    cost_controller: {
        tasks: [
            { name: "Reportistica costi standard", risk: 85 },
            { name: "Monitoraggio scostamenti budget", risk: 75 },
            { name: "Negoziazione con fornitori", risk: 25 },
            { name: "Analisi strategica dei costi", risk: 30 }
        ],
        survivalPlan: [
            "Specializzarsi in negoziazione strategica con fornitori",
            "Sviluppare competenze di analisi predittiva dei costi",
            "Imparare a usare l'AI per reportistica automatica, liberando tempo",
            "Offrire consulenza su efficientamento dei processi di costo"
        ]
    },
    project_planner: {
        tasks: [
            { name: "Creazione Gantt e timeline standard", risk: 85 },
            { name: "Aggiornamento avanzamento attività", risk: 75 },
            { name: "Gestione stakeholder complessi", risk: 25 },
            { name: "Problem solving su progetti critici", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi nella gestione di stakeholder e relazioni complesse",
            "Sviluppare competenze di problem solving su progetti ad alto rischio",
            "Imparare a usare l'AI per pianificazione automatica, liberando tempo",
            "Concentrarsi su progetti multi-team con forte coordinamento umano"
        ]
    },
    cost_estimator: {
        tasks: [
            { name: "Stime su database storici", risk: 80 },
            { name: "Analisi preventivi standard", risk: 70 },
            { name: "Valutazione rischi non standard", risk: 30 },
            { name: "Stime per progetti complessi e innovativi", risk: 25 }
        ],
        survivalPlan: [
            "Specializzarsi nella valutazione di rischi non standard",
            "Sviluppare competenze su progetti innovativi senza precedenti storici",
            "Imparare a validare le stime generate da modelli AI",
            "Offrire consulenza strategica su pianificazione costi a lungo termine"
        ]
    },
    project_controller: {
        tasks: [
            { name: "Controllo dati e KPI standard", risk: 85 },
            { name: "Riconciliazione WIP", risk: 75 },
            { name: "Supervisione finanziaria progetti complessi", risk: 25 },
            { name: "Compliance e giudizio su deviazioni critiche", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi nella supervisione finanziaria di progetti complessi",
            "Sviluppare competenze di giudizio su deviazioni e rischi critici",
            "Imparare a usare l'AI per controllo dati automatico, liberando tempo",
            "Offrire consulenza su governance finanziaria di progetto"
        ]
    },
    project_manager: {
        tasks: [
            { name: "Aggiornamento piani e reportistica standard", risk: 60 },
            { name: "Tracking task e status meeting", risk: 55 },
            { name: "Gestione stakeholder e conflitti di team", risk: 12 },
            { name: "Decisioni su rischi e scope progetto", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione stakeholder complessi e negoziazione",
            "Sviluppare competenze di leadership e gestione del cambiamento",
            "Usare l'AI per reportistica e tracking, liberando tempo per decisioni strategiche",
            "Costruire expertise di dominio specifica (settore, normativa, tecnologia)"
        ]
    },
    controller_gestione: {
        tasks: [
            { name: "Reportistica periodica e variance analysis", risk: 75 },
            { name: "Raccolta ed elaborazione dati gestionali", risk: 80 },
            { name: "Definizione strategia di pianificazione e controllo", risk: 20 },
            { name: "Supporto decisionale al management", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in business partnering e supporto decisionale strategico",
            "Sviluppare competenze di forecasting avanzato e scenario planning",
            "Imparare a interpretare e validare report generati dall'AI",
            "Costruire competenze di comunicazione con il top management"
        ]
    },
    tax_advisor: {
        tasks: [
            { name: "Compilazione dichiarazioni standard", risk: 70 },
            { name: "Monitoraggio scadenze e adempimenti", risk: 65 },
            { name: "Consulenza su pianificazione fiscale complessa", risk: 15 },
            { name: "Gestione contenziosi e rapporti con l'Agenzia delle Entrate", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in pianificazione fiscale internazionale e M&A",
            "Sviluppare competenze di gestione contenziosi tributari",
            "Usare l'AI per compliance standard, liberando tempo per consulenza",
            "Costruire una nicchia di expertise normativa molto specifica"
        ]
    },
    management_consultant: {
        tasks: [
            { name: "Raccolta dati e benchmark di settore", risk: 65 },
            { name: "Creazione slide e report standard", risk: 60 },
            { name: "Definizione strategia su misura per il cliente", risk: 10 },
            { name: "Gestione relazione e negoziazione con il cliente", risk: 8 }
        ],
        survivalPlan: [
            "Specializzarsi in settori verticali con expertise profonda",
            "Sviluppare competenze di facilitazione e change management",
            "Usare l'AI per ricerca e benchmark, concentrandosi sulla sintesi strategica",
            "Costruire una rete di relazioni e reputazione personale nel settore"
        ]
    },
    financial_analyst: {
        tasks: [
            { name: "Modelli finanziari standard e valutazioni", risk: 70 },
            { name: "Raccolta dati di mercato e reportistica", risk: 72 },
            { name: "Interpretazione strategica di scenari complessi", risk: 18 },
            { name: "Presentazione raccomandazioni al management/investitori", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in valutazioni complesse (M&A, private equity)",
            "Sviluppare competenze di comunicazione e storytelling con i dati",
            "Usare l'AI per modelli standard, concentrandosi sull'interpretazione",
            "Costruire competenze di settore verticale specifiche"
        ]
    },
    risk_manager: {
        tasks: [
            { name: "Monitoraggio indicatori di rischio standard", risk: 65 },
            { name: "Reportistica e compliance normativa", risk: 60 },
            { name: "Valutazione scenari di rischio complessi e non standard", risk: 15 },
            { name: "Definizione strategia di risk management aziendale", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in risk management strategico e scenari complessi",
            "Sviluppare competenze normative su rischi emergenti (cyber, climatici, AI)",
            "Usare l'AI per monitoraggio continuo, concentrandosi su decisioni critiche",
            "Costruire competenze di comunicazione del rischio al board"
        ]
    },
    legal_counsel: {
        tasks: [
            { name: "Revisione contratti standard", risk: 60 },
            { name: "Ricerca giuridica e due diligence", risk: 55 },
            { name: "Negoziazione contratti complessi", risk: 12 },
            { name: "Consulenza strategica su rischio legale aziendale", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi in negoziazione e contrattualistica complessa",
            "Sviluppare competenze su normative emergenti (AI Act, privacy, ESG)",
            "Usare l'AI per ricerca e revisione standard, concentrandosi sulla strategia",
            "Costruire competenze di gestione del contenzioso e mediazione"
        ]
    },
    procurement_manager: {
        tasks: [
            { name: "Richieste di offerta e comparazione standard", risk: 65 },
            { name: "Gestione ordini e tracking fornitori", risk: 70 },
            { name: "Negoziazione strategica con fornitori chiave", risk: 15 },
            { name: "Gestione rischio supply chain e sostenibilità", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in negoziazione strategica e gestione fornitori critici",
            "Sviluppare competenze di procurement sostenibile e gestione rischio",
            "Usare l'AI per comparazione offerte, concentrandosi sulla relazione fornitori",
            "Costruire competenze di category management avanzato"
        ]
    },
    supply_chain_specialist: {
        tasks: [
            { name: "Pianificazione domanda e scorte standard", risk: 70 },
            { name: "Monitoraggio KPI logistici", risk: 68 },
            { name: "Gestione interruzioni e crisi della supply chain", risk: 15 },
            { name: "Ottimizzazione strategica della rete distributiva", risk: 20 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione del rischio e resilienza della supply chain",
            "Sviluppare competenze di ottimizzazione strategica della rete",
            "Usare l'AI per forecasting standard, concentrandosi su scenari complessi",
            "Costruire competenze di sostenibilità e compliance internazionale"
        ]
    },
    process_engineer: {
        tasks: [
            { name: "Mappatura e documentazione processi standard", risk: 60 },
            { name: "Analisi dati di performance e reportistica", risk: 65 },
            { name: "Progettazione di processi complessi e cross-funzionali", risk: 18 },
            { name: "Gestione del cambiamento organizzativo", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in re-engineering di processi complessi e cross-funzionali",
            "Sviluppare competenze di change management e formazione interna",
            "Usare l'AI per analisi dati e mappatura, concentrandosi sulla progettazione",
            "Costruire competenze su metodologie Lean/Six Sigma avanzate"
        ]
    },
    logistics_manager: {
        tasks: [
            { name: "Pianificazione trasporti e scheduling standard", risk: 68 },
            { name: "Monitoraggio spedizioni e tracking", risk: 72 },
            { name: "Gestione crisi logistiche e imprevisti", risk: 15 },
            { name: "Negoziazione con vettori e ottimizzazione rete", risk: 18 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione di crisi logistiche e network complessi",
            "Sviluppare competenze di negoziazione con vettori e partner internazionali",
            "Usare l'AI per scheduling e tracking, concentrandosi sull'eccezione",
            "Costruire competenze di logistica sostenibile e compliance doganale"
        ]
    },
    operations_manager: {
        tasks: [
            { name: "Monitoraggio KPI operativi standard", risk: 60 },
            { name: "Reportistica e controllo qualità di routine", risk: 58 },
            { name: "Decisioni su allocazione risorse e priorità", risk: 15 },
            { name: "Gestione team e risoluzione conflitti operativi", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione del cambiamento e ottimizzazione operativa",
            "Sviluppare competenze di leadership e gestione di team multidisciplinari",
            "Usare l'AI per monitoraggio KPI, concentrandosi su decisioni strategiche",
            "Costruire competenze su trasformazione digitale dei processi operativi"
        ]
    },
    talent_acquisition: {
        tasks: [
            { name: "Screening CV e prima scrematura candidati", risk: 70 },
            { name: "Pubblicazione annunci e gestione ATS", risk: 65 },
            { name: "Colloqui e valutazione fit culturale", risk: 18 },
            { name: "Employer branding e strategia di talent attraction", risk: 15 }
        ],
        survivalPlan: [
            "Specializzarsi in valutazione del fit culturale e soft skill",
            "Sviluppare competenze di employer branding ed executive search",
            "Usare l'AI per screening iniziale, concentrandosi sulla relazione umana",
            "Costruire una rete professionale per il recruiting su ruoli senior"
        ]
    },
    hr_generalist: {
        tasks: [
            { name: "Gestione pratiche amministrative standard", risk: 72 },
            { name: "Risposte a richieste HR ricorrenti", risk: 68 },
            { name: "Gestione conflitti e questioni disciplinari", risk: 12 },
            { name: "Supporto a manager su questioni delicate", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione di conflitti e questioni disciplinari complesse",
            "Sviluppare competenze di consulenza interna ai manager",
            "Usare l'AI per pratiche amministrative, concentrandosi sulla relazione",
            "Costruire competenze normative su diritto del lavoro aggiornato"
        ]
    },
    hr_business_partner: {
        tasks: [
            { name: "Reportistica HR e analisi di turnover", risk: 60 },
            { name: "Raccolta feedback e survey standard", risk: 55 },
            { name: "Consulenza strategica su organizzazione e talenti", risk: 10 },
            { name: "Gestione del cambiamento organizzativo", risk: 8 }
        ],
        survivalPlan: [
            "Specializzarsi in consulenza strategica su organizzazione e talenti",
            "Sviluppare competenze di change management e leadership development",
            "Usare l'AI per analisi dati HR, concentrandosi sulla strategia",
            "Costruire una relazione di fiducia con il business e il management"
        ]
    },
    sustainability_specialist: {
        tasks: [
            { name: "Raccolta dati ESG e reportistica standard", risk: 65 },
            { name: "Monitoraggio compliance normativa", risk: 60 },
            { name: "Definizione strategia di sostenibilità aziendale", risk: 15 },
            { name: "Gestione relazioni con stakeholder esterni", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in strategia ESG e reportistica di sostenibilità avanzata",
            "Sviluppare competenze normative su tassonomia UE e CSRD",
            "Usare l'AI per raccolta dati, concentrandosi sulla strategia",
            "Costruire competenze di comunicazione e stakeholder engagement"
        ]
    },
    hse_specialist: {
        tasks: [
            { name: "Compilazione documentazione sicurezza standard", risk: 60 },
            { name: "Audit e ispezioni di routine", risk: 55 },
            { name: "Gestione di incidenti ed emergenze sul campo", risk: 10 },
            { name: "Formazione e cultura della sicurezza aziendale", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione di emergenze e situazioni critiche sul campo",
            "Sviluppare competenze di formazione e cultura della sicurezza",
            "Usare l'AI per documentazione standard, concentrandosi sul campo",
            "Costruire competenze normative su rischi emergenti (chimici, ambientali)"
        ]
    },
    medical_science_liaison: {
        tasks: [
            { name: "Reportistica su interazioni con KOL", risk: 45 },
            { name: "Raccolta e sintesi di letteratura scientifica", risk: 50 },
            { name: "Relazione diretta con medici e ricercatori chiave", risk: 8 },
            { name: "Consulenza scientifica strategica interna", risk: 10 }
        ],
        survivalPlan: [
            "Specializzarsi nella relazione diretta con KOL e ricercatori",
            "Sviluppare competenze scientifiche avanzate e aggiornamento continuo",
            "Usare l'AI per sintesi di letteratura, concentrandosi sulla relazione",
            "Costruire una rete di fiducia con la comunità medico-scientifica"
        ]
    },
    clinical_research_associate: {
        tasks: [
            { name: "Verifica documentazione standard degli studi", risk: 65 },
            { name: "Monitoraggio compliance al protocollo", risk: 60 },
            { name: "Gestione di deviazioni e problemi critici sul campo", risk: 15 },
            { name: "Relazione con centri clinici e investigatori", risk: 12 }
        ],
        survivalPlan: [
            "Specializzarsi in gestione di studi clinici complessi e multicentrici",
            "Sviluppare competenze di relazione con investigatori e centri clinici",
            "Usare l'AI per verifica documentazione, concentrandosi sul campo",
            "Costruire competenze normative su regulatory affairs avanzato"
        ]
    },

    avvocato: {
        tasks: [
            { name: "Ricerca giurisprudenza e normativa", risk: 92 },
            { name: "Redazione contratti standard", risk: 85 },
            { name: "Revisione e due diligence documenti", risk: 80 },
            { name: "Gestione pratiche burocratiche", risk: 75 },
            { name: "Strategia processuale e difesa", risk: 18 },
            { name: "Consulenza legale strategica", risk: 15 },
            { name: "Negoziazione e mediazione", risk: 20 }
        ],
        survivalPlan: [
            "Specializzazione in diritto complesso (penale, internazionale, IP)",
            "Capacità di persuasione e retorica in aula",
            "Competenze in AI Law e regolamentazione algoritmica",
            "Costruire fiducia e relazione con clienti in momenti critici"
        ]
    },
    notaio: {
        tasks: [
            { name: "Redazione atti standard (rogiti, compravendite)", risk: 82 },
            { name: "Verifiche catastali e ipotecarie", risk: 90 },
            { name: "Autenticazione documenti", risk: 65 },
            { name: "Consulenza successoria e patrimoniale", risk: 30 },
            { name: "Rogito con presenza fisica delle parti", risk: 20 }
        ],
        survivalPlan: [
            "Consulenza patrimoniale e successoria complessa",
            "Specializzazione in operazioni straordinarie (M&A, trust)",
            "Competenze in diritto internazionale privato",
            "Gestione di situazioni familiari delicate"
        ]
    },
    commercialista: {
        tasks: [
            { name: "Dichiarazioni fiscali e contabilità ordinaria", risk: 95 },
            { name: "Elaborazione buste paga", risk: 92 },
            { name: "Adempimenti IVA e F24", risk: 90 },
            { name: "Bilanci e reportistica standard", risk: 85 },
            { name: "Consulenza fiscale strategica", risk: 28 },
            { name: "Pianificazione patrimoniale", risk: 25 },
            { name: "Gestione crisi aziendali e procedure concorsuali", risk: 22 }
        ],
        survivalPlan: [
            "Consulenza fiscale strategica per PMI e holding",
            "Specializzazione in operazioni straordinarie (M&A, scissioni)",
            "Gestione crisi aziendali e procedure concorsuali",
            "Pianificazione patrimoniale e successoria complessa"
        ]
    },
    consulente_del_lavoro: {
        tasks: [
            { name: "Elaborazione buste paga", risk: 95 },
            { name: "Adempimenti previdenziali (INPS, INAIL)", risk: 92 },
            { name: "Gestione assunzioni e cessazioni standard", risk: 85 },
            { name: "Consulenza contrattuale e sindacale", risk: 35 },
            { name: "Gestione controversie di lavoro", risk: 25 }
        ],
        survivalPlan: [
            "Consulenza in ristrutturazioni aziendali e contratti collettivi",
            "Gestione controversie e contenziosi del lavoro",
            "Specializzazione in welfare aziendale e benefit",
            "Conoscenza approfondita dei contratti collettivi di settore"
        ]
    },
    magistrato: {
        tasks: [
            { name: "Ricerca precedenti giurisprudenziali", risk: 88 },
            { name: "Redazione bozze di sentenza su casi standard", risk: 60 },
            { name: "Analisi fascicoli e documentazione", risk: 72 },
            { name: "Valutazione prove e testimonianze", risk: 15 },
            { name: "Deliberazione e sentenza definitiva", risk: 8 },
            { name: "Udienza e gestione dibattimentale", risk: 12 }
        ],
        survivalPlan: [
            "Specializzazione in diritto europeo e internazionale",
            "Gestione di casi ad alta complessità fattuale",
            "Competenze in diritto dell'AI e reati informatici",
            "Capacità di valutazione delle prove in contesti tecnologici"
        ]
    },
    medico_base: {
        tasks: [
            { name: "Diagnosi di patologie comuni tramite sintomi", risk: 78 },
            { name: "Prescrizione farmaci per condizioni standard", risk: 70 },
            { name: "Analisi referti ed esami diagnostici", risk: 82 },
            { name: "Relazione terapeutica e ascolto del paziente", risk: 10 },
            { name: "Gestione pazienti cronici complessi", risk: 22 },
            { name: "Decisioni terapeutiche in casi atipici", risk: 18 }
        ],
        survivalPlan: [
            "Sviluppare l'ascolto empatico e la relazione di cura",
            "Specializzazione in medicina preventiva e longevità",
            "Competenze in medicina personalizzata e genomica",
            "Supervisione e interpretazione critica dei sistemi AI diagnostici"
        ]
    },
    chirurgo: {
        tasks: [
            { name: "Pianificazione preoperatoria e analisi imaging", risk: 80 },
            { name: "Chirurgia robotica assistita (supervisione)", risk: 35 },
            { name: "Interventi laparoscopici standard", risk: 40 },
            { name: "Chirurgia d'urgenza e decisionale", risk: 12 },
            { name: "Gestione complicanze intraoperatorie", risk: 8 },
            { name: "Relazione col paziente e consenso informato", risk: 5 }
        ],
        survivalPlan: [
            "Specializzazione in chirurgia robotica e mininvasiva",
            "Competenze in chirurgia d'urgenza e trauma",
            "Interpretazione critica dei sistemi di supporto AI",
            "Sviluppo di nuove tecniche chirurgiche"
        ]
    },
    dentista: {
        tasks: [
            { name: "Diagnosi carie e patologie orali da imaging", risk: 85 },
            { name: "Pianificazione trattamenti ortodontici", risk: 70 },
            { name: "Pulizia dentale (igienista)", risk: 35 },
            { name: "Interventi chirurgici orali", risk: 18 },
            { name: "Gestione del paziente ansioso", risk: 8 },
            { name: "Estetica dentale e relazione col paziente", risk: 12 }
        ],
        survivalPlan: [
            "Specializzazione in implantologia e chirurgia orale complessa",
            "Competenze in odontoiatria estetica avanzata",
            "Supervisione sistemi AI di diagnosi radiologica",
            "Gestione di pazienti con patologie sistemiche"
        ]
    },
    fisioterapista: {
        tasks: [
            { name: "Valutazione posturale e analisi del movimento", risk: 65 },
            { name: "Pianificazione del percorso riabilitativo", risk: 55 },
            { name: "Trattamento manuale (massaggio, mobilizzazione)", risk: 12 },
            { name: "Educazione terapeutica del paziente", risk: 15 },
            { name: "Riabilitazione neuromotoria", risk: 18 }
        ],
        survivalPlan: [
            "Specializzazione in riabilitazione neurologica",
            "Competenze in terapia manuale avanzata (osteopatia, PNF)",
            "Approccio biopsicosociale al dolore cronico",
            "Integrazione di wearable e biofeedback nella terapia"
        ]
    },
    psicologo: {
        tasks: [
            { name: "Assessment psicologico e test standardizzati", risk: 70 },
            { name: "Documentazione e note cliniche", risk: 75 },
            { name: "Ricerca bibliografica e diagnosi DSM", risk: 80 },
            { name: "Relazione terapeutica e alleanza clinica", risk: 5 },
            { name: "Psicoterapia e intervento in crisi", risk: 8 },
            { name: "Lavoro con traumi e situazioni complesse", risk: 6 }
        ],
        survivalPlan: [
            "Specializzazione in trauma, EMDR e terapie di terza generazione",
            "Psicologia forense e neuropsicologia clinica",
            "Supervisione e formazione di altri terapeuti",
            "Integrazione critica degli strumenti AI nel percorso terapeutico"
        ]
    },
    farmacista: {
        tasks: [
            { name: "Dispensazione farmaci con ricetta standard", risk: 88 },
            { name: "Verifica interazioni farmacologiche", risk: 82 },
            { name: "Gestione magazzino e ordini", risk: 90 },
            { name: "Consulenza su farmaci OTC", risk: 60 },
            { name: "Consulenza personalizzata su patologie croniche", risk: 25 },
            { name: "Preparazioni galeniche magistrali", risk: 30 }
        ],
        survivalPlan: [
            "Specializzazione in farmacia clinica e oncologica",
            "Consulenza personalizzata per politerapi e pazienti fragili",
            "Competenze in nutraceutica e medicina integrativa",
            "Gestione farmacia come hub di salute di prossimità"
        ]
    },
    veterinario: {
        tasks: [
            { name: "Diagnosi da sintomi e anamnesi standard", risk: 72 },
            { name: "Analisi referti ed esami", risk: 78 },
            { name: "Interventi chirurgici veterinari", risk: 20 },
            { name: "Gestione del paziente animale", risk: 8 },
            { name: "Relazione con il proprietario dell'animale", risk: 6 },
            { name: "Medicina d'urgenza veterinaria", risk: 12 }
        ],
        survivalPlan: [
            "Specializzazione in chirurgia e oncologia veterinaria",
            "Medicina d'urgenza e terapia intensiva animale",
            "Competenze in diagnostica per immagini avanzata",
            "Medicina degli animali esotici o selvatici"
        ]
    },
    nutrizionista: {
        tasks: [
            { name: "Calcolo piani alimentari standard", risk: 90 },
            { name: "Analisi composizione corporea", risk: 75 },
            { name: "Educazione alimentare di base", risk: 70 },
            { name: "Gestione disturbi alimentari complessi", risk: 15 },
            { name: "Supporto psicologico al cambiamento", risk: 12 },
            { name: "Nutrizione clinica per patologie rare", risk: 20 }
        ],
        survivalPlan: [
            "Specializzazione in nutrizione clinica oncologica e renale",
            "Trattamento dei disturbi del comportamento alimentare",
            "Approccio integrato psico-nutrizionale",
            "Nutrizione sportiva di alto livello e biorisonanza"
        ]
    },
    radiologo: {
        tasks: [
            { name: "Refertazione radiografie standard (polmone, osso)", risk: 92 },
            { name: "Analisi TC e RM per patologie comuni", risk: 85 },
            { name: "Screening mammografico", risk: 90 },
            { name: "Interventistica radiologica complessa", risk: 18 },
            { name: "Supervisione e validazione AI diagnostica", risk: 30 },
            { name: "Radiologia d'urgenza e trauma", risk: 22 }
        ],
        survivalPlan: [
            "Radiologia interventistica (procedure minimamente invasive)",
            "Supervisione e audit dei sistemi AI diagnostici",
            "Specializzazione in imaging molecolare e ibrido (PET/CT)",
            "Competenze in ricerca e sviluppo di nuovi protocolli diagnostici"
        ]
    },
    osteopata: {
        tasks: [
            { name: "Anamnesi e valutazione funzionale", risk: 55 },
            { name: "Diagnosi osteopatica", risk: 40 },
            { name: "Manipolazioni articolari e cranio-sacrali", risk: 8 },
            { name: "Tecniche di tessuto molle", risk: 10 },
            { name: "Educazione posturale", risk: 45 }
        ],
        survivalPlan: [
            "Integrazione con medicina funzionale e nutrizione",
            "Specializzazione in osteopatia pediatrica e viscerale",
            "Approccio integrato corpo-mente",
            "Ricerca e pubblicazione scientifica in osteopatia"
        ]
    },
    logopedista: {
        tasks: [
            { name: "Valutazione e assessment del linguaggio", risk: 65 },
            { name: "Esercizi di riabilitazione fonologica standard", risk: 50 },
            { name: "Documentazione e note cliniche", risk: 80 },
            { name: "Terapia per disturbi complessi (disfagia, afasia)", risk: 12 },
            { name: "Lavoro con bambini e famiglie", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione in disfagia e deglutizione",
            "Riabilitazione post-ictus e neurologica",
            "Logopedia per DSA e bambini con bisogni speciali",
            "Integrazione di tecnologie AAC nella terapia"
        ]
    },
    oss: {
        tasks: [
            { name: "Documentazione assistenziale", risk: 65 },
            { name: "Monitoraggio parametri vitali (con dispositivi)", risk: 55 },
            { name: "Assistenza igienica e mobilizzazione", risk: 10 },
            { name: "Supporto emotivo e relazione con il paziente", risk: 5 },
            { name: "Assistenza a pazienti non autosufficienti", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione in assistenza demenze e Alzheimer",
            "Competenze in cure palliative e fine vita",
            "Formazione in gestione dello stress e prevenzione burnout",
            "Coordinamento con équipe multidisciplinari"
        ]
    },
    ingegnere_civile: {
        tasks: [
            { name: "Calcoli strutturali standard e dimensionamento", risk: 82 },
            { name: "Produzione elaborati e tavole CAD/BIM", risk: 78 },
            { name: "Computi metrici estimativi", risk: 85 },
            { name: "Progettazione di strutture complesse e innovative", risk: 20 },
            { name: "Supervisione cantiere e gestione rischi", risk: 18 },
            { name: "Collaudi e certificazioni di responsabilità", risk: 15 }
        ],
        survivalPlan: [
            "Specializzazione in ingegneria sismica avanzata",
            "Competenze in BIM management e digital twin",
            "Progettazione sostenibile e materiali innovativi",
            "Gestione grandi infrastrutture e project management"
        ]
    },
    architetto: {
        tasks: [
            { name: "Produzione elaborati tecnici e tavole BIM", risk: 80 },
            { name: "Rendering e visualizzazioni 3D", risk: 85 },
            { name: "Computi e specifiche tecniche standard", risk: 78 },
            { name: "Concept design e visione creativa", risk: 20 },
            { name: "Relazione con il cliente e ascolto delle esigenze", risk: 10 },
            { name: "Progettazione su contesti storici e vincolati", risk: 18 }
        ],
        survivalPlan: [
            "Progettazione bioclimatica e architettura sostenibile",
            "Specializzazione in restauro e patrimonio culturale",
            "Direzione artistica e branding degli spazi",
            "Competenze in parametric design e computational architecture"
        ]
    },
    geometra: {
        tasks: [
            { name: "Rilievi topografici e catastali", risk: 82 },
            { name: "Pratiche catastali e DOCFA", risk: 90 },
            { name: "Computi metrici e preventivi standard", risk: 88 },
            { name: "Progettazione edilizia semplice (abitativo)", risk: 70 },
            { name: "Direzione lavori e rapporto con il cantiere", risk: 28 },
            { name: "Consulenza su sanatorie e condoni", risk: 35 }
        ],
        survivalPlan: [
            "Specializzazione in efficienza energetica e APE",
            "Competenze in topografia digitale e droni",
            "BIM per il settore edilizio residenziale",
            "Gestione pratiche complesse (Superbonus, sisma-bonus)"
        ]
    },
    topografo: {
        tasks: [
            { name: "Rilievi GPS e fotogrammetria con droni", risk: 75 },
            { name: "Elaborazione dati GIS", risk: 80 },
            { name: "Aggiornamenti catastali e mappe", risk: 85 },
            { name: "Rilievi in contesti complessi (sotterranei, storici)", risk: 30 },
            { name: "Perizie e consulenze tecniche", risk: 28 }
        ],
        survivalPlan: [
            "Specializzazione in LiDAR e scansioni 3D",
            "Competenze in GIS avanzato e analisi spaziale",
            "Rilievi subacquei e in ambienti estremi",
            "Consulenza per pianificazione territoriale"
        ]
    },
    ingegnere_meccanico: {
        tasks: [
            { name: "Calcoli e simulazioni FEM standard", risk: 85 },
            { name: "Progettazione CAD di componenti standard", risk: 78 },
            { name: "Documentazione tecnica e distinte materiali", risk: 82 },
            { name: "Progettazione di sistemi complessi e innovativi", risk: 22 },
            { name: "Problem solving su guasti e malfunzionamenti", risk: 18 },
            { name: "Testing e validazione su campo", risk: 25 }
        ],
        survivalPlan: [
            "Specializzazione in meccatronica e robotica",
            "Competenze in additive manufacturing (stampa 3D)",
            "Ingegneria dei sistemi e system engineering",
            "Sviluppo prodotto con metodologie agile e rapid prototyping"
        ]
    },
    urbanista: {
        tasks: [
            { name: "Analisi dati territoriali e demografici", risk: 80 },
            { name: "Produzione cartografie e GIS", risk: 78 },
            { name: "Redazione varianti PRG standard", risk: 65 },
            { name: "Progettazione partecipata e mediazione con stakeholder", risk: 15 },
            { name: "Pianificazione strategica urbana", risk: 20 }
        ],
        survivalPlan: [
            "Smart city design e urban data analytics",
            "Pianificazione per resilienza climatica",
            "Partecipazione pubblica e co-design urbano",
            "Specializzazione in rigenerazione urbana e brownfield"
        ]
    },
    ingegnere_ambientale: {
        tasks: [
            { name: "Analisi dati ambientali e modellazione", risk: 80 },
            { name: "Redazione studi VIA e VAS standard", risk: 72 },
            { name: "Monitoraggio ambientale con sensori IoT", risk: 65 },
            { name: "Progettazione interventi di bonifica complessi", risk: 22 },
            { name: "Consulenza normativa e interazione con enti", risk: 28 }
        ],
        survivalPlan: [
            "Specializzazione in economia circolare e LCA",
            "Competenze in carbon accounting e ESG reporting",
            "Progettazione Nature Based Solutions",
            "Gestione di procedure autorizzative complesse (AIA, VIA)"
        ]
    },
    agente_immobiliare: {
        tasks: [
            { name: "Ricerca e matching immobili-acquirenti", risk: 88 },
            { name: "Redazione annunci e schede immobili", risk: 85 },
            { name: "Valutazione immobili standard (AVR)", risk: 80 },
            { name: "Negoziazione e gestione trattativa", risk: 22 },
            { name: "Relazione di fiducia con acquirenti e venditori", risk: 12 },
            { name: "Gestione situazioni complesse (eredità, divorzi)", risk: 18 }
        ],
        survivalPlan: [
            "Specializzazione in immobili di lusso o commerciali",
            "Competenze in home staging e marketing immobiliare avanzato",
            "Gestione portafogli di investimento immobiliare",
            "Consulenza per investitori e fondi immobiliari"
        ]
    },
    perito_immobiliare: {
        tasks: [
            { name: "Valutazione AVM (modelli automatici)", risk: 92 },
            { name: "Redazione perizie standard per banche", risk: 82 },
            { name: "Analisi comparative di mercato", risk: 88 },
            { name: "Perizia su immobili atipici e di lusso", risk: 30 },
            { name: "Perizia per contenzioso e tribunale", risk: 22 }
        ],
        survivalPlan: [
            "Specializzazione in immobili storici e di pregio",
            "Perizie per contenziosi e procedure esecutive",
            "Valutazione di portafogli NPL e crediti immobiliari",
            "Competenze in analisi di investimento immobiliare"
        ]
    },
    consulente_finanziario: {
        tasks: [
            { name: "Analisi portafoglio e asset allocation standard", risk: 88 },
            { name: "Pianificazione finanziaria base", risk: 82 },
            { name: "Reportistica e compliance standard", risk: 90 },
            { name: "Consulenza patrimoniale complessa (successione, trust)", risk: 22 },
            { name: "Gestione emotiva del cliente in momenti di crisi", risk: 8 },
            { name: "Consulenza su operazioni straordinarie", risk: 18 }
        ],
        survivalPlan: [
            "Specializzazione in pianificazione patrimoniale e successoria",
            "Consulenza su ESG e investimenti sostenibili",
            "Gestione emotiva e behavioral finance",
            "Competenze in family office e patrimoni complessi"
        ]
    },
    agente_assicurativo: {
        tasks: [
            { name: "Quotazione polizze standard (auto, casa)", risk: 95 },
            { name: "Gestione sinistri semplici", risk: 88 },
            { name: "Rinnovi e gestione portafoglio base", risk: 85 },
            { name: "Consulenza assicurativa complessa (vita, previdenza)", risk: 25 },
            { name: "Gestione clienti business e rischi aziendali", risk: 20 }
        ],
        survivalPlan: [
            "Specializzazione in risk management aziendale",
            "Consulenza su polizze vita e previdenza complementare",
            "Competenze in liability e D&O per aziende",
            "Gestione sinistri complessi e contenzioso"
        ]
    },
    revisore_contabile: {
        tasks: [
            { name: "Analisi transazioni e riconciliazioni", risk: 95 },
            { name: "Verifica bilanci e conformità standard", risk: 90 },
            { name: "Campionamento e test di dettaglio", risk: 85 },
            { name: "Valutazione rischi di frode e irregolarità", risk: 30 },
            { name: "Relazione con management e audit committee", risk: 15 },
            { name: "Giudizio professionale su stime contabili", risk: 22 }
        ],
        survivalPlan: [
            "Specializzazione in forensic accounting e anti-frode",
            "Audit di sistemi AI e algoritmi",
            "Consulenza su governance e internal audit avanzato",
            "Competenze in cybersecurity audit"
        ]
    },
    giornalista: {
        tasks: [
            { name: "Redazione notizie da comunicati e dati (automated journalism)", risk: 92 },
            { name: "Trascrizione interviste", risk: 95 },
            { name: "Ricerca e verifica fonti", risk: 70 },
            { name: "Reportage investigativo e d'inchiesta", risk: 12 },
            { name: "Analisi e commento critico", risk: 20 },
            { name: "Costruzione di fonti e relazioni", risk: 8 }
        ],
        survivalPlan: [
            "Giornalismo investigativo e data journalism",
            "Competenze in verifica delle fonti (fact-checking AI)",
            "Specializzazione in nicchie di expertise profonda",
            "Sviluppare audience propria e personal brand editoriale"
        ]
    },
    scrittore: {
        tasks: [
            { name: "Scrittura di contenuti brevi e schematici", risk: 88 },
            { name: "Traduzioni e adattamenti", risk: 82 },
            { name: "Ghostwriting standard", risk: 72 },
            { name: "Narrativa letteraria con voce originale", risk: 20 },
            { name: "Saggistica con ricerca profonda", risk: 22 },
            { name: "Scrittura per contesti culturali specifici", risk: 18 }
        ],
        survivalPlan: [
            "Sviluppare voce letteraria irriproducibile",
            "Scrittura ibrida uomo-AI (prompt engineering creativo)",
            "Specializzazione in generi di nicchia",
            "Costruire relazione diretta con i lettori (newsletter, community)"
        ]
    },
    sceneggiatore: {
        tasks: [
            { name: "Struttura narrativa e outline di soggetti", risk: 75 },
            { name: "Dialoghi standard e adattamenti", risk: 70 },
            { name: "Scrittura di sequel e franchise", risk: 65 },
            { name: "Storie originali con profondità emotiva", risk: 18 },
            { name: "Adattamenti letterari complessi", risk: 22 },
            { name: "Lavoro di script editing e polish", risk: 55 }
        ],
        survivalPlan: [
            "Scrittura per nuovi formati (serie evento, podcast narrativo)",
            "Competenze in regia e produzione per writer-director",
            "Specializzazione in documentario e giornalismo cinematografico",
            "Costruire IP proprie e produrre in modo indipendente"
        ]
    },
    doppiatore: {
        tasks: [
            { name: "Doppiaggio di contenuti brevi (spot, tutorial)", risk: 90 },
            { name: "Voice-over per documentari standard", risk: 82 },
            { name: "Doppiaggio serie TV/film con attori famosi (clone vocal)", risk: 65 },
            { name: "Recitazione vocale con interpretazione profonda", risk: 18 },
            { name: "Doppiaggio di videogiochi con performance complesse", risk: 25 }
        ],
        survivalPlan: [
            "Specializzazione in recitazione vocale teatrale e letteraria",
            "Competenze in regia del suono e sound design",
            "Sviluppare personal brand vocale riconoscibile",
            "Formazione su supervisione e direzione voci AI"
        ]
    },
    idraulico: {
        tasks: [
            { name: "Preventivi e ordini materiali", risk: 60 },
            { name: "Installazione impianti standard", risk: 20 },
            { name: "Riparazione guasti e diagnostica", risk: 15 },
            { name: "Interventi in emergenza", risk: 8 },
            { name: "Lavori in spazi difficili", risk: 5 }
        ],
        survivalPlan: [
            "Specializzazione in impianti geotermici e pompe di calore",
            "Competenze in domotica e building automation",
            "Installazione impianti solari termici",
            "Specializzazione in energy audit degli impianti"
        ]
    },
    elettricista: {
        tasks: [
            { name: "Preventivi e documentazione", risk: 65 },
            { name: "Installazione impianti civili standard", risk: 22 },
            { name: "Risoluzione guasti e troubleshooting", risk: 15 },
            { name: "Impianti fotovoltaici e accumulo", risk: 20 },
            { name: "Cablaggi industriali complessi", risk: 18 }
        ],
        survivalPlan: [
            "Specializzazione in fotovoltaico e storage energetico",
            "Domotica e building automation (KNX, Zigbee)",
            "Impianti elettrici per veicoli elettrici (EV charging)",
            "Progettazione illuminotecnica"
        ]
    },
    falegname: {
        tasks: [
            { name: "Progettazione CAD di mobili standard", risk: 80 },
            { name: "Taglio CNC di componenti standard", risk: 55 },
            { name: "Posa e assemblaggio in cantiere", risk: 15 },
            { name: "Lavori personalizzati e su misura", risk: 10 },
            { name: "Restauro mobili antichi", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione in artigianato di lusso e su misura",
            "Restauro e conservazione del legno antico",
            "Utilizzo di CNC e tecnologie digitali per design personalizzato",
            "Sostenibilità e uso di materiali certificati"
        ]
    },
    meccanico: {
        tasks: [
            { name: "Diagnosi elettronica con OBD standard", risk: 72 },
            { name: "Tagliandi e manutenzione ordinaria", risk: 45 },
            { name: "Sostituzione componenti standard", risk: 30 },
            { name: "Diagnosi guasti complessi e atipici", risk: 12 },
            { name: "Riparazione veicoli elettrici e sistemi ADAS", risk: 20 }
        ],
        survivalPlan: [
            "Specializzazione in veicoli elettrici (EV, PHEV)",
            "Diagnosi avanzata sistemi ADAS e guida autonoma",
            "Competenze in bus e veicoli commerciali pesanti",
            "Gestione autofficina con software gestionali avanzati"
        ]
    },
    chef: {
        tasks: [
            { name: "Creazione ricette e menu standard", risk: 65 },
            { name: "Gestione scorte e ordinazione ingredienti", risk: 75 },
            { name: "Cottura automatizzata (forni programmabili, robot)", risk: 40 },
            { name: "Cucina creativa e alta gastronomia", risk: 10 },
            { name: "Gestione brigata e leadership in cucina", risk: 12 },
            { name: "Relazione con clienti e identità culinaria", risk: 8 }
        ],
        survivalPlan: [
            "Sviluppare identità culinaria e stile riconoscibile",
            "Competenze in fermentazione, tecniche avanzate, cucina scientifica",
            "Personal branding e presenza digitale",
            "Specializzazione in cucina vegetale, allergie, salute"
        ]
    },
    pasticcere: {
        tasks: [
            { name: "Produzione prodotti standard e su ricetta fissa", risk: 60 },
            { name: "Gestione ordinativi e magazzino", risk: 72 },
            { name: "Decorazioni semplici e standard", risk: 45 },
            { name: "Creazione di nuove ricette e prodotti", risk: 12 },
            { name: "Decorazioni artistiche e sculture in zucchero", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione in pasticceria da ristorazione e dessert d'autore",
            "Tecniche avanzate (temperaggio, isomalt, gelatina artistica)",
            "Personal branding e presenza sui social",
            "Sviluppare linee proprie e vendita diretta"
        ]
    },
    barista: {
        tasks: [
            { name: "Preparazione caffè e bevande standard", risk: 72 },
            { name: "Gestione cassa e ordini", risk: 80 },
            { name: "Aperitivi e cocktail standard", risk: 55 },
            { name: "Mixologia creativa e cocktail competition", risk: 12 },
            { name: "Relazione con i clienti abituali", risk: 5 },
            { name: "Gestione atmosfera del locale", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione in specialty coffee e caffetteria d'autore",
            "Mixologia avanzata e cocktail pairing",
            "Gestione e apertura di un locale proprio",
            "Competenze in coffee roasting e selezione origini"
        ]
    },
    parrucchiere: {
        tasks: [
            { name: "Gestione appuntamenti e cassa", risk: 80 },
            { name: "Consulenza colore e stile (assistita da AI)", risk: 55 },
            { name: "Taglio e styling", risk: 10 },
            { name: "Trattamenti chimici (colorazioni, permanenti)", risk: 15 },
            { name: "Relazione con il cliente", risk: 5 }
        ],
        survivalPlan: [
            "Specializzazione in colorazione avanzata (balayage, tecnica giapponese)",
            "Barberia di lusso e cura della barba",
            "Personal branding su Instagram/TikTok",
            "Formazione e apertura di accademia"
        ]
    },
    estetista: {
        tasks: [
            { name: "Prenotazioni e gestione agenda", risk: 85 },
            { name: "Consulenza prodotti skincare (AI-assisted)", risk: 60 },
            { name: "Trattamenti manuali (massaggi, pulizia viso)", risk: 10 },
            { name: "Tecniche laser e luce pulsata", risk: 20 },
            { name: "Relazione di fiducia e fidelizzazione cliente", risk: 5 }
        ],
        survivalPlan: [
            "Specializzazione in dermocosmetologia e trattamenti medical-grade",
            "Tecnologie estetiche avanzate (radiofrequenza, HIFU)",
            "Nutrizione della pelle e approccio olistico",
            "Gestione di centro estetico avanzato"
        ]
    },
    personal_trainer: {
        tasks: [
            { name: "Creazione schede allenamento standard", risk: 85 },
            { name: "Monitoraggio progressi con app e wearable", risk: 75 },
            { name: "Coaching motivazionale in presenza", risk: 12 },
            { name: "Riabilitazione motoria post-infortunio", risk: 18 },
            { name: "Preparazione atletica d'élite", risk: 15 }
        ],
        survivalPlan: [
            "Specializzazione in preparazione atletica per sport specifici",
            "Riabilitazione funzionale e movement therapy",
            "Nutrizione sportiva e supplementazione",
            "Costruire community online e programmi digitali"
        ]
    },
    vigile_urbano: {
        tasks: [
            { name: "Rilevamento infrazioni con telecamere e sensori", risk: 88 },
            { name: "Gestione pratiche e atti amministrativi", risk: 82 },
            { name: "Pattugliamento preventivo e deterrenza", risk: 25 },
            { name: "Gestione emergenze e incidenti stradali", risk: 18 },
            { name: "Mediazione conflitti e ordine pubblico", risk: 12 }
        ],
        survivalPlan: [
            "Specializzazione in polizia giudiziaria",
            "Gestione emergenze e protezione civile",
            "Mediazione e risoluzione dei conflitti di comunità",
            "Competenze in cybercrime e reati digitali"
        ]
    },
    pompiere: {
        tasks: [
            { name: "Pianificazione interventi e logistica", risk: 60 },
            { name: "Analisi rischi e scenari incidentali", risk: 55 },
            { name: "Intervento in incendi e soccorso tecnico", risk: 8 },
            { name: "Soccorso in ambienti confinati e USAR", risk: 5 },
            { name: "Gestione emergenze chimico-biologiche", risk: 10 }
        ],
        survivalPlan: [
            "Specializzazione USAR (Urban Search and Rescue)",
            "Competenze in emergenze NBCR (nucleare, biologico, chimico, radiologico)",
            "Comandante di unità operativa",
            "Formazione e prevenzione incendi in ambienti industriali"
        ]
    },
    funzionario_pubblico: {
        tasks: [
            { name: "Istruzione pratiche e atti amministrativi standard", risk: 90 },
            { name: "Gestione documentale e protocollo", risk: 88 },
            { name: "Risposta a richieste di accesso e informazioni", risk: 82 },
            { name: "Decisioni discrezionali su casi complessi", risk: 22 },
            { name: "Coordinamento inter-istituzionale", risk: 18 }
        ],
        survivalPlan: [
            "Specializzazione in procurement pubblico e appalti",
            "Project management per fondi PNRR ed europei",
            "Digitalizzazione dei processi pubblici",
            "Competenze in diritto amministrativo avanzato"
        ]
    },
    autista_camion: {
        tasks: [
            { name: "Guida su autostrade e percorsi standard", risk: 85 },
            { name: "Navigazione e ottimizzazione rotte", risk: 90 },
            { name: "Gestione documentazione trasporti", risk: 88 },
            { name: "Consegne last-mile in ambiente urbano complesso", risk: 35 },
            { name: "Gestione emergenze meccaniche e stradali", risk: 20 }
        ],
        survivalPlan: [
            "Specializzazione in trasporti eccezionali e carichi speciali",
            "Competenze in logistica internazionale e dogane",
            "Gestione flotte e coordinamento operativo",
            "Transizione verso supervisione di veicoli autonomi"
        ]
    },
    pilota: {
        tasks: [
            { name: "Volo di crociera standard (già automatizzato al 95%)", risk: 85 },
            { name: "Procedure di routine e checklist", risk: 75 },
            { name: "Gestione emergenze in volo", risk: 8 },
            { name: "Decisioni in condizioni meteo avverse", risk: 10 },
            { name: "Comunicazioni ATC complesse", risk: 20 }
        ],
        survivalPlan: [
            "Specializzazione in velivoli di nuova generazione",
            "Competenze in human factors e CRM avanzato",
            "Formazione su sistemi di automazione avanzata",
            "Percorso verso ruoli di Chief Pilot o Safety Manager"
        ]
    },
    magazziniere: {
        tasks: [
            { name: "Picking e packing standard", risk: 90 },
            { name: "Gestione inventario e conteggi", risk: 92 },
            { name: "Ricezione e verifica merce", risk: 82 },
            { name: "Gestione eccezioni e danni", risk: 28 },
            { name: "Coordinamento con fornitori e trasportatori", risk: 30 }
        ],
        survivalPlan: [
            "Competenze in WMS (Warehouse Management System)",
            "Supervisione robot AMR e sistemi automatizzati",
            "Specializzazione in logistica farmaceutica o food-grade",
            "Competenze in supply chain management"
        ]
    },
    agronomo: {
        tasks: [
            { name: "Analisi del suolo e piani fertilizzazione standard", risk: 80 },
            { name: "Monitoraggio colture con droni e sensori", risk: 72 },
            { name: "Redazione PAC e domande contributi", risk: 82 },
            { name: "Consulenza su gestione aziendale agricola", risk: 28 },
            { name: "Sviluppo nuove pratiche colturali e ricerca", risk: 22 }
        ],
        survivalPlan: [
            "Precision farming e agricoltura di precisione",
            "Agroecologia e agricoltura biologica certificata",
            "Carbon farming e crediti di carbonio agricoli",
            "Consulenza per filiere corte e valorizzazione prodotti"
        ]
    },
    agricoltore: {
        tasks: [
            { name: "Lavorazioni meccanizzate standard", risk: 72 },
            { name: "Gestione irrigazione e fertilizzazione", risk: 75 },
            { name: "Raccolta meccanizzata", risk: 65 },
            { name: "Gestione aziendale e filiera", risk: 25 },
            { name: "Selezione varietale e sperimentazione", risk: 20 },
            { name: "Agricoltura di precisione e adattamento climatico", risk: 22 }
        ],
        survivalPlan: [
            "Agricoltura di precisione (droni, sensori IoT)",
            "Diversificazione in agriturismo e vendita diretta",
            "Coltivazioni di nicchia e biologico certificato",
            "Accesso a fondi europei (PSR, PNRR Agri)"
        ]
    },
    enologo: {
        tasks: [
            { name: "Analisi chimiche e microbiologiche del vino", risk: 82 },
            { name: "Monitoraggio fermentazione con sensori", risk: 75 },
            { name: "Schede tecniche e documentazione", risk: 78 },
            { name: "Creazione nuovi blend e stile aziendale", risk: 12 },
            { name: "Degustazione critica e valutazione qualità", risk: 15 }
        ],
        survivalPlan: [
            "Specializzazione in viticultura biodinamica e naturale",
            "Competenze in enoturismo e marketing del vino",
            "Consulenza per cantina boutique e cru",
            "Export e comunicazione internazionale del vino"
        ]
    },
    allenatore: {
        tasks: [
            { name: "Analisi video e performance analytics", risk: 82 },
            { name: "Pianificazione allenamenti standard", risk: 72 },
            { name: "Scouting avversari", risk: 80 },
            { name: "Motivazione e leadership del gruppo", risk: 8 },
            { name: "Gestione dinamiche di squadra e conflitti", risk: 6 },
            { name: "Decision making tattico in partita", risk: 12 }
        ],
        survivalPlan: [
            "Specializzazione in sport analytics e data-driven coaching",
            "Competenze in psicologia dello sport",
            "Gestione dello spogliatoio e leadership situazionale",
            "Formazione in metodologie innovative di allenamento"
        ]
    },
    attore: {
        tasks: [
            { name: "Doppiaggio e voice acting standard", risk: 72 },
            { name: "Comparse e ruoli minori in CGI", risk: 65 },
            { name: "Recitazione per spot pubblicitari standard", risk: 55 },
            { name: "Performance teatrale live", risk: 8 },
            { name: "Interpretazione di ruoli complessi e drammatici", risk: 10 },
            { name: "Presenza e carisma scenico", risk: 5 }
        ],
        survivalPlan: [
            "Specializzazione in teatro fisico e danza-teatro",
            "Regia e direzione artistica",
            "Produzione indipendente e content creation",
            "Competenze in motion capture e performance digitale"
        ]
    },
    regista: {
        tasks: [
            { name: "Editing assistito e color correction standard", risk: 78 },
            { name: "VFX e post-produzione standard", risk: 72 },
            { name: "Storyboard e pre-visualizzazione", risk: 70 },
            { name: "Direzione attori e costruzione performance", risk: 8 },
            { name: "Visione creativa e punto di vista", risk: 6 },
            { name: "Gestione del set e decision making", risk: 10 }
        ],
        survivalPlan: [
            "Produzione indipendente con budget ridotti (AI accelera la post)",
            "Specializzazione in documentario e giornalismo cinematografico",
            "Sviluppare IP proprie e produrre serie internazionali",
            "Competenze in XR e esperienze immersive"
        ]
    },
    musicista: {
        tasks: [
            { name: "Composizione di musica funzionale (jingle, background)", risk: 88 },
            { name: "Produzione musicale digitale standard", risk: 72 },
            { name: "Arrangiamenti e orchestrazioni di servizio", risk: 75 },
            { name: "Esecuzione live e performance", risk: 10 },
            { name: "Composizione con voce artistica originale", risk: 12 },
            { name: "Insegnamento musicale", risk: 22 }
        ],
        survivalPlan: [
            "Sviluppare genere e identità sonora irriproducibile",
            "Competenze in live electronics e performance audiovisiva",
            "Musica per videogiochi e mondi virtuali",
            "Costruire community di fan diretta (Patreon, Bandcamp)"
        ]
    },
    cantante: {
        tasks: [
            { name: "Registrazione in studio per prodotti commerciali", risk: 70 },
            { name: "Jingle e voice-over cantato", risk: 80 },
            { name: "Cori e voci di supporto", risk: 72 },
            { name: "Performance live e concerto", risk: 8 },
            { name: "Identità artistica e fanbase", risk: 5 }
        ],
        survivalPlan: [
            "Sviluppare stile vocale unico e riconoscibile",
            "Songwriting e composizione propria",
            "Live performance e costruzione di fanbase",
            "Sfruttamento diritti e royalties come asset"
        ]
    },
    assistente_sociale: {
        tasks: [
            { name: "Gestione documentazione e pratiche", risk: 78 },
            { name: "Valutazione del bisogno con strumenti standardizzati", risk: 60 },
            { name: "Intervento in situazioni di crisi familiare", risk: 8 },
            { name: "Tutela minori e lavoro con famiglie vulnerabili", risk: 5 },
            { name: "Coordinamento con rete dei servizi", risk: 12 }
        ],
        survivalPlan: [
            "Specializzazione in tutela minori e protezione legale",
            "Lavoro con adulti in situazione di dipendenza",
            "Progettazione di servizi di welfare di comunità",
            "Competenze in mediazione familiare e penale"
        ]
    },
    educatore_sociale: {
        tasks: [
            { name: "Documentazione educativa e pei/pef", risk: 72 },
            { name: "Pianificazione attività e laboratori", risk: 55 },
            { name: "Relazione educativa individuale", risk: 6 },
            { name: "Lavoro di comunità e co-progettazione", risk: 10 },
            { name: "Gestione crisi e situazioni difficili", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione in educazione in carcere e giustizia minorile",
            "Competenze in dipendenze e riduzione del danno",
            "Coordinamento di équipe multidisciplinari",
            "Project management per progetti europei sociali"
        ]
    },
    stilista: {
        tasks: [
            { name: "Trend forecasting e analisi tendenze", risk: 80 },
            { name: "Sviluppo pattern e modellistica standard", risk: 68 },
            { name: "Generazione bozzetti e concept base", risk: 72 },
            { name: "Design con identità creativa originale", risk: 15 },
            { name: "Direzione artistica collection", risk: 12 },
            { name: "Relazione con artigiani e tessutai", risk: 10 }
        ],
        survivalPlan: [
            "Specializzazione in lusso e haute couture",
            "Competenze in sustainable fashion e materiali innovativi",
            "Direzione creativa e brand building",
            "Artigianato digitale e stampanti 3D per moda"
        ]
    },
    sommelier: {
        tasks: [
            { name: "Abbinamento cibo-vino standard", risk: 78 },
            { name: "Gestione cantina e ordini", risk: 72 },
            { name: "Degustazione descrittiva per schede", risk: 65 },
            { name: "Esperienza di servizio e narrazione del vino", risk: 10 },
            { name: "Consulenza per grandi cantine e aziende", risk: 20 }
        ],
        survivalPlan: [
            "Consulenza per aziende vinicole e investitori",
            "Enoturismo e ospitalità di lusso",
            "Competenze in wine marketing e comunicazione",
            "Specializzazione in vini naturali e biodinamici"
        ]
    },
    criminologo: {
        tasks: [
            { name: "Analisi profilo del criminale su dati standard", risk: 78 },
            { name: "Ricerca statistica su fenomeni criminali", risk: 82 },
            { name: "Redazione perizie psicologiche standard", risk: 60 },
            { name: "Analisi forense di scene complesse e atipiche", risk: 20 },
            { name: "Testimonianza in tribunale e consulenza legale", risk: 15 }
        ],
        survivalPlan: [
            "Specializzazione in criminalità organizzata e terrorism",
            "Cybercriminologia e analisi reati digitali",
            "Consulenza per enti pubblici e intelligence",
            "Ricerca accademica e pubblicazione scientifica"
        ]
    },
    psicologo_scolastico: {
        tasks: [
            { name: "Somministrazione test standardizzati", risk: 72 },
            { name: "Documentazione e relazioni", risk: 78 },
            { name: "Sportello di ascolto individuale", risk: 8 },
            { name: "Intervento su DSA e BES", risk: 20 },
            { name: "Mediazione conflitti tra studenti", risk: 10 }
        ],
        survivalPlan: [
            "Specializzazione in neuropsicologia dell'apprendimento",
            "Intervento precoce su disturbi emotivo-relazionali",
            "Competenze in mindfulness e psicologia positiva scolastica",
            "Formazione docenti e genitori"
        ]
    },
    lobbista: {
        tasks: [
            { name: "Monitoring normativo e regulatory watch", risk: 85 },
            { name: "Redazione position paper e note tecniche", risk: 75 },
            { name: "Analisi del processo legislativo", risk: 78 },
            { name: "Relazioni con istituzioni e stakeholder chiave", risk: 8 },
            { name: "Negoziazione e costruzione di coalizioni", risk: 6 }
        ],
        survivalPlan: [
            "Specializzazione in regolamentazione AI e tech policy",
            "Competenze in EU affairs e lobbying a Bruxelles",
            "Gestione di coalizioni multi-stakeholder",
            "Comunicazione pubblica e posizionamento politico"
        ]
    },
    redattore: {
        tasks: [
            { name: "Revisione grammaticale e sintattica", risk: 95 },
            { name: "Redazione notizie da fonti e comunicati", risk: 90 },
            { name: "SEO e ottimizzazione contenuti web", risk: 85 },
            { name: "Editing letterario e valorizzazione voce d'autore", risk: 18 },
            { name: "Content strategy e direzione editoriale", risk: 20 }
        ],
        survivalPlan: [
            "Editing letterario per narrativa e saggistica d'autore",
            "Direzione editoriale e sviluppo di brand editoriali",
            "Competenze in content strategy e audience building",
            "Specializzazione in traduzione editoriale letteraria"
        ]
    },
    panettiere: {
        tasks: [
            { name: "Produzione pane industriale e standard", risk: 82 },
            { name: "Gestione forni e processi produttivi", risk: 70 },
            { name: "Gestione magazzino e ordini", risk: 78 },
            { name: "Lievitazioni naturali e pani di alta qualità", risk: 15 },
            { name: "Relazione con clienti abituali", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione in lievitazione naturale (pasta madre)",
            "Pani di grano antico e prodotti tipici locali",
            "Personal branding e racconto del mestiere sui social",
            "Apertura di panificio artigianale con vendita diretta"
        ]
    },
    cameriere: {
        tasks: [
            { name: "Presa ordini con tablet/sistemi digitali", risk: 75 },
            { name: "Gestione cassa e pagamenti", risk: 82 },
            { name: "Servizio standard in ristorante fast casual", risk: 55 },
            { name: "Servizio di alta sala e fine dining", risk: 12 },
            { name: "Sommellerie e wine pairing", risk: 18 },
            { name: "Esperienza del cliente e storytelling del piatto", risk: 8 }
        ],
        survivalPlan: [
            "Specializzazione nel servizio di alta sala e fine dining",
            "Formazione in sommellerie e abbinamento",
            "Gestione di banquet e catering di lusso",
            "Carriera verso maître e direttore di sala"
        ]
    },
    medico_specialista: {
        tasks: [
            { name: "Diagnosi differenziale complessa", risk: 25 },
            { name: "Interpretazione esami strumentali", risk: 55 },
            { name: "Terapia farmacologica standard", risk: 40 },
            { name: "Relazione paziente e comunicazione diagnosi", risk: 8 },
            { name: "Chirurgia e procedure invasive", risk: 20 },
            { name: "Ricerca clinica e sperimentazioni", risk: 30 }
        ],
        survivalPlan: [
            "Specializzazione ultra-settoriale",
            "Comunicazione empatica con pazienti gravi",
            "Capacità decisionale in urgenza",
            "Ricerca clinica applicata"
        ]
    },
    infermiere_specializzato: {
        tasks: [
            { name: "Monitoraggio parametri vitali", risk: 45 },
            { name: "Somministrazione farmaci", risk: 30 },
            { name: "Cura e nursing quotidiano", risk: 12 },
            { name: "Supporto emotivo pazienti e famiglie", risk: 5 },
            { name: "Gestione emergenze", risk: 10 },
            { name: "Coordinamento team sanitario", risk: 20 }
        ],
        survivalPlan: [
            "Specializzazione in terapia intensiva o oncologia",
            "Leadership clinica",
            "Gestione crisi e urgenze",
            "Formazione colleghi"
        ]
    },
    tecnico_radiologia: {
        tasks: [
            { name: "Acquisizione immagini diagnostiche", risk: 40 },
            { name: "Controllo qualità immagini", risk: 55 },
            { name: "Preparazione pazienti", risk: 20 },
            { name: "Gestione apparecchiature", risk: 35 },
            { name: "Collaborazione con radiologo", risk: 25 }
        ],
        survivalPlan: [
            "Specializzazione in imaging avanzato (PET, RM 3T)",
            "Competenze in radioterapia",
            "Gestione pazienti fragili",
            "Manutenzione e calibrazione avanzata"
        ]
    },
    biologo: {
        tasks: [
            { name: "Analisi di laboratorio standard", risk: 72 },
            { name: "Ricerca scientifica applicata", risk: 35 },
            { name: "Consulenza nutrizionale e genetica", risk: 22 },
            { name: "Controllo qualità alimentare", risk: 55 },
            { name: "Elaborazione dati biologici", risk: 65 }
        ],
        survivalPlan: [
            "Bioinformatica e analisi dati genomici",
            "Specializzazione in biologia molecolare",
            "Ricerca e pubblicazione scientifica",
            "Consulenza genetica avanzata"
        ]
    },
    ottico: {
        tasks: [
            { name: "Test della vista standard", risk: 65 },
            { name: "Adattamento lenti e occhiali", risk: 40 },
            { name: "Consulenza visiva personalizzata", risk: 22 },
            { name: "Controllo salute oculare", risk: 35 },
            { name: "Gestione negozio e clienti", risk: 30 }
        ],
        survivalPlan: [
            "Optometria avanzata e terapia visiva",
            "Specializzazione in lenti a contatto",
            "Contatto umano e consulenza estetica",
            "Gestione patologie visive borderline"
        ]
    },
    logopedista_pediatrico: {
        tasks: [
            { name: "Valutazione disturbi comunicativi", risk: 30 },
            { name: "Terapia logopedica individuale", risk: 12 },
            { name: "Collaborazione con famiglie e scuole", risk: 8 },
            { name: "Stesura piani terapeutici", risk: 40 },
            { name: "Monitoraggio progressi", risk: 35 }
        ],
        survivalPlan: [
            "Specializzazione in DSA e autismo",
            "CAA (Comunicazione Aumentativa Alternativa)",
            "Lavoro multidisciplinare",
            "Formazione genitori e insegnanti"
        ]
    },
    tecnico_laboratorio: {
        tasks: [
            { name: "Analisi campioni biologici standard", risk: 88 },
            { name: "Calibrazione strumenti", risk: 55 },
            { name: "Controllo qualità analisi", risk: 70 },
            { name: "Reportistica risultati", risk: 80 },
            { name: "Gestione urgenze laboratorio", risk: 30 }
        ],
        survivalPlan: [
            "Bioinformatica e gestione dati genomici",
            "Specializzazione in microbiologia clinica",
            "Competenze in point-of-care testing",
            "Supervisione sistemi automatizzati"
        ]
    },
    dietista: {
        tasks: [
            { name: "Elaborazione piani alimentari standard", risk: 60 },
            { name: "Consulenza nutrizionale personalizzata", risk: 25 },
            { name: "Educazione alimentare pazienti", risk: 18 },
            { name: "Gestione pazienti con patologie", risk: 20 },
            { name: "Collaborazione con team medico", risk: 15 }
        ],
        survivalPlan: [
            "Nutrizione clinica in patologie complesse",
            "Psicologia dell'alimentazione",
            "Nutrizione sportiva avanzata",
            "Ricerca in scienze dell'alimentazione"
        ]
    },
    insegnante_scuola_primaria: {
        tasks: [
            { name: "Spiegazione contenuti didattici", risk: 35 },
            { name: "Gestione classe e disciplina", risk: 8 },
            { name: "Supporto emotivo e relazionale", risk: 5 },
            { name: "Valutazione apprendimento", risk: 40 },
            { name: "Inclusione alunni con bisogni speciali", risk: 10 },
            { name: "Collaborazione con famiglie", risk: 8 }
        ],
        survivalPlan: [
            "Pedagogia inclusiva e differenziata",
            "Gestione BES e DSA",
            "Uso didattico degli strumenti AI",
            "Leadership educativa e mentorat"
        ]
    },
    professore_liceo: {
        tasks: [
            { name: "Spiegazione frontale contenuti", risk: 45 },
            { name: "Preparazione materiali didattici", risk: 60 },
            { name: "Correzione compiti standard", risk: 70 },
            { name: "Orientamento e mentoring studenti", risk: 10 },
            { name: "Valutazione critica e formativa", risk: 20 },
            { name: "Gestione dinamiche di classe", risk: 8 }
        ],
        survivalPlan: [
            "Metodologie didattiche innovative (flipped classroom)",
            "Coaching e mentoring giovanile",
            "Uso pedagogico dell'AI in classe",
            "Specializzazione in materie STEM o umanistiche rare"
        ]
    },
    educatore_asilo_nido: {
        tasks: [
            { name: "Cura e accudimento quotidiano", risk: 5 },
            { name: "Stimolazione sviluppo cognitivo", risk: 15 },
            { name: "Comunicazione con genitori", risk: 8 },
            { name: "Osservazione e documentazione sviluppo", risk: 35 },
            { name: "Gestione routine quotidiana", risk: 12 }
        ],
        survivalPlan: [
            "Pedagogia prima infanzia (approccio Pikler, Montessori)",
            "Gestione difficoltà comportamentali precoci",
            "Comunicazione con famiglie in crisi",
            "Osservazione sviluppo atipico"
        ]
    },
    tutor_specializzato: {
        tasks: [
            { name: "Supporto allo studio individuale", risk: 45 },
            { name: "Tecniche compensative e dispensative", risk: 30 },
            { name: "Relazione motivazionale con studente", risk: 10 },
            { name: "Collaborazione con famiglia e scuola", risk: 12 },
            { name: "Elaborazione strategie personalizzate", risk: 35 }
        ],
        survivalPlan: [
            "Certificazione in DSA e ADHD",
            "Coaching motivazionale",
            "Tecnologie assistive avanzate",
            "Mediazione familiare scolastica"
        ]
    },
    avvocato_penalista: {
        tasks: [
            { name: "Ricerca giurisprudenza penale", risk: 85 },
            { name: "Redazione atti difensivi standard", risk: 70 },
            { name: "Strategia processuale e orale", risk: 15 },
            { name: "Difesa in udienza e cross-examination", risk: 10 },
            { name: "Negoziazione patteggiamenti", risk: 22 },
            { name: "Assistenza al detenuto", risk: 8 }
        ],
        survivalPlan: [
            "Oratoria processuale e persuasione",
            "Psicologia forense applicata",
            "Specializzazione in criminalità economica o informatica",
            "Networking con magistratura"
        ]
    },
    consulente_del_lavoro_senior: {
        tasks: [
            { name: "Elaborazione paghe e cedolini", risk: 92 },
            { name: "Gestione adempimenti contributivi", risk: 88 },
            { name: "Consulenza contrattuale standard", risk: 65 },
            { name: "Gestione vertenze e contenzioso", risk: 32 },
            { name: "Consulenza strategica HR", risk: 25 },
            { name: "Relazione con ispettorato", risk: 30 }
        ],
        survivalPlan: [
            "Diritto del lavoro complesso (mobbing, licenziamenti difficili)",
            "Gestione ristrutturazioni aziendali",
            "Consulenza su welfare aziendale",
            "Negoziazione sindacale"
        ]
    },
    mediatore_civile: {
        tasks: [
            { name: "Conduzione sessioni di mediazione", risk: 20 },
            { name: "Gestione conflitti interpersonali", risk: 12 },
            { name: "Redazione verbali di accordo", risk: 65 },
            { name: "Analisi posizioni delle parti", risk: 45 },
            { name: "Facilitazione comunicazione", risk: 10 }
        ],
        survivalPlan: [
            "Tecniche avanzate di mediazione (trasformativa, narrativa)",
            "Psicologia del conflitto",
            "Mediazione penale e scolastica",
            "Formazione di nuovi mediatori"
        ]
    },
    compliance_officer: {
        tasks: [
            { name: "Monitoraggio normativa applicabile", risk: 80 },
            { name: "Audit e controlli standard", risk: 72 },
            { name: "Formazione dipendenti su normativa", risk: 55 },
            { name: "Gestione whistleblowing e segnalazioni", risk: 30 },
            { name: "Consulenza strategica compliance", risk: 25 },
            { name: "Rapporti con autorità di vigilanza", risk: 22 }
        ],
        survivalPlan: [
            "Specializzazione GDPR e AI Act",
            "Compliance in settori regolamentati (finanza, farmaceutico)",
            "ESG e sostenibilità",
            "Gestione crisis compliance"
        ]
    },
    notaio_digitale: {
        tasks: [
            { name: "Autenticazione atti su blockchain", risk: 60 },
            { name: "Smart contract e atti digitali", risk: 50 },
            { name: "Consulenza su asset digitali", risk: 28 },
            { name: "Rogito tradizionale", risk: 35 },
            { name: "Consulenza successoria digitale", risk: 22 }
        ],
        survivalPlan: [
            "Diritto delle tecnologie e blockchain",
            "Smart contract e asset digitali",
            "Successione di asset digitali (crypto, NFT)",
            "Consulenza corporate su tokenizzazione"
        ]
    },
    ingegnere_elettrico: {
        tasks: [
            { name: "Progettazione impianti elettrici standard", risk: 55 },
            { name: "Calcoli e dimensionamento", risk: 65 },
            { name: "Supervisione cantieri", risk: 25 },
            { name: "Progettazione sistemi di energia rinnovabile", risk: 30 },
            { name: "Collaudo e messa in servizio", risk: 22 }
        ],
        survivalPlan: [
            "Energie rinnovabili e grid integration",
            "Power electronics e sistemi di accumulo",
            "Normativa CEI e IEC avanzata",
            "BIM MEP e progettazione integrata"
        ]
    },
    ingegnere_informatico: {
        tasks: [
            { name: "Progettazione architetture software", risk: 40 },
            { name: "Sviluppo codice standard", risk: 55 },
            { name: "Sicurezza informatica", risk: 28 },
            { name: "Integrazione sistemi complessi", risk: 30 },
            { name: "Ricerca e innovazione", risk: 22 },
            { name: "Team leadership tecnica", risk: 15 }
        ],
        survivalPlan: [
            "AI engineering e MLOps",
            "Cybersecurity e zero-trust architecture",
            "Architettura cloud-native",
            "Gestione team tecnici distribuiti"
        ]
    },
    ingegnere_biomedico: {
        tasks: [
            { name: "Progettazione dispositivi medici", risk: 30 },
            { name: "Test e validazione apparecchiature", risk: 45 },
            { name: "Manutenzione tecnologie ospedaliere", risk: 35 },
            { name: "Ricerca e sviluppo", risk: 25 },
            { name: "Regolamentazione MDR e FDA", risk: 40 }
        ],
        survivalPlan: [
            "AI medicale e dispositivi intelligenti",
            "Regulatory Affairs MDR/FDA",
            "Wearable e digital health",
            "Ricerca clinica applicata a dispositivi"
        ]
    },
    tecnico_informatico: {
        tasks: [
            { name: "Risoluzione problemi hardware comuni", risk: 55 },
            { name: "Supporto software e troubleshooting", risk: 72 },
            { name: "Installazione e configurazione", risk: 65 },
            { name: "Gestione ticket helpdesk", risk: 80 },
            { name: "Sicurezza endpoint", risk: 40 }
        ],
        survivalPlan: [
            "Cybersecurity e gestione incidenti",
            "Cloud administration (Azure, AWS)",
            "Automazione IT (PowerShell, Ansible)",
            "Gestione infrastrutture critiche"
        ]
    },
    geometra_catasto: {
        tasks: [
            { name: "Pratiche catastali e visure", risk: 90 },
            { name: "Successioni e volture catastali", risk: 85 },
            { name: "Planimetrie catastali", risk: 75 },
            { name: "Accatastamenti nuovi immobili", risk: 60 },
            { name: "Consulenza tecnica perizie", risk: 35 }
        ],
        survivalPlan: [
            "Specializzazione in estimo e valutazioni immobiliari",
            "BIM e modellazione 3D",
            "Efficienza energetica e certificazioni",
            "Project management edilizio"
        ]
    },
    perito_industriale: {
        tasks: [
            { name: "Perizie tecniche standard", risk: 65 },
            { name: "Collaudi e certificazioni", risk: 55 },
            { name: "Progettazione impianti semplici", risk: 50 },
            { name: "Consulenza tecnica in tribunale", risk: 28 },
            { name: "Direzione lavori", risk: 32 }
        ],
        survivalPlan: [
            "Specializzazione in industria 4.0",
            "Certificazione macchine e sicurezza",
            "CTU (Consulente Tecnico d'Ufficio)",
            "Valutazione danni e sinistri industriali"
        ]
    },
    analista_credito: {
        tasks: [
            { name: "Analisi bilanci e rating aziendali", risk: 88 },
            { name: "Istruttoria pratiche fido standard", risk: 92 },
            { name: "Monitoraggio portafoglio crediti", risk: 80 },
            { name: "Valutazione crediti in sofferenza", risk: 55 },
            { name: "Strutturazione operazioni complesse", risk: 30 }
        ],
        survivalPlan: [
            "Structured finance e operazioni complesse",
            "ESG credit analysis",
            "Gestione portafogli NPL",
            "Relazione con imprenditori e CFO"
        ]
    },
    consulente_fiscale: {
        tasks: [
            { name: "Dichiarazioni fiscali standard", risk: 92 },
            { name: "Calcolo imposte e adempimenti", risk: 88 },
            { name: "Pianificazione fiscale ordinaria", risk: 65 },
            { name: "Consulenza su operazioni straordinarie", risk: 28 },
            { name: "Contenzioso tributario", risk: 30 },
            { name: "Fiscalità internazionale", risk: 38 }
        ],
        survivalPlan: [
            "Fiscalità internazionale e transfer pricing",
            "Pianificazione patrimoniale complessa",
            "Contenzioso tributario avanzato",
            "Consulenza M&A fiscale"
        ]
    },
    actuario: {
        tasks: [
            { name: "Modelli attuariali standard", risk: 70 },
            { name: "Pricing prodotti assicurativi", risk: 65 },
            { name: "Reserving e solvibilità", risk: 60 },
            { name: "Modelli di rischio innovativi", risk: 35 },
            { name: "Consulenza strategica", risk: 22 }
        ],
        survivalPlan: [
            "Machine learning applicato all'attuariato",
            "Modelli climatici e cat risk",
            "ESG e rischio di transizione",
            "Governance dei modelli AI"
        ]
    },
    private_banker: {
        tasks: [
            { name: "Asset allocation standard", risk: 65 },
            { name: "Reporting portafogli", risk: 80 },
            { name: "Consulenza patrimoniale personalizzata", risk: 22 },
            { name: "Pianificazione successoria", risk: 25 },
            { name: "Relazione clienti UHNW", risk: 8 },
            { name: "Strutturazione operazioni complesse", risk: 30 }
        ],
        survivalPlan: [
            "Pianificazione patrimoniale multijurisdizionale",
            "Gestione family office",
            "ESG e impact investing",
            "Fiducia e networking con UHNW"
        ]
    },
    assicuratore: {
        tasks: [
            { name: "Quotazione polizze standard", risk: 90 },
            { name: "Gestione sinistri semplici", risk: 82 },
            { name: "Consulenza su prodotti complessi", risk: 35 },
            { name: "Fidelizzazione clienti", risk: 20 },
            { name: "Acquisizione nuovi clienti", risk: 40 }
        ],
        survivalPlan: [
            "Specializzazione in protezione patrimoniale complessa",
            "Risk management aziendale",
            "Benefits e welfare aziendale",
            "Relazione con clienti in momenti critici (sinistri gravi)"
        ]
    },
    pubblicitario: {
        tasks: [
            { name: "Generazione concept visivi", risk: 70 },
            { name: "Copywriting pubblicitario", risk: 65 },
            { name: "Direzione artistica campagne", risk: 35 },
            { name: "Strategia creativa di marca", risk: 22 },
            { name: "Relazione con clienti e brief", risk: 18 }
        ],
        survivalPlan: [
            "Direzione creativa strategica",
            "Brand storytelling e narrativa",
            "Integrazione creativa AI-umano",
            "Cultural insight e creatività culturale"
        ]
    },
    ufficio_stampa: {
        tasks: [
            { name: "Redazione comunicati stampa", risk: 75 },
            { name: "Rassegna stampa e monitoraggio", risk: 88 },
            { name: "Gestione crisi comunicativa", risk: 18 },
            { name: "Relazione con giornalisti", risk: 15 },
            { name: "Pianificazione campagne PR", risk: 35 }
        ],
        survivalPlan: [
            "Crisis communication avanzata",
            "Influencer e creator relations",
            "Comunicazione istituzionale e lobbying",
            "Media training e portavoce"
        ]
    },
    giornalista_investigativo: {
        tasks: [
            { name: "Ricerca fonti e documentazione", risk: 55 },
            { name: "Analisi dati pubblici (data journalism)", risk: 60 },
            { name: "Interviste e raccolta testimonianze", risk: 12 },
            { name: "Scrittura inchieste approfondite", risk: 30 },
            { name: "Protezione fonti e sicurezza", risk: 8 }
        ],
        survivalPlan: [
            "Data journalism e analisi open data",
            "OSINT e tecniche investigative digitali",
            "Diritto di accesso agli atti",
            "Sicurezza operativa per giornalisti"
        ]
    },
    podcaster: {
        tasks: [
            { name: "Registrazione e produzione audio", risk: 55 },
            { name: "Montaggio e post-produzione", risk: 65 },
            { name: "Scrittura scalette e ricerca", risk: 50 },
            { name: "Conduzione e interviste", risk: 20 },
            { name: "Community management", risk: 25 }
        ],
        survivalPlan: [
            "Specializzazione in nicchie verticali",
            "Monetizzazione avanzata (membership, live)",
            "Distribuzione cross-platform",
            "Storytelling audio narrativo"
        ]
    },
    fotografo_commerciale: {
        tasks: [
            { name: "Fotografia prodotto e e-commerce", risk: 82 },
            { name: "Foto stock e archivio", risk: 88 },
            { name: "Fotografia pubblicitaria", risk: 65 },
            { name: "Ritrattistica e eventi", risk: 28 },
            { name: "Direzione artistica set", risk: 30 }
        ],
        survivalPlan: [
            "Fotografia fine-art e autoriale",
            "Direzione creativa su set complessi",
            "Fotografia documentaria e reportage",
            "Specializzazione wedding o architettura di lusso"
        ]
    },
    recruiter: {
        tasks: [
            { name: "Screening CV e preselezione", risk: 90 },
            { name: "Pubblicazione offerte di lavoro", risk: 85 },
            { name: "Colloqui strutturati di primo livello", risk: 60 },
            { name: "Assessment e valutazione candidati", risk: 40 },
            { name: "Headhunting senior e executive", risk: 20 },
            { name: "Employer branding", risk: 35 }
        ],
        survivalPlan: [
            "Executive search e headhunting senior",
            "Employer branding e candidate experience",
            "Assessment psicologici avanzati",
            "Negoziazione e gestione offerte complesse"
        ]
    },
    hr_analytics: {
        tasks: [
            { name: "Analisi dati HR e reportistica", risk: 70 },
            { name: "Dashboard e KPI workforce", risk: 65 },
            { name: "Modelli predittivi turnover", risk: 55 },
            { name: "Consulenza strategica people analytics", risk: 25 },
            { name: "Change management data-driven", risk: 20 }
        ],
        survivalPlan: [
            "ML applicato alle HR",
            "Compensation analytics",
            "Workforce planning strategico",
            "Comunicazione insight ai C-level"
        ]
    },
    coach_aziendale: {
        tasks: [
            { name: "Sessioni di coaching individuale", risk: 15 },
            { name: "Programmi di leadership development", risk: 20 },
            { name: "Assessment e profiling", risk: 40 },
            { name: "Facilitazione team e workshop", risk: 18 },
            { name: "Relazione fiduciaria con coachee", risk: 5 }
        ],
        survivalPlan: [
            "Certificazione ICF PCC o MCC",
            "Coaching per C-suite e board",
            "Team coaching e facilitazione sistemica",
            "Integrazione AI nel percorso di sviluppo"
        ]
    },
    venditore_porta_a_porta: {
        tasks: [
            { name: "Acquisizione clienti da freddo", risk: 55 },
            { name: "Presentazione prodotti standard", risk: 70 },
            { name: "Gestione obiezioni", risk: 45 },
            { name: "Chiusura trattative", risk: 40 },
            { name: "Fidelizzazione clienti", risk: 25 }
        ],
        survivalPlan: [
            "Vendita consultiva e soluzioni complesse",
            "Specializzazione B2B enterprise",
            "Account management strategico",
            "Negoziazione contratti pluriennali"
        ]
    },
    buyer_moda: {
        tasks: [
            { name: "Analisi trend e previsioni vendita", risk: 70 },
            { name: "Selezione campionario", risk: 45 },
            { name: "Negoziazione con fornitori", risk: 30 },
            { name: "Gestione ordini e riassortimento", risk: 75 },
            { name: "Valutazione estetica collezioni", risk: 25 }
        ],
        survivalPlan: [
            "Sostenibilità e supply chain etica",
            "Trend forecasting avanzato",
            "Mercati emergenti e sourcing globale",
            "Brand identity e selezione curatoriale"
        ]
    },
    agente_commerciale: {
        tasks: [
            { name: "Gestione portafoglio clienti esistenti", risk: 55 },
            { name: "Acquisizione nuovi clienti", risk: 60 },
            { name: "Presentazione prodotti e offerte", risk: 65 },
            { name: "Raccolta ordini", risk: 82 },
            { name: "Risoluzione reclami e assistenza", risk: 40 }
        ],
        survivalPlan: [
            "Key account management strategico",
            "Vendita soluzioni complesse B2B",
            "Specializzazione settoriale verticale",
            "Negoziazione contratti quadro"
        ]
    },
    web_designer: {
        tasks: [
            { name: "Creazione layout e UI standard", risk: 80 },
            { name: "Prototipazione wireframe", risk: 72 },
            { name: "Sviluppo grafico per web", risk: 70 },
            { name: "Design system e componenti", risk: 55 },
            { name: "Direzione creativa digitale", risk: 25 }
        ],
        survivalPlan: [
            "UX research e user testing",
            "Motion design e micro-interazioni",
            "Direzione creativa e brand design",
            "Design per accessibilità (WCAG)"
        ]
    },
    social_media_manager: {
        tasks: [
            { name: "Creazione contenuti standard", risk: 80 },
            { name: "Pianificazione editoriale", risk: 72 },
            { name: "Gestione community base", risk: 55 },
            { name: "Analisi e reporting metriche", risk: 75 },
            { name: "Strategia social complessa", risk: 28 },
            { name: "Crisis management social", risk: 18 }
        ],
        survivalPlan: [
            "Strategia social B2B avanzata",
            "Influencer marketing e creator economy",
            "Crisis communication digitale",
            "Social commerce e conversione"
        ]
    },
    e_commerce_specialist: {
        tasks: [
            { name: "Gestione catalogo e schede prodotto", risk: 85 },
            { name: "Ottimizzazione campagne advertising", risk: 70 },
            { name: "Analisi performance e conversione", risk: 65 },
            { name: "Strategia marketplace (Amazon, etc.)", risk: 45 },
            { name: "Esperienza cliente e retention", risk: 30 }
        ],
        survivalPlan: [
            "Strategia omnichannel avanzata",
            "Internazionalizzazione e mercati esteri",
            "D2C e brand building digitale",
            "Data-driven merchandising"
        ]
    },
    data_engineer_senior: {
        tasks: [
            { name: "Sviluppo pipeline ETL standard", risk: 55 },
            { name: "Progettazione architetture dati", risk: 30 },
            { name: "Data quality e governance", risk: 38 },
            { name: "Ottimizzazione query e performance", risk: 50 },
            { name: "Integrazione sorgenti dati eterogenee", risk: 35 }
        ],
        survivalPlan: [
            "Architetture data mesh e lakehouse",
            "Real-time streaming (Kafka, Flink)",
            "Data governance e compliance",
            "MLOps e feature engineering"
        ]
    },
    cybersecurity_analyst: {
        tasks: [
            { name: "Monitoraggio SOC e alert triage", risk: 60 },
            { name: "Analisi malware e threat intelligence", risk: 40 },
            { name: "Penetration testing", risk: 30 },
            { name: "Incident response", risk: 22 },
            { name: "Consulenza strategica security", risk: 18 }
        ],
        survivalPlan: [
            "Red teaming e offensive security",
            "AI security e prompt injection",
            "Cloud security e zero trust",
            "Compliance NIS2 e DORA"
        ]
    },
    falegname_artigiano: {
        tasks: [
            { name: "Produzione in serie su CNC", risk: 55 },
            { name: "Lavorazioni artigianali su misura", risk: 15 },
            { name: "Restauro mobili d'epoca", risk: 10 },
            { name: "Progettazione su misura con cliente", risk: 20 },
            { name: "Finitura e verniciatura manuale", risk: 18 }
        ],
        survivalPlan: [
            "Restauro mobili storici e antichi",
            "Intaglio e tecniche decorative tradizionali",
            "Progettazione su misura con BIM",
            "Formazione e trasmissione del mestiere"
        ]
    },
    sarto: {
        tasks: [
            { name: "Confezione capi standard", risk: 50 },
            { name: "Modellistica per produzione", risk: 62 },
            { name: "Alta sartoria su misura", risk: 12 },
            { name: "Alterazioni e riparazioni", risk: 22 },
            { name: "Consulenza stile e fitting", risk: 15 }
        ],
        survivalPlan: [
            "Alta sartoria e taglio sartoriale",
            "Modellistica digitale (CLO 3D)",
            "Sostenibilità e upcycling",
            "Specializzazione su misura lusso"
        ]
    },
    orafo: {
        tasks: [
            { name: "Produzione gioielli in serie", risk: 55 },
            { name: "Oreficeria artigianale", risk: 18 },
            { name: "Riparazioni e restauri", risk: 22 },
            { name: "Progettazione pezzi unici", risk: 20 },
            { name: "Valutazione e perizia preziosi", risk: 32 }
        ],
        survivalPlan: [
            "Design gioielleria e 3D jewelry design",
            "Gemologia e valutazione pietre",
            "Tecniche orafe tradizionali (cera persa, fusione)",
            "Brand e retail di nicchia"
        ]
    },
    cuoco_pizzaiolo: {
        tasks: [
            { name: "Preparazioni semplici e standardizzate", risk: 45 },
            { name: "Pizza napoletana artigianale", risk: 12 },
            { name: "Cucina di livello creativo", risk: 10 },
            { name: "Gestione brigata di cucina", risk: 15 },
            { name: "Menu engineering e innovazione", risk: 20 }
        ],
        survivalPlan: [
            "Cucina creativa e fine dining",
            "Fermentazione e tecniche avanzate",
            "Gestione food cost e brigata",
            "Brand chef e comunicazione"
        ]
    },
    pasticcere_artigiano: {
        tasks: [
            { name: "Produzione di massa standardizzata", risk: 58 },
            { name: "Pasticceria artigianale fine", risk: 18 },
            { name: "Creazioni artistiche e torte personalizzate", risk: 12 },
            { name: "Sviluppo nuove ricette", risk: 20 },
            { name: "Gestione laboratorio", risk: 30 }
        ],
        survivalPlan: [
            "Cioccolateria e lavorazione zucchero artistico",
            "Innovazione con ingredienti insoliti",
            "Brand e comunicazione digitale",
            "Formazione e scuola di pasticceria"
        ]
    },
    guida_turistica: {
        tasks: [
            { name: "Tour standard su percorsi fissi", risk: 55 },
            { name: "Spiegazione storica e artistica", risk: 48 },
            { name: "Gestione gruppi in situazioni impreviste", risk: 15 },
            { name: "Esperienza immersiva e narrativa", risk: 20 },
            { name: "Tour specializzati e tematici", risk: 22 }
        ],
        survivalPlan: [
            "Guide specializzate (food tour, dark tourism, luxury)",
            "Lingue rare",
            "Storytelling esperienziale avanzato",
            "Certificazioni per musei e siti UNESCO"
        ]
    },
    receptionist_hotel: {
        tasks: [
            { name: "Check-in/check-out standard", risk: 88 },
            { name: "Gestione prenotazioni", risk: 82 },
            { name: "Risposta richieste base clienti", risk: 75 },
            { name: "Gestione reclami complessi", risk: 25 },
            { name: "Concierge e raccomandazioni locali", risk: 35 },
            { name: "Upselling servizi", risk: 55 }
        ],
        survivalPlan: [
            "Revenue management e yield",
            "Guest experience di lusso",
            "Lingue rare (cinese, arabo, russo)",
            "Gestione clienti VIP e UHNW"
        ]
    },
    travel_planner: {
        tasks: [
            { name: "Prenotazione viaggi standard", risk: 92 },
            { name: "Ricerca e comparazione prezzi", risk: 88 },
            { name: "Pianificazione itinerari base", risk: 75 },
            { name: "Viaggi di lusso e su misura", risk: 25 },
            { name: "Gestione emergenze in viaggio", risk: 18 },
            { name: "Destinazioni rare e off-the-beaten-path", risk: 30 }
        ],
        survivalPlan: [
            "Specializzazione luxury e honeymoon travel",
            "Destinazioni di nicchia (Antartide, Bhutan)",
            "Corporate travel management",
            "Crisis management in travel"
        ]
    },
    wedding_planner: {
        tasks: [
            { name: "Coordinamento fornitori standard", risk: 50 },
            { name: "Gestione budget e preventivi", risk: 60 },
            { name: "Direzione artistica evento", risk: 22 },
            { name: "Gestione imprevisti il giorno dell'evento", risk: 8 },
            { name: "Relazione con sposi e famiglie", risk: 10 }
        ],
        survivalPlan: [
            "Destination wedding internazionale",
            "Luxury events e clientela UHNW",
            "Sostenibilità eventi",
            "Design esperienziale avanzato"
        ]
    },
    dirigente_pa: {
        tasks: [
            { name: "Gestione iter burocratici standard", risk: 70 },
            { name: "Firma atti e provvedimenti", risk: 55 },
            { name: "Coordinamento uffici e team", risk: 28 },
            { name: "Gestione relazioni politiche e istituzionali", risk: 15 },
            { name: "Pianificazione strategica ente", risk: 22 }
        ],
        survivalPlan: [
            "Digital transformation PA",
            "Project management PNRR",
            "Open government e partecipazione",
            "Leadership istituzionale complessa"
        ]
    },
    assistente_amministrativo_pa: {
        tasks: [
            { name: "Gestione pratiche e archiviazione", risk: 92 },
            { name: "Trascrizione e redazione atti standard", risk: 88 },
            { name: "Risposta utenti e front office", risk: 72 },
            { name: "Gestione protocollo", risk: 85 },
            { name: "Supporto al dirigente", risk: 45 }
        ],
        survivalPlan: [
            "Digital transformation e PA digitale",
            "Gestione progetti europei",
            "Comunicazione istituzionale",
            "Specializzazione normativa settoriale"
        ]
    },
    preparatore_atletico: {
        tasks: [
            { name: "Programmazione allenamenti standard", risk: 55 },
            { name: "Analisi performance e dati biometrici", risk: 60 },
            { name: "Lavoro individuale su atleta", risk: 18 },
            { name: "Gestione infortuni e riabilitazione", risk: 20 },
            { name: "Motivazione e psicologia sportiva", risk: 12 }
        ],
        survivalPlan: [
            "Sport science e analisi dati biometrici avanzata",
            "Prevenzione infortuni con AI",
            "Coaching psicologico e mental training",
            "Sport di squadra ad alto livello"
        ]
    },
    istruttore_fitness: {
        tasks: [
            { name: "Schede allenamento standard", risk: 80 },
            { name: "Corsi di gruppo fissi", risk: 55 },
            { name: "Personal training live", risk: 22 },
            { name: "Online coaching personalizzato", risk: 35 },
            { name: "Nutrizione e stile di vita", risk: 45 }
        ],
        survivalPlan: [
            "Coaching olistico (fitness + nutrizione + mindset)",
            "Specializzazione (riabilitazione, anziani, preparazione gare)",
            "Personal brand e community",
            "Online coaching su scala"
        ]
    },
    chimico: {
        tasks: [
            { name: "Analisi chimiche di routine", risk: 80 },
            { name: "Controllo qualità standard", risk: 75 },
            { name: "Ricerca e sviluppo nuovi composti", risk: 30 },
            { name: "Sintesi e scale-up processi", risk: 35 },
            { name: "Pubblicazione scientifica", risk: 38 }
        ],
        survivalPlan: [
            "Cheminformatica e drug discovery AI",
            "Green chemistry e sostenibilità",
            "Regulatory Affairs (REACH, ICH)",
            "Ricerca multidisciplinare biochimica-farmaceutica"
        ]
    },
    fisico: {
        tasks: [
            { name: "Analisi dati sperimentali", risk: 65 },
            { name: "Simulazioni computazionali", risk: 55 },
            { name: "Formulazione teorie e ipotesi", risk: 20 },
            { name: "Progettazione esperimenti", risk: 25 },
            { name: "Pubblicazione e revisione tra pari", risk: 35 }
        ],
        survivalPlan: [
            "Fisica computazionale e AI",
            "Quantum computing",
            "Intersecazione fisica-biologia (biofisica)",
            "Trasferimento tecnologico e brevetti"
        ]
    },
    psicologo_clinico: {
        tasks: [
            { name: "Terapia individuale strutturata (CBT standard)", risk: 30 },
            { name: "Assessment e diagnosi psicologica", risk: 35 },
            { name: "Psicoterapia relazionale e umanistica", risk: 8 },
            { name: "Gestione crisi e urgenze psichiatriche", risk: 10 },
            { name: "Supervisione e formazione colleghi", risk: 15 }
        ],
        survivalPlan: [
            "Specializzazione in trauma e EMDR",
            "Psicologia forense",
            "Supervisione clinica",
            "Integrazione etica degli strumenti digitali"
        ]
    },
    esperto_energia: {
        tasks: [
            { name: "Audit energetici standard", risk: 60 },
            { name: "Monitoraggio consumi", risk: 70 },
            { name: "Progettazione impianti rinnovabili", risk: 40 },
            { name: "Consulenza strategica energetica", risk: 25 },
            { name: "Gestione incentivi e pratiche GSE", risk: 55 }
        ],
        survivalPlan: [
            "Comunità Energetiche Rinnovabili (CER)",
            "Accumulo e gestione rete",
            "Finanza green e project finance",
            "Normativa energetica europea avanzata"
        ]
    },
    geologo: {
        tasks: [
            { name: "Campionamento e analisi laboratorio", risk: 55 },
            { name: "Modellazione rischio idrogeologico", risk: 45 },
            { name: "Rilievi in campo", risk: 25 },
            { name: "Consulenza tecnica e perizie", risk: 30 },
            { name: "Indagini geotecniche", risk: 40 }
        ],
        survivalPlan: [
            "Remote sensing e GIS avanzato",
            "Rischio sismico e microzonazione",
            "Geologia ambientale e bonifica",
            "Consulenza tecnica per contenziosi"
        ]
    },
    agronomo_consulente: {
        tasks: [
            { name: "Piani di concimazione standard", risk: 72 },
            { name: "Analisi terreno e fitopatie", risk: 60 },
            { name: "Gestione pratiche PAC e PSR", risk: 75 },
            { name: "Consulenza su coltivazioni biologiche", risk: 30 },
            { name: "Progettazione agronomica avanzata", risk: 28 }
        ],
        survivalPlan: [
            "Agricoltura di precisione e AI farm",
            "Certificazioni biologiche e biodinamiche",
            "Carbon farming e crediti CO2",
            "Consulenza su nuove colture e vertical farming"
        ]
    },

};


// Metriche quantitative per job: riskFactor, targetYear, salari, accuratezza
export const jobData = {
            ai_engineer: {
                title: 'AI Engineer',
                icon: '🤖',
                humanAccuracy: 0.86,
                aiAccuracy: 0.90,
                riskFactor: 0.35,
                targetYear: 2036,
                survivalNote: "l'AI Engineer progetta e integra i sistemi di AI: è tra i ruoli più protetti, ma servirà specializzarsi su architettura e affidabilità dei modelli in produzione",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 300,
                defaultAiSetup: 1200,
                description: 'Progetta, sviluppa e integra modelli di machine learning e AI generativa in sistemi aziendali'
            },
            ai_director: {
                title: 'AI Director',
                icon: '🧭',
                humanAccuracy: 0.90,
                aiAccuracy: 0.55,
                riskFactor: 0.10,
                targetYear: 2040,
                survivalNote: "guidare la strategia di adozione AI di un'azienda resta un ruolo profondamente umano: visione, governance e gestione del cambiamento non si automatizzano",
                defaultHumanSalary: 85000,
                defaultHumanExtra: 25500,
                defaultAiMonthly: 800,
                defaultAiSetup: 3500,
                description: 'Definisce la strategia di adozione AI aziendale, coordina team tecnici e governance dei progetti di intelligenza artificiale'
            },
            data_engineer: {
                title: 'Data Engineer',
                icon: '🛠️',
                humanAccuracy: 0.87,
                aiAccuracy: 0.91,
                riskFactor: 0.55,
                targetYear: 2032,
                survivalNote: "le pipeline dati standard saranno generate dall'AI: servirà specializzarsi in architetture dati complesse e governance",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 280,
                defaultAiSetup: 1100,
                description: 'Costruisce e mantiene pipeline dati, data warehouse e infrastrutture ETL per analisi e modelli AI'
            },
            backend_developer: {
                title: 'Back-End Developer',
                icon: '🔧',
                humanAccuracy: 0.89,
                aiAccuracy: 0.93,
                riskFactor: 0.65,
                targetYear: 2031,
                survivalNote: "la scrittura di API e logica server standard sarà quasi tutta automatizzata: servirà spostarsi su architettura distribuita e sistemi critici",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 240,
                defaultAiSetup: 900,
                description: 'Sviluppa logica server, API, database e integrazioni backend per applicazioni web e aziendali'
            },
            frontend_developer: {
                title: 'Front-End Developer',
                icon: '🎨',
                humanAccuracy: 0.87,
                aiAccuracy: 0.92,
                riskFactor: 0.68,
                targetYear: 2030,
                survivalNote: "l'interfaccia 'standard' sarà generata dall'AI in pochi secondi: servirà puntare su UX complessa, accessibilità e design system avanzati",
                defaultHumanSalary: 29200,
                defaultHumanExtra: 8760,
                defaultAiMonthly: 200,
                defaultAiSetup: 800,
                description: 'Sviluppa interfacce utente, componenti web e esperienze interattive lato client'
            },
            fullstack_developer: {
                title: 'Full-Stack Developer',
                icon: '🧩',
                humanAccuracy: 0.88,
                aiAccuracy: 0.92,
                riskFactor: 0.62,
                targetYear: 2031,
                survivalNote: "la versatilità frontend+backend resta un vantaggio, ma i task standard end-to-end saranno automatizzati: servirà la visione di sistema completa",
                defaultHumanSalary: 33000,
                defaultHumanExtra: 9900,
                defaultAiMonthly: 260,
                defaultAiSetup: 1000,
                description: 'Sviluppa sia il frontend che il backend di applicazioni web complete, dal database all\'interfaccia'
            },
            cloud_engineer: {
                title: 'Cloud Engineer',
                icon: '☁️',
                humanAccuracy: 0.88,
                aiAccuracy: 0.90,
                riskFactor: 0.50,
                targetYear: 2033,
                survivalNote: "il provisioning standard sarà automatizzato con Infrastructure as Code gestita da AI: servirà specializzarsi in architetture multi-cloud complesse",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 350,
                defaultAiSetup: 1500,
                description: 'Progetta, implementa e gestisce infrastrutture cloud su AWS, Azure e Google Cloud'
            },
            cloud_consultant: {
                title: 'Cloud Consultant',
                icon: '🧠',
                humanAccuracy: 0.90,
                aiAccuracy: 0.78,
                riskFactor: 0.30,
                targetYear: 2037,
                survivalNote: "la consulenza strategica su migrazione e governance cloud resta un lavoro di relazione e giudizio: l'AI assiste ma non sostituisce il rapporto con il cliente",
                defaultHumanSalary: 48000,
                defaultHumanExtra: 14400,
                defaultAiMonthly: 400,
                defaultAiSetup: 1800,
                description: 'Consiglia le aziende su strategie di migrazione, ottimizzazione costi e governance dell\'infrastruttura cloud'
            },
            soc_analyst: {
                title: 'SOC Analyst',
                icon: '🛡️',
                humanAccuracy: 0.83,
                aiAccuracy: 0.94,
                riskFactor: 0.78,
                targetYear: 2029,
                survivalNote: "il triage degli alert di sicurezza Tier 1 sarà quasi interamente automatizzato: servirà specializzarsi in threat hunting e incident response avanzato",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 350,
                defaultAiSetup: 1500,
                description: 'Monitora alert di sicurezza, analizza minacce e gestisce il triage iniziale degli incidenti informatici'
            },
            cyber_security_engineer: {
                title: 'Cyber Security Engineer',
                icon: '🔐',
                humanAccuracy: 0.89,
                aiAccuracy: 0.85,
                riskFactor: 0.32,
                targetYear: 2036,
                survivalNote: "la progettazione di sistemi di difesa e la risposta a minacce sofisticate restano fortemente umane: l'AI accelera ma non sostituisce il giudizio esperto",
                defaultHumanSalary: 50000,
                defaultHumanExtra: 15000,
                defaultAiMonthly: 500,
                defaultAiSetup: 2200,
                description: 'Progetta architetture di sicurezza, gestisce vulnerabilità e coordina la risposta a incidenti informatici complessi'
            },
            data_scientist: {
                title: 'Data Scientist',
                icon: '📐',
                humanAccuracy: 0.87,
                aiAccuracy: 0.89,
                riskFactor: 0.45,
                targetYear: 2033,
                survivalNote: "l'analisi esplorativa e i modelli standard saranno automatizzati: servirà puntare su problem framing e interpretazione strategica dei risultati",
                defaultHumanSalary: 38500,
                defaultHumanExtra: 11550,
                defaultAiMonthly: 350,
                defaultAiSetup: 1500,
                description: 'Analizza dati complessi, costruisce modelli statistici e di machine learning per supportare decisioni di business'
            },
            devops_engineer: {
                title: 'DevOps Engineer',
                icon: '⚙️',
                humanAccuracy: 0.88,
                aiAccuracy: 0.91,
                riskFactor: 0.58,
                targetYear: 2031,
                survivalNote: "le pipeline CI/CD standard saranno configurate dall'AI: servirà specializzarsi in affidabilità di sistemi complessi e platform engineering",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 300,
                defaultAiSetup: 1300,
                description: 'Automatizza il ciclo di sviluppo software, gestisce pipeline CI/CD, containerizzazione e deployment'
            },
            solutions_consultant: {
                title: 'Solutions Consultant / IT Architect',
                icon: '🏗️',
                humanAccuracy: 0.90,
                aiAccuracy: 0.75,
                riskFactor: 0.25,
                targetYear: 2038,
                survivalNote: "il disegno di architetture aziendali complesse richiede visione d'insieme e relazione con gli stakeholder: resta uno dei ruoli IT più resistenti all'automazione",
                defaultHumanSalary: 50000,
                defaultHumanExtra: 15000,
                defaultAiMonthly: 450,
                defaultAiSetup: 2000,
                description: 'Disegna architetture tecnologiche aziendali, valuta soluzioni software e guida l\'implementazione di sistemi complessi'
            },
            scrum_master: {
                title: 'Scrum Master / Agile Coach',
                icon: '🔄',
                humanAccuracy: 0.91,
                aiAccuracy: 0.60,
                riskFactor: 0.20,
                targetYear: 2039,
                survivalNote: "facilitare team, gestire conflitti e guidare la trasformazione agile sono competenze relazionali che l'AI non può replicare",
                defaultHumanSalary: 43000,
                defaultHumanExtra: 12900,
                defaultAiMonthly: 150,
                defaultAiSetup: 600,
                description: 'Facilita i processi Agile/Scrum, rimuove blocchi al team e guida la trasformazione organizzativa verso metodologie iterative'
            },
            it_project_manager: {
                title: 'IT Project Manager',
                icon: '📊',
                humanAccuracy: 0.89,
                aiAccuracy: 0.70,
                riskFactor: 0.28,
                targetYear: 2037,
                survivalNote: "la pianificazione standard sarà supportata dall'AI, ma gestione degli stakeholder, negoziazione e leadership di progetto restano competenze umane",
                defaultHumanSalary: 50000,
                defaultHumanExtra: 15000,
                defaultAiMonthly: 350,
                defaultAiSetup: 1500,
                description: 'Pianifica, coordina e guida progetti IT complessi, gestendo budget, scadenze, team e stakeholder'
            },
            bdr: {
                title: 'Business Development Representative',
                icon: '🚀',
                humanAccuracy: 0.78,
                aiAccuracy: 0.82,
                riskFactor: 0.62,
                targetYear: 2031,
                survivalNote: "la prospezione e qualificazione lead standard sarà quasi tutta automatizzata: servirà specializzarsi in trattative complesse e relazioni C-level",
                defaultHumanSalary: 40000,
                defaultHumanExtra: 12000,
                defaultAiMonthly: 350,
                defaultAiSetup: 1200,
                description: 'Identifica e qualifica nuove opportunità di business, contatta prospect e genera pipeline commerciale'
            },
            sdr: {
                title: 'Sales Development Representative',
                icon: '📞',
                humanAccuracy: 0.77,
                aiAccuracy: 0.83,
                riskFactor: 0.68,
                targetYear: 2030,
                survivalNote: "l'outreach a freddo e il follow-up standard saranno gestiti da agenti AI: servirà spostarsi su qualificazione strategica e relazioni dirette",
                defaultHumanSalary: 37000,
                defaultHumanExtra: 11100,
                defaultAiMonthly: 300,
                defaultAiSetup: 1000,
                description: 'Genera e qualifica lead in ingresso, gestisce il primo contatto con i prospect e fissa appuntamenti commerciali'
            },
            account_manager: {
                title: 'Account Manager',
                icon: '🤝',
                humanAccuracy: 0.86,
                aiAccuracy: 0.65,
                riskFactor: 0.35,
                targetYear: 2035,
                survivalNote: "la gestione amministrativa degli account sarà automatizzata, ma costruire fiducia e relazioni di lungo periodo resta un lavoro umano",
                defaultHumanSalary: 43000,
                defaultHumanExtra: 12900,
                defaultAiMonthly: 400,
                defaultAiSetup: 1500,
                description: 'Gestisce il portafoglio clienti esistenti, mantiene le relazioni commerciali e identifica opportunità di upselling'
            },
            key_account_manager: {
                title: 'Key Account Manager',
                icon: '🏆',
                humanAccuracy: 0.89,
                aiAccuracy: 0.58,
                riskFactor: 0.18,
                targetYear: 2038,
                survivalNote: "la gestione dei clienti strategici richiede fiducia, negoziazione complessa e visione di lungo periodo: resta tra i ruoli commerciali più protetti",
                defaultHumanSalary: 55000,
                defaultHumanExtra: 16500,
                defaultAiMonthly: 500,
                defaultAiSetup: 2000,
                description: 'Gestisce le relazioni con i clienti strategici più importanti dell\'azienda, negoziando contratti chiave e partnership di lungo periodo'
            },
            sales_manager: {
                title: 'Sales Manager',
                icon: '📣',
                humanAccuracy: 0.88,
                aiAccuracy: 0.62,
                riskFactor: 0.22,
                targetYear: 2037,
                survivalNote: "il reporting e il forecasting saranno automatizzati, ma guidare un team commerciale e motivare le persone restano competenze profondamente umane",
                defaultHumanSalary: 47000,
                defaultHumanExtra: 14100,
                defaultAiMonthly: 450,
                defaultAiSetup: 1800,
                description: 'Guida e motiva il team commerciale, definisce strategie di vendita e gestisce gli obiettivi di fatturato'
            },
            technical_sales: {
                title: 'Technical Sales',
                icon: '🔩',
                humanAccuracy: 0.85,
                aiAccuracy: 0.68,
                riskFactor: 0.32,
                targetYear: 2036,
                survivalNote: "la documentazione tecnica standard sarà generata dall'AI, ma tradurre esigenze tecniche complesse in soluzioni di vendita resta un lavoro specialistico umano",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 350,
                defaultAiSetup: 1500,
                description: 'Supporta le vendite di prodotti e soluzioni tecnicamente complesse, traducendo esigenze tecniche in proposte commerciali'
            },
            customer_success_manager: {
                title: 'Customer Success Manager',
                icon: '🌟',
                humanAccuracy: 0.85,
                aiAccuracy: 0.70,
                riskFactor: 0.38,
                targetYear: 2034,
                survivalNote: "il monitoraggio degli health score sarà automatizzato dall'AI, ma intervenire su clienti a rischio churn richiede empatia e relazione umana",
                defaultHumanSalary: 43000,
                defaultHumanExtra: 12900,
                defaultAiMonthly: 450,
                defaultAiSetup: 1800,
                description: 'Garantisce la soddisfazione e il successo dei clienti nel tempo, riduce il rischio di abbandono e individua opportunità di crescita degli account'
            },
            store_manager: {
                title: 'Store Manager',
                icon: '🏬',
                humanAccuracy: 0.86,
                aiAccuracy: 0.55,
                riskFactor: 0.20,
                targetYear: 2038,
                survivalNote: "la gestione di inventario e turni sarà supportata dall'AI, ma guidare un team in negozio e curare l'esperienza cliente restano competenze umane",
                defaultHumanSalary: 44500,
                defaultHumanExtra: 13350,
                defaultAiMonthly: 300,
                defaultAiSetup: 1200,
                description: 'Gestisce le operazioni quotidiane del punto vendita, coordina il team, l\'inventario e l\'esperienza cliente in negozio'
            },
            digital_marketing_specialist: {
                title: 'Digital Marketing Specialist',
                icon: '💡',
                humanAccuracy: 0.82,
                aiAccuracy: 0.85,
                riskFactor: 0.55,
                targetYear: 2031,
                survivalNote: "la gestione operativa delle campagne sarà automatizzata dall'AI: servirà specializzarsi in strategia cross-canale e interpretazione dei dati",
                defaultHumanSalary: 31500,
                defaultHumanExtra: 9450,
                defaultAiMonthly: 150,
                defaultAiSetup: 600,
                description: 'Pianifica ed esegue campagne di marketing digitale su più canali, gestendo advertising, analytics e ottimizzazione delle performance'
            },
            seo_specialist: {
                title: 'SEO/SEM Specialist',
                icon: '🔍',
                humanAccuracy: 0.83,
                aiAccuracy: 0.86,
                riskFactor: 0.58,
                targetYear: 2031,
                survivalNote: "l'ottimizzazione tecnica standard sarà automatizzata da tool AI: servirà specializzarsi in strategia di visibilità su motori di ricerca generativi",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 200,
                defaultAiSetup: 800,
                description: 'Ottimizza la visibilità di siti web sui motori di ricerca tradizionali e generativi, gestisce campagne SEM e analisi keyword'
            },
            growth_hacker: {
                title: 'Growth Hacker',
                icon: '📈',
                humanAccuracy: 0.82,
                aiAccuracy: 0.80,
                riskFactor: 0.48,
                targetYear: 2032,
                survivalNote: "i test A/B e l'analisi dati standard saranno automatizzati: servirà puntare su intuizione strategica e creatività negli esperimenti di crescita",
                defaultHumanSalary: 40000,
                defaultHumanExtra: 12000,
                defaultAiMonthly: 350,
                defaultAiSetup: 1500,
                description: 'Sperimenta strategie di crescita rapida combinando marketing, dati e tecnologia per acquisire e fidelizzare utenti'
            },
            content_creator: {
                title: 'Content Creator',
                icon: '🎬',
                humanAccuracy: 0.80,
                aiAccuracy: 0.75,
                riskFactor: 0.50,
                targetYear: 2032,
                survivalNote: "la produzione di contenuti standard sarà generata dall'AI: servirà costruire una voce personale autentica e un legame diretto con la community",
                defaultHumanSalary: 24000,
                defaultHumanExtra: 7200,
                defaultAiMonthly: 120,
                defaultAiSetup: 500,
                description: 'Crea contenuti video, foto e multimediali per social media e piattaforme digitali, con focus su formati brevi e coinvolgimento del pubblico'
            },
            brand_manager: {
                title: 'Brand Manager',
                icon: '🎯',
                humanAccuracy: 0.87,
                aiAccuracy: 0.62,
                riskFactor: 0.22,
                targetYear: 2037,
                survivalNote: "l'analisi di mercato standard sarà supportata dall'AI, ma costruire un'identità di marca autentica e duratura resta un lavoro creativo e strategico umano",
                defaultHumanSalary: 46000,
                defaultHumanExtra: 13800,
                defaultAiMonthly: 300,
                defaultAiSetup: 1200,
                description: 'Definisce e gestisce la strategia di marca, coordina campagne di posizionamento e cura la coerenza dell\'identità aziendale'
            },
            ecommerce_manager: {
                title: 'E-commerce Manager',
                icon: '🛒',
                humanAccuracy: 0.85,
                aiAccuracy: 0.72,
                riskFactor: 0.35,
                targetYear: 2034,
                survivalNote: "la gestione operativa del funnel sarà automatizzata dall'AI, ma la strategia commerciale e l'ottimizzazione cross-canale restano lavoro umano specializzato",
                defaultHumanSalary: 40000,
                defaultHumanExtra: 12000,
                defaultAiMonthly: 400,
                defaultAiSetup: 1800,
                description: 'Coordina tutte le attività digitali di un negozio online: acquisizione clienti, conversione, logistica e analisi delle performance'
            },
            contabile: {
                title: 'Contabile',
                icon: '📊',
                humanAccuracy: 0.88,
                aiAccuracy: 0.992,
                riskFactor: 0.85,
                targetYear: 2029,
                survivalNote: "il ruolo di contabile tradizionale sarà raro: servirà specializzazione in consulenza fiscale strategica",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 12600,
                defaultAiMonthly: 480,
                defaultAiSetup: 1800,
                description: 'Elabora fatture, riconciliazione bancaria, bilanci, dichiarazioni fiscali'
            },
            copywriter: {
                title: 'Copywriter',
                icon: '✍️',
                humanAccuracy: 0.85,
                aiAccuracy: 0.94,
                riskFactor: 0.60,
                targetYear: 2033,
                survivalNote: "il copy 'standard' sarà scritto dall'AI: servirà puntare su persuasione e storytelling avanzato",
                defaultHumanSalary: 28900,
                defaultHumanExtra: 8670,
                defaultAiMonthly: 90,
                defaultAiSetup: 350,
                description: 'Scrive copy per website, email marketing, social, landing pages'
            },
            developer: {
                title: 'Junior Developer',
                icon: '💻',
                humanAccuracy: 0.90,
                aiAccuracy: 0.95,
                riskFactor: 0.75,
                targetYear: 2030,
                survivalNote: "i task di coding ripetitivo saranno quasi tutti automatizzati: servirà spostarsi su architettura e seniority",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 240,
                defaultAiSetup: 900,
                description: 'Sviluppa backend/frontend, fix bug, refactoring codice'
            },
            social_media: {
                title: 'Social Media Manager',
                icon: '📱',
                humanAccuracy: 0.82,
                aiAccuracy: 0.88,
                riskFactor: 0.55,
                targetYear: 2034,
                survivalNote: "la pubblicazione contenuti sarà automatizzata, ma community e brand voice resteranno umane",
                defaultHumanSalary: 18500,
                defaultHumanExtra: 5550,
                defaultAiMonthly: 130,
                defaultAiSetup: 450,
                description: 'Gestisce content calendar, community, analytics, campagne paid'
            },
            customer_service: {
                title: 'Customer Service',
                icon: '☎️',
                humanAccuracy: 0.80,
                aiAccuracy: 0.96,
                riskFactor: 0.80,
                targetYear: 2029,
                survivalNote: "il supporto clienti standard sarà gestito da AI: servirà specializzarsi in gestione escalation complesse",
                defaultHumanSalary: 19000,
                defaultHumanExtra: 5700,
                defaultAiMonthly: 70,
                defaultAiSetup: 300,
                description: 'Risponde a clienti, risolve problemi, gestisce ticket support'
            },
            hr_manager: {
                title: 'Responsabile HR',
                icon: '👥',
                humanAccuracy: 0.92,
                aiAccuracy: 0.75,
                riskFactor: 0.30,
                targetYear: 2038,
                survivalNote: "l'HR resterà un ruolo fortemente umano: l'AI assisterà solo in compiti amministrativi",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 350,
                defaultAiSetup: 1200,
                description: 'Recruitment, onboarding, payroll, relazioni industriali'
            },
            data_analyst: {
                title: 'Analista Dati',
                icon: '📈',
                humanAccuracy: 0.88,
                aiAccuracy: 0.92,
                riskFactor: 0.65,
                targetYear: 2032,
                survivalNote: "query e dashboard saranno automatizzate: servirà focalizzarsi sull'interpretazione strategica",
                defaultHumanSalary: 31000,
                defaultHumanExtra: 9300,
                defaultAiMonthly: 520,
                defaultAiSetup: 2000,
                description: 'Dashboard, SQL query, analisi predittiva, reportistica'
            },
            insegnante: {
                title: 'Insegnante',
                icon: '🎓',
                humanAccuracy: 0.90,
                aiAccuracy: 0.70,
                riskFactor: 0.20,
                targetYear: 2040,
                survivalNote: "la relazione educativa resterà umana: l'AI assisterà solo nella preparazione di materiali",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 60,
                defaultAiSetup: 250,
                description: 'Lezioni, valutazioni, gestione classe, supporto agli studenti'
            },
            grafico: {
                title: 'Graphic Designer',
                icon: '🎨',
                humanAccuracy: 0.87,
                aiAccuracy: 0.90,
                riskFactor: 0.58,
                targetYear: 2033,
                survivalNote: "il design 'di base' sarà generato dall'AI: servirà puntare su direzione creativa e brand strategy",
                defaultHumanSalary: 26500,
                defaultHumanExtra: 7950,
                defaultAiMonthly: 110,
                defaultAiSetup: 400,
                description: 'Loghi, brand identity, materiale grafico, social design'
            },
            traduttore: {
                title: 'Traduttore',
                icon: '🌍',
                humanAccuracy: 0.93,
                aiAccuracy: 0.97,
                riskFactor: 0.78,
                targetYear: 2028,
                survivalNote: "la traduzione standard è già quasi alla pari con l'AI: servirà specializzarsi in localizzazione culturale e contenuti legali/letterari",
                defaultHumanSalary: 27000,
                defaultHumanExtra: 8100,
                defaultAiMonthly: 45,
                defaultAiSetup: 150,
                description: 'Traduzione documenti, localizzazione, sottotitoli'
            },
            ux_ui_designer: {
                title: 'UX/UI Designer',
                icon: '🖌️',
                humanAccuracy: 0.88,
                aiAccuracy: 0.82,
                riskFactor: 0.48,
                targetYear: 2033,
                survivalNote: "il wireframing standard sarà generato dall'AI in secondi: servirà specializzarsi in UX research, design strategy e accessibilità avanzata",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 150,
                defaultAiSetup: 600,
                description: 'Progetta interfacce digitali, conduce user research e definisce esperienze utente coerenti e accessibili'
            },
            video_editor: {
                title: 'Video Editor / Motion Designer',
                icon: '🎬',
                humanAccuracy: 0.87,
                aiAccuracy: 0.88,
                riskFactor: 0.60,
                targetYear: 2031,
                survivalNote: "il montaggio standard e i formati social saranno quasi interamente automatizzati: servirà specializzarsi in motion design complesso e direzione creativa",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 120,
                defaultAiSetup: 500,
                description: 'Monta video, crea motion graphics e dirige la post-produzione per contenuti digitali e campagne'
            },
            art_director: {
                title: 'Art Director',
                icon: '🖼️',
                humanAccuracy: 0.91,
                aiAccuracy: 0.72,
                riskFactor: 0.30,
                targetYear: 2037,
                survivalNote: "la produzione esecutiva sarà delegata all'AI, ma la direzione creativa strategica e lo sviluppo di concept originali restano profondamente umani",
                defaultHumanSalary: 42000,
                defaultHumanExtra: 12600,
                defaultAiMonthly: 180,
                defaultAiSetup: 700,
                description: 'Definisce la direzione creativa visiva di campagne e brand, coordinando la produzione dei materiali'
            },
            fotografo: {
                title: 'Fotografo',
                icon: '📷',
                humanAccuracy: 0.88,
                aiAccuracy: 0.85,
                riskFactor: 0.62,
                targetYear: 2031,
                survivalNote: "la fotografia di prodotto standard è fortemente esposta a Midjourney e DALL-E: servirà specializzarsi in reportage, editorial e direzione fotografica",
                defaultHumanSalary: 25000,
                defaultHumanExtra: 7500,
                defaultAiMonthly: 80,
                defaultAiSetup: 300,
                description: 'Realizza immagini commerciali, editoriali e di reportage per clienti e media'
            },
            illustratore: {
                title: 'Illustratore',
                icon: '🖊️',
                humanAccuracy: 0.89,
                aiAccuracy: 0.88,
                riskFactor: 0.65,
                targetYear: 2030,
                survivalNote: "le illustrazioni in stili comuni sono già generate dall'AI: servirà costruire uno stile distintivo e specializzarsi in character design narrativo complesso",
                defaultHumanSalary: 24000,
                defaultHumanExtra: 7200,
                defaultAiMonthly: 70,
                defaultAiSetup: 250,
                description: 'Crea illustrazioni originali per editoria, advertising, brand identity e media digitali'
            },
            sound_designer: {
                title: 'Sound Designer / Audio Engineer',
                icon: '🎧',
                humanAccuracy: 0.89,
                aiAccuracy: 0.84,
                riskFactor: 0.52,
                targetYear: 2033,
                survivalNote: "l'editing audio e il mixaggio standard saranno automatizzati: servirà specializzarsi in composizione originale, sound design narrativo e audio branding",
                defaultHumanSalary: 27000,
                defaultHumanExtra: 8100,
                defaultAiMonthly: 100,
                defaultAiSetup: 400,
                description: 'Progetta paesaggi sonori, compone musiche originali e cura la post-produzione audio per film, giochi e media'
            },
            docente_universitario: {
                title: 'Docente Universitario / Ricercatore',
                icon: '🔬',
                humanAccuracy: 0.92,
                aiAccuracy: 0.68,
                riskFactor: 0.22,
                targetYear: 2039,
                survivalNote: "la produzione scientifica originale e la ricerca avanzata restano intrinsecamente umane: l'AI supporta ma non sostituisce la capacità di generare nuovo sapere",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 80,
                defaultAiSetup: 300,
                description: 'Conduce ricerca scientifica, pubblica in riviste peer-reviewed e insegna a livello universitario'
            },
            formatore_aziendale: {
                title: 'Formatore Aziendale / Corporate Trainer',
                icon: '📋',
                humanAccuracy: 0.90,
                aiAccuracy: 0.75,
                riskFactor: 0.38,
                targetYear: 2035,
                survivalNote: "la creazione di contenuti formativi standard sarà automatizzata, ma l'erogazione live, il coaching e la gestione dell'aula restano profondamente umani",
                defaultHumanSalary: 35000,
                defaultHumanExtra: 10500,
                defaultAiMonthly: 120,
                defaultAiSetup: 500,
                description: 'Progetta ed eroga programmi di formazione e sviluppo competenze per dipendenti aziendali'
            },
            instructional_designer: {
                title: 'Instructional Designer',
                icon: '📐',
                humanAccuracy: 0.88,
                aiAccuracy: 0.84,
                riskFactor: 0.55,
                targetYear: 2032,
                survivalNote: "la strutturazione di contenuti e-learning standard sarà automatizzata: servirà specializzarsi nella progettazione di esperienze formative complesse e di alto impatto",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 130,
                defaultAiSetup: 500,
                description: 'Progetta percorsi formativi ed esperienze e-learning, definendo architettura didattica e metodi di valutazione'
            },
            tutor_online: {
                title: 'Tutor / Docente Online',
                icon: '💻',
                humanAccuracy: 0.86,
                aiAccuracy: 0.88,
                riskFactor: 0.68,
                targetYear: 2030,
                survivalNote: "le risposte a domande frequenti e il feedback standard saranno gestiti da AI: servirà specializzarsi nel supporto personalizzato a studenti con bisogni specifici",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 55,
                defaultAiSetup: 200,
                description: 'Supporta studenti su piattaforme e-learning, risponde a dubbi, corregge esercizi e motiva il percorso formativo'
            },
            dirigente_scolastico: {
                title: 'Dirigente Scolastico / Preside',
                icon: '🏫',
                humanAccuracy: 0.92,
                aiAccuracy: 0.62,
                riskFactor: 0.18,
                targetYear: 2040,
                survivalNote: "la gestione di una comunità scolastica richiede leadership, relazioni umane e responsabilità legale: resterà un ruolo a basso rischio AI ancora a lungo",
                defaultHumanSalary: 52000,
                defaultHumanExtra: 15600,
                defaultAiMonthly: 90,
                defaultAiSetup: 350,
                description: 'Dirige la scuola, gestisce il personale, cura le relazioni con famiglie e territorio, garantisce la qualità dell\'offerta formativa'
            },
            educatore_infanzia: {
                title: 'Educatore (Asilo / Prima Infanzia)',
                icon: '👶',
                humanAccuracy: 0.95,
                aiAccuracy: 0.35,
                riskFactor: 0.08,
                targetYear: 2045,
                survivalNote: "la cura fisica e affettiva dei bambini 0-6 anni è intrinsecamente umana e irriproducibile: nessuna tecnologia può replicare il contatto, la presenza e l'attaccamento",
                defaultHumanSalary: 23000,
                defaultHumanExtra: 6900,
                defaultAiMonthly: 40,
                defaultAiSetup: 150,
                description: 'Si prende cura dello sviluppo fisico, emotivo e cognitivo di bambini in età prescolare in nidi e asili'
            },
            // ── TECH ──────────────────────────────────────────────
            ml_engineer: {
                title: 'Machine Learning Engineer',
                icon: '🧬',
                humanAccuracy: 0.87,
                aiAccuracy: 0.88,
                riskFactor: 0.38,
                targetYear: 2035,
                survivalNote: "il training di modelli standard sarà automatizzato: servirà specializzarsi in architetture avanzate, MLOps e ottimizzazione di modelli in produzione",
                defaultHumanSalary: 45000,
                defaultHumanExtra: 13500,
                defaultAiMonthly: 320,
                defaultAiSetup: 1300,
                description: 'Progetta, addestra e ottimizza modelli di machine learning per applicazioni produttive'
            },
            product_owner: {
                title: 'Product Owner',
                icon: '📋',
                humanAccuracy: 0.91,
                aiAccuracy: 0.65,
                riskFactor: 0.22,
                targetYear: 2038,
                survivalNote: "la prioritizzazione del backlog standard sarà assistita dall'AI, ma la visione di prodotto e la negoziazione con gli stakeholder restano profondamente umane",
                defaultHumanSalary: 46000,
                defaultHumanExtra: 13800,
                defaultAiMonthly: 200,
                defaultAiSetup: 800,
                description: 'Definisce la visione di prodotto, gestisce il backlog e coordina il team di sviluppo con gli stakeholder di business'
            },
            sysadmin: {
                title: 'System Administrator',
                icon: '🖥️',
                humanAccuracy: 0.88,
                aiAccuracy: 0.89,
                riskFactor: 0.62,
                targetYear: 2031,
                survivalNote: "la gestione di routine (patch, backup, monitoring) sarà quasi interamente automatizzata: servirà spostarsi su infrastrutture ibride complesse e sicurezza",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 250,
                defaultAiSetup: 1000,
                description: 'Gestisce e mantiene server, reti e infrastrutture IT aziendali, garantendo disponibilità e sicurezza dei sistemi'
            },
            qa_engineer: {
                title: 'QA Engineer / Software Tester',
                icon: '🧪',
                humanAccuracy: 0.85,
                aiAccuracy: 0.92,
                riskFactor: 0.72,
                targetYear: 2030,
                survivalNote: "il testing funzionale ripetitivo e la scrittura di test case standard saranno quasi interamente automatizzati: servirà specializzarsi in test strategici e quality engineering",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 180,
                defaultAiSetup: 700,
                description: 'Pianifica ed esegue test software per garantire qualità, identificare bug e verificare requisiti prima del rilascio'
            },
            network_engineer: {
                title: 'Network Engineer',
                icon: '🌐',
                humanAccuracy: 0.89,
                aiAccuracy: 0.85,
                riskFactor: 0.45,
                targetYear: 2034,
                survivalNote: "il monitoring e la configurazione standard saranno automatizzati con AIOps: servirà specializzarsi in architetture SD-WAN, sicurezza di rete e ambienti multi-cloud",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 280,
                defaultAiSetup: 1100,
                description: 'Progetta, implementa e gestisce infrastrutture di rete aziendali, garantendo connettività, performance e sicurezza'
            },
            it_consultant: {
                title: 'IT Consultant / Business Analyst',
                icon: '💡',
                humanAccuracy: 0.90,
                aiAccuracy: 0.72,
                riskFactor: 0.28,
                targetYear: 2037,
                survivalNote: "l'analisi dei requisiti standard sarà assistita dall'AI, ma la traduzione tra esigenze di business e soluzioni tecnologiche richiede giudizio e relazione umana",
                defaultHumanSalary: 42000,
                defaultHumanExtra: 12600,
                defaultAiMonthly: 280,
                defaultAiSetup: 1100,
                description: 'Analizza processi e requisiti di business, traduce le esigenze aziendali in soluzioni IT e guida i progetti di trasformazione digitale'
            },
            // ── COMMERCIALE ──────────────────────────────────────
            sales_executive: {
                title: 'Sales Account Executive',
                icon: '💼',
                humanAccuracy: 0.85,
                aiAccuracy: 0.68,
                riskFactor: 0.38,
                targetYear: 2035,
                survivalNote: "la pipeline management e il CRM standard saranno automatizzati, ma chiudere trattative complesse e costruire fiducia restano competenze umane irriproducibili",
                defaultHumanSalary: 42000,
                defaultHumanExtra: 12600,
                defaultAiMonthly: 300,
                defaultAiSetup: 1000,
                description: 'Gestisce il ciclo di vendita end-to-end su clienti mid-market ed enterprise: prospecting, demo, negoziazione e closing'
            },
            sales_director: {
                title: 'Sales Director / Direttore Commerciale',
                icon: '🏅',
                humanAccuracy: 0.90,
                aiAccuracy: 0.58,
                riskFactor: 0.18,
                targetYear: 2039,
                survivalNote: "definire la strategia commerciale, motivare il team e gestire i clienti strategici richiede visione e leadership umana che l'AI non può replicare",
                defaultHumanSalary: 75000,
                defaultHumanExtra: 22500,
                defaultAiMonthly: 500,
                defaultAiSetup: 2000,
                description: 'Definisce la strategia commerciale aziendale, guida il team vendite, gestisce i key client e risponde dei risultati di fatturato'
            },
            addetto_vendite: {
                title: 'Addetto alle Vendite / Retail',
                icon: '🛍️',
                humanAccuracy: 0.82,
                aiAccuracy: 0.70,
                riskFactor: 0.52,
                targetYear: 2032,
                survivalNote: "la cassa e le operazioni di routine saranno automatizzate, ma l'assistenza personalizzata al cliente in store e la gestione di situazioni complesse restano umane",
                defaultHumanSalary: 20000,
                defaultHumanExtra: 6000,
                defaultAiMonthly: 80,
                defaultAiSetup: 300,
                description: 'Assiste i clienti in negozio, gestisce vendite, cassa, allestimento e operazioni quotidiane del punto vendita'
            },
            commerciale_estero: {
                title: 'Commerciale Estero / Export Manager',
                icon: '✈️',
                humanAccuracy: 0.88,
                aiAccuracy: 0.62,
                riskFactor: 0.25,
                targetYear: 2038,
                survivalNote: "la gestione di mercati internazionali richiede intelligenza culturale, negoziazione cross-cultural e relazioni di lungo periodo difficili da automatizzare",
                defaultHumanSalary: 46000,
                defaultHumanExtra: 13800,
                defaultAiMonthly: 280,
                defaultAiSetup: 1000,
                description: 'Sviluppa e gestisce i mercati esteri, costruisce reti di distributori e agenti internazionali, negozia contratti cross-border'
            },
            // ── MARKETING ────────────────────────────────────────
            marketing_manager: {
                title: 'Marketing Manager',
                icon: '📣',
                humanAccuracy: 0.89,
                aiAccuracy: 0.72,
                riskFactor: 0.32,
                targetYear: 2036,
                survivalNote: "la produzione di contenuti e il reporting standard saranno automatizzati, ma la strategia di marketing, il posizionamento e la gestione del team restano lavoro umano",
                defaultHumanSalary: 48000,
                defaultHumanExtra: 14400,
                defaultAiMonthly: 350,
                defaultAiSetup: 1400,
                description: 'Definisce e coordina la strategia di marketing, gestisce il team e i budget, supervisiona campagne e posizionamento del brand'
            },
            pr_specialist: {
                title: 'PR Specialist / Media Relations',
                icon: '📰',
                humanAccuracy: 0.88,
                aiAccuracy: 0.68,
                riskFactor: 0.35,
                targetYear: 2035,
                survivalNote: "la produzione di comunicati standard sarà automatizzata, ma costruire relazioni con i media, gestire crisi reputazionali e fare pitching richiede fiducia e relazione umana",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 180,
                defaultAiSetup: 700,
                description: 'Gestisce le relazioni con i media, produce comunicati stampa, organizza eventi stampa e presidia la reputazione del brand'
            },
            // ── MANAGEMENT & FINANZA ─────────────────────────────
            cfo: {
                title: 'CFO / Direttore Finanziario',
                icon: '💰',
                humanAccuracy: 0.92,
                aiAccuracy: 0.68,
                riskFactor: 0.15,
                targetYear: 2040,
                survivalNote: "le decisioni finanziarie strategiche, la gestione degli investitori e la governance richiedono giudizio, accountability e visione che l'AI non può assumere",
                defaultHumanSalary: 90000,
                defaultHumanExtra: 27000,
                defaultAiMonthly: 600,
                defaultAiSetup: 2500,
                description: 'Supervisiona tutte le funzioni finanziarie aziendali: pianificazione, reportistica, gestione del rischio, relazioni con investitori e banche'
            },
            auditor: {
                title: 'Auditor / Internal Auditor',
                icon: '🔎',
                humanAccuracy: 0.91,
                aiAccuracy: 0.88,
                riskFactor: 0.55,
                targetYear: 2032,
                survivalNote: "il controllo documentale standard e l'analisi di dati saranno automatizzati: servirà specializzarsi in audit di processi complessi, IT audit e risk assessment strategico",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 300,
                defaultAiSetup: 1200,
                description: 'Verifica la correttezza dei processi, dei controlli interni e della conformità normativa tramite audit periodici'
            },
            credit_collector: {
                title: 'Credit Collector / Recupero Crediti',
                icon: '💳',
                humanAccuracy: 0.83,
                aiAccuracy: 0.90,
                riskFactor: 0.75,
                targetYear: 2029,
                survivalNote: "il sollecito standard e il monitoraggio scadenze saranno gestiti da AI: servirà specializzarsi nella gestione di crediti complessi e negoziazione con debitori strategici",
                defaultHumanSalary: 24000,
                defaultHumanExtra: 7200,
                defaultAiMonthly: 90,
                defaultAiSetup: 350,
                description: 'Gestisce il recupero dei crediti insoluti, monitora le scadenze, contatta i debitori e coordina le azioni di recupero'
            },
            office_manager: {
                title: 'Office Manager',
                icon: '🏢',
                humanAccuracy: 0.87,
                aiAccuracy: 0.78,
                riskFactor: 0.48,
                targetYear: 2033,
                survivalNote: "la gestione di agenda, travel e ordini standard sarà automatizzata, ma coordinare lo spazio fisico, gestire i fornitori e supportare il management richiedono presenza e giudizio",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 120,
                defaultAiSetup: 500,
                description: 'Coordina le operazioni quotidiane dell\'ufficio, gestisce fornitori, spazi, agenda, trasferte e supporto amministrativo alla direzione'
            },
            impiegato_amm: {
                title: 'Impiegato Amministrativo',
                icon: '📂',
                humanAccuracy: 0.84,
                aiAccuracy: 0.94,
                riskFactor: 0.80,
                targetYear: 2029,
                survivalNote: "l'inserimento dati, l'archiviazione e le pratiche burocratiche standard saranno quasi interamente automatizzate: servirà specializzarsi in processi complessi e interfaccia con l'esterno",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 65,
                defaultAiSetup: 250,
                description: 'Gestisce pratiche amministrative, archiviazione, inserimento dati, corrispondenza e supporto operativo alle funzioni aziendali'
            },
            ceo: {
                title: 'CEO / General Manager',
                icon: '👔',
                humanAccuracy: 0.92,
                aiAccuracy: 0.45,
                riskFactor: 0.08,
                targetYear: 2045,
                survivalNote: "la leadership organizzativa, le decisioni strategiche ad alto rischio e la responsabilità legale e morale verso gli stakeholder non potranno essere delegate a un sistema AI",
                defaultHumanSalary: 110000,
                defaultHumanExtra: 33000,
                defaultAiMonthly: 800,
                defaultAiSetup: 3500,
                description: 'Guida l\'azienda nella definizione e nell\'esecuzione della strategia, gestisce il team di leadership e risponde dei risultati complessivi verso il board'
            },
            executive_assistant: {
                title: 'Executive Assistant',
                icon: '🗓️',
                humanAccuracy: 0.88,
                aiAccuracy: 0.82,
                riskFactor: 0.58,
                targetYear: 2031,
                survivalNote: "la gestione di agenda e travel sarà automatizzata, ma anticipare le esigenze del manager, filtrare informazioni critiche e gestire relazioni sensibili restano competenze umane",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 120,
                defaultAiSetup: 500,
                description: 'Supporta il top management nella gestione di agenda, comunicazioni, trasferte, riunioni e relazioni con stakeholder interni ed esterni'
            },
            data_entry: {
                title: 'Data Entry Clerk',
                icon: '⌨️',
                humanAccuracy: 0.85,
                aiAccuracy: 0.99,
                riskFactor: 0.92,
                targetYear: 2027,
                survivalNote: "il data entry è il ruolo più automatizzabile: l'AI supera già l'uomo in velocità e accuratezza. La transizione verso ruoli di controllo qualità dei dati è essenziale e urgente",
                defaultHumanSalary: 19000,
                defaultHumanExtra: 5700,
                defaultAiMonthly: 40,
                defaultAiSetup: 150,
                description: 'Inserisce, verifica e aggiorna dati in database, fogli di calcolo e sistemi gestionali aziendali'
            },
            // ── OPERATIONS & INGEGNERIA ──────────────────────────
            production_planner: {
                title: 'Production Planner / Pianificatore',
                icon: '🏭',
                humanAccuracy: 0.87,
                aiAccuracy: 0.90,
                riskFactor: 0.65,
                targetYear: 2031,
                survivalNote: "la pianificazione standard della produzione sarà quasi interamente automatizzata con APS e AI: servirà specializzarsi nella gestione di scenari complessi e disruption",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 280,
                defaultAiSetup: 1100,
                description: 'Pianifica e ottimizza la produzione industriale, gestisce i piani di produzione, coordina materiali e capacità produttiva'
            },
            plant_manager: {
                title: 'Plant Manager / Responsabile di Stabilimento',
                icon: '⚙️',
                humanAccuracy: 0.91,
                aiAccuracy: 0.65,
                riskFactor: 0.22,
                targetYear: 2039,
                survivalNote: "la gestione fisica di uno stabilimento industriale — sicurezza, persone, imprevedibilità operativa — richiede presenza, autorità e giudizio contestuale difficili da replicare",
                defaultHumanSalary: 62000,
                defaultHumanExtra: 18600,
                defaultAiMonthly: 400,
                defaultAiSetup: 1800,
                description: 'Dirige le operazioni di uno stabilimento produttivo: gestisce il personale, i processi, la qualità, la sicurezza e i KPI operativi'
            },
            automation_engineer: {
                title: 'Automation Engineer',
                icon: '🤖',
                humanAccuracy: 0.89,
                aiAccuracy: 0.78,
                riskFactor: 0.30,
                targetYear: 2037,
                survivalNote: "paradossalmente, chi progetta l'automazione è tra i profili più protetti: la progettazione di sistemi robotici e PLC complessi richiede competenze fisiche e di dominio difficili da automatizzare",
                defaultHumanSalary: 40000,
                defaultHumanExtra: 12000,
                defaultAiMonthly: 250,
                defaultAiSetup: 1000,
                description: 'Progetta e implementa sistemi di automazione industriale (PLC, robot, SCADA), ottimizza i processi produttivi con tecnologie automatizzate'
            },
            qa_manager: {
                title: 'Quality Manager / Responsabile Qualità',
                icon: '✅',
                humanAccuracy: 0.90,
                aiAccuracy: 0.82,
                riskFactor: 0.38,
                targetYear: 2035,
                survivalNote: "il controllo qualità visivo e il testing ripetitivo saranno automatizzati, ma la gestione del sistema qualità, gli audit di fornitori e la responsabilità normativa restano umani",
                defaultHumanSalary: 40000,
                defaultHumanExtra: 12000,
                defaultAiMonthly: 260,
                defaultAiSetup: 1000,
                description: 'Definisce e gestisce il sistema di qualità aziendale, conduce audit interni, gestisce la conformità normativa e i rapporti con i clienti su tematiche qualitative'
            },
            buyer: {
                title: 'Buyer / Responsabile Acquisti',
                icon: '🛒',
                humanAccuracy: 0.87,
                aiAccuracy: 0.85,
                riskFactor: 0.52,
                targetYear: 2032,
                survivalNote: "la ricerca fornitori e le RFQ standard saranno automatizzate: servirà specializzarsi in negoziazione strategica, gestione del rischio fornitori e category management avanzato",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 240,
                defaultAiSetup: 900,
                description: 'Seleziona e negozia con i fornitori, gestisce gli acquisti aziendali ottimizzando costi, qualità e tempi di consegna'
            },
            // ── SANITÀ & SCIENZE ─────────────────────────────────
            informatore_scientifico: {
                title: 'Informatore Scientifico del Farmaco',
                icon: '💊',
                humanAccuracy: 0.88,
                aiAccuracy: 0.62,
                riskFactor: 0.30,
                targetYear: 2037,
                survivalNote: "la relazione con i medici e la trasmissione di fiducia scientifica richiede competenza e presenza umana: l'AI supporterà la preparazione ma non sostituirà l'incontro clinico",
                defaultHumanSalary: 35000,
                defaultHumanExtra: 10500,
                defaultAiMonthly: 150,
                defaultAiSetup: 600,
                description: 'Informa i medici sulle proprietà terapeutiche dei farmaci, promuove i prodotti dell\'azienda farmaceutica presso i professionisti sanitari'
            },
            regulatory_affairs: {
                title: 'Regulatory Affairs Specialist',
                icon: '📜',
                humanAccuracy: 0.91,
                aiAccuracy: 0.80,
                riskFactor: 0.40,
                targetYear: 2034,
                survivalNote: "la redazione di dossier standard sarà assistita dall'AI, ma l'interpretazione di normative in evoluzione e il dialogo con le autorità regolatorie richiedono expertise e giudizio",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 250,
                defaultAiSetup: 1000,
                description: 'Gestisce le pratiche regolatori per l\'approvazione e il mantenimento di prodotti (farmaci, dispositivi medici, alimenti) presso le autorità competenti'
            },
            rd_specialist: {
                title: 'R&D Specialist / Ricercatore',
                icon: '🔬',
                humanAccuracy: 0.90,
                aiAccuracy: 0.72,
                riskFactor: 0.25,
                targetYear: 2038,
                survivalNote: "la formulazione di ipotesi originali e il design sperimentale richiedono creatività e intuizione scientifica: l'AI accelera l'analisi ma non sostituisce il pensiero scientifico",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 200,
                defaultAiSetup: 800,
                description: 'Conduce ricerche e sviluppa nuovi prodotti, processi o tecnologie attraverso attività sperimentali e analisi scientifiche'
            },
            // ── RUOLI TRASVERSALI ────────────────────────────────
            receptionist: {
                title: 'Receptionist / Front Office',
                icon: '🏨',
                humanAccuracy: 0.86,
                aiAccuracy: 0.78,
                riskFactor: 0.55,
                targetYear: 2032,
                survivalNote: "l'accoglienza fisica e la gestione di visitatori in ambienti complessi mantiene un componente umano: ma prenotazioni, smistamento chiamate e info standard saranno automatizzati",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 80,
                defaultAiSetup: 300,
                description: 'Accoglie visitatori e clienti, gestisce le comunicazioni in entrata, coordina l\'agenda e fornisce supporto amministrativo di front office'
            },
            paralegal: {
                title: 'Paralegal / Assistente Legale',
                icon: '⚖️',
                humanAccuracy: 0.89,
                aiAccuracy: 0.91,
                riskFactor: 0.62,
                targetYear: 2031,
                survivalNote: "la redazione di documenti standard sarà automatizzata: servirà specializzarsi in casi complessi e negoziazione",
                defaultHumanSalary: 25000,
                defaultHumanExtra: 7500,
                defaultAiMonthly: 410,
                defaultAiSetup: 1600,
                description: 'Ricerca giuridica, redazione documenti, contratti standard'
            },
            infermiere: {
                title: 'Infermiere',
                icon: '🏥',
                humanAccuracy: 0.94,
                aiAccuracy: 0.55,
                riskFactor: 0.12,
                targetYear: 2042,
                survivalNote: "l'assistenza fisica diretta al paziente resterà intrinsecamente umana ancora a lungo",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 55,
                defaultAiSetup: 200,
                description: 'Assistenza diretta al paziente, terapie, monitoraggio clinico'
            },
            cost_controller: {
                title: 'Cost Controller',
                icon: '📐',
                humanAccuracy: 0.89,
                aiAccuracy: 0.94,
                riskFactor: 0.68,
                targetYear: 2031,
                survivalNote: "il monitoraggio costi e la reportistica standard saranno automatizzati: servirà specializzarsi in analisi strategica e negoziazione fornitori",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 380,
                defaultAiSetup: 1400,
                description: 'Monitoraggio costi, scostamenti budget, reportistica commesse'
            },
            project_planner: {
                title: 'Project Planner',
                icon: '🗓️',
                humanAccuracy: 0.86,
                aiAccuracy: 0.90,
                riskFactor: 0.70,
                targetYear: 2030,
                survivalNote: "la pianificazione standard (Gantt, timeline) sarà generata dall'AI: servirà gestione stakeholder e problem solving su progetti complessi",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 280,
                defaultAiSetup: 1000,
                description: 'Pianificazione attività, gestione timeline, supporto al project manager'
            },
            cost_estimator: {
                title: 'Cost Estimator',
                icon: '🧮',
                humanAccuracy: 0.90,
                aiAccuracy: 0.93,
                riskFactor: 0.63,
                targetYear: 2032,
                survivalNote: "le stime standard su database storici saranno automatizzate: servirà valutazione di rischi e variabili non standard nei progetti complessi",
                defaultHumanSalary: 40000,
                defaultHumanExtra: 12000,
                defaultAiMonthly: 420,
                defaultAiSetup: 1700,
                description: 'Stime di costo progetti, analisi preventivi, database storici costi'
            },
            project_controller: {
                title: 'Project Controller',
                icon: '📋',
                humanAccuracy: 0.90,
                aiAccuracy: 0.91,
                riskFactor: 0.55,
                targetYear: 2033,
                survivalNote: "il controllo dati e KPI sarà automatizzato, ma la supervisione finanziaria di progetti complessi resterà un ruolo di giudizio umano",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 400,
                defaultAiSetup: 1500,
                description: 'Supervisione finanziaria progetti, WIP reconciliation, compliance budget'
            },
            project_manager: {
                title: 'Project Manager',
                icon: '🗂️',
                humanAccuracy: 0.91,
                aiAccuracy: 0.72,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "la pianificazione e la reportistica saranno automatizzate, ma la gestione di stakeholder, conflitti e rischio resterà profondamente umana",
                defaultHumanSalary: 42000,
                defaultHumanExtra: 12600,
                defaultAiMonthly: 350,
                defaultAiSetup: 1400,
                description: 'Pianificazione progetti, coordinamento team, gestione stakeholder e rischio'
            },
            controller_gestione: {
                title: 'Controller di Gestione',
                icon: '📈',
                humanAccuracy: 0.90,
                aiAccuracy: 0.92,
                riskFactor: 0.58,
                targetYear: 2032,
                survivalNote: "la reportistica gestionale standard sarà automatizzata: servirà specializzarsi in business partnering e supporto decisionale strategico",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 350,
                defaultAiSetup: 1300,
                description: 'Pianificazione e controllo di gestione, variance analysis, reportistica direzionale'
            },
            tax_advisor: {
                title: 'Fiscalista / Tax Advisor',
                icon: '🧾',
                humanAccuracy: 0.92,
                aiAccuracy: 0.85,
                riskFactor: 0.42,
                targetYear: 2034,
                survivalNote: "la compilazione standard sarà automatizzata: servirà specializzarsi in pianificazione fiscale internazionale e gestione contenziosi",
                defaultHumanSalary: 35000,
                defaultHumanExtra: 10500,
                defaultAiMonthly: 280,
                defaultAiSetup: 1100,
                description: 'Consulenza fiscale, dichiarazioni, pianificazione tributaria, rapporti con il fisco'
            },
            management_consultant: {
                title: 'Consulente di Direzione',
                icon: '🧭',
                humanAccuracy: 0.89,
                aiAccuracy: 0.68,
                riskFactor: 0.25,
                targetYear: 2038,
                survivalNote: "ricerca e benchmark saranno automatizzati, ma definire strategia su misura e gestire la relazione col cliente restano competenze umane",
                defaultHumanSalary: 48000,
                defaultHumanExtra: 14400,
                defaultAiMonthly: 320,
                defaultAiSetup: 1300,
                description: 'Consulenza strategica e organizzativa, analisi di settore, gestione del cambiamento'
            },
            financial_analyst: {
                title: 'Financial Analyst',
                icon: '📉',
                humanAccuracy: 0.90,
                aiAccuracy: 0.90,
                riskFactor: 0.60,
                targetYear: 2031,
                survivalNote: "i modelli finanziari standard saranno generati dall'AI: servirà specializzarsi in valutazioni complesse e comunicazione strategica",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 320,
                defaultAiSetup: 1200,
                description: 'Modelli finanziari, valutazioni, analisi di mercato, reportistica per investitori'
            },
            risk_manager: {
                title: 'Risk Manager',
                icon: '🛡️',
                humanAccuracy: 0.91,
                aiAccuracy: 0.80,
                riskFactor: 0.35,
                targetYear: 2035,
                survivalNote: "il monitoraggio standard sarà automatizzato: servirà specializzarsi in scenari di rischio complessi e comunicazione al board",
                defaultHumanSalary: 44000,
                defaultHumanExtra: 13200,
                defaultAiMonthly: 350,
                defaultAiSetup: 1400,
                description: 'Identificazione e gestione dei rischi aziendali, compliance, reportistica al board'
            },
            legal_counsel: {
                title: 'Legal Counsel',
                icon: '⚖️',
                humanAccuracy: 0.92,
                aiAccuracy: 0.78,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "la revisione contratti standard sarà automatizzata: servirà specializzarsi in negoziazione complessa e normative emergenti",
                defaultHumanSalary: 46000,
                defaultHumanExtra: 13800,
                defaultAiMonthly: 300,
                defaultAiSetup: 1200,
                description: 'Consulenza legale aziendale, revisione contratti, gestione rischio legale'
            },
            procurement_manager: {
                title: 'Procurement Manager',
                icon: '🛒',
                humanAccuracy: 0.89,
                aiAccuracy: 0.85,
                riskFactor: 0.48,
                targetYear: 2033,
                survivalNote: "comparazione offerte e ordini saranno automatizzati: servirà specializzarsi in negoziazione strategica e gestione fornitori critici",
                defaultHumanSalary: 40000,
                defaultHumanExtra: 12000,
                defaultAiMonthly: 320,
                defaultAiSetup: 1300,
                description: 'Gestione acquisti, negoziazione fornitori, sourcing strategico'
            },
            supply_chain_specialist: {
                title: 'Supply Chain Specialist',
                icon: '🔗',
                humanAccuracy: 0.88,
                aiAccuracy: 0.89,
                riskFactor: 0.52,
                targetYear: 2032,
                survivalNote: "il forecasting standard sarà automatizzato: servirà specializzarsi in gestione del rischio e resilienza della supply chain",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 300,
                defaultAiSetup: 1200,
                description: 'Pianificazione domanda, gestione scorte, ottimizzazione rete distributiva'
            },
            process_engineer: {
                title: 'Process / Performance Engineer',
                icon: '⚙️',
                humanAccuracy: 0.89,
                aiAccuracy: 0.86,
                riskFactor: 0.45,
                targetYear: 2034,
                survivalNote: "mappatura e analisi standard saranno automatizzate: servirà specializzarsi in re-engineering di processi complessi",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 280,
                defaultAiSetup: 1100,
                description: 'Mappatura processi, miglioramento continuo, analisi di performance operativa'
            },
            logistics_manager: {
                title: 'Logistics Manager',
                icon: '🚚',
                humanAccuracy: 0.88,
                aiAccuracy: 0.87,
                riskFactor: 0.50,
                targetYear: 2032,
                survivalNote: "scheduling e tracking standard saranno automatizzati: servirà specializzarsi in gestione di crisi e network logistici complessi",
                defaultHumanSalary: 39000,
                defaultHumanExtra: 11700,
                defaultAiMonthly: 310,
                defaultAiSetup: 1200,
                description: 'Gestione trasporti, spedizioni, ottimizzazione rete logistica'
            },
            operations_manager: {
                title: 'Operations Manager',
                icon: '🏭',
                humanAccuracy: 0.90,
                aiAccuracy: 0.75,
                riskFactor: 0.32,
                targetYear: 2036,
                survivalNote: "il monitoraggio KPI sarà automatizzato: servirà specializzarsi in leadership operativa e trasformazione dei processi",
                defaultHumanSalary: 45000,
                defaultHumanExtra: 13500,
                defaultAiMonthly: 330,
                defaultAiSetup: 1300,
                description: 'Gestione operazioni aziendali, ottimizzazione processi, coordinamento team'
            },
            talent_acquisition: {
                title: 'Talent Acquisition Specialist',
                icon: '🎯',
                humanAccuracy: 0.87,
                aiAccuracy: 0.84,
                riskFactor: 0.50,
                targetYear: 2032,
                survivalNote: "lo screening iniziale sarà automatizzato: servirà specializzarsi in valutazione del fit culturale ed employer branding",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 220,
                defaultAiSetup: 900,
                description: 'Ricerca e selezione candidati, employer branding, gestione processi di recruiting'
            },
            hr_generalist: {
                title: 'HR Generalist',
                icon: '🧑‍💼',
                humanAccuracy: 0.87,
                aiAccuracy: 0.86,
                riskFactor: 0.52,
                targetYear: 2032,
                survivalNote: "le pratiche amministrative standard saranno automatizzate: servirà specializzarsi in gestione conflitti e consulenza ai manager",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 200,
                defaultAiSetup: 800,
                description: 'Amministrazione del personale, supporto operativo HR, gestione pratiche dipendenti'
            },
            hr_business_partner: {
                title: 'HR Business Partner',
                icon: '🤝',
                humanAccuracy: 0.90,
                aiAccuracy: 0.72,
                riskFactor: 0.28,
                targetYear: 2037,
                survivalNote: "la reportistica HR sarà automatizzata: servirà specializzarsi in consulenza strategica su organizzazione e talenti",
                defaultHumanSalary: 42000,
                defaultHumanExtra: 12600,
                defaultAiMonthly: 280,
                defaultAiSetup: 1100,
                description: 'Consulenza HR strategica al business, gestione talenti, change management'
            },
            sustainability_specialist: {
                title: 'Sustainability / ESG Specialist',
                icon: '🌱',
                humanAccuracy: 0.88,
                aiAccuracy: 0.82,
                riskFactor: 0.40,
                targetYear: 2035,
                survivalNote: "la raccolta dati ESG sarà automatizzata: servirà specializzarsi in strategia di sostenibilità e normative emergenti",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 260,
                defaultAiSetup: 1000,
                description: 'Strategia di sostenibilità aziendale, reportistica ESG, compliance ambientale'
            },
            hse_specialist: {
                title: 'HSE Specialist',
                icon: '🦺',
                humanAccuracy: 0.90,
                aiAccuracy: 0.65,
                riskFactor: 0.22,
                targetYear: 2039,
                survivalNote: "la documentazione standard sarà automatizzata, ma la gestione di emergenze sul campo resterà intrinsecamente umana",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 200,
                defaultAiSetup: 800,
                description: 'Salute, sicurezza e ambiente sul lavoro, audit, gestione emergenze'
            },
            medical_science_liaison: {
                title: 'Medical Science Liaison (MSL)',
                icon: '🩺',
                humanAccuracy: 0.93,
                aiAccuracy: 0.60,
                riskFactor: 0.15,
                targetYear: 2041,
                survivalNote: "la sintesi di letteratura sarà assistita dall'AI, ma la relazione diretta con medici e ricercatori resta profondamente umana",
                defaultHumanSalary: 48000,
                defaultHumanExtra: 14400,
                defaultAiMonthly: 250,
                defaultAiSetup: 1000,
                description: 'Relazione scientifica con KOL e medici, supporto scientifico al settore farmaceutico'
            },
            clinical_research_associate: {
                title: 'Clinical Research Associate (CRA)',
                icon: '🔬',
                humanAccuracy: 0.91,
                aiAccuracy: 0.78,
                riskFactor: 0.38,
                targetYear: 2035,
                survivalNote: "la verifica documentale standard sarà automatizzata: servirà specializzarsi in studi clinici complessi e relazione con i centri",
                defaultHumanSalary: 33000,
                defaultHumanExtra: 9900,
                defaultAiMonthly: 240,
                defaultAiSetup: 950,
                description: 'Monitoraggio studi clinici, compliance al protocollo, relazione con centri sperimentali'
            },

            avvocato: {
                title: "Avvocato",
                icon: "⚖️",
                humanAccuracy: 0.79,
                aiAccuracy: 0.48,
                riskFactor: 0.42,
                targetYear: 2034,
                survivalNote: "specializzarsi in contenzioso complesso e consulenza strategica, dove il giudizio umano è insostituibile",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Analisi completa del rischio AI per gli Avvocati: quali attività legali saranno automatizzate e come evolverà la professione forense."
            },
            notaio: {
                title: "Notaio",
                icon: "📜",
                humanAccuracy: 0.72,
                aiAccuracy: 0.60,
                riskFactor: 0.55,
                targetYear: 2031,
                survivalNote: "spostarsi verso consulenza patrimoniale e operazioni complesse dove la certificazione umana rimane essenziale",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Notaio sarà sostituito dall'AI? Analisi del rischio automazione per la professione notarile in Italia."
            },
            commercialista: {
                title: "Commercialista / Dottore Commercialista",
                icon: "🧾",
                humanAccuracy: 0.64,
                aiAccuracy: 0.75,
                riskFactor: 0.72,
                targetYear: 2029,
                survivalNote: "abbandonare la contabilità ordinaria (già automatizzata) e puntare su consulenza strategica ad alto valore aggiunto",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "Rischio AI per il Commercialista: analisi dei task automatizzabili e piano di sopravvivenza professionale."
            },
            consulente_del_lavoro: {
                title: "Consulente del Lavoro",
                icon: "👔",
                humanAccuracy: 0.66,
                aiAccuracy: 0.71,
                riskFactor: 0.68,
                targetYear: 2030,
                survivalNote: "spostarsi verso consulenza strategica HR e gestione delle relazioni sindacali, abbandonando la parte amministrativa",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Consulente del Lavoro sarà sostituito dall'AI? Analisi rischio automazione per questa professione."
            },
            magistrato: {
                title: "Magistrato / Giudice",
                icon: "🏛️",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2037,
                survivalNote: "il ruolo di giudice rimane fondamentalmente umano per ragioni costituzionali; l'AI sarà un supporto, non un sostituto",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'AI potrà sostituire il Magistrato? Analisi del rischio automazione per la magistratura italiana."
            },
            medico_base: {
                title: "Medico di Base / MMG",
                icon: "🩺",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2034,
                survivalNote: "la relazione medico-paziente e la gestione della complessità clinica rimarranno umane; l'AI supporterà la diagnostica",
                defaultHumanSalary: 45000,
                defaultHumanExtra: 13500,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Medico di Base sarà sostituito dall'AI? Analisi del rischio automazione per la medicina generale."
            },
            chirurgo: {
                title: "Chirurgo",
                icon: "🔬",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "la responsabilità chirurgica e la gestione dell'imprevisto rimangono umane; l'AI è un assistente, non un sostituto",
                defaultHumanSalary: 85000,
                defaultHumanExtra: 25500,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'AI sostituirà il Chirurgo? Analisi del rischio automazione per la chirurgia."
            },
            dentista: {
                title: "Dentista / Odontoiatra",
                icon: "🦷",
                humanAccuracy: 0.84,
                aiAccuracy: 0.39,
                riskFactor: 0.32,
                targetYear: 2035,
                survivalNote: "le competenze manuali specializzate e la relazione con il paziente rimangono centrali; la diagnostica sarà potenziata dall'AI",
                defaultHumanSalary: 60000,
                defaultHumanExtra: 18000,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Dentista sarà sostituito dall'AI? Rischio automazione per la professione odontoiatrica."
            },
            fisioterapista: {
                title: "Fisioterapista",
                icon: "💪",
                humanAccuracy: 0.89,
                aiAccuracy: 0.30,
                riskFactor: 0.22,
                targetYear: 2038,
                survivalNote: "il contatto manuale e la relazione terapeutica sono difficilmente automatizzabili; specializzarsi in riabilitazione complessa",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il Fisioterapista sarà sostituito dall'AI? Analisi del rischio automazione per la fisioterapia."
            },
            psicologo: {
                title: "Psicologo / Psicoterapeuta",
                icon: "🧠",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2039,
                survivalNote: "la relazione terapeutica è il cuore della psicoterapia e non è automatizzabile; l'AI supporterà la parte diagnostica e amministrativa",
                defaultHumanSalary: 29000,
                defaultHumanExtra: 8700,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Lo Psicologo sarà sostituito dall'AI? Analisi del rischio automazione per psicologi e psicoterapeuti."
            },
            farmacista: {
                title: "Farmacista",
                icon: "💊",
                humanAccuracy: 0.72,
                aiAccuracy: 0.60,
                riskFactor: 0.55,
                targetYear: 2031,
                survivalNote: "la farmacia automatizzata arriverà; differenziarsi con consulenza clinica avanzata e ruolo di punto di salute di quartiere",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Farmacista sarà sostituito dall'AI? Analisi del rischio automazione per la farmacia."
            },
            veterinario: {
                title: "Veterinario",
                icon: "🐾",
                humanAccuracy: 0.84,
                aiAccuracy: 0.39,
                riskFactor: 0.32,
                targetYear: 2035,
                survivalNote: "le competenze chirurgiche e la gestione dell'animale richiedono presenza fisica; differenziarsi in specializzazioni rare",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Veterinario sarà sostituito dall'AI? Analisi del rischio automazione per la professione veterinaria."
            },
            nutrizionista: {
                title: "Nutrizionista / Dietista",
                icon: "🥗",
                humanAccuracy: 0.76,
                aiAccuracy: 0.53,
                riskFactor: 0.48,
                targetYear: 2032,
                survivalNote: "spostarsi verso nutrizione clinica specialistica e supporto psicologico; gli algoritmi sostituiranno i piani base",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Nutrizionista sarà sostituito dall'AI? Analisi del rischio automazione per la nutrizione clinica."
            },
            radiologo: {
                title: "Radiologo / Medico Radiologo",
                icon: "📡",
                humanAccuracy: 0.68,
                aiAccuracy: 0.69,
                riskFactor: 0.65,
                targetYear: 2029,
                survivalNote: "la refertazione standard sarà dominata dall'AI; il futuro è nella radiologia interventistica e nella supervisione dell'AI",
                defaultHumanSalary: 75000,
                defaultHumanExtra: 22500,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Radiologo sarà sostituito dall'AI? L'imaging diagnostico è tra i settori più impattati dall'intelligenza artificiale."
            },
            osteopata: {
                title: "Osteopata",
                icon: "🙌",
                humanAccuracy: 0.90,
                aiAccuracy: 0.28,
                riskFactor: 0.20,
                targetYear: 2038,
                survivalNote: "il contatto manuale e la valutazione olistica del paziente sono difficilmente replicabili dall'AI",
                defaultHumanSalary: 27000,
                defaultHumanExtra: 8100,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'Osteopata sarà sostituito dall'AI? Analisi del rischio automazione per l'osteopatia."
            },
            logopedista: {
                title: "Logopedista",
                icon: "🗣️",
                humanAccuracy: 0.88,
                aiAccuracy: 0.33,
                riskFactor: 0.25,
                targetYear: 2037,
                survivalNote: "la relazione terapeutica con il paziente e la famiglia è centrale; l'AI supporterà gli esercizi, non sostituirà il terapeuta",
                defaultHumanSalary: 25000,
                defaultHumanExtra: 7500,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il Logopedista sarà sostituito dall'AI? Analisi del rischio automazione per la logopedia."
            },
            oss: {
                title: "OSS – Operatore Socio Sanitario",
                icon: "❤️",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2040,
                survivalNote: "il lavoro di cura fisica e relazionale con persone fragili è profondamente umano e difficilmente automatizzabile",
                defaultHumanSalary: 20000,
                defaultHumanExtra: 6000,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'OSS sarà sostituito dall'AI? Analisi del rischio automazione per gli operatori socio-sanitari."
            },
            ingegnere_civile: {
                title: "Ingegnere Civile / Strutturale",
                icon: "🏗️",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2034,
                survivalNote: "la responsabilità professionale e la progettazione innovativa restano umane; automatizzare le parti ripetitive per concentrarsi sul valore aggiunto",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Ingegnere Civile sarà sostituito dall'AI? Analisi del rischio automazione per l'ingegneria strutturale."
            },
            architetto: {
                title: "Architetto",
                icon: "🏛️",
                humanAccuracy: 0.78,
                aiAccuracy: 0.51,
                riskFactor: 0.45,
                targetYear: 2032,
                survivalNote: "la creatività, il giudizio estetico e la relazione col cliente restano umani; l'AI accelera la parte tecnica e produttiva",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Architetto sarà sostituito dall'AI? Analisi del rischio automazione per la professione architettonica."
            },
            geometra: {
                title: "Geometra / Perito Edile",
                icon: "📐",
                humanAccuracy: 0.68,
                aiAccuracy: 0.69,
                riskFactor: 0.65,
                targetYear: 2030,
                survivalNote: "le pratiche burocratiche saranno automatizzate; differenziarsi con consulenza tecnica complessa e gestione degli incentivi edilizi",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Geometra sarà sostituito dall'AI? Analisi del rischio automazione per la professione di geometra."
            },
            topografo: {
                title: "Topografo / Geodeta",
                icon: "🗺️",
                humanAccuracy: 0.71,
                aiAccuracy: 0.62,
                riskFactor: 0.58,
                targetYear: 2031,
                survivalNote: "la parte di acquisizione dati sarà automatizzata da droni e sensori; il valore aggiunto è nell'interpretazione e consulenza",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Topografo sarà sostituito dall'AI? Analisi del rischio automazione per la topografia."
            },
            ingegnere_meccanico: {
                title: "Ingegnere Meccanico",
                icon: "⚙️",
                humanAccuracy: 0.80,
                aiAccuracy: 0.46,
                riskFactor: 0.40,
                targetYear: 2033,
                survivalNote: "la simulazione e il design generativo AI accelerano il lavoro; il valore è nell'innovazione e nella validazione fisica",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Ingegnere Meccanico sarà sostituito dall'AI? Analisi del rischio automazione per l'ingegneria meccanica."
            },
            urbanista: {
                title: "Urbanista / Pianificatore Territoriale",
                icon: "🏙️",
                humanAccuracy: 0.80,
                aiAccuracy: 0.46,
                riskFactor: 0.40,
                targetYear: 2034,
                survivalNote: "l'analisi dati sarà automatizzata; il valore sta nella visione strategica e nella mediazione tra interessi diversi",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Urbanista sarà sostituito dall'AI? Analisi del rischio automazione per la pianificazione urbana."
            },
            ingegnere_ambientale: {
                title: "Ingegnere Ambientale / Ecologico",
                icon: "🌿",
                humanAccuracy: 0.82,
                aiAccuracy: 0.42,
                riskFactor: 0.35,
                targetYear: 2034,
                survivalNote: "la domanda di competenze ESG cresce; differenziarsi in consulenza su transizione ecologica e rendicontazione di sostenibilità",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Ingegnere Ambientale sarà sostituito dall'AI? Analisi del rischio automazione per l'ingegneria ambientale."
            },
            agente_immobiliare: {
                title: "Agente Immobiliare",
                icon: "🏠",
                humanAccuracy: 0.72,
                aiAccuracy: 0.60,
                riskFactor: 0.55,
                targetYear: 2031,
                survivalNote: "il portale ha già tolto il potere dell'informazione; il futuro è nella consulenza di alto valore e nella gestione di operazioni complesse",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "L'Agente Immobiliare sarà sostituito dall'AI? Analisi del rischio automazione per il settore immobiliare."
            },
            perito_immobiliare: {
                title: "Perito Immobiliare / Valutatore",
                icon: "📋",
                humanAccuracy: 0.65,
                aiAccuracy: 0.73,
                riskFactor: 0.70,
                targetYear: 2029,
                survivalNote: "le perizie standard saranno automatizzate; differenziarsi in immobili atipici, contenziosi e valutazioni complesse",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "Il Perito Immobiliare sarà sostituito dall'AI? Analisi del rischio automazione per la valutazione immobiliare."
            },
            consulente_finanziario: {
                title: "Consulente Finanziario / Financial Planner",
                icon: "📊",
                humanAccuracy: 0.71,
                aiAccuracy: 0.62,
                riskFactor: 0.58,
                targetYear: 2031,
                survivalNote: "i robo-advisor gestiscono già portafogli standard; il futuro è nella consulenza patrimoniale olistica e nella relazione di fiducia a lungo termine",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Consulente Finanziario sarà sostituito dall'AI? Analisi del rischio automazione per la consulenza finanziaria."
            },
            agente_assicurativo: {
                title: "Agente Assicurativo",
                icon: "🛡️",
                humanAccuracy: 0.64,
                aiAccuracy: 0.75,
                riskFactor: 0.72,
                targetYear: 2029,
                survivalNote: "le polizze standard si vendono online; differenziarsi con consulenza su rischi complessi e protezione patrimoniale",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "L'Agente Assicurativo sarà sostituito dall'AI? Analisi del rischio automazione per il settore assicurativo."
            },
            revisore_contabile: {
                title: "Revisore Contabile / Auditor",
                icon: "🔍",
                humanAccuracy: 0.63,
                aiAccuracy: 0.78,
                riskFactor: 0.75,
                targetYear: 2028,
                survivalNote: "il campionamento al 100% fatto dall'AI rende l'auditor tradizionale obsoleto; specializzarsi in forensic e audit di sistemi tecnologici",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "Il Revisore Contabile sarà sostituito dall'AI? Analisi del rischio automazione per la revisione legale."
            },
            giornalista: {
                title: "Giornalista",
                icon: "📰",
                humanAccuracy: 0.69,
                aiAccuracy: 0.66,
                riskFactor: 0.62,
                targetYear: 2030,
                survivalNote: "le notizie di cronaca standard saranno scritte dall'AI; il futuro è nell'inchiesta, nell'analisi e nella costruzione di fiducia con i lettori",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Giornalista sarà sostituito dall'AI? Analisi del rischio automazione per il giornalismo."
            },
            scrittore: {
                title: "Scrittore / Autore",
                icon: "✍️",
                humanAccuracy: 0.79,
                aiAccuracy: 0.48,
                riskFactor: 0.42,
                targetYear: 2034,
                survivalNote: "la scrittura di servizio sarà AI; l'autore vive di voce autentica, punto di vista e comunità di lettori",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Lo Scrittore sarà sostituito dall'AI? Analisi del rischio automazione per la scrittura creativa."
            },
            sceneggiatore: {
                title: "Sceneggiatore / Screenwriter",
                icon: "🎬",
                humanAccuracy: 0.78,
                aiAccuracy: 0.51,
                riskFactor: 0.45,
                targetYear: 2033,
                survivalNote: "i format derivativi saranno generati dall'AI; differenziarsi con originalità, point of view e padronanza del mestiere visivo",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Lo Sceneggiatore sarà sostituito dall'AI? Analisi del rischio automazione per la scrittura cinematografica."
            },
            doppiatore: {
                title: "Doppiatore / Voice Actor",
                icon: "🎙️",
                humanAccuracy: 0.68,
                aiAccuracy: 0.69,
                riskFactor: 0.65,
                targetYear: 2030,
                survivalNote: "i cloni vocali AI sono già realtà; differenziarsi con performance uniche e costruire diritti sulla propria voce",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Doppiatore sarà sostituito dall'AI? L'AI vocale è una delle aree di impatto più rapide."
            },
            idraulico: {
                title: "Idraulico / Termoidraulico",
                icon: "🔧",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2040,
                survivalNote: "i lavori manuali fisici in ambienti variabili sono difficilissimi da automatizzare; specializzarsi in tecnologie green aumenta il valore",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'Idraulico sarà sostituito dall'AI? Analisi del rischio automazione per la professione idraulica."
            },
            elettricista: {
                title: "Elettricista",
                icon: "⚡",
                humanAccuracy: 0.89,
                aiAccuracy: 0.30,
                riskFactor: 0.22,
                targetYear: 2038,
                survivalNote: "la domanda di elettricisti qualificati crescerà con l'elettrificazione; specializzarsi in energie rinnovabili e domotica è la mossa giusta",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'Elettricista sarà sostituito dall'AI? Analisi del rischio automazione per gli impianti elettrici."
            },
            falegname: {
                title: "Falegname / Carpentiere",
                icon: "🪵",
                humanAccuracy: 0.88,
                aiAccuracy: 0.33,
                riskFactor: 0.25,
                targetYear: 2037,
                survivalNote: "la produzione in serie è già automatizzata; l'artigiano del futuro è un designer-maker che usa il digitale per creare oggetti unici",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il Falegname sarà sostituito dall'AI? Analisi del rischio automazione per la falegnameria."
            },
            meccanico: {
                title: "Meccanico Autoriparatore",
                icon: "🔩",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "i veicoli elettrici richiedono nuove competenze; chi si forma ora su EV ha un vantaggio enorme rispetto a chi resta sul termico",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Meccanico sarà sostituito dall'AI? Analisi del rischio automazione per la riparazione auto."
            },
            chef: {
                title: "Chef / Cuoco",
                icon: "👨‍🍳",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2036,
                survivalNote: "la cucina industriale sarà automatizzata; il ristorante del futuro vende esperienza e identità, non solo cibo",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 4500,
                defaultAiSetup: 18000,
                description: "Lo Chef sarà sostituito dall'AI? Analisi del rischio automazione per la professione culinaria."
            },
            pasticcere: {
                title: "Pasticcere / Gelatiere",
                icon: "🍰",
                humanAccuracy: 0.88,
                aiAccuracy: 0.33,
                riskFactor: 0.25,
                targetYear: 2037,
                survivalNote: "il dolce industriale è già automatizzato; l'artigiano vive di qualità, identità e racconto",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 4200,
                defaultAiSetup: 16000,
                description: "Il Pasticcere sarà sostituito dall'AI? Analisi del rischio automazione per la pasticceria artigianale."
            },
            barista: {
                title: "Barista / Bartender",
                icon: "☕",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2034,
                survivalNote: "il bar automatizzato esiste già; il futuro è nel locale che vende esperienza, cura e identità, non solo caffè",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Barista sarà sostituito dall'AI? Analisi del rischio automazione per la professione di barista."
            },
            parrucchiere: {
                title: "Parrucchiere / Barbiere",
                icon: "✂️",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2040,
                survivalNote: "i lavori di cura personale richiedono contatto fisico e fiducia; l'AI supporterà la consulenza visiva, non il servizio",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 3800,
                defaultAiSetup: 14000,
                description: "Il Parrucchiere sarà sostituito dall'AI? Analisi del rischio automazione per la professione."
            },
            estetista: {
                title: "Estetista / Cosmetologa",
                icon: "💅",
                humanAccuracy: 0.90,
                aiAccuracy: 0.28,
                riskFactor: 0.20,
                targetYear: 2039,
                survivalNote: "il servizio estetico è profondamente umano e basato sulla fiducia; differenziarsi con tecnologie avanzate e approccio scientifico",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 3500,
                defaultAiSetup: 12000,
                description: "L'Estetista sarà sostituita dall'AI? Analisi del rischio automazione per il settore estetico."
            },
            personal_trainer: {
                title: "Personal Trainer",
                icon: "🏋️",
                humanAccuracy: 0.88,
                aiAccuracy: 0.33,
                riskFactor: 0.25,
                targetYear: 2037,
                survivalNote: "le app AI personalizzano gli allenamenti; il PT vive di motivazione, contatto umano e gestione della complessità atletica",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 3200,
                defaultAiSetup: 10000,
                description: "Il Personal Trainer sarà sostituito dall'AI? Analisi del rischio automazione per il fitness."
            },
            vigile_urbano: {
                title: "Vigile Urbano / Agente Polizia Locale",
                icon: "🚔",
                humanAccuracy: 0.84,
                aiAccuracy: 0.39,
                riskFactor: 0.32,
                targetYear: 2035,
                survivalNote: "il controllo automatizzato aumenterà; il ruolo del vigile si sposta verso mediazione, emergenze e presenza rassicurante",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Vigile Urbano sarà sostituito dall'AI? Analisi del rischio automazione per la polizia locale."
            },
            pompiere: {
                title: "Vigile del Fuoco / Pompiere",
                icon: "🚒",
                humanAccuracy: 0.93,
                aiAccuracy: 0.24,
                riskFactor: 0.15,
                targetYear: 2041,
                survivalNote: "l'intervento fisico in ambienti dinamici e pericolosi rimane profondamente umano; i droni supporteranno ma non sostituiranno",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il Pompiere sarà sostituito dall'AI? Analisi del rischio automazione per i Vigili del Fuoco."
            },
            funzionario_pubblico: {
                title: "Funzionario Pubblico / Impiegato PA",
                icon: "🏛️",
                humanAccuracy: 0.68,
                aiAccuracy: 0.69,
                riskFactor: 0.65,
                targetYear: 2030,
                survivalNote: "la burocrazia ripetitiva sarà automatizzata; il futuro è nella gestione di progetti complessi e nell'innovazione della PA",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Funzionario Pubblico sarà sostituito dall'AI? Analisi del rischio automazione per la PA."
            },
            autista_camion: {
                title: "Autista di Camion / Trasportatore",
                icon: "🚛",
                humanAccuracy: 0.63,
                aiAccuracy: 0.78,
                riskFactor: 0.75,
                targetYear: 2029,
                survivalNote: "la guida autonoma su autostrade è già realtà; il futuro è nella supervisione di flotte autonomous e nella logistica complessa",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "L'Autista di Camion sarà sostituito dall'AI? Analisi del rischio automazione per il trasporto merci."
            },
            pilota: {
                title: "Pilota di Linea / Comandante",
                icon: "✈️",
                humanAccuracy: 0.89,
                aiAccuracy: 0.30,
                riskFactor: 0.22,
                targetYear: 2038,
                survivalNote: "la certificazione e la responsabilità legale mantengono l'uomo a bordo; ma i due piloti potrebbero diventare uno con copilota AI",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il Pilota di Linea sarà sostituito dall'AI? Analisi del rischio automazione per l'aviazione."
            },
            magazziniere: {
                title: "Magazziniere / Addetto Logistica",
                icon: "📦",
                humanAccuracy: 0.61,
                aiAccuracy: 0.80,
                riskFactor: 0.78,
                targetYear: 2028,
                survivalNote: "i magazzini automatizzati di Amazon sono il futuro; riqualificarsi in supervisione dei sistemi robotici e gestione delle eccezioni",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "Il Magazziniere sarà sostituito dall'AI? Analisi del rischio automazione per la logistica di magazzino."
            },
            agronomo: {
                title: "Agronomo / Consulente Agricolo",
                icon: "🌾",
                humanAccuracy: 0.79,
                aiAccuracy: 0.48,
                riskFactor: 0.42,
                targetYear: 2033,
                survivalNote: "i sensori e l'AI ottimizzeranno la coltivazione; l'agronomo del futuro è un consulente di strategia aziendale agricola",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Agronomo sarà sostituito dall'AI? Analisi del rischio automazione per la consulenza agronomica."
            },
            agricoltore: {
                title: "Agricoltore / Imprenditore Agricolo",
                icon: "🚜",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2034,
                survivalNote: "l'automazione aumenta la produttività ma riduce il bisogno di manodopera; il futuro è nell'imprenditoria agricola innovativa",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Agricoltore sarà sostituito dall'AI? Analisi del rischio automazione per l'agricoltura."
            },
            enologo: {
                title: "Enologo / Tecnico Vinicolo",
                icon: "🍷",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "l'analisi è automatizzabile; la creatività del blend e l'identità di un vino sono profondamente umane",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Enologo sarà sostituito dall'AI? Analisi del rischio automazione per la professione enologica."
            },
            allenatore: {
                title: "Allenatore Sportivo / Coach",
                icon: "🏆",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2039,
                survivalNote: "l'AI analizzerà i dati; l'allenatore rimarrà per motivare, gestire l'umano e prendere decisioni in contesti ad alta pressione",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 3000,
                defaultAiSetup: 10000,
                description: "L'Allenatore Sportivo sarà sostituito dall'AI? Analisi del rischio automazione per il coaching."
            },
            attore: {
                title: "Attore / Performer",
                icon: "🎭",
                humanAccuracy: 0.84,
                aiAccuracy: 0.39,
                riskFactor: 0.32,
                targetYear: 2035,
                survivalNote: "i figuranti digitali esisteranno; l'attore vive di presenza e carisma irriproducibili dall'AI",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'Attore sarà sostituito dall'AI? Analisi del rischio automazione per la professione attorale."
            },
            regista: {
                title: "Regista Cinematografico / TV",
                icon: "🎥",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "l'AI abbatte i costi di produzione; il regista con visione propria avrà più strumenti, non meno lavoro",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Regista sarà sostituito dall'AI? Analisi del rischio automazione per la regia."
            },
            musicista: {
                title: "Musicista / Strumentista",
                icon: "🎵",
                humanAccuracy: 0.88,
                aiAccuracy: 0.33,
                riskFactor: 0.25,
                targetYear: 2037,
                survivalNote: "la musica funzionale è già AI; l'artista vive di identità, performance e relazione con il pubblico",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il Musicista sarà sostituito dall'AI? Analisi del rischio automazione per la professione musicale."
            },
            cantante: {
                title: "Cantante / Vocalist",
                icon: "🎤",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "i cloni vocali esistono già; il cantante vive sul palco, nella presenza e nell'identità che gli algoritmi non possono replicare",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Cantante sarà sostituito dall'AI? Analisi del rischio automazione per i cantanti."
            },
            assistente_sociale: {
                title: "Assistente Sociale",
                icon: "🤝",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2039,
                survivalNote: "il lavoro con le persone vulnerabili è profondamente umano; l'AI gestirà la documentazione, non la relazione",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'Assistente Sociale sarà sostituito dall'AI? Analisi del rischio automazione per il lavoro sociale."
            },
            educatore_sociale: {
                title: "Educatore Professionale / Sociale",
                icon: "🌱",
                humanAccuracy: 0.93,
                aiAccuracy: 0.24,
                riskFactor: 0.15,
                targetYear: 2040,
                survivalNote: "la relazione educativa con persone in difficoltà è il cuore del lavoro sociale e non è automatizzabile",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'Educatore Sociale sarà sostituito dall'AI? Analisi del rischio automazione per l'educazione sociale."
            },
            stilista: {
                title: "Stilista / Fashion Designer",
                icon: "👗",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2034,
                survivalNote: "l'AI genera mood board e varianti infiniti; il designer vive di punto di vista originale e capacità di creare desiderio",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Lo Stilista sarà sostituito dall'AI? Analisi del rischio automazione per la moda."
            },
            sommelier: {
                title: "Sommelier / Enotecnico",
                icon: "🍾",
                humanAccuracy: 0.82,
                aiAccuracy: 0.42,
                riskFactor: 0.35,
                targetYear: 2035,
                survivalNote: "l'AI può analizzare un vino; il sommelier vende emozione, storia e un'esperienza di ospitalità irripetibile",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Sommelier sarà sostituito dall'AI? Analisi del rischio automazione per la professione del vino."
            },
            criminologo: {
                title: "Criminologo / Analista Forense",
                icon: "🔍",
                humanAccuracy: 0.80,
                aiAccuracy: 0.46,
                riskFactor: 0.40,
                targetYear: 2033,
                survivalNote: "l'analisi predittiva AI supporta la criminologia; il giudizio su casi complessi e atipici resta umano",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Criminologo sarà sostituito dall'AI? Analisi del rischio automazione per la criminologia."
            },
            psicologo_scolastico: {
                title: "Psicologo Scolastico",
                icon: "📚",
                humanAccuracy: 0.89,
                aiAccuracy: 0.30,
                riskFactor: 0.22,
                targetYear: 2037,
                survivalNote: "la relazione di ascolto con bambini e adolescenti è insostituibile; l'AI aiuterà la diagnosi, non il sostegno",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Lo Psicologo Scolastico sarà sostituito dall'AI? Analisi del rischio automazione."
            },
            lobbista: {
                title: "Lobbista / Public Affairs Manager",
                icon: "🏛️",
                humanAccuracy: 0.84,
                aiAccuracy: 0.39,
                riskFactor: 0.32,
                targetYear: 2035,
                survivalNote: "le relazioni personali e la fiducia con i decisori politici sono il cuore del lobbying e non sono automatizzabili",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Lobbista sarà sostituito dall'AI? Analisi del rischio automazione per il public affairs."
            },
            redattore: {
                title: "Redattore / Editor",
                icon: "📝",
                humanAccuracy: 0.66,
                aiAccuracy: 0.71,
                riskFactor: 0.68,
                targetYear: 2029,
                survivalNote: "la revisione standard è già AI; il redattore del futuro è un curatore editoriale con gusto e visione",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il Redattore sarà sostituito dall'AI? Analisi del rischio automazione per l'editing."
            },
            panettiere: {
                title: "Panettiere / Fornaio",
                icon: "🍞",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2036,
                survivalNote: "il pane industriale è già automatizzato; il futuro è nel panificio artigianale che vende qualità, storia e comunità",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Panettiere sarà sostituito dall'AI? Analisi del rischio automazione per la panificazione."
            },
            cameriere: {
                title: "Cameriere / Personale di Sala",
                icon: "🍽️",
                humanAccuracy: 0.80,
                aiAccuracy: 0.46,
                riskFactor: 0.40,
                targetYear: 2033,
                survivalNote: "il servizio automatizzato arriva nel fast food; nel fine dining il cameriere è parte dell'esperienza e non è sostituibile",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il Cameriere sarà sostituito dall'AI? Analisi del rischio automazione per la ristorazione."
            },
            medico_specialista: {
                title: "Medico Specialista",
                icon: "🏥",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2036,
                survivalNote: "specializzarsi in branche con alta componente relazionale e decisionale come oncologia, psichiatria e medicina palliativa",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il medico specialista sarà sostituito dall'AI? Analisi del rischio automazione per internisti, cardiologi, neurologi e altre specializzazioni mediche."
            },
            infermiere_specializzato: {
                title: "Infermiere Specializzato",
                icon: "💉",
                humanAccuracy: 0.93,
                aiAccuracy: 0.23,
                riskFactor: 0.14,
                targetYear: 2040,
                survivalNote: "specializzarsi in terapia intensiva o oncologia dove la presenza umana è strutturalmente insostituibile",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Rischio AI per infermieri specializzati in terapia intensiva, oncologia, pediatria. Analisi task e piano di carriera."
            },
            tecnico_radiologia: {
                title: "Tecnico di Radiologia",
                icon: "🔬",
                humanAccuracy: 0.74,
                aiAccuracy: 0.57,
                riskFactor: 0.52,
                targetYear: 2030,
                survivalNote: "specializzarsi in radioterapia oncologica e imaging avanzato, dove la componente umana rimane centrale",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il tecnico di radiologia rischierà il posto con l'AI? Analisi completa del rischio automazione per TSRM."
            },
            biologo: {
                title: "Biologo",
                icon: "🧬",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2033,
                survivalNote: "orientarsi verso bioinformatica e genomica, dove l'AI è strumento di lavoro e non sostituto",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Rischio AI per biologi: analisi di laboratorio, ricerca e consulenza nutrizionale. Chi sopravvive all'automazione?"
            },
            ottico: {
                title: "Ottico Optometrista",
                icon: "👓",
                humanAccuracy: 0.78,
                aiAccuracy: 0.50,
                riskFactor: 0.44,
                targetYear: 2032,
                survivalNote: "puntare su optometria clinica e terapia visiva, aree poco automatizzabili a breve termine",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'ottico sarà sostituito dall'AI? Rischio automazione per optometristi e ottici in Italia."
            },
            logopedista_pediatrico: {
                title: "Logopedista Pediatrico",
                icon: "🗣️",
                humanAccuracy: 0.92,
                aiAccuracy: 0.24,
                riskFactor: 0.16,
                targetYear: 2038,
                survivalNote: "specializzarsi in età evolutiva e disturbi complessi, dove la relazione terapeutica umana è il cuore del trattamento",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Rischio AI per logopedisti specializzati in età evolutiva: balbuzie, DSA, autismo. Analisi completa."
            },
            tecnico_laboratorio: {
                title: "Tecnico di Laboratorio",
                icon: "🧪",
                humanAccuracy: 0.68,
                aiAccuracy: 0.69,
                riskFactor: 0.65,
                targetYear: 2028,
                survivalNote: "spostarsi verso supervisione sistemi automatizzati e specializzazione in analisi genomiche avanzate",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il tecnico di laboratorio clinico sarà automatizzato dall'AI? Analisi del rischio per analisti clinici e biomedici."
            },
            dietista: {
                title: "Dietista",
                icon: "🥗",
                humanAccuracy: 0.82,
                aiAccuracy: 0.42,
                riskFactor: 0.35,
                targetYear: 2033,
                survivalNote: "specializzarsi in nutrizione clinica e terapia nutrizionale per patologie croniche, dove serve competenza medica integrativa",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Dietista e nutrizionista: differenze, rischio AI e futuro della professione. Chi rischia di più tra le due figure?"
            },
            insegnante_scuola_primaria: {
                title: "Insegnante Scuola Primaria",
                icon: "📚",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2038,
                survivalNote: "sviluppare competenze in pedagogia inclusiva e diventare facilitatori dell'apprendimento con l'AI come strumento",
                defaultHumanSalary: 24000,
                defaultHumanExtra: 7200,
                defaultAiMonthly: 2500,
                defaultAiSetup: 7000,
                description: "L'insegnante di scuola primaria sarà sostituito dall'AI? Analisi del rischio per maestri e maestre d'Italia."
            },
            professore_liceo: {
                title: "Professore di Liceo",
                icon: "🏫",
                humanAccuracy: 0.89,
                aiAccuracy: 0.30,
                riskFactor: 0.22,
                targetYear: 2036,
                survivalNote: "diventare facilitatori del pensiero critico piuttosto che trasmettitori di contenuti, che l'AI gestirà sempre meglio",
                defaultHumanSalary: 24000,
                defaultHumanExtra: 7200,
                defaultAiMonthly: 2800,
                defaultAiSetup: 8000,
                description: "Il professore di liceo sarà sostituito dall'AI? Rischio automazione per docenti di italiano, matematica, storia, scienze."
            },
            educatore_asilo_nido: {
                title: "Educatore Asilo Nido",
                icon: "🧸",
                humanAccuracy: 0.95,
                aiAccuracy: 0.19,
                riskFactor: 0.10,
                targetYear: 2042,
                survivalNote: "professione strutturalmente protetta dalla necessità di presenza fisica e cura. Sviluppare specializzazione in sviluppo atipico",
                defaultHumanSalary: 24000,
                defaultHumanExtra: 7200,
                defaultAiMonthly: 3000,
                defaultAiSetup: 9000,
                description: "L'educatore di asilo nido rischia l'automazione? Analisi del futuro per chi lavora con i bambini 0-3 anni."
            },
            tutor_specializzato: {
                title: "Tutor Specializzato DSA",
                icon: "🎯",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2035,
                survivalNote: "specializzarsi in DSA complessi e ADHD dove la componente relazionale e motivazionale è insostituibile",
                defaultHumanSalary: 24000,
                defaultHumanExtra: 7200,
                defaultAiMonthly: 2200,
                defaultAiSetup: 6000,
                description: "Il tutor per DSA e bisogni educativi speciali sarà sostituito dall'AI? Rischio e opportunità per tutor e mediatori didattici."
            },
            avvocato_penalista: {
                title: "Avvocato Penalista",
                icon: "⚖️",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2035,
                survivalNote: "la difesa in aula rimane profondamente umana. Specializzarsi in diritto penale informatico e criminalità finanziaria",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il penalista è a rischio AI? Analisi del futuro della difesa penale in Italia nell'era dell'intelligenza artificiale."
            },
            consulente_del_lavoro_senior: {
                title: "Consulente del Lavoro Senior",
                icon: "📋",
                humanAccuracy: 0.71,
                aiAccuracy: 0.62,
                riskFactor: 0.58,
                targetYear: 2030,
                survivalNote: "abbandonare la parte operativa (già automatizzata) e spostarsi su consulenza strategica HR e gestione vertenze complesse",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il consulente del lavoro senior rischia l'AI? Analisi approfondita di chi gestisce paghe, contratti e vertenze."
            },
            mediatore_civile: {
                title: "Mediatore Civile",
                icon: "🤝",
                humanAccuracy: 0.88,
                aiAccuracy: 0.33,
                riskFactor: 0.25,
                targetYear: 2036,
                survivalNote: "professione protetta dalla natura relazionale. Specializzarsi in mediazione familiare e penale",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "La mediazione civile sarà automatizzata dall'AI? Analisi del rischio per mediatori professionali in Italia."
            },
            compliance_officer: {
                title: "Compliance Officer",
                icon: "🔍",
                humanAccuracy: 0.76,
                aiAccuracy: 0.53,
                riskFactor: 0.48,
                targetYear: 2031,
                survivalNote: "specializzarsi in AI Act, ESG compliance e normative emergenti dove l'expertise umano è ancora raro",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il compliance officer sarà sostituito dall'AI? Analisi del rischio per chi si occupa di conformità aziendale."
            },
            notaio_digitale: {
                title: "Notaio Digitale / Blockchain Notary",
                icon: "🔐",
                humanAccuracy: 0.79,
                aiAccuracy: 0.48,
                riskFactor: 0.42,
                targetYear: 2032,
                survivalNote: "diventare il punto di riferimento per la legalizzazione di asset digitali, un mercato in forte crescita",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Come cambierà il notariato con blockchain e firma digitale? Rischio e opportunità per i notai nell'era digitale."
            },
            ingegnere_elettrico: {
                title: "Ingegnere Elettrico",
                icon: "⚡",
                humanAccuracy: 0.84,
                aiAccuracy: 0.39,
                riskFactor: 0.32,
                targetYear: 2034,
                survivalNote: "specializzarsi in rinnovabili, sistemi di accumulo e microgrids — settori in forte crescita con alta domanda",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'ingegnere elettrico sarà sostituito dall'AI? Analisi del rischio per elettrotecnici e ingegneri elettrici in Italia."
            },
            ingegnere_informatico: {
                title: "Ingegnere Informatico",
                icon: "💻",
                humanAccuracy: 0.82,
                aiAccuracy: 0.42,
                riskFactor: 0.35,
                targetYear: 2033,
                survivalNote: "spostarsi verso architettura di sistemi AI, cybersecurity e MLOps — le aree più richieste dei prossimi anni",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'ingegnere informatico rischia l'AI? Analisi del futuro per chi progetta sistemi software e hardware complessi."
            },
            ingegnere_biomedico: {
                title: "Ingegnere Biomedico",
                icon: "🫀",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2035,
                survivalNote: "puntare su AI medicale, dispositivi wearable e navigare il complesso framework regolatorio MDR",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Ingegnere biomedico: rischio AI e futuro professionale. Chi progetta dispositivi medici nell'era dell'intelligenza artificiale."
            },
            tecnico_informatico: {
                title: "Tecnico Informatico / IT Support",
                icon: "🖥️",
                humanAccuracy: 0.69,
                aiAccuracy: 0.66,
                riskFactor: 0.62,
                targetYear: 2029,
                survivalNote: "spostarsi da supporto reattivo a gestione proattiva della sicurezza e automazione infrastruttura",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il tecnico informatico di supporto sarà sostituito dall'AI? Analisi del rischio per helpdesk e IT support specialist."
            },
            geometra_catasto: {
                title: "Geometra Catastale",
                icon: "📐",
                humanAccuracy: 0.66,
                aiAccuracy: 0.71,
                riskFactor: 0.68,
                targetYear: 2028,
                survivalNote: "abbandonare le pratiche catastali (già in forte automazione) e spostarsi su valutazioni, efficienza energetica e BIM",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il geometra catastale sarà automatizzato dall'AI? Rischio elevato per chi si occupa di pratiche catastali e successioni."
            },
            perito_industriale: {
                title: "Perito Industriale",
                icon: "🔧",
                humanAccuracy: 0.76,
                aiAccuracy: 0.53,
                riskFactor: 0.48,
                targetYear: 2031,
                survivalNote: "diventare CTU del tribunale e specializzarsi in perizie su impianti industriali complessi e sinistri",
                defaultHumanSalary: 36000,
                defaultHumanExtra: 10800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il perito industriale rischia la sostituzione AI? Analisi del futuro per periti meccanici, elettrici e chimici."
            },
            analista_credito: {
                title: "Analista del Credito",
                icon: "💳",
                humanAccuracy: 0.64,
                aiAccuracy: 0.75,
                riskFactor: 0.72,
                targetYear: 2028,
                survivalNote: "spostarsi su operazioni strutturate, M&A lending e gestione NPL dove il giudizio umano è ancora determinante",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "L'analista del credito bancario sarà sostituito dall'AI? Rischio molto elevato per chi valuta affidabilità e rating aziendali."
            },
            consulente_fiscale: {
                title: "Consulente Fiscale / Tax Consultant",
                icon: "💰",
                humanAccuracy: 0.70,
                aiAccuracy: 0.64,
                riskFactor: 0.60,
                targetYear: 2029,
                survivalNote: "spostarsi su fiscalità internazionale, transfer pricing e pianificazione patrimoniale complessa",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il consulente fiscale sarà sostituito dall'AI? Rischio e opportunità per chi si occupa di fiscalità d'impresa e personale."
            },
            actuario: {
                title: "Attuario",
                icon: "📈",
                humanAccuracy: 0.78,
                aiAccuracy: 0.51,
                riskFactor: 0.45,
                targetYear: 2031,
                survivalNote: "diventare ponte tra modellistica tradizionale e AI, con focus su rischi emergenti (clima, cyber, pandemia)",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'attuario sarà automatizzato dall'AI? Analisi del rischio per chi costruisce modelli statistici in assicurazioni e finanza."
            },
            private_banker: {
                title: "Private Banker / Wealth Manager",
                icon: "🏦",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2033,
                survivalNote: "la fiducia con clienti UHNW non è replicabile dall'AI. Specializzarsi in family office e pianificazione intergenerazionale",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il private banker sarà sostituito dai robo-advisor AI? Analisi del futuro per chi gestisce grandi patrimoni."
            },
            assicuratore: {
                title: "Agente di Assicurazione",
                icon: "🛡️",
                humanAccuracy: 0.68,
                aiAccuracy: 0.69,
                riskFactor: 0.65,
                targetYear: 2029,
                survivalNote: "spostarsi da vendita prodotti a consulenza risk management per PMI e protezione patrimoniale complessa",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "L'agente assicurativo sarà sostituito dall'AI? Analisi del rischio elevato per chi vende polizze vita, auto e danni."
            },
            pubblicitario: {
                title: "Pubblicitario / Art Director",
                icon: "🎨",
                humanAccuracy: 0.72,
                aiAccuracy: 0.60,
                riskFactor: 0.55,
                targetYear: 2030,
                survivalNote: "diventare direttore creativo strategico: l'AI genera esecuzioni, gli umani definiscono la visione e l'identità di marca",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il pubblicitario e art director sarà sostituito dall'AI generativa? Rischio e futuro per chi crea campagne advertising."
            },
            ufficio_stampa: {
                title: "Addetto Ufficio Stampa / PR",
                icon: "📰",
                humanAccuracy: 0.75,
                aiAccuracy: 0.55,
                riskFactor: 0.50,
                targetYear: 2031,
                survivalNote: "spostarsi su crisis communication e relazioni istituzionali, dove la fiducia personale è insostituibile",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "L'addetto stampa e il PR manager rischiano con l'AI? Analisi del futuro per chi gestisce relazioni con i media."
            },
            giornalista_investigativo: {
                title: "Giornalista Investigativo",
                icon: "🔍",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2036,
                survivalNote: "il giornalismo investigativo ha un futuro solido: le fonti umane, la protezione delle fonti e l'etica non sono automatizzabili",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il giornalismo investigativo sarà sostituito dall'AI? Analisi del rischio per chi fa inchieste e giornalismo di approfondimento."
            },
            podcaster: {
                title: "Podcaster / Audio Content Creator",
                icon: "🎙️",
                humanAccuracy: 0.79,
                aiAccuracy: 0.48,
                riskFactor: 0.42,
                targetYear: 2032,
                survivalNote: "specializzarsi in nicchie verticali con community forte: la voce e la personalità autentiche restano differenzianti",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il podcaster sarà sostituito dall'AI? Rischio e opportunità per chi crea contenuti audio in Italia."
            },
            fotografo_commerciale: {
                title: "Fotografo Commerciale",
                icon: "📷",
                humanAccuracy: 0.71,
                aiAccuracy: 0.62,
                riskFactor: 0.58,
                targetYear: 2029,
                survivalNote: "spostarsi da fotografia commerciale (già in crisi) a documentaristica, fine-art e direzione creativa su produzioni complesse",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il fotografo commerciale sarà sostituito dall'AI generativa? Rischio elevato per la fotografia di prodotto, stock e advertising."
            },
            recruiter: {
                title: "Recruiter / Talent Scout",
                icon: "👥",
                humanAccuracy: 0.72,
                aiAccuracy: 0.60,
                riskFactor: 0.55,
                targetYear: 2030,
                survivalNote: "spostarsi da selezione operativa (già automatizzata) a executive search e costruzione employer brand",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il recruiter sarà sostituito dall'AI? Analisi del rischio per chi seleziona personale, fa screening CV e gestisce colloqui."
            },
            hr_analytics: {
                title: "HR Analytics Specialist",
                icon: "📊",
                humanAccuracy: 0.80,
                aiAccuracy: 0.46,
                riskFactor: 0.40,
                targetYear: 2032,
                survivalNote: "diventare traduttore tra dati HR e decisioni strategiche: l'AI genera i modelli, serve chi li interpreta e li porta al board",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'HR analytics specialist sarà sostituito dall'AI? Profilo emergente tra i più richiesti e tra i più a rischio di automazione."
            },
            coach_aziendale: {
                title: "Coach Aziendale / Executive Coach",
                icon: "🧭",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2038,
                survivalNote: "professione protetta dalla relazione fiduciaria e dalla presenza umana. Acquisire certificazione ICF avanzata",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il coach aziendale sarà sostituito dall'AI? Analisi del rischio per executive coach e business coach professionisti."
            },
            venditore_porta_a_porta: {
                title: "Venditore Porta a Porta / Field Sales",
                icon: "🚪",
                humanAccuracy: 0.70,
                aiAccuracy: 0.64,
                riskFactor: 0.60,
                targetYear: 2029,
                survivalNote: "spostarsi dalla vendita a volume verso vendita consultiva B2B enterprise con cicli di vendita lunghi",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il venditore porta a porta sarà sostituito dall'AI e dall'e-commerce? Analisi del rischio per la vendita diretta."
            },
            buyer_moda: {
                title: "Buyer Moda / Fashion Buyer",
                icon: "👗",
                humanAccuracy: 0.74,
                aiAccuracy: 0.57,
                riskFactor: 0.52,
                targetYear: 2030,
                survivalNote: "spostarsi su curaziole editoriale e sostenibilità, dove il gusto umano e l'etica restano differenzianti",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il buyer di moda sarà sostituito dall'AI? Rischio e futuro per chi seleziona collezioni e gestisce gli acquisti retail fashion."
            },
            agente_commerciale: {
                title: "Agente Commerciale / Rappresentante",
                icon: "💼",
                humanAccuracy: 0.71,
                aiAccuracy: 0.62,
                riskFactor: 0.58,
                targetYear: 2029,
                survivalNote: "diventare key account manager su clienti strategici: meno clienti, più valore per relazione",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "L'agente commerciale sarà sostituito dall'AI? Analisi del rischio per rappresentanti e agenti di commercio in Italia."
            },
            web_designer: {
                title: "Web Designer",
                icon: "🎨",
                humanAccuracy: 0.69,
                aiAccuracy: 0.66,
                riskFactor: 0.62,
                targetYear: 2028,
                survivalNote: "spostarsi da esecuzione grafica (AI la gestirà) a UX research, design system strategico e direzione creativa",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il web designer sarà sostituito dall'AI? Rischio elevato per chi progetta siti web e interfacce grafiche."
            },
            social_media_manager: {
                title: "Social Media Manager",
                icon: "📱",
                humanAccuracy: 0.70,
                aiAccuracy: 0.64,
                riskFactor: 0.60,
                targetYear: 2029,
                survivalNote: "spostarsi da creazione contenuti (AI la gestirà) a strategia, partnership creator e gestione crisi social",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il social media manager sarà sostituito dall'AI? Analisi del rischio per chi gestisce profili aziendali sui social."
            },
            e_commerce_specialist: {
                title: "E-commerce Specialist",
                icon: "🛒",
                humanAccuracy: 0.72,
                aiAccuracy: 0.60,
                riskFactor: 0.55,
                targetYear: 2030,
                survivalNote: "spostarsi da operatività (automatizzata) a strategia omnichannel e internazionalizzazione",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "L'e-commerce specialist sarà sostituito dall'AI? Analisi del rischio per chi gestisce negozi online e marketplace."
            },
            data_engineer_senior: {
                title: "Data Engineer Senior",
                icon: "🔄",
                humanAccuracy: 0.84,
                aiAccuracy: 0.39,
                riskFactor: 0.32,
                targetYear: 2034,
                survivalNote: "spostarsi su architettura data mesh, real-time streaming e governance dati — aree con alta domanda",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il data engineer senior sarà sostituito dall'AI? Analisi del rischio per chi costruisce pipeline dati e infrastrutture analytics."
            },
            cybersecurity_analyst: {
                title: "Analista di Cybersecurity",
                icon: "🔒",
                humanAccuracy: 0.88,
                aiAccuracy: 0.33,
                riskFactor: 0.25,
                targetYear: 2036,
                survivalNote: "settore in crescita strutturale: gli attacchi AI-powered richiedono difensori umani esperti. Focus su red team e AI security",
                defaultHumanSalary: 38000,
                defaultHumanExtra: 11400,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il cybersecurity analyst sarà sostituito dall'AI? Analisi del rischio per chi protegge le aziende dagli attacchi informatici."
            },
            falegname_artigiano: {
                title: "Falegname Artigiano / Ebanista",
                icon: "🪑",
                humanAccuracy: 0.89,
                aiAccuracy: 0.30,
                riskFactor: 0.22,
                targetYear: 2038,
                survivalNote: "l'artigianato di alta qualità è strutturalmente protetto: puntare su pezzi unici, restauro e made in Italy autentico",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Il falegname artigiano sarà sostituito dall'AI e dalla robotica? Analisi del rischio per ebanisti e mobilieri d'arte."
            },
            sarto: {
                title: "Sarto / Modellista",
                icon: "✂️",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2035,
                survivalNote: "l'alta sartoria su misura è insostituibile: puntare sul lusso e sul made in Italy con clientela premium",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il sarto e modellista sarà sostituito dall'AI? Analisi del rischio per chi lavora nell'alta moda e sartoria su misura."
            },
            orafo: {
                title: "Orafo / Gioielliere",
                icon: "💎",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2036,
                survivalNote: "puntare su pezzi unici, collaborazioni con designer e certificazione gemologica per perizie",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "L'orafo artigiano sarà sostituito dall'AI e dalla stampa 3D? Analisi del rischio per gioiellieri e orafi italiani."
            },
            cuoco_pizzaiolo: {
                title: "Cuoco / Pizzaiolo",
                icon: "🍕",
                humanAccuracy: 0.88,
                aiAccuracy: 0.32,
                riskFactor: 0.24,
                targetYear: 2037,
                survivalNote: "la cucina creativa è strutturalmente umana. Costruire un brand personale e puntare su esperienze gastronomiche uniche",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 4200,
                defaultAiSetup: 16000,
                description: "Il cuoco e il pizzaiolo saranno sostituiti dai robot? Analisi del rischio per chef e pizzaioli in Italia."
            },
            pasticcere_artigiano: {
                title: "Pasticcere Artigiano",
                icon: "🍰",
                humanAccuracy: 0.87,
                aiAccuracy: 0.33,
                riskFactor: 0.26,
                targetYear: 2036,
                survivalNote: "puntare su alta pasticceria artistica e costruire un brand digitale riconoscibile per resistere alla standardizzazione",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 4000,
                defaultAiSetup: 15000,
                description: "Il pasticcere artigiano sarà sostituito dai robot e dall'AI? Analisi del futuro per chi lavora nella pasticceria di alta qualità."
            },
            guida_turistica: {
                title: "Guida Turistica",
                icon: "🗺️",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2033,
                survivalNote: "specializzarsi in esperienze di nicchia (enogastronomia, arte contemporanea, siti minori) che l'AI non può replicare",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "La guida turistica sarà sostituita dall'AI e dalle audioguide intelligenti? Analisi del rischio per guide autorizzate in Italia."
            },
            receptionist_hotel: {
                title: "Receptionist Hotel / Front Office",
                icon: "🏨",
                humanAccuracy: 0.66,
                aiAccuracy: 0.71,
                riskFactor: 0.68,
                targetYear: 2028,
                survivalNote: "spostarsi su luxury hospitality, revenue management o concierge di alto livello per hotel 5 stelle",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "Il receptionist di hotel sarà sostituito dall'AI e dai check-in automatici? Rischio elevato per il front office alberghiero."
            },
            travel_planner: {
                title: "Travel Planner / Agente di Viaggio",
                icon: "✈️",
                humanAccuracy: 0.69,
                aiAccuracy: 0.66,
                riskFactor: 0.62,
                targetYear: 2029,
                survivalNote: "spostarsi su luxury travel e destinazioni ultra-specializzate dove la competenza umana crea valore insostituibile",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 450,
                defaultAiSetup: 1500,
                description: "L'agente di viaggio sarà sostituito dall'AI? Analisi del rischio per chi pianifica viaggi e vacanze su misura."
            },
            wedding_planner: {
                title: "Wedding Planner / Event Manager",
                icon: "💒",
                humanAccuracy: 0.86,
                aiAccuracy: 0.35,
                riskFactor: 0.28,
                targetYear: 2036,
                survivalNote: "professione fortemente relazionale e creativa. Puntare su destination wedding di lusso e eventi aziendali premium",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 2800,
                defaultAiSetup: 8000,
                description: "Il wedding planner sarà sostituito dall'AI? Analisi del rischio per organizzatori di matrimoni ed eventi in Italia."
            },
            dirigente_pa: {
                title: "Dirigente Pubblica Amministrazione",
                icon: "🏛️",
                humanAccuracy: 0.78,
                aiAccuracy: 0.51,
                riskFactor: 0.45,
                targetYear: 2031,
                survivalNote: "specializzarsi nella digitalizzazione della PA e nel project management PNRR, dove la domanda è elevata",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il dirigente della Pubblica Amministrazione rischia l'AI? Analisi del rischio per chi guida enti locali, ministeri e aziende pubbliche."
            },
            assistente_amministrativo_pa: {
                title: "Assistente Amministrativo PA",
                icon: "📁",
                humanAccuracy: 0.61,
                aiAccuracy: 0.80,
                riskFactor: 0.78,
                targetYear: 2027,
                survivalNote: "sviluppare competenze digitali avanzate e spostarsi su ruoli di supporto alla trasformazione digitale della PA",
                defaultHumanSalary: 28000,
                defaultHumanExtra: 8400,
                defaultAiMonthly: 250,
                defaultAiSetup: 800,
                description: "L'assistente amministrativo della PA sarà automatizzato dall'AI? Rischio molto elevato per i ruoli impiegatizi nell'ente pubblico."
            },
            preparatore_atletico: {
                title: "Preparatore Atletico",
                icon: "🏋️",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2035,
                survivalNote: "integrare l'AI come strumento di analisi mantenendo la relazione diretta atleta-preparatore come core del lavoro",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il preparatore atletico sarà sostituito dall'AI e dai wearable? Analisi del rischio per chi allena atleti professionisti."
            },
            istruttore_fitness: {
                title: "Istruttore Fitness / Personal Trainer Online",
                icon: "💪",
                humanAccuracy: 0.79,
                aiAccuracy: 0.48,
                riskFactor: 0.42,
                targetYear: 2032,
                survivalNote: "costruire un personal brand digitale forte e specializzarsi in nicchie (over 60, post-infortunio, performance atleti amatoriali)",
                defaultHumanSalary: 22000,
                defaultHumanExtra: 6600,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'istruttore di fitness e il personal trainer online saranno sostituiti dall'AI? Analisi del rischio per chi lavora in palestra."
            },
            chimico: {
                title: "Chimico / Ricercatore Chimico",
                icon: "⚗️",
                humanAccuracy: 0.80,
                aiAccuracy: 0.46,
                riskFactor: 0.40,
                targetYear: 2032,
                survivalNote: "specializzarsi in cheminformatica e drug discovery assistita dall'AI, dove la chimici resta insostituibile come guida",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il chimico sarà sostituito dall'AI? Analisi del rischio per chi lavora in laboratorio, R&D farmaceutico e controllo qualità."
            },
            fisico: {
                title: "Fisico / Ricercatore di Fisica",
                icon: "⚛️",
                humanAccuracy: 0.85,
                aiAccuracy: 0.37,
                riskFactor: 0.30,
                targetYear: 2035,
                survivalNote: "diventare ponte tra fisica e AI (quantum ML, AI per la scoperta scientifica) dove la domanda è in forte crescita",
                defaultHumanSalary: 34000,
                defaultHumanExtra: 10200,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il fisico sarà sostituito dall'AI? Analisi del rischio per ricercatori di fisica teorica, sperimentale e applicata."
            },
            psicologo_clinico: {
                title: "Psicologo Clinico",
                icon: "🧠",
                humanAccuracy: 0.91,
                aiAccuracy: 0.26,
                riskFactor: 0.18,
                targetYear: 2038,
                survivalNote: "la relazione terapeutica è profondamente umana. Specializzarsi in trauma, disturbi complessi e psicologia forense",
                defaultHumanSalary: 32000,
                defaultHumanExtra: 9600,
                defaultAiMonthly: 1800,
                defaultAiSetup: 4000,
                description: "Lo psicologo clinico sarà sostituito dall'AI e dai chatbot terapeutici? Analisi del rischio per chi esercita la psicoterapia."
            },
            esperto_energia: {
                title: "Esperto di Energia / Energy Manager",
                icon: "🌱",
                humanAccuracy: 0.81,
                aiAccuracy: 0.44,
                riskFactor: 0.38,
                targetYear: 2032,
                survivalNote: "specializzarsi in comunità energetiche rinnovabili e storage: settore in forte crescita con pochi esperti disponibili",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'energy manager sarà sostituito dall'AI? Analisi del rischio per chi gestisce efficienza energetica e transizione verde."
            },
            geologo: {
                title: "Geologo",
                icon: "🏔️",
                humanAccuracy: 0.82,
                aiAccuracy: 0.42,
                riskFactor: 0.35,
                targetYear: 2033,
                survivalNote: "specializzarsi in rischio idrogeologico e sismico, tematiche con crescente domanda nella pianificazione territoriale",
                defaultHumanSalary: 30000,
                defaultHumanExtra: 9000,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "Il geologo sarà sostituito dall'AI? Analisi del rischio per geologi ambientali, di progetto e di rischio idrogeologico."
            },
            agronomo_consulente: {
                title: "Agronomo Consulente",
                icon: "🌾",
                humanAccuracy: 0.80,
                aiAccuracy: 0.46,
                riskFactor: 0.40,
                targetYear: 2032,
                survivalNote: "diventare esperto di agricoltura di precisione e carbon farming: due mercati in forte crescita nei prossimi 10 anni",
                defaultHumanSalary: 26000,
                defaultHumanExtra: 7800,
                defaultAiMonthly: 900,
                defaultAiSetup: 2500,
                description: "L'agronomo consulente sarà sostituito dall'AI e dall'agricoltura di precisione? Analisi del rischio per agronomi liberi professionisti."
            },

};
