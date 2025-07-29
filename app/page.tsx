import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesSection } from "@/components/services-section"
import { FeaturedProducts } from "@/components/featured-products"
import { BlogPreview } from "@/components/blog-preview"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { ClientWhatsAppButton } from "@/components/client-whatsapp-button"

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
