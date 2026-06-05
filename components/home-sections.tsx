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
      name: 'Floating Docks and Platforms',
      image: '/images/Platformdock.png',
      href: '/products?category=docking',
    },
    {
      name: 'Sea Pools',
      image: '/images/product-seapool.webp',
      href: '/products?category=platforms',
    },
    {
      name: 'Inflatable Toys',
      image: '/images/category-seapools.png',
      href: '/products?category=sea-pools',
    },
    {
      name: 'Fenders',
      image: '/images/category-accessories.png',
      href: '/products?category=professional',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Playful heading with thin font weight */}
        <h2 className="text-4xl md:text-5xl font-light text-neutral-400 mb-12 md:mb-16">
          engineered for<br />
          <span className="text-neutral-800">life on water</span>
        </h2>

        {/* Asymmetric category grid - matching reference layout */}
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Top row - two equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {categories.slice(0, 2).map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-normal text-neutral-800 mb-1">
                  {category.name}
                </h3>
                <span className="inline-flex items-center text-sm text-neutral-500 group-hover:text-neutral-800 transition-colors">
                  view
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          
          {/* Bottom row - asymmetric: left wider, right narrower */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 md:gap-8">
            {/* Left card - takes 3/5 of the width */}
            <Link
              href={categories[2].href}
              className="group block sm:col-span-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={categories[2].image}
                  alt={categories[2].name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg md:text-xl font-normal text-neutral-800 mb-1">
                {categories[2].name}
              </h3>
              <span className="inline-flex items-center text-sm text-neutral-500 group-hover:text-neutral-800 transition-colors">
                view
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            
            {/* Right card - takes 2/5 of the width */}
            <Link
              href={categories[3].href}
              className="group block sm:col-span-2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={categories[3].image}
                  alt={categories[3].name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg md:text-xl font-normal text-neutral-800 mb-1">
                {categories[3].name}
              </h3>
              <span className="inline-flex items-center text-sm text-neutral-500 group-hover:text-neutral-800 transition-colors">
                view
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
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
              About Xflatable
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Dutch Floating Engineering, Monaco Finish
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              As a sister company of Xquip, Xflatable brings the same commitment
              to excellence that has defined luxury yacht equipment for decades.
              Our inflatable platforms are designed in Europe and manufactured
              to the highest standards.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We use Marine-X TPU, a non-toxic alternative to traditional PVC,
              reflecting our dedication to reducing the superyacht industry&apos;s
              environmental footprint while delivering uncompromising quality.
            </p>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/about">
                  Learn More About Us
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
          Ready to Elevate Your Yacht Experience?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Our team is ready to help you find the perfect inflatable solution.
          Get in touch for custom configurations and expert guidance.
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
