'use client'

import { useT } from '@/lib/useTranslation'



export default function HeroSection() {
  const t = useT()

  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-auto min-h-[500px] lg:min-h-[800px] xl:min-h-[900px] md:h-screen w-full flex-shrink-0 flex justify-center items-center relative overflow-hidden -mt-12 pb-0 md:mt-0 md:pb-0">
        {/* Hero image container with full height and rounded border - DOUBLED HEIGHT */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[400px] md:top-4 md:left-4 md:right-4 md:bottom-4 md:h-[calc(100vh-2rem)] md:translate-y-0 border-8 border-[#b48828]/30 overflow-hidden rounded-[32px]">
          {/* Mobile background - cropped for better mobile viewing */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat md:hidden"
            style={{
              backgroundImage: 'url("/villa5.jpg")',
              backgroundSize: 'cover', // Zoom to fill mobile screen
            }}
          />
          {/* Desktop background - full size image filling the entire container */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat hidden md:block"
            style={{
              backgroundImage: 'url("/villa5.jpg")',
              backgroundSize: 'cover', // Fill the entire container while maintaining aspect ratio
              backgroundPosition: 'center center',
            }}
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Large circular gradient background */}
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[1000px] md:h-[1000px] rounded-full opacity-40 md:opacity-70 z-10 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(237,229,217,0.9) 0%, rgba(237,229,217,0.7) 25%, rgba(237,229,217,0.5) 50%, rgba(237,229,217,0.3) 75%, rgba(237,229,217,0) 100%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Additional subtle overlay for depth with warm tones */}
        <div
          className="absolute top-1/2 left-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] rounded-full opacity-25 md:opacity-50 z-10 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(237,229,217,0.95) 0%, rgba(237,229,217,0.6) 50%, rgba(237,229,217,0) 100%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Content overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 container mx-auto gap-y-20 w-full flex flex-col justify-center items-center h-full px-4 md:px-6 z-20">
          <div className="flex items-center flex-col w-full gap-y-10 text-center">
            <div className="w-full flex flex-col items-center gap-y-6 mt-[0.5cm] md:mt-[1cm]">
              {/* Leafy logo - larger on desktop to match taller hero, moved up on mobile */}
              <img
                src="/leafy.jpg"
                alt="Marnfah Pool Villas Logo"
                className="h-28 md:h-64 lg:h-72 w-auto object-contain drop-shadow-lg"
              />

              {/* Custom branded text - larger on desktop to match taller hero */}
              <img
                src="/text.webp"
                alt="Marnfah Pool Villas"
                className="h-20 md:h-40 lg:h-44 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative w-full px-4 md:px-8 lg:px-12">
              <div>
                <p className="text-[15px] text-white text-center font-medium md:text-[22px] lg:text-[22px] xl:text-[24px]" style={{
                  WebkitTextStroke: '0.1px #d4af37',
                  textShadow: '0 0 0.5px #d4af37',
                  lineHeight: '1.6'
                }}>
                  <span className="block">{t.hero.subtitle1}</span>
                  <span className="block">{t.hero.subtitle2}</span>
                  <span className="block">{t.hero.subtitle3}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
