import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/videos/Make a slowly moving drone shot.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-16 lg:px-8 text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-tight">
          <span className="block" style={{ fontFamily: 'var(--font-inter)' }}>Designed for Performance.</span>
          <span className="block italic" style={{ fontFamily: 'var(--font-playfair)' }}>Built for the Sea.</span>
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            View products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-white/40 text-white rounded-full hover:bg-white/10 transition-colors"
          >
            Get in contact
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-12 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  )
}

export function FeaturesSection() {
  const categories = [
    {
      name: 'PLATFORMS',
      description: 'Extend your yacht with spacious floating designed for relaxation.',
      image: '/images/Platformdock.png',
      href: '/products?category=docking',
    },
    {
      name: 'DOCKS',
      description: 'Modern docking solutions for water experience.',
      image: '/images/category-docking.png',
      href: '/products?category=docking',
    },
    {
      name: 'HEX',
      description: 'Creative modular floating layouts.',
      image: '/images/category-platforms.png',
      href: '/products?category=platforms',
    },
    {
      name: 'FLOATING PAVILIONS',
      description: 'Elegant shaded floating lounge spaces bringing luxury hospitality directly onto the water.',
      image: '/images/product-seapool.webp',
      href: '/products?category=pavilions',
    },
    {
      name: 'POOLS',
      description: 'Dedicated floating swimming environments.',
      image: '/images/category-seapools.png',
      href: '/products?category=sea-pools',
    },
    {
      name: 'FURNITURES',
      description: 'Elegant comfort for yacht & waterside.',
      image: '/images/category-accessories.png',
      href: '/products?category=furniture',
    },
    {
      name: 'YACHT SLIDES',
      description: 'Premium custom Yacht slides.',
      image: '/images/product-modular.png',
      href: '/products?category=slides',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Modular Platform Collection
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Explore Your
            <br />
            <span className="text-accent">Floating Lifestyle</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover premium floating environments designed for unforgettable moments on the water — from elegant yacht platforms and docking systems to shaded pavilion lounges and luxury floating pools.
          </p>
        </div>

        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 auto-rows-max">
          {/* Left card — Platforms & Docks, spans 2 columns */}
          <div className="group md:col-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src={categories[0].image}
              alt="Platforms and Docks"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-3">
                {categories.slice(0, 2).map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-sm font-semibold backdrop-blur-sm hover:bg-white/25 transition-colors"
                  >
                    {cat.name}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
              <p className="text-white/75 text-sm md:text-base max-w-lg">
                {categories[0].description}
              </p>
            </div>
          </div>

          {/* Right card — HEX, spans 1 column */}
          <div className="group md:col-span-1 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src={categories[2].image}
              alt="HEX"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-3">
                <Link
                  href={categories[2].href}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-sm font-semibold backdrop-blur-sm hover:bg-white/25 transition-colors"
                >
                  {categories[2].name}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <p className="text-white/75 text-sm md:text-base">
                {categories[2].description}
              </p>
            </div>
          </div>

          {/* Full width card - spanning 3 columns */}
          <Link
            href={categories[3].href}
            className="group md:col-span-3 block"
          >
            <div className="relative aspect-[16/5] md:aspect-[16/6] rounded-3xl overflow-hidden">
              <Image
                src={categories[3].image}
                alt={categories[3].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
                  Signature Lifestyle
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {categories[3].name}
                </h3>
                <p className="text-white/90 text-sm md:text-base max-w-2xl">
                  {categories[3].description}
                </p>
              </div>
            </div>
          </Link>

          {/* Bottom row - 3 equal small cards */}
          {categories.slice(4, 7).map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block"
            >
              <div className="relative aspect-[3/2.5] rounded-3xl overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutPreviewSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/Platformdock.png"
              alt="Xflatable lifestyle"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Why choose FunQuip
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Super-firm underfoot. Zero obtrusive branding.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our inflatable platforms are a practical solution for significantly
              increasing your square meterage — whether you need a tender launch
              zone, a lounge area, or a stable crew workstation. The quality of
              our work speaks for itself.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Choose Marine-X TPU for a lightweight, eco-conscious finish with
              exceptional tear strength, or our durable PVC range for everyday
              reliability. Both carry a 5-year limited warranty and access to
              global service centres.
            </p>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/about">
                  Learn more about us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Every great project starts with a conversation. Share a few details
          and our team will be in touch to build your bespoke design brief.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contact">Get in Contact</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
