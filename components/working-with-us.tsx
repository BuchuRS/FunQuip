'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
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
      'We create a custom design tailored to your vessel. Our team refines every detail — layout, dimensions, materials, and special features — until it\'s perfect.',
    image: '/images/wwu-02-design.png',
    imageAlt: "CAD drawings and colour samples on a marine engineer's desk",
    slider: {
      beforeImage: '/images/slider-before.png',
      afterImage: '/images/slider-after.png',
      beforeLabel: 'Design',
      afterLabel: 'Reality',
      alt: 'Platform — Design vs Reality',
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
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Remake%20this%20picture%2C%20change%20logo%20on%20the%20bag%20to%20the%20%402%20logo%20with%20a%20realistic%20texture%20that%20conforms%20to%20the%20bag%27s%20shape%2C%20and%20slightly%20change%20the%20camera%20angle%20to%20a%20more%20dynamic%20three-quarter%20view%2C%20remove%20the%20_Comfort%20tr-zS44CJ6NPWwsv1vVtxokzeg7kSmdJh.png',
    imageAlt: 'Xflatable delivery bag on a tropical beach',
  },
]

/* ─── Section ───────────────────────────────────────────────────────── */

export function WorkingWithUsSection() {
  const [offset, setOffset] = useState(0)

  // On desktop we show 3 cards; on mobile 1.
  // offset is the index of the leftmost visible card (0 or 1 for 4 cards shown 3-at-a-time)
  const maxOffset = STAGES.length - 3 // = 1

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <>
    <section
      aria-labelledby="wwu-heading"
      className="py-20 md:py-28 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top row: label + rule on left, buttons on right */}
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="flex items-center gap-4 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60 shrink-0">
              Working With Us
            </p>
            <div className="flex-1 h-px bg-primary-foreground/20 w-40 hidden sm:block" />
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold border border-primary-foreground/40 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              Get in contact
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 text-sm font-semibold border border-primary-foreground/40 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              About us
            </Link>
          </div>
        </div>

        {/* Heading */}
        <h2
          id="wwu-heading"
          className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-balance mb-6"
          style={{ fontFamily: 'var(--font-barlow-semi-condensed)' }}
        >
          Our Process
        </h2>

        {/* Body */}
        <p className="max-w-xl text-sm sm:text-base leading-relaxed text-primary-foreground/60 mb-12">
          From initial enquiry through to manufacture, here is what to expect
          when you work with us — four clear stages, guided by the people
          who designed and built your platform.
        </p>

        {/* Cards — 3-up carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${offset} * (100% / 3 + 0.444rem)))` }}
          >
            {STAGES.map((stage) => (
              <div
                key={stage.number}
                className="flex flex-col bg-primary-foreground/5 rounded-xl overflow-hidden border border-primary-foreground/10 shrink-0 w-[calc(33.333%-0.667rem)]"
              >
                {/* Image */}
                {stage.slider ? (
                  <div className="relative w-full aspect-[4/3]">
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
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                )}

                {/* Text */}
                <div className="px-5 py-6 flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                    {stage.number}
                  </p>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-primary-foreground">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/60">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={prev}
            disabled={offset === 0}
            aria-label="Previous"
            className="p-2 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={offset === maxOffset}
            aria-label="Next"
            className="p-2 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>

    {/* Build your Platform CTA */}
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Platformdock.png"
              alt="Custom inflatable platform"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10 px-10 py-16 md:py-20">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Bespoke Configuration
              </p>
              <h2
                className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-balance leading-tight"
                style={{ fontFamily: 'var(--font-barlow-semi-condensed)' }}
              >
                Build your dream platform.
                <br />
                Crafted for your yacht.
              </h2>
              <p className="mt-5 text-primary-foreground/70 leading-relaxed max-w-md">
                Every yacht is unique — and your platform should be too. Configure size, shape, material and accessories, and our team will deliver a bespoke solution built to fit your vessel perfectly.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/build-your-platform"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:bg-primary-foreground/90 transition-colors"
              >
                Start building <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
