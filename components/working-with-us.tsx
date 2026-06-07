'use client'

import { useEffect, useRef, useState, forwardRef } from 'react'
import Image from 'next/image'

/* ─── Data ──────────────────────────────────────────────────────────── */

interface Stage {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Enquiry & Brief',
    description:
      'Tell us about your vessel, your crew, and how you use the water. We listen carefully to understand your needs before recommending a single product.',
    image: '/images/wwu-01-enquiry.png',
    imageAlt: 'Client and engineer discussing a brief over yacht blueprints',
  },
  {
    number: '02',
    title: 'Design & Configuration',
    description:
      'Our engineers configure the right platform, sea pool, or inflatable for your yacht — tailored dimensions, colours, fittings, and accessories.',
    image: '/images/wwu-02-design.png',
    imageAlt: "CAD drawings and colour samples on a marine engineer's desk",
  },
  {
    number: '03',
    title: 'Proposal & Approval',
    description:
      'You receive a detailed proposal with technical drawings and transparent pricing. We refine until every detail is right before signing off.',
    image: '/images/wwu-03-proposal.png',
    imageAlt: 'Two professionals reviewing a printed proposal document',
  },
  {
    number: '04',
    title: 'Manufacture',
    description:
      'Skilled craftspeople build your product in Europe using Marine-X TPU and certified hardware. Rigorous quality checks at every stage.',
    image: '/images/wwu-04-manufacture.png',
    imageAlt: 'Craftsperson heat-welding TPU fabric in a marine workshop',
  },
  {
    number: '05',
    title: 'Sea Trial & Delivery',
    description:
      'We arrange white-glove delivery to your marina and, where possible, join the first deployment so your crew is confident from day one.',
    image: '/images/wwu-05-seatrial.png',
    imageAlt: 'Crew deploying a swim platform from a superyacht at anchor',
  },
  {
    number: '06',
    title: 'Aftercare',
    description:
      'Our relationship continues long after delivery — service schedules, spare parts, and direct access to the team who built your product.',
    image: '/images/wwu-06-aftercare.png',
    imageAlt: 'Marine technician servicing a luxury inflatable at a marina',
  },
]

/* ─── Teak constants (must stay in sync with globals.css tokens) ──── */

// Plank stripe width + caulk seam width (px in the repeating-gradient)
const PLANK_W = 52
const CAULK_W = 4

// CSS repeating-linear-gradient that simulates a teak deck (horizontal planks)
const TEAK_BG = `repeating-linear-gradient(
  180deg,
  oklch(0.70 0.065 65) 0px,
  oklch(0.68 0.07 65) ${PLANK_W * 0.4}px,
  oklch(0.60 0.06 58) ${PLANK_W * 0.85}px,
  oklch(0.65 0.065 63) ${PLANK_W}px,
  oklch(0.22 0.02 50) ${PLANK_W}px,
  oklch(0.22 0.02 50) ${PLANK_W + CAULK_W}px
)`

/* ─── Section ───────────────────────────────────────────────────────── */

export function WorkingWithUsSection() {
  const spineRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
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

    if (prefersReduced) {
      setActiveIndex(STAGES.length - 1)
      if (fill) fill.style.height = '100%'
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
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: TEAK_BG }}
    >
      {/* Subtle dark vignette at top and bottom to anchor the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
        style={{
          background:
            'linear-gradient(to bottom, oklch(0.22 0.02 50 / 0.35), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
        style={{
          background:
            'linear-gradient(to top, oklch(0.22 0.02 50 / 0.35), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <header className="mb-20 md:mb-28">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: 'oklch(0.55 0.12 220)' }}
          >
            Our Process
          </p>
          <h2
            id="wwu-heading"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1]"
            style={{ color: 'oklch(0.18 0.03 50)' }}
          >
            Working With Us
          </h2>
          {/* Teak-style accent rule: a plank + caulk stripe */}
          <div
            aria-hidden="true"
            className="mt-5 h-[6px] w-20 rounded-sm overflow-hidden"
            style={{
              background: `repeating-linear-gradient(90deg,
                oklch(0.68 0.07 65) 0px, oklch(0.60 0.06 58) ${PLANK_W}px,
                oklch(0.22 0.02 50) ${PLANK_W}px, oklch(0.22 0.02 50) ${PLANK_W + CAULK_W}px
              )`,
            }}
          />
          <p
            className="mt-6 max-w-lg leading-relaxed text-sm sm:text-base"
            style={{ color: 'oklch(0.32 0.03 55)' }}
          >
            Six clear steps from first conversation to long-term partnership —
            every stage guided by the people who care most about your time on
            the water.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Spine track — styled as a caulking seam */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 timeline-spine-x"
            style={{
              width: '4px',
              background: 'oklch(0.22 0.02 50 / 0.55)',
            }}
          >
            {/* Fill — ocean-blue inlay threading through the deck */}
            <div
              ref={fillRef}
              className="absolute inset-x-0 top-0"
              style={{
                height: '0%',
                transition: 'none',
                background: 'oklch(0.55 0.12 220)',
                boxShadow: '0 0 8px 2px oklch(0.55 0.12 220 / 0.45)',
              }}
            />
          </div>

          {/* Ghost spine for measurements */}
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
                <li key={stage.number} className="relative pb-14 last:pb-0">
                  <TimelineRow
                    stage={stage}
                    isLeft={isLeft}
                    isActive={isActive}
                    prefersReduced={prefersReduced}
                    nodeRef={(el) => {
                      nodeRefs.current[i] = el
                    }}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Responsive spine position */}
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
  prefersReduced: boolean
  nodeRef: (el: HTMLDivElement | null) => void
}

