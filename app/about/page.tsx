import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/home-sections'
import Image from 'next/image'
import { Anchor, Leaf, Award, Users } from 'lucide-react'

export const metadata = {
  title: 'About Us | Xflatable',
  description:
    'Learn about Xflatable, the premium inflatable dock manufacturer for superyachts. A sister company of Xquip.',
}

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Every product meets the highest standards of quality and performance expected in the superyacht industry.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Our Marine-X TPU material is a non-toxic alternative to PVC, reducing environmental impact without compromise.',
  },
  {
    icon: Anchor,
    title: 'Innovation',
    description:
      'Continuous investment in material technology and design keeps us at the forefront of inflatable engineering.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We collaborate closely with clients to create bespoke solutions tailored to their exact specifications.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
              About Xflatable
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl max-w-3xl">
              Engineering Excellence for Life on the Water
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              As a sister company of Xquip, Xflatable brings decades of
              superyacht equipment expertise to the world of inflatable
              platforms and docking solutions.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Born from the expertise of Xquip, Xflatable was established
                    to address a growing need in the superyacht market for
                    premium-quality inflatable platforms and docking solutions
                    that match the excellence expected aboard the world&apos;s
                    finest vessels.
                  </p>
                  <p>
                    Our team combines decades of maritime experience with
                    innovative manufacturing techniques. We design in Europe and
                    manufacture to the most exacting standards, ensuring every
                    product delivers on our promise of quality, safety, and
                    durability.
                  </p>
                  <p>
                    From custom platforms for major superyachts to standardized
                    solutions for rapid deployment, we provide inflatable
                    equipment that enhances the yachting experience for guests
                    and simplifies operations for crew.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <Image
                  src="/images/lifestyle-1.png"
                  alt="Xflatable in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mx-auto">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <Image
                  src="/images/product-platform-classic.png"
                  alt="Marine-X TPU Material"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
                  Progressive Manufacturing
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Marine-X TPU Technology
                </h2>
                <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    We made a pivotal shift from traditional PVC to premium
                    Thermoplastic Polyurethane (TPU) in our inflatables. This
                    non-toxic alternative highlights our dedication to reducing
                    the superyacht industry&apos;s environmental footprint.
                  </p>
                  <p>
                    Marine-X TPU offers superior durability, UV resistance, and
                    longevity compared to conventional materials, while being
                    safer for marine environments and human health.
                  </p>
                  <p>
                    Our commitment to material innovation reinforces our
                    leadership in sustainable luxury and dedication to an
                    environmentally responsible future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70 mb-2">
              Part of the Xquip Family
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Backed by Decades of Maritime Excellence
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              As a sister company of Xquip, we benefit from established
              relationships with the world&apos;s leading shipyards, yacht
              management companies, and charter operations. This network ensures
              our products meet the real-world demands of the superyacht
              industry.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
