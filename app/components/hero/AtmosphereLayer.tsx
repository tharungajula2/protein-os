import React from 'react';

export const AtmosphereLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 vignette-atmosphere opacity-60" />
      
      {/* Ambient Depth Haze */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-[800px] haze-overlay opacity-30" />
      
      {/* Dynamic Glow Spots - These will be targeted by GSAP later */}
      <div className="absolute inset-0">
        <div id="hero-glow-1" className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-choco/5 blur-[120px] rounded-full opacity-0" />
        <div id="hero-glow-2" className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-coffee/5 blur-[120px] rounded-full opacity-0" />
        <div id="hero-glow-main" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 blur-[150px] rounded-full opacity-[0.03]" />
      </div>

      {/* Subtle Grid / Technical Texture */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(var(--foreground) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} 
      />
    </div>
  );
};
