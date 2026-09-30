"use client"

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { forwardRef } from "react"

export type AppBarProps = MuiAppBarProps

export const AppBar = forwardRef<HTMLElement, AppBarProps>(
  function AppBar({ sx, ...props }, ref) {
    return (
      <MuiAppBar
        ref={ref}
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "background.paper",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
          ...sx,
        }}
        {...props}
      />
    )
  }
)

export { default as Toolbar } from "@mui/material/Toolbar"