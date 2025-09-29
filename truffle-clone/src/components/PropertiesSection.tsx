// CACHE BUST v68 - FORCED VILLA ORDER: Tranquility (12.3M) → Serenity (18.8M) → Harmony (23.4M) THB

import { useTranslation } from '@/lib/useTranslation'

export default function PropertiesSection() {
  const { t } = useTranslation()

  return (
    <div className="w-full villa-section-no-scroll">
      <div className="bg-[#ede5d9]/50 w-full villa-section-no-scroll">
        <div className="flex flex-col gap-y-4 max-w-7xl mx-auto pt-0 pb-6 sm:pb-10 px-4 sm:px-6 villa-section-no-scroll">
          <div className="relative flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 text-[#b48828] font-medium mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z"/>
              </svg>
            </div>
            <div className="relative mb-6 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm"></span>
                  <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                    {t.properties.title}
                  </span>
                </span>
              </h1>
              <div className="absolute -top-2 left-0 md:left-0 right-0 md:right-auto mx-auto md:mx-0 w-16 h-1 bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full"></div>
            </div>
          </div>
          <div className="text-lg sm:text-xl text-[#264f28] leading-relaxed text-center md:text-left whitespace-pre-line">
            {t.properties.description}
          </div>

          {/* Villa Grid - Three columns on desktop, single column on mobile */}
          <div className="w-full space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-10 lg:space-y-0 mt-6 villa-section-no-scroll villa-container-static">
              {/* FIRST VILLA: Tranquility - CHEAPEST at ฿12.3M THB */}
              <div className="w-full group relative villa-container-static">
                {/* Glow effect behind the image */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl opacity-20 -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(237,229,217,0.8) 0%, rgba(237,229,217,0.4) 50%, rgba(237,229,217,0) 100%)',
                    filter: 'blur(30px)',
                    transform: 'scale(1.2)'
                  }}
                />
                <div className="relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-square rounded-3xl md:shadow-2xl w-full overflow-hidden border-8 border-[#b48828]/30">
                  <img
                    src="/villa4.jpg"
                    alt="Tranquility - Contemporary Pool Villa"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                    <div className="text-center md:text-left">
                      <h3 className="text-lg lg:text-xl font-semibold mb-0.5">{t.properties.villa1.name}</h3>
                      <p className="text-white/90 text-sm lg:text-base mb-1 pb-1 relative">
                        {t.properties.villa1.features}
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              style={{boxShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(212, 175, 55, 0.2)'}}></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECOND VILLA: Serenity - MIDDLE PRICE at ฿18.8M THB */}
              <div className="w-full group relative villa-container-static">
                {/* Glow effect behind the image */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl opacity-20 -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(237,229,217,0.8) 0%, rgba(237,229,217,0.4) 50%, rgba(237,229,217,0) 100%)',
                    filter: 'blur(30px)',
                    transform: 'scale(1.2)'
                  }}
                />
                <div className="relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-square rounded-3xl md:shadow-2xl w-full overflow-hidden border-8 border-[#b48828]/30">
                  <img
                    src="/villa3.jpg"
                    alt="Serenity - Modern Tropical Villa"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                    <div className="text-center md:text-left">
                      <h3 className="text-lg lg:text-xl font-semibold mb-0.5">{t.properties.villa2.name}</h3>
                      <p className="text-white/90 text-sm lg:text-base mb-1 pb-1 relative">
                        {t.properties.villa2.features}
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              style={{boxShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(212, 175, 55, 0.2)'}}></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* THIRD VILLA: Harmony - MOST EXPENSIVE at ฿23.4M THB */}
              <div className="w-full group relative villa-container-static">
                {/* Glow effect behind the image */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl opacity-20 -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(237,229,217,0.8) 0%, rgba(237,229,217,0.4) 50%, rgba(237,229,217,0) 100%)',
                    filter: 'blur(30px)',
                    transform: 'scale(1.2)'
                  }}
                />
                <div className="relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-square rounded-3xl md:shadow-2xl w-full overflow-hidden border-8 border-[#b48828]/30">
                  <img
                    src="/villa2.jpg"
                    alt="Harmony - Luxury Pool Terrace Villa"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                    <div className="text-center md:text-left">
                      <h3 className="text-lg lg:text-xl font-semibold mb-0.5">{t.properties.villa3.name}</h3>
                      <p className="text-white/90 text-sm lg:text-base mb-1 pb-1 relative">
                        {t.properties.villa3.features}
                        <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              style={{boxShadow: '0 0 8px rgba(255, 255, 255, 0.3), 0 0 16px rgba(212, 175, 55, 0.2)'}}></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
