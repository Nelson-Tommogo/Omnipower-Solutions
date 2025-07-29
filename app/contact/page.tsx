import { ContactForm } from "./contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">Have questions or need a quote? Get in touch with our team.</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours. For urgent inquiries, please call
                us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">+254 725 674144</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@omnipowersolutions.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 - 19:00
                      <br />
                      Closed on Weekends
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.70730254863281!3d-1.3028617999999908!2m3!1f0!2f3!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Omnipower Solutions Location"
        ></iframe>
      </div>
    </>
  )
}
