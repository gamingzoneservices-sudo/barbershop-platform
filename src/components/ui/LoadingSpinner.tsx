'use client'

import { motion } from 'framer-motion'

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        className="h-8 w-8 rounded-full border-4 border-gold border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}