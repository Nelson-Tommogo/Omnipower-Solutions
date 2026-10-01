"use client"

import Link from "next/link"
import { useState, type MouseEvent } from "react"
import { usePathname } from "next/navigation"
import { Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"

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

  const closeDrawer = () => setMobileOpen(false)
  const closeCompany = () => setCompanyAnchor(null)
  const isCompanyActive = companyItems.some((i) => pathname === i.href)

  return (
    <AppBar
      sx={{
        backgroundColor: "maroon.main",
        color: "common.white",
        borderBottomColor: "maroon.dark",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ minHeight: { xs: 64, md: 76 }, justifyContent: "space-between", gap: 2 }}
        >
          <Box
            component={Link}
            href="/"
            aria-label="Omnipower Solutions home"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "common.white",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <ElectricBoltIcon sx={{ fontSize: 42, color: "primary.main" }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 800,
                  letterSpacing: "0.035em",
                  lineHeight: 1.15,
                }}
              >
                OMNIPOWER
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: "rgba(255, 255, 255, 0.75)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.19em",
                  lineHeight: 1.2,
                }}
              >
                SOLUTIONS
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
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
                onClick={(event: MouseEvent<HTMLButtonElement>) =>
                  setCompanyAnchor(event.currentTarget)
                }
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

              <Button
                variant="solid"
                component={Link}
                href="/contact"
                sx={{
                  ml: 1,
                  borderRadius: 1,
                }}
              >
                Get a quote
              </Button>
          </Box>

          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={mobileOpen} onClose={closeDrawer}>
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