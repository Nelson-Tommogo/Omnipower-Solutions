import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import wiring from "../images/wiring.jpeg"
import wire from "../images/wiring.jpg"

export default function ElectricalWiringPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electrical Wiring ⚡</h1>
            <p className="text-lg text-gray-600">
              Professional electrical wiring services for residential and commercial properties.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Electrical Wiring Solutions 🔌</h2>
              <p className="text-gray-600 mb-4">
                Omnipower Solutions provides comprehensive electrical wiring services for new constructions,
                renovations, and upgrades. Our team of certified electricians ensures that all electrical installations
                meet safety standards and building codes.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need complete wiring for a new building, rewiring for an older property, or specialized
                electrical installations, we have the expertise to handle projects of any size and complexity.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={wiring}
                alt="Electrical Outlets and Switches"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={wire}
                  alt="Electrical Wiring Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Electrical Wiring Services 🛠️</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Residential Wiring</h3>
                    <p className="text-gray-600">
                      Complete electrical wiring for new homes, rewiring for older properties, and electrical upgrades
                      to meet modern demands.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Commercial Wiring</h3>
                    <p className="text-gray-600">
                      Specialized electrical installations for offices, retail spaces, and industrial facilities,
                      designed to handle higher power demands.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Lighting Installation</h3>
                    <p className="text-gray-600">
                      Installation of indoor and outdoor lighting systems, including energy-efficient LED lighting and
                      smart lighting controls.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Circuit Breaker Installation</h3>
                    <p className="text-gray-600">
                      Installation and upgrading of circuit breakers and electrical panels to ensure safety and adequate
                      power distribution.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Electrical Services ✨</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Smart Home Wiring</h3>
                    <p className="text-gray-600">
                      Specialized wiring for smart home systems, including automation, entertainment, and security
                      integration.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Generator Installation</h3>
                    <p className="text-gray-600">
                      Wiring and installation of backup generators with automatic transfer switches for uninterrupted
                      power supply.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Electrical Troubleshooting</h3>
                    <p className="text-gray-600">
                      Diagnosis and repair of electrical issues, including circuit overloads, faulty wiring, and power
                      outages.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Electrical Inspections</h3>
                    <p className="text-gray-600">
                      Comprehensive electrical inspections to identify potential hazards and ensure compliance with
                      safety standards.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={wiring}
                  alt="Lighting Installation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Electrical Wiring Services 🏆</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Certified Electricians</h3>
                <p className="text-gray-600">
                  Our team consists of licensed and certified electricians with years of experience in residential and
                  commercial wiring.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize safety in all our electrical installations, ensuring that all work meets or exceeds
                  electrical codes and standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Quality Materials</h3>
                <p className="text-gray-600">
                  We use only high-quality electrical materials and components to ensure the reliability and longevity
                  of our installations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Timely Completion</h3>
                <p className="text-gray-600">
                  We understand the importance of completing projects on schedule and strive to deliver our services
                  within the agreed timeframe.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Warranty & Support</h3>
                <p className="text-gray-600">
                  All our electrical work comes with warranty and ongoing support to ensure your electrical systems
                  function optimally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer transparent and competitive pricing for all our electrical services, with no hidden costs or
                  surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Electrical Wiring Services? 🚀</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team of certified electricians is ready to help you
            with your electrical wiring needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
