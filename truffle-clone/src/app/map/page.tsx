'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import PageTransition from '@/components/PageTransition'
import LoadingAnimation from '@/components/LoadingAnimation'
import MouseParticles from '@/components/MouseParticles'
import ContactFooter from '@/components/ContactFooter'
import { useT } from '@/lib/useTranslation'

export default function MapPage() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const t = useT()

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true)
  }

  const highlightCardWidthClasses = 'w-full sm:w-[22rem] md:w-[24rem]'

  const highlightCards = [
    {
      title: t.location.locationStats.beaches.title,
      subtitle: t.location.locationStats.beaches.subtitle,
      iconBackground: 'bg-gradient-to-br from-[#b48828] to-[#d4af37]',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 3C8 3 5 6 5 10h14C19 6 16 3 12 3z" />
          <path d="M12 10v8" />
          <path d="M7 10C9 6 11 6 12 10" />
          <path d="M12 10C13 6 15 6 17 10" />
          <path d="M3 20h18" />
          <path d="M5 22h14" />
        </svg>
      )
    },
    {
      title: t.location.locationStats.golf.title,
      subtitle: t.location.locationStats.golf.subtitle,
      iconBackground: 'bg-gradient-to-br from-[#264f28] to-[#2d5a30]',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M10 2v18" />
          <path d="M6 20h8" />
          <path d="M10 2h2" />
          <circle cx="10" cy="2" r="1" fill="white" />
        </svg>
      )
    },
    {
      title: t.location.locationStats.schools.title,
      subtitle: t.location.locationStats.schools.subtitle,
      iconBackground: 'bg-gradient-to-br from-[#b48828] to-[#d4af37]',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    }
  ]
  type HighlightCard = (typeof highlightCards)[number]
  const renderHighlightCard = (card: HighlightCard, extraClasses = '') => (
    <div
      key={card.title}
      className={`flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-[#b48828]/20 ${highlightCardWidthClasses} ${extraClasses}`.trim()}
    >
      <div className={`w-16 h-16 ${card.iconBackground} rounded-full flex items-center justify-center mb-4`}>{card.icon}</div>
      <div className="text-lg font-semibold text-[#264f28] mb-2">{card.title}</div>
      <div className="text-sm text-[#264f28]/70">{card.subtitle}</div>
    </div>
  )

  const [primaryHighlight, ...otherHighlights] = highlightCards
  const [mapAdjacentHighlight, ...secondaryHighlights] = otherHighlights
  const isSingleSecondaryHighlight = secondaryHighlights.length === 1

  const staticMapCard = (
    <div className="relative rounded-3xl overflow-hidden border-8 border-[#b48828]/30 shadow-2xl bg-white/10 backdrop-blur-sm">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F2ab8e8c603ef4f25996b3b87dfc135eb?format=webp"
        alt="Marnfah Pool Villas location map overview"
        className="w-full h-auto object-contain transform scale-[1.009]"
        style={{ transformOrigin: 'center left' }}
      />
    </div>
  )

  const googleMapCard = (
    <div className="relative rounded-3xl overflow-hidden border-8 border-[#b48828]/30 shadow-2xl bg-white/30 backdrop-blur-sm aspect-[1980/1488]">
      <iframe
        src="https://maps.google.com/maps?q=Pattaya%20Thailand&z=12&output=embed"
        title="Pattaya Map"
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 text-[#264f28] shadow-lg">
        <span className="text-sm font-medium">12.8°N, 100.9°E</span>
      </div>
    </div>
  )

  return (
    <div className="antialiased min-h-screen">
      {!isLoadingComplete && (
        <LoadingAnimation onLoadingComplete={handleLoadingComplete} />
      )}

      <div className={`transition-opacity duration-500 ${isLoadingComplete ? 'opacity-100' : 'opacity-0'}`}>
        <MouseParticles />
        <Navigation />
        <PageTransition>
          <main>
            <section className="bg-[#ede5d9]/25 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-16">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
                  <div className="relative inline-block">
                    <div className="inline-flex items-center justify-center gap-2 text-[#b48828] font-medium mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z" />
                      </svg>
                    </div>
                    <div className="relative mb-6">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
                        <span className="relative inline-block">
                          <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm"></span>
                          <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                            {t.location.title}
                          </span>
                        </span>
                      </h1>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {primaryHighlight && (
                  <div className="flex justify-center mt-3 sm:mt-4 mb-6 sm:mb-8">
                    {renderHighlightCard(primaryHighlight, 'rounded-3xl border-2 border-[#b48828]/30')}
                  </div>
                )}

                <div className="relative mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-10">
                  <div
                    className="absolute inset-0 w-full h-full rounded-3xl opacity-20 -z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(237,229,217,0.8) 0%, rgba(237,229,217,0.4) 50%, rgba(237,229,217,0) 100%)',
                      filter: 'blur(30px)',
                      transform: 'scale(1.05)'
                    }}
                  />
                  <div className="relative rounded-3xl overflow-hidden border-8 border-[#b48828]/30 shadow-2xl bg-white/10 backdrop-blur-sm">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F2ab8e8c603ef4f25996b3b87dfc135eb?format=webp"
                      alt="Marnfah Pool Villas location map overview"
                      className="w-full h-auto object-contain transform scale-[1.009]"
                      style={{ transformOrigin: 'center left' }}
                    />
                  </div>
                </div>

                {mapAdjacentHighlight && (
                  <div className="flex justify-center mt-6 sm:mt-8">
                    {renderHighlightCard(mapAdjacentHighlight)}
                  </div>
                )}

                <div className="relative rounded-3xl overflow-hidden border-8 border-[#b48828]/30 shadow-2xl bg-white/30 backdrop-blur-sm mt-10 sm:mt-12 lg:mt-16 mb-8 sm:mb-10 aspect-[1980/1488]">
                  <iframe
                    src="https://maps.google.com/maps?q=Pattaya%20Thailand&z=12&output=embed"
                    title="Pattaya Map"
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 text-[#264f28] shadow-lg">
                    <span className="text-sm font-medium">12.8°N, 100.9°E</span>
                  </div>
                </div>

                {secondaryHighlights.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12 sm:mb-16">
                    {secondaryHighlights.map((card) => renderHighlightCard(card))}
                  </div>
                )}
              </div>
            </section>
            <ContactFooter />
          </main>
        </PageTransition>
      </div>
    </div>
  )
}
