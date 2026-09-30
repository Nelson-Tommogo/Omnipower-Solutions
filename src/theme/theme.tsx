"use client"

import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#16a34a", // emerald-600, matches your brand
      contrastText: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
    divider: "#e5e7eb",
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
  },
})