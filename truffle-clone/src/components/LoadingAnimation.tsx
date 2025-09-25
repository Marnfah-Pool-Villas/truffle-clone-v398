'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LoadingAnimationProps {
  onLoadingComplete: () => void
}

export default function LoadingAnimation({ onLoadingComplete }: LoadingAnimationProps) {
  const [isClient, setIsClient] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  // Fix hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Animation sequence timing
    const timers: NodeJS.Timeout[] = []

    // Phase 1: Logo appears and scales up (0-1000ms)
    timers.push(setTimeout(() => setAnimationPhase(1), 100))

    // Phase 2: Glow effect and gentle pulse (1000-2000ms)
    timers.push(setTimeout(() => setAnimationPhase(2), 1000))

    // Phase 3: Start fade out preparation (2000-2500ms)
    timers.push(setTimeout(() => setAnimationPhase(3), 2000))

    // Phase 4: Begin fade out (2500ms)
    timers.push(setTimeout(() => {
      setIsVisible(false)
      // Complete fade out after transition
      setTimeout(() => onLoadingComplete(), 800)
    }, 2500))

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [isClient, onLoadingComplete])

  // Return null during server-side rendering to prevent hydration mismatch
  if (!isClient) {
    return null
  }

  if (!isVisible) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ease-out opacity-0 pointer-events-none`}
        style={{
          background: 'linear-gradient(135deg, #ede5d9 0%, #f5f1ea 50%, #ede5d9 100%)'
        }}
      />
    )
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, #ede5d9 0%, #f5f1ea 50%, #ede5d9 100%)'
      }}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#b48828]/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Central logo container */}
      <div className="relative flex flex-col items-center">
        {/* Luxury glow background */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            animationPhase >= 2 ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(180,136,40,0.15) 0%, rgba(180,136,40,0.05) 50%, transparent 100%)',
            filter: 'blur(40px)',
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%'
          }}
        />

        {/* Logo with sophisticated animations */}
        <div
          className={`relative transition-all duration-1000 ease-out ${
            animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            transform: `scale(${animationPhase >= 2 ? '1.05' : '1'}) rotate(${animationPhase >= 2 ? '2deg' : '0deg'})`,
            filter: animationPhase >= 2 ? 'drop-shadow(0 0 30px rgba(180,136,40,0.3))' : 'none'
          }}
        >
          <Image
            src="/leafy.jpg"
            alt="Marnfah Pool Villas"
            width={120}
            height={120}
            className={`object-contain transition-all duration-1000 ${
              animationPhase >= 2 ? 'animate-pulse' : ''
            }`}
            style={{
              filter: 'brightness(1.1) contrast(1.1)'
            }}
            priority
          />
        </div>

        {/* Elegant loading text */}
        <div
          className={`mt-8 text-center transition-all duration-1000 ease-out ${
            animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-2xl font-light text-[#264f28] mb-2 tracking-wide">
            MARNFAH
          </h2>
          <p className="text-sm text-[#264f28]/70 tracking-wider uppercase">
            Luxury Pool Villas
          </p>

          {/* Sophisticated loading dots */}
          <div className="flex justify-center mt-6 space-x-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="w-2 h-2 bg-[#b48828] rounded-full animate-pulse"
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtle ring animation around logo */}
        <div
          className={`absolute inset-0 border border-[#b48828]/20 rounded-full transition-all duration-2000 ease-out ${
            animationPhase >= 2 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}
          style={{
            width: '180px',
            height: '180px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Premium overlay fade */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          animationPhase >= 3 ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'
        }`}
      />
    </div>
  )
}
