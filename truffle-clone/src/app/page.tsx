'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PropertiesSection from '@/components/PropertiesSection'
import AmenitiesSection from '@/components/AmenitiesSection'
import ExclusiveSection from '@/components/ExclusiveSection'
import ContactForm from '@/components/ContactForm'
import ContactFooter from '@/components/ContactFooter'
import PageTransition from '@/components/PageTransition'
import LoadingAnimation from '@/components/LoadingAnimation'
import MouseParticles from '@/components/MouseParticles'
import { useT } from '@/lib/useTranslation'

export default function Home() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const t = useT()

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true)
  }

  return (
    <div className="antialiased" style={{ margin: 0, padding: 0 }}>
      {/* Show loading animation first */}
      {!isLoadingComplete && (
        <LoadingAnimation onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Main content - show only after loading is complete */}
      <div className={`transition-opacity duration-500 ${isLoadingComplete ? 'opacity-100' : 'opacity-0'}`} style={{ height: 'auto', minHeight: 'auto' }}>
        <MouseParticles />
        <Navigation />
        <PageTransition>
          <main className="w-full overflow-hidden" style={{ margin: 0, padding: 0 }}>
            <div className="relative w-full" style={{ margin: 0, padding: 0 }}>
              <HeroSection />
              {/* View Brochure Button - positioned between hero and properties */}
              <div className="w-full flex justify-center mt-1 md:mt-6 lg:mt-12 xl:mt-15 mb-6 md:mb-10 lg:mb-12">
                <Link
                  href="/brochure"
                  className="px-16 md:px-20 py-4 md:py-5 rounded-2xl bg-[#b48828]/10 text-[#b48828] border border-[#b48828]/20 transition-all duration-300 whitespace-nowrap hover:bg-[#b48828]/20 hover:scale-105 text-lg md:text-xl font-medium inline-flex items-center justify-center"
                >
                  {t.exclusive.buttonText}
                </Link>
              </div>
              <section id="properties">
                <PropertiesSection />
              </section>
              <section id="amenities">
                <AmenitiesSection />
              </section>
              <ExclusiveSection />
              <section id="contact" className="pt-6 sm:pt-6 md:pt-8 lg:pt-12 px-4 sm:px-6" style={{ margin: 0, paddingBottom: 0, minHeight: 'auto' }}>
                <ContactForm />
              </section>
              {/* Spacing between contact form and footer */}
              <div className="h-10 sm:h-12"></div>
              <ContactFooter />
            </div>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}
