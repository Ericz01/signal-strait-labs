import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { ServiceCard } from '@/components/ServiceCard';
import { GlassOrbs } from '@/components/GlassOrbs';
import { PageHero } from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { services } from '@/lib/services-data';
import { pageMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';

export const metadata = pageMetadata({
  title: 'Our Services',
  description: 'Our services: technical infrastructure and web development, AI search (SEO/AEO/GEO), data systems, RevOps, performance marketing, PR and team training.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Pick one service or combine several. Each one is aimed at more leads and less manual work for your team."
        breadcrumbs={[{ label: 'Services' }]}
        image={{ base: '/images/hero-nairobi-night', smallWidth: 720, largeWidth: 1920 }}
      />
      <section className="mesh-light relative isolate px-4 pb-20 sm:px-6 md:pb-28">
        <GlassOrbs />
        <div className="relative z-10 mx-auto -mt-16 max-w-7xl">
          <h2 className="sr-only">All services</h2>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                className={cn(service.featured === 'secondary' && 'lg:col-span-2')}
              />
            ))}
          </div>
          <AnimateOnScroll variant="slide-up" className="mt-20">
            <SectionHeading
              align="center"
              overline="NOT SURE WHERE TO START?"
              title="Tell Us the Problem"
              description="Most clients start with one service. We will tell you which one will make the most difference."
              variant="light"
            />
          </AnimateOnScroll>
        </div>
      </section>
      <CTABanner href="/contact" />
    </>
  );
}
