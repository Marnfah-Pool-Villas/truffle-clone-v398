import type { Language, Translations } from './translations'

export function applyTranslationOverrides(language: Language, base: Translations): Translations {
  if (language !== 'en') {
    return base
  }

  const investment = base.investment
  if (!investment) {
    return base
  }

  const benefits = investment.benefits
  if (!benefits) {
    return base
  }

  const items = benefits.items
  if (!items || !items.ownership) {
    return base
  }

  return {
    ...base,
    investment: {
      ...investment,
      benefits: {
        ...benefits,
        items: {
          ...items,
          ownership: {
            ...items.ownership,
            title: 'Free & Leasehold Ownership',
            description: 'Structured with inheritance rights'
          }
        }
      }
    }
  }
}
