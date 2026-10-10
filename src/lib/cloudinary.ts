const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/jaioidwt/image/upload"

const exactUrls: Record<string, string> = {
  "omnipowerlogo.png":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791660056/omnipowerlogo.png",
  "smart-lock-with-digital-interface-futuristic-design.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659939/smart-lock-with-digital-interface-futuristic-design.jpg",
}

export function cloudinaryImage(filename: string) {
  return exactUrls[filename] ?? `${CLOUDINARY_BASE_URL}/${encodeURIComponent(filename)}`
}

export const CLOUDINARY_LOGO = cloudinaryImage("omnipowerlogo.png")
export const CLOUDINARY_PLACEHOLDER = cloudinaryImage("placeholder.svg")
