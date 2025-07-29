import Image from "next/image"
import Link from "next/link"
import wiring from "./images/wiring.jpeg"
import solar from "./images/solarpanelkit.jpg"
import cctv from "./images/cctvpic.jpeg"
import fences from "./images/electricfence.jpeg"
import gates from "./images/automatedgates.jpg"

const services = [
  {
    id: 1,
    title: "Electrical Wiring",
    description:
      "Our professional electrical wiring services ensure safe and efficient electrical systems for your home or business. We handle everything from new installations to rewiring and repairs, all compliant with the latest safety standards.",
    image:wiring,
    link: "/services/electrical-wiring",
    features: [
      "Complete home and business wiring",
      "Electrical panel upgrades",
      "Circuit installations and repairs",
      "Safety inspections and certifications",
      "Troubleshooting electrical issues",
    ],
  },
  {
    id: 2,
    title: "Solar Installation",
    description:
      "Harness the power of the sun with our expert solar panel installation services. We design and install custom solar solutions that reduce your energy bills and environmental footprint.",
    image:solar,
    link: "/services/solar-installation",
    features: [
      "Custom solar system design",
      "High-efficiency panel installation",
      "Battery storage solutions",
      "Grid-tied and off-grid systems",
      "Maintenance and monitoring services",
    ],
  },
  {
    id: 3,
    title: "CCTV Installation",
    description:
      "Keep your property secure with our state-of-the-art CCTV installation services. We provide comprehensive surveillance solutions tailored to your specific security needs.",
    image:cctv,
    link: "/services/cctv-installation",
    features: [
      "HD and 4K camera systems",
      "Remote viewing capabilities",
      "Night vision and motion detection",
      "Digital video recording (DVR)",
      "Professional monitoring options",
    ],
  },
  {
    id: 4,
    title: "Electric Fences",
    description:
      "Enhance your security with our reliable electric fence installation services. Our electric fencing solutions provide an effective deterrent against intruders while being safe for family and pets.",
    image:fences,
    link: "/services/electric-fences",
    features: [
      "Perimeter security solutions",
      "Energizer and controller installation",
      "Safety compliance and certification",
      "Integration with alarm systems",
      "Regular maintenance services",
    ],
  },
  {
    id: 5,
    title: "Automated Gates",
    description:
      "Upgrade your property with our convenient automated gate installation services. Our automated gates combine security with convenience, allowing easy access control for your property.",
    image:gates,
    link: "/services/automated-gates",
    features: [
      "Sliding and swing gate automation",
      "Remote control and keypad access",
      "Intercom and video integration",
      "Safety sensors and features",
      "Custom design and installation",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          At <em>Omnipower Solutions</em>, we provide a comprehensive range of electrical and security services for
          residential and commercial properties. Our team of experienced professionals ensures high-quality workmanship
          and customer satisfaction.
        </p>

        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We understand that every client has unique needs. Contact us today to discuss your specific requirements and
            get a personalized service quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us For a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}
