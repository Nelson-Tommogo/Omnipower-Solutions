"use client"

import * as React from "react"
import { InputLabel, type InputLabelProps } from "@mui/material"

import { cn } from "@/src/lib/utils"

const Label = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ className, ...props }, ref) => (
    <InputLabel
      ref={ref}
      className={cn("mb-1 block text-sm font-medium text-slate-700", className)}
      {...props}
    />
  )
)

Label.displayName = "Label"

export { Label }
