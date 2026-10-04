"use client"

import { useState, type MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import { MdClose, MdExpandMore, MdMenu } from "react-icons/md"
import { BRAND_LOGO_SRC } from "@/src/lib/brand"

const companyItems = [
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [companyAnchor, setCompanyAnchor] = useState<null | HTMLElement>(null)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const pathname = usePathname()
  const companyActive = companyItems.some(({ href }) => pathname === href || pathname.startsWith(`${href}/`))

  const closeDrawer = () => setMobileOpen(false)
  const closeCompany = () => setCompanyAnchor(null)
  const openCompany = (event: MouseEvent<HTMLButtonElement>) => setCompanyAnchor(event.currentTarget)

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.96)",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(14px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 82 }, justifyContent: "space-between", gap: 2 }}>
          <Box
            component={Link}
            href="/"
            aria-label="Omnipower Solutions home"
            sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <Image
              src={BRAND_LOGO_SRC}
              alt="Omnipower Solutions"
              width={200}
              height={60}
              priority
              style={{ width: "auto", height: 48, maxWidth: 180, objectFit: "contain" }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.75 }}>
            <Button
              component={Link}
              href="/"
              color={pathname === "/" ? "primary" : "inherit"}
              sx={{ px: 2, fontWeight: 700 }}
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/shop"
              color={pathname.startsWith("/shop") ? "primary" : "inherit"}
              sx={{ px: 2, fontWeight: 700 }}
            >
              Shop
            </Button>
            <Button
              onClick={openCompany}
              color={companyActive ? "primary" : "inherit"}
              endIcon={<MdExpandMore size={20} />}
              sx={{ px: 2, fontWeight: 700 }}
              aria-haspopup="true"
              aria-expanded={Boolean(companyAnchor)}
            >
              Company
            </Button>
            <Menu anchorEl={companyAnchor} open={Boolean(companyAnchor)} onClose={closeCompany}>
              {companyItems.map(({ name, href }) => (
                <MenuItem
                  key={href}
                  component={Link}
                  href={href}
                  onClick={closeCompany}
                  selected={pathname === href}
                >
                  {name}
                </MenuItem>
              ))}
            </Menu>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{ ml: 1.5, px: 2.5, py: 1.1, borderRadius: 99, fontWeight: 700 }}
            >
              Get a quote
            </Button>
          </Box>

          <IconButton
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
          >
            {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={closeDrawer}>
        <Box sx={{ width: 300, maxWidth: "85vw", p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={closeDrawer} aria-label="Close navigation menu">
              <MdClose />
            </IconButton>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/" selected={pathname === "/"} onClick={closeDrawer}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/shop"
                selected={pathname.startsWith("/shop")}
                onClick={closeDrawer}
              >
                <ListItemText primary="Shop" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setMobileCompanyOpen((open) => !open)}>
                <ListItemText primary="Company" />
                <MdExpandMore
                  size={20}
                  style={{ transform: mobileCompanyOpen ? "rotate(180deg)" : undefined, transition: "transform 180ms" }}
                />
              </ListItemButton>
            </ListItem>
            {mobileCompanyOpen &&
              companyItems.map(({ name, href }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={href}
                    selected={pathname === href}
                    onClick={closeDrawer}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              ))}
            <ListItem sx={{ pt: 2 }}>
              <Button component={Link} href="/contact" variant="contained" fullWidth onClick={closeDrawer}>
                Get a quote
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
