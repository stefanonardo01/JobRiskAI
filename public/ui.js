// ui.js
// Modulo principale: stato, funzioni DOM, event listeners, init.
// Caricato da calcolatore.html come <script type="module" src="/ui.js">

import { translations, jobTranslations } from './translations.js';
import { jobExtra, jobData }             from './jobs.js';
import { computeMetrics, getRiskLevel, getRiskIcon } from './calculator.js';
import { applyJobCount }                from './job-count.js';
import { COUNTRIES, getCountry, scaleSalary, adjustTargetYear } from './country-data.js';

// ── Stato globale del modulo ──────────────────────────────
let currentJob  = 'developer';
let currentLang = (function () {
    try {
        const saved = localStorage.getItem('site_lang');
        if (saved && translations[saved]) return saved;
    } catch (e) {}
    const browserLang = (navigator.language || 'it').slice(0, 2);
    return translations[browserLang] ? browserLang : 'it';
})();
let currentCountry = (function () {
    try {
        const saved = localStorage.getItem('site_country');
        if (saved && COUNTRIES[saved]) return saved;
    } catch (e) {}
    return 'it';
})();

// ── Helpers ───────────────────────────────────────────────

function getLocalizedJob(jobKey) {
    const base = jobData[jobKey];
    if (currentLang === 'it' || !jobTranslations[currentLang] || !jobTranslations[currentLang][jobKey]) {
        return { title: base.title, description: base.description, survivalNote: base.survivalNote };
    }
    const tr = jobTranslations[currentLang][jobKey];
    return { title: tr.title, description: tr.description, survivalNote: tr.survivalNote };
}

const LOCALE_MAP = { it: 'it-IT', en: 'en-US', es: 'es-ES', de: 'de-DE', fr: 'fr-FR' };
function fmt(lang) { return LOCALE_MAP[lang] || 'it-IT'; }

// Valuta corrente — aggiornata da selectCountry()
let currentCurrency = getCountry(currentCountry).currency;
function fmtCurrency(value, numFmt) {
    const n = Math.round(value).toLocaleString(numFmt);
    return currentCurrency.position === 'before'
        ? currentCurrency.symbol + n
        : n + ' ' + currentCurrency.symbol;
}

// ── Render: schede job ────────────────────────────────────

function renderJobCards() {
    document.querySelectorAll('.job-card').forEach(card => {
        const onclickAttr = card.getAttribute('onclick') || '';
        const match = onclickAttr.match(/selectJob\('(\w+)'\)/);
        if (!match) return;
        const jobKey    = match[1];
        const localized = getLocalizedJob(jobKey);
        const titleEl   = card.querySelector('.job-card-title');
        const statusEl  = card.querySelector('.job-card-status');
        if (titleEl)  titleEl.textContent  = localized.title;
        if (statusEl) statusEl.textContent = (translations[currentLang] || translations.it).job_available;
    });
}

// ── Lingua ────────────────────────────────────────────────

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'it';
    currentLang = lang;
    try { localStorage.setItem('site_lang', lang); } catch (e) {}

    const t = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Cookie banner (elementi non usa data-i18n per via dei tag annidati)
    const cookieTextEl = document.querySelector('#cookieBanner p');
    if (cookieTextEl) cookieTextEl.innerHTML = t.cookie_text;
    const cookieAcceptBtn = document.getElementById('cookieAccept');
    const cookieRejectBtn = document.getElementById('cookieReject');
    if (cookieAcceptBtn) cookieAcceptBtn.textContent = t.cookie_accept;
    if (cookieRejectBtn) cookieRejectBtn.textContent = t.cookie_reject;

    // Footer
    const privacyLink   = document.querySelector('a[href="/privacy-policy.html"]');
    const termsLink     = document.querySelector('a[href="/termini-servizio.html"]');
    if (privacyLink) privacyLink.textContent = t.footer_links_privacy;
    if (termsLink)   termsLink.textContent   = t.footer_links_terms;
    const copyrightEl = document.querySelector('.footer-content > p.footer-text:last-of-type');
    if (copyrightEl && copyrightEl.textContent.includes('©')) copyrightEl.textContent = t.footer_copyright;

    renderJobCards();
    calculateAll();
    populateComparisonSelectors();
    renderJobComparison();
    applyJobCount();   // aggiorna conteggi e placeholder da job-count.js
}

