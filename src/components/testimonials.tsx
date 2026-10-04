"use client"

import { useState } from "react"
import { Avatar, Box, Container, IconButton, Rating, Stack, Typography } from "@mui/material"
import { MdChevronLeft, MdChevronRight, MdFormatQuote } from "react-icons/md"

const testimonials = [
  {
    id: 1,
    name: "John Kamau",
    role: "Homeowner",
    content:
      "Omnipower installed CCTV cameras and an electric fence at my home. The team was professional, and the systems have worked perfectly. I would highly recommend them.",
    rating: 5,
    initials: "JK",
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    role: "Business owner",
    content:
      "Their team was knowledgeable, efficient, and completed our office security installation on schedule. The quality of the work is outstanding.",
    rating: 5,
    initials: "SW",
  },
  {
    id: 3,
    name: "David Ochieng",
    role: "Property manager",
    content:
      "Omnipower stands out for reliability and expertise. They have handled several projects for us, from electrical wiring to solar installation, with excellent results.",
    rating: 5,
    initials: "DO",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]
  const moveTestimonial = (step: number) => {
    setActiveIndex((index) => (index + step + testimonials.length) % testimonials.length)
  }

  return (
    <Box component="section" aria-label="Client testimonials" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f7f7f5" }}>
      <Container maxWidth="md">
        <Stack alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.16em" }}>
            Good work speaks for itself
          </Typography>
          <Typography component="h2" variant="h3" sx={{ mt: 1, fontWeight: 800, letterSpacing: "-0.04em" }}>
            Trusted by our clients.
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              mt: 5,
              p: { xs: 3, sm: 6 },
              borderRadius: 4,
              bgcolor: "white",
              boxShadow: "0 15px 45px rgba(18,30,25,0.06)",
            }}
          >
            <MdFormatQuote size={42} color="#e7461c" />
            <Rating value={testimonial.rating} readOnly sx={{ display: "flex", justifyContent: "center", my: 2 }} />
            <Typography
              key={testimonial.id}
              sx={{
                maxWidth: 680,
                mx: "auto",
                color: "text.primary",
                fontSize: { xs: 18, sm: 22 },
                lineHeight: 1.75,
                fontWeight: 500,
              }}
            >
              “{testimonial.content}”
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1.5} sx={{ mt: 4 }}>
              <Avatar sx={{ bgcolor: "secondary.main", width: 46, height: 46, fontWeight: 700 }}>
                {testimonial.initials}
              </Avatar>
              <Box sx={{ textAlign: "left" }}>
                <Typography sx={{ fontWeight: 750 }}>{testimonial.name}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {testimonial.role}
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={1} sx={{ mt: 3 }}>
              {testimonials.map((item, index) => (
                <Box
                  key={item.id}
                  component="button"
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    width: index === activeIndex ? 28 : 8,
                    height: 8,
                    p: 0,
                    border: 0,
                    borderRadius: 10,
                    bgcolor: index === activeIndex ? "primary.main" : "grey.300",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
            <IconButton
              onClick={() => moveTestimonial(-1)}
              aria-label="Previous testimonial"
              sx={{
                position: "absolute",
                left: { xs: 4, sm: 12 },
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 1,
              }}
            >
              <MdChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => moveTestimonial(1)}
              aria-label="Next testimonial"
              sx={{
                position: "absolute",
                right: { xs: 4, sm: 12 },
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 1,
              }}
            >
              <MdChevronRight />
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
