'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import type { Language, Translations } from './translations'
import {
  DEFAULT_LANGUAGE,
  englishTranslations,
  englishTranslationStrings,
  supportedLanguages,
  createTranslationsFromStrings
} from './translations'

const SUPPORTED_LANGUAGE_SET = new Set<Language>(supportedLanguages)
const LANGUAGE_STORAGE_KEY = 'preferred-language'
const TRANSLATION_CACHE_PREFIX = 'translation-cache-v1-'
const TRANSLATION_EXPECTED_COUNT = englishTranslationStrings.length

const translationObjectCache = new Map<Language, Translations>([[DEFAULT_LANGUAGE, englishTranslations]])
const translationFetchPromises = new Map<Language, Promise<ReadonlyArray<string>>>()

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

const getCacheKey = (language: Language) => `${TRANSLATION_CACHE_PREFIX}${language}`

const readCachedStrings = (language: Language): string[] | null => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const raw = localStorage.getItem(getCacheKey(language))
    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as { strings?: unknown }
    const strings = parsed?.strings

    if (!Array.isArray(strings) || strings.length !== TRANSLATION_EXPECTED_COUNT) {
      return null
    }

    if (!strings.every(item => typeof item === 'string')) {
      return null
    }

    return [...strings]
  } catch (error) {
    console.error('Failed to parse cached translations:', error)
    return null
  }
}

const writeCachedStrings = (language: Language, strings: ReadonlyArray<string>) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const payload = JSON.stringify({ strings: Array.from(strings), timestamp: Date.now() })
    localStorage.setItem(getCacheKey(language), payload)
  } catch (error) {
    console.error('Failed to persist translations cache:', error)
  }
}

const fetchTranslationsFromApi = async (language: Language): Promise<ReadonlyArray<string>> => {
  let promise = translationFetchPromises.get(language)

  if (!promise) {
    promise = (async () => {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          targetLanguage: language,
          texts: englishTranslationStrings
        })
      })

      if (!response.ok) {
        throw new Error(`Translation API responded with status ${response.status}`)
      }

      const payload = await response.json() as { translations?: unknown }
      const translatedTexts = payload?.translations

      if (!Array.isArray(translatedTexts)) {
        throw new Error('Translation API payload missing translations array')
      }

      const normalized = translatedTexts.map(item => (typeof item === 'string' ? item : ''))

      if (normalized.length !== TRANSLATION_EXPECTED_COUNT) {
        throw new Error(`Translation API returned ${normalized.length} items, expected ${TRANSLATION_EXPECTED_COUNT}`)
      }

      return normalized
    })()

    translationFetchPromises.set(language, promise)
  }

  try {
    return await promise
  } finally {
    translationFetchPromises.delete(language)
  }
}

const loadLanguageTranslations = async (language: Language): Promise<Translations> => {
  if (translationObjectCache.has(language)) {
    return translationObjectCache.get(language) as Translations
  }

  if (language === DEFAULT_LANGUAGE) {
    translationObjectCache.set(language, englishTranslations)
    return englishTranslations
  }

  const cachedStrings = readCachedStrings(language)
  if (cachedStrings) {
    const cachedTranslations = createTranslationsFromStrings(cachedStrings)
    translationObjectCache.set(language, cachedTranslations)
    return cachedTranslations
  }

  const fetchedStrings = await fetchTranslationsFromApi(language)
  writeCachedStrings(language, fetchedStrings)
  const fetchedTranslations = createTranslationsFromStrings(fetchedStrings)
  translationObjectCache.set(language, fetchedTranslations)
  return fetchedTranslations
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(englishTranslations)
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const loadingResetRef = useRef<number | null>(null)
  const activeRequestRef = useRef(0)
  const languageRef = useRef<Language>(DEFAULT_LANGUAGE)

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
    languageRef.current = language
  }, [language])

  useEffect(() => {
    return () => {
      clearScheduledFinish()
    }
  }, [clearScheduledFinish])

  const applyLanguage = useCallback(async (requestedLanguage: Language, treatAsInitial = false) => {
    const safeLanguage = SUPPORTED_LANGUAGE_SET.has(requestedLanguage) ? requestedLanguage : DEFAULT_LANGUAGE

    if (!treatAsInitial && safeLanguage === languageRef.current) {
      return
    }

    const requestId = activeRequestRef.current + 1
    activeRequestRef.current = requestId

    if (!treatAsInitial) {
      setIsChangingLanguage(true)
    }

    setIsLoading(true)
    setLoadingProgress(treatAsInitial ? 35 : 60)

    setLanguageState(safeLanguage)
    languageRef.current = safeLanguage

    try {
      const translations = await loadLanguageTranslations(safeLanguage)

      if (activeRequestRef.current !== requestId) {
        return
      }

      setCurrentTranslations(translations)

      if (typeof window !== 'undefined') {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, safeLanguage)
      }

      setLoadingProgress(100)
      scheduleFinish()
    } catch (error) {
      console.error('Failed to load translations:', error)

      if (activeRequestRef.current !== requestId) {
        throw error
      }

      setLanguageState(DEFAULT_LANGUAGE)
      languageRef.current = DEFAULT_LANGUAGE
      setCurrentTranslations(englishTranslations)

      if (typeof window !== 'undefined') {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE)
      }

      setLoadingProgress(100)
      scheduleFinish()

      throw error
    }
  }, [scheduleFinish])

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

    applyLanguage(initialLanguage, true).catch(error => {
      console.error('Initial language load failed:', error)
    })
  }, [applyLanguage])

  const setLanguage = useCallback(async (newLanguage: Language) => {
    await applyLanguage(newLanguage, false)
  }, [applyLanguage])

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
