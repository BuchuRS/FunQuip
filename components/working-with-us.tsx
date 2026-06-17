'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const STAGES = [
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
      'Our team creates a custom design tailored to your vessel — refining layout, dimensions, and materials until every detail is exactly right.',
    image: '/images/wwu-02-design.png',
    imageAlt: "CAD drawings and colour samples on a marine engineer's desk",
  },
  {
    number: '03',
    title: 'Manufacture',
    description:
      'We build your platform with precision and care. Every component is crafted to our high standards using quality materials and ethical practices.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Factory-LpjjHDMVCwlZwjz6bgvvlsv60r3Phf.png',
    imageAlt: 'Technician heat-welding TPU fabric in a manufacturing facility',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Your finished platform arrives ready to use. We handle logistics and ensure everything is installed and working beautifully on your yacht.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Remake%20this%20picture%2C%20change%20logo%20on%20the%20bag%20to%20the%20%402%20logo%20with%20a%20realistic%20texture%20that%20conforms%20to%20the%20bag%27s%20shape%2C%20and%20slightly%20change%20the%20camera%20angle%20to%20a%20more%20dynamic%20three-quarter%20view%2C%20remove%20the%20_Comfort%20tr-zS44CJ6NPWwsv1vVtxokzeg7kSmdJh.png',
    imageAlt: 'Xflatable delivery bag on a tropical beach',
  },
]

const VISIBLE = 3

export function WorkingWithUsSection() {
  const [offset, setOffset] = useState(0)

  const canPrev = offset > 0
  const canNext = offset + VISIBLE < STAGES.length

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(STAGES.length - VISIBLE, o + 1))

  const visible = STAGES.slice(offset, offset + VISIBLE)

  return (
    <section
      aria-labelledby="wwu-heading"
      className="bg-primary text-primary-foreground py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            {/* Label + rule */}
            <div className="flex items-center gap-4 mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent whitespace-nowrap">
                Our Process
              </p>
              <div className="flex-1 h-px bg-primary-foreground/20" />
            </div>

            <h2
              id="wwu-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-none text-balance"
            >
              Working With Us
            </h2>

            <p className="mt-6 leading-relaxed text-primary-foreground/60 max-w-lg text-sm sm:text-base">
              Every great platform starts with a conversation. From initial enquiry
              through to manufacture and delivery — four clear stages guided by
              the people who designed and built your platform.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 shrink-0 md:pt-2">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full border border-primary-foreground text-sm font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Get in contact
            </Link>
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-full border border-primary-foreground/40 text-sm font-semibold text-primary-foreground/70 hover:border-primary-foreground hover:text-primary-foreground transition-colors"
            >
              About us
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((stage) => (
            <div key={stage.number} className="flex flex-col">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
                <Image
                  src={stage.image}
                  alt={stage.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Text */}
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground mb-2">
                {stage.number} / {stage.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex justify-end gap-3 mt-10">
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/30 text-primary-foreground disabled:opacity-30 hover:enabled:bg-primary-foreground hover:enabled:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            aria-label="Next"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/30 text-primary-foreground disabled:opacity-30 hover:enabled:bg-primary-foreground hover:enabled:text-primary transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
