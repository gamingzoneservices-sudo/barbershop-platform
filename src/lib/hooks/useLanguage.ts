'use client'

import { useState, useEffect } from 'react'
import i18n, { changeLanguage } from '@/lib/i18n/config'

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  useEffect(() => {
    const onLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng)
    }
    
    i18n.on('languageChanged', onLanguageChanged)
    
    return () => {
      i18n.off('languageChanged', onLanguageChanged)
    }
  }, [])

  const setLanguage = (lang: string) => {
    changeLanguage(lang)
  }

  return { currentLanguage, setLanguage, supportedLanguages: ['de', 'ar', 'en'] }
}