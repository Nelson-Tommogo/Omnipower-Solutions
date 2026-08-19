import { HeroCarousel } from "@/src/components/hero-carousel"
import { ServicesSection } from "@/src/components/services-section"
import { FeaturedProducts } from "@/src/components/featured-products"
import { BlogPreview } from "@/src/components/blog-preview"
import { Testimonials } from "@/src/components/testimonials"
import { CTASection } from "@/src/components/cta-section"
import { ClientWhatsAppButton } from "@/src/components/client-whatsapp-button"

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <FeaturedProducts />
      <BlogPreview />
      <Testimonials />
      <CTASection />
      <ClientWhatsAppButton />
    </>
  )
}
