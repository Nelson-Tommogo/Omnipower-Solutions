import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { MdCheckCircle } from "react-icons/md"
import { cloudinaryImage } from "@/src/lib/cloudinary"

export default function AboutPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600">Electrical, solar and security solutions in Kenya.</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Power you can trust.</h2>
              <p className="text-gray-600">
                Omnipower Solutions delivers practical electrical, solar and security systems for homes and businesses.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={cloudinaryImage("outdoor.jpg")}
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
            <p className="text-gray-600 max-w-xl mx-auto">Professional work. Quality products. Clear support.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <MdCheckCircle size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Certified Professionals</h3>
              <p className="text-gray-600">Experienced, trained technicians.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <MdCheckCircle size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">Reliable products for lasting results.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <MdCheckCircle size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Support that keeps you confident.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <MdCheckCircle size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Fair pricing, no shortcuts.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <MdCheckCircle size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Warranty & Support</h3>
              <p className="text-gray-600">Warranty and technical support.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <MdCheckCircle size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">Projects delivered on time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Ready to improve your space?</p>
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
