import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { MdCheckCircle } from "react-icons/md"
import cctv from "../images/hdcctv.jpg"
import cctvhd from "../images/cctv.jpg"
import cctvpic from "../images/cctvpic.jpeg"


export default function CCTVInstallationPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CCTV Installation</h1>
            <p className="text-lg text-gray-600">
              Professional CCTV installation services for homes and businesses in Kenya.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Secure Your Property with Advanced CCTV Systems</h2>
              <p className="text-gray-600 mb-4">
                At Omnipower Solutions, we provide comprehensive CCTV installation services to help you monitor and
                protect your property. Our high-quality security cameras offer crystal-clear footage day and night,
                giving you peace of mind knowing your home or business is secure.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of certified technicians will assess your security needs and recommend the best CCTV system for
                your specific requirements. We handle everything from camera placement to system configuration, ensuring
                optimal coverage and functionality.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={cctv}
                alt="CCTV Camera Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={cctvhd}
                  alt="Dome CCTV Camera"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our CCTV Installation Services</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Residential CCTV Systems</h3>
                    <p className="text-gray-600">
                      Protect your home with our residential CCTV solutions. We offer a range of cameras suitable for
                      indoor and outdoor use, with options for remote viewing via smartphone.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Commercial CCTV Systems</h3>
                    <p className="text-gray-600">
                      Comprehensive security solutions for businesses of all sizes. Our commercial CCTV systems help you
                      monitor your premises, deter theft, and ensure employee safety.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">HD & IP Camera Installation</h3>
                    <p className="text-gray-600">
                      We install high-definition and IP cameras that provide superior image quality and advanced
                      features like motion detection and night vision.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">CCTV Maintenance & Repairs</h3>
                    <p className="text-gray-600">
                      We offer maintenance services to ensure your CCTV system remains in optimal condition, as well as
                      repair services for existing systems.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced CCTV Features</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Night Vision Capabilities</h3>
                    <p className="text-gray-600">
                      Our cameras feature advanced infrared technology that provides clear footage even in complete
                      darkness, ensuring 24/7 security coverage.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Remote Monitoring</h3>
                    <p className="text-gray-600">
                      Access your security cameras from anywhere using your smartphone, tablet, or computer with our
                      user-friendly mobile apps and web interfaces.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MdCheckCircle className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Motion Detection Alerts</h3>
                    <p className="text-gray-600">
                      Receive instant notifications when motion is detected, allowing you to respond quickly to
                      potential security threats.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={cctvpic}
                  alt="Night Vision CCTV Camera"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our CCTV Installation Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Professional Installation</h3>
                <p className="text-gray-600">
                  Our technicians are certified and experienced in installing all types of CCTV systems, ensuring proper
                  setup and configuration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Quality Equipment</h3>
                <p className="text-gray-600">
                  We use only high-quality cameras and recording equipment from trusted manufacturers to ensure
                  reliability and performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Customized Solutions</h3>
                <p className="text-gray-600">
                  We design CCTV systems tailored to your specific security needs and property layout for optimal
                  coverage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2">Remote Access</h3>
                <p className="text-gray-600">
                  Our systems can be configured for remote viewing, allowing you to monitor your property from anywhere
                  using your smartphone or computer.
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
                <h3 className="font-bold text-xl mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer competitive pricing without compromising on quality, ensuring you get the best value for your
                  investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team of experts is ready to help you with your CCTV
            installation needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
