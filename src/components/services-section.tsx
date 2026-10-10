import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { MdArrowOutward } from "react-icons/md"
import { cloudinaryImage } from "@/src/lib/cloudinary"

const services = [
  { title: "Security systems", description: "CCTV, electric fencing and access control.", image: cloudinaryImage("electricfence.jpg"), href: "/services" },
  { title: "Solar & electrical", description: "Reliable power systems for everyday living.", image: cloudinaryImage("solarpanelkit.jpg"), href: "/services" },
]

export function ServicesSection() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 8, md: 11 }, bgcolor: "#f7f7f5" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { md: "end" }, gap: 3, mb: 5, flexDirection: { xs: "column", md: "row" } }}>
          <Box>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.16em" }}>What we do</Typography>
            <Typography component="h2" variant="h3" sx={{ mt: 1, fontWeight: 800, letterSpacing: "-0.04em" }}>Simple solutions.<br />Built to last.</Typography>
          </Box>
          <Button component={Link} href="/services" variant="outlined" sx={{ borderRadius: 99, px: 2.5, fontWeight: 700 }}>
            View all <MdArrowOutward size={18} style={{ marginLeft: 8 }} />
          </Button>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 2.5 }}>
          {services.map((service) => (
            <Card key={service.title} elevation={0} sx={{ border: "1px solid rgba(22,30,27,0.08)", borderRadius: 3, overflow: "hidden", bgcolor: "white", transition: "transform 200ms ease, box-shadow 200ms ease", "&:hover": { transform: "translateY(-5px)", boxShadow: "0 18px 44px rgba(16,28,24,0.11)" } }}>
              <CardActionArea component={Link} href={service.href}>
                <Box sx={{ position: "relative", height: { xs: 220, md: 300 } }}>
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
                    <Typography component="h3" variant="h5" sx={{ fontWeight: 750 }}>{service.title}</Typography>
                    <MdArrowOutward size={21} color="#e7461c" />
                  </Box>
                  <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.6 }}>{service.description}</Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
