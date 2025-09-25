'use client'

import { useState } from 'react'

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Chen",
      location: "Singapore",
      villa: "The Serenity",
      purchaseYear: "2023",
      rating: 5,
      category: "Investment Success",
      review: "Purchasing The Serenity was the best investment decision we've made. In just 18 months, we've seen a 22% appreciation in value, and our rental yields consistently exceed 8%. The property management team handles everything seamlessly, making this truly passive income. The virtual tours were incredibly accurate - the villa exceeded our expectations in person.",
      highlight: "22% appreciation in 18 months",
      initials: "SC",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Dr. James Richardson",
      location: "London, UK",
      villa: "The Harmony",
      purchaseYear: "2022",
      rating: 5,
      category: "Lifestyle Transformation",
      review: "Moving to The Harmony has completely transformed our family's quality of life. The kids love the infinity pool, my wife enjoys the spa pavilion, and I've never felt more relaxed. The Thai Elite visa process was handled perfectly by the team. We're now permanent residents and couldn't be happier with Thailand's welcoming culture and incredible amenities.",
      highlight: "Complete lifestyle transformation",
      initials: "JR",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Isabella Rossi",
      location: "Milan, Italy",
      villa: "The Tranquility",
      purchaseYear: "2023",
      rating: 5,
      category: "Design & Quality",
      review: "As an architect, I'm extremely particular about design and construction quality. Marneah Pool Villas exceeded every expectation. The attention to detail, premium materials, and seamless integration with the tropical environment is remarkable. The zen gardens and minimalist design create a perfect sanctuary. This is true luxury craftsmanship.",
      highlight: "Exceptional design & craftsmanship",
      initials: "IR",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      id: 4,
      name: "Robert & Jennifer Hayes",
      location: "Sydney, Australia",
      villa: "The Serenity",
      purchaseYear: "2022",
      rating: 5,
      category: "Retirement Paradise",
      review: "After 30 years in corporate life, we wanted the perfect retirement home. The Serenity offers everything we dreamed of - stunning ocean views, world-class amenities, and a peaceful community. The concierge services make daily life effortless, and we've made wonderful friends among other villa owners. Thailand has become our true home.",
      highlight: "Perfect retirement sanctuary",
      initials: "RH",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "David Kim",
      location: "Seoul, South Korea",
      villa: "The Harmony",
      purchaseYear: "2023",
      rating: 5,
      category: "Investment & Lifestyle",
      review: "I was looking for both a sound investment and a vacation home for my family. The Harmony delivers on both fronts perfectly. The 360° virtual tours convinced me before visiting, and the actual experience was even better. Rental income covers all expenses plus profit, while we enjoy 2-3 months here annually. Highly recommended for serious investors.",
      highlight: "Perfect investment + vacation home",
      initials: "DK",
      bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "Emma Thompson",
      location: "Toronto, Canada",
      villa: "The Tranquility",
      purchaseYear: "2022",
      rating: 5,
      category: "Single Professional",
      review: "As a busy executive, I needed a peaceful escape where I could recharge. The Tranquility provides exactly that - a zen-like environment with every luxury imaginable. The property management takes care of everything, so it's always ready when I arrive. The investment returns are excellent, but the peace of mind is priceless.",
      highlight: "Ultimate executive retreat",
      initials: "ET",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ]

  const categories = [
    "All Reviews",
    "Investment Success",
    "Lifestyle Transformation",
    "Design & Quality",
    "Retirement Paradise",
    "Investment & Lifestyle",
    "Single Professional"
  ]

  const [selectedCategory, setSelectedCategory] = useState("All Reviews")

  const filteredTestimonials = selectedCategory === "All Reviews"
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory)

  const stats = [
    { label: "Average Rating", value: "4.9/5", icon: "⭐" },
    { label: "Happy Owners", value: "98%", icon: "😊" },
    { label: "Would Recommend", value: "100%", icon: "👍" },
    { label: "Repeat Investors", value: "87%", icon: "🔄" }
  ]

  return (
    <div className="max-w-6xl mx-auto py-10 sm:py-20 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-[#b48828] font-medium mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9L16.5 14.74L18.18 21.02L12 17.77L5.82 21.02L7.5 14.74L2 9L8.91 8.26L12 2Z"/>
          </svg>
          <span>Guest Testimonials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#264f28] mb-4">
          Voices of Satisfied Villa Owners
        </h1>
        <p className="text-lg text-black/60 max-w-3xl mx-auto">
          Discover what our villa owners say about their investment journey, lifestyle transformation,
          and the exceptional experience of owning a piece of paradise in Thailand.
        </p>
      </div>

      {/* Trust Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#b48828]/20 text-center">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-[#264f28] mb-1">{stat.value}</div>
            <div className="text-sm text-black/60">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-[#264f28] text-white'
                : 'bg-white/80 text-[#264f28] hover:bg-[#264f28]/10 border border-[#264f28]/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredTestimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="group cursor-pointer">
            {/* Glow effect behind the card */}
            <div
              className="absolute inset-0 w-full h-full rounded-3xl opacity-15 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(237,229,217,0.8) 0%, rgba(237,229,217,0.4) 50%, rgba(237,229,217,0) 100%)',
                filter: 'blur(30px)',
                transform: 'scale(1.2)'
              }}
            />
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-[#b48828]/20 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-[#b48828]/30 ${testimonial.bgColor}`}>
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#264f28] text-lg">{testimonial.name}</h3>
                  <p className="text-black/60 text-sm">{testimonial.location}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-[#b48828] bg-[#b48828]/10 px-2 py-1 rounded-full">
                      {testimonial.villa}
                    </span>
                    <span className="text-xs text-black/50">{testimonial.purchaseYear}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#b48828">
                      <path d="M12 2L15.09 8.26L22 9L16.5 14.74L18.18 21.02L12 17.77L5.82 21.02L7.5 14.74L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-[#264f28]">{testimonial.rating}.0</span>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-[#264f28]/10 text-[#264f28] px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.category}
                </span>
              </div>

              {/* Review */}
              <blockquote className="text-black/70 text-sm leading-relaxed mb-6 flex-1">
                "{testimonial.review}"
              </blockquote>

              {/* Highlight */}
              <div className="bg-[#b48828]/10 border border-[#b48828]/20 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#b48828">
                    <path d="M12 2L15.09 8.26L22 9L16.5 14.74L18.18 21.02L12 17.77L5.82 21.02L7.5 14.74L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                  <span className="text-[#b48828] font-medium text-sm">{testimonial.highlight}</span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                  </svg>
                  <span className="text-xs text-green-600 font-medium">Verified Owner</span>
                </div>
                <span className="text-xs text-black/40">Purchased {testimonial.purchaseYear}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Video Testimonial */}
      <div className="bg-gradient-to-r from-[#264f28]/5 to-[#b48828]/5 border border-[#b48828]/20 rounded-3xl p-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-medium text-[#264f28] mb-4">Featured Video Testimonial</h3>
          <p className="text-black/60">Watch Sarah & Michael share their villa ownership journey</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-black/10 rounded-2xl overflow-hidden relative">
            <img
              src="/villa2.jpg"
              alt="Video testimonial preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#264f28">
                  <path d="M8 5V19L19 12L8 5Z"/>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Sarah & Michael Chen</h4>
              <p className="text-white/90">"The best investment decision we've ever made"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#b48828]/20 text-center">
          <div className="w-16 h-16 bg-[#b48828]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#b48828">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-[#264f28] mb-2">Verified Reviews</h4>
          <p className="text-black/60 text-sm">All testimonials from actual villa owners with verified purchases</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#b48828]/20 text-center">
          <div className="w-16 h-16 bg-[#264f28]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#264f28">
              <path d="M12 2L15.09 8.26L22 9L16.5 14.74L18.18 21.02L12 17.77L5.82 21.02L7.5 14.74L2 9L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-[#264f28] mb-2">5-Star Experience</h4>
          <p className="text-black/60 text-sm">Consistently rated 5 stars across all review platforms</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#b48828]/20 text-center">
          <div className="w-16 h-16 bg-[#b48828]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#b48828">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"/>
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-[#264f28] mb-2">Global Community</h4>
          <p className="text-black/60 text-sm">Villa owners from 15+ countries sharing their experiences</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-[#b48828]/20">
        <h4 className="text-2xl font-medium text-[#264f28] mb-4">
          Join Our Community of Satisfied Villa Owners
        </h4>
        <p className="text-black/60 mb-6 max-w-2xl mx-auto">
          Experience the same satisfaction and success as our current villa owners.
          Schedule your private tour today and discover why 100% of our owners would recommend us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#264f28] text-[#ede5d9] hover:bg-[#264f28]/90 transition-all duration-300 hover:scale-[1.02] rounded-2xl font-medium">
            Schedule Your Villa Tour
          </button>
          <button className="px-8 py-3 bg-[#b48828]/10 text-[#b48828] border border-[#b48828]/20 hover:bg-[#b48828]/20 transition-all duration-300 rounded-2xl font-medium">
            View More Reviews
          </button>
        </div>
      </div>
    </div>
  )
}
