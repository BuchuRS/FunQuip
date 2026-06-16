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

const platformTypes = [
  {
    label: 'Leisure',
    description: 'Unparalleled luxury at water level — sunbathing, swimming, and entertaining.',
    image: '/images/Platformdock.png',
    href: '/products?category=platforms',
  },
  {
    label: 'Docking',
    description: 'Secure, modular docking systems for jet skis, tenders, and water toys.',
    image: '/images/category-docking.png',
    href: '/products?category=docking-solutions',
  },
  {
    label: 'Sea Pools',
    description: 'Protected swimming enclosures — safe, calm, and private.',
    image: '/images/product-seapool.webp',
    href: '/products?category=sea-pools',
  },
  {
    label: 'Professional',
    description: 'Heavy-duty crew maintenance platforms built for serious work.',
    image: '/images/product-maintenance.png',
    href: '/products?category=professional',
  },
]

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

        {/* Platform types — editorial grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Platform Types
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance max-w-2xl">
                Every anchorage, a destination.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Large left card */}
              <Link
                href={platformTypes[0].href}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden block row-span-2"
              >
                <Image
                  src={platformTypes[0].image}
                  alt={platformTypes[0].label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/60 mb-2">
                    01 / Leisure
                  </span>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {platformTypes[0].label}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-4">
                    {platformTypes[0].description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-white gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              {/* Top right */}
              <Link
                href={platformTypes[1].href}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden block"
              >
                <Image
                  src={platformTypes[1].image}
                  alt={platformTypes[1].label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/60 mb-2">
                    02 / Docking
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {platformTypes[1].label}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-3">
                    {platformTypes[1].description}
                  </p>
                  <span className="inline-flex items-center text-xs font-medium text-white gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>

              {/* Bottom right — two small cards side by side */}
              <div className="grid grid-cols-2 gap-4">
                {platformTypes.slice(2).map((type, i) => (
                  <Link
                    key={type.label}
                    href={type.href}
                    className="group relative aspect-square rounded-2xl overflow-hidden block"
                  >
                    <Image
                      src={type.image}
                      alt={type.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <span className="text-xs font-medium uppercase tracking-widest text-white/60 mb-1">
                        0{i + 3} / {type.label}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-0.5">
                        {type.label}
                      </h3>
                      <span className="inline-flex items-center text-xs font-medium text-white gap-1 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
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
                All Platforms &amp; Products
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
