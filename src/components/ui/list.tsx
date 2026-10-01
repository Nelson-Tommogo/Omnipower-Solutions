"use client"

import MuiListItemButton from "@mui/material/ListItemButton"
import { forwardRef, ElementType } from "react"
import { SxProps, Theme } from "@mui/material/styles"

export { default as List } from "@mui/material/List"
export { default as ListItem } from "@mui/material/ListItem"
export { default as ListItemText } from "@mui/material/ListItemText"
export { default as Collapse } from "@mui/material/Collapse"

export type ListItemButtonProps<C extends ElementType = "div"> = {
  component?: C
  sx?: SxProps<Theme>
} & Omit<React.ComponentPropsWithoutRef<C>, "component" | "sx">

export const ListItemButton = forwardRef<
  HTMLDivElement,
  ListItemButtonProps<ElementType>
>(function ListItemButton({ sx, ...props }, ref) {
  return (
    <MuiListItemButton
      ref={ref}
      sx={{
        py: 1.25,
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "rgba(92, 20, 20, 0.08)",
          color: "maroon.main",
        },
        "&.Mui-selected": {
          backgroundColor: "rgba(25, 118, 210, 0.1)",
          color: "secondary.main",
        },
        ...sx,
      }}
      {...(props as any)}
    />
  )
})