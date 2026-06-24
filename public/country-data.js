// country-data.js
// Dati per paese: moltiplicatori stipendio, valuta, indice adozione AI.
//
// salaryMultiplier — fattore rispetto all'Italia (base = 1.0).
//   Basato su stipendi lordi annui medi del settore white-collar/tech
//   (Eurostat / OECD 2024, convertiti in EUR al cambio medio 2024).
//   Esempio: developer IT ≈ €42.000 → DE ≈ €65.000 → multiplier 1.55
//
// aiAdoptionIndex — velocità di adozione AI relativa.
//   > 1.0 = adozione più rapida (mercato più maturo, più investimenti AI)
//   < 1.0 = adozione più lenta (mercato in sviluppo o normative più restrittive)
//   Usato in futuro per calcoli avanzati di scenario.
//
// criticalYearOffset — anticipo/ritardo in anni rispetto all'anno critico
//   calcolato per l'Italia. Negativo = prima, positivo = dopo.
//   Esempio: US = -2 → il momento critico arriva 2 anni prima che in Italia.
//
// currency.position — 'before' (€50.000) o 'after' (50.000 CHF)

export const COUNTRIES = {

    // ── Europa — Area Euro ────────────────────────────────────

    it: {
        name: 'Italia',
        localName: 'Italia',
        flag: '🇮🇹',
        currency: { symbol: '€', code: 'EUR', position: 'before', locale: 'it-IT' },
        salaryMultiplier: 1.00,
        aiAdoptionIndex: 0.85,
        criticalYearOffset: 0,
        // Fonte stipendi: ISTAT / Eurostat 2024 — media settore impiegatizio
    },

    de: {
        name: 'Germania',
        localName: 'Deutschland',
        flag: '🇩🇪',
        currency: { symbol: '€', code: 'EUR', position: 'before', locale: 'de-DE' },
        salaryMultiplier: 1.55,
        aiAdoptionIndex: 1.10,
        criticalYearOffset: -1,
        // Stipendi più alti in UE, forte automazione industriale (Industrie 4.0)
    },

    fr: {
        name: 'Francia',
        localName: 'France',
        flag: '🇫🇷',
        currency: { symbol: '€', code: 'EUR', position: 'before', locale: 'fr-FR' },
        salaryMultiplier: 1.25,
        aiAdoptionIndex: 0.95,
        criticalYearOffset: 0,
        // Regolamentazione AI più attenta (CNIL), adozione moderata
    },

    es: {
        name: 'Spagna',
        localName: 'España',
        flag: '🇪🇸',
        currency: { symbol: '€', code: 'EUR', position: 'before', locale: 'es-ES' },
        salaryMultiplier: 0.85,
        aiAdoptionIndex: 0.80,
        criticalYearOffset: 1,
        // Stipendi più bassi in Europa occidentale, adozione AI più lenta
    },

    nl: {
        name: 'Olanda',
        localName: 'Nederland',
        flag: '🇳🇱',
        currency: { symbol: '€', code: 'EUR', position: 'before', locale: 'nl-NL' },
        salaryMultiplier: 1.50,
        aiAdoptionIndex: 1.10,
        criticalYearOffset: -1,
        // Hub tech europeo, alta penetrazione AI nelle PMI
    },

    pl: {
        name: 'Polonia',
        localName: 'Polska',
        flag: '🇵🇱',
        currency: { symbol: 'zł', code: 'PLN', position: 'after', locale: 'pl-PL' },
        salaryMultiplier: 0.55,
        aiAdoptionIndex: 0.75,
        criticalYearOffset: 2,
        // Mercato in crescita rapida, stipendi ancora sotto media UE
    },

    // ── Europa — Extra Euro ───────────────────────────────────

    gb: {
        name: 'Regno Unito',
        localName: 'United Kingdom',
        flag: '🇬🇧',
        currency: { symbol: '£', code: 'GBP', position: 'before', locale: 'en-GB' },
        salaryMultiplier: 1.45,
        aiAdoptionIndex: 1.15,
        criticalYearOffset: -1,
        // Forte settore fintech + AI; London premium significativo
    },

    ch: {
        name: 'Svizzera',
        localName: 'Schweiz',
        flag: '🇨🇭',
        currency: { symbol: 'CHF', code: 'CHF', position: 'after', locale: 'de-CH' },
        salaryMultiplier: 2.40,
        aiAdoptionIndex: 1.05,
        criticalYearOffset: -1,
        // Stipendi tra i più alti al mondo; costo della vita molto elevato
    },

    // ── Americhe ──────────────────────────────────────────────

    us: {
        name: 'Stati Uniti',
        localName: 'United States',
        flag: '🇺🇸',
        currency: { symbol: '$', code: 'USD', position: 'before', locale: 'en-US' },
        salaryMultiplier: 2.55,
        aiAdoptionIndex: 1.35,
        criticalYearOffset: -2,
        // Epicentro dell'AI (OpenAI, Google, Meta, Anthropic);
        // stipendi tech molto superiori alla media (comp totale inclusa equity)
    },

    br: {
        name: 'Brasile',
        localName: 'Brasil',
        flag: '🇧🇷',
        currency: { symbol: 'R$', code: 'BRL', position: 'before', locale: 'pt-BR' },
        salaryMultiplier: 0.28,
        aiAdoptionIndex: 0.65,
        criticalYearOffset: 3,
        // Mercato emergente in rapida crescita; grande pool di talenti tech
    },

    // ── Asia-Pacifico ─────────────────────────────────────────

    in: {
        name: 'India',
        localName: 'India',
        flag: '🇮🇳',
        currency: { symbol: '₹', code: 'INR', position: 'before', locale: 'en-IN' },
        salaryMultiplier: 0.18,
        aiAdoptionIndex: 0.90,
        criticalYearOffset: 1,
        // Hub IT globale; adozione AI accelerata nei settori BPO e software
    },

    au: {
        name: 'Australia',
        localName: 'Australia',
        flag: '🇦🇺',
        currency: { symbol: 'A$', code: 'AUD', position: 'before', locale: 'en-AU' },
        salaryMultiplier: 1.70,
        aiAdoptionIndex: 1.05,
        criticalYearOffset: -1,
        // Mercato tech solido; stipendi elevati sostenuti da scarsità di talenti
    },
};

