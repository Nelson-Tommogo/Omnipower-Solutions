import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Electrical Wiring",
    description: "Professional electrical wiring services for residential and commercial properties.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__26353-J4s65jyv6FZSx5HrvokZInknhuyzIx.jpeg",
    link: "/services/electrical-wiring",
  },
  {
    id: 2,
    title: "Solar Installation",
    description: "Harness the power of the sun with our expert solar panel installation services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d9b0cd4-5e14-4bfd-a978-311cd3c56562.jpg-TYTZaLlvR1dINOcf6VG2dGVe29y5bP.jpeg",
    link: "/services/solar-installation",
  },
  {
    id: 3,
    title: "CCTV Installation",
    description: "Keep your property secure with our state-of-the-art CCTV installation services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ee3ebcd5-724c-4d8f-8897-807035d34b4b.jpg-I8jtLIBnS5VE8ic6Kn4djr8JmgOpfC.jpeg",
    link: "/services/cctv-installation",
  },
  {
    id: 4,
    title: "Electric Fences",
    description: "Enhance your security with our reliable electric fence installation services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__26352-3AxXdKeLUlyp7V4LTnIEd8hKc1hKdA.jpeg",
    link: "/services/electric-fences",
  },
  {
    id: 5,
    title: "Automated Gates",
    description: "Upgrade your property with our convenient automated gate installation services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__26350-Adx6dX9UpVHjbwhsG98VpH2esF8oUf.jpeg",
    link: "/services/automated-gates",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of electrical and security services to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-blue-600 font-medium hover:underline inline-flex items-center"
                >
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
