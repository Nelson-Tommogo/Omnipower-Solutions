import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation and quote. Our team of experts is ready to help you with your
          electrical and security needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
