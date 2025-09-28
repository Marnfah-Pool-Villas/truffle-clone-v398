'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#ede5d9] px-6 py-16 text-center">
      <div className="max-w-xl space-y-6">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#b48828]/10 border border-[#b48828]/40 text-[#b48828] text-3xl">
          404
        </span>
        <h1 className="text-4xl md:text-5xl font-light text-[#264f28]">Page not found</h1>
        <p className="text-lg text-[#264f28]/70">
          The page you are looking for may have been moved or no longer exists. Please return to the homepage or explore our villas.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-[#264f28] text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            Go to homepage
          </Link>
          <Link
            href="/map"
            className="px-5 py-2.5 rounded-xl border border-[#264f28]/40 text-[#264f28] bg-white/80 backdrop-blur-sm transition-transform hover:scale-[1.02]"
          >
            View location map
          </Link>
        </div>
      </div>
    </main>
  )
}
