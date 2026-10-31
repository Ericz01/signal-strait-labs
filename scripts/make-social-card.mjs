// Builds public/og-image.png (1200x630) from the logo. Run: node scripts/make-social-card.mjs
// The logo carries the brand wordmark; the tagline uses an installed sans font.
import sharp from 'sharp';

const W = 1200, H = 630, BAND = 190;
const INK = '#01081b', BAND2 = '#06153b', GOLD = '#C5A059', CANVAS = '#fbfbfd';

const logo = await sharp('assets/logo-source.png').trim().resize({ height: 360 }).toBuffer();
const { width: lw } = await sharp(logo).metadata();

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="wash" cx="20%" cy="0%" r="90%">
      <stop offset="0%" stop-color="#1a59cc" stop-opacity="0.08"/>
      <stop offset="60%" stop-color="${GOLD}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${CANVAS}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="band" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${INK}"/>
      <stop offset="100%" stop-color="${BAND2}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${CANVAS}"/>
  <rect width="${W}" height="${H - BAND}" fill="url(#wash)"/>
  <rect y="${H - BAND}" width="${W}" height="${BAND}" fill="url(#band)"/>
  <rect y="${H - BAND}" width="${W}" height="4" fill="${GOLD}"/>
  <text x="${W / 2}" y="${H - BAND + 88}" text-anchor="middle" font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="40" font-weight="700" fill="#ffffff">Growth engineering for Africa and beyond</text>
  <text x="${W / 2}" y="${H - BAND + 142}" text-anchor="middle" font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="28" font-weight="600" fill="${GOLD}" letter-spacing="2">signalstraitlabs.com</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: logo, top: Math.round((H - BAND - 360) / 2), left: Math.round((W - lw) / 2) }])
  .png({ compressionLevel: 9, palette: true, quality: 95 })
  .toFile('public/og-image.png');

const meta = await sharp('public/og-image.png').metadata();
console.log('public/og-image.png', `${meta.width}x${meta.height}`);
