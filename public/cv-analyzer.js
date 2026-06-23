// cv-analyzer.js — ES Module
// Usa le traduzioni da page-i18n.js per tutti i testi dinamici.

import { getT, getCurrentLang } from '/page-i18n.js';

const cvUploadArea    = document.getElementById('cvUploadArea');
const cvFileInput     = document.getElementById('cvFileInput');
const cvResultsArea   = document.getElementById('cvResultsArea');
const cvLoadingState  = document.getElementById('cvLoadingState');
const cvResultsDisplay= document.getElementById('cvResultsDisplay');
const cvErrorState    = document.getElementById('cvErrorState');

// ── Drag & drop ───────────────────────────────────────────
cvUploadArea.addEventListener('click', () => cvFileInput.click());

cvUploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    cvUploadArea.style.borderColor  = 'var(--primary)';
    cvUploadArea.style.background   = 'rgba(99, 102, 241, 0.08)';
});
cvUploadArea.addEventListener('dragleave', () => {
    cvUploadArea.style.borderColor  = 'rgba(99, 102, 241, 0.5)';
    cvUploadArea.style.background   = 'rgba(255, 255, 255, 0.02)';
});
cvUploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFileSelect(files[0]);
});
cvFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleFileSelect(e.target.files[0]);
});

// ── Gestione file ─────────────────────────────────────────
async function handleFileSelect(file) {
    const t = getT();
    if (file.type !== 'application/pdf') {
        showError(t.cva_error_not_pdf);
        return;
    }
    if (file.size > 10 * 1024 * 1024) {
        showError(t.cva_error_too_large);
        return;
    }
    try {
        const text = await extractTextFromPDF(file);
        if (text.trim().length < 50) {
            showError(t.cva_error_no_text);
            return;
        }
        await analyzeCVText(text);
    } catch (error) {
        console.error('Error processing PDF:', error);
        showError(t.cva_error_process + ': ' + error.message);
    }
}

async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = '';
    const maxPages = Math.min(pdf.numPages, 10);
    for (let i = 1; i <= maxPages; i++) {
        const page    = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(item => item.str).join(' ') + ' ';
    }
    return text;
}

// ── Cache browser (SHA-256 + localStorage, TTL 45 giorni) ─
const CACHE_TTL_MS  = 45 * 24 * 60 * 60 * 1000; // 45 giorni
const CACHE_VERSION = '3';                         // incrementa per invalidare tutta la cache

async function hashCVText(text) {
    const normalized = text.trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 15000);
    const encoded    = new TextEncoder().encode(normalized);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0')).join('');
}

function cacheGet(hash) {
    try {
        const raw = localStorage.getItem(`jrai_cv_${hash}`);
        if (!raw) return null;
        const entry = JSON.parse(raw);
        if (entry.version !== CACHE_VERSION) return null;
        if (Date.now() - entry.cachedAt > CACHE_TTL_MS) {
            localStorage.removeItem(`jrai_cv_${hash}`);
            return null;
        }
        return entry.result;
    } catch { return null; }
}

function cacheSet(hash, result) {
    try {
        localStorage.setItem(`jrai_cv_${hash}`, JSON.stringify({
            version: CACHE_VERSION,
            cachedAt: Date.now(),
            result,
        }));
    } catch { /* quota exceeded — ignora */ }
}

// ── Chiamata API ──────────────────────────────────────────
async function analyzeCVText(cvText) {
    const t = getT();
    cvResultsArea.style.display    = 'block';
    cvLoadingState.style.display   = 'block';
    cvResultsDisplay.style.display = 'none';
    cvErrorState.style.display     = 'none';

    try {
        // 1. Controlla cache
        const hash   = await hashCVText(cvText);
        const cached = cacheGet(hash);
        if (cached) {
            displayResults(cached);
            return;
        }

        // 2. Chiama API
        const response = await fetch('/api/analyze-cv', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cvText: cvText.slice(0, 15000), lang: getCurrentLang() })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP ${response.status}`);
        }

        const data = await response.json();

        // 3. Salva in cache e mostra
        cacheSet(hash, data);
        displayResults(data);
    } catch (error) {
        console.error('CV analysis error:', error);
        showError(getT().cva_error_api);
    } finally {
        cvLoadingState.style.display = 'none';
    }
}

// ── Config affiliati ──────────────────────────────────────
const AMAZON_AFFILIATE_TAG   = 'jobriskai-21';
// Coursera: inserisci il tuo publisher ID Impact quando arriva l'approvazione
// Formato link: https://imp.i384100.net/c/{PUBLISHER_ID}/1347618/14726?u={ENCODED_URL}
const COURSERA_PUBLISHER_ID  = ''; // es. '1234567'

function courseUrl(course) {
    const q          = encodeURIComponent(course.search_query || course.title);
    const baseUrl    = course.platform === 'LinkedIn Learning'
        ? `https://www.linkedin.com/learning/search?keywords=${q}`
        : `https://www.coursera.org/search?query=${q}`;

    // Usa link affiliato Impact se il publisher ID è configurato (solo Coursera)
    if (COURSERA_PUBLISHER_ID && course.platform === 'Coursera') {
        return `https://imp.i384100.net/c/${COURSERA_PUBLISHER_ID}/1347618/14726?u=${encodeURIComponent(baseUrl)}`;
    }
    return baseUrl;
}

