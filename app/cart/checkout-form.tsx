"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/components/cart-provider"
import { CheckCircle } from "lucide-react"

export function CheckoutForm() {
  const { totalPrice, clearCart } = useCart()
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Nairobi",
    location: "cbd",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleLocationChange = (value: string) => {
    setFormState((prev) => ({ ...prev, location: value }))
  }

  // Calculate delivery fee based on cart total and location
  const calculateDeliveryFee = () => {
    if (formState.location === "cbd") {
      return 0 // Free delivery in CBD
    } else if (totalPrice > 5000) {
      return 500 // KSh 200 for orders above KSh 1000 outside CBD
    } else if (totalPrice > 500) {
      return 250 // KSh 150 for orders between KSh 300-1000 outside CBD
    } else {
      return 100 // Base delivery fee for small orders
    }
  }

  const deliveryFee = calculateDeliveryFee()
  const orderTotal = totalPrice + deliveryFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsCompleted(true)
      clearCart()
    }, 2000)
  }

  if (isCompleted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600 w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Order Completed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Please complete your payment using the details below:
        </p>

        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700">
          <h3 className="font-bold text-blue-800 mb-2">Payment Instructions</h3>
          <p className="mb-2">Please pay via M-PESA using the following details:</p>
          <p className="font-bold">Paybill Number: 400200</p>
          <p className="font-bold">Account Number: 648931</p>
          <p className="mt-2 text-sm">Your order will be processed once payment is confirmed.</p>
        </div>

        <Button asChild>
          <a href="/shop">Continue Shopping</a>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              required
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address">Delivery Address</Label>
          <Input
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" value={formState.city} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <Label>Delivery Location</Label>
            <RadioGroup value={formState.location} onValueChange={handleLocationChange} className="mt-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cbd" id="cbd" />
                <Label htmlFor="cbd" className="cursor-pointer">
                  Nairobi CBD (Free Delivery)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="outside" id="outside" />
                <Label htmlFor="outside" className="cursor-pointer">
                  Outside CBD (Delivery Fee Applies)
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div>
          <Label htmlFor="notes">Order Notes (Optional)</Label>
          <Textarea
            id="notes"
            name="notes"
            value={formState.notes}
            onChange={handleChange}
            className="mt-1"
            placeholder="Special instructions for delivery"
          />
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>KSh {totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee:</span>
            <span>{deliveryFee === 0 ? "Free" : `KSh ${deliveryFee.toLocaleString()}`}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>KSh {orderTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700">
          <h3 className="font-bold text-blue-800 mb-2">Payment Information</h3>
          <p className="mb-2">After completing your order, you will need to make payment via M-PESA:</p>
          <p className="font-bold">Paybill Number: 400200</p>
          <p className="font-bold">Account Number: 648931</p>
          <p className="font-bold">Account Name: Omnipower Solutions</p>
          <p className="mt-2 text-sm">Your order will be processed once payment is confirmed.</p>
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Complete Order"}
        </Button>
      </div>
    </form>
  )
}
