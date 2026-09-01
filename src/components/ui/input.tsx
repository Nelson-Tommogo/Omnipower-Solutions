"use client"

import * as React from "react"
import { OutlinedInput, type OutlinedInputProps } from "@mui/material"

import { cn } from "@/src/lib/utils"

const Input = React.forwardRef<HTMLInputElement, OutlinedInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <OutlinedInput
        inputRef={ref}
        className={cn(className)}
        {...props}
        notched={false}
        size="small"
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
