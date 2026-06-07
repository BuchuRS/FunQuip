'use client'

import { BeforeAfterSlider } from '@/components/before-after-slider'
import { WorkingWithUsSection } from '@/components/working-with-us'

/**
 * Combined section showing the design-to-reality journey via slider,
 * followed by the complete working-with-us process timeline.
 */
export function ConceptAndProcessSection() {
  return (
    <>
      {/* Design vs Reality Slider */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
              Design vs Reality
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From concept drawing to water
            </h2>
          </div>

          <BeforeAfterSlider
            beforeImage="/images/slider-before.png"
            afterImage="/images/slider-after.png"
            beforeLabel="Design"
            afterLabel="Reality"
            alt="FunQuip Platform — Design vs Reality"
          />
        </div>
      </section>

      {/* Working With Us Timeline */}
      <WorkingWithUsSection />
    </>
  )
}
