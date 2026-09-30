"use client"

import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button"
import { forwardRef, ElementType } from "react"
import { SxProps, Theme } from "@mui/material/styles"

type Variant = "nav" | "solid" | "outline" | "ghost"

export type ButtonProps<C extends ElementType = "button"> = {
  variant?: Variant
  component?: C
  sx?: SxProps<Theme>
} & Omit<React.ComponentPropsWithoutRef<C>, "component" | "sx" | "variant">

const variantStyles: Record<Variant, object> = {
  nav: {
    color: "text.primary",
    px: 2,
    "&:hover": {
      color: "primary.main",
      backgroundColor: "rgba(244, 81, 30, 0.06)",
    },
    "&.active": { color: "primary.main" },
  },
  solid: {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    px: 3,
    "&:hover": { backgroundColor: "primary.dark" },
  },
  outline: {
    border: "1px solid",
    borderColor: "divider",
    color: "text.primary",
    px: 3,
    "&:hover": {
      borderColor: "primary.main",
      color: "primary.main",
      backgroundColor: "rgba(244, 81, 30, 0.04)",
    },
  },
  ghost: {
    color: "text.primary",
    "&:hover": {
      backgroundColor: "rgba(244, 81, 30, 0.06)",
      color: "primary.main",
    },
  },
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps<ElementType>
>(function Button({ variant = "solid", sx, ...props }, ref) {
  const resolvedVariant: Variant = variant ?? "solid"

  return (
    <MuiButton
      ref={ref}
      sx={{
        fontSize: "0.95rem",
        ...variantStyles[resolvedVariant],
        ...sx,
      }}
      {...(props as any)}
    />
  )
})