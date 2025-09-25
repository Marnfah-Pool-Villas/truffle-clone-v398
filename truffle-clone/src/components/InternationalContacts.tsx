'use client'



export default function InternationalContacts() {


  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/66635517979'
    },
    {
      name: 'WeChat',
      icon: '🗨️',
      url: 'weixin://dl/chat?MarnfahVillas'
    },
    {
      name: 'Line',
      icon: '💭',
      url: 'https://line.me/ti/p/MarnfahPoolVillas'
    }
  ]

  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <span className="text-[#264f28]/60 text-sm font-medium">Contact via:</span>
      {contactOptions.map((option) => (
        <a
          key={option.name}
          href={option.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#264f28]/10 hover:bg-[#264f28]/20 border border-[#264f28]/20 hover:border-[#264f28]/40 rounded-xl px-3 py-2 transition-all duration-300 hover:scale-105 transform hover:shadow-md flex items-center gap-2 group"
        >
          <span className="text-base group-hover:scale-110 transition-transform duration-300">
            {option.icon}
          </span>
          <span className="text-[#264f28] text-sm font-medium">{option.name}</span>
        </a>
      ))}
    </div>
  )
}
