"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import { MdChevronLeft, MdChevronRight, MdOutlineBolt, MdOutlineVerifiedUser } from "react-icons/md"
import cctvImage from "../../app/services/images/cctvpic.jpeg"
import solarImage from "../../app/services/images/panel.jpeg"
import wiringImage from "../../app/services/images/wiring.jpeg"

const slides = [
  {
    image: cctvImage,
    eyebrow: "Powering safer, smarter spaces",
    title: "Technology that works for you.",
    description: "Expert electrical, solar and security solutions for homes and businesses across Kenya.",
    cta: "Explore our services",
    href: "/services",
  },
  {
    image: solarImage,
    eyebrow: "Energy with a brighter future",
    title: "Make every ray count.",
    description: "Discover dependable solar systems designed around your property and your energy needs.",
    cta: "Explore solar solutions",
    href: "/services/solar-installation",
  },
  {
    image: wiringImage,
    eyebrow: "Built on expertise",
    title: "Power you can depend on.",
    description: "From a single upgrade to a complete installation, our team gets the details right.",
    cta: "Talk to our team",
    href: "/contact",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((index) => (index + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(interval)
  }, [])

  const moveSlide = (step: number) => {
    setCurrentSlide((index) => (index + step + slides.length) % slides.length)
  }

  return (
    <Box
      component="section"
      aria-label="Featured solutions"
      sx={{
        position: "relative",
        minHeight: { xs: 570, md: 660 },
        overflow: "hidden",
        bgcolor: "#171817",
        color: "common.white",
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={slide.title}
          aria-hidden={index !== currentSlide}
          sx={{
            position: "absolute",
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 900ms ease",
            pointerEvents: index === currentSlide ? "auto" : "none",
          }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>
      ))}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(16,19,18,0.88) 0%, rgba(16,19,18,0.66) 48%, rgba(16,19,18,0.12) 100%)",
        }}
      />
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, minHeight: { xs: 570, md: 660 }, display: "flex", alignItems: "center" }}
      >
        {slides.map((slide, index) => (
          <Box
            key={slide.title}
            aria-live={index === currentSlide ? "polite" : undefined}
            sx={{
              display: index === currentSlide ? "block" : "none",
              maxWidth: 730,
              py: 8,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, color: "#ffb348" }}>
              <MdOutlineBolt size={19} />
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: "0.16em" }}>
                {slide.eyebrow}
              </Typography>
            </Box>
            <Typography
              component="h1"
              sx={{
                maxWidth: 700,
                fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: "-0.055em",
                textWrap: "balance",
              }}
            >
              {slide.title}
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 570, color: "rgba(255,255,255,0.82)", fontSize: { xs: 16, md: 19 }, lineHeight: 1.8 }}>
              {slide.description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "center" }, gap: 2, mt: 4 }}>
              <Button
                component={Link}
                href={slide.href}
                variant="contained"
                size="large"
                sx={{ px: 3.5, py: 1.5, borderRadius: 99, bgcolor: "primary.main", fontWeight: 700 }}
              >
                {slide.cta}
                <MdChevronRight size={21} style={{ marginLeft: 8 }} />
              </Button>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "rgba(255,255,255,0.85)", px: { sm: 1 } }}>
                <MdOutlineVerifiedUser size={20} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Trusted local expertise
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Container>

      <Box sx={{ display: "flex", gap: 1, position: "absolute", right: { xs: 18, md: 48 }, bottom: 28, zIndex: 2 }}>
        <IconButton
          onClick={() => moveSlide(-1)}
          aria-label="Previous featured solution"
          sx={{ color: "white", border: "1px solid rgba(255,255,255,0.5)", bgcolor: "rgba(15,15,15,0.18)" }}
        >
          <MdChevronLeft />
        </IconButton>
        <IconButton
          onClick={() => moveSlide(1)}
          aria-label="Next featured solution"
          sx={{ color: "white", border: "1px solid rgba(255,255,255,0.5)", bgcolor: "rgba(15,15,15,0.18)" }}
        >
          <MdChevronRight />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", gap: 1, position: "absolute", left: { xs: 24, md: "max(calc((100vw - 1200px) / 2), 24px)" }, bottom: 38, zIndex: 2 }}>
        {slides.map((slide, index) => (
          <Box
            key={slide.title}
            component="button"
            type="button"
            aria-label={`Show featured solution ${index + 1}`}
            aria-current={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: index === currentSlide ? 30 : 8,
              height: 8,
              p: 0,
              border: 0,
              borderRadius: 10,
              bgcolor: index === currentSlide ? "primary.main" : "rgba(255,255,255,0.55)",
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
