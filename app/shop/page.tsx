"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { MouseEvent } from "react"
import { MdShoppingCart, MdFilterList, MdSearch } from "react-icons/md"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Checkbox } from "@/src/components/ui/checkbox"
import { Label } from "@/src/components/ui/label"
import { useCart } from "@/src/components/cart-provider"
import { cloudinaryImage } from "@/src/lib/cloudinary"

const products = [
  {
    id: "p1",
    name: "HD CCTV Camera",
    description: "1080p high-definition security camera with night vision",
    price: 7500,
    category: "security",
    image: cloudinaryImage("hdcctv.jpg"),
    link: "/shop/p1",
  },
  {
    id: "p2",
    name: "Solar Panel Kit",
    description: "250W solar panel with mounting hardware and inverter",
    price: 25000,
    category: "solar",
    image: cloudinaryImage("solarpanel.jpg"),
    link: "/shop/p2",
  },
  {
    id: "p3",
    name: "Automated Gate Motor",
    description: "Heavy-duty motor for sliding and swing gates",
    price: 18000,
    category: "automation",
    image: cloudinaryImage("automatedgates.jpg"),
    link: "/shop/p3",
  },
]

const categories = [
  { id: "security", name: "Security Systems" },
  { id: "solar", name: "Solar Products" },
  { id: "automation", name: "Home Automation" },
]

export default function ShopPage() {
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
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (product: (typeof products)[number]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="py-8">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop</h1>

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Mobile filter toggle */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <Button
              variant="outline"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center gap-2"
            >
              <MdFilterList size={16} />
              Filters
            </Button>

            <div className="relative">
              <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
                  <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
                          <span className="text-xl font-bold">
                            KSh {product.price.toLocaleString()}
                          </span>
                          <Button
                            size="sm"
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                              e.preventDefault()
                              handleAddToCart(product)
                            }}
                            className="flex items-center gap-1"
                          >
                            <MdShoppingCart size={16} />
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
      </div>
    </div>
  )
}