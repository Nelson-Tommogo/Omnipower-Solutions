"use client"

import Image from "next/image"
import Link from "next/link"
import { MdShoppingCart } from "react-icons/md"
import { Button } from "@/src/components/ui/button"
import { useCart } from "./cart-provider"
import cctv from "./images/hdcctv.jpg"
import smartdoor from "./images/hdsmartdoorlock.jpg"
import solar from "./images/solarpanelkit.jpg"
import fence from "./images/electricfence.jpg"


const products = [
  {
    id: "p1",
    name: "HD CCTV Camera",
    description: "1080p high-definition security camera with night vision",
    price: 7500,
    image: cctv
    },
  { 
    id: "p2",
    name: "Smart Door Lock",
    description: "Fingerprint and PIN code access control system",
    price: 12000,
    image: smartdoor
  },
  {
    id: "p3",
    name: "Solar Panel Kit",
    description: "250W solar panel with mounting hardware and inverter",
    price: 25000,
    image: solar
  },
  {
    id: "p4",
    name: "Electric Fence Energizer",
    description: "High-voltage pulse generator for electric fences",
    price: 8500,
    image: fence
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our selection of high-quality products for your security and electrical needs. All products come
            with warranty and professional installation options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="relative h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">KSh {product.price.toLocaleString()}</span>
                  <Button size="sm" onClick={() => handleAddToCart(product)} className="flex items-center gap-1">
                    <MdShoppingCart size={16} />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
