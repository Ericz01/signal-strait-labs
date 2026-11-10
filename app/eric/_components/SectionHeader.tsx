import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  id?: string;
  className?: string;
};

// Gold eyebrow, large heading, short intro. Always an h2: the page has one h1.
export function SectionHeader({ eyebrow, heading, intro, id, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ssl-gold">
          <span aria-hidden="true" className="h-px w-8 bg-ssl-gold/60" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {heading}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{intro}</p>}
    </div>
  );
}

/** Standard section wrapper: anchor offset for the sticky header, consistent spacing. */
export function Section({
  id,
  labelledBy,
  className,
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative scroll-mt-24 px-4 py-20 sm:px-6 md:py-28", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
