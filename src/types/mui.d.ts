import "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    maroon: Palette["primary"]
    coral: Palette["primary"]
  }
  interface PaletteOptions {
    maroon?: PaletteOptions["primary"]
    coral?: PaletteOptions["primary"]
  }
}