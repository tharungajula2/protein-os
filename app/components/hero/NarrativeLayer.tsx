import React from 'react';

export const NarrativeLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Beat 1: Brand Arrival */}
        <div id="narrative-beat-1" className="narrative-beat flex flex-col items-center opacity-0 translate-y-20">
            <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold mb-6">Director's Thesis</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 text-balance">
                The operating system for modern protein brands
            </h1>
            <p className="text-lg md:text-2xl text-foreground/40 font-light max-w-3xl mx-auto leading-relaxed text-balance">
                From storytelling and flavor labs to trust design and unit economics — we map how brands win.
            </p>
        </div>

        {/* Beat 2: Product Emergence - Minimal Text */}
        <div id="narrative-beat-2" className="narrative-beat absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-20 px-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium italic serif mb-4">
                Built through products.
            </h2>
            <p className="text-gold/80 text-sm tracking-[0.3em] uppercase font-bold">The SKU Universe</p>
        </div>

        {/* Beat 3: Occasion Intelligence */}
        <div id="narrative-beat-3" className="narrative-beat absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-20 px-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-8">
                Brands win moments before they win markets
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 opacity-40">
                <span className="text-[10px] tracking-widest uppercase font-bold">Coffee Ritual</span>
                <span className="text-[10px] tracking-widest uppercase font-bold">Breakfast Rescue</span>
                <span className="text-[10px] tracking-widest uppercase font-bold">Craving Swap</span>
            </div>
        </div>

        {/* Beat 4: Strategic Formula Reveal */}
        <div id="narrative-beat-4" className="narrative-beat absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-20 px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-12">
                The Path to Durable Business
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-2xl md:text-4xl font-serif text-gold italic">
                <span>Occasion</span>
                <span className="text-foreground/20 italic font-sans mx-2">→</span>
                <span>Product</span>
                <span className="text-foreground/20 italic font-sans mx-2">→</span>
                <span>Channel</span>
                <span className="text-foreground/20 italic font-sans mx-2">→</span>
                <span>Repeat</span>
                <span className="text-foreground/20 italic font-sans mx-2">→</span>
                <span className="underline decoration-1 underline-offset-[12px]">Economics</span>
            </div>
            <div className="mt-16">
                <div id="hero-final-cta" className="opacity-0 translate-y-10">
                    <button className="px-10 py-5 bg-gold text-background rounded-full uppercase tracking-widest font-bold text-sm hover:scale-105 transition-transform pointer-events-auto">
                        Explore the OS
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
