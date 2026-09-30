"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Menu,
  MenuItem,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
]

const companyItems = [
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [companyAnchor, setCompanyAnchor] = useState<null | HTMLElement>(null)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const pathname = usePathname()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerToggle = () => setIsMobileMenuOpen((v) => !v)
  const closeDrawer = () => setIsMobileMenuOpen(false)

  // Desktop dropdown handlers
  const handleCompanyOpen = (e: React.MouseEvent<HTMLElement>) =>
    setCompanyAnchor(e.currentTarget)
  const handleCompanyClose = () => setCompanyAnchor(null)

  const isCompanyActive = companyItems.some((item) => pathname === item.href)

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-no-background-vL63ZUhImA3EPgdHudJCaGLKdJ0MUw.png"
              alt="Omnipower Solutions"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Button
                    key={item.name}
                    component={Link}
                    href={item.href}
                    disableRipple
                    sx={{
                      color: isActive ? "primary.main" : "text.primary",
                      fontWeight: 500,
                      textTransform: "none",
                      fontSize: "0.95rem",
                      px: 2,
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                )
              })}

              {/* Company dropdown */}
              <Button
                disableRipple
                onClick={handleCompanyOpen}
                endIcon={
                  <ExpandMoreIcon
                    sx={{
                      transition: "transform 0.2s",
                      transform: companyAnchor ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                }
                sx={{
                  color: isCompanyActive ? "primary.main" : "text.primary",
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  px: 2,
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Company
              </Button>
              <Menu
                anchorEl={companyAnchor}
                open={Boolean(companyAnchor)}
                onClose={handleCompanyClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 1,
                      minWidth: 180,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    },
                  },
                }}
              >
                {companyItems.map((item) => (
                  <MenuItem
                    key={item.name}
                    component={Link}
                    href={item.href}
                    onClick={handleCompanyClose}
                    sx={{
                      fontSize: "0.95rem",
                      color: pathname === item.href ? "primary.main" : "text.primary",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="toggle menu"
              onClick={handleDrawerToggle}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={closeDrawer}
        slotProps={{ paper: { sx: { width: 260 } } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={closeDrawer} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={closeDrawer}
                  sx={{
                    color: isActive ? "primary.main" : "text.primary",
                    fontWeight: 500,
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )
          })}

          {/* Company group in mobile */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setMobileCompanyOpen((v) => !v)}
              sx={{ fontWeight: 500 }}
            >
              <ListItemText primary="Company" />
              {mobileCompanyOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={mobileCompanyOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {companyItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <ListItem key={item.name} disablePadding>
                    <ListItemButton
                      component={Link}
                      href={item.href}
                      onClick={closeDrawer}
                      sx={{
                        pl: 4,
                        color: isActive ? "primary.main" : "text.primary",
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </AppBar>
  )
}