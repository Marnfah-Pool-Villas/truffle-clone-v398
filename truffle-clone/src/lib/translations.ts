export const supportedLanguages = [
  'en',
  'th',
  'zh-CN',
  'zh-TW',
  'ja',
  'ko',
  'ar',
  'hi',
  'ru',
  'es',
  'fr',
  'ms',
  'vi'
] as const

export type Language = typeof supportedLanguages[number]

export const DEFAULT_LANGUAGE: Language = 'en'

const englishTranslationsData = {
  nav: {
    residence: "Home ↗",
    location: "Gallery ↗",
    map: "Map ↗",
    wealth: "Market ↗",
    language: "Language",
    contact: "Contact"
  },
  hero: {
    subtitle1: "Pattaya's most prestigious estate",
    subtitle2: "Premium finishes in seamless form",
    subtitle3: "Timeless design with views that inspire"
  },
  properties: {
    title: "Supreme Elegance",
    description: "Experience tropical opulence\nWarm wood and Italian stone accents\nLimited availability from ฿10.9M to ฿34.9M",
    priceRange: "",
    villa1: {
      name: "Tranquility",
      features: "4 Bedrooms | Type 3",
      description: "",
      status: "Reserved"
    },
    villa2: {
      name: "Serenity",
      features: "4 Bedrooms | Type 2",
      description: "",
      status: "2 Available"
    },
    villa3: {
      name: "Harmony",
      features: "5 Bedrooms | Type 1",
      description: "",
      status: "1 Available"
    },
    startingFrom: "Starting from",
    available: "Available",
    reserved: "Reserved"
  },
  amenities: {
    title: "Premium Amenities",
    description: "Enjoy unparalleled luxury\nEvery fact and fabric carefully curated\nWorld-class design for the tasteful homeowner",
    features: {
      pools: "Infinity Edge Pools",
      spa: "Private Spa Pavilions",
      concierge: "24/7 Concierge",
      gardens: "Tropical Gardens"
    }
  },
  exclusive: {
    title: "Bespoke Lifestyle",
    description: "For those who love the finer things\nCrafted with immense attention to detail\nShaped to enhance the flow of positive energy",
    buttonText: "Brochure"
  },
  location: {
    title: "Located in Paradise",
    stats: {
      beaches: "Pristine Beaches",
      restaurants: "Michelin Restaurants",
      amenities: "Luxury Amenities"
    },
    locationStats: {
      beaches: {
        title: "Pristine Beaches",
        subtitle: "Seaside lifestyle"
      },
      golf: {
        title: "Championship Golf Courses",
        subtitle: "World-class facilities"
      },
      schools: {
        title: "Top Tier International Schools",
        subtitle: "Elite education nearby"
      }
    },
    beachCards: {
      patong: {
        title: "Patong Beach",
        description: "The vibrant heart of Phuket with world-class entertainment, dining, and nightlife just steps from crystal-clear waters.",
        features: ["5-star resorts", "Beach clubs", "Water sports", "Shopping centers"]
      },
      kata: {
        title: "Kata Beach",
        description: "A pristine stretch of golden sand perfect for surfing, sunbathing, and experiencing authentic Thai beach culture.",
        features: ["Surfing waves", "Sunset views", "Local cuisine", "Peaceful atmosphere"]
      },
      karon: {
        title: "Karon Beach",
        description: "Three kilometers of powdery white sand beach offering tranquil relaxation and breathtaking ocean panoramas.",
        features: ["Quiet retreat", "Pristine waters", "Spa resorts", "Nature walks"]
      }
    },
    mapSection: {
      title: "Strategic Location",
      description: "Perfectly positioned between Pattaya's best beaches. Easy access to luxury shopping, fine dining, and an international airport."
    }
  },
  investment: {
    title: "Thailand's Smart Money",
    metrics: {
      roi: {
        title: "Annual ROI",
        subtitle: "Rental + Appreciation"
      },
      yield: {
        title: "Rental Yield",
        subtitle: "Smart Location Choice"
      },
      tax: {
        title: "Capital Gains Tax",
        subtitle: "Protect Your Capital"
      }
    },
    marketAnalysis: {
      title: "Market Analysis",
      luxuryGrowth: "Luxury Property Growth (2009-2025)",
      foreignInvestment: "Foreign Investment (2009-2025)",
      gdpGrowth: "GDP Growth Projection (2025)",
      chartTitle: "Thailand Luxury Real Estate Trends",
      chartInsights: {
        growth: "15-Year Growth",
        average2009: "2009 Average",
        average2024: "2024 Average"
      }
    },
    benefits: {
      title: "Benefits",
      items: {
        residency: {
          title: "Thai Elite Residency",
          description: "5-20 year renewable residency visa with investment"
        },
        tax: {
          title: "Tax Optimization",
          description: "No capital gains tax for qualifying foreign investors"
        },
        currency: {
          title: "Currency Diversification",
          description: "Thai Baht stability and regional economic growth"
        },
        management: {
          title: "Rental Management",
          description: "Professional property management available"
        },
        lifestyle: {
          title: "Lifestyle Access",
          description: "Personal use rights with luxury amenities"
        },
        ownership: {
          title: "Freehold Ownership",
          description: "90-year lease structures with inheritance rights"
        }
      }
    },
    stability: {
      title: "Thailand Economic Stability & Growth",
      description: "Thailand's stable political environment, robust tourism industry, and the strategic location of Southeast Asia has created a world-class market for investors. The government's pro-investment policies and immense infrastructure development continue to drive smart money opportunities.",
      metrics: {
        rating: {
          title: "Credit Rating",
          subtitle: "Moody's & S&P Stable Outlook"
        },
        gdp: {
          title: "GDP (2024)",
          subtitle: "2nd Largest ASEAN Economy"
        },
        tourists: {
          title: "Annual Tourists",
          subtitle: "Pre-2024 Recovery Target"
        }
      }
    }
  },
  virtualTour: {
    title: "Virtual Villa Experience",
    subtitle: "Explore our luxury villas with immersive 360° tours",
    features: {
      views360: {
        title: "360° Views",
        description: "Complete panoramic immersion"
      },
      navigation: {
        title: "Room Navigation",
        description: "Seamless space transitions"
      },
      walkthrough: {
        title: "Video Walkthrough",
        description: "Professional guided tours"
      }
    },
    buttons: {
      pictures: "Pictures",
      videoTour: "Video Tour"
    },
    villas: {
      type1: {
        name: "Villa Type 1",
        description: "4 Bedrooms | Infinity Pool | Ocean Views",
        status: "2 Available",
        rooms: {
          living: "Living Room",
          master: "Master Bedroom",
          pool: "Infinity Pool",
          kitchen: "Kitchen",
          terrace: "Terrace"
        }
      },
      type2: {
        name: "Villa Type 2",
        description: "5 Bedrooms | Pool Terrace | Garden Sanctuary",
        status: "1 Available",
        rooms: {
          living: "Grand Living",
          master: "Master Suite",
          pool: "Pool Terrace",
          kitchen: "Gourmet Kitchen",
          garden: "Garden View"
        }
      },
      type3: {
        name: "Villa Type 3",
        description: "3 Bedrooms | Private Pool | Zen Gardens",
        status: "Reserved",
        rooms: {
          living: "Zen Living",
          master: "Master Retreat",
          pool: "Private Sanctuary",
          kitchen: "Chef's Kitchen",
          garden: "Zen Garden"
        }
      }
    },
    interface: {
      selectVilla: "Select a villa to begin your virtual tour",
      startTour: "Start Virtual Tour",
      nextRoom: "Next Room",
      prevRoom: "Previous Room",
      closeTour: "Close Tour",
      hotspots: "hotspots"
    }
  },
  contact: {
    title: "Contact Us",
    form: {
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email Address *",
      phone: "Phone Number *",
      villaOfInterest: "Villa of Interest *",
      message: "Comments or Questions?",
      submit: "Send",
      placeholders: {
        firstName: "Your First Name",
        lastName: "Your Last Name",
        email: "your@email.com",
        phone: "+66 77-888-9999",
        villaSelect: "Select Villa",
        allVillas: "All Villas",
        villa1: "Villa 1",
        villa2: "Villa 2",
        villa3: "Villa 3",
        villa4: "Villa 4",
        message: "I'm interested in..."
      }
    }
  },
  footer: {
    exclusiveDevelopment: "Exclusive Development",
    whatsapp: "WhatsApp",
    wechat: "WeChat",
    line: "Line",
    copyright: "© 2025 MCLL ASIA CO."
  }
} as const

