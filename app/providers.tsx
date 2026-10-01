"use client"

import type React from "react"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { CartProvider } from "@/src/components/cart-provider"
import { theme } from "@/src/theme/theme"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  )
}
