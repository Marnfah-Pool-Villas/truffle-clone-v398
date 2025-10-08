'use client'

import { useState } from 'react'
import { useT } from '@/lib/useTranslation'

export default function VirtualTourSection() {
  const t = useT()
  const [selectedVilla, setSelectedVilla] = useState<string | null>(null)
  const [currentRoom, setCurrentRoom] = useState(0)
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false)

  const villas = [
    {
      id: 'type1',
      name: t.virtualTour.villas.type1.name,
      price: '$2.8M USD',
      status: t.virtualTour.villas.type1.status,
      description: t.virtualTour.villas.type1.description,
      image: '/int.JPG',
      rooms: [
        { name: t.virtualTour.villas.type1.rooms.living, image: '/villa2.jpg', hotspots: 3 },
        { name: t.virtualTour.villas.type1.rooms.master, image: '/villa1.jpg', hotspots: 2 },
        { name: t.virtualTour.villas.type1.rooms.pool, image: '/villa5.jpg', hotspots: 4 },
        { name: t.virtualTour.villas.type1.rooms.kitchen, image: '/villa3.jpg', hotspots: 2 },
        { name: t.virtualTour.villas.type1.rooms.terrace, image: '/villa4.jpg', hotspots: 3 }
      ]
    },
    {
      id: 'type2',
      name: t.virtualTour.villas.type2.name,
      price: '$3.2M USD',
      status: t.virtualTour.villas.type2.status,
      description: t.virtualTour.villas.type2.description,
      image: '/inttt.JPG',
      rooms: [
        { name: t.virtualTour.villas.type2.rooms.living, image: '/villa3.jpg', hotspots: 4 },
        { name: t.virtualTour.villas.type2.rooms.master, image: '/villa1.jpg', hotspots: 3 },
        { name: t.virtualTour.villas.type2.rooms.pool, image: '/villa5.jpg', hotspots: 5 },
        { name: t.virtualTour.villas.type2.rooms.kitchen, image: '/villa2.jpg', hotspots: 3 },
        { name: t.virtualTour.villas.type2.rooms.garden, image: '/villa4.jpg', hotspots: 2 }
      ]
    },
    {
      id: 'type3',
      name: t.virtualTour.villas.type3.name,
      price: '$2.4M USD',
      status: t.virtualTour.villas.type3.status,
      description: t.virtualTour.villas.type3.description,
      image: '/intt.JPG',
      rooms: [
        { name: t.virtualTour.villas.type3.rooms.living, image: '/villa4.jpg', hotspots: 2 },
        { name: t.virtualTour.villas.type3.rooms.master, image: '/villa1.jpg', hotspots: 3 },
        { name: t.virtualTour.villas.type3.rooms.pool, image: '/villa5.jpg', hotspots: 4 },
        { name: t.virtualTour.villas.type3.rooms.kitchen, image: '/villa3.jpg', hotspots: 2 },
        { name: t.virtualTour.villas.type3.rooms.garden, image: '/villa2.jpg', hotspots: 3 }
      ]
    }
  ]

  const startVirtualTour = (villaId: string) => {
    setSelectedVilla(villaId)
    setCurrentRoom(0)
    setIsVirtualTourOpen(true)
  }

  const closeVirtualTour = () => {
    setIsVirtualTourOpen(false)
    setSelectedVilla(null)
    setCurrentRoom(0)
  }

  const villaDetails: Record<string, string> = {
    type1: '5 Bed - 6 Bath - 592 sqm.',
    type2: '4 Bed - 5 Bath - 457 sqm.',
    type3: '4 Bed - 5 Bath - 382.5 sqm.'
  }

  const selectedVillaData = villas.find(v => v.id === selectedVilla)

  return (
    <div className="max-w-6xl mx-auto pt-2 sm:pt-4 pb-10 sm:pb-20 px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-y-6 mb-6 text-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 text-[#b48828] font-medium mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 8.5L21 8.5L16 13L17.5 19.5L12 16L6.5 19.5L8 13L3 8.5L9.5 8.5L12 2Z"/>
            </svg>
          </div>
          <div className="relative mb-4">
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-light italic text-[#264f28] tracking-wide leading-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#264f28]/20 via-[#264f28]/10 to-transparent rounded-2xl blur-sm"></span>
                <span className="relative bg-gradient-to-r from-[#264f28] to-[#2d5a30] bg-clip-text text-transparent font-medium">
                  {t.virtualTour.title}
                </span>
              </span>
            </h1>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#b48828] to-[#d4af37] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Villa Tour Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 overflow-hidden sm:overflow-visible">
        {villas.map((villa, index) => (
          <div key={`${villa.id}-${index}`} className="relative overflow-hidden sm:overflow-visible">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border-8 border-[#b48828]/30 overflow-hidden">
              <div className="relative h-64 md:h-auto overflow-hidden" style={{ aspectRatio: '375 / 256' }}>
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-end justify-between gap-3 text-left">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold">{villa.name}</h3>
                      {villaDetails[villa.id] && (
                        <p className="text-white/90 text-sm md:text-base pb-1 relative">
                          {villaDetails[villa.id]}
                          <span
                            className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            style={{ boxShadow: '0 0 4px rgba(255, 255, 255, 0.3), 0 0 8px rgba(212, 175, 55, 0.2)' }}
                          ></span>
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      className="text-xs md:text-sm font-medium bg-white/10 hover:bg-white/20 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/30 transition-colors"
                    >
                      View Pictures ↗
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
        <div className="relative overflow-hidden sm:overflow-visible">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl border-8 border-[#b48828]/30 overflow-hidden">
            <div className="relative h-64 md:h-auto overflow-hidden" style={{ aspectRatio: '375 / 256' }}>
              <img
                src={villas[0].image}
                alt="Villa Type 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-end justify-between gap-3 text-left">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">Villa Type 4</h3>
                    <p className="text-white/90 text-sm md:text-base pb-1 relative">
                      4 Bed - 5 Bath - 353 sqm.
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        style={{ boxShadow: '0 0 4px rgba(255, 255, 255, 0.3), 0 0 8px rgba(212, 175, 55, 0.2)' }}
                      ></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-xs md:text-sm font-medium bg-white/10 hover:bg-white/20 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/30 transition-colors"
                  >
                    View Pictures ↗
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      {isVirtualTourOpen && selectedVillaData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
            {/* Tour Header */}
            <div className="bg-[#264f28] text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold">{selectedVillaData.name} - Virtual Tour</h3>
                <p className="text-white/80">{selectedVillaData.rooms[currentRoom].name}</p>
              </div>
              <button
                onClick={closeVirtualTour}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Tour Content */}
            <div className="relative h-[600px] bg-gray-100">
              {/* 360° View Simulation */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={selectedVillaData.rooms[currentRoom].image}
                  alt={selectedVillaData.rooms[currentRoom].name}
                  className="w-full h-full object-cover"
                />
                {/* Panoramic view overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

                {/* Interactive Hotspots */}
                <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#b48828] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-[#b48828] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-[#b48828] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* 360° Navigation Controls */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4 text-white">
                  <button className="hover:text-[#b48828] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18L9 12L15 6"/>
                    </svg>
                  </button>
                  <span className="text-sm">Drag to explore • Click hotspots for info</span>
                  <button className="hover:text-[#b48828] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18L15 12L9 6"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Room Navigation Sidebar */}
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-sm border-l border-gray-200 p-6 overflow-y-auto">
                <h4 className="text-lg font-semibold text-[#264f28] mb-4">Room Navigation</h4>
                <div className="space-y-3 md:space-y-4">
                  {selectedVillaData.rooms.map((room, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentRoom(index)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                        currentRoom === index
                          ? 'bg-[#264f28] text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          currentRoom === index ? 'bg-white' : 'bg-[#b48828]'
                        }`}></div>
                        <div>
                          <div className="font-medium">{room.name}</div>
                          <div className="text-xs opacity-70">{room.hotspots} interactive points</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Tour Controls */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h5 className="text-sm font-medium text-[#264f28] mb-3">Tour Controls</h5>
                  <div className="space-y-3 md:space-y-4">
                    <button className="w-full bg-[#b48828]/10 text-[#b48828] border border-[#b48828]/20 rounded-xl px-4 py-2 text-sm md:text-base hover:bg-[#b48828]/20 transition-colors">
                      Full Screen Mode
                    </button>
                    <button className="w-full bg-[#264f28]/10 text-[#264f28] border border-[#264f28]/20 rounded-xl px-4 py-2 text-sm hover:bg-[#264f28]/20 transition-colors">
                      Schedule Physical Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}