// ── Selezione categoria / job ─────────────────────────────

function selectCategory(category) {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-category') === category);
    });
    document.querySelectorAll('.category-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === 'panel-' + category);
    });
}

function selectJob(job) {
    currentJob = job;

    document.querySelectorAll('.job-card').forEach(card => card.classList.remove('active'));
    // Cerca la card tramite DOM invece di usare window.event (deprecato in ES modules)
    const activeCard = document.querySelector(`.job-card[onclick*="selectJob('${job}')"]`);
    if (activeCard) activeCard.classList.add('active');

    const jobInfo = jobData[job];
    document.getElementById('humanSalary').value    = scaleSalary(jobInfo.defaultHumanSalary, currentCountry);
    document.getElementById('humanExtra').value     = scaleSalary(jobInfo.defaultHumanExtra,  currentCountry);
    document.getElementById('aiMonthlyCost').value  = jobInfo.defaultAiMonthly;
    document.getElementById('aiSetup').value        = jobInfo.defaultAiSetup;

    calculateAll();
}

// ── Selezione paese ───────────────────────────────────────

function selectCountry(code) {
    if (!COUNTRIES[code]) return;
    currentCountry  = code;
    currentCurrency = getCountry(code).currency;
    try { localStorage.setItem('site_country', code); } catch (e) {}

    // Riscala stipendi del job corrente in base al nuovo paese
    const jobInfo = jobData[currentJob];
    document.getElementById('humanSalary').value = scaleSalary(jobInfo.defaultHumanSalary, code);
    document.getElementById('humanExtra').value  = scaleSalary(jobInfo.defaultHumanExtra,  code);

    const sel = document.getElementById('countrySelect');
    if (sel) sel.value = code;

    const flagEl = document.getElementById('countryFlagDisplay');
    if (flagEl) flagEl.textContent = getCountry(code).flag;

    calculateAll();
}

// ── Calcolo principale ────────────────────────────────────

