import Script from 'next/script';

// Cloudflare Web Analytics beacon. Cookieless, so it does not need cookie
// consent. The token is public (it ships in the page anyway) and is set at
// build time via NEXT_PUBLIC_CF_ANALYTICS_TOKEN. Renders nothing if unset.
export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;
  if (!token) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
