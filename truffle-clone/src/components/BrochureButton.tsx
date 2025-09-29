'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import clsx from 'clsx'

interface BrochureButtonProps {
  children: React.ReactNode
  className?: string
}

export default function BrochureButton({ children, className }: BrochureButtonProps) {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push('/brochure')
  }, [router])

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'inline-flex items-center justify-center px-10 md:px-12 py-3 md:py-3.5 rounded-2xl bg-[#264f28]/10 text-[#264f28] border border-[#264f28]/20 transition-all duration-300 whitespace-nowrap hover:bg-[#264f28]/20 hover:border-[#264f28]/40 hover:scale-105 text-base md:text-lg font-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-[#264f28]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        className
      )}
    >
      <span className="inline-flex items-center gap-2">
        View {children}
        <span aria-hidden="true">↗</span>
      </span>
    </button>
  )
}
