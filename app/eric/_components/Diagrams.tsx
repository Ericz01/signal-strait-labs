import type { Diagram } from "../content";

// Diagrams are real HTML lists (readable by screen readers and search engines)
// with SVG connectors. They run left to right from md up and top to bottom on
// phones, so the text never shrinks to fit.

function Arrow({ direction }: { direction: "down" | "right" }) {
  if (direction === "down") {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 36" className="mx-auto my-1 h-9 w-4 shrink-0" fill="none">
        <line x1="8" y1="0" x2="8" y2="30" stroke="#1a59cc" strokeOpacity="0.45" strokeWidth="2" />
        <line className="eric-flow" x1="8" y1="0" x2="8" y2="30" stroke="#C5A059" strokeWidth="2" />
        <path d="M3 26l5 6 5-6" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 40 16" className="h-4 w-10 shrink-0 self-center" fill="none">
      <line x1="0" y1="8" x2="34" y2="8" stroke="#1a59cc" strokeOpacity="0.45" strokeWidth="2" />
      <line className="eric-flow" x1="0" y1="8" x2="34" y2="8" stroke="#C5A059" strokeWidth="2" />
      <path d="M30 3l6 5-6 5" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function FlowArrow() {
  return (
    <>
      <span className="md:hidden">
        <Arrow direction="down" />
      </span>
      <span className="hidden md:flex">
        <Arrow direction="right" />
      </span>
    </>
  );
}

function PipelineDiagram({ diagram }: { diagram: Extract<Diagram, { type: "pipeline" }> }) {
  return (
    <figure className="rounded-2xl border border-white/[0.08] bg-[radial-gradient(40rem_20rem_at_0%_0%,rgba(26,89,204,0.18),transparent_70%)] p-5 sm:p-7">
      <figcaption className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ssl-gold">{diagram.title}</figcaption>
      <ol className="flex flex-col md:flex-row md:items-stretch">
        {diagram.steps.map((step, i) => (
          <li key={step.label} className="flex flex-col md:flex-1 md:flex-row">
            {i > 0 && <FlowArrow />}
            <div className="flex-1 rounded-xl border border-ssl-blue/40 bg-[#081a45]/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <p className="font-display text-sm font-semibold text-white">{step.label}</p>
              {step.detail && <p className="mt-1 text-xs leading-relaxed text-slate-300">{step.detail}</p>}
              {step.chips && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {step.chips.map((chip) => (
                    <li key={chip} className="rounded-full border border-ssl-gold/30 bg-ssl-gold/10 px-2.5 py-1 text-[11px] font-medium text-[#ead7ad]">
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
      {diagram.alert && (
        <p className="mt-5 flex items-center gap-2 text-xs text-slate-300">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ssl-gold shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
          {diagram.alert}
        </p>
      )}
    </figure>
  );
}

type HandoffLane = Extract<Diagram, { type: "handoff" }>["lanes"][number];

function Lane({ lane }: { lane: HandoffLane }) {
  return (
    <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
      <p className="font-display text-sm font-semibold text-white">{lane.name}</p>
      <p className="text-xs text-slate-400">{lane.owner}</p>
      <ol className="mt-4 space-y-2">
        {lane.stages.map((s, i) => (
          <li
            key={s.label}
            className="rounded-lg border border-ssl-blue/35 bg-[#081a45]/70 px-3 py-2"
            // Funnel: each stage a little narrower than the one before.
            style={{ marginInline: `${i * 4}%` }}
          >
            <p className="text-sm font-medium text-white">{s.label}</p>
            {s.detail && <p className="text-xs text-slate-300">{s.detail}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

function HandoffDiagram({ diagram }: { diagram: Extract<Diagram, { type: "handoff" }> }) {
  const [marketing, sales] = diagram.lanes;

  return (
    <figure className="rounded-2xl border border-white/[0.08] bg-[radial-gradient(40rem_20rem_at_100%_0%,rgba(26,89,204,0.18),transparent_70%)] p-5 sm:p-7">
      <figcaption className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ssl-gold">{diagram.title}</figcaption>
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
        <Lane lane={marketing} />
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ssl-gold/50 bg-ssl-gold/[0.06] p-4 text-center md:w-48">
          <FlowArrow />
          <p className="font-display text-sm font-semibold text-ssl-gold">{diagram.handoff.label}</p>
          <p className="text-xs leading-relaxed text-slate-300">{diagram.handoff.detail}</p>
        </div>
        <Lane lane={sales} />
      </div>
      <ul className="mt-5 flex flex-col gap-2 text-xs text-slate-300 sm:flex-row sm:gap-6">
        {diagram.footnotes.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ssl-gold" />
            {f}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function DiagramView({ diagram }: { diagram: Diagram }) {
  return diagram.type === "pipeline" ? <PipelineDiagram diagram={diagram} /> : <HandoffDiagram diagram={diagram} />;
}
