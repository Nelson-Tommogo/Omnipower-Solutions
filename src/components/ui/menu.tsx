"use client"

import MuiMenu, { MenuProps as MuiMenuProps } from "@mui/material/Menu"
import MuiMenuItem from "@mui/material/MenuItem"
import { forwardRef, ElementType } from "react"
import { SxProps, Theme } from "@mui/material/styles"

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
              boxShadow: "0 8px 24px rgba(92, 20, 20, 0.08)", // maroon-tinted shadow
            },
          },
          ...slotProps,
        }}
        {...props}
      />
    )
  }
)

export type MenuItemProps<C extends ElementType = "li"> = {
  component?: C
  sx?: SxProps<Theme>
} & Omit<React.ComponentPropsWithoutRef<C>, "component" | "sx">

export const MenuItem = forwardRef<
  HTMLLIElement,
  MenuItemProps<ElementType>
>(function MenuItem({ sx, ...props }, ref) {
  return (
    <MuiMenuItem
      ref={ref}
      sx={{
        fontSize: "0.95rem",
        py: 1.25,
        "&:hover": { backgroundColor: "rgba(244, 81, 30, 0.06)" },
        "&.Mui-selected": {
          backgroundColor: "rgba(244, 81, 30, 0.10)",
          color: "primary.main",
        },
        ...sx,
      }}
      {...(props as any)}
    />
  )
})