import type { Language, Translations } from './translations'

export function applyTranslationOverrides(language: Language, base: Translations): Translations {
  if (language !== 'en') {
    return base
  }

  let result = base

  if (result.virtualTour?.title) {
    result = {
      ...result,
      virtualTour: {
        ...result.virtualTour,
        title: 'Luxury Villa Experience'
      }
    }
  }

  const contact = result.contact
  const contactForm = contact?.form
  const contactPlaceholders = contactForm?.placeholders

  if (contact && contactForm && contactPlaceholders?.message) {
    result = {
      ...result,
      contact: {
        ...contact,
        form: {
          ...contactForm,
          placeholders: {
            ...contactPlaceholders,
            message: 'Interested in...'
          }
        }
      }
    }
  }

  const investment = result.investment
  const benefits = investment?.benefits
  const items = benefits?.items
  const ownership = items?.ownership

  if (investment && benefits && items && ownership) {
    result = {
      ...result,
      investment: {
        ...investment,
        benefits: {
          ...benefits,
          items: {
            ...items,
            ownership: {
              ...ownership,
              title: 'Free & Leasehold Ownership',
              description: 'Structured with inheritance rights'
            }
          }
        }
      }
    }
  }

  return result
}
