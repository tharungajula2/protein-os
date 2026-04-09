'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AtmosphereLayer } from './AtmosphereLayer';
import { NarrativeLayer } from './NarrativeLayer';
import { ProductStage } from './ProductStage';

gsap.registerPlugin(ScrollTrigger);

export const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stageRef.current) return;

    // Reset scroll position to top on refresh during dev to sync ScrollTrigger
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Initial States - Ensuring GSAP takes control immediately
      gsap.set('.narrative-beat', { opacity: 0, y: 30 });
      gsap.set('.cinematic-product-proxy', { opacity: 0, scale: 0.8, blur: 20 });
      gsap.set('#product-hero-spotlight', { opacity: 0, scale: 0.9, blur: 10 });
      gsap.set('#hero-glow-main, #hero-glow-1, #hero-glow-2', { opacity: 0 });

      // 2. Master Timeline for the pinned sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: stageRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // BEAT 1: Brand/Thesis Arrival (Entry)
      tl.to('#narrative-beat-1', { opacity: 1, y: 0, duration: 2, ease: 'power2.out' });
      tl.to('#hero-glow-main', { opacity: 1, scale: 1.2, duration: 2 }, '<');
      
      // Sustain Beat 1
      tl.to({}, { duration: 1.5 }); // Cinematic Pause

      // BEAT 2: Product World Emergence
      tl.to('#narrative-beat-1', { opacity: 0, y: -40, duration: 1.5, ease: 'power2.in' });
      
      tl.to('#product-hero-spotlight', { opacity: 1, scale: 1, blur: 0, duration: 2.5, ease: 'power2.out' }, '<+0.5');
      tl.to('.cinematic-product-proxy', { 
        opacity: (i) => 0.15 + (i * 0.05),
        scale: 1, 
        blur: 0, 
        stagger: 0.1, 
        duration: 2, 
        ease: 'power3.out' 
      }, '<');
      
      tl.to('#narrative-beat-2', { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }, '<+1');
      tl.to('#hero-glow-1, #hero-glow-2', { opacity: 0.4, duration: 2 }, '<');

      // Sustain Beat 2
      tl.to({}, { duration: 1.5 });

      // BEAT 3: Occasion Intelligence
      tl.to('#narrative-beat-2', { opacity: 0, y: -40, duration: 1.5 });
      tl.to('#product-hero-spotlight', { opacity: 0.2, scale: 0.8, x: -100, blur: 6, duration: 2 }, '<');
      tl.to('.cinematic-product-proxy', { x: 50, scale: 0.9, opacity: 0.1, blur: 10, duration: 2 }, '<');
      
      tl.to('#narrative-beat-3', { opacity: 1, y: 0, duration: 2 }, '<+0.5');
      tl.to('#hero-occasion-tags', { opacity: 1, y: 0, duration: 2 }, '<');

      // Sustain Beat 3
      tl.to({}, { duration: 1.5 });

      // BEAT 4: Strategic Formula Reveal
      tl.to('#narrative-beat-3', { opacity: 0, y: -40, duration: 1.5 });
      tl.to('#hero-occasion-tags', { opacity: 0, scale: 0.8, duration: 1.5 }, '<');
      tl.to('#product-hero-spotlight, .cinematic-product-proxy', { opacity: 0.03, duration: 2, blur: 20 }, '<');
      
      tl.to('#narrative-beat-4', { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }, '<+0.5');
      tl.to('#hero-final-cta', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '> -0.5');
      tl.to('#hero-glow-main', { backgroundColor: '#C5A059', opacity: 0.15, duration: 3 }, '<');

      // Final Exit: Fade out stage for the unpin
      tl.to(stageRef.current, { opacity: 0, y: -20, duration: 2, ease: 'power2.in' });

    }, containerRef);

    // Force ScrollTrigger refresh to recalculate positions
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-background">
      <div 
        ref={stageRef} 
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-background z-10"
      >
        <AtmosphereLayer />
        <ProductStage />
        <NarrativeLayer />

        {/* Scroll Momentum Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 text-foreground/20 pointer-events-none">
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent opacity-30" />
        </div>
      </div>
    </div>
  );
};
