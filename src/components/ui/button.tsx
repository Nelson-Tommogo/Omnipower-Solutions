import * as React from "react"
import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material"

import { cn } from "@/src/lib/utils"

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

export interface ButtonProps
  extends Omit<MuiButtonProps, "variant" | "size"> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const mapVariant = (variant: ButtonVariant = "default") => {
  switch (variant) {
    case "destructive":
      return "contained"
    case "outline":
      return "outlined"
    case "secondary":
      return "contained"
    case "ghost":
      return "text"
    case "link":
      return "text"
    default:
      return "contained"
  }
}

const mapSize = (size: ButtonSize = "default") => {
  switch (size) {
    case "sm":
      return "small"
    case "lg":
      return "large"
    case "icon":
      return "small"
    default:
      return "medium"
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>
      return React.cloneElement(child, {
        className: cn(child.props.className, className),
        ...props,
      })
    }

    const mappedVariant = mapVariant(variant)
    const mappedSize = mapSize(size)

    return (
      <MuiButton
        ref={ref}
        variant={mappedVariant}
        size={mappedSize}
        className={cn(
          variant === "outline" && "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
          variant === "secondary" && "bg-[#0f5132] text-white hover:bg-[#0b3d28]",
          variant === "ghost" && "bg-transparent text-slate-700 hover:bg-slate-100",
          variant === "link" && "bg-transparent text-[#d71a1a] hover:bg-transparent underline-offset-4 hover:underline",
          variant === "destructive" && "bg-[#d32f2f] text-white hover:bg-[#b71c1c]",
          size === "icon" && "min-width: 40px; w-10 h-10 p-0",
          className,
        )}
        {...props}
      >
        {children}
      </MuiButton>
    )
  }
)

Button.displayName = "Button"

export { Button }
