// job-count.js
// ─────────────────────────────────────────────────────────
// FONTE UNICA DI VERITÀ per il numero di professioni.
//
// Come funziona:
//   1. Importa jobData da jobs.js
//   2. Conta Object.keys(jobData).length — si aggiorna
//      automaticamente ogni volta che si aggiunge o rimuove
//      una professione da jobs.js, senza toccare nient'altro.
//   3. applyJobCount() aggiorna tutto il DOM:
//      • elementi con [data-job-count]
//      • <title>
//      • meta tag (description, og:*, twitter:*)
//      • blocchi JSON-LD (<script type="application/ld+json">)
//      • testo con placeholder {jobCount} (data-i18n)
//
// Utilizzo in ogni pagina HTML:
//   <script type="module">
//     import { applyJobCount } from '/job-count.js';
//     applyJobCount();
//   </script>
//
// Utilizzo in ui.js (calcolatore):
//   import { applyJobCount } from '/job-count.js';
//   // chiamare applyJobCount() alla fine di applyLanguage()
// ─────────────────────────────────────────────────────────

import { jobData } from '/jobs.js';

/** Numero esatto di professioni presenti in jobs.js */
export const JOB_COUNT = Object.keys(jobData).length;

/**
 * Aggiorna in un colpo solo tutti i punti del DOM dove
 * compare il numero di professioni.
 */
export function applyJobCount() {
    const n = JOB_COUNT;

    // ── 1. Elementi visibili: [data-job-count] ──────────
    document.querySelectorAll('[data-job-count]').forEach(el => {
        el.textContent = n;
    });

    // ── 2. <title> ──────────────────────────────────────
    // Sostituisce il numero che precede "Profess" (es. "76 Professioni")
    document.title = document.title.replace(
        /\d+(\s*Profess)/gi,
        n + '$1'
    );

    // ── 3. Meta tag: content ────────────────────────────
    // Cerca qualsiasi meta con content che menzioni un numero
    // seguito da "profess" o "ruol"
    document.querySelectorAll('meta[content]').forEach(meta => {
        if (/\d+\s*(profess|ruol)/i.test(meta.content)) {
            meta.content = meta.content.replace(
                /\d+(\s*(profess|ruol))/gi,
                n + '$1'
            );
        }
    });

    // ── 4. JSON-LD ──────────────────────────────────────
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        if (/\d+\s*profess/i.test(script.textContent)) {
            script.textContent = script.textContent.replace(
                /\d+(\s*profess)/gi,
                n + '$1'
            );
        }
    });

    // ── 5. Placeholder {jobCount} nei testi tradotti ────
    document.querySelectorAll('[data-i18n]').forEach(el => {
        if (el.innerHTML.includes('{jobCount}')) {
            el.innerHTML = el.innerHTML.replace(/\{jobCount\}/g, n);
        }
    });
}
