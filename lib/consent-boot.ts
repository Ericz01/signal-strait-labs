// Inline <head> script, run before first paint: marks <html data-consent> from
// localStorage so CSS can hide the server-rendered cookie banner for visitors
// who already chose. Keep the key in sync with STORAGE_KEY in lib/cookie-consent.ts.
export const CONSENT_BOOT_SCRIPT =
  "try{var c=localStorage.getItem('ssl-cookie-consent');if(c==='accepted'||c==='declined')document.documentElement.setAttribute('data-consent',c)}catch(e){}";
