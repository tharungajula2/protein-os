interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  badge?: string;
  eyebrow?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center',
  badge,
  eyebrow,
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 md:mb-20 ${isCenter ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase border border-gold/20 text-gold bg-gold/5 rounded-full">
          {badge}
        </span>
      )}
      {eyebrow && (
        <div className="text-gold/60 text-xs uppercase tracking-[0.4em] font-bold mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-7xl mb-8 font-medium leading-[1.1] text-balance ${isCenter ? 'max-w-4xl mx-auto' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-foreground/50 font-light leading-relaxed text-balance ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
