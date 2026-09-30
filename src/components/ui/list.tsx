"use client"

import MuiListItemButton, {
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material/ListItemButton"
import { forwardRef } from "react"

export { default as List } from "@mui/material/List"
export { default as ListItem } from "@mui/material/ListItem"
export { default as ListItemText } from "@mui/material/ListItemText"
export { default as Collapse } from "@mui/material/Collapse"

export type ListItemButtonProps = MuiListItemButtonProps

export const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(
  function ListItemButton({ sx, ...props }, ref) {
    return (
      <MuiListItemButton
        ref={ref}
        sx={{ py: 1.25, fontWeight: 500, ...sx }}
        {...props}
      />
    )
  }
)