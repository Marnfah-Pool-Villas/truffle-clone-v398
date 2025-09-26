'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import type { Language, Translations } from './translations'
import { translations } from './translations'
import { translationLoader } from './translationLoader'
import { applyTranslationOverrides } from './translationOverrides'

// Language information for the dropdown
export const languageInfo = [
  { code: 'th' as Language, name: 'ไทย', currency: '🇹🇭' },
  { code: 'zh-CN' as Language, name: '简体中文', currency: '🇨🇳' },
  { code: 'zh-TW' as Language, name: '繁體中文', currency: '🇹🇼' },
  { code: 'ja' as Language, name: '日本語', currency: '🇯🇵' },
  { code: 'ko' as Language, name: '한국어', currency: '🇰🇷' },
  { code: 'ar' as Language, name: 'العربية', currency: '🇸🇦' },
  { code: 'hi' as Language, name: 'हिन्दी', currency: '🇮🇳' },
  { code: 'ru' as Language, name: 'Русский', currency: '🇷🇺' },
  { code: 'en' as Language, name: 'English', currency: '🇺🇸' },
  { code: 'es' as Language, name: 'Español', currency: '🇪🇸' },
  { code: 'fr' as Language, name: 'Français', currency: '🇫🇷' },
  { code: 'ms' as Language, name: 'Malay', currency: '🇲🇾' },
  { code: 'vi' as Language, name: 'Tiếng Việt', currency: '🇻🇳' },
]

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => Promise<void>
  t: Translations
  isLoading: boolean
  isChangingLanguage: boolean
  loadingProgress: number
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

interface TranslationProviderProps {
  children: React.ReactNode
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(
    applyTranslationOverrides('en', translations.en)
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Ref to track the latest language request
  const latestLanguageRequest = useRef<Language>('en')

  // Initialize with browser language preference
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // Check localStorage first
        const savedLanguage = localStorage.getItem('preferred-language') as Language
        const browserLanguage = navigator.language.toLowerCase()

        // Determine initial language
        let initialLanguage: Language = 'en'

        if (savedLanguage && languageInfo.some(info => info.code === savedLanguage)) {
          initialLanguage = savedLanguage
        } else if (browserLanguage.startsWith('th')) {
          initialLanguage = 'th'
        } else if (browserLanguage.startsWith('zh-cn') || browserLanguage === 'zh') {
          initialLanguage = 'zh-CN'
        } else if (browserLanguage.startsWith('zh-tw')) {
          initialLanguage = 'zh-TW'
        } else if (browserLanguage.startsWith('ja')) {
          initialLanguage = 'ja'
        } else if (browserLanguage.startsWith('ko')) {
          initialLanguage = 'ko'
        } else if (browserLanguage.startsWith('ru')) {
          initialLanguage = 'ru'
        } else if (browserLanguage.startsWith('hi')) {
          initialLanguage = 'hi'
        } else if (browserLanguage.startsWith('es')) {
          initialLanguage = 'es'
        } else if (browserLanguage.startsWith('fr')) {
          initialLanguage = 'fr'
        } else if (browserLanguage.startsWith('ar')) {
          initialLanguage = 'ar'
        } else if (browserLanguage.startsWith('ms')) {
          initialLanguage = 'ms'
        } else if (browserLanguage.startsWith('vi')) {
          initialLanguage = 'vi'
        }

        // Set initial language
        setLanguageState(initialLanguage)
        latestLanguageRequest.current = initialLanguage

        // Start preloading common languages
        translationLoader.preloadCommonLanguages()

        // Load initial translation with progress
        setIsLoading(true)
        setLoadingProgress(30)

        const translation = await translationLoader.loadTranslation(initialLanguage)
        const overriddenTranslation = applyTranslationOverrides(initialLanguage, translation)

        setLoadingProgress(80)
        setCurrentTranslations(overriddenTranslation)
        setLoadingProgress(100)

        setTimeout(() => {
          setIsLoading(false)
          setLoadingProgress(0)
        }, 200) // Small delay for smooth UX

      } catch (error) {
        console.error('Error initializing language:', error)
        setCurrentTranslations(applyTranslationOverrides('en', translations.en))
        setIsLoading(false)
      }
    }

    initializeLanguage()
  }, [])

  const setLanguage = useCallback(async (newLanguage: Language) => {
    if (newLanguage === language) return

    try {
      // Update latest request tracker
      latestLanguageRequest.current = newLanguage

      setIsChangingLanguage(true)
      setLoadingProgress(10)

      // Check if translation is already cached
      const cached = translationLoader.getCached(newLanguage)

      if (cached) {
        // Fast path: use cached translation
        setLoadingProgress(90)
        setCurrentTranslations(cached)
        setLanguageState(newLanguage)
        localStorage.setItem('preferred-language', newLanguage)
        setLoadingProgress(100)

        setTimeout(() => {
          setIsChangingLanguage(false)
          setLoadingProgress(0)
        }, 150)
        return
      }

      // Slow path: load translation dynamically
      setLoadingProgress(30)

      const translation = await translationLoader.loadTranslation(newLanguage)

      // Check if this is still the latest request
      if (latestLanguageRequest.current !== newLanguage) {
        return // Ignore outdated requests
      }

      setLoadingProgress(70)
      setCurrentTranslations(translation)
      setLanguageState(newLanguage)
      localStorage.setItem('preferred-language', newLanguage)
      setLoadingProgress(100)

      // Smooth transition completion
      setTimeout(() => {
        setIsChangingLanguage(false)
        setLoadingProgress(0)
      }, 300)

    } catch (error) {
      console.error('Error changing language:', error)
      setIsChangingLanguage(false)
      setLoadingProgress(0)
      // Keep current language on error
    }
  }, [language])

  const contextValue: TranslationContextType = {
    language,
    setLanguage,
    t: currentTranslations,
    isLoading,
    isChangingLanguage,
    loadingProgress
  }

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

// Convenience hook for just getting translations
export function useT() {
  const { t } = useTranslation()
  return t
}
