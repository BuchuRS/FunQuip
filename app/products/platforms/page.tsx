import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import { CTASection } from '@/components/home-sections'

export const metadata = {
  title: 'Platforms & Docks | Xflatable',
  description:
    'Explore our range of premium inflatable platforms and docks designed for superyachts and marine vessels.',
}

const highlights = [
  { stat: '< 5 min', label: 'Avg. setup time' },
  { stat: '100 kg/m²', label: 'Load capacity' },
  { stat: 'Bespoke', label: 'Custom sizing' },
  { stat: 'Global', label: 'Service network' },
]

export default function PlatformsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden bg-neutral-950">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Platformdock.png"
              alt="Xflatable inflatable platforms and docks at sea"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

          <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 pb-16 pt-40">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Inflatable Platforms &amp; Docks
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-tight text-balance max-w-4xl"
              style={{ fontFamily: 'var(--font-barlow-semi-condensed)' }}
            >
              Built for the Sea.
              <br />
              Designed for you.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Our modular inflatable platforms and docks zip together to create large, stable surfaces — whether you need a tender launch zone, a lounge area, or a stable crew workstation.
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
                  alt="Custom inflatable platform and dock"
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

        {/* Standard Features */}
        <section className="py-20 md:py-28 bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-center text-balance mb-14">
              Standard features of our inflatable platforms &amp; docks
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  image: '/images/feature-handles.png',
                  title: 'Soft Handles',
                  body: 'Discreet, colour-coordinated carry handles on every platform.',
                },
                {
                  image: '/images/feature-loops.png',
                  title: 'Socket integration',
                  body: 'We only use soft loop ties on all our inflatables — no scratched hulls.',
                },
                {
                  image: '/images/feature-covers.png',
                  title: 'Premium teak surface',
                  body: 'Our printed, removable covers are non-slip and easy to clean.',
                },
                {
                  image: '/images/feature-valves.png',
                  title: 'Reinforced corners',
                  body: 'Discreet, flush-mounted valves come as standard on every model.',
                },
                {
                  image: '/images/feature-inflation.png',
                  title: 'Fast inflation',
                  body: 'Dual-action valve system inflates any platform in under 5 minutes.',
                },
                {
                  image: '/images/feature-modularity.png',
                  title: 'Modularity',
                  body: 'Zip-joiner system connects multiple modules together for any configuration.',
                },
                {
                  image: '/images/feature-seams.png',
                  title: 'Ballast bags',
                  body: 'Every seam is double-welded for exceptional strength and longevity.',
                },
                {
                  image: '/images/feature-storage.png',
                  title: 'Compact storage',
                  body: 'Folds down into an included carry bag — easy to stow aboard any vessel.',
                },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col gap-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms & Docks Products */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Full Range
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance max-w-xl">
                Platforms &amp; Docks
              </h2>
            </div>
            <ProductGrid initialCategory="platforms" />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
