"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Phone, Clock, Mail, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  const { totalItems } = useCart()

  // Set isClient to true once the component is mounted
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isClient])

  // Check if the business is currently open
  useEffect(() => {
    if (!isClient) return

    const checkBusinessHours = () => {
      const now = new Date()
      const day = now.getDay() // 0 is Sunday, 6 is Saturday
      const hours = now.getHours()

      // Closed on weekends (Saturday and Sunday)
      if (day === 0 || day === 6) {
        setIsOpen(false)
        return
      }

      // Open Monday-Friday from 9:00 to 19:00
      if (hours >= 9 && hours < 19) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    checkBusinessHours()
    // Update every minute
    const interval = setInterval(checkBusinessHours, 60000)
    return () => clearInterval(interval)
  }, [isClient])

  return (
    <header className="w-full">
      {/* Top bar - hidden on mobile */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-8 text-sm">
            <a href="tel:+254725674144" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone size={16} />
              <span>+254 725 674144 / +254 759 735505</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>
                Mon - Fri: 9:00 - 19:00
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/20">
                  {isOpen ? "Open Now" : "Closed Now"}
                </span>
              </span>
            </div>
            <a
              href="mailto:info@omnipowersolutions.co.ke"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail size={16} />
              <span>info@omnipowersolutions.co.ke</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={cn("py-4 transition-all duration-300 bg-white", isScrolled && "shadow-md py-2 sticky top-0 z-50")}
      >
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-no-background-vL63ZUhImA3EPgdHudJCaGLKdJ0MUw.png"
              alt="Omnipower Solutions"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={cn("font-medium hover:text-primary transition-colors", pathname === "/" && "text-primary")}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "font-medium hover:text-primary transition-colors",
                pathname === "/services" && "text-primary",
              )}
            >
              Services
            </Link>
            <Link
              href="/shop"
              className={cn("font-medium hover:text-primary transition-colors", pathname === "/shop" && "text-primary")}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-medium hover:text-primary transition-colors",
                pathname === "/about" && "text-primary",
              )}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-medium hover:text-primary transition-colors",
                pathname === "/contact" && "text-primary",
              )}
            >
              Contact
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart />
              {isClient && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Button asChild>
              <Link href="/contact">Free Quote</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative">
              <ShoppingCart />
              {isClient && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-50 w-full">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className={cn(
                "font-medium hover:text-primary transition-colors py-2 border-b",
                pathname === "/" && "text-primary",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "font-medium hover:text-primary transition-colors py-2 border-b",
                pathname === "/services" && "text-primary",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/shop"
              className={cn(
                "font-medium hover:text-primary transition-colors py-2 border-b",
                pathname === "/shop" && "text-primary",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-medium hover:text-primary transition-colors py-2 border-b",
                pathname === "/about" && "text-primary",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-medium hover:text-primary transition-colors py-2 border-b",
                pathname === "/contact" && "text-primary",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 py-2 border-b">
              <a href="tel:+254725674144" className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <span>+254 725 674144</span>
              </a>
              <a href="mailto:info@omnipowersolutions.co.ke" className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <span>info@omnipowersolutions.co.ke</span>
              </a>
            </div>
            <Button asChild className="mt-2">
              <Link href="/contact">Free Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
