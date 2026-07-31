// shared-nav.mjs — PILL_NAV condiviso tra tutti i build script
// Modificare qui per aggiornare la nav su tutte le 327 pagine generate

export const PILL_NAV = `
<nav id="site-nav" aria-label="Navigazione principale" style="position:fixed;top:1rem;left:0;right:0;z-index:1000;padding:0 1rem;">
  <div style="max-width:64rem;margin:0 auto;background:rgba(255,255,255,0.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid #EFE9DC;border-radius:999px;box-shadow:0 1px 2px rgba(28,26,23,.04),0 12px 32px -12px rgba(28,26,23,.10);padding:.5rem .75rem;display:flex;align-items:center;justify-content:space-between;">
    <a href="/" style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.94rem;letter-spacing:-.01em;padding-left:.5rem;white-space:nowrap;text-decoration:none;background:linear-gradient(135deg,#4338ca,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">JobRiskAI</a>
    <div id="pill-links" style="display:flex;align-items:center;font-size:.8rem;color:#4A463E;font-weight:500;gap:.15rem;">
      <a href="/classifica" style="color:#4A463E;text-decoration:none;padding:.35rem .75rem;border-radius:999px;white-space:nowrap;">Classifica</a>
      <a href="/calcolatore" style="color:#4A463E;text-decoration:none;padding:.35rem .75rem;border-radius:999px;white-space:nowrap;">Calcolatore</a>
      <a href="/confronta" style="color:#4A463E;text-decoration:none;padding:.35rem .75rem;border-radius:999px;white-space:nowrap;">Confronta</a>
      <a href="/blog" style="color:#4A463E;text-decoration:none;padding:.35rem .75rem;border-radius:999px;white-space:nowrap;">Blog</a>
      <a href="/dati" style="color:#4A463E;text-decoration:none;padding:.35rem .75rem;border-radius:999px;white-space:nowrap;">Dati</a>
      <a href="/chi-siamo" style="color:#4A463E;text-decoration:none;padding:.35rem .75rem;border-radius:999px;white-space:nowrap;">Chi Siamo</a>
    </div>
    <div style="display:flex;align-items:center;gap:.5rem;">
      <select id="langSelect" aria-label="Seleziona lingua" style="background:transparent;color:#4A463E;border:1px solid #EFE9DC;border-radius:8px;padding:.3rem .4rem;font-size:.8rem;cursor:pointer;outline:none;">
        <option value="it">IT</option><option value="en">EN</option><option value="es">ES</option><option value="de">DE</option><option value="fr">FR</option>
      </select>
      <button id="mobileMenuBtn" aria-label="Menu" aria-expanded="false" onclick="togglePillMenu()" style="display:none;flex-direction:column;justify-content:center;align-items:center;width:40px;height:40px;border:none;background:transparent;cursor:pointer;border-radius:50%;padding:0;flex-shrink:0;">
        <span style="display:block;width:20px;height:2px;background:#4A463E;margin-bottom:5px;border-radius:2px;"></span>
        <span style="display:block;width:20px;height:2px;background:#4A463E;margin-bottom:5px;border-radius:2px;"></span>
        <span style="display:block;width:20px;height:2px;background:#4A463E;border-radius:2px;"></span>
      </button>
    </div>
  </div>
  <div id="mobileMenu" style="display:none;background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-radius:0 0 1.25rem 1.25rem;padding:1rem 1.25rem 1.25rem;margin:0 .5rem;border:1px solid #EFE9DC;border-top:none;">
    <nav style="display:flex;flex-direction:column;gap:.25rem;">
      <a href="/" style="display:block;padding:.75rem 1rem;border-radius:.75rem;color:#4A463E;font-size:.95rem;font-weight:500;text-decoration:none;">Home</a>
      <a href="/classifica" style="display:block;padding:.75rem 1rem;border-radius:.75rem;color:#4A463E;font-size:.95rem;font-weight:500;text-decoration:none;">Classifica</a>
      <a href="/calcolatore" style="display:block;padding:.75rem 1rem;border-radius:.75rem;color:#4A463E;font-size:.95rem;font-weight:500;text-decoration:none;">Calcolatore</a>
      <a href="/confronta" style="display:block;padding:.75rem 1rem;border-radius:.75rem;color:#4A463E;font-size:.95rem;font-weight:500;text-decoration:none;">Confronta</a>
      <a href="/blog" style="display:block;padding:.75rem 1rem;border-radius:.75rem;color:#4A463E;font-size:.95rem;font-weight:500;text-decoration:none;">Blog</a>
      <a href="/dati" style="display:block;padding:.75rem 1rem;border-radius:.75rem;color:#4A463E;font-size:.95rem;font-weight:500;text-decoration:none;">Dati</a>
      <a href="/chi-siamo" style="display:block;padding:.75rem 1rem;border-radius:.75rem;color:#4A463E;font-size:.95rem;font-weight:500;text-decoration:none;">Chi Siamo</a>
    </nav>
  </div>
</nav>
<style>@media(max-width:767px){#pill-links{display:none!important}#mobileMenuBtn{display:flex!important}}</style>
<script>function togglePillMenu(){var m=document.getElementById('mobileMenu'),b=document.getElementById('mobileMenuBtn'),o=m.style.display==='block';m.style.display=o?'none':'block';b.setAttribute('aria-expanded',o?'false':'true');}document.addEventListener('click',function(e){var n=document.getElementById('site-nav');if(n&&!n.contains(e.target)){document.getElementById('mobileMenu').style.display='none';var b=document.getElementById('mobileMenuBtn');if(b)b.setAttribute('aria-expanded','false');}});</script>
<div style="height:5rem;"></div>`;
