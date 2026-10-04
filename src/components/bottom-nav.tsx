"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import { MdHome, MdShoppingBag, MdShoppingCart, MdBuild } from "react-icons/md"

const navItems = [
  { label: "Home", href: "/", icon: <MdHome /> },
  { label: "Services", href: "/services", icon: <MdBuild /> },
  { label: "Shop", href: "/shop", icon: <MdShoppingBag /> },
  { label: "Cart", href: "/cart", icon: <MdShoppingCart /> },
]

export function BottomNav() {
  const pathname = usePathname()
  const activeItem =
    navItems.find(({ href }) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)))?.href ??
    false

  return (
    <BottomNavigation
      component="nav"
      aria-label="Mobile navigation"
      value={activeItem}
      showLabels
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        zIndex: 1200,
        right: 0,
        bottom: 0,
        left: 0,
        height: "calc(64px + env(safe-area-inset-bottom))",
        pb: "env(safe-area-inset-bottom)",
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
      }}
    >
      {navItems.map(({ label, href, icon }) => (
        <BottomNavigationAction
          key={href}
          component={Link}
          href={href}
          value={href}
          label={label}
          icon={icon}
          aria-current={activeItem === href ? "page" : undefined}
          sx={{ minWidth: 0, maxWidth: "none" }}
        />
      ))}
    </BottomNavigation>
  )
}
