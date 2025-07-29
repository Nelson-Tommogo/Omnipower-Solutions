"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart-provider"
import hdcctv from "./hdcctv.jpg"
import cables from "./electricalcables.jpg"
import fence from "./electricfence.jpg"
import smartdoor from "./hdsmartdoorlock.jpg"
import ledflood from "./348.jpg"
import solarpanel from "./solarpanel.jpg"
import nivisionght from "./nightvision.jpg"
import gate from "./automatedgates.jpg"
import smarthome from "./smarthomehub.jpeg"
import securitybox from "./securitybox.jpg"

const products = [
  {
    id: "p1",
    name: "HD CCTV Camera",
    description: "1080p high-definition security camera with night vision",
    price: 7500,
    category: "security",
    image: hdcctv,
    link: "/shop/p1",
  },
  {
    id: "p2",
    name: "Smart Door Lock",
    description: "Fingerprint and PIN code access control system",
    price: 12000,
    category: "security",
    image: smartdoor,
    link: "/shop/p2",
  },
  {
    id: "p3",
    name: "Solar Panel Kit",
    description: "250W solar panel with mounting hardware and inverter",
    price: 25000,
    category: "solar",
    image: solarpanel,
    link: "/shop/p3",
  },
  {
    id: "p4",
    name: "Electric Fence Energizer",
    description: "High-voltage pulse generator for electric fences",
    price: 8500,
    category: "security",
    image: fence,
    link: "/shop/p4",
  },
  {
    id: "p5",
    name: "Automated Gate Motor",
    description: "Heavy-duty motor for sliding and swing gates",
    price: 18000,
    category: "automation",
    image: gate,
    link: "/shop/p5",
  },
  {
    id: "p6",
    name: "Wireless Doorbell",
    description: "Battery-operated doorbell with multiple chimes",
    price: 3500,
    category: "automation",
    image: securitybox, 
    link: "/shop/p6",
  },
  {
    id: "p7",
    name: "LED Floodlight",
    description: "Motion-activated outdoor security light",
    price: 4500,
    category: "lighting",
    image: ledflood,
    link: "/shop/p7",
  },
  {
    id: "p8",
    name: "Electrical Cable",
    description: "10-meter 2.5mm² copper electrical cable",
    price: 2000,
    category: "electrical",
    image: cables,
    link: "/shop/p8",
  },
  {
    id: "p9",
    name: "Night Vision CCTV Camera",
    description: "Advanced night vision camera with infrared LEDs",
    price: 9500,
    category: "security",
    image: nivisionght,
    link: "/shop/p9",
  },
  {
    id: "p10",
    name: "Security Control Box",
    description: "Central control unit for security systems",
    price: 15000,
    category: "security",
    image: securitybox,
    link: "/shop/p10",
  },
  {
    id: "p11",
    name: "Outdoor Security Camera",
    description: "Weatherproof security camera with motion detection",
    price: 8200,
    category: "security",
    image: hdcctv,
    link: "/shop/p11",
  },
  {
    id: "p12",
    name: "Smart Home Hub",
    description: "Central control system for home automation",
    price: 12500,
    category: "automation",
    image: smarthome,
    link: "/shop/p12",
  },
]

const categories = [
  { id: "security", name: "Security Systems" },
  { id: "solar", name: "Solar Products" },
  { id: "automation", name: "Home Automation" },
  { id: "lighting", name: "Lighting" },
  { id: "electrical", name: "Electrical Supplies" },
]

export function ShopContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const { addItem } = useCart()

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)

    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
      {/* Mobile filter toggle */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <Button
          variant="outline"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="flex items-center gap-2"
        >
          <Filter size={16} />
          Filters
        </Button>

        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full max-w-xs"
          />
        </div>
      </div>

      {/* Sidebar filters */}
      <div className={`${isMobileFilterOpen ? "block" : "hidden"} md:block`}>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                />
                <Label htmlFor={`category-${category.id}`} className="cursor-pointer">
                  {category.name}
                </Label>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden md:block">
            <h2 className="text-lg font-bold mb-4">Search</h2>
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link href={product.link} key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full transition-transform group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">KSh {product.price.toLocaleString()}</span>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault()
                          handleAddToCart(product)
                        }}
                        className="flex items-center gap-1"
                      >
                        <ShoppingCart size={16} />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}