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