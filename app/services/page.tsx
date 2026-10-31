import { services } from '@/lib/services-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Our Services',
  description: 'Our services: technical infrastructure and web development, AI search (SEO/AEO/GEO), data systems, RevOps, performance marketing, PR and team training.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="mesh-light min-h-screen py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            align="center"
            overline="WHAT WE DO"
            title="Our Services"
            description="Pick one service or combine several. Each one is aimed at more leads and less manual work for your team."
            variant="light"
            className="mb-16"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.slug}
              variant="slide-up"
              className="flex h-full"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <Card tone="light" interactive className="flex h-full w-full flex-col">
                <Link href={service.href} className="group flex h-full flex-col p-7">
                  <IconBox
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    tone="light"
                    className="mb-6 h-auto justify-start"
                  />
                  {/* The whole card is the link; this is just a visual cue. */}
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ssl-blue">
                    Learn more
                    <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
