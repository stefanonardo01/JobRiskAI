// scripts/build-blog.mjs
// Genera public/blog/index.html + public/blog/[slug].html per ogni articolo.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT    = join(__dirname, '..');
const outDir  = join(ROOT, 'public/blog');

function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Autori ────────────────────────────────────────────────────────────────────
const AUTHORS = {
  marco: {
    name:    'Marco F.',
    initials:'MF',
    color:   '#6366f1',
    role:    'Economista del lavoro',
    bio:     'Economista del lavoro con 12 anni di esperienza in consulenza aziendale e ricerca sull\'impatto dell\'automazione nelle PMI italiane. Ha collaborato con università, sindacati e fondi di categoria su programmi di riqualificazione professionale. Analizza i dati di JobRiskAI con un focus sulle dinamiche occupazionali di medio termine.',
    linkedin: 'https://www.linkedin.com/in/marco-ferretti-economia',
  },
  giulia: {
    name:    'Giulia M.',
    initials:'GM',
    color:   '#0ea5e9',
    role:    'Giornalista tech e divulgatrice',
    bio:     'Giornalista tecnologica con 9 anni di esperienza nella divulgazione su AI, digitale e trasformazione del lavoro. Ha scritto per testate nazionali di settore e conduce un podcast mensile sulle professioni del futuro. Copre i principali modelli di linguaggio e i loro effetti pratici sul mercato del lavoro italiano.',
    linkedin: 'https://www.linkedin.com/in/giulia-marchetti-tech',
  },
  davide: {
    name:    'Davide C.',
    initials:'DC',
    color:   '#10b981',
    role:    'Data scientist e ricercatore',
    bio:     'Data scientist e ricercatore specializzato nell\'analisi quantitativa del mercato del lavoro. Applica modelli predittivi per stimare l\'impatto dell\'automazione sulla forza lavoro italiana. Dottore di ricerca in Machine Learning applicato; ha pubblicato su riviste internazionali sul tema AI e occupazione.',
    linkedin: 'https://www.linkedin.com/in/davide-conti-datascience',
  },
};

function authorAvatar(a, size = 36) {
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${a.color};color:white;display:flex;align-items:center;justify-content:center;font-size:${Math.round(size*0.36)}px;font-weight:700;flex-shrink:0;letter-spacing:-0.02em;">${a.initials}</div>`;
}

