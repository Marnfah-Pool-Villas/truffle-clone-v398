'use client'

import { useState, useCallback } from 'react'
import { currencyConverter, LANGUAGE_CURRENCY_MAP, CURRENCIES, getMillionsAbbreviation, STATIC_VILLA_PRICES } from './currencyConversion'

export function useCurrency(language: string) {
  const [isLoading] = useState(false) // Always false since no API calls

  // Get preferred currency based on selected language
  const preferredCurrency = LANGUAGE_CURRENCY_MAP[language] || 'USD'
  const currencyInfo = CURRENCIES[preferredCurrency]

  // Convert and format a THB amount to the preferred currency (using static rates)
  const convertPrice = useCallback(async (thbAmount: number): Promise<string> => {
    try {
      const formatted = await currencyConverter.convertAndFormatPrice(thbAmount, preferredCurrency)
      return formatted
    } catch (error) {
      console.error('Currency conversion failed:', error)
      // Fallback to THB
      return currencyConverter.formatPrice(thbAmount, 'THB')
    }
  }, [preferredCurrency])

  // Get villa price instantly from pre-calculated static values (no conversion needed)
  const convertVillaPrice = useCallback((villaKey: keyof typeof STATIC_VILLA_PRICES): string => {
    try {
      const staticPrice = currencyConverter.getStaticVillaPrice(villaKey, preferredCurrency)

      // For THB, always show in millions format
      if (preferredCurrency === 'THB') {
        const millions = staticPrice / 1000000
        return `฿${millions.toFixed(1)}M THB`
      }

      const millions = staticPrice / 1000000
      const millionsAbbr = getMillionsAbbreviation(preferredCurrency)

      // Enhanced currency-specific formatting
      if (preferredCurrency === 'JPY' || preferredCurrency === 'KRW') {
        // Large number currencies - show in millions for readability
        const formattedMillions = (staticPrice / 1000000).toFixed(0)
        return `${CURRENCIES[preferredCurrency].symbol}${formattedMillions}M`
      } else if (preferredCurrency === 'CNY') {
        // Chinese Yuan - show in millions
        return `¥${millions.toFixed(1)}M`
      } else if (preferredCurrency === 'VND') {
        // Vietnamese Dong - show in billions for readability
        const billions = staticPrice / 1000000000
        return `₫${billions.toFixed(1)}B`
      } else {
        // USD, EUR, RUB, etc. - show in millions
        return `${currencyInfo.symbol}${millions.toFixed(1)}${millionsAbbr}`
      }
    } catch (error) {
      console.error('Villa price lookup failed:', error)
      // Fallback to THB
      const thbPrice = STATIC_VILLA_PRICES[villaKey].THB
      const millions = thbPrice / 1000000
      return `฿${millions.toFixed(1)}M THB`
    }
  }, [preferredCurrency, currencyInfo])

  // Get currency symbol for the current language
  const getCurrencySymbol = useCallback((): string => {
    return currencyInfo?.symbol || '฿'
  }, [currencyInfo])

  // Get currency code for the current language
  const getCurrencyCode = useCallback((): string => {
    return preferredCurrency
  }, [preferredCurrency])

  // Get currency name for the current language
  const getCurrencyName = useCallback((): string => {
    return currencyInfo?.name || 'Thai Baht'
  }, [currencyInfo])

  // No need to refresh rates since they're static
  const refreshRates = useCallback(async () => {
    // No-op since we use static rates
  }, [])

  return {
    convertPrice,
    convertVillaPrice,
    getCurrencySymbol,
    getCurrencyCode,
    getCurrencyName,
    refreshRates,
    isLoading: false, // Always false
    lastUpdated: new Date(), // Always current time
    preferredCurrency,
    currencyInfo
  }
}
