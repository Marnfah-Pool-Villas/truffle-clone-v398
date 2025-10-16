import type { Language, Translations } from '@/lib/translations'
import { DEFAULT_LANGUAGE } from '@/lib/translations'

export const CTA_SOURCE_TEXTS = {
  seeAllVillaTypes: 'See All Villa Types',
  viewBrochure: 'View Brochure'
} as const

export interface CtaOverride {
  seeAllVillaTypes: string
  viewBrochure: string
}

const CTA_OVERRIDES: Partial<Record<Language, CtaOverride>> = {
  th: {
    seeAllVillaTypes: 'ดูวิลล่าทุกประเภท',
    viewBrochure: 'ดูโบรชัวร์'
  },
  'zh-CN': {
    seeAllVillaTypes: '查看所有别墅类型',
    viewBrochure: '查看宣传册'
  },
  'zh-TW': {
    seeAllVillaTypes: '查看所有別墅類型',
    viewBrochure: '查看型錄'
  },
  ja: {
    seeAllVillaTypes: 'すべてのヴィラタイプを見る',
    viewBrochure: 'パンフレットを見る'
  },
  ko: {
    seeAllVillaTypes: '모든 빌라 유형 보기',
    viewBrochure: '브로셔 보기'
  },
  ar: {
    seeAllVillaTypes: 'عرض جميع أنواع الفلل',
    viewBrochure: 'عرض الكتيب'
  },
  hi: {
    seeAllVillaTypes: 'सभी विला प्रकार देखें',
    viewBrochure: 'ब्रोशर देखें'
  },
  ru: {
    seeAllVillaTypes: 'Посмотреть все типы вилл',
    viewBrochure: 'Посмотреть брошюру'
  },
  es: {
    seeAllVillaTypes: 'Ver todos los tipos de villas',
    viewBrochure: 'Ver folleto'
  },
  fr: {
    seeAllVillaTypes: 'Voir tous les types de villa',
    viewBrochure: 'Voir la brochure'
  },
  ms: {
    seeAllVillaTypes: 'Lihat semua jenis vila',
    viewBrochure: 'Lihat risalah'
  },
  vi: {
    seeAllVillaTypes: 'Xem tất cả các loại biệt thự',
    viewBrochure: 'Xem tờ giới thiệu'
  }
}

// Generate a deterministic signature for overrides
const CTA_OVERRIDES_SIGNATURE = (() => {
  const entries = Object.entries(CTA_OVERRIDES).map(([language, override]) => {
    if (!override) {
      return `${language}::`
    }
    return `${language}:${override.seeAllVillaTypes}|${override.viewBrochure}`
  })
  entries.sort()
  return entries.join('||')
})()

export const getCtaOverridesSignature = (): string => CTA_OVERRIDES_SIGNATURE

export const getCtaOverride = (language: Language): CtaOverride | null => {
  return CTA_OVERRIDES[language] ?? null
}

export const getCtaOverrideForText = (language: Language, sourceText: string): string | null => {
  const override = getCtaOverride(language)
  if (!override) return null

  if (sourceText === CTA_SOURCE_TEXTS.seeAllVillaTypes) return override.seeAllVillaTypes
  if (sourceText === CTA_SOURCE_TEXTS.viewBrochure) return override.viewBrochure

  return null
}

/**
 * Apply CTA overrides immutably to a Translations object.
 * Returns a **new Translations object** without mutating readonly properties.
 */
export const applyCtaOverrideToTranslations = (
  language: Language,
  translations: Translations
): Translations => {
  if (language === DEFAULT_LANGUAGE) return translations

  const override = getCtaOverride(language)
  if (!override) return translations

  return {
    ...translations,
    properties: {
      ...translations.properties,
      seeAllVillaTypes: override.seeAllVillaTypes
    },
    exclusive: {
      ...translations.exclusive,
      buttonText: override.viewBrochure
    }
  }
}
