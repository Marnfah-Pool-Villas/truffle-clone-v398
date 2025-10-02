import { NextResponse } from 'next/server'
import type { Language } from '@/lib/translations'
import { DEFAULT_LANGUAGE, supportedLanguages } from '@/lib/translations'
import { getCtaOverrideForText } from '@/lib/ctaOverrides'

const GOOGLE_TRANSLATE_ENDPOINT = 'https://translate.googleapis.com/translate_a/single'
const MAX_TRANSLATION_RETRIES = 2
const MAX_PARALLEL_TRANSLATIONS = 8

const CTA_TRANSLATION_OVERRIDES: Partial<Record<Language, Record<string, string>>> = {
  th: {
    'See All Villa Types': 'ดูวิลล่าทุกประเภท',
    'View Brochure': 'ดูโบรชัวร์'
  },
  'zh-CN': {
    'See All Villa Types': '查看所有别墅类型',
    'View Brochure': '查看宣传册'
  },
  'zh-TW': {
    'See All Villa Types': '查看所有別墅類型',
    'View Brochure': '查看型錄'
  },
  ja: {
    'See All Villa Types': 'すべてのヴィラタイプを見る',
    'View Brochure': 'パンフレットを見る'
  },
  ko: {
    'See All Villa Types': '모든 빌라 유형 보기',
    'View Brochure': '브로셔 보기'
  },
  ar: {
    'See All Villa Types': 'عرض جميع أنواع الفلل',
    'View Brochure': 'عرض الكتيب'
  },
  hi: {
    'See All Villa Types': 'सभी विला प्रकार देखें',
    'View Brochure': 'ब्रोशर देखें'
  },
  ru: {
    'See All Villa Types': 'Посмотреть все типы вилл',
    'View Brochure': 'Посмотреть брошюру'
  },
  es: {
    'See All Villa Types': 'Ver todos los tipos de villas',
    'View Brochure': 'Ver folleto'
  },
  fr: {
    'See All Villa Types': 'Voir tous les types de villa',
    'View Brochure': 'Voir la brochure'
  },
  ms: {
    'See All Villa Types': 'Lihat semua jenis vila',
    'View Brochure': 'Lihat risalah'
  },
  vi: {
    'See All Villa Types': 'Xem tất cả các loại biệt thự',
    'View Brochure': 'Xem tờ giới thiệu'
  }
}

const getOverrideTranslation = (language: Language, text: string): string | null => {
  const overrides = CTA_TRANSLATION_OVERRIDES[language]
  return overrides?.[text] ?? null
}

const SUPPORTED_LANGUAGE_SET = new Set<Language>(supportedLanguages)

interface TranslationRequestPayload {
  texts: unknown
  targetLanguage: unknown
}

const normalizeLanguage = (language: unknown): Language => {
  if (typeof language === 'string' && SUPPORTED_LANGUAGE_SET.has(language as Language)) {
    return language as Language
  }
  return DEFAULT_LANGUAGE
}

const normalizeTexts = (texts: unknown): string[] => {
  if (!Array.isArray(texts)) {
    return []
  }

  return texts.map(text => {
    if (typeof text === 'string') {
      return text
    }
    if (text === null || text === undefined) {
      return ''
    }
    return String(text)
  })
}

const translationMemory = new Map<Language, Map<string, string>>()

const mapLanguageForApi = (language: Language): string => {
  switch (language) {
    case 'zh-CN':
      return 'zh-CN'
    case 'zh-TW':
      return 'zh-TW'
    default:
      return language
  }
}

const buildRequestUrl = (text: string, target: string) => {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: target,
    dt: 't',
    q: text
  })
  return `${GOOGLE_TRANSLATE_ENDPOINT}?${params.toString()}`
}

const parseTranslationResponse = (data: unknown): string | null => {
  if (!Array.isArray(data) || data.length === 0) {
    return null
  }
  const segments = data[0]
  if (!Array.isArray(segments)) {
    return null
  }
  const translated = segments
    .filter(segment => Array.isArray(segment) && typeof segment[0] === 'string')
    .map(segment => segment[0] as string)
    .join('')
  return translated.length > 0 ? translated : null
}

const getLanguageCache = (language: Language): Map<string, string> => {
  let cache = translationMemory.get(language)
  if (!cache) {
    cache = new Map<string, string>()
    translationMemory.set(language, cache)
  }
  return cache
}

const translateTextWithCache = async (text: string, language: Language): Promise<string> => {
  const cache = getLanguageCache(language)
  const override = getOverrideTranslation(language, text)
  if (override) {
    cache.set(text, override)
    return override
  }

  const cached = cache.get(text)
  if (cached !== undefined) {
    return cached
  }

  const translated = await translateText(text, language)
  cache.set(text, translated)
  return translated
}

const translateText = async (text: string, language: Language): Promise<string> => {
  const trimmed = text.trim()
  if (trimmed.length === 0) {
    return text
  }

  const target = mapLanguageForApi(language)
  let lastError: unknown = null

  for (let attempt = 0; attempt <= MAX_TRANSLATION_RETRIES; attempt += 1) {
    try {
      const response = await fetch(buildRequestUrl(text, target), {
        headers: {
          'User-Agent': 'Mozilla/5.0'
        }
      })

      if (!response.ok) {
        throw new Error(`Translation provider returned status ${response.status}`)
      }

      const payload = await response.json()
      const translated = parseTranslationResponse(payload)

      if (translated !== null) {
        return translated
      }

      lastError = new Error('Translation provider returned unexpected payload structure')
    } catch (error) {
      lastError = error
    }
  }

  if (lastError) {
    throw lastError
  }

  return text
}

const translateUniqueTexts = async (texts: string[], language: Language): Promise<Map<string, string>> => {
  const results = new Map<string, string>()

  for (let index = 0; index < texts.length; index += MAX_PARALLEL_TRANSLATIONS) {
    const batch = texts.slice(index, index + MAX_PARALLEL_TRANSLATIONS)
    const translations = await Promise.all(batch.map(text => translateTextWithCache(text, language)))

    batch.forEach((text, batchIndex) => {
      results.set(text, translations[batchIndex])
    })
  }

  return results
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TranslationRequestPayload
    const normalizedLanguage = normalizeLanguage(body.targetLanguage)
    const texts = normalizeTexts(body.texts)

    if (texts.length === 0) {
      return Response.json({ translations: [] })
    }

    if (normalizedLanguage === DEFAULT_LANGUAGE) {
      return Response.json({ translations: texts })
    }

    const indexMap = new Map<string, number[]>()
    texts.forEach((text, index) => {
      const existing = indexMap.get(text)
      if (existing) {
        existing.push(index)
      } else {
        indexMap.set(text, [index])
      }
    })

    const translations = new Array<string>(texts.length)
    const uniqueTexts = Array.from(indexMap.keys())
    const translatedMap = await translateUniqueTexts(uniqueTexts, normalizedLanguage)

    for (const [text, indexes] of indexMap.entries()) {
      const manual = getOverrideTranslation(normalizedLanguage, text)
      const translated = manual ?? translatedMap.get(text) ?? text
      indexes.forEach(position => {
        translations[position] = translated
      })
    }

    return Response.json({ translations })
  } catch (error) {
    console.error('Translation API error:', error)
    return Response.json({ error: 'Translation request failed' }, { status: 502 })
  }
}
