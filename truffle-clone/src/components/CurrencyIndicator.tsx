'use client'


import { useCurrency } from '@/lib/useCurrency'

export default function CurrencyIndicator() {

  const { getCurrencyCode, getCurrencyName } = useCurrency('en')

  // Don't show indicator for Thai (base currency)
  if (getCurrencyCode() === 'THB') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-[#b48828]/20 rounded-lg px-3 py-2 shadow-lg z-40">
      <div className="flex items-center gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[#264f28] font-medium">
            Prices in {getCurrencyCode()}
          </span>
        </div>
        <span className="text-[#264f28]/60 text-xs">
          • Static rates
        </span>
      </div>
    </div>
  )
}
