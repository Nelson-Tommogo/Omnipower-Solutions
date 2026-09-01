"use client"

import * as React from "react"
import { Checkbox as MuiCheckbox, type CheckboxProps as MuiCheckboxProps } from "@mui/material"

import { cn } from "@/src/lib/utils"

const Checkbox = React.forwardRef<HTMLInputElement, MuiCheckboxProps>(
  ({ className, ...props }, ref) => (
    <MuiCheckbox
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
