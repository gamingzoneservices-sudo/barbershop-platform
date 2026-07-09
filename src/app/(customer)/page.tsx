'use client'

import { useTranslation } from 'react-i18next'

export default function CustomerHome() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-7xl text-white mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-text-secondary text-xl md:text-2xl">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8">
          <button className="btn-base bg-gold text-background px-8 py-4 rounded-lg hover:bg-gold-light transition-all duration-300 font-semibold text-lg">
            {t('hero.cta')}
          </button>
        </div>
        <p className="mt-8 text-text-tertiary text-sm">
          Deutsch (DE) · العربية (AR) · English (EN)
        </p>
      </div>
    </div>
  )
}