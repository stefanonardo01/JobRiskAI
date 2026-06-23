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
    }
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
            }
};
