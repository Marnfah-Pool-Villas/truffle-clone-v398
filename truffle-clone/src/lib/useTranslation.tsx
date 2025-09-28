'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import type { Language, Translations } from './translations'
import { DEFAULT_LANGUAGE, englishTranslations, supportedLanguages, getTranslationsForLanguage } from './translations'

const SUPPORTED_LANGUAGE_SET = new Set<Language>(supportedLanguages)
const LANGUAGE_STORAGE_KEY = 'preferred-language'

const browserLanguageMatchers: Array<[RegExp, Language]> = [
  [/^th/, 'th'],
  [/^zh-cn|^zh$/, 'zh-CN'],
  [/^zh-tw/, 'zh-TW'],
  [/^ja/, 'ja'],
  [/^ko/, 'ko'],
  [/^ar/, 'ar'],
  [/^hi/, 'hi'],
  [/^ru/, 'ru'],
  [/^es/, 'es'],
  [/^fr/, 'fr'],
  [/^ms/, 'ms'],
  [/^vi/, 'vi']
]

const detectBrowserLanguage = (): Language => {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  const browserLanguage = navigator.language?.toLowerCase() ?? ''

  for (const [pattern, lang] of browserLanguageMatchers) {
    if (pattern.test(browserLanguage) && SUPPORTED_LANGUAGE_SET.has(lang)) {
      return lang
    }
  }

  return DEFAULT_LANGUAGE
}

export const languageInfo: Array<{ code: Language; name: string; currency: string }> = [
  { code: 'th', name: 'ไทย', currency: '🇹🇭' },
  { code: 'zh-CN', name: '简体中文', currency: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', currency: '🇹🇼' },
  { code: 'ja', name: '日本語', currency: '🇯🇵' },
  { code: 'ko', name: '한국어', currency: '🇰🇷' },
  { code: 'ar', name: 'العربية', currency: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', currency: '🇮🇳' },
  { code: 'ru', name: 'Русский', currency: '🇷🇺' },
  { code: 'en', name: 'English', currency: '🇺🇸' },
  { code: 'es', name: 'Español', currency: '🇪🇸' },
  { code: 'fr', name: 'Français', currency: '🇫🇷' },
  { code: 'ms', name: 'Malay', currency: '🇲🇾' },
  { code: 'vi', name: 'Tiếng Việt', currency: '🇻🇳' }
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
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(englishTranslations)
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const loadingResetRef = useRef<number | null>(null)

  const clearScheduledFinish = useCallback(() => {
    if (loadingResetRef.current !== null) {
      window.clearTimeout(loadingResetRef.current)
      loadingResetRef.current = null
    }
  }, [])

  const scheduleFinish = useCallback(() => {
    clearScheduledFinish()
    loadingResetRef.current = window.setTimeout(() => {
      setIsChangingLanguage(false)
      setIsLoading(false)
      setLoadingProgress(0)
      loadingResetRef.current = null
    }, 150)
  }, [clearScheduledFinish])

  useEffect(() => {
    const savedLanguage = typeof window !== 'undefined'
      ? (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null)
      : null

    let initialLanguage = DEFAULT_LANGUAGE

    if (savedLanguage && SUPPORTED_LANGUAGE_SET.has(savedLanguage)) {
      initialLanguage = savedLanguage
    } else {
      initialLanguage = detectBrowserLanguage()
      if (typeof window !== 'undefined') {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, initialLanguage)
      }
    }

    setLanguageState(initialLanguage)
    setCurrentTranslations(getTranslationsForLanguage(initialLanguage))
    setLoadingProgress(100)
    scheduleFinish()
  }, [scheduleFinish])

  useEffect(() => {
    return () => {
      clearScheduledFinish()
    }
  }, [clearScheduledFinish])

  const setLanguage = useCallback(async (newLanguage: Language) => {
    const safeLanguage = SUPPORTED_LANGUAGE_SET.has(newLanguage) ? newLanguage : DEFAULT_LANGUAGE

    if (safeLanguage === language) {
      return
    }

    setIsChangingLanguage(true)
    setIsLoading(true)
    setLoadingProgress(60)

    setLanguageState(safeLanguage)
    setCurrentTranslations(getTranslationsForLanguage(safeLanguage))

    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, safeLanguage)
    }

    setLoadingProgress(100)
    scheduleFinish()
  }, [language, scheduleFinish])

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

export function useT() {
  const { t } = useTranslation()
  return t
}
