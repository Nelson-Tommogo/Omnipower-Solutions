import "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    maroon: Palette["primary"]
  }
  interface PaletteOptions {
    maroon?: PaletteOptions["primary"]
  }
}