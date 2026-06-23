// page-i18n.js
// Modulo i18n condiviso per index.html e cv-analyzer.html.
// Applica le traduzioni da translations.js senza ricaricare la pagina.
// Gestisce anche il selettore lingua e il conteggio professioni.

import { translations }  from '/translations.js';
import { JOB_COUNT }     from '/job-count.js';

const LANG_KEY  = 'site_lang';
const SUPPORTED = ['it', 'en', 'es', 'de', 'fr'];

// ── Lingua corrente ───────────────────────────────────────

export function getCurrentLang() {
    try {
        const saved = localStorage.getItem(LANG_KEY);
        if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) {}
    const browser = (navigator.language || 'it').slice(0, 2);
    return SUPPORTED.includes(browser) ? browser : 'it';
}

export function saveLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

// ── Applica le traduzioni al DOM ──────────────────────────

export function applyTranslations(lang) {
    if (!translations[lang]) lang = 'it';
    const t = translations[lang];

    document.documentElement.lang = lang;

    // 1. Elementi con data-i18n — innerHTML (supporta HTML nelle traduzioni)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] === undefined) return;
        let value = String(t[key]);
        // Sostituisce {jobCount} con il numero reale da jobs.js
        value = value.replace(/\{jobCount\}/g, JOB_COUNT);
        el.innerHTML = value;
    });

    // 2. Elementi con data-i18n-text — textContent (nessun HTML)
    document.querySelectorAll('[data-i18n-text]').forEach(el => {
        const key = el.getAttribute('data-i18n-text');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // 3. data-job-count standalone (fuori da testi tradotti)
    document.querySelectorAll('[data-job-count]').forEach(el => {
        el.textContent = JOB_COUNT;
    });

    // 4. Aggiorna valore selezionato nel <select>
    const select = document.getElementById('langSelect');
    if (select) select.value = lang;
}

// ── Inizializzazione ──────────────────────────────────────

export function initLangSelector() {
    const lang = getCurrentLang();
    applyTranslations(lang);

    const select = document.getElementById('langSelect');
    if (!select) return;

    select.addEventListener('change', function () {
        const chosen = this.value;
        saveLang(chosen);
        applyTranslations(chosen);
    });
}

// Auto-init quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSelector);
} else {
    initLangSelector();
}

// Esporta il dizionario corrente (usato da cv-analyzer.js per i risultati dinamici)
export function getT() {
    return translations[getCurrentLang()] || translations.it;
}

// Espone getT globalmente per compatibilità con script non-module
window.getT = getT;
