import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { roles } from "../content";
import { isSet, yearRange } from "../_lib/utils";
import { Section, SectionHeader } from "./SectionHeader";

export function Roles() {
  return (
    <Section id="roles" labelledBy="eric-roles-heading" className="bg-[linear-gradient(180deg,transparent,rgba(26,89,204,0.06),transparent)]">
      <SectionHeader id="eric-roles-heading" eyebrow={roles.eyebrow} heading={roles.heading} />
      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {roles.items.map((r) => {
          const years = yearRange(r.start, r.end);
          return (
            <AnimateOnScroll asChild variant="slide-up" key={r.organization}>
              <li className="eric-card eric-card-hover flex flex-col rounded-2xl p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ssl-gold">{r.organization}</p>
                  {years && <p className="shrink-0 text-xs font-medium tabular-nums text-slate-400">{years}</p>}
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{r.scope}</p>
                {isSet(r.context) && (
                  <p className="mt-5 border-t border-white/[0.07] pt-4 text-sm leading-relaxed text-slate-400">
                    <span className="text-slate-300">About the organization: </span>
                    {r.context}
                  </p>
                )}
              </li>
            </AnimateOnScroll>
          );
        })}
      </ul>
    </Section>
  );
}
