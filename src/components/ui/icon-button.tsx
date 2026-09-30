"use client"

import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton"
import { forwardRef } from "react"

export type IconButtonProps = MuiIconButtonProps

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ sx, ...props }, ref) {
    return (
      <MuiIconButton
        ref={ref}
        color="inherit"
        sx={{ borderRadius: 2, ...sx }}
        {...props}
      />
    )
  }
)