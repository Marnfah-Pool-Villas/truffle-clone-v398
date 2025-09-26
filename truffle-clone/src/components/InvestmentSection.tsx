import { useT } from '@/lib/useTranslation'

export default function InvestmentSection() {
  const t = useT()

  return (
    <div className="max-w-6xl mx-auto pt-2 sm:pt-4 pb-2 sm:pb-8 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-y-6 mb-6 text-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 text-[#b48828] font-medium mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z"/>
            </svg>
          </div>
          <div className="relative mb-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm"></span>
                <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                  {t.investment.title}
                </span>
              </span>
            </h1>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full"></div>
          </div>
        </div>

      </div>

      {/* Key Investment Metrics */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#b48828]/20 text-center">
          <div className="text-3xl font-bold text-[#264f28] mb-2">Up to 12%</div>
          <div className="text-[#b48828] font-medium mb-1">{t.investment.metrics.yield.title}</div>
          <div className="text-sm text-black/60">{t.investment.metrics.tax.subtitle}</div>
        </div>
      </div>

      {/* Market Analysis & Investment Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Market Analysis */}
        <div className="bg-[#264f28]/5 border border-[#264f28]/20 rounded-2xl p-6">
          <h3 className="text-2xl font-medium text-[#264f28] mb-4 flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18"/>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
            </svg>
            Market Analysis
          </h3>
          <div className="space-y-8">
            <div className="flex justify-between items-center py-3 border-b border-[#264f28]/10">
              <span className="text-black/70">{t.investment.marketAnalysis.luxuryGrowth}</span>
              <span className="font-semibold text-[#264f28]">+340%</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#264f28]/10">
              <span className="text-black/70">{t.investment.marketAnalysis.foreignInvestment}</span>
              <span className="font-semibold text-[#264f28]">+425%</span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-black/70">{t.investment.marketAnalysis.gdpGrowth}</span>
              <span className="font-semibold text-[#264f28]">+3.8%</span>
            </div>
          </div>

          {/* Beautiful Minimalist Price Chart - Smaller Size */}
          <div className="mt-4 p-4 bg-gradient-to-br from-white/80 to-[#264f28]/5 rounded-2xl border border-[#264f28]/20">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-base font-semibold text-[#264f28]">Thailand Luxury Real Estate Trends</h4>
              <span className="text-xs text-[#264f28] font-medium">2009 - 2024</span>
            </div>

            {/* Chart Container - Enhanced */}
            <div className="relative h-32 w-full">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#264f28]/60 py-1">
                <span>₿25M</span>
                <span>₿20M</span>
                <span>₿15M</span>
                <span>₿10M</span>
                <span>₿5M</span>
              </div>

              {/* Chart area */}
              <div className="ml-8 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0">
                  <div className="h-full w-full grid grid-rows-4">
                    <div className="border-b border-[#264f28]/10"></div>
                    <div className="border-b border-[#264f28]/10"></div>
                    <div className="border-b border-[#264f28]/10"></div>
                    <div className="border-b border-[#264f28]/10"></div>
                  </div>
                </div>

                {/* Price trend line - Light Green */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 128" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(38, 79, 40, 0.3)" />
                      <stop offset="100%" stopColor="rgba(38, 79, 40, 0.05)" />
                    </linearGradient>
                  </defs>

                  {/* Area under curve */}
                  <path
                    d="M0,111 L20,105 L40,100 L60,99 L80,95 L100,91 L120,80 L140,71 L160,65 L180,55 L200,45 L220,40 L240,31 L260,25 L280,19 L300,15 L300,128 L0,128 Z"
                    fill="url(#priceGradient)"
                  />

                  {/* Main trend line */}
                  <path
                    d="M0,111 L20,105 L40,100 L60,99 L80,95 L100,91 L120,80 L140,71 L160,65 L180,55 L200,45 L220,40 L240,31 L260,25 L280,19 L300,15"
                    stroke="#264f28"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="drop-shadow-sm"
                  />

                  {/* Data points */}
                  <circle cx="0" cy="111" r="2" fill="#264f28" className="drop-shadow-sm" />
                  <circle cx="60" cy="99" r="2" fill="#264f28" className="drop-shadow-sm" />
                  <circle cx="120" cy="80" r="2" fill="#264f28" className="drop-shadow-sm" />
                  <circle cx="180" cy="55" r="2" fill="#264f28" className="drop-shadow-sm" />
                  <circle cx="240" cy="31" r="2" fill="#264f28" className="drop-shadow-sm" />
                  <circle cx="300" cy="15" r="2" fill="#264f28" className="drop-shadow-sm" />
                </svg>

                {/* Key milestone markers */}
                <div className="absolute bottom-0 left-0 w-full h-full">
                  <div className="relative h-full">
                    {/* 2009 Global Crisis */}
                    <div className="absolute left-[5%] bottom-0 transform -translate-x-1/2">
                      <div className="w-px h-3 bg-[#264f28]/30 mb-1"></div>
                      <div className="text-xs text-[#264f28]/60 whitespace-nowrap transform -rotate-45 origin-bottom-left">2009</div>
                    </div>

                    {/* 2014 Political Stability */}
                    <div className="absolute left-[25%] bottom-0 transform -translate-x-1/2">
                      <div className="w-px h-3 bg-[#264f28]/30 mb-1"></div>
                      <div className="text-xs text-[#264f28]/60 whitespace-nowrap transform -rotate-45 origin-bottom-left">2014</div>
                    </div>

                    {/* 2020 COVID Impact & Recovery */}
                    <div className="absolute left-[60%] bottom-0 transform -translate-x-1/2">
                      <div className="w-px h-3 bg-[#264f28]/30 mb-1"></div>
                      <div className="text-xs text-[#264f28]/60 whitespace-nowrap transform -rotate-45 origin-bottom-left">2020</div>
                    </div>

                    {/* 2024 Current */}
                    <div className="absolute right-0 bottom-0 transform translate-x-1/2">
                      <div className="w-px h-3 bg-[#264f28] mb-1"></div>
                      <div className="text-xs text-[#264f28] font-medium whitespace-nowrap transform -rotate-45 origin-bottom-left">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart insights */}
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-white/60 rounded-lg">
                <div className="text-sm font-bold text-[#264f28]">+284%</div>
                <div className="text-xs text-[#264f28]">15-Year Growth</div>
              </div>
              <div className="p-2 bg-white/60 rounded-lg">
                <div className="text-sm font-bold text-[#264f28]">₿8.2M</div>
                <div className="text-xs text-[#264f28]">2009 Average</div>
              </div>
              <div className="p-2 bg-white/60 rounded-lg">
                <div className="text-sm font-bold text-[#264f28]">₿23.1M</div>
                <div className="text-xs text-[#264f28]">2024 Average</div>
              </div>
            </div>


          </div>
        </div>

        {/* Investment Benefits */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#b48828]/20">
          <h3 className="text-2xl font-medium text-[#264f28] mb-4 flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z"/>
            </svg>
            {t.investment.benefits.title}
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-3 pb-5 border-b border-[#264f28]/10">
              <div className="w-4 h-4 rounded-full mt-2" style={{backgroundColor: 'rgba(180, 136, 40, 0.3)'}}></div>
              <div>
                <div className="font-medium text-[#264f28] mb-1">{t.investment.benefits.items.residency.title}</div>
                <div className="text-sm text-black/60">{t.investment.benefits.items.residency.description}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-5 border-b border-[#264f28]/10">
              <div className="w-4 h-4 rounded-full mt-2" style={{backgroundColor: 'rgba(180, 136, 40, 0.3)'}}></div>
              <div>
                <div className="font-medium text-[#264f28] mb-1">{t.investment.benefits.items.tax.title}</div>
                <div className="text-sm text-black/60">{t.investment.benefits.items.tax.description}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-5 border-b border-[#264f28]/10">
              <div className="w-4 h-4 rounded-full mt-2" style={{backgroundColor: 'rgba(180, 136, 40, 0.3)'}}></div>
              <div>
                <div className="font-medium text-[#264f28] mb-1">{t.investment.benefits.items.currency.title}</div>
                <div className="text-sm text-black/60">{t.investment.benefits.items.currency.description}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-5 border-b border-[#264f28]/10">
              <div className="w-4 h-4 rounded-full mt-2" style={{backgroundColor: 'rgba(180, 136, 40, 0.3)'}}></div>
              <div>
                <div className="font-medium text-[#264f28] mb-1">{t.investment.benefits.items.management.title}</div>
                <div className="text-sm text-black/60">{t.investment.benefits.items.management.description}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-5 border-b border-[#264f28]/10">
              <div className="w-4 h-4 rounded-full mt-2" style={{backgroundColor: 'rgba(180, 136, 40, 0.3)'}}></div>
              <div>
                <div className="font-medium text-[#264f28] mb-1">{t.investment.benefits.items.lifestyle.title}</div>
                <div className="text-sm text-black/60">{t.investment.benefits.items.lifestyle.description}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full mt-2" style={{backgroundColor: 'rgba(180, 136, 40, 0.3)'}}></div>
              <div>
                <div className="font-medium text-[#264f28] mb-1">{t.investment.benefits.items.ownership.title}</div>
                <div className="text-sm text-black/60">{t.investment.benefits.items.ownership.description}</div>
              </div>
            </div>

          </div>


        </div>
      </div>

      {/* Economic Stability & Growth */}
      <div className="bg-gradient-to-r from-[#264f28]/5 to-[#b48828]/5 border border-[#b48828]/20 rounded-2xl p-6 mb-8">
        <h3 className="text-2xl font-medium text-[#264f28] mb-4 text-center">
          {t.investment.stability.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#264f28] mb-2">AAA</div>
            <div className="text-[#b48828] font-medium mb-1">{t.investment.stability.metrics.rating.title}</div>
            <div className="text-sm text-black/60">{t.investment.stability.metrics.rating.subtitle}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#264f28] mb-2">$543B</div>
            <div className="text-[#b48828] font-medium mb-1">{t.investment.stability.metrics.gdp.title}</div>
            <div className="text-sm text-black/60">{t.investment.stability.metrics.gdp.subtitle}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#264f28] mb-2">40M+</div>
            <div className="text-[#b48828] font-medium mb-1">{t.investment.stability.metrics.tourists.title}</div>
            <div className="text-sm text-black/60">{t.investment.stability.metrics.tourists.subtitle}</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-black/60 max-w-4xl mx-auto">
            {t.investment.stability.description}
          </p>
        </div>
      </div>
    </div>
  )
}
