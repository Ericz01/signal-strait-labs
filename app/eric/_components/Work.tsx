import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { moreWork, samples, work, workFilters } from "../content";
import { asset, isSet, linkProps } from "../_lib/utils";
import { CaseCard, CaseDetail } from "./CaseStudy";
import { Section, SectionHeader } from "./SectionHeader";
import { WorkExplorer } from "./WorkExplorer";

function Samples() {
  if (!samples.show) return null;
  const designs = samples.design.filter((d) => d.show);
  const videos = samples.video.filter((v) => v.thumbnail.show && isSet(v.href));
  if (designs.length === 0 && videos.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold tracking-tight text-white">{samples.heading}</h3>
      {designs.length > 0 && (
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {designs.map((d) => (
            <li key={d.src} className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#06112e]">
              <Image src={asset(d.src)} alt={isSet(d.alt) ? d.alt : ""} fill sizes="(min-width: 640px) 33vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      )}
      {videos.length > 0 && (
        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          {videos.map((v) => (
            <li key={v.href}>
              <a
                {...linkProps(v.href)}
                className="group block overflow-hidden rounded-xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold"
              >
                <span className="relative block aspect-video bg-[#06112e]">
                  <Image src={asset(v.thumbnail.src)} alt="" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                  <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-ssl-bg/30 transition-colors group-hover:bg-ssl-bg/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ssl-gold text-ssl-bg">
                      <svg viewBox="0 0 20 20" className="ml-0.5 h-5 w-5" fill="currentColor"><path d="M6 4l10 6-10 6z" /></svg>
                    </span>
                  </span>
                </span>
                <span className="block p-3 text-sm text-slate-200">{isSet(v.title) ? v.title : v.thumbnail.alt}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Work() {
  const items = work.cases.map((study) => ({
    id: study.id,
    title: study.title,
    tags: study.tags,
    featured: study.featured,
    card: <CaseCard study={study} />,
    detail: <CaseDetail study={study} headingId={`case-${study.id}-title`} />,
  }));

  return (
    <Section id="work" labelledBy="eric-work-heading">
      <SectionHeader id="eric-work-heading" eyebrow={work.eyebrow} heading={work.heading} intro={work.intro} />
      <div className="mt-12">
        <WorkExplorer filters={workFilters} items={items} cardCta={work.cardCta} closeLabel={work.closeLabel} />
      </div>

      <div className="mt-20">
        <h3 className="text-xl font-semibold tracking-tight text-white">{moreWork.heading}</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreWork.items.map((m) => (
            <AnimateOnScroll asChild variant="fade" key={m.title}>
              <li className="eric-card rounded-xl p-6">
                <p className="font-display font-semibold text-white">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{m.body}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>

      <Samples />
    </Section>
  );
}
