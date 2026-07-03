// scripts/build-blog.mjs
// Genera public/blog/index.html + public/blog/[slug].html per ogni articolo.

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT    = join(__dirname, '..');
const outDir  = join(ROOT, 'public/blog');

function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Dati articoli ─────────────────────────────────────────────────────────────
const articles = [

  {
    slug: 'le-20-professioni-piu-a-rischio-ai',
    title: 'Le 20 professioni più a rischio AI in Italia nel 2026',
    metaDesc: 'Scopri quali sono i 20 lavori più a rischio di sostituzione da parte dell\'intelligenza artificiale in Italia. Dati aggiornati al 2026 con anno critico e piano di sopravvivenza.',
    date: '2026-06-15',
    readMin: 7,
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

];

// ── Template articolo ─────────────────────────────────────────────────────────
function buildArticle(art) {
  const articleJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: art.title,
    description: art.metaDesc,
    datePublished: art.date,
    dateModified: art.date,
    author: { '@type': 'Organization', name: 'JobRiskAI', url: 'https://www.jobriskai.it' },
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
      <div class="header-info">Blog — AI e Lavoro</div>
      <a href="/blog" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">📖 Tutti gli articoli</a>
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
        <div style="display:flex;align-items:center;gap:1rem;font-size:0.82rem;color:var(--text-secondary);padding:0.75rem 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
          <span>✍️ JobRiskAI</span>
          <span>·</span>
          <span>📅 ${dateFormatted}</span>
          <span>·</span>
          <span>⏱️ ${art.readMin} min di lettura</span>
        </div>
      </div>

      <article class="blog-article">
        ${art.content}
      </article>

      <div class="blog-cta">
        <p style="font-weight:700;font-size:1.05rem;color:var(--text-primary);margin-bottom:0.4rem;">Il tuo lavoro è a rischio AI?</p>
        <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.25rem;">Scoprilo gratis in meno di un minuto — cerca la tua professione o analizza il tuo CV.</p>
        <a href="/classifica" style="display:inline-block;background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:white;padding:0.85rem 1.75rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.95rem;margin:0.3rem;">📋 Sfoglia tutte le professioni</a>
        <a href="/cv-analyzer" style="display:inline-block;background:white;color:var(--primary);border:2px solid var(--primary);padding:0.8rem 1.6rem;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.92rem;margin:0.3rem;">📄 Analizza il tuo CV</a>
      </div>

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);">
        <p style="font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:1rem;">Altri articoli</p>
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
      <p class="footer-text">JobRiskAI · Blog su AI e futuro del lavoro</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/blog" style="color:var(--text-secondary);">Blog</a> · <a href="/classifica" style="color:var(--text-secondary);">Classifica</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
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
    const dateFormatted = new Date(a.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
    return `
    <a href="/blog/${a.slug}" style="display:block;background:white;border:1px solid var(--border);border-radius:16px;padding:1.5rem;text-decoration:none;color:var(--text-primary);transition:all 0.18s;box-shadow:0 1px 3px rgba(0,0,0,0.04);" onmouseover="this.style.borderColor='var(--primary)';this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px -8px rgba(99,102,241,0.2)'" onmouseout="this.style.borderColor='var(--border,#e5e7eb)';this.style.transform='none';this.style.boxShadow='0 1px 3px rgba(0,0,0,0.04)'">
      <span style="display:inline-block;background:rgba(99,102,241,0.1);color:var(--primary);font-size:0.74rem;font-weight:600;padding:0.2rem 0.65rem;border-radius:999px;margin-bottom:0.75rem;">${esc(a.category)}</span>
      <h2 style="font-family:'Space Grotesk',sans-serif;font-size:1.08rem;font-weight:700;color:var(--text-primary);line-height:1.35;margin-bottom:0.6rem;">${esc(a.title)}</h2>
      <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.6;margin-bottom:1rem;">${esc(a.intro.substring(0,140))}…</p>
      <div style="display:flex;align-items:center;gap:0.75rem;font-size:0.78rem;color:var(--text-secondary);">
        <span>📅 ${dateFormatted}</span>
        <span>·</span>
        <span>⏱️ ${a.readMin} min</span>
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
      <div class="header-info">Blog — AI e Futuro del Lavoro</div>
      <a href="/classifica" style="font-size:0.85rem;color:var(--primary);text-decoration:none;font-weight:600;">📊 Classifica professioni</a>
    </div>
  </header>

  <main role="main">
    <div style="max-width:800px;margin:3rem auto 5rem;padding:0 1.5rem;">

      <nav style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:1.5rem;">
        <a href="/" style="color:var(--text-secondary);text-decoration:none;">JobRiskAI</a>
        <span style="margin:0 0.4rem;">›</span>
        <span style="color:var(--text-primary);font-weight:500;">Blog</span>
      </nav>

      <h1 style="font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">Blog: AI e Futuro del Lavoro</h1>
      <p style="color:var(--text-secondary);font-size:1rem;margin-bottom:2.5rem;">Guide pratiche, analisi e dati per capire come l'intelligenza artificiale sta trasformando le professioni italiane.</p>

      <div style="display:grid;gap:1.25rem;">
        ${cards}
      </div>

    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p class="footer-text">JobRiskAI · Blog su AI e futuro del lavoro</p>
      <p class="footer-text" style="font-size:0.8rem;">© 2026 JobRiskAI · <a href="/classifica" style="color:var(--text-secondary);">Classifica</a> · <a href="/calcolatore" style="color:var(--text-secondary);">Calcolatore</a> · <a href="/cv-analyzer" style="color:var(--text-secondary);">Analisi CV</a></p>
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

writeFileSync(join(outDir, 'index.html'), buildIndex(), 'utf8');
console.log('✅ Blog index generato: public/blog/index.html');

for (const art of articles) {
  writeFileSync(join(outDir, `${art.slug}.html`), buildArticle(art), 'utf8');
  console.log(`✅ ${art.slug}.html`);
}

// Aggiorna sitemap
import { readFileSync } from 'fs';
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
