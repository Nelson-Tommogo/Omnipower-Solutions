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

const ACTIVE_COLOR = "#FF1E00"
const INACTIVE_COLOR = "#1976D2"
const NAV_BACKGROUND = "#FFFFFF"
const PAGE_GRAY = "#EEF0F3"

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
        className="flex h-full flex-1 flex-col items-center justify-center"
      >
        <Icon
          size={22}
          className={
            active
              ? "text-[#FF1E00]"
              : "text-[#1976D2]"
          }
        />

        <span
          className={[
            "mt-[6px] text-[11px] leading-none",
            active
              ? "font-medium text-[#FF1E00]"
              : "font-normal text-[#1976D2]",
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
      {/* Gray separation behind the navigation */}
      <div
        className="absolute inset-x-0 bottom-0 h-[110px]"
        style={{
          backgroundColor: PAGE_GRAY,
        }}
      />

      {/* Navigation container */}
      <div className="relative mx-auto h-[102px] w-[90%] max-w-[420px]">

        {/* White curved navigation surface */}
        <svg
          className="absolute bottom-0 left-0 h-[77px] w-full"
          viewBox="0 0 391 77"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 0 0
              C 75 11, 125 17, 195 18
              C 266 17, 316 11, 391 0
              L 391 77
              L 0 77
              Z
            "
            fill={NAV_BACKGROUND}
          />
        </svg>

        {/* Navigation shadow */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[77px]"
          style={{
            filter:
              "drop-shadow(0 -3px 10px rgba(0,0,0,0.10))",
          }}
        />

        {/* Navigation items */}
        <div className="absolute bottom-0 left-0 h-[67px] w-full">
          <div className="flex h-full w-full">

            {/* Home */}
            {renderItem("/", "Home", MdHome)}

            {/* Service */}
            {renderItem(
              "/services",
              "Service",
              MdBuild,
            )}

            {/* Center Shop space */}
            <div
              className="flex h-full flex-1"
              aria-hidden="true"
            />

            {/* Cart */}
            {renderItem(
              "/cart",
              "Cart",
              MdShoppingCart,
            )}

            {/* Settings */}
            {renderItem(
              "/settings",
              "Settings",
              MdSettings,
            )}
          </div>
        </div>

        {/* Floating Shop button */}
        <Link
          href="/shop"
          aria-label="Shop"
          aria-current={
            shopActive ? "page" : undefined
          }
          className="absolute left-1/2 top-[-10px] z-20 -translate-x-1/2"
        >
          <div
            className={[
              "flex h-[50px] w-[50px]",
              "items-center justify-center",
              "rounded-full",
              "transition-transform duration-200",
              shopActive
                ? "scale-105"
                : "hover:scale-105",
            ].join(" ")}
            style={{
              backgroundColor: ACTIVE_COLOR,
              boxShadow:
                "0 6px 18px rgba(255,30,0,0.30)",
            }}
          >
            <MdStorefront
              size={25}
              className="text-white"
            />
          </div>

          {/* Shop label */}
          <span
            className={[
              "absolute left-1/2 top-[62px]",
              "-translate-x-1/2",
              "whitespace-nowrap",
              "text-[11px] leading-none",
              shopActive
                ? "font-medium text-[#FF1E00]"
                : "font-normal text-[#1976D2]",
            ].join(" ")}
          >
            Shop
          </span>
        </Link>
      </div>
    </nav>
  )
}