import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import { CTASection } from '@/components/home-sections'

export const metadata = {
  title: 'Platforms | Xflatable',
  description:
    'Explore our range of premium inflatable docks, platforms, and sea pools designed for superyachts.',
}

const highlights = [
  { stat: '< 5 min', label: 'Avg. setup time' },
  { stat: '100 kg/m²', label: 'Load capacity' },
  { stat: 'Bespoke', label: 'Custom sizing' },
  { stat: 'Global', label: 'Service network' },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden bg-neutral-950">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Platformdock.png"
              alt="Xflatable inflatable platforms at sea"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

          <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 pb-16 pt-40">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Inflatable Platforms
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-tight text-balance max-w-4xl">
              Built for the Sea.
              <br />
              <span className="italic font-serif font-normal normal-case text-white/80">
                Designed for you.
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Our modular inflatable platforms zip together to create large, stable surfaces — whether you need a tender launch zone, a lounge area, or a stable crew workstation.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10">
              {highlights.map((h) => (
                <div key={h.label} className="py-8 px-6 text-center">
                  <p className="text-3xl font-bold">{h.stat}</p>
                  <p className="mt-1 text-sm text-primary-foreground/60 uppercase tracking-wider">
                    {h.label}
                  </p>
                </div>
              ))}
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
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-16 md:py-20">
                <div className="max-w-xl">
                  <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                    Bespoke Configuration
                  </p>
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance leading-tight">
                    Every anchorage,
                    <br />
                    <span className="italic font-serif font-normal">a destination.</span>
                  </h2>
                  <p className="mt-5 text-primary-foreground/70 leading-relaxed max-w-md">
                    No two yachts are the same. Use our platform builder to configure your ideal layout — size, material, accessories, and connection points — tailored exactly to your vessel.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/build-your-platform"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
                  >
                    Build your Platform <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Xflatable — editorial banner */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Why Xflatable
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                  Effortless deployment. Rock-solid stability.
                </h2>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: 'Effortless Deployment',
                      body: 'Smart detailing and user-friendly features make setup seamless — no awkward valves, no trip hazards, no wasted time.',
                    },
                    {
                      title: 'Versatile by Design',
                      body: 'From tender launch zones to yoga decks and crew workstations — our modular platforms adapt effortlessly to your daily demands.',
                    },
                    {
                      title: 'Built for Safety',
                      body: 'Exceptional stability at water level. Whether it\'s a sun-soaked afternoon with guests or a maintenance session, everyone moves with confidence.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hex-platforms-2.png"
                  alt="Xflatable platform in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Full Range
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance max-w-xl">
                Platforms &amp; Hexes
              </h2>
            </div>
            <ProductGrid />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
