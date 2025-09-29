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
        'inline-flex items-center justify-center px-12 md:px-14 py-3 md:py-3.5 rounded-2xl bg-[#b48828]/10 text-[#b48828] border border-[#b48828]/20 transition-all duration-300 whitespace-nowrap hover:bg-[#b48828]/20 hover:scale-105 text-base md:text-lg font-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48828]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        className
      )}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        <span aria-hidden="true">↗</span>
      </span>
    </button>
  )
}
