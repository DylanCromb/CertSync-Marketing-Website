import { ReactNode } from 'react';

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function SectionEyebrow({
  children,
  className = '',
}: SectionEyebrowProps) {
  return (
    <div
      className={`text-sm font-medium text-primary uppercase tracking-wider mb-4 ${className}`}
    >
      {children}
    </div>
  );
}
