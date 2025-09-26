'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import VirtualTourSection from '@/components/VirtualTourSection'
import ContactFooter from '@/components/ContactFooter'
import PageTransition from '@/components/PageTransition'
import LoadingAnimation from '@/components/LoadingAnimation'
import MouseParticles from '@/components/MouseParticles'

export default function LocationPage() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true)
  }

  return (
    <div className="antialiased">
      {/* Show loading animation first */}
      {!isLoadingComplete && (
        <LoadingAnimation onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Main content - show only after loading is complete */}
      <div className={`transition-opacity duration-500 ${isLoadingComplete ? 'opacity-100' : 'opacity-0'}`}>
        <MouseParticles />
        <Navigation />
        <PageTransition>
          <main>
            <section className="bg-[#ede5d9]/20">
              <VirtualTourSection />
            </section>
            <LocationSection />
            <ContactFooter />
          </main>
        </PageTransition>
      </div>
    </div>
  )
}
