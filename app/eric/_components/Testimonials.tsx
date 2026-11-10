import { testimonials } from "../content";
import { isSet } from "../_lib/utils";
import { Section, SectionHeader } from "./SectionHeader";

// Hidden completely until at least one real quote exists in content.ts.
export function Testimonials() {
  const quotes = testimonials.items.filter((t) => isSet(t.quote) && isSet(t.name));
  if (quotes.length === 0) return null;

  return (
    <Section id="testimonials" labelledBy="eric-testimonials-heading">
      <SectionHeader id="eric-testimonials-heading" heading={testimonials.heading} />
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((t) => (
          <li key={t.name} className="eric-card rounded-2xl p-7">
            <figure>
              <blockquote className="text-lg leading-relaxed text-slate-100">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-white">{t.name}</span>
                {isSet(t.role) && <span className="block text-slate-400">{t.role}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
