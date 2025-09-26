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

  const highlightCards = [
    {
      title: t.location.locationStats.beaches.title,
      subtitle: t.location.locationStats.beaches.subtitle,
    },
    {
      title: t.location.locationStats.golf.title,
      subtitle: t.location.locationStats.golf.subtitle,
    },
    {
      title: t.location.locationStats.schools.title,
      subtitle: t.location.locationStats.schools.subtitle,
    }
  ]

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
            <section className="bg-[#ede5d9]/25 py-10 sm:py-14 lg:py-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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
                  <p className="mt-6 text-base sm:text-lg text-[#264f28]/70 leading-relaxed">
                    {t.location.mapSection.description}
                  </p>
                </div>

                <div className="relative rounded-3xl overflow-hidden border-8 border-[#b48828]/30 shadow-2xl bg-white/30 backdrop-blur-sm">
                  <iframe
                    src="https://maps.google.com/maps?q=Pattaya%20Thailand&z=12&output=embed"
                    title="Pattaya Map"
                    className="w-full h-[360px] sm:h-[440px] lg:h-[540px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 text-[#264f28] shadow-lg">
                    <span className="text-sm font-medium">12.8°N, 100.9°E</span>
                  </div>
                </div>

                <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/50 backdrop-blur-md border border-[#b48828]/30 rounded-3xl px-6 py-6 sm:px-8 sm:py-8">
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-medium text-[#264f28]">{t.nav.map?.replace(' ↗', '') ?? 'Map'} Hub</h2>
                    <p className="mt-2 text-sm sm:text-base text-[#264f28]/70 max-w-xl">
                      {[t.location.stats.beaches, t.location.stats.restaurants, t.location.stats.amenities].join(' • ')}
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#264f28]/10 text-[#264f28] border border-[#264f28]/20 transition-all duration-300 hover:bg-[#264f28]/20 hover:scale-105 font-medium"
                  >
                    <span>{t.nav.contact}</span>
                    <span className="text-lg">↗</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {highlightCards.map((card) => (
                    <div key={card.title} className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-[#b48828]/20 text-center">
                      <div className="text-lg font-semibold text-[#264f28] mb-2">{card.title}</div>
                      <div className="text-sm text-[#264f28]/70">{card.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <ContactFooter />
          </main>
        </PageTransition>
      </div>
    </div>
  )
}
