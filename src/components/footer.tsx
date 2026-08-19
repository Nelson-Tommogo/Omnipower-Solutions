import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-no-background-vL63ZUhImA3EPgdHudJCaGLKdJ0MUw.png"
              alt="Omnipower Solutions"
              width={200}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="mb-6">
              Omnipower Kenya Solutions Limited is a private company limited by shares, incorporated on 23rd July 2025 under the Companies Act, 2015 of Kenya. 
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61556519845389"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://x.com/omnipowerkenya"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/omnipower-solution-kenya/?"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@evanceokoth0"
                className="hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <span className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/cctv-installation" className="hover:text-primary transition-colors">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-wiring" className="hover:text-primary transition-colors">
                  Electrical Wiring
                </Link>
              </li>
              <li>
                <Link href="/services/solar-installation" className="hover:text-primary transition-colors">
                  Solar Panel Installation
                </Link>
              </li>
              <li>
                <Link href="/services/electric-fences" className="hover:text-primary transition-colors">
                  Electric Fences
                </Link>
              </li>
              <li>
                <Link href="/services/automated-gates" className="hover:text-primary transition-colors">
                  Automated Gates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 text-primary" />
                <div>
                  <span>+254 725 674144</span>
                  <br />
                  <span>+254 759 735505</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="flex-shrink-0 text-primary" />
                <span>info@omnipowersolutions.co.ke</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 text-primary" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex gap-3">
                <Clock size={20} className="flex-shrink-0 text-primary" />
                <span>
                  Mon - Fri: 9:00 - 19:00
                  <br />
                  Closed on Weekends
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Omnipower Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
