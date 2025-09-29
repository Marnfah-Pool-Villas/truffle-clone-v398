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

export default function BrochurePage() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const [isFetchingImages, setIsFetchingImages] = useState(true)
  const [images, setImages] = useState<BrochureImage[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
        setErrorMessage(null)
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setErrorMessage('Unable to load brochure assets right now. Please refresh or try again later.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsFetchingImages(false)
        }
      }
    }

    loadImages().catch(() => {
      setErrorMessage('Unable to load brochure assets right now. Please refresh or try again later.')
      setIsFetchingImages(false)
    })

    return () => {
      controller.abort()
    }
  }, [])

  const galleryContent = useMemo(() => {
    if (isFetchingImages) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`brochure-skeleton-${index}`}
              className="h-48 sm:h-56 lg:h-64 rounded-2xl bg-[#264f28]/10 animate-pulse"
            />
          ))}
        </div>
      )
    }

    if (images.length === 0) {
      return (
        <div className="max-w-3xl mx-auto text-center mt-10 bg-white/60 border border-[#b48828]/20 rounded-2xl px-6 py-10">
          <h2 className="text-2xl font-semibold text-[#264f28] mb-3">Brochure gallery is empty</h2>
          <p className="text-[#264f28]/70 leading-relaxed">
            Upload .webp files into <code className="bg-[#b48828]/10 px-2 py-1 rounded">public/brochure</code> and refresh this page to see your brochure collection automatically.
          </p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {images.map(image => (
          <figure
            key={image.src}
            className="group relative overflow-hidden rounded-2xl border border-[#b48828]/20 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white px-4 py-3 text-sm font-medium">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    )
  }, [images, isFetchingImages])

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
            <section className="bg-[#ede5d9]/25 pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <header className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center justify-center gap-2 text-[#b48828] font-medium mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z" />
                    </svg>
                    <span>Brochure Collection</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
                    <span className="relative inline-block">
                      <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm" />
                      <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                        Luxury Brochure Experience
                      </span>
                    </span>
                  </h1>
                  <p className="mt-6 text-[#264f28]/70 leading-relaxed text-base sm:text-lg">
                    Explore marketing-ready visuals crafted for discerning investors. Upload new assets and this gallery will update automatically to showcase your latest brochure imagery in full fidelity.
                  </p>
                </header>

                {errorMessage && (
                  <div className="mt-8 rounded-2xl border border-red-300 bg-red-50/80 px-4 py-3 text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

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