function calculateAll() {
    const humanSalary   = parseFloat(document.getElementById('humanSalary').value)   || 32000;
    const humanExtra    = parseFloat(document.getElementById('humanExtra').value)    || 12600;
    const aiMonthlyCost = parseFloat(document.getElementById('aiMonthlyCost').value) || 400;
    const aiSetup       = parseFloat(document.getElementById('aiSetup').value)       || 1500;

    const m      = computeMetrics(humanSalary, humanExtra, aiMonthlyCost, aiSetup);
    const numFmt = fmt(currentLang);

    // Costi
    document.getElementById('humanTotal').textContent = fmtCurrency(m.humanAnnual, numFmt);
    document.getElementById('aiTotal').textContent    = fmtCurrency(m.aiAnnual, numFmt);
    document.getElementById('humanDaily').textContent = m.humanDaily.toLocaleString(numFmt);
    document.getElementById('aiDaily').textContent    = m.aiDaily.toLocaleString(numFmt);

    // Risparmi
    document.getElementById('savings1').textContent = fmtCurrency(m.savings1, numFmt);
    document.getElementById('savings5').textContent = fmtCurrency(m.savings5, numFmt);
    document.getElementById('roi').textContent      = m.roi.toLocaleString(numFmt) + '%';

    // Scenari
    document.getElementById('scenario100').textContent    = fmtCurrency(m.humanAnnual, numFmt);
    document.getElementById('scenario0').textContent      = fmtCurrency(m.aiAnnual, numFmt);
    document.getElementById('scenarioHybrid').textContent = fmtCurrency(m.hybridCost, numFmt);

    // Barre confronto
    document.getElementById('barAI').style.width  = m.aiPercent + '%';
    document.getElementById('barAI').textContent  = m.aiPercent + '%';

    // Rischio
    const job          = jobData[currentJob];
    const t            = translations[currentLang] || translations.it;
    const localizedJob = getLocalizedJob(currentJob);
    const riskScore    = Math.round(job.riskFactor * 100);
    const targetYear   = adjustTargetYear(job.targetYear, currentCountry);

    document.getElementById('riskValue').textContent = riskScore + '%';

    let riskLevel, riskPrefix;
    if (riskScore >= 70)      { riskLevel = 'high';   riskPrefix = t.risk_high_prefix;   }
    else if (riskScore >= 40) { riskLevel = 'medium'; riskPrefix = t.risk_medium_prefix; }
    else                      { riskLevel = 'low';    riskPrefix = t.risk_low_prefix;    }

    document.getElementById('riskValue').className     = 'risk-value ' + riskLevel;
    document.getElementById('riskText').textContent    = `${riskPrefix} ${targetYear}`;
    document.getElementById('riskSubtext').textContent = `${t.within_year} ${targetYear}, ${localizedJob.survivalNote}`;

    // Testi dinamici basati sull'anno
    document.getElementById('scenariTitle').textContent      = `${t.scenarios_at} ${targetYear}`;
    document.getElementById('insightYear').textContent       = `${t.within_year} ${targetYear}, ${localizedJob.survivalNote}`;
    document.getElementById('insightAccuracy').textContent   = `${t.insight_accuracy_prefix} (${(job.aiAccuracy * 100).toFixed(1)}% vs ${(job.humanAccuracy * 100).toFixed(0)}%)`;
    document.getElementById('insightSurvival').textContent   = `${t.insight_survival_prefix} ${targetYear}`;
    document.getElementById('insightCostDiff').textContent   = ` ${t.insight_cost_diff_prefix} ${m.costDiffPercent}% ${t.insight_cost_diff_suffix}`;
    document.getElementById('humanAccuracyText').textContent = `${t.accuracy_label} ${(job.humanAccuracy * 100).toFixed(0)}% | ${t.errors_label} ${(100 - job.humanAccuracy * 100).toFixed(0)}%`;
    document.getElementById('aiAccuracyText').innerHTML      = `${t.ai_accuracy_label} ${(job.aiAccuracy * 100).toFixed(1)}% | ${t.ai_errors_label} &lt;${(100 - job.aiAccuracy * 100).toFixed(1)}%`;

    // Meter rischio
    document.getElementById('meterContainer').innerHTML = `
        <div class="meter-segment low"    style="width: ${Math.max(20 - riskScore, 5)}%;">${t.meter_low}</div>
        <div class="meter-segment medium" style="width: ${Math.max(riskScore - 20, 0) <= 50 ? Math.max(riskScore - 20, 0) : 50}%;">${t.meter_medium}</div>
        <div class="meter-segment high"   style="width: ${Math.max(riskScore - 40, 0)}%;">${t.meter_high}</div>
    `;

    renderTaskAnalysis(job);
    renderSurvivalPlan(job, riskScore);
    renderRiskTrend(job, riskScore, targetYear);
}

// ── Render: task analysis ─────────────────────────────────

function renderTaskAnalysis(job) {
    const extra     = jobExtra[currentJob];
    const container = document.getElementById('taskAnalysisList');
    if (!extra || !container) return;

    container.innerHTML = extra.tasks.map(task => {
        const level = getRiskLevel(task.risk);
        return `
            <div class="task-row">
                <span class="task-name">${getRiskIcon(level)} ${task.name}</span>
                <span class="task-badge ${level}">${task.risk}%</span>
            </div>
        `;
    }).join('');
}

// ── Render: survival plan ─────────────────────────────────

function renderSurvivalPlan(job, riskScore) {
    const extra  = jobExtra[currentJob];
    const t      = translations[currentLang] || translations.it;
    const listEl = document.getElementById('survivalPlanList');
    if (!extra || !listEl) return;

    listEl.innerHTML = extra.survivalPlan.map(item => `<li>${item}</li>`).join('');

    const reducedRisk      = Math.round(riskScore * 0.6);
    const reductionPercent = Math.round(((riskScore - reducedRisk) / riskScore) * 100) || 0;

    document.getElementById('survivalRiskBefore').textContent = riskScore + '%';
    document.getElementById('survivalRiskAfter').textContent  = reducedRisk + '%';
    document.getElementById('survivalMessage').textContent    =
        t.survival_message_template.replace('{percent}', reductionPercent);
}

// ── Render: grafico trend rischio (SVG) ───────────────────

