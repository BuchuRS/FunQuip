import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import { CTASection } from '@/components/home-sections'

export const metadata = {
  title: 'Seapool | Xflatable',
  description:
    'Explore our range of inflatable seapools — enclosed swim spaces designed for superyachts and marine vessels.',
}

const highlights = [
  { stat: '< 18 min', label: 'Avg. setup time' },
  { stat: 'UV-resistant', label: 'Mesh walls' },
  { stat: 'Fully enclosed', label: 'Protected bathing' },
  { stat: 'Bespoke', label: 'Custom sizing' },
]

export default function SeapoolPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden bg-neutral-950">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Platformdock.png"
              alt="Xflatable inflatable seapool at sea"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

          <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 pb-16 pt-40">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Inflatable Seapool
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-tight text-balance max-w-4xl"
              style={{ fontFamily: 'var(--font-barlow-semi-condensed)' }}
            >
              Safe Water.
              <br />
              Protected Bathing.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Enclosed swim spaces with UV-resistant mesh walls — create a contained, protected bathing environment at any anchorage. Perfect for families, charter operations, and marine conservation.
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

        {/* Build your Seapool CTA */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/Platformdock.png"
                  alt="Custom inflatable seapool"
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
                    Your perfect
                    <br />
                    <span className="italic font-serif font-normal">swim sanctuary.</span>
                  </h2>
                  <p className="mt-5 text-primary-foreground/70 leading-relaxed max-w-md">
                    Custom dimensions, mesh options, and access points — design an enclosed seapool tailored exactly to your vessel and operational needs.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/build-your-seapool"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
                  >
                    Build your Seapool <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seapool Features */}
        <section className="py-20 md:py-28 bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-center text-balance mb-14">
              Why choose Xflatable Seapool
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  image: '/images/feature-handles.png',
                  title: 'Enclosed Design',
                  body: 'Full mesh perimeter provides safe, contained swimming at any anchorage.',
                },
                {
                  image: '/images/feature-loops.png',
                  title: 'UV-Resistant Mesh',
                  body: 'Heavy-duty UV-resistant net walls protect from sun and marine elements.',
                },
                {
                  image: '/images/feature-covers.png',
                  title: 'Multiple Entry Points',
                  body: 'Multiple access doors and entry zones for easy deck access and emergency egress.',
                },
                {
                  image: '/images/feature-valves.png',
                  title: 'Professional Anchoring',
                  body: 'Integrated anchor points and marine-grade hardware for secure deployment.',
                },
                {
                  image: '/images/feature-inflation.png',
                  title: 'Fast Setup',
                  body: 'Rapid inflation and deployment — operational in under 18 minutes.',
                },
                {
                  image: '/images/feature-modularity.png',
                  title: 'Easy Maintenance',
                  body: 'Modular design allows quick repairs and part replacement at sea.',
                },
                {
                  image: '/images/feature-seams.png',
                  title: 'Marine Grade',
                  body: 'Double-welded seams and saltwater-resistant materials for durability.',
                },
                {
                  image: '/images/feature-storage.png',
                  title: 'Compact Storage',
                  body: 'Folds into a carry bag for easy stowage aboard any vessel.',
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

        {/* Seapool Products */}
        <section className="py-20 md:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Full Range
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance max-w-xl">
                Seapool Models
              </h2>
            </div>
            <ProductGrid initialCategory="seapool" />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
