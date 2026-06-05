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
              Our Collection
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Inflatable Products
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              From platforms and docking solutions to sea pools and professional
              maintenance equipment. Every product is engineered for excellence.
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
