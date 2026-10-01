"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, ShoppingCart, Wrench } from "lucide-react"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Wrench },
  { label: "Shop", href: "/shop", icon: ShoppingBag },
  { label: "Cart", href: "/cart", icon: ShoppingCart },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive =
          href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`mobile-bottom-nav__link${isActive ? " is-active" : ""}`}
          >
            <Icon aria-hidden="true" size={20} />
            <span>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
