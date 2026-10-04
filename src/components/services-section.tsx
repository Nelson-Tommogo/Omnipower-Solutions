import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { MdArrowOutward } from "react-icons/md"
import wiringImage from "../../app/services/images/wiring.jpeg"
import solarImage from "../../app/services/images/panel.jpeg"
import cctvImage from "../../app/services/images/cctvpic.jpeg"
import fenceImage from "../../app/services/images/electricfence.jpeg"
import gatesImage from "../../app/services/images/automatedgates.jpg"

const services: { title: string; description: string; image: StaticImageData; href: string; number: string }[] = [
  {
    title: "Electrical wiring",
    description: "Safe, reliable electrical installations and upgrades for every kind of space.",
    image: wiringImage,
    href: "/services/electrical-wiring",
    number: "01",
  },
  {
    title: "Solar installation",
    description: "Smarter energy solutions, expertly designed and installed for your needs.",
    image: solarImage,
    href: "/services/solar-installation",
    number: "02",
  },
  {
    title: "CCTV & security",
    description: "Keep watch over what matters with dependable security systems.",
    image: cctvImage,
    href: "/services/cctv-installation",
    number: "03",
  },
  {
    title: "Electric fencing",
    description: "Professional perimeter protection for residential and commercial properties.",
    image: fenceImage,
    href: "/services/electric-fences",
    number: "04",
  },
  {
    title: "Automated gates",
    description: "Convenient, secure access control built around your property.",
    image: gatesImage,
    href: "/services/automated-gates",
    number: "05",
  },
]

export function ServicesSection() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f7f7f5" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "end" }, gap: 3, mb: 5 }}>
          <Box>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.16em" }}>
              What we do
            </Typography>
            <Typography component="h2" variant="h3" sx={{ mt: 1, fontWeight: 800, letterSpacing: "-0.04em" }}>
              Solutions for a brighter,<br /> safer tomorrow.
            </Typography>
          </Box>
          <Typography sx={{ maxWidth: 390, color: "text.secondary", lineHeight: 1.8 }}>
            One expert team for the systems that keep your home and business running at their best.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 2.5,
          }}
        >
          {services.map((service) => (
            <Card
              key={service.number}
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "rgba(22,30,27,0.08)",
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "white",
                transition: "transform 220ms ease, box-shadow 220ms ease",
                "&:hover": { transform: "translateY(-5px)", boxShadow: "0 18px 44px rgba(16,28,24,0.11)" },
              }}
            >
              <CardActionArea component={Link} href={service.href} sx={{ height: "100%" }}>
                <Box sx={{ position: "relative", height: 210, overflow: "hidden" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", transition: "transform 450ms ease" }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 15,
                      left: 16,
                      px: 1.25,
                      py: 0.6,
                      borderRadius: 99,
                      bgcolor: "rgba(255,255,255,0.92)",
                      color: "text.secondary",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {service.number}
                  </Typography>
                </Box>
                <Box sx={{ p: 2.75 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
                    <Typography component="h3" variant="h6" sx={{ fontWeight: 750 }}>
                      {service.title}
                    </Typography>
                    <MdArrowOutward size={20} color="#e7461c" />
                  </Box>
                  <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7, fontSize: 14 }}>
                    {service.description}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mt: 5 }}>
          <Button
            component={Link}
            href="/services"
            variant="outlined"
            size="large"
            sx={{ borderRadius: 99, px: 3, py: 1.25, fontWeight: 700 }}
          >
            View all services
            <MdArrowOutward size={18} style={{ marginLeft: 8 }} />
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
