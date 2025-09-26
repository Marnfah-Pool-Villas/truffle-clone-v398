'use client'

import { useState } from 'react'
import { hapticFeedback } from '@/lib/haptics'
import { useT } from '@/lib/useTranslation'


export default function ContactForm() {
  const t = useT()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    villaOfInterest: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    hapticFeedback.success()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-y-1 text-center mb-6">
        <div className="inline-flex items-center gap-2 text-[#b48828] font-medium mb-4 justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z"/>
          </svg>
        </div>
        <div className="relative mb-3">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm"></span>
              <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                {t.contact.title}
              </span>
            </span>
          </h2>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full"></div>
        </div>
      </div>

      <div className="bg-[#ede5d9]/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#b48828]/20">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#264f28] mb-2">
                {t.contact.form.firstName}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl bg-gray-100/70 border border-gray-300/60 text-[#264f28] placeholder-[#264f28]/50 focus:outline-none focus:ring-2 focus:ring-gray-400/40 focus:border-gray-400/40 hover:bg-gray-100/90 transition-all duration-300"
                placeholder={t.contact.form.placeholders.firstName}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-[#264f28] mb-2">
                {t.contact.form.lastName}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl bg-gray-100/70 border border-gray-300/60 text-[#264f28] placeholder-[#264f28]/50 focus:outline-none focus:ring-2 focus:ring-gray-400/40 focus:border-gray-400/40 hover:bg-gray-100/90 transition-all duration-300"
                placeholder={t.contact.form.placeholders.lastName}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#264f28] mb-2">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl bg-gray-100/70 border border-gray-300/60 text-[#264f28] placeholder-[#264f28]/50 focus:outline-none focus:ring-2 focus:ring-gray-400/40 focus:border-gray-400/40 hover:bg-gray-100/90 transition-all duration-300"
              placeholder={t.contact.form.placeholders.email}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#264f28] mb-2">
              {t.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl bg-gray-100/70 border border-gray-300/60 text-[#264f28] placeholder-[#264f28]/50 focus:outline-none focus:ring-2 focus:ring-gray-400/40 focus:border-gray-400/40 hover:bg-gray-100/90 transition-all duration-300"
              placeholder={t.contact.form.placeholders.phone}
            />
          </div>

          <div>
            <label htmlFor="villaOfInterest" className="block text-sm font-medium text-[#264f28] mb-2">
              {t.contact.form.villaOfInterest}
            </label>
            <select
              id="villaOfInterest"
              name="villaOfInterest"
              required
              value={formData.villaOfInterest}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-100/70 border border-gray-300/60 text-[#264f28] focus:outline-none focus:ring-2 focus:ring-gray-400/40 focus:border-gray-400/40 hover:bg-gray-100/90 transition-all duration-300"
            >
              <option value="">{t.contact.form.placeholders.villaSelect}</option>
              <option value="all">{t.contact.form.placeholders.allVillas}</option>
              <option value="villa1">{t.contact.form.placeholders.villa1}</option>
              <option value="villa2">{t.contact.form.placeholders.villa2}</option>
              <option value="villa3">{t.contact.form.placeholders.villa3}</option>
              <option value="villa4">{t.contact.form.placeholders.villa4}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#264f28] mb-2 md:mb-3">
              {t.contact.form.message}
            </label>
            <div className="flex flex-row items-stretch gap-2 md:gap-3">
              <textarea
                id="message"
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleInputChange}
                className="flex-1 h-12 md:h-12 px-4 py-2 rounded-xl bg-gray-100/70 border border-gray-300/60 text-[#264f28] placeholder-[#264f28]/50 focus:outline-none focus:ring-2 focus:ring-gray-400/40 focus:border-gray-400/40 hover:bg-gray-100/90 transition-all duration-300 resize-none"
                placeholder={t.contact.form.placeholders.message}
              />
              <button
                type="submit"
                className="flex-none w-28 md:w-32 h-12 bg-[#264f28]/10 hover:bg-[#264f28]/20 border border-[#264f28]/20 hover:border-[#264f28]/40 rounded-xl px-4 transition-all duration-300 hover:scale-105 transform text-[#264f28] text-base font-medium flex items-center justify-center gap-3"
              >
                {t.contact.form.submit}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
