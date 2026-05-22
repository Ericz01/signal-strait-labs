import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#01081b] text-white selection:bg-[#1c59ca] selection:text-white antialiased font-sans flex flex-col justify-center items-center px-6 relative">
      {/* Structural Engineering Line Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c59ca08_1px,transparent_1px),linear-gradient(to_bottom,#1c59ca08_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-start text-left">
        {/* Monospace Indicator Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1c59ca30] bg-[#01081b] text-[11px] font-mono tracking-widest text-gray-400 uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          [SYSTEM INITIALIZED // OPERATIONAL STAGE ONE]
        </div>

        {/* Corporate Title Block */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans leading-[1.1] mb-6">
          Signal Strait Labs
        </h1>

        {/* The Definitive Tagline */}
        <h2 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] tracking-tight mb-6">
          Engineering High-Performance Digital Infrastructure & Revenue Engines.
        </h2>

        {/* Deep Strategic Value Proposition */}
        <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed mb-8">
          Traditional agencies separate creative production from backend engineering. 
          We treat corporate growth as an interconnected, mathematical software system. 
          By bridging the critical gap between elite strategic consultancy and deep front-end engineering, 
          we design the structural machinery—from edge-native web environments to automated 
          RevOps pipelines and algorithmic engine frameworks (SEO/AEO/GEO)—that forces an undeniable 
          market signal through the chaos.
        </p>

        {/* The Six Core Operational Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-b border-[#1c59ca15] py-8 mb-8 font-mono text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="text-[#1c59ca] font-bold">01 //</span> Software & Dashboard Engineering
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#1c59ca] font-bold">02 //</span> Algorithmic Search (SEO/AEO/GEO)
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#1c59ca] font-bold">03 //</span> MarTech & Automation Infrastructure
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#1c59ca] font-bold">04 //</span> Performance Marketing & Demand Gen
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#1c59ca] font-bold">05 //</span> High-Conversion Creative Pipelines
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#1c59ca] font-bold">06 //</span> Full-Stack Revenue Strategy
          </div>
        </div>

        {/* Primary Call To Action */}
        <div className="flex items-center gap-6 w-full">
          <a 
            href="https://www.linkedin.com/company/signal-strait-labs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#1c59ca] text-sm font-semibold text-white tracking-wide shadow-[0_0_30px_-5px_rgba(28,89,202,0.4)] hover:bg-[#1c59ca]/90 transition-all duration-200"
          >
            Connect via LinkedIn
          </a>
          <span className="text-xs font-mono text-gray-500 animate-pulse">
            Matrix Deployment Pending...
          </span>
        </div>
      </div>
    </main>
  );
}