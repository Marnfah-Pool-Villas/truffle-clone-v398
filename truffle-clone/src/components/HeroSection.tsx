'use client'

import { useT } from '@/lib/useTranslation'



export default function HeroSection() {
  const t = useT()

  return (
    <div className="flex flex-col items-center w-full">
      <div className="h-[500px] md:h-[calc(100vh-1rem)] lg:h-screen w-full flex-shrink-0 flex justify-center items-center relative overflow-hidden mt-0 md:mt-0 pb-0 md:pb-0">
        {/* Hero image container with full height and rounded border - DOUBLED HEIGHT */}
        <div className="absolute inset-4 md:inset-4 h-[calc(100%-2rem)] md:h-auto border-8 border-[#b48828]/30 overflow-hidden rounded-[32px]">
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

        {/* Content overlay - Fixed sizes for all screens */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center z-20"
          style={{
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'calc(100% - 2rem)',
            maxWidth: '900px'
          }}
        >
          <div className="flex items-center flex-col w-full text-center gap-3 md:gap-4 lg:gap-6">
            <div className="w-full flex flex-col items-center gap-2 md:gap-3">
              {/* Leafy logo - Dynamic responsive size using viewport units */}
              <img
                src="/leafy.jpg"
                alt="Marnfah Pool Villas Logo"
                className="w-auto max-h-[120px] md:max-h-[15vh] lg:max-h-[18vh] object-contain"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                }}
              />

              {/* Custom branded text - Dynamic responsive size using viewport and container width */}
              <img
                src="/text.webp"
                alt="Marnfah Pool Villas"
                className="w-[85%] max-w-[600px] md:w-[75%] md:max-w-[700px] lg:w-[70%] lg:max-w-[800px] h-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                }}
              />
            </div>
            <div className="relative w-full px-4 md:px-6 lg:px-8">
              <p
                className="text-white text-center font-medium text-[clamp(14px,3.5vw,16px)] md:text-[clamp(18px,2vw,24px)] lg:text-[clamp(20px,1.8vw,28px)]"
                style={{
                  WebkitTextStroke: '0.1px #d4af37',
                  textShadow: '0 0 0.5px #d4af37',
                  lineHeight: '1.6'
                }}
              >
                <span className="block mb-2 md:mb-3">{t.hero.subtitle11}</span>
                <span className="block">{t.hero.subtitle1}</span>
                <span className="block">{t.hero.subtitle2}</span>
                <span className="block">{t.hero.subtitle3}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
