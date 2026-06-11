'use client'

import { useEffect, useRef, useState, forwardRef } from 'react'
import Image from 'next/image'
import { BeforeAfterSlider } from '@/components/before-after-slider'

/* ─── Data ──────────────────────────────────────────────────────────── */

interface Stage {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
  slider?: {
    beforeImage: string
    afterImage: string
    beforeLabel: string
    afterLabel: string
    alt: string
  }
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Enquiry & Brief',
    description:
      'Tell us about your vision. We listen and ask the right questions to understand your needs, space constraints, and aspirations for your platform.',
    image: '/images/wwu-01-enquiry.png',
    imageAlt: 'Client and engineer discussing a brief over yacht blueprints',
  },
  {
    number: '02',
    title: 'Design & Configuration',
    description:
      'We create a custom design tailored to your vessel. Our team refines every detail—layout, dimensions, materials, and special features—until it&apos;s perfect.',
    image: '/images/wwu-02-design.png',
    imageAlt: "CAD drawings and colour samples on a marine engineer's desk",
    slider: {
      beforeImage: '/images/slider-before.png',
      afterImage: '/images/slider-after.png',
      beforeLabel: 'Design',
      afterLabel: 'Reality',
      alt: 'FunQuip Platform — Design vs Reality',
    },
  },
  {
    number: '03',
    title: 'Manufacture',
    description:
      'We build your platform with precision and care. Every component is crafted to our high standards, using quality materials and ethical practices.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-LpjjHDMVCwlZwjz6bgvvlsv60r3Phf.png',
    imageAlt: 'Technician heat-welding TPU fabric in a manufacturing facility',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Your finished platform arrives ready to use. We handle logistics and ensure everything is installed and working beautifully on your yacht.',
    image: '/images/wwu-04-manufacture.png',
    imageAlt: 'Craftsperson heat-welding TPU fabric in a marine workshop',
  },
]

/* ─── Section ───────────────────────────────────────────────────────── */

// Height of the Seabob icon on the spine (px)
const SEABOB_H = 180

