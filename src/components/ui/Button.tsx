'use client'

import { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-gold text-background hover:bg-gold-light hover:scale-[1.02] focus:ring-gold/50',
        secondary: 'bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold hover:scale-[1.02]',
        glass: 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:scale-[1.02]',
        danger: 'bg-error text-white hover:bg-error/80 hover:scale-[1.02] focus:ring-error/50',
        ghost: 'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    MotionProps {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }