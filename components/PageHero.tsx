import Link from 'next/link';
import { ResponsivePhoto } from '@/components/ResponsivePhoto';

export type HeroImage = { base: string; smallWidth: number; largeWidth: number };

type PageHeroProps = {
  title: string;
  description?: string;
  /** Breadcrumb trail after Home, e.g. [{ label: 'Services', href: '/services' }, { label: 'SEO' }]. */
  breadcrumbs: Array<{ label: string; href?: string }>;
  image: HeroImage;
  /** Optional element shown above the title (e.g. a service icon). */
  badge?: React.ReactNode;
};

// Dark photo header for inner pages, matching the home hero.
export function PageHero({ title, description, breadcrumbs, image, badge }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ssl-bg">
      <ResponsivePhoto
        base={image.base}
        smallWidth={image.smallWidth}
        largeWidth={image.largeWidth}
        alt=""
        priority
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-b from-ssl-bg/90 via-ssl-bg/70 to-ssl-bg/95" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_26rem_at_50%_-10%,rgba(26,89,204,0.35),transparent_70%)]"
      />
      <div className="mx-auto max-w-4xl px-4 pb-28 pt-16 text-center sm:px-6 md:pb-32 md:pt-20">
        <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
          <ol className="glass-chip inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-slate-500">
                  /
                </span>
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ssl-gold">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {badge}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h1>
        {description && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>}
      </div>
    </section>
  );
}
