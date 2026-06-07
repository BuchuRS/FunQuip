import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import { CTASection } from '@/components/home-sections'

export const metadata = {
  title: 'Products | Xflatable',
  description:
    'Explore our range of premium inflatable docks, platforms, and sea pools designed for superyachts.',
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
              Inflatable Platforms
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Modular Platforms for Superyachts
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Our modular inflatable platforms zip together to create large,
              stable surfaces — ideal for launching water toys, setting up
              lounge areas, or accommodating tenders and floatplanes. Choose
              Marine-X TPU for lightweight performance, or PVC for everyday
              reliability.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ProductGrid />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
