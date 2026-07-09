import { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

// Fade in (no movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.1 },
  }),
}

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: custom * 0.1 },
  }),
}

// Stagger container for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
}

// Magnetic button effect (use with useMotionValue)
export const magneticSpring = {
  type: 'spring',
  stiffness: 500,
  damping: 25,
}

// Button tap animation
export const buttonTap = {
  scale: 0.95,
}

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
}

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(201, 168, 76, 0.3)',
  transition: { duration: 0.3 },
}