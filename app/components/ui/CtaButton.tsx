import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full tracking-wide";
  
  const variants = {
    primary: "bg-gold text-background hover:bg-gold/90 gold-dim-glow shadow-lg",
    secondary: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border border-foreground/20 text-foreground hover:border-gold hover:text-gold bg-transparent",
  };

  const sizes = {
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
    xl: "px-10 py-5 text-lg uppercase tracking-widest",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
