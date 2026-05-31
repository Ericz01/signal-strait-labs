import Image from "next/image";

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

function BrandLogo({
  priority = false,
  className = "h-8 w-auto md:h-10",
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Signal Strait Labs"
      width={240}
      height={72}
      className={`${className} object-contain object-left`}
      priority={priority}
      sizes="(max-width: 768px) 160px, 220px"
    />
  );
}

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
    <div
      className={`glass-card-light rounded-2xl p-8 transition-all group hover:shadow-lg ${
        isBlue ? "hover:border-ssl-blue/30" : "hover:border-ssl-gold/30"
      }`}
    >
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border font-bold transition-all ${
          isBlue
            ? "border-ssl-blue/20 bg-ssl-blue/10 text-ssl-blue group-hover:bg-ssl-blue group-hover:text-white"
            : "border-ssl-gold/20 bg-ssl-gold/10 text-ssl-gold group-hover:luxurious-gold-gradient group-hover:text-ssl-bg"
        }`}
      >
        {index}
      </div>
      <h3 className="mb-3 text-xl font-bold text-ssl-bg">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen luxury-bg-gradient text-ssl-bg selection:bg-ssl-blue/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      {/* HEADER / NAVIGATION */}
      <header className="glass-nav-light sticky top-0 z-50 border-b border-slate-200/60">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Signal Strait Labs home"
          >
            <BrandLogo priority />
          </a>
          <nav className="hidden items-center space-x-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition-colors hover:text-ssl-bg">
              Services
            </a>
            <a href="#philosophy" className="transition-colors hover:text-ssl-bg">
              Philosophy
            </a>
            <a href="#contact" className="transition-colors hover:text-ssl-bg">
              Connect
            </a>
          </nav>
          <div>
            <a
              href="#contact"
              className="rounded-lg border border-ssl-blue/20 bg-ssl-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-ssl-blue/20 transition-all hover:bg-ssl-blue/90"
            >
              Get an ABM Attack Plan
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ssl-gold/30 bg-ssl-gold/5 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ssl-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-ssl-gold">
              Digital Transformation & Growth Engineering
            </span>
          </div>

          <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-ssl-bg md:text-7xl">
            Force a Clear Market Signal Through <br />
            <span className="text-gold-gradient">Digital Chaos.</span>
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            We partner with fast-scaling African and global organizations to treat
            corporate growth as an interconnected, mathematical system. No vague
            vanity metrics. Just raw pipeline value, conversion velocity, and
            revenue.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-xl border border-ssl-blue/20 bg-ssl-blue px-8 py-4 text-center font-bold text-white shadow-lg shadow-ssl-blue/20 transition-all hover:bg-ssl-blue/90 sm:w-auto"
            >
              Engineer Your Growth
            </a>
            <a
              href="#services"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-8 py-4 text-center font-bold text-ssl-bg transition-all hover:bg-white sm:w-auto"
            >
              Explore Core Capabilities
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ssl-blue/5 blur-[120px]" />
      </section>

      {/* THE TRUTH METRICS STRIP */}
      <section
        className="border-y border-slate-200/60 px-6 py-12"
        id="philosophy"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div className="p-4">
            <div className="mb-1 text-sm uppercase tracking-widest text-slate-500">
              We Replace
            </div>
            <div className="text-xl font-bold text-slate-500 line-through decoration-red-400/60">
              Vague Clicks & Impressions
            </div>
          </div>
          <div className="hidden items-center justify-center p-4 md:flex">
            <div className="h-8 w-px bg-slate-200" />
          </div>
          <div className="p-4">
            <div className="mb-1 text-sm font-bold uppercase tracking-widest text-ssl-gold">
              With Truth Metrics
            </div>
            <div className="text-2xl font-black tracking-tight text-ssl-bg">
              Pipeline Value • Conversion Velocity • Revenue
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES MATRIX */}
      <section className="mx-auto max-w-7xl px-6 py-24" id="services">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-ssl-bg md:text-5xl">
            Our Core <span className="text-gold-gradient">Capabilities</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Engineered software systems and data strategies built to optimize
            customer acquisition and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="border-t border-slate-200/60 px-6 py-24" id="contact">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-ssl-bg md:text-4xl">
              Ready to Establish <br />
              <span className="text-gold-gradient">Market Command?</span>
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

          <div className="glass-card-light relative z-10 rounded-2xl p-8 shadow-lg">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Corporate Identity / Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ssl-bg transition-colors placeholder:text-slate-400 focus:border-ssl-blue focus:outline-none"
                  placeholder="e.g., Lead Architect or Enterprise VP"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Secure Email Endpoint
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ssl-bg transition-colors placeholder:text-slate-400 focus:border-ssl-blue focus:outline-none"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Primary Engineering Challenge
                </label>
                <textarea
                  rows={3}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ssl-bg transition-colors placeholder:text-slate-400 focus:border-ssl-blue focus:outline-none"
                  placeholder="Describe the optimization parameter needed..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg border border-ssl-blue/20 bg-ssl-blue py-3.5 text-sm font-bold tracking-wide text-white shadow-md shadow-ssl-blue/10 transition-all hover:bg-ssl-blue/90"
              >
                Initialize Technical Discovery
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="glass-nav-light border-t border-slate-200/60 px-6 py-12 text-center text-xs text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Signal Strait Labs home"
            >
              <BrandLogo className="h-7 w-auto sm:h-8" />
            </a>
            <p>
              © {new Date().getFullYear()} Signal Strait Labs. All rights
              reserved. System Live.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/company/signal-strait-labs"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors hover:text-ssl-bg"
            >
              LinkedIn
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61589782545004"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors hover:text-ssl-bg"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
