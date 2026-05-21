import React from 'react';

   export default function Home() {
     return (
       <main className="relative min-h-screen w-full bg-[#01081b] flex flex-col justify-center items-center overflow-hidden px-6">
         
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c59ca0a_1px,transparent_1px),linear-gradient(to_bottom,#1c59ca0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
         
         <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
           
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1c59ca26] bg-[#01081b]/80 backdrop-blur-md mb-8">
             <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
             <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">Growth Engineering Lab</span>
           </div>

           
           <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]">
             Engineering High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c59ca] via-[#D4AF37] to-white">Digital Infrastructure & Revenue Engines.</span>
           </h1>

           
           <p className="text-base sm:text-lg text-gray-400 mt-6 max-w-2xl leading-relaxed">
             Stop relying on fragmented marketing tools. We engineer serverless web platforms, advanced algorithmic search structures (SEO/AEO), and automated operations pipelines.
           </p>

           
           <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
             <a href="https://linkedin.com" target="_blank" className="px-8 py-4 rounded-full bg-[#1c59ca] font-semibold text-sm text-white transition-all duration-200 hover:bg-[#1c59ca]/80 shadow-[0_0_25px_-5px_rgba(28,89,202,0.4)]">
               Connect via LinkedIn
             </a>
             <div className="px-8 py-4 rounded-full border border-[#1c59ca26] bg-white/5 text-sm font-medium text-gray-300">
               Platform Matrix [Coming Soon]
             </div>
           </div>
         </div>
       </main>
     );
   }