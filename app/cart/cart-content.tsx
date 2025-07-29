"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"
import { CheckoutForm } from "./checkout-form"

export function CartContent() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    setTimeout(() => {
      clearCart()
      setIsCheckingOut(false)
      alert("Thank you for your order! This is a demo checkout.")
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Cart Items ({items.length})</h2>
          </div>

          <div>
            {items.map((item) => (
              <div key={item.id} className="p-6 border-b flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                </div>

                <div className="flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">KSh {item.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus size={14} />
                  </Button>
                </div>

                <div className="text-right">
                  <div className="font-bold mb-2">KSh {(item.price * item.quantity).toLocaleString()}</div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 -mx-2"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 size={16} className="mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Items ({items.length})</span>
              <span className="font-medium">KSh {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Calculated at checkout</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">KSh {Math.round(totalPrice * 0.16).toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>KSh {Math.round(totalPrice * 1.16).toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Including 16% VAT</p>
          </div>

          <CheckoutForm />

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </div>
            <span>Secure payment</span>
          </div>

          <Button variant="outline" className="w-full mt-4" asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
