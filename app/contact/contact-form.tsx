"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h3>
        <p className="text-green-600 mb-6">
          Your message has been sent successfully. We'll get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formState.name} onChange={handleChange} required className="mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="service">Service of Interest</Label>
          <Select value={formState.service} onValueChange={handleServiceChange}>
            <SelectTrigger id="service" className="mt-1">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cctv">CCTV Installation</SelectItem>
              <SelectItem value="wiring">Electrical Wiring</SelectItem>
              <SelectItem value="solar">Solar Installation</SelectItem>
              <SelectItem value="fences">Electric Fences</SelectItem>
              <SelectItem value="gates">Automated Gates</SelectItem>
              <SelectItem value="home">Home Automation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className="mt-1 min-h-32"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}
