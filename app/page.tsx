import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import WhySSL from '@/components/WhySSL';

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
      <Process />
      <Testimonials />
      <WhySSL />

      {/* CALL TO ACTION / LEAD CAPTURE FORM */}
      <section className="bg-ssl-light-bg border-t border-slate-200/60 px-6 py-20" id="contact">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-12 pb-4 pt-2 md:grid-cols-2">
          <div id="about">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-ssl-bg md:text-4xl">
              Ready to Establish <br />
              <span className="text-gold-contrast">Market Command?</span>
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-700">
              Contact our engineering lab directly to analyze your current tech
              stack bottlenecks or request a targeted market attack
              infrastructure plan.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <p>
                <strong className="text-ssl-bg">HQ:</strong> Thome, Nairobi -
                Kenya
              </p>
              <p>
                <strong className="text-ssl-bg">Email:</strong>{" "}
                connect@signalstraitlabs.com
              </p>
              <p>
                <strong className="text-ssl-bg">Secure Line:</strong> +254 712
                895 903
              </p>
            </div>
          </div>

          <div className="glass-card-dark relative z-10 rounded-2xl p-8">
            <h3 className="mb-6 text-lg font-bold text-white">
              Initialize{" "}
              <span className="text-brand-gradient">Technical Discovery</span>
            </h3>
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Corporate Identity / Name
                </label>
                <input
                  type="text"
                  className="glass-input-dark w-full rounded-lg px-4 py-3 text-sm"
                  placeholder="e.g., Lead Architect or Enterprise VP"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Secure Email Endpoint
                </label>
                <input
                  type="email"
                  className="glass-input-dark w-full rounded-lg px-4 py-3 text-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Primary Engineering Challenge
                </label>
                <textarea
                  rows={3}
                  className="glass-input-dark w-full resize-none rounded-lg px-4 py-3 text-sm"
                  placeholder="Describe the optimization parameter needed..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg border border-ssl-gold/30 bg-ssl-blue py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-ssl-blue/20 transition-all hover:border-ssl-gold/50 hover:bg-ssl-blue/90"
              >
                Initialize Technical Discovery
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
