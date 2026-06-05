import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/home-sections'
import { products } from '@/lib/products'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Check } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: 'Product Not Found | Xflatable',
    }
  }

  return {
    title: `${product.name} | Xflatable`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Product Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Product Info */}
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  {product.tagline}
                </p>

                <p className="mt-6 text-foreground/80 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Specifications
                  </h2>
                  <dl className="divide-y divide-border">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between py-3"
                      >
                        <dt className="text-sm text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="text-sm font-medium text-foreground">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-foreground/80"
                      >
                        <Check className="h-5 w-5 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Button size="lg" asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
