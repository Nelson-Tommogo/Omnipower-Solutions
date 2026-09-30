"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useMediaQuery, useTheme } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

import { AppBar, Toolbar } from "@/src/components/ui/app-bar"
import { Box } from "@/src/components/ui/box"
import { Button } from "@/src/components/ui/button"
import { Container } from "@/src/components/ui/container"
import { Drawer } from "@/src/components/ui/drawer"
import { IconButton } from "@/src/components/ui/icon-button"
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@/src/components/ui/list"
import { Menu, MenuItem } from "@/src/components/ui/menu"

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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [companyAnchor, setCompanyAnchor] = useState<null | HTMLElement>(null)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const pathname = usePathname()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const closeDrawer = () => setMobileOpen(false)
  const closeCompany = () => setCompanyAnchor(null)
  const isCompanyActive = companyItems.some((i) => pathname === i.href)

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, justifyContent: "space-between" }}>
          <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-no-background-vL63ZUhImA3EPgdHudJCaGLKdJ0MUw.png"
              alt="Omnipower Solutions"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="nav"
                  component={Link}
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.name}
                </Button>
              ))}

              <Button
                variant="nav"
                className={isCompanyActive ? "active" : ""}
                onClick={(e) => setCompanyAnchor(e.currentTarget)}
                endIcon={
                  <ExpandMoreIcon
                    sx={{
                      transition: "transform 0.2s",
                      transform: companyAnchor ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                }
              >
                Company
              </Button>

              <Menu
                anchorEl={companyAnchor}
                open={Boolean(companyAnchor)}
                onClose={closeCompany}
              >
                {companyItems.map((item) => (
                  <MenuItem
                    key={item.name}
                    component={Link}
                    href={item.href}
                    onClick={closeCompany}
                    sx={{ color: pathname === item.href ? "primary.main" : undefined }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={() => setMobileOpen((v) => !v)} aria-label="toggle menu">
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={closeDrawer}>
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={closeDrawer} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={closeDrawer}
                sx={{ color: pathname === item.href ? "primary.main" : undefined }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton onClick={() => setMobileCompanyOpen((v) => !v)}>
              <ListItemText primary="Company" />
              {mobileCompanyOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={mobileCompanyOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {companyItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={closeDrawer}
                    sx={{ pl: 4, color: pathname === item.href ? "primary.main" : undefined }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </AppBar>
  )
}