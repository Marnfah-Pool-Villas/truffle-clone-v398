import { NextResponse } from 'next/server'
import type { Language } from '@/lib/translations'
import { DEFAULT_LANGUAGE, supportedLanguages } from '@/lib/translations'

const GOOGLE_TRANSLATE_ENDPOINT = 'https://translate.googleapis.com/translate_a/single'
const MAX_TRANSLATION_RETRIES = 2

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TranslationRequestPayload
    const normalizedLanguage = normalizeLanguage(body.targetLanguage)
    const texts = normalizeTexts(body.texts)

    if (texts.length === 0) {
      return NextResponse.json({ translations: [] })
    }

    if (normalizedLanguage === DEFAULT_LANGUAGE) {
      return NextResponse.json({ translations: texts })
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

    for (const [text, indexes] of indexMap.entries()) {
      const translated = await translateText(text, normalizedLanguage)
      indexes.forEach(position => {
        translations[position] = translated
      })
    }

    return NextResponse.json({ translations })
  } catch (error) {
    console.error('Translation API error:', error)
    return NextResponse.json({ error: 'Translation request failed' }, { status: 502 })
  }
}
