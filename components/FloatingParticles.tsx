'use client'

import { useEffect, useRef } from 'react'

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Capture non‑null references for safe use inside animate()
    const canvasSafe = canvas
    const ctxSafe = ctx

    canvasSafe.width = window.innerWidth
    canvasSafe.height = window.innerHeight

    const particles: { x: number; y: number; radius: number; alpha: number; vx: number; vy: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvasSafe.width,
        y: Math.random() * canvasSafe.height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
      })
    }

    function animate() {
      ctxSafe.clearRect(0, 0, canvasSafe.width, canvasSafe.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvasSafe.width
        if (p.x > canvasSafe.width) p.x = 0
        if (p.y < 0) p.y = canvasSafe.height
        if (p.y > canvasSafe.height) p.y = 0

        ctxSafe.beginPath()
        ctxSafe.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctxSafe.fillStyle = `rgba(0, 180, 216, ${p.alpha})`
        ctxSafe.fill()
      })
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvasSafe.width = window.innerWidth
      canvasSafe.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}