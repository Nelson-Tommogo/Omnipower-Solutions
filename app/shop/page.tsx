import { ShopContent } from "./shop-content"

export default function ShopPage() {
  return (
    <div className="py-8">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop</h1>
        <ShopContent />
      </div>
    </div>
  )
}
