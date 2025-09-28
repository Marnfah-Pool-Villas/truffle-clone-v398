'use client'

'use client'

import { useTranslation } from '@/lib/useTranslation'

interface TranslationLoadingOverlayProps {
  children: React.ReactNode
}

export default function TranslationLoadingOverlay({ children }: TranslationLoadingOverlayProps) {
  const { isLoading, loadingProgress } = useTranslation()

  if (!isLoading) {
    return <>{children}</>
  }

  return (
    <>
      {/* Loading overlay */}
      <div className="fixed inset-0 bg-[#ede5d9] z-50 flex items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 rounded-full border-4 border-[#b48828]/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#b48828] animate-spin"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#264f28] to-[#2d5a30] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Brand name */}
          <div className="mb-6">
            <h1 className="text-4xl font-light text-[#b48828] tracking-wider mb-2">MARNFAH</h1>
            <p className="text-lg text-[#264f28] font-medium">POOL VILLAS</p>
          </div>

          {/* Loading text */}
          <div className="mb-8">
            <p className="text-[#264f28]/80 text-lg mb-2">Preparing your experience...</p>
            <div className="w-64 h-2 bg-[#264f28]/10 rounded-full overflow-hidden mx-auto">
              <div
                className="h-full bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-[#264f28]/60 text-sm mt-2">{loadingProgress}%</p>
          </div>

          {/* Loading dots animation */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#b48828] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#b48828] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#b48828] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>

      {/* Render children in background (hidden) */}
      <div className="opacity-0 pointer-events-none">
        {children}
      </div>
    </>
  )
}
