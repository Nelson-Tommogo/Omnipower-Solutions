"use client"

import { useState } from "react"
import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md"
import { cn } from "@/src/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "John Kamau",
    role: "Homeowner",
    content:
      "Omnipower Solutions installed CCTV cameras and an electric fence at my home. Their work was professional and the systems have been working perfectly for over a year now. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    role: "Business Owner",
    content:
      "We hired Omnipower to install security systems at our office complex. Their team was knowledgeable, efficient, and completed the work on schedule. The quality of their work is outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Ochieng",
    role: "Property Manager",
    content:
      "I've worked with many electrical contractors, but Omnipower stands out for their reliability and expertise. They've handled multiple projects for us, from wiring to solar installations, all with excellent results.",
    rating: 4,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p> */}
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <MdStar
                          key={i}
                          size={20}
                          className={cn(i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <MdChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-gray-300",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
