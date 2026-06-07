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
        const progress = Math.min(1, Math.max(0, (vh - r.top) / (r.height + vh * 0.35)))
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
      className="relative py-24 md:py-36 overflow-hidden bg-primary"
    >
      {/* Water ripple backdrop */}
      <WaterRipple />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <header className="mb-20 md:mb-28">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-4">
            Our Process
          </p>
          <h2
            id="wwu-heading"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground text-balance leading-[1.1]"
          >
            Working With Us
          </h2>
          <div className="mt-5 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="mt-6 max-w-lg text-primary-foreground/60 leading-relaxed text-sm sm:text-base">
            Six clear steps from first conversation to long-term partnership —
            every stage guided by the people who care most about your time on
            the water.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Spine track */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-0.5 left-1/2 -translate-x-px timeline-spine-x"
            style={{ background: 'oklch(0.55 0.12 220 / 0.25)' }}
          >
            <div
              ref={fillRef}
              className="absolute inset-x-0 top-0 bg-accent"
              style={{ height: '0%', transition: 'none' }}
            />
          </div>

          {/* Ghost spine for scroll measurements */}
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
                    prefersReduced={prefersReduced}
                    nodeRef={(el) => { nodeRefs.current[i] = el }}
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

/* ─── Water Ripple SVG backdrop ─────────────────────────────────────── */

function WaterRipple() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 900"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Radiate from bottom-centre — like a stone dropped in water */}
      {[80, 160, 240, 320, 400, 490, 585, 685, 790, 900].map((r, i) => (
        <ellipse
          key={r}
          cx="600"
          cy="960"
          rx={r * 2.6}
          ry={r}
          fill="none"
          stroke="oklch(0.55 0.12 220)"
          strokeWidth="0.75"
          opacity={0.06 + i * 0.012}
        />
      ))}
    </svg>
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

function TimelineRow({ stage, isLeft, isActive, prefersReduced, nodeRef }: RowProps) {
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
              <StageCard stage={stage} />
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
              <StageCard stage={stage} />
            </div>
          ) : (
            <div className="w-full" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* ── Mobile (<681px) ── */}
      <div className="flex items-start sm-timeline:hidden gap-5 pl-[1.25rem]">
        <div className="shrink-0 -translate-x-1/2 flex justify-center" style={{ width: '2.5rem' }}>
          <Node ref={nodeRef} stage={stage} isActive={isActive} />
        </div>
        <div
          className={`flex-1 transition-all duration-700 ease-out ${
            isActive ? 'opacity-100 translate-x-0' : hiddenRight
          }`}
        >
          <StageCard stage={stage} />
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
        className={`
          relative flex items-center justify-center shrink-0
          w-10 h-10 rounded-full font-mono text-xs font-bold select-none z-10
          transition-all duration-500
          ${isActive
            ? 'bg-accent text-white scale-110 shadow-[0_0_0_6px_oklch(0.55_0.12_220_/_0.18)]'
            : 'bg-primary text-primary-foreground/40 border border-accent/30 scale-100'
          }
        `}
      >
        {stage.number}
        {/* Pulse ring when active */}
        {isActive && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full animate-ping opacity-20 bg-accent"
          />
        )}
      </div>
    )
  }
)

/* ─── Card ───────────────────────────────────────────────────────────── */

function StageCard({ stage }: { stage: Stage }) {
  return (
    <article className="group w-full overflow-hidden rounded-2xl">
      {/* Full-bleed image with overlay text */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={stage.image}
          alt={stage.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 680px) 100vw, 45vw"
        />

        {/* Dark gradient scrim — text lives here */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7"
          style={{
            background:
              'linear-gradient(to top, oklch(0.12 0.03 250 / 0.92) 0%, oklch(0.12 0.03 250 / 0.55) 45%, transparent 100%)',
          }}
        >
          {/* Stage number — top-left corner badge */}
          <span
            className="absolute top-5 left-5 font-mono text-xs font-bold tracking-widest text-accent bg-primary/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-accent/30"
          >
            {stage.number}
          </span>

          {/* Title & description */}
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug text-balance mb-2">
            {stage.title}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
            {stage.description}
          </p>

          {/* Accent underline that grows on hover */}
          <div className="mt-4 h-px w-8 bg-accent transition-all duration-300 group-hover:w-16" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}
