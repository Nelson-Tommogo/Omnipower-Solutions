"use client"

import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF1E00",
      light: "#FF5A4F",
      dark: "#C60000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1976D2",
      light: "#42A5F5",
      dark: "#0D47A1",
      contrastText: "#FFFFFF",
    },
    maroon: {
      main: "#5C1414",
      light: "#7A1E1E",
      dark: "#3D0D0D",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#1F1F1F",
      secondary: "#6B7280",
    },
    divider: "#E5E7EB",
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
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
    MuiButtonBase: { defaultProps: { disableRipple: true } },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
})

// Non-palette brand tokens for convenience
export const brand = {
  red: "#FF1E00",
  maroon: "#5C1414",
  blue: "#1976D2",
  white: "#FFFFFF",
}