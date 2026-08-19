"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Textarea } from "@/src/components/ui/textarea"
import { useCart } from "@/src/components/cart-provider"
import { CheckCircle, AlertCircle, Copy, CreditCard, Smartphone, Building, ArrowRight, User, Mail, Phone, MapPin } from "lucide-react"

// Payment Details
const MPESA_PAYMENT = {
  paybill: "542542",
  account: "00109525496350",
}

const BANK_PAYMENT = {
  accountName: "OMNIPOWER KENYA SOLUTIONS LIMITED",
  accountNumber: "00109525496350",
  bankName: "I & M Bank",
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
  const [paymentMethod, setPaymentMethod] = useState<"mpesa-stk" | "mpesa-paybill" | "bank">("mpesa-paybill")
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
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md mx-auto">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <CheckCircle className="text-green-600 w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Order Placed! 🎉</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Thank you for your order. Please complete payment using the method you selected.
        </p>

        {paymentMethod === "mpesa-stk" && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 sm:p-4 text-yellow-800">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <h3 className="font-bold text-sm sm:text-base">STK Push Unavailable</h3>
            </div>
            <p className="text-xs sm:text-sm">
              Please use M-Pesa Paybill or Bank Transfer instead.
            </p>
          </div>
        )}

        {paymentMethod === "mpesa-paybill" && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4 text-left space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 justify-center text-blue-900">
              <CreditCard className="w-5 h-5" />
              <h3 className="font-bold text-sm sm:text-base">M-Pesa Paybill</h3>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-gray-500 mb-1">Paybill Number</p>
              <div className="flex items-center justify-between">
                <p className="font-mono font-bold text-base sm:text-lg">{MPESA_PAYMENT.paybill}</p>
                <button
                  onClick={() => copyToClipboard(MPESA_PAYMENT.paybill, "paybill")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition active:bg-gray-200"
                >
                  <Copy className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-gray-500 mb-1">Account Number</p>
              <div className="flex items-center justify-between">
                <p className="font-mono font-bold text-base sm:text-lg">{MPESA_PAYMENT.account}</p>
                <button
                  onClick={() => copyToClipboard(MPESA_PAYMENT.account, "account")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition active:bg-gray-200"
                >
                  <Copy className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
            <div className="bg-blue-100 rounded-lg p-3 text-xs sm:text-sm text-blue-700">
              <p className="font-semibold mb-1">How to pay:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to M-Pesa on your phone</li>
                <li>Select "Lipa na M-Pesa"</li>
                <li>Choose "Paybill"</li>
                <li>Enter Paybill: <span className="font-mono font-bold">{MPESA_PAYMENT.paybill}</span></li>
                <li>Enter Account: <span className="font-mono font-bold">{MPESA_PAYMENT.account}</span></li>
                <li>Enter amount and complete payment</li>
              </ol>
            </div>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 text-left space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 justify-center text-green-900">
              <Building className="w-5 h-5" />
              <h3 className="font-bold text-sm sm:text-base">Bank Transfer</h3>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Account Name</p>
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm sm:text-base">{BANK_PAYMENT.accountName}</p>
                <button
                  onClick={() => copyToClipboard(BANK_PAYMENT.accountName, "accountName")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition active:bg-gray-200"
                >
                  <Copy className="w-4 h-4 text-green-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Account Number</p>
              <div className="flex items-center justify-between">
                <p className="font-mono font-bold text-base sm:text-lg">{BANK_PAYMENT.accountNumber}</p>
                <button
                  onClick={() => copyToClipboard(BANK_PAYMENT.accountNumber, "accountNumber")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition active:bg-gray-200"
                >
                  <Copy className="w-4 h-4 text-green-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-500 mb-1">Bank</p>
              <p className="font-bold text-sm sm:text-base">{BANK_PAYMENT.bankName}</p>
            </div>
            <div className="bg-green-100 rounded-lg p-3 text-xs sm:text-sm text-green-700">
              <p className="font-semibold mb-1">How to pay:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Log in to your bank app or visit a branch</li>
                <li>Add a new beneficiary/payee</li>
                <li>Enter Account Name: <span className="font-bold">{BANK_PAYMENT.accountName}</span></li>
                <li>Enter Account Number: <span className="font-mono font-bold">{BANK_PAYMENT.accountNumber}</span></li>
                <li>Select Bank: <span className="font-bold">{BANK_PAYMENT.bankName}</span></li>
                <li>Enter amount and complete transfer</li>
              </ol>
            </div>
          </div>
        )}

        <Button asChild className="mt-4 sm:mt-6 w-full rounded-xl text-sm sm:text-base">
          <a href="/shop">Continue Shopping</a>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Checkout</h2>

      <div className="space-y-4 sm:space-y-6">
        {/* Payment Method Selection */}
        <div>
          <Label className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 block">Choose Payment Method</Label>
          <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as any)} className="space-y-2">
            <div 
              className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border-2 rounded-xl transition cursor-pointer touch-manipulation ${
                paymentMethod === "mpesa-paybill" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setPaymentMethod("mpesa-paybill")}
            >
              <RadioGroupItem value="mpesa-paybill" id="paybill" className="sr-only" />
              <Label htmlFor="paybill" className="flex items-center gap-2 sm:gap-3 cursor-pointer w-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm sm:text-base">M-Pesa Paybill</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">Pay via M-Pesa paybill</p>
                </div>
                {paymentMethod === "mpesa-paybill" && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                )}
              </Label>
            </div>

            <div 
              className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border-2 rounded-xl transition cursor-pointer touch-manipulation ${
                paymentMethod === "bank" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setPaymentMethod("bank")}
            >
              <RadioGroupItem value="bank" id="bank" className="sr-only" />
              <Label htmlFor="bank" className="flex items-center gap-2 sm:gap-3 cursor-pointer w-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm sm:text-base">Bank Transfer</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">Direct bank transfer</p>
                </div>
                {paymentMethod === "bank" && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                )}
              </Label>
            </div>

            <div 
              className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border-2 rounded-xl transition cursor-pointer touch-manipulation ${
                paymentMethod === "mpesa-stk" ? "border-yellow-500 bg-yellow-50" : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setPaymentMethod("mpesa-stk")}
            >
              <RadioGroupItem value="mpesa-stk" id="stk" className="sr-only" />
              <Label htmlFor="stk" className="flex items-center gap-2 sm:gap-3 cursor-pointer w-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm sm:text-base">M-Pesa STK Push</p>
                  <p className="text-[10px] sm:text-xs text-yellow-600 truncate">⚠️ Under maintenance</p>
                </div>
                {paymentMethod === "mpesa-stk" && (
                  <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                )}
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Payment Instructions based on selection */}
        {paymentMethod === "mpesa-paybill" && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 text-blue-900 mb-2">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="font-semibold text-sm sm:text-base">Pay via M-Pesa Paybill</h3>
            </div>
            <div className="bg-white rounded-lg p-3 mb-3 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Paybill</p>
                  <p className="font-mono font-bold text-base sm:text-lg">{MPESA_PAYMENT.paybill}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(MPESA_PAYMENT.paybill, "paybill")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition active:bg-gray-200"
                >
                  <Copy className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Account Number</p>
                  <p className="font-mono font-bold text-base sm:text-lg">{MPESA_PAYMENT.account}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(MPESA_PAYMENT.account, "account")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition active:bg-gray-200"
                >
                  <Copy className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              Go to M-Pesa → Lipa na M-Pesa → Paybill
            </p>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 text-green-900 mb-2">
              <Building className="w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="font-semibold text-sm sm:text-base">Pay via Bank Transfer</h3>
            </div>
            <div className="bg-white rounded-lg p-3 mb-3 border border-green-200">
              <p className="text-xs text-gray-500">Account Name</p>
              <p className="font-bold text-sm sm:text-base">{BANK_PAYMENT.accountName}</p>
            </div>
            <div className="bg-white rounded-lg p-3 mb-3 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Account Number</p>
                  <p className="font-mono font-bold text-base sm:text-lg">{BANK_PAYMENT.accountNumber}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(BANK_PAYMENT.accountNumber, "accountNumber")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition active:bg-gray-200"
                >
                  <Copy className="w-4 h-4 text-green-600" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-500">Bank</p>
              <p className="font-bold text-sm sm:text-base">{BANK_PAYMENT.bankName}</p>
            </div>
          </div>
        )}

        {paymentMethod === "mpesa-stk" && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 sm:p-4">
            <div className="flex items-start gap-2 text-yellow-700">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm sm:text-base">STK Push Unavailable</p>
                <p className="text-xs sm:text-sm mt-1">
                  This service is currently under maintenance. Please use M-Pesa Paybill or Bank Transfer instead.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* User Details - Only show for STK Push */}
        {paymentMethod === "mpesa-stk" && (
          <div className="space-y-3 sm:space-y-4 border-t pt-3 sm:pt-4">
            <h3 className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              Delivery Details
            </h3>
            
            <div>
              <Label htmlFor="fullName" className="text-xs sm:text-sm">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formState.fullName}
                onChange={handleChange}
                required
                className="mt-1 rounded-xl text-sm sm:text-base h-10 sm:h-11"
                placeholder="John Doe"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="mt-1 rounded-xl text-sm sm:text-base h-10 sm:h-11"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-xs sm:text-sm">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                required
                className="mt-1 rounded-xl text-sm sm:text-base h-10 sm:h-11"
                placeholder="0712345678"
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-xs sm:text-sm">Delivery Address</Label>
              <Input
                id="address"
                name="address"
                value={formState.address}
                onChange={handleChange}
                required
                className="mt-1 rounded-xl text-sm sm:text-base h-10 sm:h-11"
                placeholder="123 Main St, Nairobi"
              />
            </div>

            <div>
              <Label htmlFor="notes" className="text-xs sm:text-sm">Order Notes <span className="text-gray-400">(Optional)</span></Label>
              <Textarea
                id="notes"
                name="notes"
                value={formState.notes}
                onChange={handleChange}
                className="mt-1 rounded-xl text-sm sm:text-base"
                placeholder="Any special instructions..."
                rows={2}
              />
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div className="border-t pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>KSh {totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-gray-600">Delivery</span>
            <span>KSh {deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-base sm:text-lg pt-2 border-t">
            <span>Total</span>
            <span className="text-blue-600">KSh {orderTotal.toLocaleString()}</span>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full rounded-xl text-sm sm:text-base py-5 sm:py-6 h-auto touch-manipulation" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </Button>
      </div>
    </form>
  )
}