// Paese di default (applicato se nessuna preferenza salvata)
export const DEFAULT_COUNTRY = 'it';

// Lista ordinata per area geografica (usata per il selettore UI)
export const COUNTRY_GROUPS = [
    {
        label: 'Europa',
        countries: ['it', 'de', 'fr', 'es', 'nl', 'pl', 'gb', 'ch'],
    },
    {
        label: 'Americhe',
        countries: ['us', 'br'],
    },
    {
        label: 'Asia-Pacifico',
        countries: ['in', 'au'],
    },
];

// Helper: restituisce i dati di un paese con fallback a Italia
export function getCountry(code) {
    return COUNTRIES[code] || COUNTRIES[DEFAULT_COUNTRY];
}

// Helper: formatta un valore monetario secondo la valuta del paese
export function formatCurrency(value, countryCode) {
    const c = getCountry(countryCode);
    const n = Math.round(value).toLocaleString(c.currency.locale);
    return c.currency.position === 'before'
        ? c.currency.symbol + n
        : n + ' ' + c.currency.symbol;
}

// Helper: calcola lo stipendio scalato per paese a partire dal valore italiano
export function scaleSalary(italianValue, countryCode) {
    const c = getCountry(countryCode);
    return Math.round(italianValue * c.salaryMultiplier);
}

// Helper: calcola l'anno critico adattato al paese
export function adjustTargetYear(baseYear, countryCode) {
    const c = getCountry(countryCode);
    return baseYear + c.criticalYearOffset;
}
