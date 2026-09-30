"use client"

import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F4511E", // coral
      light: "#FF7043",
      dark: "#C63D10",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1976D2", // blue accent
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
    coral: {
      main: "#F4511E",
      light: "#FF7043",
      dark: "#C63D10",
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
  maroon: "#5C1414",
  coral: "#F4511E",
  pink: "#F8A99A",
  blue: "#1976D2",
}