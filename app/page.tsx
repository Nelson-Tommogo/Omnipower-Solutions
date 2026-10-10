import { HeroCarousel } from "@/src/components/hero-carousel"
import { ServicesSection } from "@/src/components/services-section"
import { ClientWhatsAppButton } from "@/src/components/client-whatsapp-button"

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <ClientWhatsAppButton />
    </>
  )
}