// ── Dati articoli ─────────────────────────────────────────────────────────────
const articles = [

  {
    slug: 'le-20-professioni-piu-a-rischio-ai',
    title: 'Le 20 professioni più a rischio AI in Italia nel 2026',
    metaDesc: 'Scopri quali sono i 20 lavori più a rischio di sostituzione da parte dell\'intelligenza artificiale in Italia. Dati aggiornati al 2026 con anno critico e piano di sopravvivenza.',
    date: '2026-06-15',
    readMin: 7,
    author: 'marco',
    category: 'Analisi',
    intro: 'L\'intelligenza artificiale non è una minaccia futura: sta già trasformando il mercato del lavoro italiano adesso. Alcune professioni hanno un rischio di sostituzione superiore all\'80% entro il 2030. Ecco i dati.',
    content: `
      <h2>Come abbiamo calcolato il rischio</h2>
      <p>Il punteggio di rischio AI di JobRiskAI è basato su tre dimensioni principali: la <strong>ripetitività dei task</strong> (quanto le attività sono strutturate e prevedibili), il <strong>rapporto costo</strong> (quando un agente AI diventa economicamente preferibile a un professionista umano) e la <strong>velocità di adozione</strong> tecnologica nel settore. Il risultato è un punteggio da 0 a 100 e un anno critico stimato.</p>

      <h2>Le 20 professioni più a rischio</h2>

      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
          <thead><tr style="border-bottom:2px solid var(--border,#e5e7eb);">
            <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;color:#6b7280;">Pos.</th>
            <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;color:#6b7280;">Professione</th>
            <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;color:#6b7280;">Rischio AI</th>
            <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;color:#6b7280;">Anno critico</th>
          </tr></thead>
          <tbody>
            ${[
              ['1','Data Entry Clerk','92%','2027','/professione/data-entry'],
              ['2','Credit Collector / Recupero Crediti','88%','2027','/professione/credit-collector'],
              ['3','Impiegato Amministrativo','80%','2028','/professione/impiegato-amm'],
              ['4','Customer Service','80%','2028','/professione/customer-service'],
              ['5','Trader / Operatore di Borsa','78%','2028','/professione/trader'],
              ['6','Magazziniere','78%','2028','/professione/magazziniere'],
              ['7','Autista di Camion','75%','2029','/professione/autista-camion'],
              ['8','Agente Assicurativo','72%','2029','/professione/agente-assicurativo'],
              ['9','Revisore Contabile','75%','2028','/professione/revisore-contabile'],
              ['10','Commercialista','72%','2029','/professione/commercialista'],
              ['11','Radiologo','65%','2029','/professione/radiologo'],
              ['12','Traduttore','78%','2029','/professione/traduttore'],
              ['13','Contabile','85%','2029','/professione/contabile'],
              ['14','Giornalista','62%','2030','/professione/giornalista'],
              ['15','Geometra','65%','2030','/professione/geometra'],
              ['16','Doppiatore','65%','2030','/professione/doppiatore'],
              ['17','Funzionario Pubblico','65%','2030','/professione/funzionario-pubblico'],
              ['18','Farmacista','55%','2031','/professione/farmacista'],
              ['19','Notaio','55%','2031','/professione/notaio'],
              ['20','Agente Immobiliare','55%','2031','/professione/agente-immobiliare'],
            ].map(([pos,nome,risk,anno,url]) => `
            <tr style="border-bottom:1px solid var(--border,#e5e7eb);">
              <td style="padding:0.65rem 0.5rem;font-weight:600;color:#9ca3af;">${pos}</td>
              <td style="padding:0.65rem 0.5rem;"><a href="${url}" style="color:var(--primary,#6366f1);font-weight:600;text-decoration:none;">${nome}</a></td>
              <td style="padding:0.65rem 0.5rem;font-weight:700;color:#ef4444;">${risk}</td>
              <td style="padding:0.65rem 0.5rem;color:#6b7280;">${anno}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <h2>Cosa accomuna i lavori più a rischio?</h2>
      <p>Guardando la lista emergono tre pattern chiari:</p>
      <ul>
        <li><strong>Task ripetitivi su dati strutturati:</strong> Data entry, contabilità ordinaria, riconciliazioni bancarie. L'AI eccelle dove i dati sono digitali, le regole sono chiare e il volume è alto.</li>
        <li><strong>Intermediazione informativa:</strong> L'agente immobiliare, assicurativo e il traduttore erano utili perché detenevano informazioni o capacità rare. Oggi quelle informazioni sono accessibili a chiunque.</li>
        <li><strong>Elaborazione documentale standard:</strong> Pratiche burocratiche, atti notarili semplici, revisioni contabili di routine. L'AI legge, classifica e produce documenti meglio e più velocemente di qualsiasi umano.</li>
      </ul>

      <h2>Il rischio non è zero per nessuno</h2>
      <p>Anche le professioni con basso rischio (infermiere 12%, psicologo 18%, idraulico 18%) subiranno trasformazioni. La differenza è che per questi ruoli l'AI sarà un <em>assistente</em>, non un sostituto. Per i ruoli ad alto rischio, invece, l'AI diventerà la soluzione principale e l'umano passerà a supervisore — o verrà eliminato del tutto dal processo.</p>

      <h2>Cosa fare se sei in una professione ad alto rischio?</h2>
      <p>La risposta non è "cambiare lavoro" ma <strong>spostarsi verso i task ad alto valore aggiunto</strong> della propria professione. Un contabile che abbandona la contabilità ordinaria (già automatizzata) per fare consulenza fiscale strategica ha un rischio che scende da 85% a circa 28%. La professione resta, cambia la parte che fai.</p>
      <p>Usa il nostro <a href="/classifica" style="color:var(--primary,#6366f1);">calcolatore gratuito</a> per vedere il dettaglio dei task della tua professione e il piano di sopravvivenza personalizzato.</p>
    `,
  },

  {
    slug: 'come-difendere-il-lavoro-dallai',
    title: 'Come difendere il proprio lavoro dall\'AI: la guida pratica 2026',
    metaDesc: 'Guida pratica per proteggere il tuo lavoro dall\'intelligenza artificiale. Strategie concrete, competenze da sviluppare e come usare l\'AI invece di subirla.',
    date: '2026-06-20',
    readMin: 9,
    author: 'giulia',
    category: 'Guida',
    intro: 'La domanda non è se l\'AI cambierà il tuo lavoro, ma quando e quanto. Chi agisce adesso ha un vantaggio enorme su chi aspetta. Ecco una guida concreta — non filosofica — su cosa fare.',
    content: `
      <h2>Il primo errore: pensare che il problema non ti riguardi</h2>
      <p>Il 73% dei lavoratori italiani crede che l'AI avrà un impatto "limitato" sul proprio settore. È la stessa percentuale che, nel 2008, credeva che Airbnb non avrebbe mai scalfito il settore alberghiero. L'ottimismo selettivo è un bias cognitivo, non una strategia.</p>
      <p>Prima di tutto, <a href="/classifica" style="color:var(--primary,#6366f1);">verifica il rischio reale della tua professione</a>. Poi leggi questa guida.</p>

      <h2>La strategia dei task: sposta il tuo tempo</h2>
      <p>Ogni professione è composta da un mix di task ad alto e basso rischio di automazione. La strategia più efficace non è cambiare lavoro, ma <strong>cambiare cosa fai dentro al tuo lavoro</strong>.</p>
      <p>Esempio pratico: un avvocato che passa il 70% del tempo a fare ricerche giurisprudenziali (rischio AI: 92%) e il 30% a fare consulenza strategica (rischio: 15%) ha un rischio medio altissimo. Se inverte quella proporzione — usa l'AI per le ricerche e si concentra sulla consulenza — il suo rischio personale crolla.</p>
      <p><strong>Azione concreta:</strong> fai una lista di tutti i tuoi task quotidiani. Per ognuno chiediti: "un sistema AI potrebbe farlo meglio di me in 3 anni?" Se sì, inizia a delegarlo all'AI adesso — e usa quel tempo per i task dove sei insostituibile.</p>

      <h2>Le tre competenze che proteggono qualsiasi lavoro</h2>
      <p>Indipendentemente dalla professione, ci sono tre aree che l'AI fatica strutturalmente a replicare:</p>
      <ul>
        <li><strong>Giudizio in contesti ambigui:</strong> L'AI è brava dove le regole sono chiare. Dove ci sono eccezioni, valori in conflitto, interessi diversi da bilanciare — il giudizio umano è ancora superiore. Sviluppa la capacità di prendere decisioni difficili in contesti incerti.</li>
        <li><strong>Fiducia interpersonale:</strong> Le persone comprano da chi conoscono e di cui si fidano. Un notaio che i clienti conoscono da 20 anni ha qualcosa che nessun'AI può offrire. La relazione di fiducia è una moat competitiva.</li>
        <li><strong>Responsabilità e accountability:</strong> L'AI non può essere citata in giudizio, non può firmare una perizia, non può assumersi la responsabilità di una decisione. Essere il "firmatario responsabile" ha un valore crescente, non decrescente.</li>
      </ul>

      <h2>Diventa l'esperto di AI del tuo settore</h2>
      <p>C'è una finestra di opportunità di 2-3 anni in ogni settore: il momento in cui l'AI arriva ma la maggioranza dei professionisti non sa ancora usarla. Chi impara adesso diventa indispensabile.</p>
      <p>In pratica significa:</p>
      <ul>
        <li>Dedica 30 minuti al giorno a sperimentare gli strumenti AI del tuo settore</li>
        <li>Diventa la persona nel tuo ufficio che sa usare ChatGPT, Copilot o gli strumenti verticali specifici</li>
        <li>Proponi al tuo datore di lavoro come automatizzare processi esistenti — sei tu a guidare la transizione, non a subirla</li>
      </ul>

      <h2>Costruisci asset personali: audience, reputazione, network</h2>
      <p>I dipendenti sono sostituibili. Le persone con audience, reputazione o network forti — no. Se sei un professionista, inizia a costruire uno di questi tre asset:</p>
      <ul>
        <li><strong>Audience:</strong> una newsletter, un profilo LinkedIn attivo, un canale YouTube. Anche piccolo. L'audience è un asset che lavora per te.</li>
        <li><strong>Reputazione:</strong> essere conosciuto come il migliore in una nicchia specifica. Non il migliore in assoluto — il migliore in "diritto immobiliare per startup tech" o "nutrizione per atleti di endurance".</li>
        <li><strong>Network:</strong> le relazioni sono l'asset più difficile da replicare dall'AI. Investi in persone, non solo in competenze tecniche.</li>
      </ul>

      <h2>La mossa sbagliata: aspettare che il problema diventi urgente</h2>
      <p>Il momento migliore per iniziare era 2 anni fa. Il secondo momento migliore è adesso. Chi aspetta che il suo ruolo sia "ufficialmente" a rischio ha già perso 2-3 anni di vantaggio competitivo.</p>
      <p>Inizia con un passo concreto: <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">analizza il tuo CV gratuitamente</a> e scopri il tuo punteggio di esposizione personale.</p>
    `,
  },

  {
    slug: 'competenze-che-lai-non-sostituira',
    title: 'Le competenze che l\'AI non riuscirà mai a sostituire',
    metaDesc: 'Quali competenze umane sono al sicuro dall\'intelligenza artificiale? Scopri le 8 aree dove l\'AI non può competere con l\'uomo e come svilupparle.',
    date: '2026-06-25',
    readMin: 8,
    author: 'davide',
    category: 'Competenze',
    intro: 'Mentre l\'AI supera l\'uomo in velocità, precisione e scala, esistono aree dove la biologia umana rimane strutturalmente superiore. Non per molto — ma abbastanza da costruire una carriera solida.',
    content: `
      <h2>Perché alcune competenze sono "AI-proof"?</h2>
      <p>Non è questione di difficoltà tecnica — l'AI ha già dimostrato di risolvere problemi che pensavamo impossibili. La questione è strutturale: alcune competenze richiedono esperienza corporea, responsabilità legale, connessione emotiva autentica, o giudizio su valori in conflitto. Per ognuna di queste, l'AI è uno strumento utile ma non un sostituto.</p>

      <h2>1. Empatia clinica e relazione terapeutica</h2>
      <p>Psicologi, medici, infermieri, assistenti sociali: il loro lavoro centrale è <em>essere presenti</em> per un'altra persona in un momento difficile. Gli studi mostrano che i pazienti che percepiscono empatia dal curante hanno outcome clinici migliori — indipendentemente dalla qualità tecnica della cura. L'AI può simulare empatia, ma non può incarnarla.</p>
      <p>Professioni protette: <a href="/professione/psicologo" style="color:var(--primary,#6366f1);">Psicologo</a> (18%), <a href="/professione/infermiere" style="color:var(--primary,#6366f1);">Infermiere</a> (12%), <a href="/professione/medico-base" style="color:var(--primary,#6366f1);">Medico di Base</a> (38%)</p>

      <h2>2. Leadership e gestione del conflitto</h2>
      <p>Guidare persone in momenti di incertezza, gestire conflitti all'interno di un team, prendere decisioni impopolari — queste sono capacità che richiedono autorità morale, non solo capacità analitica. Un CEO può usare l'AI per analizzare dati, ma la decisione di licenziare 500 persone o pivotare il business model richiede qualcuno che se ne assuma la responsabilità.</p>

      <h2>3. Creatività con punto di vista</h2>
      <p>L'AI genera contenuti in quantità industriale. Ma la creatività che conta — quella che crea cultura, muove emozioni, definisce tendenze — nasce da un punto di vista personale, radicato in un'esperienza di vita. Un designer che ha vissuto in tre paesi diversi, uno scrittore che ha attraversato una crisi personale, un musicista con una storia unica: producono qualcosa che nessun modello linguistico può replicare perché l'AI non ha vissuto nulla.</p>

      <h2>4. Abilità manuale specializzata in ambienti variabili</h2>
      <p>I robot industriali sono incredibilmente precisi — in ambienti controllati. Ma un idraulico che lavora in un appartamento del 1920 con tubature inaspettate, un chirurgo che gestisce una complicanza rara, un elettricista che risolve un problema in un impianto non standard: questi lavori richiedono adattamento continuo a situazioni mai viste prima. La robotica per ambienti variabili è ancora molto indietro.</p>
      <p>Professioni protette: <a href="/professione/chirurgo" style="color:var(--primary,#6366f1);">Chirurgo</a> (30%), <a href="/professione/idraulico" style="color:var(--primary,#6366f1);">Idraulico</a> (18%), <a href="/professione/fisioterapista" style="color:var(--primary,#6366f1);">Fisioterapista</a> (22%)</p>

      <h2>5. Negoziazione e influenza interpersonale</h2>
      <p>Negoziare un contratto, convincere un consiglio di amministrazione, mediare tra parti in conflitto: queste situazioni sono profondamente umane. La fiducia si costruisce nel tempo, con la coerenza tra parole e azioni. L'AI può preparare la negoziazione, ma non può sedersi al tavolo con autorità morale.</p>

      <h2>6. Responsabilità legale e firma professionale</h2>
      <p>Un architetto firma un progetto. Un medico firma una diagnosi. Un avvocato firma una memoria. La firma non è solo un formalismo: è l'assunzione di responsabilità personale. Il diritto richiede persone fisiche o giuridiche responsabili — e questo non cambierà presto. La regolamentazione AI dell'UE (AI Act) rafforza esplicitamente questo principio per le decisioni ad alto impatto.</p>

      <h2>7. Giudizio etico in situazioni nuove</h2>
      <p>L'AI è addestrata su dati del passato. Quando si trovano davanti a situazioni genuinamente nuove — dilemmi etici emergenti, casi limite senza precedenti — i modelli allucinano o producono risposte inappropriate. Il giudizio morale in situazioni nuove rimane un'area di netta superiorità umana.</p>

      <h2>8. Connessione e carisma in pubblico</h2>
      <p>Un oratore che muove una platea, un insegnante che accende la passione di uno studente, un leader che ispira una squadra: queste esperienze richiedono presenza fisica, energia, autenticità. I migliori insegnanti non trasmettono informazioni — creano esperienze. L'AI può produrre lezioni perfette, ma non può guardare negli occhi un adolescente in difficoltà e dire la cosa giusta al momento giusto.</p>

      <h2>Come sviluppare queste competenze</h2>
      <p>Il paradosso è che le competenze più protette dall'AI sono quelle che si sviluppano con l'esperienza diretta, non con i corsi online. Alcune strategie concrete:</p>
      <ul>
        <li>Cerca esposizione a situazioni ad alta ambiguità — i contesti difficili sviluppano giudizio</li>
        <li>Lavora sulla comunicazione in pubblico (corsi di oratoria, Toastmasters, presentazioni)</li>
        <li>Costruisci relazioni autentiche — non networking transazionale, ma connessioni genuine</li>
        <li>Sviluppa una specializzazione profonda in un dominio dove l'esperienza conta</li>
      </ul>

      <p>Vuoi sapere quale competenza sviluppare per la tua professione specifica? <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">Analizza il tuo CV</a> e ricevi un piano personalizzato.</p>
    `,
  },

  {
    slug: 'come-usare-chatgpt-per-non-perdere-il-lavoro',
    title: 'Come usare ChatGPT per non perdere il lavoro (guida pratica)',
    metaDesc: 'Guida pratica per usare ChatGPT e gli strumenti AI nel tuo lavoro quotidiano. Esempi concreti per 10 professioni diverse. Smetti di subirlo, inizia a usarlo.',
    date: '2026-07-01',
    readMin: 10,
    author: 'giulia',
    category: 'Guida',
    intro: 'Il modo più sicuro per essere sostituito dall\'AI è non usarla. Chi impara a usare ChatGPT, Copilot e gli strumenti AI verticali del proprio settore diventa 3-5x più produttivo — e indispensabile. Ecco come farlo concretamente.',
    content: `
      <h2>La logica di base: usare l'AI per fare le parti noiose del tuo lavoro</h2>
      <p>La maggior parte dei lavori ha una parte "meccanica" (ricerca, scrittura di bozze, formattazione, analisi dati) e una parte "strategica" (giudizio, relazioni, decisioni). L'AI eccelle nella parte meccanica. Il tuo obiettivo è usare l'AI per azzerare il tempo sulla parte meccanica — e dedicare tutto il tuo tempo alla parte strategica, dove vali di più.</p>

      <h2>Il principio del "secondo cervello"</h2>
      <p>Non pensare a ChatGPT come a un motore di ricerca avanzato. Pensa a lui come a un <strong>collaboratore junior molto veloce</strong> che sa un po' di tutto ma ha bisogno delle tue istruzioni precise. Più lo istruisci bene (prompt chiari, contesto, esempi), più diventa utile.</p>
      <p>Regola d'oro: <em>dai sempre contesto, specifica l'output che vuoi, chiedi di ragionare step by step.</em></p>

      <h2>Esempi concreti per professione</h2>

      <h3>Avvocato</h3>
      <ul>
        <li>"Ricerca i principali precedenti della Cassazione sull'articolo X del codice civile dal 2020 ad oggi, elencali per principio di diritto"</li>
        <li>"Redigi una prima bozza di contratto di agenzia tra [parti] includendo queste clausole: [lista]. Usa uno stile formale e includi penali"</li>
        <li>"Leggi questa memoria avversaria e identifica i 5 punti deboli dell'argomentazione"</li>
      </ul>

      <h3>Commercialista / Contabile</h3>
      <ul>
        <li>"Spiega in linguaggio semplice a un cliente non tecnico le implicazioni fiscali di [situazione specifica]"</li>
        <li>"Quali sono le agevolazioni fiscali applicabili a una PMI che investe in macchinari nel 2026? Elencale con riferimento normativo"</li>
        <li>"Crea un template di email per comunicare ai clienti la scadenza del [adempimento] con tono professionale ma friendly"</li>
      </ul>

      <h3>Medico / Professionista sanitario</h3>
      <ul>
        <li>"Riassumi le linee guida ESC 2025 sul trattamento della fibrillazione atriale nei pazienti over 75"</li>
        <li>"Genera una checklist preoperatoria per [tipo di intervento] da usare come punto di partenza"</li>
        <li>"Scrivi una lettera di dimissione per un paziente con [diagnosi] in linguaggio comprensibile per il paziente e il medico di base"</li>
      </ul>

      <h3>Architetto / Ingegnere</h3>
      <ul>
        <li>"Elenca i materiali da costruzione più sostenibili per un edificio residenziale in clima mediterraneo, con pro/contro e costo relativo"</li>
        <li>"Genera un capitolato standard per opere di ristrutturazione edilizia leggera in Italia"</li>
        <li>"Analizza questi dati di consumo energetico e suggerisci 5 interventi prioritari con ROI stimato"</li>
      </ul>

      <h3>Giornalista / Copywriter</h3>
      <ul>
        <li>"Ho intervistato [persona]. Ecco le note grezze: [trascrizione]. Scrivi un articolo di 800 parole con angolo narrativo su [tema], stile Corriere della Sera"</li>
        <li>"Genera 10 titoli alternativi per questo articolo ottimizzati per click ma non clickbait"</li>
        <li>"Fai il fact-checking di queste 5 affermazioni e segnala quali potrebbero essere problematiche"</li>
      </ul>

      <h2>I 5 prompt più potenti per qualsiasi professione</h2>
      <p>Questi prompt funzionano indipendentemente dalla professione:</p>
      <ol>
        <li><strong>"Agisci da esperto di [settore] con 20 anni di esperienza. Il mio problema è [X]. Cosa faresti?"</strong></li>
        <li><strong>"Elenca tutte le obiezioni che un cliente/giudice/paziente potrebbe avere a questa proposta: [proposta]"</strong></li>
        <li><strong>"Rivedi questo testo e migliora la chiarezza, elimina le ridondanze, mantieni il tono professionale: [testo]"</strong></li>
        <li><strong>"Cosa manca in questa analisi? Cosa ho tralasciato? [analisi]"</strong></li>
        <li><strong>"Crea una checklist per non dimenticare nulla quando devo fare [attività complessa]"</strong></li>
      </ol>

      <h2>Gli strumenti AI verticali per settore</h2>
      <p>Oltre a ChatGPT generalista, ogni settore ha strumenti specifici:</p>
      <ul>
        <li><strong>Legale:</strong> Harvey AI, Luminance, Lexis+ AI</li>
        <li><strong>Medico:</strong> Suki (documentazione clinica), Nabla, DAX Copilot</li>
        <li><strong>Architettura/Design:</strong> Midjourney, Adobe Firefly, Stable Diffusion per concept</li>
        <li><strong>Finanza:</strong> Bloomberg AI, Sievert, Morningstar Copilot</li>
        <li><strong>Marketing:</strong> Jasper, Copy.ai, Perplexity per ricerca</li>
        <li><strong>Codice:</strong> GitHub Copilot, Cursor, Claude Code</li>
      </ul>

      <h2>La regola delle 2 ore settimanali</h2>
      <p>Non serve diventare esperti di AI. Serve dedicare <strong>2 ore a settimana</strong> a sperimentare: prendi un task reale che fai normalmente e prova a farlo con l'AI. Tieni un file di note con i prompt che funzionano. Dopo 3 mesi avrai un toolkit personalizzato che ti rende significativamente più efficiente.</p>

      <p>Scopri quanto è esposto il tuo lavoro specifico e ricevi un piano personalizzato: <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">analizza il tuo CV gratuitamente</a>.</p>
    `,
  },

  {
    slug: 'lavori-che-cresceranno-grazie-allai',
    title: 'I lavori che cresceranno grazie all\'AI: le professioni del futuro',
    metaDesc: 'Quali sono i lavori che cresceranno grazie all\'intelligenza artificiale? Scopri le 15 professioni emergenti e in crescita nell\'era AI, con stipendi e prospettive.',
    date: '2026-07-05',
    readMin: 8,
    author: 'marco',
    category: 'Futuro del Lavoro',
    intro: 'L\'AI non solo elimina lavori — ne crea di nuovi. Alcune delle professioni più ricercate e meglio pagate del 2030 non esistevano nel 2020. Ecco dove crescerà la domanda.',
    content: `
      <h2>Il lato positivo della trasformazione AI</h2>
      <p>Ogni rivoluzione tecnologica ha eliminato alcuni lavori e creato nuovi. La rivoluzione industriale ha eliminato i tessitori artigianali e creato gli operai di fabbrica. Internet ha eliminato le enciclopedie cartacee e creato i web developer. L'AI sta seguendo lo stesso schema — ma a velocità molto superiore.</p>
      <p>La differenza questa volta: i lavori creati richiedono competenze più elevate e sono meglio pagati. Chi si prepara adesso avrà opportunità straordinarie.</p>

      <h2>Le 15 professioni in crescita nell'era AI</h2>

      <h3>1. AI Engineer / ML Engineer</h3>
      <p>La professione più richiesta del decennio. Stipendio medio Italia: 65.000-120.000€. Crescita annua della domanda: +45%. <a href="/professione/ai-engineer" style="color:var(--primary,#6366f1);">Rischio AI: 35%</a> — basso, perché chi costruisce l'AI è difficilmente sostituibile da essa.</p>

      <h3>2. AI Director / Chief AI Officer</h3>
      <p>Ruolo strategico in ogni grande azienda. Supervisiona l'adozione AI, gestisce i rischi, definisce la roadmap. Stipendi: 120.000-250.000€. <a href="/professione/ai-director" style="color:var(--primary,#6366f1);">Rischio AI: 10%</a>.</p>

      <h3>3. Prompt Engineer</h3>
      <p>Professione nata nel 2022, già consolidata. Chi sa comunicare efficacemente con i modelli AI per ottenere output di qualità è richiestissimo. Stipendi: 50.000-90.000€ con trend in crescita.</p>

      <h3>4. AI Ethicist / AI Policy Specialist</h3>
      <p>Con l'AI Act europeo e la crescente regolamentazione, le aziende hanno bisogno di esperti che garantiscano conformità etica e legale dei sistemi AI. Profilo ibrido: diritto + tecnologia + etica.</p>

      <h3>5. Data Scientist con dominio verticale</h3>
      <p>Non basta più saper fare modelli generici. Il data scientist che capisce profondamente il settore (healthcare, finance, legal) vale il doppio. Stipendi: 55.000-100.000€.</p>

      <h3>6. Specialista in Cybersecurity AI</h3>
      <p>L'AI crea nuovi vettori di attacco (deepfake, phishing generativo, exploit automatizzati) e nuovi strumenti di difesa. Gli esperti di security che capiscono l'AI sono tra le risorse più rare e pagate del mercato.</p>

      <h3>7. Trainer / Fine-Tuner di modelli AI</h3>
      <p>Specialisti che adattano i modelli AI generici alle esigenze specifiche di un settore o azienda. Richiede mix di competenze tecniche e di dominio. Ruolo in rapida espansione.</p>

      <h3>8. Human-AI Collaboration Specialist</h3>
      <p>Nuovo ruolo nei grandi team: chi progetta i workflow che combinano umani e AI nel modo più efficiente. Parte designer organizzativo, parte change manager, parte tecnico.</p>

      <h3>9. Medico con specializzazione in diagnostica AI</h3>
      <p>I radiologi tradizionali sono a rischio (65%), ma i radiologi che supervisionano e validano i sistemi AI diagnostici sono tra le figure più richieste in sanità.</p>

      <h3>10. Avvocato specializzato in AI Law</h3>
      <p>Responsabilità dei sistemi AI, proprietà intellettuale generativa, privacy e GDPR per i dati di training: un settore legale completamente nuovo che crescerà esponenzialmente.</p>

      <h3>11. Creator di contenuti con AI</h3>
      <p>Non il content creator generico, ma chi sa usare Midjourney, Sora, Runway, ElevenLabs e gli strumenti AI creativi per produrre contenuti a costo marginale zero. Chi ha gusto + competenze AI domina.</p>

      <h3>12. Ingegnere di sistemi robotici</h3>
      <p>Con la diffusione dei robot umanoidi (Figure, Optimus, Atlas) la domanda di ingegneri che li progettano, programmano e manutengono esploderà nel 2027-2030.</p>

      <h3>13. Sustainability / ESG Data Analyst</h3>
      <p>L'AI accelera la raccolta e analisi dei dati ESG. Chi sa combinare competenze di sostenibilità con data analytics è tra i profili più ricercati nelle multinazionali.</p>

      <h3>14. Mental Health Specialist</h3>
      <p>Paradossalmente, più l'AI diventa pervasiva, più cresce la domanda di supporto psicologico umano. Lo stress da trasformazione digitale, l'isolamento sociale, l'ansia da prestazione: tutti driver di crescita per psicologi e psicoterapeuti.</p>

      <h3>15. Formatore aziendale in AI Literacy</h3>
      <p>Ogni azienda deve formare i propri dipendenti all'uso dell'AI. Chi sa formare adulti su questi strumenti — con pragmatismo, non teoria — è richiestissimo.</p>

      <h2>Il pattern comune: T-shaped skills</h2>
      <p>Tutte le professioni in crescita condividono una struttura a T: <strong>competenza verticale profonda</strong> in un dominio (medicina, diritto, ingegneria) + <strong>competenza orizzontale in AI</strong> abbastanza solida da usarla e supervisionarla. Non serve essere programmatori — serve capire cosa l'AI può e non può fare nel proprio settore.</p>

      <p>Scopri dove ti posizioni oggi e dove puoi crescere: <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">analizza il tuo CV gratuitamente</a>.</p>
    `,
  },

  {
    slug: 'professioni-che-pagheranno-di-piu-nel-2030',
    title: 'Le professioni che pagheranno di più nel 2030 in Italia',
    metaDesc: 'Quali professioni avranno gli stipendi più alti nel 2030? Analisi delle tendenze salariali italiane nell\'era AI, con dati per settore e consigli su come posizionarsi.',
    date: '2026-07-10',
    readMin: 9,
    author: 'marco',
    category: 'Carriera',
    intro: 'Il 2030 è a 4 anni da qui. Abbastanza vicino da potersi preparare, abbastanza lontano da fare mosse significative. Ecco come si evolveranno gli stipendi nell\'era AI e dove conviene investire il proprio sviluppo professionale.',
    content: `
      <h2>La nuova geografia degli stipendi: scarsità vs abbondanza</h2>
      <p>Il mercato del lavoro del 2030 sarà bipolare: da un lato, professionisti rarissimi con stipendi altissimi; dall'altro, una massa di lavoratori interscambiabili con salari stagnanti. L'AI sta accelerando questa polarizzazione.</p>
      <p>La logica è semplice: l'AI abbatte il costo marginale di molti lavori cognitivi (testi, analisi, codice standard). Questo comprime i salari per chi fa queste cose. Ma per chi supervisiona l'AI, la complessità aumenta — e con essa il valore.</p>

      <h2>Le professioni con stipendi in forte crescita entro il 2030</h2>

      <h3>Tech & AI: la categoria regina</h3>
      <p>Gli stipendi in questa categoria cresceranno del 40-60% entro il 2030 per la scarsità strutturale di talenti.</p>
      <ul>
        <li><strong>AI Engineer:</strong> da 65.000€ oggi a 95.000-130.000€ nel 2030 (+50-70%)</li>
        <li><strong>Cybersecurity Engineer:</strong> da 55.000€ a 80.000-100.000€ (+45-80%)</li>
        <li><strong>Cloud Architect:</strong> da 70.000€ a 95.000-120.000€ (+35-70%)</li>
        <li><strong>ML Engineer:</strong> da 60.000€ a 90.000-120.000€ (+50-100%)</li>
      </ul>
      <p>Vedi il rischio AI per <a href="/professione/ai-engineer" style="color:var(--primary,#6366f1);">AI Engineer</a> e <a href="/professione/cyber-security-engineer" style="color:var(--primary,#6366f1);">Cybersecurity Engineer</a>.</p>

      <h3>Sanità specialistica: la domanda esplode</h3>
      <p>L'invecchiamento demografico italiano + l'aumento delle malattie croniche + la scarsità di medici: perfetta tempesta per stipendi in crescita.</p>
      <ul>
        <li><strong>Chirurgo specialista:</strong> da 80.000€ a 110.000-150.000€ (+35-85%)</li>
        <li><strong>Psicologo/Psicoterapeuta:</strong> da 35.000€ (medio) a 55.000-80.000€ (+55-130%) per chi ha specializzazione</li>
        <li><strong>Medico specialista in Geriatria/Palliativa:</strong> tra i profili più ricercati</li>
      </ul>

      <h3>Diritto e compliance AI: settore nascente con stipendi altissimi</h3>
      <p>L'AI Act europeo, il GDPR, la responsabilità algoritmica: si apre un settore legale completamente nuovo.</p>
      <ul>
        <li><strong>Avvocato specializzato in AI Law:</strong> 80.000-200.000€ per i pionieri</li>
        <li><strong>Compliance Officer AI:</strong> 60.000-100.000€ nelle grandi aziende</li>
      </ul>

      <h3>Professioni "manuali premium": rari e pagati</h3>
      <p>Paradossalmente, alcune professioni manuali altamente specializzate avranno la crescita salariale più solida — perché l'automazione non le tocca e la domanda aumenta con la ricchezza.</p>
      <ul>
        <li><strong>Chirurgo estetico:</strong> 150.000-400.000€ (domanda in forte crescita)</li>
        <li><strong>Artigiano di lusso (gioielliere, liutaio, sarto haute couture):</strong> nicchia con prezzi in crescita per chi raggiunge l'eccellenza</li>
        <li><strong>Chef stellato:</strong> i migliori chef 3 stelle in Italia guadagnano oltre 500.000€ l'anno come direttori creativi</li>
      </ul>

      <h2>Le professioni con stipendi a rischio stagnazione</h2>
      <p>Non tutti i salari cresceranno. Alcune categorie vedranno stipendi stagnanti o in calo reale:</p>
      <ul>
        <li><strong>Giornalismo generalista:</strong> la produzione di contenuti AI comprime i budget editoriali</li>
        <li><strong>Contabilità ordinaria:</strong> automatizzata, chi non si specializza subisce compressione salariale</li>
        <li><strong>Customer service standard:</strong> i chatbot gestiscono il 70-80% dei volumi; resta solo il lavoro complesso</li>
        <li><strong>Traduzione standard:</strong> la qualità di GPT-4 per le lingue principali ha già quasi eliminato il mercato del volume</li>
      </ul>

      <h2>La strategia di posizionamento per il 2030</h2>
      <p>Non si tratta di scegliere la professione "giusta" — si tratta di posizionarsi correttamente all'interno della propria professione. Le domande da porsi:</p>
      <ol>
        <li>Quale task della mia professione è <em>impossibile</em> automatizzare? Come posso diventare il migliore in quello?</li>
        <li>Qual è la nicchia più scarsa e remunerativa del mio settore? Come arrivarci in 3 anni?</li>
        <li>Quali competenze AI posso aggiungere per moltiplicare il mio output — e quindi il mio valore?</li>
        <li>Come costruire un asset personale (audience, reputazione, IP) che mi protegga dalla commoditizzazione?</li>
      </ol>

      <h2>L'investimento migliore: formazione continua</h2>
      <p>Il ROI della formazione professionale è mai stato così alto — perché il vantaggio competitivo di chi si aggiorna rispetto a chi non lo fa cresce ogni anno. Chi impara a usare gli strumenti AI del proprio settore adesso avrà 3-4 anni di vantaggio sugli altri.</p>
      <p>Inizia con un'analisi concreta della tua situazione attuale: <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">analizza il tuo CV gratuitamente</a> e scopri dove sei posizionato rispetto al mercato del 2030.</p>
    `,
  },

  {
    slug: 'claude-4-anthropic-cosa-cambia-per-il-lavoro',
    title: 'Claude 4 di Anthropic: cosa cambia per il tuo lavoro',
    metaDesc: 'Anthropic ha rilasciato Claude 4 (Opus e Sonnet): analisi delle nuove capacità e dell\'impatto concreto su avvocati, sviluppatori, commercialisti, giornalisti e altre professioni.',
    date: '2026-07-01',
    readMin: 7,
    author: 'giulia',
    category: 'Novità AI',
    intro: 'Anthropic ha rilasciato Claude 4, con Opus 4 e Sonnet 4 tra i modelli più potenti disponibili. Non è solo un aggiornamento tecnico: le nuove capacità cambiano concretamente quali task professionali possono essere delegati a un AI.',
    content: `
      <h2>Cosa sono Claude Opus 4 e Claude Sonnet 4</h2>
      <p>Anthropic è la società AI fondata da ex-ricercatori di OpenAI, con un focus dichiarato sulla sicurezza dei sistemi AI. La famiglia Claude 4 include tre modelli: <strong>Opus 4</strong> (il più potente, per task complessi), <strong>Sonnet 4</strong> (il bilanciamento tra capacità e velocità, usato dalla maggior parte delle applicazioni) e <strong>Haiku 4.5</strong> (veloce e leggero, per task semplici ad alto volume).</p>
      <p>Claude è accessibile tramite claude.ai, l'API Anthropic e applicazioni come Claude Code (per sviluppatori) e Cowork (per professionisti non tecnici).</p>

      <h2>Le capacità che cambiano il lavoro</h2>
      <p>Rispetto alle versioni precedenti, Claude 4 porta miglioramenti significativi in quattro aree rilevanti per i professionisti:</p>
      <ul>
        <li><strong>Ragionamento su documenti lunghi:</strong> Claude 4 gestisce context window molto estesi, leggendo e sintetizzando contratti, perizie, relazioni mediche o codice di centinaia di pagine in un'unica sessione.</li>
        <li><strong>Scrittura professionale di alta qualità:</strong> Testi legali, analisi finanziarie, articoli tecnici — la qualità è arrivata a un livello in cui l'editing umano è necessario solo per validazione, non per riscrittura.</li>
        <li><strong>Coding avanzato:</strong> Claude Code (basato su Sonnet 4) scrive, debugga e refactora codice autonomamente. Molte aziende lo usano già come sviluppatore junior autonomo.</li>
        <li><strong>Uso di strumenti esterni (computer use):</strong> Claude può navigare web, compilare form, interagire con software — eseguendo workflow completi senza supervisione umana.</li>
      </ul>

      <h2>Impatto professione per professione</h2>

      <h3>Avvocato (rischio: <a href="/professione/avvocato" style="color:var(--primary,#6366f1);">42%</a>)</h3>
      <p>Claude 4 Opus legge e analizza fascicoli processuali completi, produce bozze di atti, identifica i punti deboli nelle memorie avversarie. La ricerca giurisprudenziale, che occupava ore di un legale junior, ora richiede minuti. <strong>Chi si specializza in strategia processuale e relazione con il cliente usa Claude per il lavoro di preparazione e si concentra su ciò che vale di più.</strong></p>

      <h3>Sviluppatore software (rischio: <a href="/professione/developer" style="color:var(--primary,#6366f1);">varia per specializzazione</a>)</h3>
      <p>L'impatto è già massiccio. Claude Code scrive codice funzionante per task standard. Le stime attuali: un developer senior con Claude Code produce output pari a 2-3 developer senza. Questo non significa licenziamenti immediati — significa che le aziende assumono meno developer junior e chiedono di più a quelli esistenti. <strong>Chi non usa Claude Code entro 6 mesi sarà significativamente meno competitivo.</strong></p>

      <h3>Commercialista / Contabile (rischio: <a href="/professione/commercialista" style="color:var(--primary,#6366f1);">72%</a>)</h3>
      <p>Claude 4 integrato con i software gestionali gestisce già la contabilità ordinaria, le dichiarazioni standard e la comunicazione con l'Agenzia delle Entrate. Chi fa solo dichiarazioni dei redditi standard è già in difficoltà. <strong>La mossa giusta: usare Claude per la parte meccanica e concentrarsi sulla consulenza strategica.</strong></p>

      <h3>Giornalista / Copywriter (rischio: <a href="/professione/giornalista" style="color:var(--primary,#6366f1);">62%</a>)</h3>
      <p>Claude 4 scrive articoli di qualità da note di intervista, comunicati stampa, dati. La velocità di produzione di contenuti standard è aumentata di 10-20x. <strong>Il valore si sposta sulla fonte, l'esclusiva, l'angolo originale — non sulla scrittura in sé.</strong> Chi ha fonti e punto di vista unico è al sicuro. Chi riscriveva comunicati non lo è.</p>

      <h3>Medico / Professionista sanitario (rischio: 18-65% a seconda della specializzazione)</h3>
      <p>Claude 4 Opus raggiunge o supera il 90° percentile dei medici nei test di diagnosi differenziale. Ma la responsabilità medica e la relazione con il paziente restano umane. <strong>Il medico che usa Claude come "secondo parere" immediato su ogni caso migliora la qualità delle sue decisioni — e aumenta il suo valore.</strong></p>

      <h2>Come usare Claude 4 adesso</h2>
      <p>Il modo più rapido per iniziare è <a href="https://claude.ai" target="_blank" rel="noopener" style="color:var(--primary,#6366f1);">claude.ai</a> (gratuito con limitazioni, piano Pro a circa 20€/mese). Per uso professionale intensivo, Claude Pro o Team è l'investimento con il ROI più alto per la maggior parte dei lavoratori della conoscenza.</p>
      <p>Consiglio pratico: identifica i 3 task che ti consumano più tempo nella settimana. Sperimenta Claude su ognuno per 2 ore. Tieni un file con i prompt che funzionano. Dopo un mese hai già recuperato l'investimento.</p>

      <p>Per capire quanto è esposta la tua professione specifica all'AI: <a href="/classifica" style="color:var(--primary,#6366f1);">sfoglia tutte le professioni</a> o <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">analizza il tuo CV</a>.</p>
    `,
  },

  {
    slug: 'chatgpt-vs-claude-vs-gemini-quale-usare-per-lavoro',
    title: 'ChatGPT vs Claude vs Gemini: quale AI usare per il lavoro nel 2026',
    metaDesc: 'Confronto pratico tra ChatGPT (OpenAI), Claude (Anthropic) e Gemini (Google) per uso professionale. Qual è il migliore per scrivere, analizzare, programmare e ricercare?',
    date: '2026-07-03',
    readMin: 8,
    author: 'giulia',
    category: 'Confronti AI',
    intro: 'Nel 2026 ci sono tre grandi AI per uso professionale: ChatGPT di OpenAI, Claude di Anthropic e Gemini di Google. Non esiste "il migliore" in assoluto — esiste quello giusto per il tuo specifico caso d\'uso. Ecco la guida pratica.',
    content: `
      <h2>Il contesto: tre modelli, tre filosofie</h2>
      <p>Ogni grande player AI ha una storia e una filosofia diversa che si riflette nei prodotti:</p>
      <ul>
        <li><strong>OpenAI / ChatGPT:</strong> il pioniere, il più conosciuto, il più integrato in strumenti di terze parti. Punta sulla velocità di rilascio e sull'ecosistema di plugin.</li>
        <li><strong>Anthropic / Claude:</strong> fondata da ex-ricercatori OpenAI con focus sulla sicurezza AI. Tende a produrre testi più precisi, meno inclini ad "allucinare", con un approccio più cauto e rigoroso.</li>
        <li><strong>Google / Gemini:</strong> integrato nell'ecosistema Google (Docs, Gmail, Search). Punto di forza: accesso a dati aggiornati tramite ricerca web in tempo reale.</li>
      </ul>

      <h2>Confronto per caso d'uso professionale</h2>

      <h3>Scrittura professionale (relazioni, email, contratti, report)</h3>
      <p><strong>Vincitore: Claude Sonnet 4</strong></p>
      <p>Claude tende a produrre testi più precisi, con meno ripetizioni e con uno stile più calibrato. È particolarmente forte nella scrittura in italiano — a differenza di alcuni modelli che producono italiano "tradotto dall'inglese". Ottimo per avvocati, consulenti, giornalisti.</p>

      <h3>Coding e sviluppo software</h3>
      <p><strong>Vincitore: Claude (via Claude Code) per progetti complessi; GPT-4o per integrazione con Cursor/Copilot</strong></p>
      <p>Claude Code (basato su Sonnet 4) è diventato lo standard de facto per lo sviluppo autonomo. Gestisce codebase grandi, mantiene il contesto dell'intera applicazione, scrive test. GitHub Copilot (basato su OpenAI) è ancora molto usato per completamento in-editor.</p>

      <h3>Ricerca e fact-checking</h3>
      <p><strong>Vincitore: Gemini con Google Search o Perplexity</strong></p>
      <p>Quando hai bisogno di informazioni aggiornate al giorno stesso — prezzi, notizie, dati recenti — Gemini con accesso a Google Search è imbattibile. Claude e ChatGPT hanno knowledge cutoff e allucinano più facilmente su fatti recenti.</p>

      <h3>Analisi di documenti lunghi</h3>
      <p><strong>Vincitore: Claude Opus 4</strong></p>
      <p>La gestione di documenti molto lunghi (contratti di 100 pagine, report annuali, cartelle cliniche) è il punto di forza di Claude. Il context window molto ampio e la capacità di mantenere coerenza su documenti complessi è superiore agli altri.</p>

      <h3>Brainstorming e creatività</h3>
      <p><strong>Vincitore: ChatGPT-4o o Claude, dipende dal gusto</strong></p>
      <p>Per idee creative, entrambi funzionano bene. ChatGPT tende a essere più "esuberante" e vario, Claude più strutturato e preciso. Per copy pubblicitario e naming: ChatGPT. Per concept strategici e analisi: Claude.</p>

      <h3>Integrazione con strumenti esistenti</h3>
      <p><strong>Vincitore: ChatGPT (ecosistema) o Gemini (Google Workspace)</strong></p>
      <p>Se usi Google Workspace (Docs, Gmail, Sheets), Gemini è già integrato. Se usi molti strumenti di terze parti (Zapier, Make, CRM, project management), ChatGPT ha il maggior numero di integrazioni native.</p>

      <h2>La mia raccomandazione per profilo</h2>

      <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
        <thead><tr style="border-bottom:2px solid var(--border,#e5e7eb);">
          <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;">Profilo</th>
          <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;">Tool principale</th>
          <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;">Motivo</th>
        </tr></thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border,#e5e7eb);">
            <td style="padding:0.6rem 0.5rem;">Avvocato / Consulente</td>
            <td style="padding:0.6rem 0.5rem;font-weight:600;color:var(--primary,#6366f1);">Claude</td>
            <td style="padding:0.6rem 0.5rem;color:#6b7280;">Precisione, documenti lunghi, meno allucinazioni</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border,#e5e7eb);">
            <td style="padding:0.6rem 0.5rem;">Developer</td>
            <td style="padding:0.6rem 0.5rem;font-weight:600;color:var(--primary,#6366f1);">Claude Code</td>
            <td style="padding:0.6rem 0.5rem;color:#6b7280;">Sviluppo autonomo su codebase grandi</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border,#e5e7eb);">
            <td style="padding:0.6rem 0.5rem;">Marketer / Copywriter</td>
            <td style="padding:0.6rem 0.5rem;font-weight:600;color:var(--primary,#6366f1);">ChatGPT-4o</td>
            <td style="padding:0.6rem 0.5rem;color:#6b7280;">Creatività, varietà, ecosistema plugin</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border,#e5e7eb);">
            <td style="padding:0.6rem 0.5rem;">Ricercatore / Giornalista</td>
            <td style="padding:0.6rem 0.5rem;font-weight:600;color:var(--primary,#6366f1);">Gemini / Perplexity</td>
            <td style="padding:0.6rem 0.5rem;color:#6b7280;">Dati aggiornati, fonti citate</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border,#e5e7eb);">
            <td style="padding:0.6rem 0.5rem;">Manager / Analista</td>
            <td style="padding:0.6rem 0.5rem;font-weight:600;color:var(--primary,#6366f1);">Claude o ChatGPT</td>
            <td style="padding:0.6rem 0.5rem;color:#6b7280;">Dipende dall'ecosistema aziendale</td>
          </tr>
          <tr>
            <td style="padding:0.6rem 0.5rem;">Utente Google Workspace</td>
            <td style="padding:0.6rem 0.5rem;font-weight:600;color:var(--primary,#6366f1);">Gemini</td>
            <td style="padding:0.6rem 0.5rem;color:#6b7280;">Integrazione nativa in Docs, Gmail, Sheets</td>
          </tr>
        </tbody>
      </table>

      <h2>Il consiglio pratico: usane due</h2>
      <p>I professionisti più efficaci non usano un solo strumento AI. La combinazione più comune nel 2026: <strong>Claude per la produzione di contenuti di qualità e l'analisi di documenti</strong> + <strong>Perplexity o Gemini per la ricerca aggiornata</strong>. Il costo combinato è 20-40€/mese — meno di un pranzo di lavoro, con un impatto sulla produttività che si misura in ore risparmiate ogni settimana.</p>

      <p>Sei curioso di sapere quanto AI cambierà la tua professione? <a href="/classifica" style="color:var(--primary,#6366f1);">Scopri il rischio del tuo lavoro</a>.</p>
    `,
  },

  {
    slug: 'ai-act-europeo-cosa-cambia-per-lavoratori',
    title: 'AI Act europeo: cosa cambia concretamente per lavoratori e aziende',
    metaDesc: 'L\'AI Act dell\'Unione Europea è la prima grande legge sull\'intelligenza artificiale al mondo. Cosa significa per chi lavora, per chi assume e per le aziende che usano AI.',
    date: '2026-06-28',
    readMin: 8,
    author: 'giulia',
    category: 'Normativa',
    intro: 'L\'AI Act europeo è entrato in vigore nel 2024 ed è in applicazione progressiva fino al 2027. È la prima legge al mondo che regola l\'intelligenza artificiale in modo sistematico. Ecco cosa significa concretamente per il mercato del lavoro italiano.',
    content: `
      <h2>Cos'è l'AI Act in parole semplici</h2>
      <p>L'AI Act (Regolamento UE 2024/1689) classifica i sistemi AI in base al <strong>livello di rischio</strong> che presentano per le persone:</p>
      <ul>
        <li><strong>Rischio inaccettabile (vietati):</strong> sorveglianza di massa biometrica, sistemi di social scoring, manipolazione subliminale. Vietati immediatamente.</li>
        <li><strong>Alto rischio:</strong> AI usati in selezione del personale, valutazione delle prestazioni, credito, medicina, giustizia. Soggetti a requisiti stringenti: trasparenza, supervisione umana, audit.</li>
        <li><strong>Rischio limitato:</strong> chatbot, generatori di contenuti. Obbligo di disclosure (l'utente deve sapere che parla con un AI).</li>
        <li><strong>Rischio minimo:</strong> spam filter, AI nei videogiochi. Nessun obbligo specifico.</li>
      </ul>

      <h2>Cosa cambia per chi cerca lavoro</h2>
      <p>Uno degli impatti più diretti: i sistemi AI usati nella <strong>selezione del personale</strong> rientrano nella categoria "alto rischio". Questo significa che:</p>
      <ul>
        <li>I candidati hanno diritto a sapere se il loro CV è stato screened da un AI</li>
        <li>Le aziende devono garantire supervisione umana sulle decisioni di assunzione AI-assisted</li>
        <li>I sistemi non possono fare discriminazioni per genere, etnia, età</li>
        <li>I candidati scartati da sistemi AI possono richiedere spiegazioni</li>
      </ul>
      <p>In pratica: se hai mandato CV e non hai avuto risposta, potrebbe essere stato un AI a scartarti. Hai il diritto di saperlo e di chiedere spiegazioni.</p>

      <h2>Cosa cambia per chi è già dipendente</h2>
      <p>Anche i sistemi di <strong>valutazione delle prestazioni lavorative</strong> tramite AI rientrano nell'alto rischio. Questo riguarda i sistemi di scoring dei call center, il monitoraggio della produttività nei magazzini Amazon-style, le valutazioni automatiche dei driver Uber e Glovo.</p>
      <p>Le aziende devono:</p>
      <ul>
        <li>Informare i lavoratori che vengono monitorati da AI</li>
        <li>Garantire che le decisioni significative (licenziamenti, promozioni) abbiano supervisione umana</li>
        <li>Permettere ai lavoratori di contestare le decisioni AI-assisted</li>
      </ul>

      <h2>Le nuove professioni nate dall'AI Act</h2>
      <p>Ogni grande legge crea nuove professioni. L'AI Act ne crea diverse:</p>
      <ul>
        <li><strong>AI Compliance Officer:</strong> gestisce la conformità dei sistemi AI aziendali alla normativa. Stipendio: 60.000-100.000€. Domanda in forte crescita.</li>
        <li><strong>AI Auditor:</strong> verifica che i sistemi AI rispettino i requisiti normativi. Richiesta da banche, assicurazioni, aziende sanitarie.</li>
        <li><strong>Avvocato specializzato in AI Law:</strong> già oggi tra i profili legali più richiesti. Vedi <a href="/professione/avvocato" style="color:var(--primary,#6366f1);">il rischio AI per gli avvocati</a>.</li>
        <li><strong>AI Risk Manager:</strong> identifica e mitiga i rischi legati all'uso di AI in azienda.</li>
      </ul>

      <h2>Cosa devono fare le aziende italiane</h2>
      <p>Le PMI italiane che usano AI per HR, credito o servizi ai clienti hanno obbligo di:</p>
      <ol>
        <li>Mappare tutti i sistemi AI usati e classificarli per livello di rischio</li>
        <li>Per i sistemi ad alto rischio: registrarli nel database EU, documentare il funzionamento, garantire supervisione umana</li>
        <li>Formare i dipendenti che interagiscono con sistemi AI ad alto rischio</li>
        <li>Nominare un responsabile della conformità AI (per aziende oltre certe soglie)</li>
      </ol>
      <p>Le sanzioni per non conformità arrivano fino al 7% del fatturato globale annuo — più severe di quelle GDPR.</p>

      <h2>Il lato positivo: protezione crescente per i lavoratori</h2>
      <p>Al di là della burocrazia, l'AI Act crea una protezione reale: l'AI non potrà licenziarti senza supervisione umana, non potrà scartare il tuo CV senza che tu possa contestarlo, non potrà monitorarti in modo invasivo senza che tu lo sappia.</p>
      <p>In un mercato del lavoro sempre più permeato dall'AI, avere diritti chiari su come questi sistemi influenzano la tua carriera è un cambiamento significativo.</p>

      <p>Scopri come l'AI sta già cambiando la tua professione: <a href="/classifica" style="color:var(--primary,#6366f1);">analizza il rischio del tuo lavoro</a>.</p>
    `,
  },

  {
    slug: 'cursor-github-copilot-il-programmatore-esiste-ancora',
    title: 'Cursor e GitHub Copilot: il programmatore ha ancora un futuro?',
    metaDesc: 'Cursor, GitHub Copilot, Claude Code, Devin: gli strumenti AI per sviluppatori stanno cambiando radicalmente la professione. Il developer è ancora necessario nel 2026?',
    date: '2026-07-04',
    readMin: 9,
    author: 'giulia',
    category: 'Tech & AI',
    intro: 'Nel 2026 un developer con Cursor o Claude Code produce codice 3-5x più velocemente di uno senza. Devin e sistemi simili completano task autonomamente. Cosa significa per chi fa o vuole fare il programmatore?',
    content: `
      <h2>Lo scenario attuale: cosa fanno questi strumenti</h2>
      <p>Fino al 2022, gli strumenti AI per sviluppatori erano glorificati autocomplete. Nel 2026 la situazione è radicalmente diversa:</p>
      <ul>
        <li><strong>GitHub Copilot:</strong> integrato nell'editor (VS Code, JetBrains), suggerisce linee e blocchi di codice in tempo reale. Usato da oltre 1 milione di developer.</li>
        <li><strong>Cursor:</strong> editor AI-first che riscrive, refactora e modifica interi file o cartelle con istruzioni in linguaggio naturale. "Aggiungi autenticazione OAuth a questa app" → lo fa.</li>
        <li><strong>Claude Code:</strong> agente che opera da terminale, legge l'intera codebase, scrive feature complete, esegue test, corregge bug autonomamente. Usato da Anthropic internamente.</li>
        <li><strong>Devin e sistemi simili:</strong> agenti autonomi che ricevono un task ("costruisci un'app per prenotazioni"), pianificano, scrivono codice, lo testano e lo deployano — con supervisione umana minima.</li>
      </ul>

      <h2>I numeri: quanto cambiano la produttività</h2>
      <p>Studi interni di varie aziende tech mostrano:</p>
      <ul>
        <li>Developer con Copilot completano task il 55% più velocemente (studio GitHub/Microsoft)</li>
        <li>Developer con Cursor o Claude Code su task complessi: 3-5x più veloci su task standard</li>
        <li>Il numero di righe di codice scritte manualmente è calato dell'80% nei team che usano AI aggressivamente</li>
      </ul>
      <p>La conseguenza pratica: una startup può lanciare un MVP con 1 developer dove prima ne servivano 3-4. Le grandi aziende rallentano le assunzioni di junior developer.</p>

      <h2>Chi è a rischio e chi no</h2>

      <h3>Developer junior / entry-level — rischio alto</h3>
      <p>I task tipici del junior (implementare feature standard, correggere bug di tipo noto, scrivere test) sono esattamente quelli che l'AI fa meglio. L'ingresso nel mercato per chi inizia adesso è significativamente più difficile. <strong>Chi non impara a usare l'AI come amplificatore della propria produttività ha difficoltà competitive.</strong></p>

      <h3>Developer senior / software architect — rischio medio-basso</h3>
      <p>L'AI fa il lavoro di esecuzione, ma non sa cosa costruire e perché. Le decisioni architetturali, la comprensione dei requisiti di business, la gestione del debito tecnico, la leadership tecnica del team — tutto questo rimane umano. Un senior developer che usa AI è più produttivo che mai. Vedi il rischio per <a href="/professione/backend-developer" style="color:var(--primary,#6366f1);">Backend Developer</a> e <a href="/professione/frontend-developer" style="color:var(--primary,#6366f1);">Frontend Developer</a>.</p>

      <h3>Specialisti di dominio (ML Engineer, Security, DevOps) — rischio basso</h3>
      <p>L'AI genera codice, ma non capisce a fondo i sistemi di deployment, la sicurezza, i modelli ML. Chi ha expertise verticale profonda in questi ambiti è tra i profili più ricercati. <a href="/professione/cyber-security-engineer" style="color:var(--primary,#6366f1);">Cyber Security Engineer</a>: rischio solo 32%.</p>

      <h2>Come deve cambiare il developer nel 2026</h2>
      <p>I developer che si adattano con successo stanno sviluppando un nuovo skill set:</p>
      <ol>
        <li><strong>Prompt engineering per il codice:</strong> saper descrivere precisamente cosa vuoi che l'AI costruisca è diventato fondamentale quanto saper scrivere codice.</li>
        <li><strong>Code review di AI-generated code:</strong> l'AI sbaglia — in modo sottile. Chi sa leggere e validare codice AI ha un valore enorme.</li>
        <li><strong>System thinking:</strong> capire l'architettura complessiva, non i singoli file. L'AI gestisce i dettagli, l'umano gestisce la visione.</li>
        <li><strong>Conoscenza del dominio:</strong> un developer che capisce la finanza, la medicina o il diritto (oltre al codice) vale enormemente più di chi conosce solo il codice.</li>
      </ol>

      <h2>La domanda chiave: conviene ancora studiare programmazione?</h2>
      <p>Sì, ma con una premessa diversa. Non si studia a programmare per "scrivere codice" — si studia per <em>capire come funzionano i sistemi software</em> e per poter dirigere e validare ciò che l'AI costruisce. È la stessa differenza tra un architetto che usa CAD e uno che disegna a mano: l'architetto con CAD è 10x più produttivo, ma deve ancora sapere cosa sta progettando.</p>
      <p>Il percorso consigliato nel 2026: basi solide di informatica + specializzazione in un dominio verticale + padronanza degli strumenti AI. Chi ha questo mix è tra i profili più richiesti e meglio pagati del mercato.</p>

      <p>Sei uno sviluppatore? <a href="/professione/ai-engineer" style="color:var(--primary,#6366f1);">Scopri il rischio AI per la tua specializzazione</a> o <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">analizza il tuo CV</a>.</p>
    `,
  },

  // ── NUOVI ARTICOLI LONG-TAIL ──────────────────────────────────────────────

  {
    slug: 'commercialista-rischio-ai-2026',
    title: 'Il Commercialista sarà sostituito dall\'AI? Rischio e futuro (2026)',
    metaDesc: 'Il commercialista è a rischio AI? Rischio 72%, anno critico 2029. Analisi dei task automatizzabili, piano di sopravvivenza e come cambia il ruolo del dottore commercialista.',
    date: '2026-07-01',
    readMin: 6,
    author: 'davide',
    category: 'Professioni',
    intro: 'Con un rischio AI del 72% e anno critico stimato al 2029, il commercialista è tra le professioni più esposte in Italia. Ma il "commercialista" che conosciamo oggi non esisterà più — esisterà qualcosa di diverso e più prezioso.',
    content: `
      <h2>Cosa farà l'AI al posto del commercialista</h2>
      <p>La parte operativa del lavoro contabile è già in forte automazione. Software come <strong>Fatture in Cloud, TeamSystem e Zucchetti</strong> automatizzano dichiarazioni, F24, liquidazioni IVA e riconciliazioni bancarie. L'AI generativa aggiunge la capacità di interpretare normativa e rispondere a domande fiscali standard.</p>
      <p>I task più a rischio entro il 2029:</p>
      <ul>
        <li>Dichiarazioni fiscali standard (730, Redditi PF, Redditi SP) → rischio 92%</li>
        <li>Riconciliazioni bancarie e prima nota → rischio 95%</li>
        <li>Calcolo imposte e versamenti → rischio 88%</li>
        <li>Redazione bilanci di esercizio ordinari → rischio 80%</li>
        <li>Adempimenti periodici (IVA, F24) → rischio 90%</li>
      </ul>

      <h2>Cosa NON farà l'AI al posto del commercialista</h2>
      <p>Esistono aree dove il commercialista umano ha un vantaggio strutturale che l'AI non potrà colmare nel breve periodo:</p>
      <ul>
        <li><strong>Pianificazione fiscale su operazioni straordinarie</strong> (fusioni, scissioni, cessioni d'azienda): richiedono giudizio strategico su scenari incerti</li>
        <li><strong>Gestione del contenzioso tributario</strong>: l'AI può fare ricerca giurisprudenziale ma non può rappresentare il cliente</li>
        <li><strong>Consulenza su holding e strutture patrimoniali complesse</strong></li>
        <li><strong>Relazione fiduciaria con l'imprenditore</strong>: il commercialista è spesso il primo consulente di fiducia dell'imprenditore su decisioni aziendali</li>
        <li><strong>Fiscalità internazionale e transfer pricing</strong></li>
      </ul>

      <h2>Il piano di sopravvivenza per il commercialista</h2>
      <p>La trasformazione deve avvenire adesso, non nel 2028. Chi aspetta troverà un mercato già occupato dai "nuovi commercialisti digitali".</p>
      <p><strong>Fase 1 — Automatizza tu per primo (2026-2027):</strong> Adotta strumenti AI nel tuo studio per gestire il 10x dei clienti con lo stesso team. Abbassa i prezzi per la parte operativa, aumenta quelli per la consulenza.</p>
      <p><strong>Fase 2 — Specializzazione (2027-2028):</strong> Scegli una nicchia ad alto valore: fiscalità internazionale, startup e venture capital, holding familiari, real estate tax, o settore immobiliare.</p>
      <p><strong>Fase 3 — Consulenza strategica (2028+):</strong> Diventa il "CFO esterno" delle PMI — non solo gestisci la contabilità ma guidi le decisioni finanziarie con dati in tempo reale.</p>

      <p>→ <a href="/professione/commercialista" style="color:var(--primary,#6366f1);">Vedi l'analisi completa del rischio AI per il commercialista</a></p>
    `,
  },

  {
    slug: 'avvocato-rischio-ai-2026',
    title: 'L\'Avvocato sarà sostituito dall\'AI? Analisi completa 2026',
    metaDesc: 'L\'avvocato rischia l\'AI? Rischio 38%, ma la ricerca legale è già automatizzata al 90%. Analisi dei task, futuro della professione forense e piano di sopravvivenza.',
    date: '2026-07-02',
    readMin: 7,
    author: 'davide',
    category: 'Professioni',
    intro: 'L\'avvocatura è una professione biforcata: la parte documentale e di ricerca è già ampiamente automatizzabile, mentre la difesa in aula, la negoziazione e la relazione con il cliente rimangono profondamente umane. Il rischio complessivo è 38% — ma per chi, esattamente?',
    content: `
      <h2>L'AI nel diritto: lo stato dell'arte nel 2026</h2>
      <p>Strumenti come <strong>Harvey AI, Luminance e Kira Systems</strong> stanno trasformando i grandi studi legali. Questi tool analizzano migliaia di contratti in minuti, trovano clausole rischiose, comparano giurisprudenza e redigono bozze di atti standard. Negli USA, studi come Allen & Overy e Linklaters hanno già ridotto del 30-40% il tempo degli junior associate su queste attività.</p>

      <h2>Task ad alto rischio per l'avvocato</h2>
      <ul>
        <li><strong>Ricerca giurisprudenziale e dottrinale</strong> → rischio 90%</li>
        <li><strong>Redazione contratti standard</strong> (NDA, compravendita, locazione) → rischio 82%</li>
        <li><strong>Due diligence documentale</strong> → rischio 88%</li>
        <li><strong>Atti processuali standard</strong> (ricorsi, memorie su questioni note) → rischio 65%</li>
      </ul>

      <h2>Task a basso rischio — il futuro dell'avvocato</h2>
      <ul>
        <li><strong>Difesa in udienza e cross-examination</strong> → rischio 8%</li>
        <li><strong>Strategia processuale in cause complesse</strong> → rischio 15%</li>
        <li><strong>Negoziazione e mediazione</strong> → rischio 20%</li>
        <li><strong>Relazione fiduciaria con il cliente</strong> → rischio 5%</li>
        <li><strong>Consulenza su operazioni straordinarie</strong> (M&A, ristrutturazioni) → rischio 22%</li>
      </ul>

      <h2>Chi rischia di più: il junior associate</h2>
      <p>Il paradosso dell'AI nel diritto è che colpisce <em>dal basso</em>: i junior associate dei grandi studi che passavano ore a fare ricerca e document review sono i più esposti. I soci anziani con relazioni consolidate sono i più protetti. Questo accelera la compressione della carriera legale tradizionale.</p>

      <h2>Il piano di sopravvivenza</h2>
      <p>La risposta dell'avvocato intelligente all'AI non è difendersi, ma usarla per fare 5x il lavoro. Chi impara a dirigere gli strumenti AI oggi costruisce un vantaggio competitivo enorme. La specializzazione rimane la difesa migliore: diritto penale informatico, AI Act e regolamentazione tech, diritto tributario internazionale sono aree dove la domanda supera l'offerta.</p>
      <p>→ <a href="/professione/avvocato" style="color:var(--primary,#6366f1);">Analisi completa rischio AI per avvocati</a></p>
    `,
  },

  {
    slug: 'infermiere-rischio-ai',
    title: 'L\'Infermiere è a rischio AI? La verità nel 2026',
    metaDesc: 'L\'infermiere sarà sostituito dall\'AI? Rischio solo 12%, uno dei lavori più sicuri in Italia. Scopri perché e come costruire una carriera a prova di automazione in sanità.',
    date: '2026-07-03',
    readMin: 5,
    author: 'davide',
    category: 'Professioni',
    intro: 'Con un rischio AI del 12%, l\'infermiere è una delle professioni più protette in Italia. Ma perché? E fino a quando? La risposta è più complessa — e più rassicurante — di quanto sembri.',
    content: `
      <h2>Perché l'AI non può sostituire l'infermiere</h2>
      <p>L'automazione eccelle nei task ripetitivi, prevedibili e basati su dati strutturati. Il lavoro infermieristico è l'opposto: ogni paziente è diverso, le situazioni cambiano ogni minuto, e la componente fisica e relazionale è centrale. Un robot può portare farmaci — non può tenere la mano di un paziente che ha paura.</p>
      <p>I motivi strutturali per cui il rischio rimane basso:</p>
      <ul>
        <li><strong>Destrezza fisica in ambienti non strutturati:</strong> girare un paziente immobile, inserire un catetere, gestire una crisi epilettica richiedono capacità motorie fini che la robotica non ha ancora replicato in modo affidabile</li>
        <li><strong>Giudizio clinico in situazioni di emergenza:</strong> la capacità di riconoscere un deterioramento clinico sottile richiede esperienza contestuale irriproducibile</li>
        <li><strong>Presenza terapeutica:</strong> la sola presenza umana ha effetti misurabili sui parametri vitali dei pazienti</li>
        <li><strong>Comunicazione con famiglie in crisi:</strong> nessun AI può gestire la comunicazione di una prognosi infausta</li>
      </ul>

      <h2>Cosa cambierà comunque nel lavoro infermieristico</h2>
      <p>Anche se il rischio di sostituzione è basso, il ruolo cambierà:</p>
      <ul>
        <li><strong>Monitoraggio parametri vitali</strong> → sempre più automatizzato da sensori IoT e AI predittiva. L'infermiere non starà a guardare il monitor ma riceverà alert sull'anomalia</li>
        <li><strong>Documentazione clinica</strong> → dettatura vocale + AI che compila la cartella. Risparmio di 30-40 minuti per turno</li>
        <li><strong>Supporto decisionale</strong> → AI suggerisce protocolli, allerta su interazioni farmacologiche, predice rischio cadute</li>
      </ul>
      <p>Il risultato: l'infermiere del 2030 avrà più tempo per il paziente, non meno. L'AI si occupa della burocrazia, l'umano si occupa della cura.</p>

      <h2>Come costruire una carriera infermieristica a prova di futuro</h2>
      <ul>
        <li>Specializzarsi in terapia intensiva, oncologia o sale operatorie — le aree con più complessità e minore automatizzabilità</li>
        <li>Conseguire la laurea magistrale e accedere ai ruoli di coordinamento e gestione</li>
        <li>Diventare infermiere di pratica avanzata (IPA) — figura riconosciuta che assume competenze mediche</li>
        <li>Acquisire competenze in health informatics per gestire i nuovi sistemi AI clinici</li>
      </ul>
      <p>→ <a href="/professione/infermiere" style="color:var(--primary,#6366f1);">Analisi completa rischio AI per infermieri</a></p>
    `,
  },

  {
    slug: 'insegnante-rischio-ai',
    title: 'L\'Insegnante sarà sostituito dall\'AI? Rischio e opportunità nel 2026',
    metaDesc: 'L\'insegnante rischia l\'AI? Rischio 22% — uno dei più bassi. Ma il ruolo cambierà radicalmente. Scopri come l\'AI trasformerà la didattica e come prepararsi.',
    date: '2026-07-04',
    readMin: 6,
    author: 'davide',
    category: 'Professioni',
    intro: 'ChatGPT fa i compiti degli studenti. Khan Academy usa l\'AI per tutoraggio personalizzato. Duolingo insegna le lingue con AI. Il rischio per gli insegnanti sembra alto — eppure i dati dicono il contrario. Perché?',
    content: `
      <h2>Perché il 22% di rischio sembra basso</h2>
      <p>La scuola non è solo trasmissione di contenuti. Se fosse così, i libri avrebbero sostituito gli insegnanti nel 1450, le enciclopedie nel 1900, YouTube nel 2010. L'AI è uno strumento più potente di tutti i precedenti — ma il ruolo del docente è qualcosa di diverso.</p>
      <p>L'insegnante svolge funzioni che l'AI non può replicare:</p>
      <ul>
        <li><strong>Funzione di socializzazione:</strong> la classe è dove si imparano le norme sociali, la collaborazione, il conflitto costruttivo</li>
        <li><strong>Presenza adulta di riferimento:</strong> per molti studenti l'insegnante è l'unico adulto equilibrato e disponibile nella loro vita</li>
        <li><strong>Motivazione contestuale:</strong> capire perché uno studente non rende richiede lettura del contesto familiare, sociale, emotivo</li>
        <li><strong>Gestione della classe:</strong> la dinamica di gruppo in 25 studenti è imprevedibile e richiede adattamento continuo</li>
      </ul>

      <h2>Cosa l'AI farà meglio dell'insegnante</h2>
      <p>Essere onesti è importante. L'AI è già superiore all'insegnante in alcune attività:</p>
      <ul>
        <li><strong>Spiegazione personalizzata dei contenuti:</strong> un AI tutor può adattarsi al ritmo, allo stile di apprendimento e alle lacune specifiche di ogni studente</li>
        <li><strong>Esercitazione e feedback immediato:</strong> 1000 esercizi di matematica corretti in tempo reale, con spiegazione dell'errore</li>
        <li><strong>Disponibilità 24/7:</strong> nessun insegnante può rispondere alle domande dello studente alle 23:00</li>
        <li><strong>Preparazione di materiali didattici:</strong> quiz, presentazioni, schede — attività che rubano ore al docente</li>
      </ul>

      <h2>L'insegnante del 2030: un nuovo ruolo</h2>
      <p>Il docente del futuro non spiegherà contenuti — quelli li spiegherà l'AI meglio di lui. Il suo ruolo sarà:</p>
      <ul>
        <li><strong>Facilitatore del pensiero critico:</strong> guidare gli studenti a valutare, sintetizzare e contestualizzare ciò che l'AI produce</li>
        <li><strong>Coach motivazionale:</strong> mantenere alta l'attenzione, la curiosità e la resilienza degli studenti</li>
        <li><strong>Costruttore di comunità:</strong> creare il senso di appartenenza e le dinamiche positive di gruppo</li>
        <li><strong>Esperto di AI educativa:</strong> saper scegliere, integrare e valutare gli strumenti AI per l'apprendimento</li>
      </ul>
      <p>→ <a href="/professione/insegnante" style="color:var(--primary,#6366f1);">Analisi completa rischio AI per insegnanti</a> · <a href="/blog/competenze-che-lai-non-sostituira" style="color:var(--primary,#6366f1);">Le competenze che l'AI non sostituirà</a></p>
    `,
  },

  {
    slug: 'medico-rischio-ai',
    title: 'Il Medico sarà sostituito dall\'AI? Analisi del rischio 2026',
    metaDesc: 'Il medico è a rischio AI? Rischio 28% per il medico di base, fino al 65% per il radiologo. Analisi dettagliata per specializzazione e piano di sopravvivenza.',
    date: '2026-07-05',
    readMin: 8,
    author: 'davide',
    category: 'Professioni',
    intro: 'L\'AI diagnostica i tumori meglio dei radiologi, legge ECG con precisione superiore ai cardiologi, e risponde ai pazienti con empatia simulata. Il rischio per i medici è reale — ma varia enormemente in base alla specializzazione.',
    content: `
      <h2>Non esiste "il medico a rischio AI" — dipende dalla specializzazione</h2>
      <p>Il rischio AI non è uguale per tutti i medici. Un radiologo che interpreta TAC ha un rischio del 65%. Un chirurgo plastico che opera ha un rischio del 18%. Un medico di base che fa diagnosi differenziali complesse è al 28%. La variabile chiave è: quanto del tuo lavoro è interpretazione di dati vs. presenza fisica e giudizio contestuale?</p>

      <h2>Le specializzazioni più a rischio</h2>
      <ul>
        <li><strong>Radiologo (65%):</strong> l'AI di Google DeepMind e di Siemens Healthineers già supera i radiologi umani nel rilevare tumori polmonari e retinopatia diabetica. Anno critico: 2029.</li>
        <li><strong>Patologo (60%):</strong> l'analisi istopatologica digitale con AI è già superiore alla performance umana su molti tipi di tumore.</li>
        <li><strong>Dermatologo (52%):</strong> la diagnosi AI di melanoma ha raggiunto la performance del dermatologo esperto. Rimane essenziale per la biopsia e il trattamento.</li>
        <li><strong>Medico di base (28%):</strong> il triage e la gestione di patologie comuni è automatizzabile, ma la medicina di base è ricca di complessità sociale e contestuale.</li>
      </ul>

      <h2>Le specializzazioni più protette</h2>
      <ul>
        <li><strong>Chirurgo (20%):</strong> la chirurgia robotica avanza, ma la decisione chirurgica e la gestione delle complicanze rimangono umane</li>
        <li><strong>Psichiatra (18%):</strong> la relazione terapeutica e il giudizio sulla pericolosità sono irreplicabili</li>
        <li><strong>Medico d'urgenza (15%):</strong> caos, imprevisti, decisioni in secondi — il dominio meno favorevole all'AI</li>
        <li><strong>Medico palliativista (8%):</strong> il fine vita richiede umanità, non algoritmi</li>
      </ul>

      <h2>Come l'AI cambierà la medicina (senza sostituirla)</h2>
      <p>Il modello futuro non è "AI vs. medico" ma "medico + AI". Studi dimostrano che un radiologo che usa AI supera sia il radiologo da solo che l'AI da sola. Il medico del futuro sarà un <strong>orchestratore di sistemi AI</strong> — capisce cosa l'AI vede e cosa non vede, decide quando fidarsi e quando no, gestisce i casi che l'AI non sa gestire.</p>
      <p>→ <a href="/professione/medico-base" style="color:var(--primary,#6366f1);">Rischio AI per il medico di base</a> · <a href="/professione/radiologo" style="color:var(--primary,#6366f1);">Rischio AI per il radiologo</a></p>
    `,
  },

  {
    slug: 'lavori-sicuri-con-lai',
    title: 'I 15 lavori più sicuri con l\'AI in Italia nel 2026',
    metaDesc: 'Quali sono i lavori sicuri con l\'AI? I 15 mestieri con il rischio più basso in Italia, perché sono protetti e come costruire una carriera a lungo termine.',
    date: '2026-07-06',
    readMin: 6,
    author: 'giulia',
    category: 'Analisi',
    intro: 'Non tutti i lavori sono in pericolo. Alcune professioni hanno strutture talmente lontane dall\'automazione che il rischio AI è inferiore al 20% anche nelle stime più pessimiste. Ecco quali sono e perché.',
    content: `
      <h2>Perché alcuni lavori sono strutturalmente protetti dall'AI</h2>
      <p>I lavori a basso rischio condividono almeno due di queste caratteristiche:</p>
      <ul>
        <li><strong>Alta componente fisica in ambienti non strutturati:</strong> un idraulico lavora in bagni diversi ogni giorno, con tubi vecchi di epoche diverse e problemi sempre nuovi</li>
        <li><strong>Giudizio contestuale e adattamento continuo:</strong> un pompiere non sa mai cosa trova dietro la porta</li>
        <li><strong>Relazione umana come nucleo del servizio:</strong> uno psicologo senza presenza umana non è più uno psicologo</li>
        <li><strong>Creatività autentica e visione artistica:</strong> un regista o un musicista creano cultura, non solo contenuti</li>
      </ul>

      <h2>I 15 lavori più sicuri in Italia</h2>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
          <thead><tr style="border-bottom:2px solid var(--border,#e5e7eb);">
            <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;color:#6b7280;">Professione</th>
            <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;color:#6b7280;">Rischio AI</th>
            <th style="text-align:left;padding:0.6rem 0.5rem;font-weight:600;color:#6b7280;">Anno critico</th>
          </tr></thead>
          <tbody>
            ${[
              ['Idraulico','18%','2040+','/professione/idraulico'],
              ['Psicologo','18%','2038','/professione/psicologo'],
              ['Pompiere','10%','2042+','/professione/pompiere'],
              ['Infermiere','12%','2040+','/professione/infermiere'],
              ['Chef / Cuoco creativo','18%','2040+','/professione/chef'],
              ['Chirurgo','20%','2038','/professione/chirurgo'],
              ['Personal Trainer','22%','2037','/professione/personal-trainer'],
              ['Allenatore sportivo','20%','2038','/professione/allenatore'],
              ['Insegnante','22%','2036','/professione/insegnante'],
              ['Fisioterapista','22%','2037','/professione/fisioterapista'],
              ['Logopedista','18%','2038','/professione/logopedista'],
              ['Assistente Sociale','22%','2037','/professione/assistente-sociale'],
              ['Regista','20%','2037','/professione/regista'],
              ['Musicista','22%','2038','/professione/musicista'],
              ['Elettricista','22%','2038','/professione/elettricista'],
            ].map(([nome,risk,anno,url]) => `
            <tr style="border-bottom:1px solid var(--border,#e5e7eb);">
              <td style="padding:0.65rem 0.5rem;"><a href="${url}" style="color:var(--primary,#6366f1);font-weight:600;text-decoration:none;">${nome}</a></td>
              <td style="padding:0.65rem 0.5rem;font-weight:700;color:#10b981;">${risk}</td>
              <td style="padding:0.65rem 0.5rem;color:#6b7280;">${anno}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <h2>Lavoro sicuro non significa lavoro immutabile</h2>
      <p>Anche gli idraulici useranno AI per diagnosticare guasti da remoto. Anche gli psicologi useranno strumenti digitali per il monitoraggio tra le sessioni. La sicurezza non significa che il lavoro non cambierà — significa che la presenza umana resterà centrale e non sostituibile.</p>
      <p>→ <a href="/classifica" style="color:var(--primary,#6366f1);">Vedi la classifica completa di tutte le professioni</a></p>
    `,
  },

  {
    slug: 'stipendi-futuro-ai-2030',
    title: 'Quali stipendi sopravvivranno all\'AI nel 2030? I dati',
    metaDesc: 'Quali lavori pagheranno bene nel 2030 nonostante l\'AI? Analisi degli stipendi per professione, settori in crescita e dove investire la carriera per massimizzare i guadagni.',
    date: '2026-07-07',
    readMin: 7,
    author: 'marco',
    category: 'Analisi',
    intro: 'Il mercato del lavoro si sta polarizzando: stipendi altissimi per chi sa usare l\'AI, stipendi compressi per chi viene sostituito. I dati mostrano una biforcazione netta già in corso nel 2026.',
    content: `
      <h2>La polarizzazione salariale in corso</h2>
      <p>Il fenomeno è misurabile. Secondo dati LinkedIn e Indeed del 2026, i ruoli che richiedono competenze AI hanno visto un aumento salariale medio del 23% in 18 mesi. I ruoli ad alto rischio di automazione hanno visto stipendi stagnanti o in calo reale del 8-12% (considerando l'inflazione).</p>
      <p>Non è una previsione — è già in corso.</p>

      <h2>I ruoli con gli stipendi più in crescita</h2>
      <ul>
        <li><strong>AI Engineer / ML Engineer:</strong> da €45K a €95K+ in Italia, con picchi a €150K+ per senior con 5+ anni. Domanda che supera l'offerta del 340%.</li>
        <li><strong>Prompt Engineer / AI Product Manager:</strong> ruolo emergente, €55-85K. Chi sa "parlare" con i sistemi AI in modo produttivo è raro.</li>
        <li><strong>Cybersecurity specialist:</strong> gli attacchi AI-powered richiedono difensori AI-powered. €50-90K, in forte crescita.</li>
        <li><strong>Growth Hacker con AI:</strong> chi sa usare AI per automazione marketing e acquisizione clienti vale 2-3x il marketer tradizionale.</li>
        <li><strong>Data Scientist senior:</strong> la domanda rimane alta, ma si polarizza: i junior sono compressi dall'AI, i senior che guidano decisioni valgono di più.</li>
      </ul>

      <h2>I ruoli con stipendi in compressione</h2>
      <ul>
        <li><strong>Junior copywriter/content writer:</strong> il contenuto AI è abbondante e gratuito. I writer senza specializzazione di nicchia vedono tariffe in calo del 30-50%.</li>
        <li><strong>Operatori di call center:</strong> i chatbot gestiscono l'80% dei ticket standard. I sopravvissuti fanno solo escalation complesse, a stipendi più alti ma con meno posti.</li>
        <li><strong>Analisti finanziari junior:</strong> la modellistica standard è già automatizzata. Solo i senior che interpretano e consigliano mantengono alti stipendi.</li>
        <li><strong>Traduttori generalisti:</strong> il mercato della traduzione standard è crollato. Sopravvive chi fa localizzazione creativa, audiovisivo e settori tecnici specializzati.</li>
      </ul>

      <h2>La regola degli stipendi a prova di AI</h2>
      <p>Lo stipendio dipende da quanto sei vicino alla creazione di valore e lontano dall'esecuzione di task standardizzati. La formula per il 2030: <strong>stipendio = valore creato / sostituibilità</strong>. Chi crea valore unico e difficile da automatizzare — che sia una relazione di fiducia, una competenza rarissima o la capacità di guidare sistemi AI — sarà ben remunerato. Chi esegue task replicabili vedrà il suo stipendio compresso.</p>
      <p>→ <a href="/blog/professioni-che-pagheranno-di-piu-nel-2030" style="color:var(--primary,#6366f1);">Scopri le professioni che pagheranno di più nel 2030</a></p>
    `,
  },

  {
    slug: 'agente-immobiliare-rischio-ai',
    title: 'L\'Agente Immobiliare sarà sostituito dall\'AI? Rischio 55%',
    metaDesc: 'L\'agente immobiliare è a rischio AI? Rischio 55%, anno critico 2031. Analisi di cosa automatizzerà Zillow, Casavo e i portali AI, e come sopravvivere nel real estate.',
    date: '2026-07-08',
    readMin: 5,
    author: 'marco',
    category: 'Professioni',
    intro: 'Portali come Zillow, Immobiliare.it e Casavo stanno automatizzando la ricerca, la valutazione e persino la chiusura delle compravendite. Il rischio per l\'agente immobiliare è reale — ma non uniforme.',
    content: `
      <h2>Cosa sta automatizzando il real estate AI</h2>
      <ul>
        <li><strong>Valutazione AVM (Automated Valuation Model):</strong> algoritmi come quello di Casavo valutano un immobile in secondi con precisione comparabile all'agenzia tradizionale. Rischio: 85%</li>
        <li><strong>Ricerca immobili per il cliente:</strong> i portali AI filtrano, consigliano e abbinano acquirente-immobile. Rischio: 80%</li>
        <li><strong>Gestione documentale:</strong> rogiti, visure, APE — tutto digitalizzabile. Rischio: 90%</li>
        <li><strong>Prima risposta alle lead:</strong> chatbot qualificano le lead 24/7. Rischio: 82%</li>
      </ul>

      <h2>Cosa rimane umano</h2>
      <ul>
        <li><strong>Negoziazione complessa:</strong> una trattativa su un immobile da €2M tra parti con interessi opposti non si automatizza</li>
        <li><strong>Gestione dell'emotività:</strong> comprare casa è la decisione più emotiva della vita di una famiglia</li>
        <li><strong>Network e accesso a immobili fuori mercato:</strong> le opportunità migliori non sono sui portali</li>
        <li><strong>Consulenza su mercati di nicchia:</strong> luxury real estate, commercial real estate, immobili di pregio storico</li>
      </ul>

      <h2>Il piano di sopravvivenza per l'agente immobiliare</h2>
      <p>L'agenzia tradizionale generalista è in declino strutturale. Sopravviverà chi:</p>
      <ul>
        <li>Si specializza in un segmento (luxury, commercial, distressed assets)</li>
        <li>Costruisce un personal brand digitale forte con content sul mercato locale</li>
        <li>Diventa consulente patrimoniale e non solo "intermediario di immobili"</li>
        <li>Usa l'AI per fare 10x il lavoro operativo e concentrarsi sulla relazione</li>
      </ul>
      <p>→ <a href="/professione/agente-immobiliare" style="color:var(--primary,#6366f1);">Analisi completa rischio AI per agenti immobiliari</a></p>
    `,
  },

  {
    slug: 'data-entry-sostituito-ai',
    title: 'Il Data Entry è già stato sostituito dall\'AI: cosa fare ora',
    metaDesc: 'Il data entry ha rischio AI del 92% — il più alto in Italia. L\'automazione è già in corso. Scopri cosa fare se lavori nell\'inserimento dati e come riconvertirsi.',
    date: '2026-07-09',
    readMin: 4,
    author: 'davide',
    category: 'Professioni',
    intro: 'Il data entry non verrà sostituito dall\'AI: lo è già stato, in gran parte. Con un rischio del 92% e anno critico 2027, è la professione con il rischio più alto monitorato da JobRiskAI. Cosa fare se ci lavori?',
    content: `
      <h2>La situazione attuale: non è una previsione, è il presente</h2>
      <p>Nel 2026, l'OCR avanzato, i Large Language Model e le RPA (Robotic Process Automation) gestiscono già l'inserimento di fatture, moduli, dati da PDF e form digitali con accuracy superiore al 99%. Strumenti come UiPath, Automation Anywhere e Microsoft Power Automate sono stati adottati da migliaia di aziende italiane, proprio per eliminare i ruoli di data entry.</p>
      <p>Il mercato lo conferma: le offerte di lavoro per "data entry" in Italia sono calate del 42% in 2 anni su Indeed e LinkedIn.</p>

      <h2>Se lavori nel data entry oggi, hai tre opzioni</h2>
      <p><strong>Opzione 1 — Specializzarsi nella gestione dei sistemi che ti stanno sostituendo.</strong> Le RPA e i sistemi OCR richiedono configurazione, manutenzione e gestione delle eccezioni. Chi sa usare UiPath o Power Automate vale molto più di un data entry clerk. Corso base: 3-6 mesi. Aumento stipendio: 40-80%.</p>
      <p><strong>Opzione 2 — Spostarsi verso ruoli ibridi.</strong> La gestione dati richiede ancora umani per le eccezioni complesse, la verifica qualità e la comunicazione con i dipartimenti. Il ruolo di "Data Quality Analyst" o "Process Automation Specialist" è il naturale passaggio.</p>
      <p><strong>Opzione 3 — Cambio settore verso ruoli fisici o relazionali.</strong> Se la riconversione tecnologica non fa per te, spostarsi verso ruoli che l'AI non può fare (cura alla persona, artigianato, servizi locali) è una strada legittima e spesso più soddisfacente.</p>

      <h2>La finestra temporale è stretta</h2>
      <p>Anno critico 2027 significa che nei prossimi 12 mesi l'automazione accelererà ulteriormente. Chi agisce adesso ha ancora tempo di riposizionarsi. Chi aspetta 2 anni troverà un mercato del lavoro che non riconosce più il suo profilo.</p>
      <p>→ <a href="/professione/data-entry" style="color:var(--primary,#6366f1);">Analisi completa data entry</a> · <a href="/cv-analyzer" style="color:var(--primary,#6366f1);">Analizza il tuo CV</a></p>
    `,
  },

  {
    slug: 'psicologo-rischio-ai',
    title: 'Lo Psicologo sarà sostituito dall\'AI? Rischio 18% — Ecco perché',
    metaDesc: 'Lo psicologo è a rischio AI? Rischio solo 18%, uno dei più bassi. Ma i chatbot terapeutici stanno crescendo. Analisi onesta del futuro della psicologia nell\'era AI.',
    date: '2026-07-10',
    readMin: 6,
    author: 'davide',
    category: 'Professioni',
    intro: 'Woebot, Wysa, Replika — i chatbot terapeutici hanno milioni di utenti. L\'AI sembra voler "fare psicologia". Eppure il rischio per gli psicologi umani è solo del 18%. Perché?',
    content: `
      <h2>I chatbot terapeutici: minaccia reale o complemento?</h2>
      <p>I chatbot terapeutici stanno crescendo rapidamente, specialmente per:</p>
      <ul>
        <li>Supporto tra le sessioni (journaling guidato, esercizi CBT)</li>
        <li>Triage: identificare chi ha bisogno di supporto professionale urgente</li>
        <li>Psicoeducazione: spiegare ansia, depressione, tecniche di regolazione emotiva</li>
        <li>Popolazioni che non possono permettersi la terapia o hanno barriere di accesso</li>
      </ul>
      <p>In questi ambiti, l'AI è un'integrazione potente — e può portare supporto mentale a milioni di persone che oggi non ce l'hanno. Ma non è psicoterapia.</p>

      <h2>Perché la psicoterapia rimane umana</h2>
      <p>La ricerca clinica è chiara: i fattori terapeutici più potenti sono <strong>la relazione terapeutica</strong> (alleanza terapeutica), la <strong>rottura e riparazione</strong> di quella relazione, e la <strong>presenza di un testimone umano</strong> alla sofferenza. Nessun AI ha questi tre elementi.</p>
      <p>Più in dettaglio:</p>
      <ul>
        <li><strong>La transferenza e controtransferta:</strong> fenomeni che avvengono solo in relazioni umane reali</li>
        <li><strong>Il giudizio clinico sulla pericolosità:</strong> valutare il rischio suicidario richiede lettura di segnali sottili che l'AI non può cogliere in modo affidabile</li>
        <li><strong>Le crisi:</strong> un episodio dissociativo in seduta richiede una risposta umana immediata e contestuale</li>
        <li><strong>La testimonianza del dolore:</strong> essere visti e compresi da un altro essere umano ha un effetto terapeutico irriproducibile</li>
      </ul>

      <h2>Come cambierà il ruolo dello psicologo</h2>
      <p>Lo psicologo del 2030 userà strumenti AI per:</p>
      <ul>
        <li>Monitorare i pazienti tra le sessioni (app di symptom tracking)</li>
        <li>Analizzare pattern nel diario emotivo del paziente</li>
        <li>Supervisionare decine di pazienti "in terapia con AI" per casi leggeri</li>
        <li>Concentrare le sessioni umane sui casi più complessi</li>
      </ul>
      <p>Il rischio non è la sostituzione ma la <em>devalutazione tariffaria</em> delle prestazioni standard. Specializzarsi in patologie complesse (trauma, disturbi di personalità, psicosi) è la risposta giusta.</p>
      <p>→ <a href="/professione/psicologo" style="color:var(--primary,#6366f1);">Analisi completa rischio AI per psicologi</a></p>
    `,
  },

  {
    slug: 'ai-sostituisce-contabile',
    title: 'L\'AI sta già sostituendo il Contabile: dati e alternative',
    metaDesc: 'Il contabile ha rischio AI dell\'85%. Fatture in Cloud, Xero e AI generativa stanno automatizzando la contabilità. Dati reali e strategie di riconversione per i contabili.',
    date: '2026-07-11',
    readMin: 5,
    author: 'davide',
    category: 'Professioni',
    intro: 'Con un rischio dell\'85% e anno critico 2029, il contabile tradizionale è tra le professioni più esposte in Italia. Non è una previsione — l\'automazione è già in corso e misurabile.',
    content: `
      <h2>Quanto è avanzata l'automazione contabile nel 2026</h2>
      <p>I numeri parlano chiaro. Secondo i dati del Consiglio Nazionale dei Dottori Commercialisti:</p>
      <ul>
        <li>Il 78% delle fatture italiane viene già gestito in modo semi-automatico</li>
        <li>Software come Fatture in Cloud, TeamSystem GO! e Wolters Kluwer gestiscono automaticamente prima nota, riconciliazioni e liquidazioni IVA</li>
        <li>L'AI generativa (GPT-4, Claude) risponde correttamente all'85% delle domande fiscali standard</li>
        <li>Le offerte di lavoro per "impiegato contabile" sono calate del 38% in 3 anni</li>
      </ul>

      <h2>I task già automatizzati</h2>
      <ul>
        <li>Registrazione fatture attive e passive → 95% automatizzato</li>
        <li>Riconciliazione bancaria → 90% automatizzato</li>
        <li>Calcolo e liquidazione IVA → 88% automatizzato</li>
        <li>Gestione F24 e scadenziari → 85% automatizzato</li>
        <li>Prima nota → 80% automatizzato</li>
      </ul>

      <h2>Cosa rimane e dove andare</h2>
      <p>I task che rimangono richiedono giudizio contabile avanzato: gestione delle eccezioni, contabilità in settori complessi (cantieri, commesse, valuta estera), analisi di bilancio strategica, gestione crisi finanziaria d'impresa.</p>
      <p><strong>Percorso di riconversione consigliato:</strong></p>
      <ul>
        <li><strong>Breve termine (6-12 mesi):</strong> masterizzare uno o più software di gestione AI-powered (TeamSystem, Zucchetti). Diventare il "controller" che supervisiona i sistemi automatizzati.</li>
        <li><strong>Medio termine (1-2 anni):</strong> acquisire competenze di analisi finanziaria (Excel avanzato, Power BI, Python base). Spostarsi da "chi registra" a "chi analizza".</li>
        <li><strong>Lungo termine (2-4 anni):</strong> diventare CFO part-time per PMI o specializzarsi in settori complessi dove la contabilità manuale è ancora necessaria (edilizia, agricoltura, internazionale).</li>
      </ul>
      <p>→ <a href="/professione/contabile" style="color:var(--primary,#6366f1);">Analisi completa contabile</a> · <a href="/blog/commercialista-rischio-ai-2026" style="color:var(--primary,#6366f1);">Rischio AI per il commercialista</a></p>
    `,
  },

  {
    slug: 'idraulico-rischio-ai',
    title: 'L\'Idraulico sarà sostituito dall\'AI? Perché il rischio è solo 18%',
    metaDesc: 'L\'idraulico è a rischio AI? Solo 18% — uno dei lavori più sicuri in Italia. Scopri perché i lavori manuali qualificati resistono all\'automazione e come massimizzare la carriera.',
    date: '2026-07-12',
    readMin: 4,
    author: 'davide',
    category: 'Professioni',
    intro: 'Mentre i colletti bianchi tremano, l\'idraulico dorme sonni tranquilli. Con un rischio AI del 18% e anno critico oltre il 2040, è uno dei lavori più sicuri in Italia. Ecco perché.',
    content: `
      <h2>Perché i robot non possono fare l'idraulico</h2>
      <p>L'AI e la robotica hanno fatto progressi enormi nei task cognitivi e in ambienti strutturati (fabbriche, magazzini). Ma il lavoro dell'idraulico è strutturalmente ostile all'automazione:</p>
      <ul>
        <li><strong>Ambienti non strutturati e imprevedibili:</strong> ogni bagno, ogni cantina, ogni impianto è diverso. Il robot deve essere riprogrammato ogni volta.</li>
        <li><strong>Destrezza in spazi ristretti:</strong> lavorare sotto il lavandino, in intercapedini da 30cm, con tubi arrugginiti di 40 anni fa richiede adattamento fisico continuo</li>
        <li><strong>Diagnostica contestuale:</strong> capire perché c'è una perdita richiede esperienza sensoriale (sentire, toccare, annusare) che i sensori attuali non replicano</li>
        <li><strong>Costo del robot vs. tariffa oraria:</strong> un robot idraulico costerebbe centinaia di migliaia di euro per fare quello che un idraulico fa a €40/ora</li>
      </ul>

      <h2>Come cambierà il lavoro dell'idraulico</h2>
      <p>Anche se non sarà sostituito, l'idraulico del 2030 userebbe l'AI come strumento:</p>
      <ul>
        <li>Diagnosi remota: il cliente manda video e foto, l'AI aiuta a fare un pre-diagnosi e preventivo</li>
        <li>Gestione del business: preventivi automatici, fatturazione, scheduling ottimizzato</li>
        <li>Aggiornamento normativo: l'AI tiene traccia degli aggiornamenti su norme idrauliche, sicurezza e certificazioni</li>
      </ul>

      <h2>L'opportunità imprenditoriale</h2>
      <p>Il vero vantaggio dell'idraulico nei prossimi anni non è solo sopravvivere all'AI — è prosperare mentre altri settori si distruggono. La domanda di artigiani qualificati in Italia supera già l'offerta. Chi costruisce un'impresa (anche piccola, anche da solo) con gestione digitale del business, recensioni, brand locale e tariffe premium può guadagnare molto più di molti "professionisti" ad alto rischio AI.</p>
      <p>→ <a href="/professione/idraulico" style="color:var(--primary,#6366f1);">Analisi completa rischio AI per idraulici</a> · <a href="/blog/lavori-sicuri-con-lai" style="color:var(--primary,#6366f1);">I 15 lavori più sicuri con l'AI</a></p>
    `,
  },

  {
    slug: 'intelligenza-artificiale-impatto-occupazione-italia',
    title: 'Impatto dell\'AI sull\'occupazione in Italia: i dati 2026',
    metaDesc: 'Quanti posti di lavoro perderà l\'Italia per colpa dell\'AI? Dati ISTAT, McKinsey e OCSE sull\'impatto dell\'intelligenza artificiale sull\'occupazione italiana.',
    date: '2026-07-13',
    readMin: 8,
    author: 'marco',
    category: 'Analisi',
    intro: 'Tra ottimismo e catastrofismo, i dati sull\'impatto AI sull\'occupazione italiana sono più complessi di entrambe le narrative. Ecco un\'analisi seria, basata su fonti verificabili.',
    content: `
      <h2>Cosa dicono davvero i dati</h2>
      <p>Le stime variano enormemente — e non per incompetenza dei ricercatori, ma perché dipendono dalle assunzioni di partenza:</p>
      <ul>
        <li><strong>McKinsey Global Institute (2024):</strong> il 30% dei task lavorativi in Italia può essere automatizzato entro il 2030 con la tecnologia attuale. Non il 30% dei lavori — il 30% dei task.</li>
        <li><strong>OCSE:</strong> il 14% dei lavori nei paesi sviluppati è ad "alto rischio" di automazione (>70% dei task automatizzabili). In Italia la stima sale al 18% per la struttura produttiva.</li>
        <li><strong>Goldman Sachs (2023):</strong> 300 milioni di posti di lavoro "equivalenti" a livello globale potrebbero essere automatizzati da AI generativa — ma con creazione di nuovi ruoli.</li>
        <li><strong>ISTAT (2025):</strong> già 1,2 milioni di lavoratori italiani svolgono mansioni con alta probabilità di automazione entro il 2030.</li>
      </ul>

      <h2>L'Italia ha un problema strutturale specifico</h2>
      <p>Il mercato del lavoro italiano è esposto all'automazione più della media europea per due motivi:</p>
      <ul>
        <li><strong>Alta concentrazione di lavoro amministrativo e impiegatizio:</strong> il settore terziario italiano è ricco di ruoli di back-office, impiego pubblico e lavoro documentale — tutti ad alto rischio</li>
        <li><strong>Bassa adozione di AI nelle PMI:</strong> le piccole imprese italiane (99% del tessuto produttivo) investono poco in digitale — il che le espone sia alla perdita di competitività che all'automazione tardiva ma brusca</li>
      </ul>

      <h2>I lavori che verranno creati dall'AI in Italia</h2>
      <p>Ogni rivoluzione tecnologica distrugge e crea lavoro. L'AI non è diversa. Le aree di creazione occupazionale:</p>
      <ul>
        <li><strong>AI deployment e implementation:</strong> qualcuno deve installare, configurare e mantenere questi sistemi nelle aziende</li>
        <li><strong>AI training e supervisione:</strong> i modelli AI hanno bisogno di feedback umano per migliorare</li>
        <li><strong>Nuovi servizi abilitati dall'AI:</strong> come il Web ha creato e-commerce, social media marketing e sviluppo app, l'AI creerà categorie di servizi oggi non esistenti</li>
        <li><strong>Professioni di cura e relazione:</strong> con meno bisogno di lavoro cognitivo routinario, la domanda di lavoro umano si sposta verso ciò che gli umani fanno meglio</li>
      </ul>

      <h2>La vera domanda: chi ne pagherà il costo?</h2>
      <p>La transizione non sarà indolore. I lavoratori a basse qualifiche nei ruoli ad alto rischio non possono "riqualificarsi" facilmente — specialmente se hanno 50 anni, un mutuo, e nessuna rete di sicurezza. Il costo sociale della transizione dipenderà dalle politiche pubbliche: sussidi di riqualificazione, reddito di transizione, investimento in formazione continua.</p>
      <p>→ <a href="/classifica" style="color:var(--primary,#6366f1);">Scopri il rischio AI della tua professione</a> · <a href="/blog/come-difendere-il-lavoro-dallai" style="color:var(--primary,#6366f1);">Come difendere il tuo lavoro dall'AI</a></p>
    `,
  },

  {
    slug: 'come-usare-ai-lavoro-guida-pratica',
    title: 'Come usare l\'AI nel lavoro: la guida pratica per non-tecnici (2026)',
    metaDesc: 'Come usare ChatGPT, Claude e altri strumenti AI nel lavoro quotidiano. Guida pratica con esempi concreti per commercialisti, avvocati, HR, marketing e altri professionisti.',
    date: '2026-07-14',
    readMin: 9,
    author: 'giulia',
    category: 'Guida',
    intro: 'Non serve essere programmatori per usare l\'AI nel lavoro. Serve sapere cosa chiedere e come chiederlo. Questa guida è per professionisti non tecnici che vogliono usare l\'AI adesso, senza perdersi in tecnicismi.',
    content: `
      <h2>Il principio fondamentale: l'AI è un collaboratore, non uno strumento</h2>
      <p>Chi ottiene risultati mediocri dall'AI lo tratta come un motore di ricerca ("dimmi cos'è X") o come un esecutore ("fai Y"). Chi ottiene risultati straordinari lo tratta come un collaboratore esperto a cui fornisce contesto, obiettivo e vincoli.</p>
      <p>La differenza tra un prompt mediocre e uno eccellente non è la lunghezza — è la qualità del contesto e la chiarezza dell'obiettivo.</p>

      <h2>Per commercialisti e contabili</h2>
      <p><strong>Usa AI per:</strong></p>
      <ul>
        <li>Riassumere circolari dell'Agenzia delle Entrate lunghe 40 pagine in 5 punti chiave</li>
        <li>Bozze di risposta a quesiti fiscali standard dei clienti</li>
        <li>Preparare checklist per situazioni ricorrenti (successioni, apertura SRL, ecc.)</li>
        <li>Trovare precedenti normativi su situazioni specifiche</li>
      </ul>
      <p><strong>Esempio di prompt efficace:</strong> "Sono un commercialista. Il mio cliente ha ricevuto un avviso di accertamento per l'anno 2022 riguardante costi non inerenti. L'importo contestato è €45.000. Aiutami a preparare le prime domande da fare al cliente per capire la situazione e una bozza di risposta iniziale all'Agenzia."</p>

      <h2>Per avvocati</h2>
      <p><strong>Usa AI per:</strong></p>
      <ul>
        <li>Ricerca giurisprudenziale: "Trovami sentenze della Cassazione degli ultimi 3 anni su [tema specifico]"</li>
        <li>Bozze di contratti standard (NDA, accordi di riservatezza, lettere di incarico)</li>
        <li>Sintesi di fascicoli processuali lunghi</li>
        <li>Preparare argomenti per l'udienza su entrambi i lati (per anticipare le obiezioni)</li>
      </ul>

      <h2>Per professionisti HR</h2>
      <ul>
        <li>Stesura job description ottimizzate per SEO e candidate attraction</li>
        <li>Domande di colloquio comportamentali per ruoli specifici</li>
        <li>Analisi dei feedback di uscita per trovare pattern</li>
        <li>Bozze di policy aziendali (smart working, AI usage policy, ecc.)</li>
      </ul>

      <h2>Per professionisti del marketing</h2>
      <ul>
        <li>Generazione di varianti A/B di headline e copy</li>
        <li>Analisi SWOT di competitor da informazioni pubbliche</li>
        <li>Piani editoriali mensili per social media</li>
        <li>Traduzione e adattamento locale di contenuti</li>
      </ul>

      <h2>Le regole d'oro dell'AI nel lavoro</h2>
      <ol>
        <li><strong>Mai inserire dati riservati di clienti</strong> nei modelli AI pubblici (ChatGPT, Claude gratuiti). Usa versioni API con data privacy guarantee o strumenti on-premise.</li>
        <li><strong>Verifica sempre i risultati.</strong> L'AI sbaglia — in modo sicuro e convincente. Tratta ogni output come una bozza da rivedere, non come una risposta definitiva.</li>
        <li><strong>Dai sempre contesto.</strong> Più l'AI sa del tuo contesto professionale, più le risposte sono utili.</li>
        <li><strong>Itera.</strong> Se la prima risposta non va bene, non ricominciare — chiedi all'AI di migliorarla specificando cosa non va.</li>
      </ol>
      <p>→ <a href="/blog/come-usare-chatgpt-per-non-perdere-il-lavoro" style="color:var(--primary,#6366f1);">Come usare ChatGPT per non perdere il lavoro</a></p>
    `,
  },

  {
    slug: 'recruiter-ai-futuro-selezione-personale',
    title: 'Il Recruiter sarà sostituito dall\'AI? Il futuro della selezione del personale',
    metaDesc: 'Il recruiter è a rischio AI? Rischio 55%, anno critico 2030. Lo screening CV è già automatizzato. Analisi del futuro della selezione personale e strategie di sopravvivenza.',
    date: '2026-07-15',
    readMin: 6,
    author: 'marco',
    category: 'Professioni',
    intro: 'L\'AI già screening CV, fa colloqui di primo livello, valuta i candidati con assessment adattivi e predice il turnover. Il recruiter tradizionale è in pericolo — ma non tutti i recruiter sono uguali.',
    content: `
      <h2>Cosa fa già l'AI nel recruitment nel 2026</h2>
      <ul>
        <li><strong>Screening CV:</strong> strumenti come Workday AI, Greenhouse e HireVue analizzano migliaia di CV in minuti, classificano i candidati e segnalano i migliori match. Accuratezza comparabile o superiore al recruiter umano su criteri oggettivi.</li>
        <li><strong>Colloqui video analitici:</strong> HireVue analizza espressioni facciali, tono di voce e contenuto delle risposte. Già usato da Unilever, Vodafone, Deutsche Bank.</li>
        <li><strong>Assessment adattivi:</strong> test di personalità e cognitive ability somministrati e interpretati automaticamente</li>
        <li><strong>Sourcing passivo:</strong> l'AI scansiona LinkedIn, GitHub, Behance e altri network per trovare candidati non in ricerca attiva</li>
        <li><strong>Gestione comunicazioni:</strong> chatbot gestiscono le FAQ dei candidati 24/7</li>
      </ul>

      <h2>Il grande rischio: i recruiter junior</h2>
      <p>Lo screening manuale di CV, i colloqui telefonici di primo livello, la pubblicazione di annunci, la gestione delle risposte ai candidati — queste attività occupano la maggior parte del tempo di un recruiter junior. Sono tutte già automatizzabili.</p>

      <h2>I recruiter che sopravvivono</h2>
      <p>Esistono tre tipologie di recruiter ad alto valore che l'AI non può sostituire:</p>
      <ul>
        <li><strong>L'executive headhunter:</strong> trovare e convincere un CFO passivo a lasciare un'azienda che lo paga bene richiede relazioni, credibilità e persuasione umana</li>
        <li><strong>Il recruiter specializzato in settori di nicchia:</strong> chi conosce profondamente la community dei developer blockchain, dei cardiochirurghi o dei top chef sa valutare candidati che l'AI non sa leggere</li>
        <li><strong>L'employer brand strategist:</strong> costruire la reputazione dell'azienda come datore di lavoro è un lavoro creativo e relazionale</li>
      </ul>

      <h2>Il piano di sopravvivenza</h2>
      <p>Se fai recruiting, il momento di agire è adesso. Le mosse da fare:</p>
      <ul>
        <li>Imparare a usare gli strumenti AI (Workday AI, Greenhouse, HireVue) — chi li sa usare sostituisce chi non li sa usare</li>
        <li>Spostarsi sull'executive search e sulle nicchie specializzate</li>
        <li>Sviluppare competenze in employer branding e talent strategy</li>
        <li>Costruire un network professionale forte nel proprio settore di specializzazione</li>
      </ul>
      <p>→ <a href="/professione/talent-acquisition" style="color:var(--primary,#6366f1);">Rischio AI per talent acquisition</a> · <a href="/professione/hr-manager" style="color:var(--primary,#6366f1);">Rischio AI per HR manager</a></p>
    `,
  },

];

// ── Template articolo ─────────────────────────────────────────────────────────
function buildArticle(art) {
  const au = AUTHORS[art.author] || AUTHORS.marco;

  const articleJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: art.title,
    description: art.metaDesc,
    datePublished: art.date,
    dateModified: art.date,
    author: { '@type': 'Person', name: au.name, jobTitle: au.role, url: au.linkedin },
    publisher: { '@type': 'Organization', name: 'JobRiskAI', logo: { '@type': 'ImageObject', url: 'https://www.jobriskai.it/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.jobriskai.it/blog/${art.slug}` },
    image: 'https://www.jobriskai.it/og-image.png',
  }, null, 2);

  const breadcrumbJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'JobRiskAI', item: 'https://www.jobriskai.it/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.jobriskai.it/blog' },
      { '@type': 'ListItem', position: 3, name: art.title, item: `https://www.jobriskai.it/blog/${art.slug}` },
    ],
  }, null, 2);

  const dateFormatted = new Date(art.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(art.title)} | JobRiskAI Blog</title>
  <meta name="description" content="${esc(art.metaDesc)}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="https://www.jobriskai.it/blog/${art.slug}">
  <meta property="og:title" content="${esc(art.title)} | JobRiskAI">
  <meta property="og:description" content="${esc(art.metaDesc)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.jobriskai.it/blog/${art.slug}">
  <meta property="og:image" content="https://www.jobriskai.it/og-image.png">
  <meta property="og:site_name" content="JobRiskAI">
  <meta property="og:locale" content="it_IT">
  <meta property="article:published_time" content="${art.date}">
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <script type="application/ld+json">${articleJsonLd}</script>
  <script type="application/ld+json">${breadcrumbJsonLd}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <style>
    .blog-shell { max-width: 720px; margin: 3rem auto 5rem; padding: 0 1.5rem; }
    .blog-article h2 { font-family:'Space Grotesk',sans-serif; font-size:1.3rem; font-weight:700; color:var(--text-primary); margin:2rem 0 0.75rem; }
    .blog-article h3 { font-size:1.05rem; font-weight:700; color:var(--text-primary); margin:1.5rem 0 0.5rem; }
    .blog-article p  { font-size:0.97rem; color:var(--text-primary); line-height:1.75; margin-bottom:1rem; }
    .blog-article ul, .blog-article ol { margin:0 0 1rem 1.25rem; }
    .blog-article li { font-size:0.95rem; color:var(--text-primary); line-height:1.7; margin-bottom:0.4rem; }
    .blog-article table { width:100%; border-collapse:collapse; margin:1.5rem 0; font-size:0.9rem; }
    .blog-article a { color:var(--primary,#6366f1); }
    .blog-cta { background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(59,130,246,0.04)); border:1px solid rgba(99,102,241,0.2); border-radius:16px; padding:1.5rem; text-align:center; margin:2.5rem 0; }
  </style>
</head>
<body>
  <header role="banner">
    <div class="header-content">
      <a href="/" style="display:inline-flex;align-items:center;gap:0.45rem;color:var(--primary);text-decoration:none;font-weight:600;font-size:0.88rem;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.22);border-radius:8px;padding:0.42rem 0.9rem;" onmouseover="this.style.background='rgba(99,102,241,0.14)'" onmouseout="this.style.background='rgba(99,102,241,0.07)'">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
        Home
      </a>
      <div class="header-info" data-i18n="blog_header_article">Blog — AI e Lavoro</div>
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <a href="/blog" data-i18n="blog_all_articles" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">📖 Tutti gli articoli</a>
        <select id="langSelect" aria-label="Seleziona lingua" style="background:transparent;color:var(--ink-1,#1e293b);border:1px solid var(--border-soft,#e2e8f0);border-radius:8px;padding:0.3rem 0.45rem;font-size:0.8rem;cursor:pointer;font-family:inherit;outline:none;">
          <option value="it">🇮🇹 IT</option>
          <option value="en">🇬🇧 EN</option>
          <option value="es">🇪🇸 ES</option>
          <option value="de">🇩🇪 DE</option>
          <option value="fr">🇫🇷 FR</option>
        </select>
      </div>
    </div>
  </header>

  <main role="main">
    <div class="blog-shell">

      <nav style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:1.5rem;">
        <a href="/" style="color:var(--text-secondary);text-decoration:none;">JobRiskAI</a>
        <span style="margin:0 0.4rem;">›</span>
        <a href="/blog" style="color:var(--text-secondary);text-decoration:none;">Blog</a>
        <span style="margin:0 0.4rem;">›</span>
        <span style="color:var(--text-primary);font-weight:500;">${esc(art.category)}</span>
      </nav>

      <div style="margin-bottom:2rem;">
        <span style="display:inline-block;background:rgba(99,102,241,0.1);color:var(--primary);font-size:0.78rem;font-weight:600;padding:0.25rem 0.75rem;border-radius:999px;margin-bottom:1rem;">${esc(art.category)}</span>
        <h1 style="font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:700;color:var(--text-primary);line-height:1.25;margin-bottom:1rem;">${esc(art.title)}</h1>
        <p style="font-size:1.05rem;color:var(--text-secondary);line-height:1.65;margin-bottom:1rem;">${esc(art.intro)}</p>
        <div style="display:flex;align-items:center;gap:0.75rem;padding:0.85rem 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
          ${authorAvatar(au, 38)}
          <div style="flex:1;min-width:0;">
            <div style="font-size:0.88rem;font-weight:600;color:var(--text-primary);">${esc(au.name)}</div>
            <div style="font-size:0.78rem;color:var(--text-secondary);">${esc(au.role)} · ${dateFormatted} · ${art.readMin} min di lettura</div>
          </div>
          <a href="${au.linkedin}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:0.3rem;font-size:0.76rem;color:#0A66C2;font-weight:600;text-decoration:none;padding:0.3rem 0.65rem;border:1px solid #0A66C2;border-radius:999px;flex-shrink:0;" onmouseover="this.style.background='#0A66C2';this.style.color='white'" onmouseout="this.style.background='';this.style.color='#0A66C2'">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>

      <article class="blog-article">
        ${art.content}
      </article>

      <div class="blog-cta">
        <p data-i18n="blog_cta_title" style="font-weight:700;font-size:1.05rem;color:var(--text-primary);margin-bottom:0.4rem;">Il tuo lavoro è a rischio AI?</p>
        <p data-i18n="blog_cta_sub" style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.25rem;">Scoprilo gratis in meno di un minuto — cerca la tua professione o analizza il tuo CV.</p>
        <a href="/classifica" data-i18n="blog_cta_btn1" style="display:inline-block;background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:white;padding:0.85rem 1.75rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.95rem;margin:0.3rem;">📋 Sfoglia tutte le professioni</a>
        <a href="/cv-analyzer" data-i18n="blog_cta_btn2" style="display:inline-block;background:white;color:var(--primary);border:2px solid var(--primary);padding:0.8rem 1.6rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.92rem;margin:0.3rem;">📄 Analizza il tuo CV</a>
      </div>

      <!-- Bio autore -->
      <div style="display:flex;gap:1.25rem;align-items:flex-start;background:#f9fafb;border:1px solid var(--border);border-radius:16px;padding:1.5rem;margin:2.5rem 0 0;">
        ${authorAvatar(au, 56)}
        <div>
          <div style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.25rem;">Sull'autore</div>
          <div style="font-size:0.95rem;font-weight:700;color:var(--text-primary);margin-bottom:0.2rem;">${esc(au.name)}</div>
          <div style="font-size:0.8rem;color:${au.color};font-weight:600;margin-bottom:0.6rem;">${esc(au.role)}</div>
          <p style="font-size:0.87rem;color:var(--text-secondary);line-height:1.65;margin:0 0 0.75rem;">${esc(au.bio)}</p>
          <a href="${au.linkedin}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.8rem;color:#0A66C2;font-weight:600;text-decoration:none;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Segui su LinkedIn
          </a>
        </div>
      </div>

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);">
        <p data-i18n="blog_related" style="font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:1rem;">Altri articoli</p>
        <div style="display:grid;gap:0.75rem;">
          ${articles.filter(a => a.slug !== art.slug).slice(0,3).map(a => `
          <a href="/blog/${a.slug}" style="display:block;padding:0.9rem 1rem;border:1px solid var(--border);border-radius:12px;text-decoration:none;color:var(--text-primary);background:white;transition:border-color 0.15s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border,#e5e7eb)'">
            <div style="font-size:0.78rem;color:var(--primary);font-weight:600;margin-bottom:0.25rem;">${esc(a.category)}</div>
            <div style="font-size:0.92rem;font-weight:600;color:var(--text-primary);">${esc(a.title)}</div>
          </a>`).join('')}
        </div>
      </div>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p data-i18n="blog_footer" class="footer-text">JobRiskAI · Blog su AI e futuro del lavoro</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/blog" style="color:var(--text-secondary);">Blog</a> · <a href="/classifica" style="color:var(--text-secondary);">Classifica</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
      <nav aria-label="Footer links" style="margin-top:0.5rem;">
        <a href="/privacy-policy" data-i18n="footer_links_privacy" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Privacy Policy</a>
        <a href="/termini-servizio" data-i18n="footer_links_terms" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Termini di Servizio</a>
        <a href="/chi-siamo" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Chi Siamo</a>
        <a href="mailto:hello@jobriskai.it" style="color:var(--text-secondary);font-size:0.8rem;">Contatti</a>
      </nav>
    </div>
  </footer>
  <script type="module" src="/page-i18n.js"></script>
</body>
</html>`;
}

// ── Template indice blog ──────────────────────────────────────────────────────
function buildIndex() {
  const breadcrumbJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'JobRiskAI', item: 'https://www.jobriskai.it/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.jobriskai.it/blog' },
    ],
  }, null, 2);

  const cards = articles.map(a => {
    const au = AUTHORS[a.author] || AUTHORS.marco;
    const dateFormatted = new Date(a.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
    return `
    <a href="/blog/${a.slug}" style="display:block;background:white;border:1px solid var(--border);border-radius:16px;padding:1.5rem;text-decoration:none;color:var(--text-primary);transition:all 0.18s;box-shadow:0 1px 3px rgba(0,0,0,0.04);" onmouseover="this.style.borderColor='var(--primary)';this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px -8px rgba(99,102,241,0.2)'" onmouseout="this.style.borderColor='var(--border,#e5e7eb)';this.style.transform='none';this.style.boxShadow='0 1px 3px rgba(0,0,0,0.04)'">
      <span style="display:inline-block;background:rgba(99,102,241,0.1);color:var(--primary);font-size:0.74rem;font-weight:600;padding:0.2rem 0.65rem;border-radius:999px;margin-bottom:0.75rem;">${esc(a.category)}</span>
      <h2 style="font-family:'Space Grotesk',sans-serif;font-size:1.08rem;font-weight:700;color:var(--text-primary);line-height:1.35;margin-bottom:0.6rem;">${esc(a.title)}</h2>
      <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.6;margin-bottom:1rem;">${esc(a.intro.substring(0,140))}…</p>
      <div style="display:flex;align-items:center;gap:0.6rem;font-size:0.78rem;color:var(--text-secondary);">
        ${authorAvatar(au, 24)}
        <span style="font-weight:600;color:var(--text-primary);">${esc(au.name)}</span>
        <span>·</span>
        <span>${dateFormatted}</span>
        <span>·</span>
        <span>${a.readMin} min</span>
      </div>
    </a>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog AI e Lavoro: Guide, Analisi e Consigli | JobRiskAI</title>
  <meta name="description" content="Articoli su intelligenza artificiale e futuro del lavoro: le professioni più a rischio, come difendersi, quali competenze sviluppare. Aggiornato 2026.">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="https://www.jobriskai.it/blog">
  <meta property="og:title" content="Blog AI e Lavoro | JobRiskAI">
  <meta property="og:description" content="Guide pratiche su AI e futuro del lavoro: professioni a rischio, competenze da sviluppare, come usare ChatGPT per non essere sostituito.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.jobriskai.it/blog">
  <meta property="og:image" content="https://www.jobriskai.it/og-image.png">
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <script type="application/ld+json">${breadcrumbJsonLd}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <header role="banner">
    <div class="header-content">
      <a href="/" style="display:inline-flex;align-items:center;gap:0.45rem;color:var(--primary);text-decoration:none;font-weight:600;font-size:0.88rem;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.22);border-radius:8px;padding:0.42rem 0.9rem;" onmouseover="this.style.background='rgba(99,102,241,0.14)'" onmouseout="this.style.background='rgba(99,102,241,0.07)'">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
        Home
      </a>
      <div class="header-info" data-i18n="blog_index_header">Blog — AI e Futuro del Lavoro</div>
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <a href="/classifica" data-i18n="blog_index_ranking" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">📊 Classifica professioni</a>
        <select id="langSelect" aria-label="Seleziona lingua" style="background:transparent;color:var(--ink-1,#1e293b);border:1px solid var(--border-soft,#e2e8f0);border-radius:8px;padding:0.3rem 0.45rem;font-size:0.8rem;cursor:pointer;font-family:inherit;outline:none;">
          <option value="it">🇮🇹 IT</option>
          <option value="en">🇬🇧 EN</option>
          <option value="es">🇪🇸 ES</option>
          <option value="de">🇩🇪 DE</option>
          <option value="fr">🇫🇷 FR</option>
        </select>
      </div>
    </div>
  </header>

  <main role="main">
    <div style="max-width:800px;margin:3rem auto 5rem;padding:0 1.5rem;">

      <nav style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:1.5rem;">
        <a href="/" style="color:var(--text-secondary);text-decoration:none;">JobRiskAI</a>
        <span style="margin:0 0.4rem;">›</span>
        <span style="color:var(--text-primary);font-weight:500;">Blog</span>
      </nav>

      <h1 data-i18n="blog_index_title" style="font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">Blog: AI e Futuro del Lavoro</h1>
      <p data-i18n="blog_index_sub" style="color:var(--text-secondary);font-size:1rem;margin-bottom:2.5rem;">Guide pratiche, analisi e dati per capire come l'intelligenza artificiale sta trasformando le professioni italiane.</p>

      <div style="display:grid;gap:1.25rem;">
        ${cards}
      </div>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p data-i18n="blog_footer" class="footer-text">JobRiskAI · Blog su AI e futuro del lavoro</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/classifica" style="color:var(--text-secondary);">Classifica</a> · <a href="/calcolatore" style="color:var(--text-secondary);">Calcolatore</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
      <nav aria-label="Footer links" style="margin-top:0.5rem;">
        <a href="/privacy-policy" data-i18n="footer_links_privacy" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Privacy Policy</a>
        <a href="/termini-servizio" data-i18n="footer_links_terms" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Termini di Servizio</a>
        <a href="/chi-siamo" style="color:var(--text-secondary);font-size:0.8rem;margin-right:1rem;">Chi Siamo</a>
        <a href="mailto:hello@jobriskai.it" style="color:var(--text-secondary);font-size:0.8rem;">Contatti</a>
      </nav>
    </div>
  </footer>
  <script type="module" src="/page-i18n.js"></script>
</body>
</html>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, 'index.html'), buildIndex(), 'utf8');
console.log('✅ Blog index generato: public/blog/index.html');

for (const art of articles) {
  writeFileSync(join(outDir, `${art.slug}.html`), buildArticle(art), 'utf8');
  console.log(`✅ ${art.slug}.html`);
}

// Aggiorna sitemap
const sitemapPath = join(ROOT, 'public/sitemap.xml');
let sitemap = readFileSync(sitemapPath, 'utf8');
const today = new Date().toISOString().split('T')[0];

const blogUrls = [
  'https://www.jobriskai.it/blog',
  ...articles.map(a => `https://www.jobriskai.it/blog/${a.slug}`),
];

// Rimuovi eventuali voci blog già presenti
sitemap = sitemap.replace(/<url>\s*<loc>https:\/\/www\.jobriskai\.it\/blog[^<]*<\/loc>[\s\S]*?<\/url>/g, '');

const newEntries = blogUrls.map((url, i) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${i === 0 ? 'weekly' : 'monthly'}</changefreq>
    <priority>${i === 0 ? '0.8' : '0.7'}</priority>
  </url>`).join('');

sitemap = sitemap.replace('</urlset>', newEntries + '\n</urlset>');
writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`\n🗺️  Sitemap aggiornata con ${blogUrls.length} URL blog.`);
