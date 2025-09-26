import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = 'md',
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-primary text-white font-semibold rounded-lg
        hover:bg-primary/90 active:bg-primary/80
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 ease-in-out
        transform hover:scale-[1.02] active:scale-[0.98]
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
