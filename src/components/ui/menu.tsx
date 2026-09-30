"use client"

import MuiMenu, { MenuProps as MuiMenuProps } from "@mui/material/Menu"
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from "@mui/material/MenuItem"
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
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            },
          },
          ...slotProps,
        }}
        {...props}
      />
    )
  }
)

export const MenuItem = forwardRef<HTMLLIElement, MuiMenuItemProps>(
  function MenuItem({ sx, ...props }, ref) {
    return (
      <MuiMenuItem
        ref={ref}
        sx={{ fontSize: "0.95rem", py: 1.25, ...sx }}
        {...props}
      />
    )
  }
)