import Hero from '@/components/Hero';

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

function ServiceCard({
  index,
  title,
  description,
  accent,
}: {
  index: string;
  title: string;
  description: string;
  accent: "blue" | "gold";
}) {
  const isBlue = accent === "blue";

  return (
    <div className="glass-card-dark rounded-2xl p-8">
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border font-bold transition-all ${
          isBlue
            ? "border-ssl-blue/30 bg-ssl-blue/15 text-ssl-blue group-hover:bg-ssl-blue"
            : "border-ssl-gold/30 bg-ssl-gold/15 text-ssl-gold"
        }`}
      >
        {index}
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}

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
      <section className="px-6 py-12" id="metrics">
        <div className="glass-card-dark glass-card-dark-static mx-auto max-w-7xl rounded-2xl px-6 py-12 md:px-12">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-4">
              <div className="mb-1 text-sm uppercase tracking-widest text-slate-400">
                We Replace
              </div>
              <div className="text-xl font-bold text-slate-400 line-through decoration-red-400/70">
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

      {/* CORE SERVICES MATRIX — dark anchor cards on light canvas */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="capabilities">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-ssl-bg md:text-5xl">
            Our Core <span className="text-gold-contrast">Capabilities</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Engineered software systems and data strategies built to optimize
            customer acquisition and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-6 pt-2 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            index="01"
            accent="blue"
            title="Technical Infrastructure & Web Dev"
            description="Architecting lightning-fast, serverless, and edge-native corporate applications (Next.js, Tailwind, Jamstack) optimized for zero latency on African mobile networks. Integrations with Paystack, Flutterwave, and custom CRMs."
          />
          <ServiceCard
            index="02"
            accent="gold"
            title="Algorithmic Search (SEO/AEO/GEO)"
            description="Structural and semantic code optimization targeted beyond traditional engines. We position your enterprise for explicit direct citations inside modern generative AI search models like Perplexity, Gemini, and ChatGPT."
          />
          <ServiceCard
            index="03"
            accent="blue"
            title="Data Systems & Automation"
            description="We design robust data architectures, custom robust API frameworks, and advanced low-code/no-code automated pipelines that link siloed internal software tools, completely eliminating manual data overhead."
          />
          <ServiceCard
            index="04"
            accent="gold"
            title="Revenue Operations (RevOps)"
            description="Custom CRM architecture pipelines (HubSpot, Zoho, Salesforce), deep multi-touch attribution dashboards, and algorithmic lead-scoring setups engineered to clear structural friction points inside your sales funnel."
          />
          <ServiceCard
            index="05"
            accent="blue"
            title="Performance Marketing & ABM"
            description="Full-funnel demand operations, data-intelligent programmatic media acquisitions, and hyper-focused B2B Account-Based Marketing (ABM) attack sequences designed to win high-value accounts."
          />
          <ServiceCard
            index="06"
            accent="gold"
            title="Corporate PR & Brand Authority"
            description="Strategic, high-level media alignments, crisis framework deployments, and highly structured technical brand architectures engineered to command long-term institutional authority."
          />
        </div>
      </section>

      {/* CALL TO ACTION / LEAD CAPTURE FORM */}
      <section className="border-t border-slate-200/60 px-6 py-20" id="contact">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-12 pb-4 pt-2 md:grid-cols-2">
          <div id="about">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-ssl-bg md:text-4xl">
              Ready to Establish <br />
              <span className="text-gold-contrast">Market Command?</span>
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
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
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
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
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
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
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
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
