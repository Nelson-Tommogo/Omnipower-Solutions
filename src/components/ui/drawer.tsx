"use client"

import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer"
import { forwardRef } from "react"

export interface DrawerProps extends MuiDrawerProps {
  width?: number
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer({ width = 280, slotProps, ...props }, ref) {
    return (
      <MuiDrawer
        ref={ref}
        slotProps={{
          paper: {
            sx: { width },
          },
          ...slotProps,
        }}
        {...props}
      />
    )
  }
)