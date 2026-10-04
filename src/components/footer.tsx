import Link from "next/link"
import Image from "next/image"
import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material"
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

const linkSx = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontSize: 14,
  "&:hover": { color: "white", textDecoration: "none" },
}

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#171c1a", color: "white", pt: { xs: 7, md: 9 }, pb: 3 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "1.35fr 0.8fr 1fr 1.15fr" },
            gap: { xs: 4, md: 5 },
          }}
        >
          <Box>
            <Image
              src={BRAND_LOGO_SRC}
              alt="Omnipower Solutions"
              width={200}
              height={60}
              style={{ width: "auto", height: 48, maxWidth: 180, objectFit: "contain" }}
            />
            <Typography sx={{ mt: 2.5, maxWidth: 300, color: "rgba(255,255,255,0.68)", fontSize: 14, lineHeight: 1.8 }}>
              Practical electrical, solar and security solutions for homes and businesses across Kenya.
            </Typography>
            <Stack direction="row" spacing={1.25} sx={{ mt: 2.5 }}>
              {[
                { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61556519845389", icon: <MdFacebook /> },
                { label: "X", href: "https://x.com/omnipowerkenya", icon: <MdChatBubble /> },
                { label: "Instagram", href: "https://www.instagram.com", icon: <MdBusinessCenter /> },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/omnipower-solution-kenya/", icon: <MdBusinessCenter /> },
              ].map(({ label, href, icon }) => (
                <MuiLink
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    color: "white",
                    "&:hover": { bgcolor: "primary.main", borderColor: "primary.main" },
                  }}
                >
                  {icon}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 750, mb: 2 }}>
              Explore
            </Typography>
            <Stack spacing={1.3} alignItems="flex-start">
              {quickLinks.map(({ label, href }) => (
                <MuiLink key={href} component={Link} href={href} sx={linkSx}>
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 750, mb: 2 }}>
              Our services
            </Typography>
            <Stack spacing={1.3} alignItems="flex-start">
              {serviceLinks.map(({ label, href }) => (
                <MuiLink key={href} component={Link} href={href} sx={linkSx}>
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 750, mb: 2 }}>
              Get in touch
            </Typography>
            <Stack spacing={1.7}>
              <Stack direction="row" spacing={1.4} alignItems="flex-start">
                <MdPhone size={19} color="#ff7549" />
                <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.7 }}>
                  +254 725 674144<br />+254 759 735505
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.4} alignItems="center">
                <MdMail size={19} color="#ff7549" />
                <MuiLink href="mailto:info@omnipowersolutions.co.ke" sx={linkSx}>
                  info@omnipowersolutions.co.ke
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.4} alignItems="center">
                <MdLocationOn size={19} color="#ff7549" />
                <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: 14 }}>Nairobi, Kenya</Typography>
              </Stack>
              <Stack direction="row" spacing={1.4} alignItems="flex-start">
                <MdAccessTime size={19} color="#ff7549" />
                <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.7 }}>
                  Mon – Fri: 9:00 – 19:00<br />Closed on weekends
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ mt: 7, pt: 2.5, borderTop: "1px solid rgba(255,255,255,0.13)" }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.52)", textAlign: { xs: "center", sm: "left" } }}>
            © {new Date().getFullYear()} Omnipower Solutions. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
