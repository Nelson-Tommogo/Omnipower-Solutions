"use client"

import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer"
import { forwardRef } from "react"

export type DrawerProps = MuiDrawerProps

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer({ slotProps, ...props }, ref) {
    return (
      <MuiDrawer
        ref={ref}
        slotProps={{
          paper: { sx: { width: 260 } },
          ...slotProps,
        }}
        {...props}
      />
    )
  }
)