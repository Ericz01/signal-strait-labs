import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import WhySSL from '@/components/WhySSL';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://signal-strait-labs.pages.dev/#organization",
  name: "Signal Strait Labs",
  alternateName: "SSL",
  url: "https://signal-strait-labs.pages.dev",
  foundingDate: "2022",
  description:
    "Enterprise digital transformation and growth engineering partner specializing in digital infrastructure, custom web development, technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), data architecture, and RevOps pipeline engineering.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thome",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "KE",
  },
  telephone: "+254712895903",
  email: "connect@signalstraitlabs.com",
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Continent", name: "Africa" },
  ],
  sameAs: [
    "https://linkedin.com/company/signal-strait-labs",
    "https://web.facebook.com/profile.php?id=61589782545004",
  ],
  knowsAbout: [
    "Digital Infrastructure",
    "Custom Web Development",
    "Technical SEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Data Architecture",
    "RevOps Pipeline Engineering",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Core Capabilities",
    itemListElement: [
      "Digital Infrastructure",
      "Custom Web Dev",
      "Technical SEO",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Data Architecture",
      "RevOps Pipeline Engineering",
    ].map((name, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: { "@type": "Service", name },
    })),
  },
} as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <Hero />

      {/* THE TRUTH METRICS STRIP — dark anchor banner */}
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
