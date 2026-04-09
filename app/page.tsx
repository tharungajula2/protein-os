'use client';

import React from 'react';
import { siteContent } from './data/site-content';
import { products } from './data/products';
import { occasions } from './data/occasions';
import { modules } from './data/modules';
import { mainNavigation, footerNavigation } from './data/navigation';

// Primitives
import { SectionHeader } from './components/ui/SectionHeader';
import { StrategyCard } from './components/ui/StrategyCard';
import { ProductSurface } from './components/ui/ProductSurface';
import { CtaButton } from './components/ui/CtaButton';
import { CinematicHero } from './components/hero/CinematicHero';

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-gold selection:text-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] border-b border-foreground/5 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-serif tracking-tight font-semibold">
            PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            {mainNavigation.map((item) => (
              <a key={item.name} href={item.href} className="text-[10px] uppercase tracking-[0.25em] font-bold text-foreground/40 hover:text-gold transition-all duration-300">
                {item.name}
              </a>
            ))}
          </div>
          <CtaButton size="md" variant="outline" className="text-[10px] tracking-[0.2em] uppercase px-6">
            Access System
          </CtaButton>
        </div>
      </nav>

      {/* 1. Cinematic Scrollytelling Hero */}
      <CinematicHero />

      {/* 2. Manifesto: The Director's Note */}
      <section className="relative py-48 md:py-64 px-6 z-20 overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
              <span className="text-gold/40 text-[10px] tracking-[0.5em] uppercase font-bold">Director's Note</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-balance mb-16 italic">
            “{siteContent.manifesto.heading}”
          </h2>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 text-xl md:text-2xl font-light leading-relaxed text-foreground/50 text-balance">
              {siteContent.manifesto.body}
            </div>
            <div className="w-full md:w-[2px] self-stretch bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />
            <div className="w-full md:w-1/4">
               <p className="text-xs tracking-widest uppercase text-gold font-bold mb-4">Core Thesis</p>
               <p className="text-[10px] text-foreground/30 leading-loose">Modern brands operate at the intersection of psychology, biology, and logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Worlds: Editorial Surfaces */}
      <div id="product-worlds" className="bg-background">
        <div className="pt-32 px-6 max-w-7xl mx-auto mb-20 lg:mb-32">
          <SectionHeader 
            alignment="left"
            eyebrow="Portfolio Architecture"
            title="Built through products. Understood through systems."
            subtitle="A roadmap for flavor, format, and frequency. Each SKU is an entry point into the OS."
            badge="Product Worlds"
          />
        </div>
        
        <div className="flex flex-col">
          {products.map((product, idx) => (
            <ProductSurface key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>

      {/* 4. Winning Formula Strip: Iconic Map */}
      <section className="py-48 px-6 bg-gradient-to-b from-background via-graphite/10 to-background border-y border-foreground/5">
        <div className="max-w-5xl mx-auto text-center mb-16 px-6">
            <SectionHeader 
                alignment="center"
                title="The Unit Truth"
                badge="Strategy Strip"
            />
        </div>
        
        <div className="relative py-24 overflow-hidden border-y border-gold/10">
            <div className="absolute inset-0 bg-gold/[0.02] flex items-center justify-center -z-10">
                <div className="w-full h-1/2 bg-gold/5 blur-[120px]" />
            </div>
            
            <div className="flex whitespace-nowrap items-center animate-scroll">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-16 px-8">
                        <div className="flex items-center group">
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Occasion</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Product</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Channel</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Repeat</span>
                             <div className="mx-12 md:mx-16 w-12 md:w-20 h-px bg-gold/30" />
                             <span className="text-4xl md:text-6xl font-serif text-gold group-hover:text-foreground transition-colors duration-700">Economics</span>
                        </div>
                        <div className="h-12 w-px bg-gold/20" />
                    </div>
                ))}
            </div>
        </div>
        
        <div className="text-center mt-12">
            <p className="text-xs md:text-sm tracking-[0.5em] uppercase font-bold text-gold/60 max-w-xl mx-auto leading-loose">
                This is the path from interesting product to durable business
            </p>
        </div>
      </section>

      {/* 5. Occasion & Modules Section Split */}
      <section className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24 lg:gap-32 items-start">
            <aside className="sticky top-32">
                <SectionHeader 
                    alignment="left"
                    eyebrow="Consumer Behavior"
                    title="Brands win moments before they win markets"
                    subtitle="Mapping the occasions that define protein adoption."
                    badge="Moment Strategy"
                />
                <div className="space-y-4 mt-12">
                    {occasions.slice(0, 3).map(occ => (
                        <div key={occ.id} className="p-6 rounded-xl border border-foreground/5 hover:border-gold/20 transition-all cursor-pointer group">
                             <h4 className="text-sm uppercase tracking-widest font-bold text-foreground/40 group-hover:text-gold">{occ.title}</h4>
                        </div>
                    ))}
                </div>
            </aside>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 md:pt-12">
                {modules.map(module => (
                    <StrategyCard 
                        key={module.id}
                        title={module.title}
                        description={module.description}
                        badge={module.badge}
                        footer="View Logic"
                    />
                ))}
            </div>
        </div>
      </section>

      {/* 6. Final CTA: Cinematic Title Card */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gold/[0.03] blur-[150px] rounded-full" />
           <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
            <SectionHeader 
                alignment="center"
                eyebrow="Conclusion"
                title="Strategy is the only long-term flavor"
                subtitle="Join the system built for owners who think in decades, not drops."
            />
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
                <CtaButton size="xl" variant="primary" className="min-w-[280px]">
                   Access the Full System
                </CtaButton>
                <CtaButton size="xl" variant="outline" className="min-w-[280px]">
                   View All Products
                </CtaButton>
            </div>
            
            <div className="mt-32 text-center text-foreground/20">
                <p className="text-[9px] uppercase tracking-[0.6em] font-bold mb-4 italic">End of Session</p>
                <div className="text-xl font-serif">
                    PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-foreground/5 bg-background text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-12">
                <div className="text-base font-serif tracking-tighter">
                    PROTEIN<span className="text-gold ml-1 italic font-light">OS</span>
                </div>
                <div className="hidden lg:flex items-center space-x-8">
                    {footerNavigation.map(item => (
                        <a key={item.name} href="#" className="text-[9px] uppercase tracking-widest font-bold text-foreground/20 hover:text-gold transition-colors">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-foreground/10">
                2026 Tharun Gajula
            </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </main>
  );
}
