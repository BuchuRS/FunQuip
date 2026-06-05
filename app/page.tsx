import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  HeroSection,
  FeaturesSection,
  AboutPreviewSection,
  CTASection,
} from '@/components/home-sections'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />

        {/* Featured Products Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
                  Our Products
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Featured Solutions
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View All Products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <AboutPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
