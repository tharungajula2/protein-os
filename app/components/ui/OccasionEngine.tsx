'use client';

import React, { useState } from 'react';
import { occasions } from '../../data/occasions';
import { products } from '../../data/products';

export const OccasionEngine: React.FC = () => {
    const [activeId, setActiveId] = useState(occasions[0].id);
    const activeOccasion = occasions.find(o => o.id === activeId) || occasions[0];

    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-background">
            {/* Dynamic Atmospheric Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-[600px] blur-[150px] opacity-10 transition-colors duration-1000"
                    style={{ backgroundColor: activeOccasion.themeColor }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left Panel: Scenario Selector */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 space-y-2">
                            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8">
                                Strategy Interface
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-tight">
                                Brands win moments before they win markets.
                            </h2>
                            
                            <div className="flex flex-col space-y-4">
                                {occasions.map((occasion) => (
                                    <button
                                        key={occasion.id}
                                        onClick={() => setActiveId(occasion.id)}
                                        className={`group relative text-left py-4 px-6 rounded-xl transition-all duration-500 border-l-[3px] ${
                                            activeId === occasion.id 
                                            ? 'bg-graphite/40 border-gold' 
                                            : 'border-transparent hover:bg-graphite/20'
                                        }`}
                                    >
                                        <span className={`text-[11px] uppercase tracking-widest font-bold block transition-colors ${
                                            activeId === occasion.id ? 'text-gold' : 'text-foreground/30 group-hover:text-foreground/60'
                                        }`}>
                                            {occasion.title}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <p className="mt-16 text-sm text-foreground/30 font-light italic text-balance">
                                "The category grows when products attach to repeatable human moments."
                            </p>
                        </div>
                    </div>

                    {/* Right Panel: Strategic Detail Surface */}
                    <div className="lg:w-2/3">
                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700" key={activeId}>
                            
                            <div className="space-y-6">
                                <h3 className="text-3xl md:text-5xl font-serif">{activeOccasion.title}</h3>
                                <p className="text-xl md:text-2xl text-foreground/60 font-serif italic">
                                    {activeOccasion.humanDescription}
                                </p>
                            </div>

                            {/* Strategic Blueprint Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
                                <div className="space-y-6">
                                    <div className="occasion-insight">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-gold/40 block mb-2">Behavioral State</span>
                                        <p className="text-foreground/80 font-medium">{activeOccasion.behavioralState}</p>
                                    </div>
                                    <div className="occasion-insight">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-gold/40 block mb-2">Winning Format</span>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-foreground/80 font-medium">{activeOccasion.winningFormat}</span>
                                        </div>
                                    </div>
                                    <div className="occasion-insight">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-gold/40 block mb-2">Repeat Trigger</span>
                                        <p className="text-foreground/80 font-medium">{activeOccasion.repeatTrigger}</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="occasion-insight">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-gold/40 block mb-2">Primary Message</span>
                                        <p className="text-foreground/80 font-medium italic">"{activeOccasion.messageThatWorks}"</p>
                                    </div>
                                    <div className="occasion-insight">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-gold/40 block mb-2">Natural Discovery Channel</span>
                                        <p className="text-foreground/80 font-medium">{activeOccasion.channelEdge}</p>
                                    </div>
                                    <div className="occasion-insight">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/20 block mb-2">Strategic Risk</span>
                                        <p className="text-sm text-foreground/40 leading-relaxed font-light">{activeOccasion.riskFriction}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Portfolio Connectivity: Best Fit SKUs */}
                            <div className="bg-graphite/20 p-8 rounded-2xl border border-foreground/5 space-y-6">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold/60 block">Best Fit Strategic Portfolio</span>
                                <div className="flex flex-wrap gap-4">
                                    {activeOccasion.bestFitProductIds.map(id => {
                                        const product = products.find(p => p.id === id);
                                        if (!product) return null;
                                        return (
                                            <div key={id} className="flex items-center space-x-4 bg-background/40 pr-6 pl-2 py-2 rounded-full border border-foreground/5 group/sku cursor-pointer hover:border-gold/30 transition-all duration-300">
                                                <div 
                                                    className="w-8 h-10 rounded-lg flex items-center justify-center text-[8px] font-serif border border-foreground/10"
                                                    style={{ backgroundColor: product.themeColor + '20' }}
                                                >
                                                    SKU
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/80 group-hover/sku:text-gold transition-colors">{product.name}</span>
                                                    <span className="text-[8px] uppercase tracking-tighter text-foreground/30">{product.strategicRole}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
