'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translations
import de from './locales/de.json'
import ar from './locales/ar.json'
import en from './locales/en.json'

const resources = {
  de: { translation: de },
  ar: { translation: ar },
  en: { translation: en },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n

// Helper to change language
export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang)
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = lang
}