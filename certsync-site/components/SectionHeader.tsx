interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl font-bold mb-4 gradient-text">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
    </div>
  );
}
