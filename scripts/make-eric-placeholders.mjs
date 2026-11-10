// Creates placeholder files for the /eric portfolio page in public/eric/.
// Run from the project root:  node scripts/make-eric-placeholders.mjs
//
// It never overwrites: any file that already exists (for example a real image
// Eric has dropped in) is skipped. To regenerate one placeholder, delete that
// file and run the script again.
//
// Placeholders: navy background, soft blue glow, thin gold border, and the
// filename and pixel size in the middle, so it is obvious which file goes where.
// The Open Graph image is a simple branded card instead, and the CV is a
// one-page "CV coming soon" PDF.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const ROOT = 'public/eric';
const NAVY = '#01081b';
const BLUE = '#1a59cc';
const GOLD = '#C5A059';
const FONT = 'Noto Sans, DejaVu Sans, sans-serif';

// [file, width, height, options]
const IMAGES = [
  ['portrait.jpg', 1200, 1500],
  ['portrait-square.jpg', 800, 800],
  ['work/railsite-1.jpg', 1600, 1000],
  ['work/railsite-2.jpg', 1080, 1350],
  ['work/lead-framework-1.jpg', 1600, 1000],
  ['work/course-finder-1.jpg', 1600, 1000],
  ['work/course-finder-2.jpg', 1080, 1920],
  ['work/needs-assessment-1.jpg', 1600, 1000],
  ['work/dashboard-1.jpg', 1600, 1000],
  ['work/paid-ads-1.jpg', 1600, 1000],
  ['work/logistics-ads-1.jpg', 1080, 1350],
  ['work/logistics-ads-2.jpg', 1600, 1000],
  ['work/content-plan-1.jpg', 1600, 1000],
  ['work/seo-1.jpg', 1600, 1000],
  ['work/ssl-site-1.jpg', 1600, 1000],
  ...[1, 2, 3, 4, 5, 6].map((i) => [`samples/design-${i}.jpg`, 1080, 1080]),
  ...[1, 2, 3].map((i) => [`samples/video-${i}.jpg`, 1280, 720]),
  ...['ssl', 'ires', 'apollina', 'oplos'].map((n) => [`logos/${n}.png`, 400, 160, { transparent: true }]),
];

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function placeholderSvg(name, w, h, { transparent = false } = {}) {
  const label = `${name} · ${w} x ${h}`;
  // Text size scales with the image so it stays readable on small slots.
  const size = Math.max(14, Math.min(Math.round(w / (label.length * 0.62)), Math.round(h / 9), 54));
  const border = Math.max(2, Math.round(Math.min(w, h) / 220));
  return `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="${BLUE}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${BLUE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  ${transparent ? '' : `<rect width="${w}" height="${h}" fill="${NAVY}"/><rect width="${w}" height="${h}" fill="url(#glow)"/>`}
  <rect x="${border / 2}" y="${border / 2}" width="${w - border}" height="${h - border}" rx="${Math.round(border * 4)}" fill="none" stroke="${GOLD}" stroke-width="${border}" stroke-opacity="0.8"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="${FONT}" font-size="${size}" font-weight="600" fill="${transparent ? GOLD : '#e2e8f0'}">${escape(label)}</text>
</svg>`;
}

async function writeImage(path, svg, { png = false } = {}) {
  mkdirSync(dirname(path), { recursive: true });
  const img = sharp(Buffer.from(svg));
  if (png) await img.png({ compressionLevel: 9 }).toFile(path);
  else await img.jpeg({ quality: 78, mozjpeg: true }).toFile(path);
}

async function makeOgImage(path) {
  const W = 1200;
  const H = 630;
  const portraitPath = join(ROOT, 'portrait-square.jpg');
  const hasPortrait = existsSync(portraitPath);
  const textX = hasPortrait ? 80 : W / 2;
  const anchor = hasPortrait ? 'start' : 'middle';
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="a" cx="15%" cy="0%" r="80%">
      <stop offset="0%" stop-color="${BLUE}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${BLUE}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b" cx="95%" cy="100%" r="60%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${NAVY}"/>
  <rect width="${W}" height="${H}" fill="url(#a)"/>
  <rect width="${W}" height="${H}" fill="url(#b)"/>
  <rect y="${H - 6}" width="${W}" height="6" fill="${GOLD}"/>
  <text x="${textX}" y="200" text-anchor="${anchor}" font-family="${FONT}" font-size="22" font-weight="700" letter-spacing="4" fill="${GOLD}">MARKETING AND GROWTH LEADER</text>
  <text x="${textX}" y="300" text-anchor="${anchor}" font-family="${FONT}" font-size="88" font-weight="700" fill="#ffffff">Eric Nyaga</text>
  <text x="${textX}" y="370" text-anchor="${anchor}" font-family="${FONT}" font-size="32" font-weight="500" fill="#cbd5e1">Founder, Signal Strait Labs</text>
  <text x="${textX}" y="480" text-anchor="${anchor}" font-family="${FONT}" font-size="24" font-weight="600" fill="#94a3b8">signalstraitlabs.com/eric</text>
</svg>`;
  const layers = [];
  if (hasPortrait) {
    const D = 380;
    const mask = Buffer.from(`<svg width="${D}" height="${D}"><circle cx="${D / 2}" cy="${D / 2}" r="${D / 2}" fill="#fff"/></svg>`);
    const face = await sharp(portraitPath).resize(D, D).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
    const ring = Buffer.from(
      `<svg width="${D + 12}" height="${D + 12}"><circle cx="${(D + 12) / 2}" cy="${(D + 12) / 2}" r="${D / 2 + 3}" fill="none" stroke="${GOLD}" stroke-width="3"/></svg>`
    );
    layers.push({ input: ring, left: W - D - 106, top: (H - D) / 2 - 6 });
    layers.push({ input: face, left: W - D - 100, top: (H - D) / 2 });
  }
  mkdirSync(dirname(path), { recursive: true });
  await sharp(Buffer.from(svg)).composite(layers).png({ compressionLevel: 9 }).toFile(path);
}

// A minimal valid one-page PDF (A4) that says "CV coming soon".
function makeCvPdf(path) {
  const text = 'BT /F1 28 Tf 72 760 Td (Eric Nyaga) Tj 0 -40 Td /F1 16 Tf (CV coming soon.) Tj ET';
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${text.length} >>\nstream\n${text}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objects.forEach((body, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  pdf += offsets.map((o) => `${String(o).padStart(10, '0')} 00000 n \n`).join('');
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, pdf, 'latin1');
}

let made = 0;
let skipped = 0;
const note = (status, file) => console.log(`${status.padEnd(7)} public/eric/${file}`);

for (const [file, w, h, opts] of IMAGES) {
  const path = join(ROOT, file);
  if (existsSync(path)) {
    skipped++;
    note('exists', file);
    continue;
  }
  await writeImage(path, placeholderSvg(file.split('/').pop(), w, h, opts), { png: file.endsWith('.png') });
  made++;
  note('created', file);
}

const og = join(ROOT, 'og-eric.png');
if (existsSync(og)) {
  skipped++;
  note('exists', 'og-eric.png');
} else {
  await makeOgImage(og);
  made++;
  note('created', 'og-eric.png');
}

const cv = join(ROOT, 'eric-nyaga-cv.pdf');
if (existsSync(cv)) {
  skipped++;
  note('exists', 'eric-nyaga-cv.pdf');
} else {
  makeCvPdf(cv);
  made++;
  note('created', 'eric-nyaga-cv.pdf');
}

console.log(`\n${made} created, ${skipped} already there (left untouched).`);
