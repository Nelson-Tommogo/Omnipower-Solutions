import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { MdCheckCircle } from "react-icons/md"
import gates from "../images/automatedgates.jpg"
import dooors from "../images/hdsmartdoorlock.jpg"

export default function AutomatedGatesPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Automated Gates 🚪</h1>
            <p className="text-lg text-gray-600">
              Enhance your property's security and convenience with our automated gate solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern Access Control Solutions 🔑</h2>
              <p className="text-gray-600 mb-4">
                Omnipower Solutions provides comprehensive automated gate installation services for residential and
                commercial properties. Our automated gate systems combine security with convenience, allowing you to
                control access to your property with ease.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts will assess your needs, recommend the best gate automation solution, and handle the
                entire installation process. We use high-quality motors, access control systems, and safety features to
                ensure reliable operation and long-term performance.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={gates}
                alt="Automated Access Control"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={dooors}
                  alt="Automated Gate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Automated Gate Services 🛠️</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Sliding Gate Automation</h3>
                    <p className="text-gray-600">
                      Installation of automated systems for sliding gates, ideal for properties with limited space for
                      gate swing.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Swing Gate Automation</h3>
                    <p className="text-gray-600">
                      Automation solutions for traditional swing gates, with options for single or double gate
                      configurations.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Barrier Gate Systems</h3>
                    <p className="text-gray-600">
                      Installation of barrier gates for parking lots, residential complexes, and commercial properties.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Custom Gate Fabrication</h3>
                    <p className="text-gray-600">
                      Design and fabrication of custom gates to match your property's aesthetic, with automation systems
                      integrated.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Access Control Options ✨</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Remote Control Access</h3>
                    <p className="text-gray-600">
                      Wireless remote controls for convenient gate operation from your vehicle.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Keypad Entry Systems</h3>
                    <p className="text-gray-600">
                      Secure code-based access control systems for gates, allowing entry with a PIN code.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Smartphone Control</h3>
                    <p className="text-gray-600">
                      Modern gate automation systems that can be controlled via smartphone apps, allowing you to open
                      your gate from anywhere.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Intercom & Video Systems</h3>
                    <p className="text-gray-600">
                      Integration of intercom and video systems with your automated gate for visitor verification before
                      entry.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/different-electrical-tools-wooden-background-flat-lay.jpg-x3AdR62MGWzVBBWNDVVAKsDM4SGjDR.jpeg"
                  alt="Gate Installation Tools"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Automated Gate Services 🏆</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Expert Installation</h3>
                <p className="text-gray-600">
                  Our technicians are certified and experienced in installing all types of automated gate systems,
                  ensuring proper setup and reliable operation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Quality Components</h3>
                <p className="text-gray-600">
                  We use only high-quality motors, controllers, and access systems from trusted manufacturers to ensure
                  reliability and longevity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Customized Solutions</h3>
                <p className="text-gray-600">
                  We design automated gate systems tailored to your specific needs, property layout, and budget for
                  optimal functionality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Safety Features</h3>
                <p className="text-gray-600">
                  All our gate automation systems include essential safety features like obstacle detection and
                  emergency manual operation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Warranty & Support</h3>
                <p className="text-gray-600">
                  All our installations come with warranty and ongoing technical support to ensure your system functions
                  optimally.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Maintenance Services</h3>
                <p className="text-gray-600">
                  We offer regular maintenance services to keep your automated gate system in perfect working condition
                  and extend its lifespan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Gate? 🚀</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team of experts is ready to help you with your
            automated gate needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
