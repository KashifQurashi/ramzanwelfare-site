interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionHeader({ title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {badge && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {badge}
        </span>
      )}
      <h2 className={`font-bold tracking-tight text-gray-900 ${badge ? 'mt-4 text-3xl md:text-4xl' : 'section-title'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`leading-relaxed text-gray-500 ${badge ? 'mt-4 text-base' : 'section-subtitle'}`}>
          {subtitle}
        </p>
      )}
      {!badge && <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" />}
    </div>
  );
}
