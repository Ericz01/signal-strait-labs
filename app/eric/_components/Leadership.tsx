import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { leadership, profile } from "../content";
import { asset, isSet } from "../_lib/utils";
import { Section, SectionHeader } from "./SectionHeader";

export function Leadership() {
  const points = leadership.points.map((p) => {
    if (!p.text.includes("{value}")) return p.text;
    return isSet(p.value) ? p.text.replace("{value}", String(p.value)) : (p.textWithoutValue ?? "");
  }).filter(Boolean);

  return (
    <Section id="leadership" labelledBy="eric-leadership-heading" className="border-y border-white/[0.06] bg-[radial-gradient(60rem_30rem_at_0%_0%,rgba(26,89,204,0.14),transparent_70%)]">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <SectionHeader id="eric-leadership-heading" eyebrow={leadership.eyebrow} heading={leadership.heading} intro={leadership.intro} />
          <a
            href={asset(profile.cv.href)}
            download={profile.cv.downloadName}
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-ssl-gold px-5 py-3 text-sm font-semibold text-ssl-bg transition-colors hover:bg-[#d4b273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ssl-bg"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 3v10m0 0 4-4m-4 4-4-4M4 16h12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {profile.cv.label}
          </a>
        </div>
        <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {points.map((text) => (
            <AnimateOnScroll asChild variant="fade" key={text}>
              <li className="flex gap-4 py-5">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-ssl-gold" />
                <p className="text-base leading-relaxed text-slate-200 sm:text-lg">{text}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </Section>
  );
}