function TimelineRow({
  stage,
  isLeft,
  isActive,
  prefersReduced,
  nodeRef,
}: RowProps) {
  const hiddenLeft = 'opacity-0 -translate-x-10'
  const hiddenRight = 'opacity-0 translate-x-10'

  return (
    <>
      {/* ── Desktop (≥681px) ── */}
      <div className="hidden sm-timeline:flex items-center">
        {/* Left column */}
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

        {/* Node */}
        <div className="shrink-0 flex justify-center" style={{ width: '2.5rem' }}>
          <Node ref={nodeRef} stage={stage} isActive={isActive} />
        </div>

        {/* Right column */}
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

      {/* ── Mobile (<681px) ── */}
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

/* ─── Node — styled as a brass deck fitting ──────────────────────────── */

const Node = forwardRef<
  HTMLDivElement,
  { stage: Stage; isActive: boolean }
>(function Node({ stage, isActive }, ref) {
  return (
    <div
      ref={ref}
      aria-label={`Stage ${stage.number}`}
      className="relative flex items-center justify-center shrink-0 w-10 h-10 rounded-full font-mono text-xs font-bold select-none z-10 transition-all duration-500"
      style={
        isActive
          ? {
              background: 'oklch(0.55 0.12 220)',
              color: 'oklch(0.98 0 0)',
              transform: 'scale(1.1)',
              boxShadow:
                '0 0 0 4px oklch(0.68 0.07 65), 0 0 0 7px oklch(0.55 0.12 220 / 0.3)',
            }
          : {
              background: 'oklch(0.22 0.02 50)',
              color: 'oklch(0.68 0.07 65)',
              border: '2px solid oklch(0.68 0.07 65 / 0.6)',
              transform: 'scale(1)',
            }
      }
    >
      {stage.number}
      {isActive && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'oklch(0.55 0.12 220 / 0.2)' }}
        />
      )}
    </div>
  )
})

/* ─── Card — document laid on teak deck ─────────────────────────────── */

function StageCard({
  stage,
  isActive,
}: {
  stage: Stage
  isActive: boolean
}) {
  return (
    <article
      className="group w-full rounded-xl overflow-hidden shadow-lg transition-shadow duration-500"
      style={{
        background: 'oklch(0.99 0.003 85)',
        boxShadow: isActive
          ? '0 8px 32px oklch(0.22 0.02 50 / 0.28)'
          : '0 2px 12px oklch(0.22 0.02 50 / 0.15)',
      }}
    >
      {/* Teak-stripe top border */}
      <div
        aria-hidden="true"
        className="h-[5px] w-full"
        style={{
          background: `repeating-linear-gradient(90deg,
            oklch(0.68 0.07 65) 0px, oklch(0.60 0.06 58) ${PLANK_W}px,
            oklch(0.22 0.02 50) ${PLANK_W}px, oklch(0.22 0.02 50) ${PLANK_W + CAULK_W}px
          )`,
        }}
      />

      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={stage.image}
          alt={stage.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 680px) 100vw, 45vw"
        />
      </div>

      {/* Text body */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: 'oklch(0.55 0.12 220 / 0.1)',
              color: 'oklch(0.45 0.10 220)',
            }}
          >
            {stage.number}
          </span>
          <div
            aria-hidden="true"
            className="flex-1 h-px"
            style={{ background: 'oklch(0.68 0.07 65 / 0.35)' }}
          />
        </div>
        <h3
          className="font-serif text-xl sm:text-2xl font-semibold leading-snug text-balance mb-2"
          style={{ color: 'oklch(0.18 0.03 50)' }}
        >
          {stage.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'oklch(0.38 0.03 55)' }}
        >
          {stage.description}
        </p>
      </div>
    </article>
  )
}
