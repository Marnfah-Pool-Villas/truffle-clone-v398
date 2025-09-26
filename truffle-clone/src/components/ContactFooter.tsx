import Link from 'next/link'
import Image from 'next/image'
import { hapticFeedback } from '@/lib/haptics'
import { useT } from '@/lib/useTranslation'



export default function ContactFooter() {
  const t = useT()
  return (
    <footer className="bg-[#b48828]/10 border-t border-[#b48828]/20 backdrop-blur-sm" style={{ margin: 0, padding: 0, minHeight: 'auto', height: 'auto' }}>
      <div className="max-w-5xl mx-auto pt-6 pb-2 px-4 sm:px-6" style={{ margin: '0 auto', minHeight: 'auto', paddingBottom: '0.5rem' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between text-[#264f28]/90 gap-y-4 sm:gap-y-0">
          <div className="flex flex-col items-center gap-2 sm:-mt-3 md:-mt-5 lg:-mt-4">
            <div className="bg-[#b48828]/20 border border-[#b48828]/30 rounded-xl px-4 py-3 hover:bg-[#b48828]/30 transition-all duration-300">
              <div className="text-[#b48828] text-base font-medium flex items-center justify-center gap-3">
                <img src="/leafy.jpg" alt="Leaf Logo" className="w-10 h-10 object-contain" />
                <span>{t.footer.exclusiveDevelopment}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <a
                href="https://wa.me/66635517979"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => hapticFeedback.light()}
                className="bg-[#264f28]/10 hover:bg-[#264f28]/20 border border-[#264f28]/20 hover:border-[#264f28]/40 rounded-l-xl px-3 py-2 transition-all duration-300 hover:scale-105 transform flex items-center justify-center group"
              >
                <span className="text-[#264f28] text-xs font-medium">{t.footer.whatsapp}</span>
              </a>
              <a
                href="weixin://dl/chat?MarnfahVillas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => hapticFeedback.light()}
                className="bg-[#264f28]/10 hover:bg-[#264f28]/20 border-y border-[#264f28]/20 hover:border-[#264f28]/40 px-3 py-2 transition-all duration-300 hover:scale-105 transform flex items-center justify-center group"
              >
                <span className="text-[#264f28] text-xs font-medium">{t.footer.wechat}</span>
              </a>
              <a
                href="https://line.me/ti/p/MarnfahPoolVillas"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => hapticFeedback.light()}
                className="bg-[#264f28]/10 hover:bg-[#264f28]/20 border border-[#264f28]/20 hover:border-[#264f28]/40 rounded-r-xl px-3 py-2 transition-all duration-300 hover:scale-105 transform flex items-center justify-center group"
              >
                <span className="text-[#264f28] text-xs font-medium">{t.footer.line}</span>
              </a>
            </div>

          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/text.webp"
              alt="Marnfah Luxury Pool Villas Pattaya"
              width={400}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAB4DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRobHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="(max-width: 768px) 300px, 400px"
              className="h-16 w-auto object-contain mb-3"
            />
            <p className="text-[#264f28]/70 text-sm">{t.footer.copyright}</p>
            {/* Tiny spacing below copyright */}
            <div className="h-2"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
