import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import WhySSL from '@/components/WhySSL';
import CTABanner from '@/components/CTABanner';
import { ContactSection } from '@/components/ContactSection';
import { getServiceOptions } from '@/lib/services-data';
import { JsonLd } from '@/components/JsonLd';
import { homeWebPageJsonLd, organizationJsonLd, professionalServiceJsonLd } from '@/lib/structured-data';

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={professionalServiceJsonLd} />
      <JsonLd data={homeWebPageJsonLd} />

      <Hero />

      {/* WHAT WE MEASURE: dark glass panel */}
      {/* Overlaps the bottom of the hero so the glass frosts the photo behind it. */}
      <section className="relative z-10 -mt-24 px-4 sm:px-6" id="metrics">
        <div className="glass-card-dark mx-auto max-w-6xl rounded-3xl px-6 py-8 md:px-12 md:py-10">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-4">
              <div className="mb-1 text-sm uppercase tracking-widest text-slate-300">
                We don&apos;t report on
              </div>
              <div className="text-xl font-bold text-slate-300 line-through decoration-red-400/70">
                Clicks and impressions
              </div>
            </div>
            <div className="hidden items-center justify-center p-4 md:flex">
              <div className="h-8 w-px bg-ssl-gold/25" />
            </div>
            <div className="p-4">
              <div className="mb-1 text-sm font-bold uppercase tracking-widest text-ssl-gold">
                We report on
              </div>
              <div className="text-xl font-black tracking-tight text-white sm:text-2xl">
                Leads, sales and revenue
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <WhySSL />
      <Process />
      <Testimonials />
      <CTABanner />
      <ContactSection services={getServiceOptions()} />
    </>
  );
}
