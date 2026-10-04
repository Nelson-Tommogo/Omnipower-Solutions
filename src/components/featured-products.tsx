"use client"

import { useRef } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { MdAddShoppingCart, MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md"
import { useCart } from "./cart-provider"
import cctv from "./images/hdcctv.jpg"
import smartdoor from "./images/hdsmartdoorlock.jpg"
import solar from "./images/solarpanelkit.jpg"
import fence from "./images/electricfence.jpg"

const products: {
  id: string
  name: string
  description: string
  price: number
  image: StaticImageData
  tag: string
}[] = [
  {
    id: "p1",
    name: "HD CCTV Camera",
    description: "Clear 1080p security with night vision.",
    price: 7500,
    image: cctv,
    tag: "Best seller",
  },
  {
    id: "p2",
    name: "Smart Door Lock",
    description: "Keyless access with fingerprint and PIN.",
    price: 12000,
    image: smartdoor,
    tag: "Smart living",
  },
  {
    id: "p3",
    name: "Solar Panel Kit",
    description: "A dependable start to your solar setup.",
    price: 25000,
    image: solar,
    tag: "Energy",
  },
  {
    id: "p4",
    name: "Electric Fence Energizer",
    description: "Reliable pulse power for perimeter security.",
    price: 8500,
    image: fence,
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
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "end" }} spacing={3}>
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
          <Stack direction="row" spacing={1} sx={{ alignSelf: { xs: "flex-end", sm: "auto" } }}>
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
          </Stack>
        </Stack>

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
                flex: "0 0 clamp(255px, 28vw, 292px)",
                scrollSnapAlign: "start",
                border: "1px solid",
                borderColor: "rgba(22,30,27,0.09)",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Box sx={{ position: "relative", height: 230, bgcolor: "#f6f6f3" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 600px) 80vw, 292px"
                  style={{ objectFit: "contain", padding: 22 }}
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
              <CardContent sx={{ p: 2.5 }}>
                <Typography component="h3" variant="h6" sx={{ fontWeight: 750 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.75, minHeight: 40 }}>
                  {product.description}
                </Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2.5 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                    KSh {product.price.toLocaleString()}
                  </Typography>
                  <IconButton
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image.src,
                      })
                    }
                    aria-label={`Add ${product.name} to cart`}
                    color="primary"
                    sx={{ bgcolor: "rgba(231,70,28,0.09)", "&:hover": { bgcolor: "rgba(231,70,28,0.16)" } }}
                  >
                    <MdAddShoppingCart />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Stack alignItems="center" sx={{ mt: 3 }}>
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
        </Stack>
      </Container>
    </Box>
  )
}
