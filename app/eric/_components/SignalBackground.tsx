// Faint grid with a few signal lines. The blue lines are static; gold copies
// on their own layers fade in and out in turn. Only opacity animates, so it
// runs on the compositor with no repaint per frame. Decorative only, and
// still under prefers-reduced-motion (see eric.css).
const LINES = [
  "M-20 520 C 220 520, 300 380, 520 380 S 860 250, 1220 250",
  "M-20 600 C 260 600, 420 470, 640 470 S 980 360, 1220 330",
  "M-20 430 C 200 430, 340 290, 560 300 S 900 140, 1220 120",
];

function LineLayer({ d, id, gold = false, className }: { d: string | string[]; id: string; gold?: boolean; className?: string }) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg className={`absolute inset-0 h-full w-full ${className ?? ""}`} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={gold ? "#C5A059" : "#1a59cc"} stopOpacity="0" />
          <stop offset="0.55" stopColor={gold ? "#F1DCA7" : "#1a59cc"} stopOpacity={gold ? 0.7 : 0.5} />
          <stop offset="1" stopColor={gold ? "#C5A059" : "#1a59cc"} stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((p) => (
        <path key={p} d={p} stroke={`url(#${id})`} strokeWidth={gold ? 1.5 : 1} />
      ))}
    </svg>
  );
}

export function SignalBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="grid-pattern-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,#000_20%,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(48rem_30rem_at_15%_-5%,rgba(26,89,204,0.35),transparent_70%),radial-gradient(36rem_24rem_at_95%_30%,rgba(26,89,204,0.18),transparent_70%)]" />
      <LineLayer d={LINES} id="eric-line" />
      {LINES.map((d, i) => (
        <LineLayer key={d} d={d} id={`eric-gold-${i}`} gold className="eric-pulse" />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ssl-bg" />
    </div>
  );
}
