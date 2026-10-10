import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { MdArrowOutward, MdOutlineBolt, MdOutlineVerifiedUser } from "react-icons/md"
import { cloudinaryImage } from "@/src/lib/cloudinary"

export function HeroCarousel() {
  return (
    <Box component="section" aria-label="Omnipower Solutions" sx={{ position: "relative", minHeight: { xs: 520, md: 610 }, overflow: "hidden", bgcolor: "#171817", color: "common.white" }}>
      <Image
        src={cloudinaryImage("electricfence.jpg")}
        alt="Secure modern property with electric fencing"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(16,19,18,0.9) 0%, rgba(16,19,18,0.62) 52%, rgba(16,19,18,0.12) 100%)" }} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, minHeight: { xs: 520, md: 610 }, display: "flex", alignItems: "center" }}>
        <Box sx={{ maxWidth: 680, py: 8 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, color: "#ffb348" }}>
            <MdOutlineBolt size={19} />
            <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: "0.16em" }}>
              Secure. Smart. Reliable.
            </Typography>
          </Box>
          <Typography component="h1" sx={{ maxWidth: 650, fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.055em" }}>
            Powering better spaces.
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: 540, color: "rgba(255,255,255,0.82)", fontSize: { xs: 16, md: 19 }, lineHeight: 1.75 }}>
            Electrical, solar and security solutions for homes and businesses across Kenya.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mt: 4 }}>
            <Button component={Link} href="/services" variant="contained" size="large" sx={{ px: 3.5, py: 1.5, borderRadius: 99, fontWeight: 700 }}>
              Explore services <MdArrowOutward size={19} style={{ marginLeft: 8 }} />
            </Button>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "rgba(255,255,255,0.85)", px: { sm: 1 } }}>
              <MdOutlineVerifiedUser size={20} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Trusted local expertise</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
