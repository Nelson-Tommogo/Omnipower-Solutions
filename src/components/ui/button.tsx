"use client"

import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button"
import { forwardRef, ElementType } from "react"
import { SxProps, Theme } from "@mui/material/styles"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/src/lib/utils"

type Variant = "nav" | "solid" | "outline" | "ghost"
type ButtonSize = "small" | "medium" | "large" | "sm" | "default" | "icon"

export type ButtonProps<C extends ElementType = "button"> = {
  variant?: Variant
  size?: ButtonSize
  asChild?: boolean
  component?: C
  sx?: SxProps<Theme>
} & Omit<React.ComponentPropsWithoutRef<C>, "component" | "size" | "sx" | "variant">

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ButtonVariantSize = "default" | "sm" | "lg" | "icon"

const buttonVariantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

const buttonSizeClasses: Record<ButtonVariantSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}

export function buttonVariants({
  variant = "default",
  size = "default",
}: {
  variant?: ButtonVariant
  size?: ButtonVariantSize
} = {}) {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    buttonVariantClasses[variant],
    buttonSizeClasses[size]
  )
}

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
>(function Button({ variant = "solid", size, asChild = false, component, sx, ...props }, ref) {
  const resolvedVariant: Variant = variant ?? "solid"
  const resolvedSize =
    size === "sm" || size === "icon"
      ? "small"
      : size === "default"
        ? "medium"
        : size

  return (
    <MuiButton
      ref={ref}
      component={asChild ? Slot : component}
      size={resolvedSize}
      sx={{
        fontSize: "0.95rem",
        ...variantStyles[resolvedVariant],
        ...sx,
      }}
      {...props}
    />
  )
})