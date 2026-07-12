"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/components/cart-provider"
import { CheckCircle, AlertCircle, Copy, CreditCard, Smartphone, Building } from "lucide-react"

// Payment Details
const MPESA_PAYMENT = {
  paybill: "542542",
  account: "00109525496350",
}

const BANK_PAYMENT = {
  accountName: "OMNIPOWER SOLUTIONS",
  accountNumber: "0123456789",
  bankName: "Kenya Commercial Bank",
}

export function CheckoutForm() {
  const { totalPrice, clearCart } = useCart()
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<"mpesa-stk" | "mpesa-paybill" | "bank">("mpesa-stk")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const deliveryFee = totalPrice > 0 ? 200 : 0
  const orderTotal = totalPrice + deliveryFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsCompleted(true)
      clearCart()
    }, 1500)
  }

  if (isCompleted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600 w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Order Placed! 🎉</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Complete your payment using the instructions below.
        </p>

        {paymentMethod === "mpesa-stk" && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-yellow-800">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <h3 className="font-bold">STK Push Unavailable</h3>
            </div>
            <p className="text-sm">
              The M-Pesa STK prompt is currently under maintenance. Please use one of the other payment methods.
            </p>
          </div>
        )}

        {paymentMethod === "mpesa-paybill" && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left space-y-4">
            <h3 className="font-bold text-blue-900 text-center">M-Pesa Paybill</h3>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-gray-500 mb-1">Paybill Number</p>
              <div className="flex items-center justify-between">
                <p className="font-mono font-bold text-lg">{MPESA_PAYMENT.paybill}</p>
                <button
                  onClick={() => copyToClipboard(MPESA_PAYMENT.paybill, "paybill")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <Copy className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-gray-500 mb-1">Account Number</p>
              <div className="flex items-center justify-between">
                <p className="font-mono font-bold text-lg">{MPESA_PAYMENT.account}</p>
                <button
                  onClick={() => copyToClipboard(MPESA_PAYMENT.account, "account")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <Copy className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
            <p className="text-sm text-blue-700 bg-blue-100 rounded-lg p-3">
              Go to M-Pesa → Lipa na M-Pesa → Paybill → Enter details above
            </p>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-left space-y-4">
            <h3 className="font-bold text-green-900 text-center">Bank Transfer</h3>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Account Name</p>
              <div className="flex items-center justify-between">
                <p className="font-bold">{BANK_PAYMENT.accountName}</p>
                <button
                  onClick={() => copyToClipboard(BANK_PAYMENT.accountName, "accountName")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <Copy className="w-4 h-4 text-green-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Account Number</p>
              <div className="flex items-center justify-between">
                <p className="font-mono font-bold text-lg">{BANK_PAYMENT.accountNumber}</p>
                <button
                  onClick={() => copyToClipboard(BANK_PAYMENT.accountNumber, "accountNumber")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <Copy className="w-4 h-4 text-green-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Bank</p>
              <p className="font-bold">{BANK_PAYMENT.bankName}</p>
            </div>
          </div>
        )}

        <Button asChild className="mt-6 w-full rounded-xl">
          <a href="/shop">Continue Shopping</a>
        </Button>
      </div>
    )
  }

  const getPaymentIcon = (method: string) => {
    switch(method) {
      case "mpesa-stk": return <Smartphone className="w-5 h-5" />
      case "mpesa-paybill": return <CreditCard className="w-5 h-5" />
      case "bank": return <Building className="w-5 h-5" />
      default: return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="space-y-6">
        {/* Payment Method Selection */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Choose Payment Method</Label>
          <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as any)} className="space-y-2">
            <div className={`flex items-center gap-3 p-3 border-2 rounded-xl transition cursor-pointer ${paymentMethod === "mpesa-stk" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}>
              <RadioGroupItem value="mpesa-stk" id="stk" className="sr-only" />
              <Label htmlFor="stk" className="flex items-center gap-3 cursor-pointer w-full">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">M-Pesa STK Push</p>
                  <p className="text-xs text-gray-500">Automatic prompt on your phone</p>
                </div>
                {paymentMethod === "mpesa-stk" && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </Label>
            </div>

            <div className={`flex items-center gap-3 p-3 border-2 rounded-xl transition cursor-pointer ${paymentMethod === "mpesa-paybill" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}>
              <RadioGroupItem value="mpesa-paybill" id="paybill" className="sr-only" />
              <Label htmlFor="paybill" className="flex items-center gap-3 cursor-pointer w-full">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">M-Pesa Paybill</p>
                  <p className="text-xs text-gray-500">Manual entry using paybill</p>
                </div>
                {paymentMethod === "mpesa-paybill" && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </Label>
            </div>

            <div className={`flex items-center gap-3 p-3 border-2 rounded-xl transition cursor-pointer ${paymentMethod === "bank" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}>
              <RadioGroupItem value="bank" id="bank" className="sr-only" />
              <Label htmlFor="bank" className="flex items-center gap-3 cursor-pointer w-full">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Bank Transfer</p>
                  <p className="text-xs text-gray-500">Direct bank transfer</p>
                </div>
                {paymentMethod === "bank" && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* STK Push Input */}
        {paymentMethod === "mpesa-stk" && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-3 text-yellow-700 bg-yellow-50 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">STK Push is currently under maintenance</p>
            </div>
          </div>
        )}

        {/* User Details */}
        <div className="space-y-4 border-t pt-4">
          <h3 className="text-sm font-medium text-gray-700">Delivery Details</h3>
          
          <div>
            <Label htmlFor="fullName" className="text-sm">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
              required
              className="mt-1 rounded-xl"
              placeholder="John Doe"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="mt-1 rounded-xl"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              required
              className="mt-1 rounded-xl"
              placeholder="0712345678"
            />
          </div>

          <div>
            <Label htmlFor="address" className="text-sm">Delivery Address</Label>
            <Input
              id="address"
              name="address"
              value={formState.address}
              onChange={handleChange}
              required
              className="mt-1 rounded-xl"
              placeholder="123 Main St, Nairobi"
            />
          </div>

          <div>
            <Label htmlFor="notes" className="text-sm">Order Notes (Optional)</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formState.notes}
              onChange={handleChange}
              className="mt-1 rounded-xl"
              placeholder="Any special instructions..."
              rows={2}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>KSh {totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Delivery</span>
            <span>KSh {deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span className="text-blue-600">KSh {orderTotal.toLocaleString()}</span>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full rounded-xl text-base py-6" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </Button>
      </div>
    </form>
  )
}