export function WorkingWithUsSection() {
  const spineRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const seabobRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const fill = fillRef.current
    const spine = spineRef.current
    const seabob = seabobRef.current

    if (prefersReduced) {
      setActiveIndex(STAGES.length - 1)
      if (fill) fill.style.height = '100%'
      if (seabob) seabob.style.transform = `translateY(calc(100% - ${SEABOB_H}px))`
      return
    }

    if (!fill || !spine) return
    let raf: number

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const r = spine.getBoundingClientRect()
        const vh = window.innerHeight
        const progress = Math.min(
          1,
          Math.max(0, (vh - r.top) / (r.height + vh * 0.35))
        )

        fill.style.height = `${progress * 100}%`

        // Move Seabob to the tip of the fill line
        if (seabob) {
          const spineH = r.height
          const tipPx = progress * spineH
          // Centre the seabob on the fill tip
          const offset = tipPx - SEABOB_H / 2
          seabob.style.transform = `translateY(${Math.max(0, offset)}px)`
        }

        const fillBottom = r.top + r.height * progress
        nodeRefs.current.forEach((node, i) => {
          if (!node) return
          const nr = node.getBoundingClientRect()
          if (fillBottom >= nr.top + nr.height / 2) {
            setActiveIndex((prev) => Math.max(prev, i))
          }
        })
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [prefersReduced])

  return (
    <section
      aria-labelledby="wwu-heading"
      className="relative py-24 md:py-36 overflow-hidden bg-background"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <header className="mb-20 md:mb-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-ocean">
            Our Process
          </p>
          <h2
            id="wwu-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1] text-foreground"
          >
            Working With Us
          </h2>
          <div
            aria-hidden="true"
            className="mt-5 h-px w-20 bg-border"
          />
          <p className="mt-6 max-w-lg leading-relaxed text-sm sm:text-base text-muted-foreground">
            From initial enquiry through to manufacture, here is what to expect
            when you work with us — four clear stages, guided by the people
            who designed and built your platform.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Spine track */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-border/60 timeline-spine-x"
          >
            {/* Filled portion */}
            <div
              ref={fillRef}
              className="absolute inset-x-0 top-0 bg-ocean"
              style={{ height: '0%' }}
            />

            {/* Seabob travelling down the spine */}
            <div
              ref={seabobRef}
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 top-0 z-20 will-change-transform drop-shadow-md"
              style={{ width: `${SEABOB_H * 0.50}px`, height: `${SEABOB_H}px` }}
            >
              <Image
                src="/images/seabob-topdown.png"
                alt=""
                fill
                className="object-contain"
                sizes="90px"
              />
            </div>
          </div>

          {/* Ghost spine for scroll measurement */}
          <div
            ref={spineRef}
            aria-hidden="true"
            className="absolute inset-y-0 w-0 left-1/2 timeline-spine-x"
          />

          <ol aria-label="Process stages" className="m-0 p-0 list-none">
            {STAGES.map((stage, i) => {
              const isLeft = i % 2 === 0
              const isActive = i <= activeIndex
              return (
                <li key={stage.number} className="relative pb-16 last:pb-0">
                  <TimelineRow
                    stage={stage}
                    isLeft={isLeft}
                    isActive={isActive}
                    nodeRef={(el) => { nodeRefs.current[i] = el }}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .timeline-spine-x {
            left: 1.25rem !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}

/* ─── Row ────────────────────────────────────────────────────────────── */

interface RowProps {
  stage: Stage
  isLeft: boolean
  isActive: boolean
  nodeRef: (el: HTMLDivElement | null) => void
}

function TimelineRow({ stage, isLeft, isActive, nodeRef }: RowProps) {
  const hiddenLeft = 'opacity-0 -translate-x-10'
  const hiddenRight = 'opacity-0 translate-x-10'

  return (
    <>
      {/* Desktop (≥681px) */}
      <div className="hidden sm-timeline:flex items-center">
        <div className="flex-1 pr-10 flex justify-end">
          {isLeft ? (
            <div
              className={`w-full transition-all duration-700 ease-out ${
                isActive ? 'opacity-100 translate-x-0' : hiddenLeft
              }`}
            >
              <StageCard stage={stage} isActive={isActive} />
            </div>
          ) : (
            <div className="w-full" aria-hidden="true" />
          )}
        </div>

        <div className="shrink-0 flex justify-center" style={{ width: '2.5rem' }}>
          <Node ref={nodeRef} stage={stage} isActive={isActive} />
        </div>

        <div className="flex-1 pl-10">
          {!isLeft ? (
            <div
              className={`w-full transition-all duration-700 ease-out ${
                isActive ? 'opacity-100 translate-x-0' : hiddenRight
              }`}
            >
              <StageCard stage={stage} isActive={isActive} />
            </div>
          ) : (
            <div className="w-full" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Mobile (<681px) */}
      <div className="flex items-start sm-timeline:hidden gap-5 pl-[1.25rem]">
        <div
          className="shrink-0 -translate-x-1/2 flex justify-center"
          style={{ width: '2.5rem' }}
        >
          <Node ref={nodeRef} stage={stage} isActive={isActive} />
        </div>
        <div
          className={`flex-1 transition-all duration-700 ease-out ${
            isActive ? 'opacity-100 translate-x-0' : hiddenRight
          }`}
        >
          <StageCard stage={stage} isActive={isActive} />
        </div>
      </div>
    </>
  )
}

/* ─── Node ───────────────────────────────────────────────────────────── */

const Node = forwardRef<HTMLDivElement, { stage: Stage; isActive: boolean }>(
  function Node({ stage, isActive }, ref) {
    return (
      <div
        ref={ref}
        aria-label={`Stage ${stage.number}`}
        className="relative flex items-center justify-center shrink-0 w-9 h-9 rounded-full font-mono text-xs font-bold select-none z-10 transition-all duration-500"
        style={
          isActive
            ? {
                background: 'var(--color-ocean)',
                color: '#fff',
                boxShadow: '0 0 0 4px hsl(var(--background)), 0 0 0 6px var(--color-ocean)',
                transform: 'scale(1.1)',
              }
            : {
                background: 'var(--background)',
                color: 'var(--color-ocean)',
                border: '2px solid color-mix(in oklch, var(--color-ocean) 40%, transparent)',
                transform: 'scale(1)',
              }
        }
      >
        {stage.number}
      </div>
    )
  }
)

/* ─── Card ───────────────────────────────────────────────────────────── */

function StageCard({ stage, isActive }: { stage: Stage; isActive: boolean }) {
  return (
    <article
      className="group w-full rounded-xl overflow-hidden transition-shadow duration-500 border border-border/60"
      style={{
        background: 'var(--background)',
        boxShadow: isActive
          ? '0 8px 32px oklch(0.22 0.02 240 / 0.12)'
          : '0 2px 12px oklch(0.22 0.02 240 / 0.06)',
      }}
    >
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full transition-all duration-500"
        style={{
          background: isActive
            ? 'var(--color-ocean)'
            : 'color-mix(in oklch, var(--color-ocean) 25%, transparent)',
        }}
      />

      {/* Image / Interactive slider */}
      {stage.slider ? (
        <div className="relative w-full">
          <BeforeAfterSlider
            beforeImage={stage.slider.beforeImage}
            afterImage={stage.slider.afterImage}
            beforeLabel={stage.slider.beforeLabel}
            afterLabel={stage.slider.afterLabel}
            alt={stage.slider.alt}
            rounded={false}
          />
        </div>
      ) : (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={stage.image}
            alt={stage.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 680px) 100vw, 45vw"
          />
        </div>
      )}

      {/* Text */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: 'color-mix(in oklch, var(--color-ocean) 10%, transparent)',
              color: 'var(--color-ocean)',
            }}
          >
            {stage.number}
          </span>
          <div aria-hidden="true" className="flex-1 h-px bg-border" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-balance mb-2 text-foreground">
          {stage.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {stage.description}
        </p>
      </div>
    </article>
  )
}
