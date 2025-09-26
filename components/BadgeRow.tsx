import { ReactNode } from 'react'

interface BadgeRowProps {
  children: ReactNode
  className?: string
}

export default function BadgeRow({ children, className = '' }: BadgeRowProps) {
  return (
    <div className={`flex flex-wrap gap-4 justify-center items-center ${className}`}>
      {children}
    </div>
  )
}
