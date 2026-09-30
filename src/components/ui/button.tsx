"use client"

import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button"
import { forwardRef } from "react"

type Variant = "nav" | "solid" | "outline" | "ghost"

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: Variant
}

const variantStyles: Record<Variant, object> = {
  nav: {
    color: "text.primary",
    px: 2,
    "&:hover": { color: "primary.main", backgroundColor: "transparent" },
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
    "&:hover": { borderColor: "primary.main", color: "primary.main" },
  },
  ghost: {
    color: "text.primary",
    "&:hover": { backgroundColor: "action.hover" },
  },
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = "solid", sx, ...props }, ref) {
    return (
      <MuiButton
        ref={ref}
        sx={{ fontSize: "0.95rem", ...variantStyles[variant], ...sx }}
        {...props}
      />
    )
  }
)