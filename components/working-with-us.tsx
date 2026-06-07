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
    imageAlt: 'CAD drawings and colour samples on a marine engineer\'s desk',
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

/* ─── Component ─────────────────────────────────────────────────────── */

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
    <section aria-labelledby="wwu-heading" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        <header className="mb-16 md:mb-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            Our Process
          </p>
          <h2
            id="wwu-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance"
          >
            Working With Us
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Six clear steps from first conversation to long-term partnership — every
            stage guided by the people who care most about your time on the water.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Spine track */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-0.5 bg-border left-1/2 -translate-x-px timeline-spine-x"
          >
            <div
              ref={fillRef}
              className="absolute inset-x-0 top-0 bg-accent"
              style={{ height: '0%', transition: 'none' }}
            />
          </div>

          {/* Ghost spine for measurements */}
          <div
            ref={spineRef}
            aria-hidden="true"
            className="absolute inset-y-0 w-0 left-1/2 -translate-x-px timeline-spine-x"
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

      {/* Inline styles for responsive spine position */}
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

function TimelineRow({ stage, isLeft, isActive, prefersReduced, nodeRef }: RowProps) {
  const hiddenLeft = 'opacity-0 -translate-x-8'
  const hiddenRight = 'opacity-0 translate-x-8'

  return (
    <>
      {/* ── Desktop layout (≥681px): two columns + centred node ── */}
      <div className="hidden sm-timeline:flex items-start">
        {/* Left column */}
        <div className="flex-1 pr-8 pt-1 flex justify-end">
          {isLeft ? (
            <div
              className={`
                w-full max-w-md transition-all duration-700 ease-out
                ${isActive ? 'opacity-100 translate-x-0' : hiddenLeft}
              `}
            >
              <StageCard stage={stage} align="right" />
            </div>
          ) : (
            <div className="w-full max-w-md" aria-hidden="true" />
          )}
        </div>

        {/* Node */}
        <div className="shrink-0 flex justify-center" style={{ width: '2.5rem' }}>
          <Node ref={nodeRef} stage={stage} isActive={isActive} />
        </div>

        {/* Right column */}
        <div className="flex-1 pl-8 pt-1">
          {!isLeft ? (
            <div
              className={`
                w-full max-w-md transition-all duration-700 ease-out
                ${isActive ? 'opacity-100 translate-x-0' : hiddenRight}
              `}
            >
              <StageCard stage={stage} align="left" />
            </div>
          ) : (
            <div className="w-full max-w-md" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* ── Mobile layout (<681px): spine on far left, card to right ── */}
      <div className="flex items-start sm-timeline:hidden gap-5 pl-[1.25rem]">
        {/* Node sits ON the spine */}
        <div className="shrink-0 -translate-x-1/2 flex justify-center" style={{ width: '2.5rem' }}>
          <Node ref={nodeRef} stage={stage} isActive={isActive} />
        </div>

        {/* Card */}
        <div
          className={`
            flex-1 pt-1
            transition-all duration-700 ease-out
            ${isActive ? 'opacity-100 translate-x-0' : hiddenRight}
          `}
        >
          <StageCard stage={stage} align="left" />
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
          flex items-center justify-center shrink-0
          w-10 h-10 rounded-full border-2 font-mono text-xs font-bold select-none z-10
          transition-all duration-500
          ${isActive
            ? 'bg-accent border-accent text-white scale-110 shadow-lg shadow-accent/25'
            : 'bg-background border-border text-muted-foreground scale-100'
          }
        `}
      >
        {stage.number}
      </div>
    )
  }
)

/* ─── Card ───────────────────────────────────────────────────────────── */

function StageCard({ stage, align }: { stage: Stage; align: 'left' | 'right' }) {
  return (
    <article
      className={`
        w-full max-w-md overflow-hidden
        rounded-2xl border border-border bg-card
        shadow-sm hover:shadow-md hover:border-accent/40
        transition-shadow duration-300
        ${align === 'right' ? 'ml-auto' : ''}
      `}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={stage.image}
          alt={stage.imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 680px) 100vw, 320px"
        />
      </div>

      {/* Text */}
      <div className={`px-6 py-5 ${align === 'right' ? 'text-right' : 'text-left'}`}>
        <p className="text-xs font-mono font-semibold tracking-wider text-accent mb-2 uppercase">
          {stage.number}
        </p>
        <h3 className="text-base font-semibold text-foreground mb-2 text-balance">
          {stage.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {stage.description}
        </p>
      </div>
    </article>
  )
}