function amazonUrl(book) {
    // Link diretto via ISBN-13 → pagina prodotto esatta su Amazon
    if (book.isbn13) {
        return `https://www.amazon.it/s?k=${book.isbn13}&tag=${AMAZON_AFFILIATE_TAG}`;
    }
    // Fallback: ricerca per titolo + autore
    const q = encodeURIComponent(`${book.title} ${book.author}`);
    return `https://www.amazon.it/s?k=${q}&tag=${AMAZON_AFFILIATE_TAG}`;
}

// ── Fetch metadati libro (Google Books API — cover + rating) ──
async function fetchBookMeta(isbn13, title, author) {
    async function queryBooks(q) {
        const r = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=1`);
        if (!r.ok) return null;
        const j = await r.json();
        return j.items?.[0]?.volumeInfo || null;
    }
    try {
        // Prova prima per ISBN, poi per titolo+autore come fallback
        let v = isbn13 ? await queryBooks(`isbn:${isbn13}`) : null;
        if (!v?.imageLinks?.thumbnail && (title || author)) {
            v = await queryBooks(`intitle:${title || ''} inauthor:${author || ''}`);
        }
        if (!v) return null;
        return {
            thumbnail:   v.imageLinks?.thumbnail?.replace('http:', 'https:') || null,
            rating:      v.averageRating   || null,
            ratingCount: v.ratingsCount    || null,
        };
    } catch { return null; }
}

function renderStars(rating) {
    if (!rating) return null;
    const full  = Math.floor(rating);
    const half  = rating % 1 >= 0.5;
    let stars   = '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
    return `${stars} ${rating.toFixed(1)}`;
}

// ── Strategia personalizzata ──────────────────────────────
function renderStrategy(data) {
    const { ai_exposure_score, risk_level, missing_skills, recommended_roles } = data;
    const card     = document.getElementById('cvStrategyCard');
    const introEl  = document.getElementById('cvStrategyIntro');
    const timeline = document.getElementById('cvStrategyTimeline');

    const skill1   = missing_skills?.[0] || 'competenze strategiche';
    const skill2   = missing_skills?.[1] || missing_skills?.[0] || 'nuove competenze';
    const role1    = recommended_roles?.[0] || 'ruoli a minor rischio';

    // Intro personalizzata per livello di rischio
    const intros = {
        high:   `Con un punteggio di ${ai_exposure_score}/100, il tuo profilo è ad alto rischio di automazione — ma hai ancora tempo per agire. La chiave non è evitare l'AI: è diventare la persona che la supervisiona, la guida e risolve i problemi che lei non può. Ecco come affrontare i prossimi 3 mesi in modo strutturato, prima di investire in corsi e libri.`,
        medium: `Con un punteggio di ${ai_exposure_score}/100, sei in una zona di transizione: i tuoi task più ripetitivi saranno automatizzati nei prossimi anni, ma il tuo ruolo non sparirà se ti muovi adesso. I prossimi 3 mesi sono il momento giusto per costruire il differenziale che ti renderà difficile da sostituire.`,
        low:    `Con un punteggio di ${ai_exposure_score}/100, sei in una posizione relativamente protetta — ma "protetto" non significa "immobile". Le professioni a basso rischio restano tali solo se chi le esercita continua ad aggiornarsi. Usa i prossimi 3 mesi per consolidare il vantaggio e prepararti a un mercato che cambierà comunque.`,
    };
    introEl.textContent = intros[risk_level] || intros.medium;

    // Steps della timeline
    const steps = [
        {
            icon: '🔍',
            bg:   'rgba(99,102,241,0.12)',
            color:'var(--primary)',
            label:'Subito — Settimana 1',
            title:'Analizza i tuoi gap reali',
            desc: `Hai già il tuo punteggio. Il passo successivo è essere onesto su cosa manca: "${skill1}" è la competenza critica emersa dal tuo CV. Prima di comprare qualsiasi corso, fai un audit rapido: quali task del tuo lavoro attuale potrebbero già essere automatizzati? Quelli sono i tuoi punti deboli.`,
        },
        {
            icon: '🎓',
            bg:   'rgba(99,102,241,0.1)',
            color:'var(--primary)',
            label:'Mese 1–2 — Formazione attiva',
            title:`Acquisisci "${skill1}" con i corsi qui sotto`,
            desc: `Non servono mesi di studio teorico: scegli uno dei corsi consigliati, fallo completamente e applica subito quello che impari al tuo lavoro. L'obiettivo di fine mese 2 è avere qualcosa di concreto da mostrare: un progetto, un certificato, un processo migliorato.`,
        },
        {
            icon: '📚',
            bg:   'rgba(245,158,11,0.12)',
            color:'#d97706',
            label:'Mese 2–3 — Visione di lungo periodo',
            title:'Leggi per capire dove sta andando il mercato',
            desc: `I libri consigliati ti danno la mappa del territorio: cosa sta succedendo nel tuo settore, dove si sposta il valore, come si stanno posizionando i professionisti che sopravvivranno. Almeno 1 libro in questo periodo — non per "sapere di più", ma per prendere decisioni migliori su dove investire la tua carriera.`,
        },
        {
            icon: '🚀',
            bg:   'rgba(16,185,129,0.1)',
            color:'var(--success)',
            label:'Mese 3+ — Posizionamento',
            title:`Considera la transizione verso "${role1}"`,
            desc: `Con nuove competenze in tasca, aggiorna LinkedIn e il tuo CV con quello che hai imparato. Se ${risk_level === 'high' ? 'il rischio è alto, valuta seriamente' : 'vuoi accelerare,'} una transizione verso "${role1}" — ha un profilo di rischio AI significativamente più basso e valorizza molte delle tue competenze attuali. Non è un salto nel vuoto: è un passo laterale intelligente.`,
        },
    ];

    timeline.replaceChildren(...steps.map(step => {
        const row = document.createElement('div');
        row.className = 'cva-timeline-step';

        const dot = document.createElement('div');
        dot.className = 'cva-timeline-dot';
        dot.style.cssText = `background:${step.bg};`;
        dot.textContent = step.icon;

        const body = document.createElement('div');
        body.className = 'cva-timeline-body';

        const label = document.createElement('div');
        label.className = 'cva-timeline-label';
        label.style.color = step.color;
        label.textContent = step.label;

        const title = document.createElement('div');
        title.className = 'cva-timeline-title';
        title.textContent = step.title;

        const desc = document.createElement('div');
        desc.className = 'cva-timeline-desc';
        desc.textContent = step.desc;

        body.append(label, title, desc);
        row.append(dot, body);
        return row;
    }));

    card.style.display = 'block';
}

