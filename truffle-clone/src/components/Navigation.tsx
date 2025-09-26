'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { hapticFeedback } from '@/lib/haptics'
import { useTranslation, languageInfo } from '@/lib/useTranslation'
import type { Language } from '@/lib/translations'

export default function Navigation() {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false)

  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const contactMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage, t } = useTranslation()

  const contactOptions = [
    {
      key: 'whatsapp',
      label: t.footer.whatsapp,
      abbr: 'WA',
      href: 'https://wa.me/66635517979'
    },
    {
      key: 'wechat',
      label: t.footer.wechat,
      abbr: 'WC',
      href: 'weixin://dl/chat?MarnfahVillas'
    },
    {
      key: 'line',
      label: t.footer.line,
      abbr: 'LN',
      href: 'https://line.me/ti/p/MarnfahPoolVillas'
    }
  ] as const

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
      if (contactMenuRef.current && !contactMenuRef.current.contains(event.target as Node)) {
        setIsContactMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageSelect = (selectedLang: { code: Language; name: string; currency: string }) => {
    console.log('Language selected:', selectedLang.code)
    hapticFeedback.selection()

    // Close dropdown immediately
    setIsLanguageDropdownOpen(false)

    // Change language after a small delay to ensure dropdown closes first
    setTimeout(() => {
      setLanguage(selectedLang.code).then(() => {
        console.log('Language changed successfully to:', selectedLang.code)
      }).catch((error) => {
        console.error('Failed to change language:', error)
      })
    }, 100)
  }

  // (Removed Home navigation helper)

  // Page transition with elegant animation
  const handlePageTransition = (href: string) => {
    if (pathname === href) return

    setIsTransitioning(true)

    // Add fade out effect
    document.body.style.opacity = '0.7'
    document.body.style.transition = 'opacity 0.3s ease-in-out'

    setTimeout(() => {
      router.push(href)
    }, 150)
  }

  // Reset transition state on route change
  useEffect(() => {
    const handleRouteComplete = () => {
      setIsTransitioning(false)
      setIsContactMenuOpen(false)
      document.body.style.opacity = '1'
    }

    handleRouteComplete()
  }, [pathname])

  return (
    <>
      <nav className="relative w-full z-30 pt-1 md:pt-2 pb-0 transition-all duration-300">
      <div className="px-2 sm:px-3 md:w-full md:px-6 lg:px-16 xl:px-20">
        <div className="relative flex justify-center items-center h-24 md:h-28 w-full md:justify-between">
          {/* Mobile layout: Logo moved 0.5cm left from hero border edge */}
          <Link href="/" onClick={() => hapticFeedback.light()} className="flex items-center md:hidden absolute left-1">
            <Image
              src="/leafy.jpg"
              alt="Marneah Pool Villas"
              width={160}
              height={96}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop layout: Logo + buttons grouped - moved further left */}
          <div className="hidden md:flex items-center gap-x-1 lg:gap-x-2" style={{ transform: 'translateX(-28px)' }}>
            <Link href="/" onClick={() => hapticFeedback.light()} className="flex items-center">
              <Image
                src="/leafy.jpg"
                alt="Marneah Pool Villas"
                width={160}
                height={96}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            <div className="flex items-center gap-x-1 lg:gap-x-2">
              <Link
                href="/map"
                onClick={() => hapticFeedback.light()}
                className="hidden md:flex text-[#264f28] font-medium hover:text-[#b48828] transition-all duration-300 hover:scale-105 hover:drop-shadow-md transform px-2 lg:px-3 py-2.5 lg:py-4 rounded-lg hover:bg-[#b48828]/5 text-lg lg:text-xl items-center gap-1"
              >
                <span>{t.nav.map?.replace(' ↗', '') ?? 'Map'}</span>
                <span className="text-xl lg:text-2xl">↗</span>
              </Link>
              <Link
                href="/view"
                onClick={() => hapticFeedback.light()}
                className="hidden md:flex text-[#264f28] font-medium hover:text-[#b48828] transition-all duration-300 hover:scale-105 hover:drop-shadow-md transform px-2 lg:px-3 py-2.5 lg:py-4 rounded-lg hover:bg-[#b48828]/5 text-lg lg:text-xl items-center gap-1"
              >
                <span>{t.nav.location.replace(' ↗', '')}</span>
                <span className="text-xl lg:text-2xl">↗</span>
              </Link>
              <Link
                href="/capital"
                onClick={() => hapticFeedback.light()}
                className="hidden md:flex text-[#264f28] font-medium hover:text-[#b48828] transition-all duration-300 hover:scale-105 hover:drop-shadow-md transform px-2 lg:px-3 py-2.5 lg:py-4 rounded-lg hover:bg-[#b48828]/5 text-lg lg:text-xl items-center gap-1"
              >
                <span>{t.nav.wealth.replace(' ↗', '')}</span>
                <span className="text-xl lg:text-2xl">↗</span>
              </Link>
            </div>
          </div>

          {/* Mobile navigation buttons - moved 0.5cm left with equal sizing and minimal spacing, then adjusted */}
          <div className="flex items-center gap-x-0.5 md:hidden absolute left-16 ml-1 rounded-sm px-0.5 py-0.5" style={{ marginLeft: '-0.03cm' }}>
            <Link
              href="/map"
              onClick={() => hapticFeedback.light()}
              className="text-[#264f28] font-medium hover:text-[#b48828] transition-all duration-300 hover:scale-105 hover:drop-shadow-md transform px-2.5 py-1.5 rounded-md hover:bg-[#b48828]/5 text-base flex flex-col items-center w-16 h-16"
            >
              <span className="text-lg">↗</span>
              <span className={`font-medium ${language === 'en' ? 'text-base' : language === 'ru' ? 'text-xs' : language === 'ja' ? 'text-sm' : 'text-base'}`}>{t.nav.map?.replace(' ↗', '') ?? 'Map'}</span>
            </Link>
            <Link
              href="/view"
              onClick={() => hapticFeedback.light()}
              className="text-[#264f28] font-medium hover:text-[#b48828] transition-all duration-300 hover:scale-105 hover:drop-shadow-md transform px-2.5 py-1.5 rounded-md hover:bg-[#b48828]/5 text-base flex flex-col items-center w-16 h-16"
            >
              <span className="text-lg">↗</span>
              <span className={`font-medium ${language === 'en' ? 'text-base' : language === 'ru' ? 'text-xs' : language === 'ja' ? 'text-sm' : 'text-base'}`}>{t.nav.location.replace(' ↗', '')}</span>
            </Link>
            <Link
              href="/capital"
              onClick={() => hapticFeedback.light()}
              className="text-[#264f28] font-medium hover:text-[#b48828] transition-all duration-300 hover:scale-105 hover:drop-shadow-md transform px-2.5 py-1.5 rounded-md hover:bg-[#b48828]/5 text-base flex flex-col items-center w-16 h-16"
            >
              <span className="text-lg">↗</span>
              <span className={`font-medium ${language === 'en' ? 'text-base' : language === 'ru' ? 'text-xs' : language === 'ja' ? 'text-sm' : 'text-base'}`}>{t.nav.wealth.replace(' ↗', '')}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden absolute right-4" style={{ zIndex: 40 }}>
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => {
                  hapticFeedback.light()
                  setIsLanguageDropdownOpen(prev => !prev)
                }}
                type="button"
                className="relative flex w-16 items-center justify-center py-2.5 rounded-xl bg-[#b48828]/10 text-[#b48828] border border-[#b48828]/20 transition-all duration-300 group cursor-pointer hover:bg-[#b48828]/20 hover:scale-[1.02] transform hover:shadow-md h-16"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b48828"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <>
                  {/* Mobile backdrop */}
                  <div
                    className="fixed inset-0 md:hidden"
                    style={{ zIndex: 50 }}
                    onClick={() => setIsLanguageDropdownOpen(false)}
                  />
                  <div
                    className="absolute top-full mt-2 w-32 rounded-xl border border-[#b48828]/20 bg-[#b48828]/60 shadow-2xl max-h-[70vh] overflow-y-auto"
                    style={{
                      right: '-32px', // Centers dropdown between language and contact buttons
                      zIndex: 51
                    }}
                  >
                    <div className="p-2">
                      {languageInfo.map((lang, index) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            console.log('Mobile language clicked:', lang.code)
                            handleLanguageSelect(lang)
                          }}
                          onTouchEnd={(e) => {
                            e.preventDefault()
                            console.log('Mobile touch language:', lang.code)
                            handleLanguageSelect(lang)
                          }}
                          type="button"
                          className={`w-full py-2 hover:bg-[#b48828]/10 border border-[#b48828]/20 ${index === 0 ? 'border-t-0' : ''} ${index < languageInfo.length - 1 ? 'border-b-white/20' : ''} rounded text-white font-medium transition-all duration-200 flex items-center justify-center text-sm active:bg-[#b48828]/30`}
                          style={{
                            backgroundColor: language === lang.code ? 'rgba(180, 136, 40, 0.2)' : 'transparent',
                            marginBottom: index < languageInfo.length - 1 ? '4px' : '0px',
                            WebkitTapHighlightColor: 'transparent',
                            touchAction: 'manipulation'
                          }}
                        >
                          <span className="inline-flex items-center justify-center gap-2">
                            <span aria-hidden className="text-base leading-none">{lang.currency}</span>
                            <span>{lang.name}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop language menu - moved further right */}
          <div className="hidden md:flex items-center gap-4" style={{ transform: 'translateX(40px)' }}>
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => {
                  hapticFeedback.light()
                  setIsLanguageDropdownOpen(prev => !prev)
                }}
                type="button"
                className="relative flex w-[60px] items-center justify-center h-[60px] rounded-2xl bg-[#b48828]/10 text-[#b48828] border border-[#b48828]/20 transition-all duration-300 group cursor-pointer hover:bg-[#b48828]/20 hover:scale-[1.02] transform hover:shadow-md"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b48828"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </button>

              {/* Language Dropdown Menu - Desktop Only */}
              {isLanguageDropdownOpen && (
                <div
                  className="absolute top-full mt-2 left-0 w-36 rounded-xl border border-[#b48828]/20 bg-[#b48828]/60 shadow-2xl overflow-hidden z-[99999]"
                >
                  <div className="p-2">
                    {languageInfo.map((lang, index) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`w-full px-4 py-2 text-center bg-transparent hover:bg-[#b48828]/10 border border-[#b48828]/20 ${index === 0 ? 'border-t-0' : ''} ${index < languageInfo.length - 1 ? 'border-b-white/20' : ''} rounded text-white font-medium transition-all duration-200`}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '8px 16px',
                          backgroundColor: language === lang.code ? 'rgba(180, 136, 40, 0.2)' : 'transparent',
                          marginBottom: index < languageInfo.length - 1 ? '4px' : '0px',
                          textAlign: 'center'
                        }}
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          <span aria-hidden className="text-base leading-none">{lang.currency}</span>
                          <span>{lang.name}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
      <div
        ref={contactMenuRef}
        className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6"
      >
        {isContactMenuOpen && (
          <div className="w-56 bg-white/90 backdrop-blur-lg border border-[#264f28]/20 rounded-2xl shadow-2xl p-4 flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#264f28]/60 font-semibold">
              {t.nav.contact}
            </div>
            <a
              href="https://wa.me/66635517979"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                hapticFeedback.light()
                setIsContactMenuOpen(false)
              }}
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-[#264f28]/10 hover:bg-[#264f28]/20 border border-[#264f28]/20 transition-all duration-300 hover:scale-[1.01]"
            >
              <span className="text-sm font-medium text-[#264f28]">{t.footer.whatsapp}</span>
              <span className="text-xs text-[#264f28]/70">↗</span>
            </a>
            <a
              href="weixin://dl/chat?MarnfahVillas"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                hapticFeedback.light()
                setIsContactMenuOpen(false)
              }}
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-[#264f28]/10 hover:bg-[#264f28]/20 border border-[#264f28]/20 transition-all duration-300 hover:scale-[1.01]"
            >
              <span className="text-sm font-medium text-[#264f28]">{t.footer.wechat}</span>
              <span className="text-xs text-[#264f28]/70">↗</span>
            </a>
            <a
              href="https://line.me/ti/p/MarnfahPoolVillas"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                hapticFeedback.light()
                setIsContactMenuOpen(false)
              }}
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-[#264f28]/10 hover:bg-[#264f28]/20 border border-[#264f28]/20 transition-all duration-300 hover:scale-[1.01]"
            >
              <span className="text-sm font-medium text-[#264f28]">{t.footer.line}</span>
              <span className="text-xs text-[#264f28]/70">↗</span>
            </a>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            hapticFeedback.light()
            setIsContactMenuOpen(prev => !prev)
          }}
          className={`group inline-flex items-center justify-center rounded-full border border-[#264f28]/20 bg-[#264f28]/10 text-[#264f28] shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-[#264f28]/20 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#264f28]/40 w-16 h-16 sm:w-[72px] sm:h-[72px] ${isContactMenuOpen ? 'bg-[#264f28]/20' : ''}`}
          aria-expanded={isContactMenuOpen}
          aria-label={t.nav.contact}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
    </>
  )
}
