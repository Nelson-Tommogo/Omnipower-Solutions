import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import fence from "../images/electricfence.jpeg"
import electricfence from "../images/electricfence.jpg"
import electric from "../images/electricfencee.jpg"

export default function ElectricFencesPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electric Fences ⚡</h1>
            <p className="text-lg text-gray-600">
              Secure your property with our professional electric fence installation services.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enhanced Security Solutions 🔒</h2>
              <p className="text-gray-600 mb-4">
                Omnipower Solutions provides comprehensive electric fence installation services for residential,
                commercial, and industrial properties. Our electric fence systems offer an effective deterrent against
                intruders while being safe and compliant with local regulations.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of security experts will assess your property, design a custom electric fence system, and
                handle the entire installation process. We use high-quality components to ensure reliability,
                durability, and optimal performance.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={fence}
                alt="Electric Fence"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={electricfence}
                  alt="Security Fence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Electric Fence Services 🛠️</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Residential Electric Fences</h3>
                    <p className="text-gray-600">
                      Custom electric fence solutions for homes, designed to enhance security while maintaining
                      aesthetic appeal.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Commercial Electric Fences</h3>
                    <p className="text-gray-600">
                      Robust electric fence systems for businesses, warehouses, and commercial properties, providing
                      enhanced security for valuable assets.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Industrial Electric Fences</h3>
                    <p className="text-gray-600">
                      High-security electric fence installations for industrial facilities, factories, and large
                      compounds requiring maximum protection.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Farm & Agricultural Fencing</h3>
                    <p className="text-gray-600">
                      Specialized electric fencing for farms and agricultural properties, designed to protect livestock
                      and crops.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Additional Security Services ✨</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Electric Fence Maintenance</h3>
                    <p className="text-gray-600">
                      Regular maintenance and inspection services to ensure your electric fence system remains in
                      optimal condition.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Electric Fence Repairs</h3>
                    <p className="text-gray-600">
                      Prompt repair services for existing electric fence systems, addressing issues like voltage
                      problems, damaged wires, or faulty energizers.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Integrated Security Systems</h3>
                    <p className="text-gray-600">
                      Integration of electric fences with other security measures like CCTV cameras, alarm systems, and
                      access control for comprehensive protection.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Security Assessments</h3>
                    <p className="text-gray-600">
                      Professional security assessments to identify vulnerabilities and recommend appropriate security
                      measures for your property.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={electric}
                  alt="Secured Property Gate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Electric Fence Services 🏆</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Expert Installation</h3>
                <p className="text-gray-600">
                  Our technicians are certified and experienced in installing all types of electric fence systems,
                  ensuring proper setup and maximum security.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Quality Components</h3>
                <p className="text-gray-600">
                  We use only high-quality energizers, wires, and accessories from trusted manufacturers to ensure
                  reliability and performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Customized Solutions</h3>
                <p className="text-gray-600">
                  We design electric fence systems tailored to your specific security needs, property layout, and budget
                  for optimal protection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Safety Compliance</h3>
                <p className="text-gray-600">
                  All our electric fence installations comply with local safety regulations and standards, ensuring they
                  are effective yet safe.
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
                <h3 className="font-bold text-xl mb-2">24/7 Monitoring Options</h3>
                <p className="text-gray-600">
                  We offer options for 24/7 monitoring of your electric fence system, with alerts sent to your phone or
                  security company in case of breaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property? 🚀</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team of security experts is ready to help you with
            your electric fence needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
