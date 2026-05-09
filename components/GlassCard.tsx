import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`glass rounded-2xl p-6 backdrop-blur-md border border-white/10 hover:border-electric-blue/40 transition-all duration-300 hover:shadow-xl hover:shadow-electric-blue/10 ${className}`}>
      {children}
    </div>
  )
}