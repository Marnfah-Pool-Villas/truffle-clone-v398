import { useT } from '@/lib/useTranslation'

export default function ExclusiveSection() {
  const t = useT()
  return (
    <div className="max-w-7xl mx-auto pt-0 pb-6 sm:pt-0 sm:pb-10 md:pt-0 lg:pt-20 lg:pb-20 px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-y-6 sm:gap-y-8 lg:gap-y-10 lg:gap-x-12">
      <div className="w-full lg:w-1/2 flex justify-center relative">
        {/* Glow effect behind the image */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl opacity-20 -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(237,229,217,0.8) 0%, rgba(237,229,217,0.4) 50%, rgba(237,229,217,0) 100%)',
          }}
        />
        <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden md:shadow-2xl border-8 border-[#b48828]/30">
          <img
            src="/set2/villa pic 5.webp"
            alt="Bespoke Lifestyle Design"
            className="w-full h-full object-cover"
            style={{ objectPosition: '75% center' }}
          />

        </div>
      </div>
      <div className="flex flex-col gap-y-6 w-full lg:w-1/2 h-full lg:h-[500px] xl:h-[600px] justify-center items-center md:items-start mt-0 sm:mt-0">
        <div className="inline-flex items-center gap-2 text-[#b48828] font-medium mt-0 sm:mt-[9px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z"/>
          </svg>
        </div>
        <div className="relative mb-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm"></span>
              <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                {t.exclusive.title}
              </span>
            </span>
          </h1>
          <div className="absolute -top-2 left-0 md:left-0 right-0 md:right-auto mx-auto md:mx-0 w-16 h-1 bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full"></div>
        </div>
        <div className="text-lg sm:text-xl text-[#264f28] leading-relaxed text-center md:text-left whitespace-pre-line">
          {t.exclusive.description}
        </div>
      </div>
    </div>
  )
}
