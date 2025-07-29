import { CartContent } from "./cart-content"

export default function CartPage() {
  return (
    <div className="py-8">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>
        <CartContent />
      </div>
    </div>
  )
}
