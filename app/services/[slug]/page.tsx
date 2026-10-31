import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { FAQAccordion } from '@/components/FAQAccordion';
import { JsonLd } from '@/components/JsonLd';
import { serviceFaqJsonLd } from '@/lib/structured-data';
import { pageMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/PageHero';
import { GlassOrbs } from '@/components/GlassOrbs';
import { ServiceCard } from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import { SectionHeading } from '@/components/ui/SectionHeading';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return pageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;
  const sections = [
    { label: 'The Problem', content: service.problem },
    { label: 'Our Approach', content: service.approach },
    { label: 'The Outcome', content: service.outcomes },
  ];

  return (
    <>
      <JsonLd data={serviceFaqJsonLd(service)} />
      <PageHero
        title={service.title}
        description={service.description}
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
        image={service.image}
        badge={
          <div className="glass-chip mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-ssl-gold">
            <span aria-hidden="true" className="flex">
              <Icon className="h-8 w-8" />
            </span>
          </div>
        }
      />

      <div className="mesh-light relative isolate px-4 pb-24 sm:px-6">
        <GlassOrbs />
        <div className="relative z-10 mx-auto -mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {sections.map((section, idx) => (
            <AnimateOnScroll key={section.label} asChild variant="slide-up">
              <section className="glass-card-light glass-edge rounded-2xl p-7 md:p-8">
                <span
                  aria-hidden="true"
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ssl-blue to-[#0d3a8c] font-display text-sm font-bold text-white shadow-lg shadow-ssl-blue/25"
                >
                  0{idx + 1}
                </span>
                <h2 className="mb-3 text-xl font-bold text-ssl-bg">{section.label}</h2>
                <p className="leading-relaxed text-slate-700">{section.content}</p>
              </section>
            </AnimateOnScroll>
          ))}
        </div>

        <section className="mx-auto mt-24 max-w-3xl">
          <AnimateOnScroll variant="slide-up">
            <SectionHeading
              align="center"
              overline="FAQ"
              title="Common Questions"
              variant="light"
              className="mb-10"
            />
          </AnimateOnScroll>
          <FAQAccordion items={service.faqs} />
        </section>

        <section className="mx-auto mt-24 max-w-6xl">
          <AnimateOnScroll variant="slide-up">
            <SectionHeading align="center" overline="KEEP EXPLORING" title="Related Services" variant="light" className="mb-10" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedServices.map((related) => (
              <ServiceCard key={related.slug} service={related} />
            ))}
          </div>
        </section>
      </div>

      <CTABanner href="/contact" />
    </>
  );
}
