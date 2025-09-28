import { useT } from '@/lib/useTranslation'

export default function LocationSection() {
  const t = useT()
  return (
    <div className="bg-[#ede5d9]/15">
      <div className="max-w-6xl mx-auto pt-2 sm:pt-4 pb-10 sm:pb-16 px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-y-4 mb-6 text-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[#b48828] font-medium mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z"/>
              </svg>
            </div>
            <div className="relative mb-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm"></span>
                  <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                    {t.location.title}
                  </span>
                </span>
              </h1>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Location Stats Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-[#b48828]/20">
            <div className="text-lg font-medium text-[#264f28] mb-2">{t.location.locationStats.beaches.title}</div>
            <div className="text-sm text-[#264f28]/70">{t.location.locationStats.beaches.subtitle}</div>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-[#b48828]/20">
            <div className="text-lg font-medium text-[#264f28] mb-2">{t.location.locationStats.golf.title}</div>
            <div className="text-sm text-[#264f28]/70">{t.location.locationStats.golf.subtitle}</div>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-[#b48828]/20">
            <div className="text-lg font-medium text-[#264f28] mb-2">{t.location.locationStats.schools.title}</div>
            <div className="text-sm text-[#264f28]/70">{t.location.locationStats.schools.subtitle}</div>
          </div>
        </div>

      </div>
    </div>
  )
}
