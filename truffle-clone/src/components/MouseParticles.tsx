'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  opacity: number
  color: string
}

export default function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Luxury color palette
    const colors = ['#b48828', '#d4af37', '#264f28', '#ede5d9']

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      // Create new particles on mouse move
      if (Math.random() < 0.3) {
        createParticle(e.clientX, e.clientY)
      }
    }

    // Touch move handler for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        mouse.current.x = touch.clientX
        mouse.current.y = touch.clientY

        if (Math.random() < 0.2) {
          createParticle(touch.clientX, touch.clientY)
        }
      }
    }

    // Create particle function
    const createParticle = (x: number, y: number) => {
      const particle: Particle = {
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: 60 + Math.random() * 40,
        size: 2 + Math.random() * 4,
        opacity: 0,
        color: colors[Math.floor(Math.random() * colors.length)]
      }
      particles.current.push(particle)
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.life++
        particle.x += particle.vx
        particle.y += particle.vy

        // Fade in and out
        const lifeRatio = particle.life / particle.maxLife
        if (lifeRatio < 0.3) {
          particle.opacity = lifeRatio / 0.3
        } else if (lifeRatio > 0.7) {
          particle.opacity = (1 - lifeRatio) / 0.3
        } else {
          particle.opacity = 1
        }

        // Draw particle with glow effect
        if (particle.opacity > 0) {
          ctx.save()

          // Create gradient for glow effect
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          )
          gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 0.8 * 255).toString(16).padStart(2, '0')}`)
          gradient.addColorStop(0.4, `${particle.color}${Math.floor(particle.opacity * 0.4 * 255).toString(16).padStart(2, '0')}`)
          gradient.addColorStop(1, `${particle.color}00`)

          // Draw glow
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fill()

          // Draw core particle
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          ctx.restore()
        }

        return particle.life < particle.maxLife
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isClient])

  if (!isClient) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
