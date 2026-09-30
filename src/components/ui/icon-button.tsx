"use client"

import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton"
import { forwardRef } from "react"

export type IconButtonProps = MuiIconButtonProps

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    return <MuiIconButton ref={ref} color="inherit" {...props} />
  }
)