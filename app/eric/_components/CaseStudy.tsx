import Image from "next/image";
import type { CaseStudy, ImageSlot, Visual } from "../content";
import { work, workFilters } from "../content";
import { asset, isSet, linkProps } from "../_lib/utils";
import { cn } from "@/lib/utils";
import { DiagramView } from "./Diagrams";
import { FramedImage } from "./Frames";

export function clientLabel(c: CaseStudy): string {
  return c.client.nameConfirmed || !c.client.anonymousName ? c.client.name : c.client.anonymousName;
}

const tagLabel = (tag: string) => workFilters.find((f) => f.id === tag)?.label ?? tag;

export function visibleVisuals(c: CaseStudy): Visual[] {
  return c.visuals.filter((v) => v.kind === "diagram" || v.image.show);
}

function firstImage(c: CaseStudy): ImageSlot | undefined {
  for (const v of c.visuals) if (v.kind === "image" && v.image.show && v.image.frame !== "phone") return v.image;
  return undefined;
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
          {tagLabel(t)}
        </li>
      ))}
    </ul>
  );
}

/** The card in the grid. The button that opens the full case study is added by WorkExplorer. */
export function CaseCard({ study }: { study: CaseStudy }) {
  const thumb = firstImage(study);
  return (
    <div className={cn("flex h-full flex-col", study.featured && "lg:flex-row")}>
      {thumb && (
        <div
          className={cn(
            "relative shrink-0 overflow-hidden border-b border-white/[0.06] bg-[#06112e]",
            study.featured && "lg:w-[58%] lg:border-b-0 lg:border-r"
          )}
          style={{ aspectRatio: "16 / 10" }}
        >
          <Image
            src={asset(thumb.src)}
            alt=""
            fill
            sizes={study.featured ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      )}
      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", study.featured && "lg:justify-center lg:p-10")}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ssl-gold">{clientLabel(study)}</p>
        <h3 className={cn("mt-3 text-xl font-semibold leading-snug tracking-tight text-white", study.featured && "lg:text-2xl")} >{study.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-300">{study.summary}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Tags tags={study.tags} />
          <span aria-hidden="true" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
            {work.cardCta}
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-ssl-gold transition-transform group-hover:translate-x-1 motion-reduce:transition-none" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function Step({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-white/[0.07] py-6 md:grid-cols-[11rem_1fr] md:gap-8">
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ssl-gold">{label}</h4>
      <div className="leading-relaxed text-slate-200">{children}</div>
    </div>
  );
}

/** The full case study shown in the dialog. */
export function CaseDetail({ study, headingId }: { study: CaseStudy; headingId: string }) {
  const built = study.built.filter(isSet);
  const links = (study.links ?? []).filter((l) => isSet(l.href));
  const visuals = visibleVisuals(study);
  const diagrams = visuals.filter((v) => v.kind === "diagram");
  const images = visuals.filter((v): v is Extract<Visual, { kind: "image" }> => v.kind === "image");
  const wideImages = images.filter((v) => v.image.frame !== "phone");
  const phoneImages = images.filter((v) => v.image.frame === "phone");

  return (
    <article className="px-5 pb-10 pt-2 sm:px-8 md:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ssl-gold">{clientLabel(study)}</p>
      <h3 id={headingId} className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
        {study.title}
      </h3>
      <div className="mt-4">
        <Tags tags={study.tags} />
      </div>

      {diagrams.map((v, i) => (
        <div key={i} className="mt-8">
          <DiagramView diagram={v.diagram} />
        </div>
      ))}

      <div className="mt-8">
        {isSet(study.problem) && <Step label={work.steps.problem}>{study.problem}</Step>}
        {isSet(study.role) && <Step label={work.steps.role}>{study.role}</Step>}
        {isSet(study.decided) && <Step label={work.steps.decided}>{study.decided}</Step>}
        {built.length > 0 && (
          <Step label={work.steps.built}>
            <ul className="space-y-2.5">
              {built.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-ssl-gold/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Step>
        )}
        {(isSet(study.result) || isSet(study.resultNote)) && (
          <Step label={work.steps.result}>
            {isSet(study.result) && <p className="font-medium text-white">{study.result}</p>}
            {isSet(study.resultNote) && <p className={isSet(study.result) ? "mt-2 text-slate-300" : ""}>{study.resultNote}</p>}
          </Step>
        )}
      </div>

      {images.length > 0 && (
        <div className="mt-4 grid items-start gap-6 border-t border-white/[0.07] pt-8 md:grid-cols-[1fr_auto]">
          {wideImages.length > 0 && (
            <div className="space-y-6">
              {wideImages.map((v) => (
                <figure key={v.image.src}>
                  <FramedImage image={v.image} sizes="(min-width: 1024px) 640px, 100vw" />
                  {v.image.caption && <figcaption className="mt-2 text-xs text-slate-400">{v.image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
          {phoneImages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 md:w-64 md:flex-col">
              {phoneImages.map((v) => (
                <figure key={v.image.src} className="w-full max-w-[16rem]">
                  <FramedImage image={v.image} sizes="272px" />
                  {v.image.caption && <figcaption className="mt-2 text-center text-xs text-slate-400">{v.image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              {...linkProps(l.href)}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-ssl-gold/40 px-4 py-2 text-sm font-semibold text-ssl-gold transition-colors hover:bg-ssl-gold hover:text-ssl-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
