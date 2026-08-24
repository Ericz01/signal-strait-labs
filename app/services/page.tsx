import { services } from '@/lib/services-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Our Services | Signal Strait Labs',
  description: 'Explore our core capabilities: from technical infrastructure and custom web development to algorithmic search, data systems, RevOps, and capacity building.',
};

export default function ServicesPage() {
  return (
    <main className="bg-ssl-light-bg min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            align="center"
            title="Our Services"
            description="Enterprise-grade growth engineering, technical infrastructure, and data architecture built to win in the modern digital landscape."
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
              <Card className="h-full flex flex-col p-6">
                <Link href={service.href} className="flex flex-col h-full group">
                  <IconBox
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    variant="default"
                    className="flex-grow mb-6 [&>div]:bg-ssl-blue/5 [&>div]:text-ssl-blue [&>div]:border-ssl-blue/20"
                  />
                  <div className="mt-auto pt-4">
                    <Button variant="outline" size="sm" className="w-full text-ssl-gold border-ssl-gold/40 hover:bg-ssl-gold/10 hover:text-ssl-gold">
                      Learn More <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Link>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
}
