import React from 'react';
import { products } from '../../data/products';

export const ProductStage: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Central Product Spotlight - Beat 2 focus */}
      <div id="product-hero-spotlight" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] flex items-center justify-center opacity-[0.05] scale-90 blur-md">
        <div className="w-full h-full bg-gradient-to-br from-graphite to-background rounded-2xl border border-foreground/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative group">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-accent-choco/10 blur-3xl opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center text-gold/20 font-serif italic text-4xl">
            Focus SKU
          </div>
        </div>
      </div>

      {/* Flanking Cluster - Beat 2 support */}
      <div className="absolute inset-0">
        {products.map((product, idx) => {
          // Positions for a cluster arrangement
          const positions = [
            'top-[15%] left-[10%] -rotate-12',
            'top-[60%] right-[12%] rotate-6',
            'bottom-[10%] left-[15%] rotate-3',
            'top-[30%] right-[5%] -rotate-3',
            'bottom-[20%] right-[20%] rotate-12',
            'top-[10%] right-[30%] -rotate-6', // Added an extra for variety
          ];
          
          return (
            <div 
              key={product.id}
              id={`hero-product-${idx}`}
              className={`absolute cinematic-product-proxy w-48 h-72 rounded-xl opacity-0 blur-lg scale-75 overflow-hidden border border-white/5 bg-graphite/40 transition-all duration-700 ${positions[idx] || ''}`}
            >
               <div 
                 className="absolute inset-0 opacity-20"
                 style={{ backgroundColor: product.accentColor }}
               />
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="h-px w-8 bg-gold/40 mb-3" />
                 <span className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold">{product.name}</span>
               </div>
            </div>
          );
        })}
      </div>

      {/* Occasion Tags - Beat 3 overlays */}
      <div id="hero-occasion-tags" className="absolute inset-0 opacity-0 pointer-events-none">
          {/* These will be animated to track/overlay products in Beat 3 */}
          <div className="absolute top-[30%] left-[20%] occasion-tag bg-gold/10 backdrop-blur-md px-3 py-1 border border-gold/20 rounded-full text-[9px] uppercase tracking-widest font-bold text-gold">
            Coffee Ritual
          </div>
          <div className="absolute center top-[65%] right-[25%] occasion-tag bg-gold/10 backdrop-blur-md px-3 py-1 border border-gold/20 rounded-full text-[9px] uppercase tracking-widest font-bold text-gold">
            Breakfast Rescue
          </div>
          <div className="absolute bottom-[25%] left-[30%] occasion-tag bg-gold/10 backdrop-blur-md px-3 py-1 border border-gold/20 rounded-full text-[9px] uppercase tracking-widest font-bold text-gold">
            Sweet Craving Swap
          </div>
      </div>
    </div>
  );
};
