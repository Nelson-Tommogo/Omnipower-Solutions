"use client"

import * as React from "react"
import { Checkbox as MuiCheckbox, type CheckboxProps as MuiCheckboxProps } from "@mui/material"

import { cn } from "@/src/lib/utils"

type CheckboxProps = Omit<MuiCheckboxProps, "onChange"> & {
  onCheckedChange?: (checked: boolean) => void
  onChange?: MuiCheckboxProps["onChange"]
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, onCheckedChange, onChange, ...props }, ref) => (
    <MuiCheckbox
      ref={ref}
      className={cn(className)}
      onChange={(event, checked) => {
        onChange?.(event, checked)
        onCheckedChange?.(checked)
      }}
      {...props}
    />
  )
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
