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

const removeWidthQuery = (url: string): string => url.replace(/&width=\d+/u, '')

const FALLBACK_IMAGES: BrochureImage[] = [
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F3a964a2b72a94a3899fa444eaddd254a?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Fd79e433943024a1382ca0858218c6bbf?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Faf59ca04394e445b8aae2f7089f4dc37?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Fb32de40fc1b54393b2aae50c545dc975?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F07db7127f85249d1a543b3a561e63ace?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F05b9b8dcab944b7ab46515d8562352e4?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F0d3b33d6ad8943f5aeb1fc27d27ca103?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Ffd1b5c27aea94918a779f9915bc9f52a?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F492e9aaf524a4cbb9512c62199258efb?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Fe5f9ab2e7fd24d32b684933c677c4d9d?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F6dcbd13430e1492eae4c3f04d9ecb818?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Ff916b93693e149bcad99d86cdaa88f9e?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Faeaea1c858504ece9ee54ad3c5dfc6e0?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F897b11e2e9354328afe22e47e4e703c4?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Ff40216105f7340d590c2b2752c063e98?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F3ca55f3b39bc4de499871b4a8f16f7b6?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Fae4763bca63a4230bb8ea0e4f5a423cc?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F3867eac59d634329b0ef455431e266d2?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Fee3f37e7d3b04e838b2f0905b9083725?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F34f853a90ea34379a91a93d40545df06?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Ffc3f04c20d794de88bcaeafd2be9d113?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2F8ed078e4b5cb4b5b8910954142fc7fd4?format=webp&width=800',
  'https://cdn.builder.io/api/v1/image/assets%2Fea91dcb877424cffabd32075be7aafd0%2Fc4171d0ac7614f06b2d32c027a0a18a1?format=webp&width=800'
].map((url, index) => {
  const cleanedUrl = removeWidthQuery(url)
  return {
    src: cleanedUrl,
    alt: `Brochure Page ${index + 1}`
  }
})

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
        <div className="flex flex-col mt-8">
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
      <div className="flex flex-col mt-8">
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
            <section className="bg-[#ede5d9]/25 pt-0 sm:pt-0 lg:pt-0 pb-12 sm:pb-16 lg:pb-20">
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
