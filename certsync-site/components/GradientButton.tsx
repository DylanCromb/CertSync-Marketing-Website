import { ReactNode } from 'react';

interface GradientButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function GradientButton({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className = '',
  href,
  type = 'button',
}: GradientButtonProps) {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl focus:ring-primary',
    secondary:
      'border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
