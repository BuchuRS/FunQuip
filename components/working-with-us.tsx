'use client'

import { useEffect, useRef, useState } from 'react'

/* ─── Data ──────────────────────────────────────────────────────────── */

interface Stage {
  number: string
  title: string
  description: string
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Enquiry & Brief',
    description:
      'Tell us about your vessel, your crew, and how you use the water. We listen carefully to understand your needs before recommending a single product.',
  },
  {
    number: '02',
    title: 'Design & Configuration',
    description:
      'Our engineers configure the right platform, sea pool, or inflatable for your yacht — tailored dimensions, colours, fittings, and accessories.',
  },
  {
    number: '03',
    title: 'Proposal & Approval',
    description:
      'You receive a detailed proposal with technical drawings and transparent pricing. We refine until every detail is right before signing off.',
  },
  {
    number: '04',
    title: 'Manufacture',
    description:
      'Skilled craftspeople build your product in Europe using Marine-X TPU and certified hardware. Rigorous quality checks at every stage.',
  },
  {
    number: '05',
    title: 'Sea Trial & Delivery',
    description:
      'We arrange white-glove delivery to your marina and, where possible, join the first deployment so your crew is confident from day one.',
  },
  {
    number: '06',
    title: 'Aftercare',
    description:
      'Our relationship continues long after delivery — service schedules, spare parts, and direct access to the team who built your product.',
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
            className="absolute inset-y-0 w-px bg-border left-1/2 -translate-x-px timeline-spine-x"
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
  const anim = prefersReduced ? '' : isActive ? 'opacity-100 translate-x-0' : ''
  const hiddenLeft = prefersReduced ? 'opacity-0 -translate-x-8' : 'opacity-0 -translate-x-8'
  const hiddenRight = prefersReduced ? 'opacity-0 translate-x-8' : 'opacity-0 translate-x-8'

  return (
    <>
      {/* ── Desktop layout (≥681px): two columns + centred node ── */}
      <div className="hidden sm-timeline:flex items-start">
        {/* Left column */}
        <div className="flex-1 pr-10 pt-1 flex justify-end">
          {isLeft ? (
            <div
              className={`
                transition-all duration-700 ease-out
                ${isActive ? `opacity-100 translate-x-0` : hiddenLeft}
              `}
            >
              <StageCard stage={stage} align="right" />
            </div>
          ) : (
            /* spacer to keep the column occupied */
            <div className="w-full max-w-sm" aria-hidden="true" />
          )}
        </div>

        {/* Node */}
        <div className="shrink-0 flex justify-center" style={{ width: '2.5rem' }}>
          <Node ref={nodeRef} stage={stage} isActive={isActive} />
        </div>

        {/* Right column */}
        <div className="flex-1 pl-10 pt-1">
          {!isLeft ? (
            <div
              className={`
                transition-all duration-700 ease-out
                ${isActive ? `opacity-100 translate-x-0` : hiddenRight}
              `}
            >
              <StageCard stage={stage} align="left" />
            </div>
          ) : (
            <div className="w-full max-w-sm" aria-hidden="true" />
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
            ${isActive ? `opacity-100 translate-x-0` : hiddenRight}
          `}
        >
          <StageCard stage={stage} align="left" />
        </div>
      </div>
    </>
  )
}

/* ─── Node ───────────────────────────────────────────────────────────── */

import { forwardRef } from 'react'

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
        w-full max-w-sm
        rounded-2xl border border-border bg-card px-6 py-5
        shadow-sm hover:shadow-md hover:border-accent/40
        transition-shadow duration-300
        ${align === 'right' ? 'text-right ml-auto' : 'text-left'}
      `}
    >
      <p className="text-xs font-mono font-semibold tracking-wider text-accent mb-2 uppercase">
        {stage.number}
      </p>
      <h3 className="text-base font-semibold text-foreground mb-2 text-balance">
        {stage.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {stage.description}
      </p>
    </article>
  )
}
