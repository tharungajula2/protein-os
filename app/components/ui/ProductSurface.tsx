import React from 'react';
import { Product } from '../../types';

interface ProductSurfaceProps {
  product: Product;
  index: number;
}

export const ProductSurface: React.FC<ProductSurfaceProps> = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-24 md:py-32 overflow-hidden border-b border-foreground/5 last:border-0 group">
      {/* 
        Atmospheric Backdrop 
        The themeColor bleeds into the Obsidian background to create a cinematic world for each SKU.
      */}
      <div className="absolute inset-0 -z-10 bg-background">
          <div 
            className={`absolute top-1/2 ${isEven ? 'right-0' : 'left-0'} -translate-y-1/2 w-[600px] h-[600px] blur-[150px] opacity-[0.12] transition-all duration-1000 group-hover:opacity-[0.2]`}
            style={{ backgroundColor: product.themeColor }}
          />
          <div className="absolute inset-0 vignette-atmosphere opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`flex flex-col items-center gap-16 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          
          {/* Visual Product Stage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl bg-graphite/10 border border-foreground/5 sheen-effect">
                <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-20">
                    {/* Atmospheric Glow behind product */}
                    <div 
                        className="absolute w-[200px] h-[300px] blur-[100px] opacity-30 animate-pulse" 
                        style={{ backgroundColor: product.accentColor }}
                    />
                    
                    {/* Product Typography Watermark */}
                    <span className="absolute bottom-12 left-12 text-7xl md:text-9xl font-serif text-foreground/[0.03] uppercase italic pointer-events-none select-none tracking-tighter">
                        {product.name.split(' ')[0]}
                    </span>

                    {/* Placeholder for Product Asset mapping */}
                    <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-1000">
                        <div className="w-2/3 h-5/6 bg-gradient-to-tr from-graphite to-background border border-foreground/5 shadow-2xl skew-y-3 rounded-xl flex items-center justify-center text-foreground/10 italic font-serif">
                            {product.name}
                        </div>
                    </div>
                </div>
                
                {/* Format Badge Overlay */}
                <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-[9px] uppercase tracking-[0.4em] font-bold text-gold border border-gold/20">
                        {product.format} Format
                    </span>
                </div>
            </div>
          </div>

          {/* Strategic Narrative Surface */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
                <span className="text-gold/60 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                    {product.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight max-w-[12ch]">
                    {product.name}
                </h2>
                <p className="text-xl md:text-2xl font-serif italic text-gold/80 max-w-xl">
                    "{product.heroDescriptor}"
                </p>
            </div>

            <div className="space-y-8">
                <p className="text-foreground/50 text-base md:text-lg leading-relaxed font-light max-w-2xl text-balance">
                    {product.operatorDescription}
                </p>

                {/* Portfolio Intelligence Blueprint */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-foreground/10">
                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Portfolio Role</span>
                            <span className="text-sm font-medium text-foreground/80">{product.strategicRole}</span>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Primary Occasion</span>
                            <span className="text-sm text-gold font-medium">{product.primaryOccasion}</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Repeat Logic</span>
                            <span className="text-sm font-medium text-foreground/80">{product.repeatLogic}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="w-full text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Target Channels</span>
                            {product.channelFit.map(channel => (
                                <span key={channel} className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 bg-foreground/5 rounded-full text-foreground/60 border border-foreground/5">
                                    {channel}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Operator Note Context */}
                <div className="bg-graphite/20 p-8 rounded-2xl border border-gold/10 relative overflow-hidden group/note">
                    <div 
                      className="absolute top-0 right-0 p-4 opacity-5 group-hover/note:opacity-20 transition-opacity"
                      style={{ color: product.accentColor }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gold/60 block mb-4">Strategic Framework Note</span>
                    <p className="text-sm text-foreground/40 leading-relaxed italic pr-8">
                        {product.operatorNote}
                    </p>
                </div>
            </div>
            
            <div className="pt-8">
                <button className="flex items-center space-x-4 text-[11px] uppercase tracking-[0.3em] font-bold text-foreground/30 hover:text-gold transition-all duration-300">
                    <span className="h-px w-12 bg-foreground/10 group-hover:bg-gold/40 transition-colors" />
                    <span>View Scientific Log (Coming Soon)</span>
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
