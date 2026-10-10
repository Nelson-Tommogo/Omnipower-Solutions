"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { MdAddShoppingCart, MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md"
import { useCart } from "./cart-provider"
import { cloudinaryImage } from "@/src/lib/cloudinary"

const products: {
  id: string
  name: string
  description: string
  price: number
  image: string
  tag: string
}[] = [
  {
    id: "p1",
    name: "HD CCTV Camera",
    description: "Clear 1080p security with night vision.",
    price: 7500,
    image: cloudinaryImage("hdcctv.jpg"),
    tag: "Best seller",
  },
  {
    id: "p2",
    name: "Smart Door Lock",
    description: "Keyless access with fingerprint and PIN.",
    price: 12000,
    image: cloudinaryImage("hdsmartdoorlock.jpg"),
    tag: "Smart living",
  },
  {
    id: "p3",
    name: "Solar Panel Kit",
    description: "A dependable start to your solar setup.",
    price: 25000,
    image: cloudinaryImage("solarpanelkit.jpg"),
    tag: "Energy",
  },
  {
    id: "p4",
    name: "Electric Fence Energizer",
    description: "Reliable pulse power for perimeter security.",
    price: 8500,
    image: cloudinaryImage("electricfence.jpg"),
    tag: "Security",
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollProducts = (direction: -1 | 1) => {
    carouselRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" })
  }

  return (
    <Box component="section" id="shop" sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { sm: "end" }, gap: 3 }}>
          <Box>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800, letterSpacing: "0.16em" }}>
              Shop essentials
            </Typography>
            <Typography component="h2" variant="h3" sx={{ mt: 1, fontWeight: 800, letterSpacing: "-0.04em" }}>
              Good gear. Better living.
            </Typography>
            <Typography sx={{ mt: 1.5, maxWidth: 560, color: "text.secondary", lineHeight: 1.8 }}>
              Carefully selected products for safer, smarter and more energy-efficient spaces.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignSelf: { xs: "flex-end", sm: "auto" } }}>
            <IconButton
              onClick={() => scrollProducts(-1)}
              aria-label="Scroll products left"
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              <MdChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => scrollProducts(1)}
              aria-label="Scroll products right"
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              <MdChevronRight />
            </IconButton>
          </Box>
        </Box>

        <Box
          ref={carouselRef}
          sx={{
            display: "flex",
            gap: 2.5,
            overflowX: "auto",
            mt: 4,
            pb: 2,
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              elevation={0}
              sx={{
                flex: "0 0 clamp(210px, 24vw, 250px)",
                scrollSnapAlign: "start",
                border: "1px solid",
                borderColor: "rgba(22,30,27,0.09)",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Box sx={{ position: "relative", height: 175, bgcolor: "#f6f6f3" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 600px) 75vw, 250px"
                  style={{ objectFit: "contain", padding: 16 }}
                />
                <Chip
                  label={product.tag}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    bgcolor: "white",
                    fontWeight: 700,
                    fontSize: 11,
                  }}
                />
              </Box>
              <CardContent sx={{ p: 1.75 }}>
                <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 750 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.75, minHeight: 40 }}>
                  {product.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1.5 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: 16 }}>
                    KSh {product.price.toLocaleString()}
                  </Typography>
                  <IconButton
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    aria-label={`Add ${product.name} to cart`}
                    color="primary"
                    sx={{ bgcolor: "rgba(231,70,28,0.09)", "&:hover": { bgcolor: "rgba(231,70,28,0.16)" } }}
                  >
                    <MdAddShoppingCart />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mt: 3 }}>
          <Button
            component={Link}
            href="/shop"
            variant="contained"
            size="large"
            sx={{ px: 3, py: 1.4, borderRadius: 99, fontWeight: 700 }}
          >
            Shop all products
            <MdArrowOutward size={18} style={{ marginLeft: 8 }} />
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
