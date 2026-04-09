import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  layout?: 'standard' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'standard' }) => {
  const isFeatured = layout === 'featured';

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-graphite/20 border border-foreground/5 transition-all duration-700 sheen-effect ${isFeatured ? 'md:col-span-2' : ''}`}>
      <div className={`flex flex-col ${isFeatured ? 'md:flex-row' : ''} h-full`}>
        {/* Visual Focal Zone */}
        <div className={`relative overflow-hidden ${isFeatured ? 'md:w-3/5 aspect-[4/3] md:aspect-auto' : 'aspect-[4/5]'} bg-gradient-to-b from-graphite/40 to-background/20`}>
          {/* Ambient Glow */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
             <div className="w-2/3 h-2/3 rounded-full product-glow translate-y-8" style={{ backgroundColor: product.accentColor }} />
          </div>
          
          {/* Subtle Stage Texture */}
          <div className="absolute inset-0 vignette-atmosphere opacity-50" />
          
          {/* Editorial Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-5xl md:text-7xl font-serif text-foreground/[0.03] group-hover:text-gold/[0.05] transition-all duration-1000 uppercase italic tracking-tighter scale-110 group-hover:scale-100">
                  {product.name.split(' ')[0]}
              </span>
          </div>

          {/* Role Badge */}
          <div className="absolute top-8 left-8">
              <span className="text-[9px] tracking-[0.4em] uppercase text-gold font-bold px-3 py-1 bg-gold/5 border border-gold/10 rounded-full">
                  {product.category}
              </span>
          </div>
        </div>

        <div className={`p-8 md:p-12 flex flex-col justify-center ${isFeatured ? 'md:w-2/5' : ''}`}>
          <div className="mb-6">
              <span className="text-[10px] tracking-widest uppercase text-foreground/30 font-bold block mb-2">{product.format}</span>
              <h3 className="text-3xl md:text-4xl font-medium text-foreground/90 leading-tight">{product.name}</h3>
          </div>
          
          <p className="text-gold/80 text-base md:text-lg font-serif italic mb-6 leading-relaxed">
              {product.heroDescriptor}
          </p>
          
          <p className="text-foreground/40 text-sm md:text-base font-light leading-relaxed mb-8">
              {product.operatorDescription}
          </p>

          <div className="mt-auto flex items-center text-[10px] tracking-[0.2em] uppercase font-bold text-foreground/20">
              <span className="mr-3 h-[1px] w-6 bg-foreground/10" />
              Strategic Occasion: {product.primaryOccasion}
          </div>
        </div>
      </div>
    </div>
  );
};
