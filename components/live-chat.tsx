"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; time: string }[]>([
    {
      text: "Hello! Welcome to Omnipower Solutions. How can we help you today?",
      isUser: false,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const userMessage = {
      text: newMessage,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message. Our team will get back to you shortly.",
        "We appreciate your interest. How can we assist you further?",
        "That's a great question! Let me find the best answer for you.",
        "Would you like to schedule a consultation with one of our experts?",
        "We offer free quotes for all our services. Would you like us to provide one?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage = {
        text: randomResponse,
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all z-50"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="bg-primary text-white p-4 flex items-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-no-background-vL63ZUhImA3EPgdHudJCaGLKdJ0MUw.png"
                alt="Omnipower Solutions"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="font-bold">Omnipower Support</h3>
              <p className="text-xs opacity-80">We typically reply within a few minutes</p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p>{message.text}</p>
                  <span className={`text-xs block mt-1 ${message.isUser ? "text-white/70" : "text-gray-500"}`}>
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none p-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!newMessage.trim() || isTyping}>
              {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