export type Translations = typeof englishTranslationsData

export interface TranslationEntry {
  path: ReadonlyArray<string | number>
  value: string
}

type PathSegment = string | number

const collectTranslationEntries = (
  value: unknown,
  path: PathSegment[],
  entries: TranslationEntry[]
): void => {
  if (typeof value === 'string') {
    entries.push({ path: [...path], value })
    return
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      collectTranslationEntries(item, [...path, index], entries)
    })
    return
  }

  if (value !== null && typeof value === 'object') {
    Object.entries(value).forEach(([key, nestedValue]) => {
      collectTranslationEntries(nestedValue, [...path, key], entries)
    })
  }
}

const translationEntriesInternal = (() => {
  const entries: TranslationEntry[] = []
  collectTranslationEntries(englishTranslationsData, [], entries)
  return entries
})()

export const translationEntries: ReadonlyArray<TranslationEntry> = translationEntriesInternal

export const englishTranslationStrings: ReadonlyArray<string> = translationEntries.map(entry => entry.value)

const cloneTranslations = (): Translations => {
  if (typeof structuredClone === 'function') {
    return structuredClone(englishTranslationsData) as Translations
  }
  return JSON.parse(JSON.stringify(englishTranslationsData)) as Translations
}

const setValueAtPath = (target: any, path: PathSegment[], value: string) => {
  if (path.length === 0) {
    return
  }

  let current: any = target
  for (let i = 0; i < path.length - 1; i += 1) {
    const segment = path[i]
    if (current == null) {
      return
    }
    current = current[segment]
  }

  const leaf = path[path.length - 1]
  if (current != null) {
    current[leaf] = value
  }
}

export const englishTranslations: Translations = englishTranslationsData

export function createTranslationsFromStrings(translatedStrings: ReadonlyArray<string>): Translations {
  if (translatedStrings.length !== translationEntries.length) {
    throw new Error(`Expected ${translationEntries.length} translations but received ${translatedStrings.length}`)
  }

  const result = cloneTranslations()

  translatedStrings.forEach((possibleValue, index) => {
    const entry = translationEntries[index]
    const fallback = entry.value
    const nextValue = typeof possibleValue === 'string' && possibleValue.length > 0 ? possibleValue : fallback
    setValueAtPath(result as any, entry.path as PathSegment[], nextValue)
  })

  return result
}
