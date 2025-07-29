import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Learn more about Omnipower Solutions and our commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Omnipower Solutions was founded with a vision to provide high-quality electrical and electronic
                solutions to homes and businesses in Kenya. What started as a small operation has grown into a trusted
                provider of security systems, electrical services, and home automation solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Our team consists of certified professionals with years of experience in the industry. We pride
                ourselves on staying up-to-date with the latest technologies and best practices to deliver innovative
                solutions to our clients.
              </p>
              <p className="text-gray-600">
                At Omnipower Solutions, we believe in building long-term relationships with our clients through
                exceptional service, quality workmanship, and competitive pricing.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__48297-uA3ad9SJ31tv0jqsW61OWOdhubrAoI.jpeg"
                alt="Omnipower Solutions Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the best service and solutions to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle2 size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Certified Professionals</h3>
              <p className="text-gray-600">
                Our team consists of certified technicians with years of experience in electrical and electronic
                installations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle2 size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We only use high-quality products and materials that meet international standards for safety and
                performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle2 size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction and strive to exceed expectations with every project we undertake.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle2 size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer competitive pricing without compromising on quality, ensuring you get the best value for your
                investment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle2 size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Warranty & Support</h3>
              <p className="text-gray-600">
                All our installations come with warranty and ongoing technical support to ensure your systems function
                optimally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle2 size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of timely completion and strive to deliver projects within the agreed
                timeframe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project requirements and get a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
