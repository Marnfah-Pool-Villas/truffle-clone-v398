'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import BrochureButton from '@/components/BrochureButton'
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
              <section id="properties" className="-mt-[0.5cm]">
                <PropertiesSection />
              </section>
              <section id="amenities" className="-mt-[0.5cm]">
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
