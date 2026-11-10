import { timeline } from "../content";
import { isSet, yearRange } from "../_lib/utils";
import { Section, SectionHeader } from "./SectionHeader";

export function Timeline() {
  return (
    <Section id="experience" labelledBy="eric-timeline-heading" className="bg-[linear-gradient(180deg,transparent,rgba(26,89,204,0.06),transparent)]">
      <SectionHeader id="eric-timeline-heading" eyebrow={timeline.eyebrow} heading={timeline.heading} />
      <ol className="relative mt-14 max-w-3xl border-l border-white/10 pl-8 sm:pl-10">
        {timeline.entries.map((e) => {
          const title = isSet(e.title) ? e.title : e.fallbackTitle;
          if (!title) return null;
          const years = yearRange(e.start, e.end);
          return (
            <li key={`${e.kind}-${e.organization}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className={
                  e.kind === "education"
                    ? "absolute -left-[calc(2rem+5px)] top-1.5 h-[9px] w-[9px] rounded-full border border-ssl-gold bg-ssl-bg sm:-left-[calc(2.5rem+5px)]"
                    : "absolute -left-[calc(2rem+5px)] top-1.5 h-[9px] w-[9px] rounded-full bg-ssl-gold shadow-[0_0_12px_rgba(197,160,89,0.7)] sm:-left-[calc(2.5rem+5px)]"
                }
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {years && <p className="text-xs font-medium tabular-nums text-slate-400">{years}</p>}
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ssl-gold">
                  {e.kind === "education" ? "Education" : "Role"}
                </p>
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-1 text-slate-300">
                {e.organization}
                {isSet(e.note) && <span className="text-slate-400"> · {e.note}</span>}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
