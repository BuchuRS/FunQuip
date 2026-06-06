import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  HeroSection,
  FeaturesSection,
  AboutPreviewSection,
  CTASection,
} from '@/components/home-sections'
import { BeforeAfterSlider } from '@/components/before-after-slider'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />

        {/* Before/After Comparison Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
                Our Products
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Solutions
              </h2>
            </div>

            <BeforeAfterSlider
              beforeImage="/images/slider-before.png"
              afterImage="/images/slider-after.png"
              beforeLabel="Design"
              afterLabel="Reality"
              alt="FunQuip Platform — Design vs Reality"
            />
          </div>
        </section>

        <AboutPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
