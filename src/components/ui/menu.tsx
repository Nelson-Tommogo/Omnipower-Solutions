"use client"

import MuiMenu, { MenuProps as MuiMenuProps } from "@mui/material/Menu"
import { forwardRef } from "react"

export type MenuProps = MuiMenuProps

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  function Menu({ slotProps, ...props }, ref) {
    return (
      <MuiMenu
        ref={ref}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 180,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            },
          },
          ...slotProps,
        }}
        {...props}
      />
    )
  }
)

export { default as MenuItem } from "@mui/material/MenuItem"