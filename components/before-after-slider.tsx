'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  alt?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = 'Before and after comparison',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    }
    const handleMouseUp = () => {
      isDragging.current = false
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }, [updatePosition])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      updatePosition(e.touches[0].clientX)
    }
    const handleTouchEnd = () => {
      isDragging.current = false
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }

    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden select-none cursor-col-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After Image (base layer) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`${alt} - ${afterLabel}`}
          fill
          className="object-cover"
          priority
          draggable={false}
        />
      </div>

      {/* Before Image with soft gradient fade at the edge */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          willChange: 'clip-path',
        }}
      >
        <Image
          src={beforeImage}
          alt={`${alt} - ${beforeLabel}`}
          fill
          className="object-cover"
          priority
          draggable={false}
        />
        {/* Soft feathered edge */}
        <div
          className="absolute inset-y-0 right-0 w-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.08))',
          }}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)', willChange: 'left' }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none ring-1 ring-black/10"
        style={{ left: `${sliderPosition}%`, willChange: 'left' }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L3 10L7 16" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 4L17 10L13 16" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide pointer-events-none">
        {afterLabel}
      </div>
    </div>
  )
}
