"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "+254725674144"
  const message = "Hello, I'm interested in your services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <span className="absolute right-full mr-3 bg-white text-green-600 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
            Chat on WhatsApp
          </span>
        )}
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <MessageCircle size={24} />
        </div>
      </a>
    </div>
  )
}
