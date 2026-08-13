import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/lib/services-data';
import { cn } from '@/lib/utils';

export default function Services() {
  return (
<section className="mx-auto max-w-full px-6 py-20 bg-ssl-light-bg" id="capabilities">
      <AnimateOnScroll variant="slide-up">
        <SectionHeading
          align="center"
          title={
            "Our Core Capabilities"
          }
          description="Engineered software systems and data strategies built to optimize customer acquisition and operational efficiency."
          variant="light"
          className="mb-16 md:text-center"
        />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {services.map((service, index) => (
          <AnimateOnScroll
            key={service.slug}
            variant="slide-up"
            className={cn(
              service.featured === 'primary' && 'lg:col-span-2',
              service.featured === 'secondary' && 'lg:col-span-2 order-last'
            )}
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: '0.8s',
            }}
          >
            <Card
              className={cn(
                'h-full flex flex-col overflow-hidden',
                service.featured === 'primary' &&
                  'border-ssl-blue/40 hover:border-ssl-blue/80',
                service.featured === 'secondary' &&
                  'border-ssl-gold/40 hover:border-ssl-gold/80'
              )}
            >
              <Link href={service.href} className="group block h-full p-6 flex flex-col">
                <IconBox
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variant={service.featured ? 'gold' : 'default'}
                  className={cn(
                    service.featured === 'primary' &&
                      '[&>div]:!bg-ssl-blue/15 [&>div]:!border-ssl-blue/30 [&>div]:!text-ssl-blue [&>div]:group-hover:!bg-ssl-blue [&>div]:group-hover:!text-white',
                    service.featured === 'secondary' &&
                      '[&>div]:!bg-ssl-gold/15 [&>div]:!border-ssl-gold/30 [&>div]:!text-ssl-gold [&>div]:group-hover:!bg-ssl-gold [&>div]:group-hover:!text-white'
                  )}
                />
                <Button variant="outline" size="sm" className="mt-auto h-10 px-4 py-2 text-ssl-gold border-ssl-gold/40 hover:bg-ssl-gold/10 hover:text-ssl-gold">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}