const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/jaioidwt/image/upload"

const exactUrls: Record<string, string> = {
  "omnipowerlogo.png":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791660056/omnipowerlogo.png",
  "smart-lock-with-digital-interface-futuristic-design.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659939/smart-lock-with-digital-interface-futuristic-design.jpg",
  "electricfence.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659933/electricfence.jpg",
  "outdoor.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659931/outdoor.jpg",
  "smarthomehub.jpeg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659931/smarthomehub.jpg",
  "smarthomehub.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659931/smarthomehub.jpg",
  "solarpanelkit.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659930/solarpanelkit.jpg",
  "nightvision.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659929/nightvision.jpg",
  "electricalcables.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659913/electricalcables.jpg",
  "ledlight.png":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659921/ledlight.jpg",
  "electricfenceenergiser.jpeg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659907/electricfenceenergiser.jpg",
  "electricfenceenergiser.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659907/electricfenceenergiser.jpg",
  "337767-PADJX2-783.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659908/337767-PADJX2-783.jpg",
  "hdcctv.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659929/nightvision.jpg",
  "cctv.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659929/nightvision.jpg",
  "cctvpic.jpeg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659929/nightvision.jpg",
  "hdsmartdoorlock.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659939/smart-lock-with-digital-interface-futuristic-design.jpg",
  "panel.jpeg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659930/solarpanelkit.jpg",
  "solarpanel.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659930/solarpanelkit.jpg",
  "wiring.jpeg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659913/electricalcables.jpg",
  "wiring.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659913/electricalcables.jpg",
  "automatedgates.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659931/outdoor.jpg",
  "electricfence.jpeg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659933/electricfence.jpg",
  "electricfencee.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791659933/electricfence.jpg",
  "placeholder.svg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791660056/omnipowerlogo.png",
  "placeholder.jpg":
    "https://res.cloudinary.com/jaioidwt/image/upload/v1791660056/omnipowerlogo.png",
}

export function cloudinaryImage(filename: string) {
  return exactUrls[filename] ?? `${CLOUDINARY_BASE_URL}/${encodeURIComponent(filename)}`
}

export const CLOUDINARY_LOGO = cloudinaryImage("omnipowerlogo.png")
export const CLOUDINARY_PLACEHOLDER = cloudinaryImage("placeholder.svg")
