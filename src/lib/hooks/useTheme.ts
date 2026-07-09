'use client'

import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Always dark mode for this project
    document.documentElement.classList.add('dark')
  }, [])

  return { isDark: true }
}