'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BeforeAfterSlider } from './before-after-slider'

/* ─── Types & Data ──────────────────────────────────────────────────── */

interface Stage {
  number: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  slider?: {
    beforeImage: string
    afterImage: string
    beforeLabel: string
    afterLabel: string
  }
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Initial Enquiry',
    description:
      'Every great project starts with a conversation. Share a few basic details with us — just enough to get the ball rolling.',
    image: '/images/wwu-01-enquiry.png',
    imageAlt: 'Client and engineer discussing a brief over yacht blueprints',
  },
  {
    number: '02',
    title: 'Design Brief',
    description:
      "We'll be in touch to develop your wishlist and build a detailed design brief. We'll ask for your General Arrangement — we're always happy to sign an NDA. We explore the intended position of your inflatable, whether you envision a pool, lounging platform or toy dock, and how many toys it needs to support. Our designs are entirely bespoke.",
    image: '/images/wwu-02-design.png',
    imageAlt: "CAD drawings and colour samples on a marine engineer's desk",
  },
  {
    number: '03',
    title: 'Concept Drawing & Confirmation',
    description:
      "Our design team creates a bespoke proposal tailored to your requirements — typically within 7–10 days. This is your opportunity to give feedback. We fine-tune the concept until everything is just right, then provide a formal quote in TPU or PVC.",
    slider: {
      beforeImage: '/images/slider-before.png',
      afterImage: '/images/slider-after.png',
      beforeLabel: 'Design',
      afterLabel: 'Reality',
    },
  },
  {
    number: '04',
    title: 'Invoicing & Production',
    description:
      "Once you're happy with the design, we issue an invoice — 50% secures your production slot, 50% is due before dispatch. Our TPU inflatables are produced in Europe; our PVC platforms in China. Both facilities operate with a strong focus on ethical labour practices and material quality.",
    image: '/images/wwu-04-manufacture.png',
    imageAlt: 'Craftsperson heat-welding TPU fabric in a marine workshop',
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      "Time to get excited. For Med delivery you'll only pay for transport within Europe — we cover all import duties into Monaco. We personally deliver to mainland Europe to ensure everything arrives exactly as expected.",
    image: '/images/wwu-05-seatrial.png',
    imageAlt: 'Crew deploying a swim platform from a superyacht at anchor',
  },
  {
    number: '06',
    title: 'Customer Support',
    description:
      "Even after delivery, we're here to help. All our inflatables come with a 5-year limited warranty and access to global service centres. When your TPU platform reaches the end of its life, we offer upcycling options here in the UK — fancy a duffle bag made from your old inflatable? Just let us know.",
    image: '/images/wwu-06-aftercare.png',
    imageAlt: 'Marine technician servicing a luxury inflatable at a marina',
  },
]

/* ─── SVG path geometry ─────────────────────────────────────────────── */
// The S-path is defined in a 1000×H viewBox where H = ROW_H * STAGES.length.
// Each row the path sweeps across from one side to the other and curves down.
const VB_W = 1000
const ROW_H = 280  // viewBox units per stage row

function buildPath(n: number): string {
  // Each row is one smooth S-curve from centre → peak → centre.
  // Using a single cubic bezier per row guarantees C1-continuity (no kinks):
  // the end tangent of row i is always vertical (pointing straight down),
  // which matches the start tangent of row i+1 — so the join is smooth.
  const cx = VB_W / 2
  const amp = VB_W * 0.38 // horizontal reach left / right of centre

  // Control-point vertical offset — how far the CP "leans" into the curve.
  // A value of 0.7×ROW_H creates a lazy S with rounded corners.
  const cv = ROW_H * 0.72

  let d = `M ${cx} 0`

  for (let i = 0; i < n; i++) {
    const y0 = i * ROW_H
    const y1 = (i + 1) * ROW_H
    const peak = i % 2 === 0 ? cx - amp : cx + amp

    // CP1: pulls tangent horizontally toward the peak, anchored near y0
    // CP2: returns tangent to vertical before reaching y1
    d += ` C ${peak} ${y0 + cv}, ${peak} ${y1 - cv}, ${cx} ${y1}`
  }

  return d
}

