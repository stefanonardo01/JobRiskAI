// calculator.js
// Funzioni di calcolo pure — nessun accesso al DOM.
// Importato da ui.js.

/**
 * Calcola tutte le metriche economiche a partire dagli input dell'utente.
 * @returns {object} Oggetto con tutti i valori derivati.
 */
export function computeMetrics(humanSalary, humanExtra, aiMonthlyCost, aiSetup) {
    const humanAnnual      = humanSalary + humanExtra;
    const aiAnnual         = (aiMonthlyCost * 12) + aiSetup;
    const savings1         = humanAnnual - aiAnnual;
    const savings5         = savings1 * 5;
    const roi              = aiAnnual > 0 ? Math.round((savings5 / aiAnnual) * 100) : 0;
    const aiPercent        = humanAnnual > 0 ? Math.round((aiAnnual / humanAnnual) * 100) : 0;
    const costDiffPercent  = Math.round((1 - aiAnnual / humanAnnual) * 100);
    const humanDaily       = Math.round(humanAnnual / 365);
    const aiDaily          = Math.round(aiAnnual / 365);
    const hybridCost       = aiAnnual + (humanSalary * 0.5);

    return {
        humanAnnual,
        aiAnnual,
        savings1,
        savings5,
        roi,
        aiPercent,
        costDiffPercent,
        humanDaily,
        aiDaily,
        hybridCost,
    };
}

/**
 * Restituisce il livello di rischio testuale da uno score 0-100.
 */
export function getRiskLevel(score) {
    if (score >= 70) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
}

/**
 * Restituisce l'emoji badge per il livello di rischio.
 */
export function getRiskIcon(level) {
    return level === 'high' ? '🔴' : (level === 'medium' ? '🟠' : '🟢');
}