// ── Render corsi — Coursera sempre prima (affiliate) ──────
function renderCourses(courses) {
    const list = document.getElementById('cvCoursesList');
    const card = document.getElementById('cvCoursesCard');
    if (!courses?.length) { card.style.display = 'none'; return; }

    // Coursera prima (affiliate attivo), LinkedIn Learning dopo
    const sorted = [...courses].sort((a, b) => {
        if (a.platform === 'Coursera' && b.platform !== 'Coursera') return -1;
        if (b.platform === 'Coursera' && a.platform !== 'Coursera') return  1;
        return 0;
    });

    list.replaceChildren(...sorted.map(course => {
        const a = document.createElement('a');
        a.href      = courseUrl(course);
        a.target    = '_blank';
        a.rel       = 'noopener noreferrer';
        a.className = 'cva-course-item';

        const isLinkedIn = course.platform === 'LinkedIn Learning';

        const badge = document.createElement('span');
        badge.className   = 'cva-course-platform ' + (isLinkedIn ? 'cva-platform-linkedin' : 'cva-platform-coursera');
        badge.textContent = isLinkedIn ? 'LinkedIn' : 'Coursera';

        const title = document.createElement('span');
        title.className   = 'cva-course-title';
        title.textContent = course.title;

        const cta = document.createElement('span');
        cta.className   = 'cva-course-cta';
        cta.textContent = 'Vai al corso →';

        a.append(badge, title, cta);
        return a;
    }));

    card.style.display = 'block';
}

