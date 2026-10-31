import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import WhySSL from '@/components/WhySSL';
import CTABanner from '@/components/CTABanner';
import { ContactSection } from '@/components/ContactSection';
import { JsonLd } from '@/components/JsonLd';
import { homeWebPageJsonLd, organizationJsonLd, professionalServiceJsonLd } from '@/lib/structured-data';

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={professionalServiceJsonLd} />
      <JsonLd data={homeWebPageJsonLd} />

      <Hero />

      {/* THE TRUTH METRICS STRIP: dark anchor banner */}
      <section className="bg-ssl-light-bg px-6 py-12" id="metrics">
        <div className="glass-card-dark glass-card-dark-static mx-auto max-w-7xl rounded-2xl px-6 py-12 md:px-12">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-4">
              <div className="mb-1 text-sm uppercase tracking-widest text-slate-300">
                We Replace
              </div>
              <div className="text-xl font-bold text-slate-300 line-through decoration-red-400/70">
                Vague Clicks & Impressions
              </div>
            </div>
            <div className="hidden items-center justify-center p-4 md:flex">
              <div className="h-8 w-px bg-ssl-gold/25" />
            </div>
            <div className="p-4">
              <div className="mb-1 text-sm font-bold uppercase tracking-widest text-ssl-gold">
                With Truth Metrics
              </div>
              <div className="text-2xl font-black tracking-tight text-white">
                Pipeline Value • Conversion Velocity • Revenue
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
      <ContactSection />
    </>
  );
}
