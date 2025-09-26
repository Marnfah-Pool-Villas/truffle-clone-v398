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
      href: 'https://wa.me/66635517979',
      buttonClass: 'bg-[#25D366] hover:bg-[#1ebe5d] border border-[#1ebe5d] text-white focus-visible:outline-[#d5ffe5] focus-visible:outline-offset-4',
      icon: (
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="w-7 h-7 sm:w-9 sm:h-9"
          fill="currentColor"
        >
          <path d="M16.019 0C7.168 0 0 7.168 0 16.019c0 2.818.744 5.577 2.154 8.006L0 32l8.188-2.136a16.02 16.02 0 1 0 7.83-29.864zM25.474 22.909c-.403 1.156-2.36 2.193-3.22 2.347-.82.123-1.874.175-3.017-.187-.693-.22-1.578-.508-2.713-1.015-4.78-2.073-7.893-6.865-8.137-7.185-.244-.319-1.942-2.592-1.942-4.95 0-2.357 1.228-3.501 1.662-3.983.433-.48.95-.6 1.266-.6.316 0 .633 0 .909.018.29.017.68-.11 1.066.817.403.967 1.372 3.328 1.49 3.569.118.244.197.528.034.848-.17.316-.257.508-.484.804-.227.295-.484.553-.205 1.085.278.53 1.237 2.04 2.665 3.306 1.834 1.632 3.378 2.145 3.874 2.379.496.233.785.2 1.077-.12.295-.325 1.23-1.43 1.559-1.918.33-.487.682-.4 1.153-.244.472.156 2.986 1.408 3.5 1.661.515.252.858.379.984.59.126.21.126 1.219-.278 2.375z" />
        </svg>
      )
    },
    {
      key: 'wechat',
      label: t.footer.wechat,
      href: 'weixin://dl/chat?MarnfahVillas',
      buttonClass: 'bg-[#07C160] hover:bg-[#05a955] border border-[#05a955] text-white focus-visible:outline-[#d4ffe9] focus-visible:outline-offset-4',
      icon: (
        <svg
          viewBox="0 0 26 26"
          aria-hidden="true"
          className="w-7 h-7 sm:w-9 sm:h-9"
          fill="currentColor"
        >
          <path d="M17.498 2C13.12 2 9.492 4.81 9.492 8.479c0 1.944 1 3.633 2.614 4.872-.114.46-.4 1.644-.458 1.935l-.145.693.68-.151 1.927-.429c.914.28 1.657.427 2.573.427 4.379 0 7.998-3.81 7.998-8.478C25.68 5.81 21.876 2 17.498 2zm-4.176 3.206c.431 0 .78.352.78.785 0 .434-.349.786-.78.786-.433 0-.782-.352-.782-.786 0-.433.35-.785.782-.785zm8.254 4.098c-.433 0-.782-.352-.782-.785 0-.434.35-.786.782-.786.432 0 .78.352.78.786 0 .433-.35.785-.78.785zm-2.747 0c-.431 0-.782-.352-.782-.785 0-.434.35-.786.782-.786.433 0 .782.352.782.786 0 .433-.349.785-.782.785zm-5.62 3.12c-4.378 0-7.997 3.81-7.997 8.478 0 2.264 1.092 4.209 2.96 5.567-.124.482-.466 1.725-.531 2.031l-.16.724.713-.158 1.969-.438c.933.291 1.673.443 2.586.443 4.378 0 7.997-3.81 7.997-8.478 0-4.668-3.804-8.369-7.997-8.369zm-4.175 3.103c.431 0 .78.352.78.785 0 .434-.349.786-.78.786-.433 0-.782-.352-.782-.786 0-.433.35-.785.782-.785zm-2.747 0c.432 0 .782.352.782.785 0 .434-.35.786-.782.786-.433 0-.782-.352-.782-.786 0-.433.349-.785.782-.785zm7.075 5.589H9.618c-.432 0-.782-.353-.782-.786 0-.432.35-.785.782-.785h4.76c.432 0 .782.353.782.785 0 .433-.35.786-.782.786zm-2.559-2.356H9.618c-.432 0-.782-.352-.782-.785 0-.434.35-.786.782-.786h1.97c.432 0 .782.352.782.786 0 .433-.35.785-.782.785z" />
        </svg>
      )
    },
    {
      key: 'line',
      label: t.footer.line,
      href: 'https://line.me/ti/p/MarnfahPoolVillas',
      buttonClass: 'bg-[#00B900] hover:bg-[#009900] border border-[#009900] text-white focus-visible:outline-[#d6ffd6] focus-visible:outline-offset-4',
      icon: (
        <svg
          viewBox="0 0 22 24"
          aria-hidden="true"
          className="w-7 h-7 sm:w-9 sm:h-9"
          fill="currentColor"
        >
          <path d="M19.5 0h-15C1.121 0 0 1.121 0 2.5v15C0 18.879 1.121 20 2.5 20H6l4 4v-4h9.5c1.379 0 2.5-1.121 2.5-2.5v-15C22 1.121 20.879 0 19.5 0zM7.958 12H6.333V8.75h-1v3.25H3.708V6.75h4.25v5.25zm3.541 0H9.792V6.75h1.707v5.25zm4.75 0-2.041-2.938V12H12.5V6.75h1.708l2.041 2.938V6.75h1.707V12zm3.75-3.167h-1.458V12H17.75V6.75H22v2.083z" />
        </svg>
      )
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
          <div className="flex flex-col items-end gap-2 sm:gap-3">
            {contactOptions.map(option => (
              <a
                key={option.key}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  hapticFeedback.light()
                  setIsContactMenuOpen(false)
                }}
                className={`inline-flex items-center justify-center rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 w-16 h-16 sm:w-[72px] sm:h-[72px] ${option.buttonClass}`}
                aria-label={option.label}
              >
                <span className="sr-only">{option.label}</span>
                {option.icon}
              </a>
            ))}
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
