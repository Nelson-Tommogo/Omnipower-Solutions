import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import solar from "../images/solarpanelkit.jpg"
import panel from "../images/panel.jpeg"

export default function SolarInstallationPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solar Panel Installation ☀️</h1>
            <p className="text-lg text-gray-600">
              Harness the power of the sun with our professional solar installation services.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sustainable Energy Solutions 🌱</h2>
              <p className="text-gray-600 mb-4">
                Omnipower Solutions provides comprehensive solar panel installation services for residential and
                commercial properties. Our solar solutions help you reduce electricity costs, decrease your carbon
                footprint, and gain energy independence.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of solar experts will assess your energy needs, design a custom solar system, and handle the
                entire installation process. We use high-quality solar panels and components to ensure optimal
                performance and longevity.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={solar}
                alt="Solar Panel Installation"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={panel}
                  alt="Solar Inverter System"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Solar Installation Services 🛠️</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Residential Solar Systems</h3>
                    <p className="text-gray-600">
                      Custom solar solutions for homes, designed to reduce electricity bills and provide clean,
                      renewable energy for your household.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Commercial Solar Systems</h3>
                    <p className="text-gray-600">
                      Large-scale solar installations for businesses, warehouses, and industrial facilities, helping
                      reduce operational costs and meet sustainability goals.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Off-Grid Solar Solutions</h3>
                    <p className="text-gray-600">
                      Complete off-grid solar systems with battery storage for properties without access to the main
                      electricity grid or those seeking energy independence.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Grid-Tied Solar Systems</h3>
                    <p className="text-gray-600">
                      Solar installations connected to the main electricity grid, allowing you to sell excess energy
                      back to the utility company.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Additional Solar Services ✨</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Solar Battery Storage</h3>
                    <p className="text-gray-600">
                      Installation of battery storage systems to store excess solar energy for use during nighttime or
                      power outages.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Solar Water Heating</h3>
                    <p className="text-gray-600">
                      Solar water heating systems that use the sun's energy to heat water for domestic use, reducing
                      energy costs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Solar System Maintenance</h3>
                    <p className="text-gray-600">
                      Regular maintenance and cleaning services to ensure your solar system operates at peak efficiency.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Solar System Upgrades</h3>
                    <p className="text-gray-600">
                      Upgrades for existing solar systems, including adding more panels or integrating battery storage.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2014.52.57-riyHKOaIiREdw0t9CX3FOsHb5lLwhv.jpeg"
                  alt="Solar Installation Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Solar Installation Services 🏆</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Expert Installation</h3>
                <p className="text-gray-600">
                  Our solar technicians are certified and experienced in installing all types of solar systems, ensuring
                  proper setup and maximum efficiency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Quality Components</h3>
                <p className="text-gray-600">
                  We use only high-quality solar panels, inverters, and mounting systems from trusted manufacturers to
                  ensure reliability and performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Customized Solutions</h3>
                <p className="text-gray-600">
                  We design solar systems tailored to your specific energy needs, property layout, and budget for
                  optimal results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Energy Savings</h3>
                <p className="text-gray-600">
                  Our solar installations help you significantly reduce your electricity bills and provide a return on
                  investment over time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Warranty & Support</h3>
                <p className="text-gray-600">
                  All our solar installations come with warranty and ongoing technical support to ensure your system
                  functions optimally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Environmental Impact</h3>
                <p className="text-gray-600">
                  By choosing solar energy, you're reducing your carbon footprint and contributing to a cleaner, greener
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar Energy? 🚀</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team of solar experts is ready to help you harness
            the power of the sun.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
