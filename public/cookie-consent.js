/**
 * cookie-consent.js — Google Consent Mode v2 BASIC
 * JobRiskAI · GDPR EU Compliant
 *
 * NOTA: gtag() e il blocco 'consent default' (tutti denied)
 * sono già definiti inline nel <head> di ogni pagina,
 * PRIMA del caricamento di qualsiasi script Google.
 * Questo file gestisce solo: lettura consenso salvato,
 * visualizzazione banner e aggiornamento consenso utente.
 */
(function () {
  'use strict';

  var CONSENT_KEY     = 'cookie_consent';      // chiave attuale (compatibilità con utenti esistenti)
  var CONSENT_KEY_OLD = 'jrai_cookie_consent'; // chiave legacy (eventuale migrazione)

  /* ── Riferimenti DOM ─────────────────────────────────── */
  var banner    = document.getElementById('cookieBanner');
  var acceptBtn = document.getElementById('cookieAccept');
  var rejectBtn = document.getElementById('cookieReject');

  if (!banner || !acceptBtn || !rejectBtn) {
    console.warn('[consent] Banner HTML mancante — controlla cookieBanner, cookieAccept, cookieReject');
    return;
  }

  /* ── Helpers localStorage ────────────────────────────── */
  function getConsent() {
    try {
      // Migrazione: se esiste la chiave legacy, sposta sul tasto attuale
      var legacy = localStorage.getItem(CONSENT_KEY_OLD);
      if (legacy !== null) {
        localStorage.setItem(CONSENT_KEY, legacy);
        localStorage.removeItem(CONSENT_KEY_OLD);
      }
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) { return null; }
  }
  function saveConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
  }

  /* ── Aggiorna Google Consent Mode v2 ────────────────── */
  function applyConsent(granted) {
    // gtag() è già definito inline nel <head> della pagina
    if (typeof gtag !== 'function') {
      console.warn('[consent] gtag non definito — assicurati che il blocco inline sia nel <head>');
      return;
    }
    var state = granted ? 'granted' : 'denied';
    gtag('consent', 'update', {
      'ad_storage':         state,
      'analytics_storage':  state,
      'ad_user_data':       state,
      'ad_personalization': state
    });
  }

  /* ── Inizializzazione ───────────────────────────────── */
  var existing = getConsent();

  if (existing === null) {
    // Prima visita: mostra banner
    banner.style.display = 'block';
  } else {
    // Consenso già espresso: applica silenziosamente
    applyConsent(existing === 'accepted');
  }

  /* ── Event listeners ────────────────────────────────── */
  acceptBtn.addEventListener('click', function () {
    saveConsent('accepted');
    banner.style.display = 'none';
    applyConsent(true);
  });

  rejectBtn.addEventListener('click', function () {
    saveConsent('rejected');
    banner.style.display = 'none';
    applyConsent(false);
    // Nessun tracking aggiuntivo: tutto resta su 'denied'
  });

})();
