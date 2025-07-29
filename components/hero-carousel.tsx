"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__48297-uA3ad9SJ31tv0jqsW61OWOdhubrAoI.jpeg",
    title: "Smart Home Solutions",
    description: "Transform your home with our cutting-edge automation and security systems",
    cta: "Explore Services",
    link: "/services",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__26351-M796N5hJBEMWsaVr65vB0lA3rFLf82.jpeg",
    title: "Advanced Security Systems",
    description: "Protect what matters most with our professional CCTV installation services",
    cta: "View Security Options",
    link: "/services/cctv-installation",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__26354-t69PRWNHxPn8kgcQz0Q6PpVVVTO1GN.jpeg",
    title: "Expert Installation",
    description: "Our certified technicians ensure perfect installation every time",
    cta: "Get a Quote",
    link: "/contact",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Simplified useEffect without isClient state
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Image with overlay */}
          <div className="relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentSlide ? "bg-primary" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
