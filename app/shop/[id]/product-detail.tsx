"use client"

import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, Check, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"

type ProductDetailProps = {
  product: {
    id: string
    name: string
    description: string
    fullDescription: string
    price: number
    category: string
    features: string[]
    specifications: Record<string, string>
    image: string
  }
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 p-8">
          <div className="relative h-80">
            <Image 
              src={product.image || "/placeholder.svg"} 
              alt={product.name} 
              fill 
              className="object-contain" 
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>

        <div className="text-3xl font-bold mb-6">KSh {product.price.toLocaleString()}</div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="h-10 w-10"
            >
              <ChevronDown size={16} />
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button variant="outline" size="icon" onClick={incrementQuantity} className="h-10 w-10">
              <ChevronUp size={16} />
            </Button>
          </div>
        </div>

        <Button size="lg" onClick={handleAddToCart} className="w-full mb-8" disabled={isAdded}>
          {isAdded ? (
            <>
              <Check size={16} className="mr-2" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </>
          )}
        </Button>

        <Tabs defaultValue="description">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="text-gray-600">
            <p>{product.fullDescription}</p>
          </TabsContent>

          <TabsContent value="features">
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="specifications">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b pb-2">
                  <span className="font-medium">{key}:</span> {value}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}