export interface ExchangeRates {
  USD: number
  EUR: number
  CNY: number
  THB: number
  JPY: number
  KRW: number
  INR: number
  RUB: number
  HKD: number
  MYR: number
  VND: number
  AED: number
}

export interface CurrencyInfo {
  code: string
  symbol: string
  name: string
  decimals: number
}

export const CURRENCIES: Record<string, CurrencyInfo> = {
  THB: { code: 'THB', symbol: '฿', name: 'Thai Baht', decimals: 1 },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', decimals: 2 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', decimals: 2 },
  CNY: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', decimals: 2 },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', decimals: 0 },
  KRW: { code: 'KRW', symbol: '₩', name: 'Korean Won', decimals: 0 },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', decimals: 2 },
  RUB: { code: 'RUB', symbol: '₽', name: 'Russian Ruble', decimals: 2 },
  HKD: { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', decimals: 2 },
  MYR: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', decimals: 2 },
  VND: { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', decimals: 0 },
  AED: { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', decimals: 2 }
}

export const LANGUAGE_CURRENCY_MAP: Record<string, string> = {
  'en': 'THB',
  'th': 'THB',
  'zh-CN': 'CNY',
  'zh-TW': 'HKD',
  'ja': 'JPY',
  'ko': 'KRW',
  'ru': 'RUB',
  'hi': 'INR',
  'es': 'EUR',
  'fr': 'EUR',
  'ar': 'AED',
  'ms': 'MYR',
  'vi': 'VND'
}

// Static exchange rates (fixed, no fluctuation)
export const STATIC_EXCHANGE_RATES: ExchangeRates = {
  THB: 1,
  USD: 0.029,
  EUR: 0.027,
  CNY: 0.21,
  JPY: 4.4,
  KRW: 40.2,
  INR: 2.4,
  RUB: 2.9,
  HKD: 0.22,
  MYR: 0.13,
  VND: 690,
  AED: 0.10
}

// Pre-calculated villa prices in all currencies (static, no API calls needed)
export const STATIC_VILLA_PRICES = {
  tranquility: {
    THB: 12300000,
    USD: 356700,
    EUR: 332100,
    CNY: 2583000,
    JPY: 54120000,
    KRW: 494460000,
    INR: 29520000,
    RUB: 35670000,
    HKD: 2706000,
    MYR: 1599000,
    VND: 8487000000,
    AED: 1230000
  },
  serenity: {
    THB: 18800000,
    USD: 545200,
    EUR: 507600,
    CNY: 3948000,
    JPY: 82720000,
    KRW: 755760000,
    INR: 45120000,
    RUB: 54508000,
    HKD: 4136000,
    MYR: 2444000,
    VND: 12972000000,
    AED: 1880000
  },
  harmony: {
    THB: 23400000,
    USD: 678600,
    EUR: 631800,
    CNY: 4914000,
    JPY: 102960000,
    KRW: 940680000,
    INR: 56160000,
    RUB: 67866000,
    HKD: 5148000,
    MYR: 3042000,
    VND: 16146000000,
    AED: 2340000
  }
}

class CurrencyConverter {
  // No more API calls - use static rates
  async getExchangeRates(): Promise<ExchangeRates> {
    return STATIC_EXCHANGE_RATES
  }

  async convertPrice(thbAmount: number, targetCurrency: string): Promise<number> {
    const rate = STATIC_EXCHANGE_RATES[targetCurrency as keyof ExchangeRates]

    if (!rate) {
      throw new Error(`Unsupported currency: ${targetCurrency}`)
    }

    return thbAmount * rate
  }

  formatPrice(amount: number, currency: string): string {
    const currencyInfo = CURRENCIES[currency]
    if (!currencyInfo) {
      return `${amount.toFixed(2)} ${currency}`
    }

    const formatted = amount.toFixed(currencyInfo.decimals)
    const parts = formatted.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const formattedAmount = parts.join('.')

    if (currency === 'EUR') {
      return `${formattedAmount} ${currencyInfo.symbol}`
    } else {
      return `${currencyInfo.symbol}${formattedAmount}`
    }
  }

  async convertAndFormatPrice(thbAmount: number, targetCurrency: string): Promise<string> {
    if (targetCurrency === 'THB') {
      return this.formatPrice(thbAmount, 'THB')
    }

    const convertedAmount = await this.convertPrice(thbAmount, targetCurrency)
    return this.formatPrice(convertedAmount, targetCurrency)
  }

  // New method for instant villa price lookup (no conversion needed)
  getStaticVillaPrice(villaKey: keyof typeof STATIC_VILLA_PRICES, currency: string): number {
    return STATIC_VILLA_PRICES[villaKey][currency as keyof typeof STATIC_VILLA_PRICES.tranquility] || STATIC_VILLA_PRICES[villaKey].THB
  }
}

export const currencyConverter = new CurrencyConverter()

export function getMillionsAbbreviation(currency: string): string {
  switch (currency) {
    case 'CNY':
    case 'JPY':
    case 'KRW':
    case 'INR':
      return ''
    default:
      return 'M'
  }
}

// Legacy villa prices in THB only (for reference)
export const VILLA_PRICES = {
  tranquility: 12300000,
  serenity: 18800000,
  harmony: 23400000
}
