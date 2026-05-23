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

export default function Home() {
  return (
    <div className="min-h-screen luxury-bg-gradient text-white selection:bg-[#1a59cc]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      
      {/* HEADER / NAVIGATION */}
      <header className="border-b border-white/5 bg-[#01081b]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex shrink-0 items-center" aria-label="Signal Strait Labs home">
            <BrandLogo priority />
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-white transition-colors">Connect</a>
          </nav>
          <div>
            <a 
              href="#contact" 
              className="bg-[#1a59cc] hover:bg-[#1a59cc]/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all border border-white/10 hover:border-white/20 shadow-lg shadow-[#1a59cc]/20"
            >
              Get an ABM Attack Plan
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F1DCA7]">
              Digital Transformation & Growth Engineering
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Force a Clear Market Signal Through <br />
            <span className="text-gold-gradient">Digital Chaos.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We partner with fast-scaling African and global organizations to treat corporate growth as an interconnected, mathematical system. No vague vanity metrics. Just raw pipeline value, conversion velocity, and revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#1a59cc] hover:bg-[#1a59cc]/90 transition-all text-center border border-white/10 shadow-xl shadow-[#1a59cc]/20"
            >
              Engineer Your Growth
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 transition-all text-center border border-white/10"
            >
              Explore Core Capabilities
            </a>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a59cc]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* THE TRUTH METRICS STRIP */}
      <section className="border-y border-white/5 bg-[#01081b]/60 backdrop-blur-sm py-12 px-6" id="philosophy">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-sm uppercase tracking-widest text-gray-500 mb-1">We Replace</div>
            <div className="text-xl font-bold text-gray-400 line-through decoration-red-500/50">Vague Clicks & Impressions</div>
          </div>
          <div className="p-4 flex items-center justify-center hidden md:flex">
            <div className="h-8 w-px bg-white/10"></div>
          </div>
          <div className="p-4">
            <div className="text-sm uppercase tracking-widest text-[#C5A059] mb-1 font-bold">With Truth Metrics</div>
            <div className="text-2xl font-black text-white tracking-tight">
              Pipeline Value • Conversion Velocity • Revenue
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES MATRIX */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Our Core <span className="text-gold-gradient">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engineered software systems and data strategies built to optimize customer acquisition and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-[#01081b]/60 border border-white/5 rounded-2xl p-8 hover:border-[#1a59cc]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1a59cc]/10 border border-[#1a59cc]/20 flex items-center justify-center mb-6 text-[#1a59cc] group-hover:bg-[#1a59cc] group-hover:text-white transition-all font-bold">
              01
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Technical Infrastructure & Web Dev</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Architecting lightning-fast, serverless, and edge-native corporate applications (Next.js, Tailwind, Jamstack) optimized for zero latency on African mobile networks. Integrations with Paystack, Flutterwave, and custom CRMs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#01081b]/60 border border-white/5 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center mb-6 text-[#C5A059] group-hover:luxurious-gold-gradient group-hover:text-black transition-all font-bold">
              02
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Algorithmic Search (SEO/AEO/GEO)</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Structural and semantic code optimization targeted beyond traditional engines. We position your enterprise for explicit direct citations inside modern generative AI search models like Perplexity, Gemini, and ChatGPT.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#01081b]/60 border border-white/5 rounded-2xl p-8 hover:border-[#1a59cc]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1a59cc]/10 border border-[#1a59cc]/20 flex items-center justify-center mb-6 text-[#1a59cc] group-hover:bg-[#1a59cc] group-hover:text-white transition-all font-bold">
              03
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Data Systems & Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We design robust data architectures, custom robust API frameworks, and advanced low-code/no-code automated pipelines that link siloed internal software tools, completely eliminating manual data overhead.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-[#01081b]/60 border border-white/5 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center mb-6 text-[#C5A059] group-hover:luxurious-gold-gradient group-hover:text-black transition-all font-bold">
              04
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Revenue Operations (RevOps)</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom CRM architecture pipelines (HubSpot, Zoho, Salesforce), deep multi-touch attribution dashboards, and algorithmic lead-scoring setups engineered to clear structural friction points inside your sales funnel.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-[#01081b]/60 border border-white/5 rounded-2xl p-8 hover:border-[#1a59cc]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1a59cc]/10 border border-[#1a59cc]/20 flex items-center justify-center mb-6 text-[#1a59cc] group-hover:bg-[#1a59cc] group-hover:text-white transition-all font-bold">
              05
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Performance Marketing & ABM</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-funnel demand operations, data-intelligent programmatic media acquisitions, and hyper-focused B2B Account-Based Marketing (ABM) attack sequences designed to win high-value accounts.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-[#01081b]/60 border border-white/5 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center mb-6 text-[#C5A059] group-hover:luxurious-gold-gradient group-hover:text-black transition-all font-bold">
              06
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Corporate PR & Brand Authority</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strategic, high-level media alignments, crisis framework deployments, and highly structured technical brand architectures engineered to command long-term institutional authority.
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION / LEAD CAPTURE FORM */}
      <section className="py-24 px-6 border-t border-white/5 relative bg-[#01081b]/40" id="contact">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Establish <br />
              <span className="text-gold-gradient">Market Command?</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Contact our engineering lab directly to analyze your current tech stack bottlenecks or request a targeted market attack infrastructure plan.
            </p>
            <div className="space-y-4 text-sm text-gray-300">
              <p><strong>HQ:</strong> Thome, Nairobi - Kenya</p>
              <p><strong>Email:</strong> connect@signalstraitlabs.com</p>
              <p><strong>Secure Line:</strong> +254 712 895 903</p>
            </div>
          </div>

          <div className="bg-[#01081b] border border-white/5 rounded-2xl p-8 relative z-10 shadow-2xl">
            {/* REMOVE the interactive onSubmit handler to pass the Next.js build step */}
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Corporate Identity / Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a59cc] transition-colors" placeholder="e.g., Lead Architect or Enterprise VP" required />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Secure Email Endpoint</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a59cc] transition-colors" placeholder="name@company.com" required />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Primary Engineering Challenge</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a59cc] transition-colors resize-none" placeholder="Describe the optimization parameter needed..."></textarea>
              </div>
              
              {/* Change type to "button" so it behaves safely without an active form action */}
              <button type="button" className="w-full bg-[#1a59cc] hover:bg-[#1a59cc]/90 text-white font-bold py-3.5 rounded-lg text-sm tracking-wide transition-all border border-white/10 shadow-lg shadow-[#1a59cc]/10">
                Initialize Technical Discovery
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 px-6 text-center text-xs text-gray-500 bg-[#01081b]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a href="/" className="flex shrink-0 items-center opacity-95 transition-opacity hover:opacity-100" aria-label="Signal Strait Labs home">
              <BrandLogo className="h-7 w-auto sm:h-8" />
            </a>
            <p>© {new Date().getFullYear()} Signal Strait Labs. All rights reserved. System Live.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/company/signal-strait-labs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://web.facebook.com/profile.php?id=61589782545004" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

    </div>
  );
}