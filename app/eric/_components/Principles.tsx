import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { principles } from "../content";
import { Section, SectionHeader } from "./SectionHeader";

export function Principles() {
  return (
    <Section id="how-i-think" labelledBy="eric-principles-heading">
      <SectionHeader id="eric-principles-heading" eyebrow={principles.eyebrow} heading={principles.heading} />
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
        {principles.items.map((p, i) => (
          <AnimateOnScroll asChild variant="fade" key={p.title}>
            <li className="flex gap-5 bg-ssl-bg p-7 sm:p-9">
              <span aria-hidden="true" className="font-display text-sm font-semibold tabular-nums text-ssl-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{p.body}</p>
              </div>
            </li>
          </AnimateOnScroll>
        ))}
      </ol>
    </Section>
  );
}