// ── Carica cover con fallback a cascata ────────────────────
// Priorità: Open Library → Google Books direct → Google Books API thumbnail → placeholder
function loadCover(coverDiv, book, googleThumbnail) {

    function tryImg(src, onFail) {
        if (!src) { onFail && onFail(); return; }
        const img     = document.createElement('img');
        img.className = 'cva-book-cover-img';
        img.alt       = book.title;
        img.src       = src;
        img.onload    = () => {
            if (img.naturalWidth < 10) { onFail && onFail(); return; }
            coverDiv.replaceChildren(img);
        };
        img.onerror   = () => onFail ? onFail() : null;
    }

    const openLibUrl = book.isbn13
        ? `https://covers.openlibrary.org/b/isbn/${book.isbn13}-M.jpg`
        : null;

    tryImg(openLibUrl, () => tryImg(googleThumbnail, null));
}

// ── Costruisce elemento DOM di un libro ───────────────────
function buildBookEl(book) {
    const wrapper = document.createElement('div');
    wrapper.className = 'cva-book-item';

    const cover = document.createElement('div');
    cover.className = 'cva-book-cover';
    const placeholder = document.createElement('div');
    placeholder.className = 'cva-book-cover-placeholder';
    placeholder.textContent = book.title.charAt(0).toUpperCase();
    cover.appendChild(placeholder);

    // Tenta subito Open Library (non aspetta Google Books API)
    if (book.isbn13) {
        loadCover(cover, book, null);
    }

    const info = document.createElement('div');
    info.className = 'cva-book-info';

    const titleEl = document.createElement('div');
    titleEl.className   = 'cva-book-title';
    titleEl.textContent = book.title;

    const authorEl = document.createElement('div');
    authorEl.className   = 'cva-book-author';
    authorEl.textContent = book.author;

    const ratingEl = document.createElement('div');
    ratingEl.className = 'cva-book-rating';

    const btn = document.createElement('a');
    btn.href        = amazonUrl(book);
    btn.target      = '_blank';
    btn.rel         = 'noopener noreferrer sponsored';
    btn.className   = 'cva-book-buy-btn';
    btn.textContent = '🛒 Acquista su Amazon';

    info.append(titleEl, authorEl, ratingEl, btn);
    wrapper.append(cover, info);
    return { el: wrapper, cover, ratingEl };
}

// ── Render libri — fetch metadati in parallelo, ordina per popolarità ──
async function renderBooks(books) {
    const list = document.getElementById('cvBooksList');
    const card = document.getElementById('cvBooksCard');
    if (!books?.length) { card.style.display = 'none'; return; }

    // Mostra subito con placeholder (Gemini order)
    const items = books.map(book => ({ book, meta: null, ...buildBookEl(book) }));
    list.replaceChildren(...items.map(i => i.el));
    card.style.display = 'block';

    // Fetch tutti i metadati in parallelo
    const metas = await Promise.all(items.map(i => fetchBookMeta(i.book.isbn13, i.book.title, i.book.author)));
    items.forEach((item, idx) => { item.meta = metas[idx]; });

    // Ordina per popolarità reale (ratingsCount DESC) — più recensioni = più venduto
    items.sort((a, b) => (b.meta?.ratingCount ?? 0) - (a.meta?.ratingCount ?? 0));

    // Re-render nell'ordine corretto, aggiorna cover fallback + rating
    list.replaceChildren(...items.map(({ el, cover, ratingEl, meta, book }) => {
        // Aggiorna sempre con il thumbnail API (più affidabile di Open Library per ISBN errati)
        if (meta?.thumbnail) {
            loadCover(cover, book, meta.thumbnail);
        }
        if (meta?.rating) {
            ratingEl.textContent = renderStars(meta.rating) +
                (meta.ratingCount ? ` (${meta.ratingCount.toLocaleString('it')})` : '');
            ratingEl.style.display = 'block';
        }
        return el;
    }));
}

