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

    ca: {
        name: 'Canada',
        localName: 'Canada',
        flag: '🇨🇦',
        currency: { symbol: 'C$', code: 'CAD', position: 'before', locale: 'en-CA' },
        salaryMultiplier: 1.45,
        aiAdoptionIndex: 1.15,
        criticalYearOffset: -1,
        // Forte ecosistema AI (Toronto, Montreal); stipendi tech alti ma sotto USA
    },

    mx: {
        name: 'Messico',
        localName: 'México',
        flag: '🇲🇽',
        currency: { symbol: 'MX$', code: 'MXN', position: 'before', locale: 'es-MX' },
        salaryMultiplier: 0.32,
        aiAdoptionIndex: 0.70,
        criticalYearOffset: 2,
        // Mercato in crescita; nearshoring tech in espansione verso US
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

    jp: {
        name: 'Giappone',
        localName: '日本',
        flag: '🇯🇵',
        currency: { symbol: '¥', code: 'JPY', position: 'before', locale: 'ja-JP' },
        salaryMultiplier: 1.05,
        aiAdoptionIndex: 1.00,
        criticalYearOffset: 0,
        // Forte robotica e manifattura AI; stipendi tecnici in crescita ma ancora sotto Europa
    },

    sg: {
        name: 'Singapore',
        localName: 'Singapore',
        flag: '🇸🇬',
        currency: { symbol: 'S$', code: 'SGD', position: 'before', locale: 'en-SG' },
        salaryMultiplier: 1.90,
        aiAdoptionIndex: 1.25,
        criticalYearOffset: -2,
        // Hub finanziario e tech dell'Asia; tra i salari tech più alti al mondo
    },

    // ── Medio Oriente ─────────────────────────────────────────

    ae: {
        name: 'Emirati Arabi',
        localName: 'الإمارات',
        flag: '🇦🇪',
        currency: { symbol: 'AED', code: 'AED', position: 'after', locale: 'ar-AE' },
        salaryMultiplier: 1.55,
        aiAdoptionIndex: 1.10,
        criticalYearOffset: -1,
        // Dubai hub internazionale; zero tasse sul reddito, alto potere d'acquisto
    },

    // ── Europa — Extra ────────────────────────────────────────

    se: {
        name: 'Svezia',
        localName: 'Sverige',
        flag: '🇸🇪',
        currency: { symbol: 'kr', code: 'SEK', position: 'after', locale: 'sv-SE' },
        salaryMultiplier: 1.40,
        aiAdoptionIndex: 1.15,
        criticalYearOffset: -1,
        // Forte ecosistema startup (Spotify, Klarna); alta qualità della vita
    },

    no: {
        name: 'Norvegia',
        localName: 'Norge',
        flag: '🇳🇴',
        currency: { symbol: 'kr', code: 'NOK', position: 'after', locale: 'nb-NO' },
        salaryMultiplier: 1.75,
        aiAdoptionIndex: 1.10,
        criticalYearOffset: -1,
        // Ricchezza petrolifera; tra i salari più alti d'Europa con alto costo della vita
    },

    pt: {
        name: 'Portogallo',
        localName: 'Portugal',
        flag: '🇵🇹',
        currency: { symbol: '€', code: 'EUR', position: 'before', locale: 'pt-PT' },
        salaryMultiplier: 0.70,
        aiAdoptionIndex: 0.80,
        criticalYearOffset: 1,
        // Hub per remote workers e nomadi digitali; stipendi locali bassi ma costo vita contenuto
    },
};

// Paese di default (applicato se nessuna preferenza salvata)
export const DEFAULT_COUNTRY = 'it';

// Lista ordinata per area geografica (usata per il selettore UI)
export const COUNTRY_GROUPS = [
    {
        label: 'Europa',
        countries: ['it', 'de', 'fr', 'es', 'pt', 'nl', 'pl', 'gb', 'ch', 'se', 'no'],
    },
    {
        label: 'Americhe',
        countries: ['us', 'ca', 'mx', 'br'],
    },
    {
        label: 'Asia-Pacifico & ME',
        countries: ['au', 'sg', 'jp', 'in', 'ae'],
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
