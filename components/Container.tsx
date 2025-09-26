import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export default function Container({ 
  children, 
  className = '', 
  maxWidth = '2xl' 
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1200px]',
    full: 'max-w-full',
  };

  return (
    <div className={`container mx-auto ${maxWidthClasses[maxWidth]} ${className}`}>
      <div className="grid grid-cols-12 gap-6">
        {children}
      </div>
    </div>
  );
}