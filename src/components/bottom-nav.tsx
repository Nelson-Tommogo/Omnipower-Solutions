"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  MdHome,
  MdBuild,
  MdStorefront,
  MdShoppingCart,
  MdSettings,
} from "react-icons/md"

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: MdHome,
  },
  {
    label: "Service",
    href: "/services",
    icon: MdBuild,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: MdShoppingCart,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: MdSettings,
  },
]

export function BottomNav() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)

  const renderItem = (
    href: string,
    label: string,
    Icon: typeof MdHome,
  ) => {
    const active = isActive(href)

    return (
      <Link
        key={href}
        href={href}
        aria-label={label}
        aria-current={active ? "page" : undefined}
        className="relative z-10 flex h-full flex-1 flex-col items-center justify-center gap-[5px]"
      >
        <Icon
          size={23}
          className={
            active
              ? "text-[#6C4CF1]"
              : "text-[#A5B0C0]"
          }
        />

        <span
          className={[
            "text-[11px] leading-none",
            active
              ? "font-medium text-[#6C4CF1]"
              : "font-normal text-[#8F99AA]",
          ].join(" ")}
        >
          {label}
        </span>
      </Link>
    )
  }

  const shopActive = isActive("/shop")

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="relative mx-auto h-[86px] w-full max-w-[520px]">

        {/* Curved dark navigation background */}
        <svg
          className="absolute inset-x-0 bottom-0 h-[78px] w-full"
          viewBox="0 0 470 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 0 4
              C 100 18, 145 24, 235 24
              C 325 24, 370 18, 470 4
              L 470 90
              L 0 90
              Z
            "
            fill="#171C1A"
          />
        </svg>

        {/* Soft shadow */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45px]"
          style={{
            boxShadow: "0 -8px 25px rgba(0,0,0,0.18)",
          }}
        />

        {/* Navigation content */}
        <div className="absolute bottom-0 left-0 right-0 h-[70px]">
          <div className="flex h-full w-full">

            {/* Home */}
            {renderItem("/", "Home", MdHome)}

            {/* Service */}
            {renderItem("/services", "Service", MdBuild)}

            {/* Center Shop space */}
            <div className="flex-1" aria-hidden="true" />

            {/* Cart */}
            {renderItem("/cart", "Cart", MdShoppingCart)}

            {/* Settings */}
            {renderItem("/settings", "Settings", MdSettings)}
          </div>
        </div>

        {/* Floating Shop button */}
        <Link
          href="/shop"
          aria-label="Shop"
          aria-current={shopActive ? "page" : undefined}
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
        >
          <div
            className={[
              "flex h-[58px] w-[58px] items-center justify-center rounded-full",
              "transition-transform duration-200",
              shopActive ? "scale-105" : "hover:scale-105",
            ].join(" ")}
            style={{
              backgroundColor: "#6C4CF1",
              boxShadow: `
                0 0 0 5px #171C1A,
                0 7px 18px rgba(108,76,241,0.45)
              `,
            }}
          >
            <MdStorefront
              size={27}
              className="text-white"
            />
          </div>

          <span
            className={[
              "absolute left-1/2 top-[65px] -translate-x-1/2",
              "whitespace-nowrap text-[11px] leading-none",
              shopActive
                ? "font-medium text-[#6C4CF1]"
                : "font-normal text-[#8F99AA]",
            ].join(" ")}
          >
            Shop
          </span>
        </Link>
      </div>
    </nav>
  )
}