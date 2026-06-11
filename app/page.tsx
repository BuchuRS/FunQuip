import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  HeroSection,
  FeaturesSection,
  AboutPreviewSection,
  CTASection,
} from '@/components/home-sections'
import { WorkingWithUsSection } from '@/components/working-with-us'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />

        <WorkingWithUsSection />
        <AboutPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
