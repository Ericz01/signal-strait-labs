import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { capabilities } from "../content";
import { Section, SectionHeader } from "./SectionHeader";

function ToolList({ copy = false }: { copy?: boolean }) {
  return (
    <ul aria-hidden={copy || undefined} className={copy ? "eric-marquee-list eric-marquee-copy flex shrink-0" : "eric-marquee-list flex shrink-0"}>
      {capabilities.tools.map((tool) => (
        <li key={tool} className="m-1.5 whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
          {tool}
        </li>
      ))}
    </ul>
  );
}

export function Capabilities() {
  return (
    <Section id="capabilities" labelledBy="eric-capabilities-heading">
      <SectionHeader id="eric-capabilities-heading" eyebrow={capabilities.eyebrow} heading={capabilities.heading} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.groups.map((g, i) => (
          <AnimateOnScroll asChild variant="slide-up" key={g.title}>
            <div className="eric-card eric-card-hover rounded-2xl p-6">
              <p aria-hidden="true" className="font-display text-sm font-semibold tabular-nums text-ssl-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-ssl-gold/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <div className="mt-16">
        <p id="eric-tools-label" className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          {capabilities.toolsLabel}
        </p>
        {/* Two copies scroll as one strip; the copy is hidden from screen
            readers and removed with reduced motion, where the list wraps. */}
        <div role="region" aria-labelledby="eric-tools-label" className="eric-marquee mt-5 overflow-hidden">
          <div className="eric-marquee-track">
            <ToolList />
            <ToolList copy />
          </div>
        </div>
      </div>
    </Section>
  );
}