// ── Visualizza risultati ──────────────────────────────────
function displayResults(data) {
    const t = getT();
    const { ai_exposure_score, risk_level, missing_skills, recommended_roles, insight,
            recommended_courses, recommended_books } = data;

    document.getElementById('cvScoreValue').textContent      = ai_exposure_score;
    document.getElementById('cvScoreComparison').textContent = ai_exposure_score;

    // Badge rischio
    const badgeEl = document.getElementById('cvRiskBadge');
    if (risk_level === 'high') {
        badgeEl.textContent = t.cva_risk_high;
        badgeEl.className   = 'cv-risk-high';
    } else if (risk_level === 'medium') {
        badgeEl.textContent = t.cva_risk_medium;
        badgeEl.className   = 'cv-risk-medium';
    } else {
        badgeEl.textContent = t.cva_risk_low;
        badgeEl.className   = 'cv-risk-low';
    }

    // Messaggio confronto
    const compMsg = document.getElementById('cvComparisonMessage');
    if (ai_exposure_score < 35) {
        compMsg.textContent = t.cva_msg_low;
    } else if (ai_exposure_score < 58) {
        compMsg.textContent = t.cva_msg_medium;
    } else {
        compMsg.textContent = t.cva_msg_high;
    }

    // Competenze e ruoli (safe DOM — no innerHTML con dati AI)
    const skillsList = document.getElementById('cvMissingSkillsList');
    skillsList.replaceChildren(...(missing_skills || []).map(s => {
        const li = document.createElement('li');
        li.textContent = s;
        return li;
    }));

    const rolesList = document.getElementById('cvRecommendedRolesList');
    rolesList.replaceChildren(...(recommended_roles || []).map(r => {
        const li = document.createElement('li');
        li.textContent = '💼 ' + r;
        return li;
    }));

    // Insight
    document.getElementById('cvInsightText').textContent =
        insight || t.cva_insight_default;

    // Strategia personalizzata
    renderStrategy(data);
    // Piano 90 giorni: corsi e libri
    renderCourses(Array.isArray(recommended_courses) ? recommended_courses : []);
    // renderBooks è async: fetch metadati in parallelo poi ri-ordina per popolarità
    renderBooks(Array.isArray(recommended_books) ? recommended_books : []);

    cvResultsDisplay.style.display = 'block';
}

// ── Errore ────────────────────────────────────────────────
function showError(message) {
    cvResultsArea.style.display    = 'block';
    cvLoadingState.style.display   = 'none';
    cvResultsDisplay.style.display = 'none';
    cvErrorState.style.display     = 'block';
    document.getElementById('cvErrorMessage').textContent = message;
}

// ── Reset ─────────────────────────────────────────────────
function resetCVAnalyzer() {
    cvFileInput.value              = '';
    cvResultsArea.style.display    = 'none';
    cvLoadingState.style.display   = 'none';
    cvResultsDisplay.style.display = 'none';
    cvErrorState.style.display     = 'none';
}
// Espone resetCVAnalyzer al contesto globale (chiamata da onclick nel HTML)
window.resetCVAnalyzer = resetCVAnalyzer;

// ── Bottoni condivisione ──────────────────────────────────
document.getElementById('cvCopyButton').addEventListener('click', () => {
    const t       = getT();
    const score   = document.getElementById('cvScoreValue').textContent;
    const risk    = document.getElementById('cvRiskBadge').textContent;
    const insight = document.getElementById('cvInsightText').textContent;
    const text    = `${t.cva_share_title}: ${score}/100\n${t.cva_share_risk_label}: ${risk}\n\nInsight: ${insight}`;
    navigator.clipboard.writeText(text).then(() => alert(t.cva_copied_alert));
});

document.getElementById('cvLinkedinButton').addEventListener('click', () => {
    const t      = getT();
    const score  = document.getElementById('cvScoreValue').textContent;
    const risk   = document.getElementById('cvRiskBadge').innerText;
    const skills = Array.from(document.querySelectorAll('#cvMissingSkillsList li'))
                       .map(li => li.textContent).join(', ');
    const roles  = Array.from(document.querySelectorAll('#cvRecommendedRolesList li'))
                       .map(li => li.textContent.replace('💼 ', '')).join(', ');

    const linkedinText =
        `${t.cva_share_title}: ${score}/100\n${t.cva_share_risk_label}: ${risk}\n\n` +
        `${t.cva_share_skills_label}: ${skills}\n\n` +
        `${t.cva_share_roles_label}: ${roles}\n\n${t.cva_share_cta || ''}`;

    window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        '_blank'
    );
});
