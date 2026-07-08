'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement>, MotionProps {
  hoverable?: boolean
  glassIntensity?: 'light' | 'medium' | 'heavy'
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverable = true, glassIntensity = 'medium', children, ...props }, ref) => {
    const intensityMap = {
      light: 'bg-white/5 backdrop-blur-sm border-white/5',
      medium: 'bg-white/5 backdrop-blur-md border-white/8',
      heavy: 'bg-white/10 backdrop-blur-xl border-white/10',
    }

    return (
      <motion.div
        ref={ref}
        whileHover={hoverable ? { y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' } : {}}
        transition={{ duration: 0.3 }}
        className={cn(
          'rounded-2xl border shadow-glass transition-all duration-300',
          intensityMap[glassIntensity],
          hoverable && 'hover:bg-white/10',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

export { GlassCard }