function renderRiskTrend(job, riskScore, targetYear) {
    const svg  = document.getElementById('riskTrendSvg');
    const line = document.getElementById('riskTrendLine');
    const dot  = document.getElementById('riskTrendDot');
    if (!svg || !line || !dot) return;

    const currentYear = new Date().getFullYear();
    const totalSpan   = Math.max(targetYear - currentYear, 1);

    // Layout — deve corrispondere al viewBox="0 0 640 190" nell'HTML
    const LEFT   = 46;
    const RIGHT  = 630;
    const TOP    = 10;
    const BOTTOM = 152;
    const plotW  = RIGHT - LEFT;
    const plotH  = BOTTOM - TOP;

    const riskToY = v => BOTTOM - (Math.min(v, 100) / 100) * plotH;
    const yearToX = y => LEFT + ((y - currentYear) / totalSpan) * plotW;

    // Asse Y: linee guida + etichette ogni 10%
    const gridYEl = document.getElementById('riskTrendGridY');
    const labYEl  = document.getElementById('riskTrendLabelsY');
    if (gridYEl && labYEl) {
        let gridYHtml = '', labYHtml = '';
        for (let pct = 0; pct <= 100; pct += 10) {
            const y       = riskToY(pct);
            const isMajor = (pct % 20 === 0);
            gridYHtml += `<line x1="${LEFT}" y1="${y.toFixed(1)}" x2="${RIGHT}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,${isMajor ? '0.10' : '0.05'})" stroke-width="${isMajor ? 1 : 0.5}" stroke-dasharray="${isMajor ? '' : '2,3'}"/>`;
            labYHtml  += `<text x="${LEFT - 6}" y="${(y + 3.5).toFixed(1)}" text-anchor="end" font-size="9" fill="rgba(200,200,220,0.65)" font-family="system-ui,sans-serif">${pct}%</text>`;
        }
        gridYEl.innerHTML = gridYHtml;
        labYEl.innerHTML  = labYHtml;
    }

    // Asse X: linee guida + etichette per anno
    const gridXEl = document.getElementById('riskTrendGridX');
    const labXEl  = document.getElementById('riskTrendLabelsX');
    if (gridXEl && labXEl) {
        const step = totalSpan > 12 ? 2 : 1;
        let gridXHtml = '', labXHtml = '';
        for (let yr = currentYear; yr <= targetYear; yr += step) {
            const x       = yearToX(yr).toFixed(1);
            const isFirst = (yr === currentYear);
            const isLast  = (yr === targetYear || yr + step > targetYear);
            const isMajor = isFirst || isLast || (yr % 5 === 0);
            if (!isFirst) {
                gridXHtml += `<line x1="${x}" y1="${TOP}" x2="${x}" y2="${BOTTOM}" stroke="rgba(255,255,255,${isMajor ? '0.10' : '0.05'})" stroke-width="${isMajor ? 1 : 0.5}" stroke-dasharray="${isMajor ? '' : '2,3'}"/>`;
            }
            const fontW   = isMajor ? '600' : '400';
            const fillCol = isMajor ? 'rgba(200,200,220,0.85)' : 'rgba(200,200,220,0.55)';
            labXHtml += `<text x="${x}" y="${BOTTOM + 13}" text-anchor="middle" font-size="9" fill="${fillCol}" font-weight="${fontW}" font-family="system-ui,sans-serif">${yr}</text>`;
        }
        gridXEl.innerHTML = gridXHtml;
        labXEl.innerHTML  = labXHtml;
    }

    // Curva: dal riskScore attuale → 100% all'anno critico (ease-in)
    const numPoints = Math.max(totalSpan * 4, 20);
    const points    = [];
    for (let i = 0; i <= numPoints; i++) {
        const t_     = i / numPoints;
        const eased  = Math.pow(t_, 1.4);
        const value  = riskScore + (100 - riskScore) * eased;
        const x      = LEFT + t_ * plotW;
        const y      = riskToY(value);
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    line.setAttribute('points', points.join(' '));

    // Punto finale
    dot.setAttribute('cx', (LEFT + plotW).toFixed(1));
    dot.setAttribute('cy', riskToY(100).toFixed(1));

    // Etichette anno esterno (se presenti nel DOM)
    const yearStartEl = document.getElementById('riskTrendYearStart');
    const yearEndEl   = document.getElementById('riskTrendYearEnd');
    if (yearStartEl) yearStartEl.textContent = currentYear;
    if (yearEndEl)   yearEndEl.textContent   = targetYear;
}

// ── Render: confronto job ─────────────────────────────────

function populateComparisonSelectors() {
    const selectA = document.getElementById('compareSelectA');
    const selectB = document.getElementById('compareSelectB');
    if (!selectA || !selectB) return;

    const jobKeys    = Object.keys(jobData);
    const optionsHTML = jobKeys.map(key => {
        const localized = getLocalizedJob(key);
        return `<option value="${key}">${localized.title}</option>`;
    }).join('');

    const prevA = selectA.value;
    const prevB = selectB.value;
    selectA.innerHTML = optionsHTML;
    selectB.innerHTML = optionsHTML;
    selectA.value = jobKeys.includes(prevA) ? prevA : jobKeys[0];
    selectB.value = jobKeys.includes(prevB) ? prevB : (jobKeys[1] || jobKeys[0]);
}

function renderJobComparison() {
    const selectA = document.getElementById('compareSelectA');
    const selectB = document.getElementById('compareSelectB');
    const tbody   = document.getElementById('comparisonTableBody');
    if (!selectA || !selectB || !tbody) return;

    const keyA = selectA.value;
    const keyB = selectB.value;
    if (!keyA || !keyB) return;

    const jobA   = jobData[keyA];
    const jobB   = jobData[keyB];
    const t      = translations[currentLang] || translations.it;
    const numFmt = fmt(currentLang);

    document.getElementById('compareHeaderA').textContent = getLocalizedJob(keyA).title;
    document.getElementById('compareHeaderB').textContent = getLocalizedJob(keyB).title;

    const riskA = Math.round(jobA.riskFactor * 100);
    const riskB = Math.round(jobB.riskFactor * 100);

    function cellPair(valA, valB, format, higherIsBetter) {
        const aIsBetter = higherIsBetter ? valA > valB : valA < valB;
        const bIsBetter = higherIsBetter ? valB > valA : valB < valA;
        const classA    = aIsBetter && valA !== valB ? 'better' : '';
        const classB    = bIsBetter && valA !== valB ? 'better' : '';
        return `<td class="${classA}">${format(valA)}</td><td class="${classB}">${format(valB)}</td>`;
    }

    const rows = [
        { label: t.comparison_row_risk,     cells: cellPair(riskA, riskB, v => v + '%', false) },
        { label: t.comparison_row_year,     cells: cellPair(adjustTargetYear(jobA.targetYear, currentCountry), adjustTargetYear(jobB.targetYear, currentCountry), v => v, false) },
        { label: t.comparison_row_cost,     cells: cellPair(jobA.defaultAiMonthly, jobB.defaultAiMonthly, v => fmtCurrency(v, numFmt) + t.per_month_suffix, false) },
        { label: t.comparison_row_accuracy, cells: cellPair(jobA.aiAccuracy * 100, jobB.aiAccuracy * 100, v => v.toFixed(1) + '%', true) },
    ];

    tbody.innerHTML = rows.map(row => `
        <tr>
            <td class="metric-label">${row.label}</td>
            ${row.cells}
        </tr>
    `).join('');
}

// ── Event listeners ───────────────────────────────────────

document.getElementById('humanSalary').addEventListener('input',    calculateAll);
document.getElementById('humanExtra').addEventListener('input',     calculateAll);
document.getElementById('aiMonthlyCost').addEventListener('input',  calculateAll);
document.getElementById('aiSetup').addEventListener('input',        calculateAll);

const langSelect = document.getElementById('langSelect');
if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', function () { applyLanguage(this.value); });
}

const countrySelect = document.getElementById('countrySelect');
if (countrySelect) countrySelect.value = currentCountry;

const countryConfirm = document.getElementById('countryConfirm');
if (countryConfirm) {
    countryConfirm.addEventListener('click', function () {
        const sel = document.getElementById('countrySelect');
        if (sel) selectCountry(sel.value);
    });
}

document.getElementById('compareSelectA').addEventListener('change', renderJobComparison);
document.getElementById('compareSelectB').addEventListener('change', renderJobComparison);

// ── Esponi funzioni onclick al contesto globale ───────────
// Necessario perché type="module" non espone nulla a window automaticamente.
// Le 114 chiamate onclick="selectJob(...)" e onclick="selectCategory(...)"
// nel HTML continuano a funzionare senza modifiche.
window.selectJob      = selectJob;
window.selectCategory = selectCategory;

// ── Init ──────────────────────────────────────────────────
applyLanguage(currentLang);