/* ─── Section ───────────────────────────────────────────────────────── */

export function WorkingWithUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const svgPathRef = useRef<SVGPathElement>(null)
  const fillPathRef = useRef<SVGPathElement>(null)
  const seabobRef = useRef<HTMLDivElement>(null)
  const nodeGroupRefs = useRef<(HTMLLIElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [prefersReduced, setPrefersReduced] = useState(false)

  const N = STAGES.length
  const VB_H = ROW_H * N
  const pathD = buildPath(N)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const path = svgPathRef.current
    const fillPath = fillPathRef.current
    const seabob = seabobRef.current
    const section = sectionRef.current

    if (!path || !section) return

    const totalLen = path.getTotalLength()

    if (prefersReduced) {
      setActiveIndex(N - 1)
      if (fillPath) {
        fillPath.style.strokeDasharray = `${totalLen}`
        fillPath.style.strokeDashoffset = '0'
      }
      return
    }

    if (fillPath) {
      fillPath.style.strokeDasharray = `${totalLen}`
      fillPath.style.strokeDashoffset = `${totalLen}`
    }

    let raf: number

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const vh = window.innerHeight
        // progress: 0 when section top hits bottom of screen, 1 when section bottom hits top
        const progress = Math.min(1, Math.max(0,
          (vh - rect.top) / (rect.height + vh * 0.2)
        ))

        const drawn = progress * totalLen

        if (fillPath) {
          fillPath.style.strokeDashoffset = `${totalLen - drawn}`
        }

        // Position & rotate Seabob at the tip of the drawn path
        if (seabob && path) {
          const clamped = Math.min(drawn, totalLen)
          const pt = path.getPointAtLength(clamped)
          // Sample a tiny step ahead to compute the local tangent direction
          const delta = 4
          const pt2 = path.getPointAtLength(Math.min(clamped + delta, totalLen))
          const dx = pt2.x - pt.x
          const dy = pt2.y - pt.y
          const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI) - 90

          const svgEl = path.ownerSVGElement
          if (svgEl) {
            const svgRect = svgEl.getBoundingClientRect()
            const scaleX = svgRect.width / VB_W
            const scaleY = svgRect.height / VB_H
            const px = pt.x * scaleX
            const py = pt.y * scaleY
            seabob.style.left = `${px}px`
            seabob.style.top = `${py}px`
            seabob.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`
          }
        }

        // Activate nodes: find each node's position along the path
        nodeGroupRefs.current.forEach((node, i) => {
          if (!node) return
          // Each node sits at i+0.5 along the path (midpoint of each row)
          const nodeProgress = (i + 0.5) / N
          if (progress >= nodeProgress * 0.95) {
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
  }, [prefersReduced, N, VB_H, pathD])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="wwu-heading"
      className="relative py-24 md:py-36 bg-background overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <header className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--color-ocean)' }}>
            Our Process
          </p>
          <h2
            id="wwu-heading"
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1] text-foreground"
          >
            Working With Us
          </h2>
          <div aria-hidden="true" className="mt-5 h-px w-20 bg-border" />
          <p className="mt-6 max-w-lg leading-relaxed text-sm sm:text-base text-muted-foreground">
            What to expect from the process — six clear stages from initial
            enquiry to long-term customer support, guided by the people who
            designed and built your platform.
          </p>
        </header>

        {/* S-path timeline */}
        <div className="relative w-full">

          {/* SVG spine — sits behind everything */}
          <svg
            aria-hidden="true"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            {/* Track (unfilled) */}
            <path
              ref={svgPathRef}
              d={pathD}
              fill="none"
              stroke="var(--border)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Fill (ocean colour, animated via dashoffset) */}
            <path
              ref={fillPathRef}
              d={pathD}
              fill="none"
              stroke="var(--color-ocean)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
          </svg>

          {/* Seabob — absolutely positioned over SVG */}
          <div
            ref={seabobRef}
            aria-hidden="true"
            className="absolute z-20 pointer-events-none will-change-transform"
            style={{ width: 100, height: 240 }}
          >
            <Image
              src="/images/seabob-topdown.png"
              alt=""
              fill
              className="object-contain drop-shadow-lg"
              sizes="100px"
            />
          </div>

          {/* Stage rows */}
          <ol className="relative z-10 list-none m-0 p-0">
            {STAGES.map((stage, i) => {
              const isLeft = i % 2 === 0
              const isActive = i <= activeIndex
              return (
                <li
                  key={stage.number}
                  ref={(el: HTMLLIElement | null) => { nodeGroupRefs.current[i] = el }}
                  className="relative flex items-center"
                  style={{ minHeight: `${ROW_H * 0.85}px`, paddingBottom: 48 }}
                >
                  {/* Content: sits either left or right of centre */}
                  {isLeft ? (
                    // Left side card — right column empty
                    <div className="w-full grid grid-cols-2 gap-8 items-center">
                      <div
                        className={`transition-all duration-700 ease-out ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}
                      >
                        <StageCard stage={stage} isActive={isActive} />
                      </div>
                      {/* Node marker — sits at the right edge of the left column (near spine midpoint) */}
                      <div className="flex justify-start pl-4">
                        <StageNode stage={stage} isActive={isActive} />
                      </div>
                    </div>
                  ) : (
                    // Right side card — left column has node
                    <div className="w-full grid grid-cols-2 gap-8 items-center">
                      <div className="flex justify-end pr-4">
                        <StageNode stage={stage} isActive={isActive} />
                      </div>
                      <div
                        className={`transition-all duration-700 ease-out ${
                          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                      >
                        <StageCard stage={stage} isActive={isActive} />
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ─── Node ───────────────────────────────────────────────────────────── */

function StageNode({ stage, isActive }: { stage: Stage; isActive: boolean }) {
  return (
    <div
      aria-label={`Stage ${stage.number}`}
      className="flex items-center justify-center w-10 h-10 rounded-full font-sans text-xs font-bold select-none transition-all duration-500 shrink-0 z-10"
      style={
        isActive
          ? {
              background: 'var(--color-ocean)',
              color: '#fff',
              boxShadow: '0 0 0 4px var(--background), 0 0 0 6px var(--color-ocean)',
              transform: 'scale(1.15)',
            }
          : {
              background: 'var(--background)',
              color: 'var(--color-ocean)',
              border: '2px solid color-mix(in oklch, var(--color-ocean) 40%, transparent)',
            }
      }
    >
      {stage.number}
    </div>
  )
}

/* ─── Card ───────────────────────────────────────────────────────────── */

function StageCard({ stage, isActive }: { stage: Stage; isActive: boolean }) {
  return (
    <article
      className="group w-full rounded-xl overflow-hidden transition-shadow duration-500 border border-border/60"
      style={{
        background: 'var(--background)',
        boxShadow: isActive
          ? '0 8px 32px oklch(0.22 0.02 240 / 0.12)'
          : '0 2px 12px oklch(0.22 0.02 240 / 0.05)',
      }}
    >
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full transition-all duration-500"
        style={{
          background: isActive
            ? 'var(--color-ocean)'
            : 'color-mix(in oklch, var(--color-ocean) 20%, transparent)',
        }}
      />

      {/* Media */}
      {stage.slider ? (
        <div className="p-4 bg-muted/30">
          <BeforeAfterSlider
            beforeImage={stage.slider.beforeImage}
            afterImage={stage.slider.afterImage}
            beforeLabel={stage.slider.beforeLabel}
            afterLabel={stage.slider.afterLabel}
            alt={`${stage.title} — design vs reality`}
          />
        </div>
      ) : stage.image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={stage.image}
            alt={stage.imageAlt || stage.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 680px) 100vw, 44vw"
          />
        </div>
      ) : null}

      {/* Text */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-sans text-xs font-bold tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: 'color-mix(in oklch, var(--color-ocean) 10%, transparent)',
              color: 'var(--color-ocean)',
            }}
          >
            {stage.number}
          </span>
          <div aria-hidden="true" className="flex-1 h-px bg-border" />
        </div>
        <h3 className="font-sans text-xl sm:text-2xl font-semibold leading-snug text-balance mb-2 text-foreground">
          {stage.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {stage.description}
        </p>
      </div>
    </article>
  )
}
