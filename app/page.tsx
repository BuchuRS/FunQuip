import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  HeroSection,
  FeaturesSection,
  AboutPreviewSection,
  CTASection,
} from '@/components/home-sections'
import { ConceptAndProcessSection } from '@/components/concept-and-process'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ConceptAndProcessSection />
        <AboutPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
