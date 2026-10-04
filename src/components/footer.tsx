import NextLink from "next/link"
import Image from "next/image"
import {
  MdAccessTime,
  MdBusinessCenter,
  MdChatBubble,
  MdFacebook,
  MdLocationOn,
  MdMail,
  MdPhone,
} from "react-icons/md"
import { BRAND_LOGO_SRC } from "@/src/lib/brand"
import { Link } from "@/src/components/ui/Link"
import { Typography } from "@/src/components/ui/Typography"
import { Box } from "@/src/components/ui/box"
import { Container } from "@/src/components/ui/container"
import type { CSSProperties } from "react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  { label: "CCTV installation", href: "/services/cctv-installation" },
  { label: "Electrical wiring", href: "/services/electrical-wiring" },
  { label: "Solar installation", href: "/services/solar-installation" },
  { label: "Electric fencing", href: "/services/electric-fences" },
  { label: "Automated gates", href: "/services/automated-gates" },
]

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61556519845389", icon: <MdFacebook /> },
  { label: "X", href: "https://x.com/omnipowerkenya", icon: <MdChatBubble /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <MdBusinessCenter /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/omnipower-solution-kenya/", icon: <MdBusinessCenter /> },
]

const linkStyle: CSSProperties = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontSize: 14,
}

const socialIconStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "50%",
  color: "white",
}

const contactTextStyle: CSSProperties = {
  color: "rgba(255,255,255,0.72)",
  fontSize: 14,
  lineHeight: 1.7,
}

const columnStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
}

const headingStyle: CSSProperties = {
  fontWeight: 750,
  marginBottom: 16,
}

export function Footer() {
  return (
    <Box
      component="footer"
      className="hidden md:block"
      sx={{
        backgroundColor: "#171c1a",
        color: "white",
        paddingTop: 56,
        paddingBottom: 24,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1.35fr 0.8fr 1fr 1.15fr",
            gap: 20,
          }}
        >
          {/* Brand */}
          <Box>
            <Image
              src={BRAND_LOGO_SRC}
              alt="Omnipower Solutions"
              width={200}
              height={60}
              style={{ width: "auto", height: 48, maxWidth: 180, objectFit: "contain" }}
            />
            <Typography
              sx={{
                marginTop: 20,
                maxWidth: 300,
                color: "rgba(255,255,255,0.68)",
                fontSize: 14,
                lineHeight: 1.8,
              }}
            >
              Practical electrical, solar and security solutions for homes and businesses across Kenya.
            </Typography>
            <Box sx={{ display: "flex", gap: 10, marginTop: 20 }}>
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  sx={socialIconStyle}
                >
                  {icon}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Explore */}
          <Box>
            <Typography variant="subtitle1" sx={headingStyle}>
              Explore
            </Typography>
            <Box sx={columnStyle}>
              {quickLinks.map(({ label, href }) => (
                <Link key={href} component={NextLink} href={href} sx={linkStyle}>
                  {label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box>
            <Typography variant="subtitle1" sx={headingStyle}>
              Our services
            </Typography>
            <Box sx={columnStyle}>
              {serviceLinks.map(({ label, href }) => (
                <Link key={href} component={NextLink} href={href} sx={linkStyle}>
                  {label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="subtitle1" sx={headingStyle}>
              Get in touch
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Box sx={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                <MdPhone size={19} color="#ff7549" />
                <Typography sx={contactTextStyle}>
                  +254 725 674144
                  <br />
                  +254 759 735505
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 11, alignItems: "center" }}>
                <MdMail size={19} color="#ff7549" />
                <Link href="mailto:info@omnipowersolutions.co.ke" sx={linkStyle}>
                  info@omnipowersolutions.co.ke
                </Link>
              </Box>
              <Box sx={{ display: "flex", gap: 11, alignItems: "center" }}>
                <MdLocationOn size={19} color="#ff7549" />
                <Typography sx={contactTextStyle}>Nairobi, Kenya</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                <MdAccessTime size={19} color="#ff7549" />
                <Typography sx={contactTextStyle}>
                  Mon – Fri: 9:00 – 19:00
                  <br />
                  Closed on weekends
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            marginTop: 56,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.13)",
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.52)" }}>
            © {new Date().getFullYear()} Omnipower Solutions. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}