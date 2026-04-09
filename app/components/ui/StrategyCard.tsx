import React from 'react';

interface StrategyCardProps {
  title: string;
  description: string;
  badge?: string;
  footer?: string;
  icon?: React.ReactNode;
}

export const StrategyCard: React.FC<StrategyCardProps> = ({
  title,
  description,
  badge,
  footer,
  icon,
}) => {
  return (
    <div className="glass-card p-8 rounded-2xl flex flex-col h-full transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        {icon && <div className="text-gold">{icon}</div>}
        {badge && (
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-foreground/40 bg-foreground/5 px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      
      <h3 className="text-2xl font-medium mb-4 text-foreground/90">
        {title}
      </h3>
      
      <p className="text-foreground/60 font-light leading-relaxed mb-auto">
        {description}
      </p>
      
      {footer && (
        <div className="mt-8 pt-6 border-t border-foreground/5 flex items-center justify-between group cursor-pointer">
          <span className="text-sm font-medium text-gold/80 group-hover:text-gold transition-colors">
            {footer}
          </span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      )}
    </div>
  );
};
