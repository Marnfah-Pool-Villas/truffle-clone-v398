'use client'

import { useEffect, useMemo, useState } from 'react'
import Navigation from '@/components/Navigation'
import PageTransition from '@/components/PageTransition'
import LoadingAnimation from '@/components/LoadingAnimation'
import MouseParticles from '@/components/MouseParticles'
import ContactFooter from '@/components/ContactFooter'

interface BrochureImage {
  src: string
  alt: string
}

// Generate brochure images from local files (brochue-1.webp to brochue-29.webp)
const FALLBACK_IMAGES: BrochureImage[] = Array.from({ length: 29 }, (_, index) => ({
  src: `/brochure/brochue-${index + 1}.webp`,
  alt: `Brochure Page ${index + 1}`
}))

export default function BrochurePage() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const [isFetchingImages, setIsFetchingImages] = useState(true)
  const [images, setImages] = useState<BrochureImage[]>([])

  useEffect(() => {
    const controller = new AbortController()

    const loadImages = async () => {
      try {
        const response = await fetch('/api/brochure-images', { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = (await response.json()) as { images?: BrochureImage[] }
        setImages(Array.isArray(payload.images) ? payload.images : [])
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Unable to load brochure assets', error)
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsFetchingImages(false)
        }
      }
    }

    loadImages().catch(error => {
      console.error('Unable to load brochure assets', error)
      setIsFetchingImages(false)
    })

    return () => {
      controller.abort()
    }
  }, [])

  const resolvedImages = useMemo(() => {
    if (images.length > 0) {
      return [...images].sort((a, b) => a.src.localeCompare(b.src, undefined, { numeric: true, sensitivity: 'base' }))
    }
    return [...FALLBACK_IMAGES]
  }, [images])

  const galleryContent = useMemo(() => {
    if (isFetchingImages) {
      return (
        <div className="flex flex-col rounded-3xl overflow-hidden border-8 border-[#b48828]/30 mb-6 sm:mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`brochure-skeleton-${index}`}
              className="w-full aspect-[3/2] bg-[#264f28]/10 animate-pulse"
            />
          ))}
        </div>
      )
    }

    return (
      <div className="flex flex-col rounded-3xl overflow-hidden border-8 border-[#b48828]/30 mb-6 sm:mb-8">
        {resolvedImages.map(image => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto block"
            loading="lazy"
          />
        ))}
      </div>
    )
  }, [isFetchingImages, resolvedImages])

  return (
    <div className="antialiased" style={{ margin: 0, padding: 0 }}>
      {!isLoadingComplete && (
        <LoadingAnimation onLoadingComplete={() => setIsLoadingComplete(true)} />
      )}

      <div className={`transition-opacity duration-500 ${isLoadingComplete ? 'opacity-100' : 'opacity-0'}`} style={{ height: 'auto', minHeight: 'auto' }}>
        <MouseParticles />
        <Navigation />
        <PageTransition>
          <main className="w-full overflow-hidden" style={{ margin: 0, padding: 0 }}>
            <section className="bg-[#ede5d9]/25 pt-0 sm:pt-0 lg:pt-0 pb-8 sm:pb-10 lg:pb-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {galleryContent}
              </div>
            </section>
            <ContactFooter />
          </main>
        </PageTransition>
      </div>
    </div>
  )
}
