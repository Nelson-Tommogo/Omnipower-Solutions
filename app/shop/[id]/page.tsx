import { ProductDetail } from "./product-detail";
import { notFound } from "next/navigation";

interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  category: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
}

const products: Product[] = [
  {
    id: "p1",
    name: "HD CCTV Camera",
    description: "1080p high-definition security camera with night vision",
    fullDescription: "This professional-grade 1080p HD CCTV camera provides crystal-clear video surveillance day and night. With advanced infrared night vision capabilities, it can capture clear footage up to 30 meters in complete darkness. The weatherproof housing (IP66 rated) ensures reliable operation in all weather conditions. Easy to install and compatible with most DVR systems.",
    price: 7500,
    category: "security",
    features: [
      "1080p Full HD resolution",
      "30m night vision range",
      "IP66 weatherproof rating",
      "Wide angle 3.6mm lens",
      "Motion detection",
      "Compatible with most DVR systems"
    ],
    specifications: {
      Resolution: "1920 x 1080p",
      Sensor: '1/2.7" CMOS',
      Lens: "3.6mm",
      "Night Vision": "30m (IR LEDs)",
      Weatherproof: "IP66",
      Power: "DC 12V",
      Dimensions: "70 x 154mm"
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ee3ebcd5-724c-4d8f-8897-807035d34b4b.jpg-4NuDzCYTYvvNE5CV9j2HsrpHuyurvh.jpeg"
  },
  {
    id: "p2",
    name: "Smart Door Lock",
    description: "Fingerprint and PIN code access control system",
    fullDescription: "Enhance your home security with this advanced smart door lock featuring multiple access methods including fingerprint, PIN code, RFID card, and smartphone app. The fingerprint sensor provides quick and reliable access with 99.9% accuracy. The lock can store up to 100 fingerprints and 100 PIN codes, making it perfect for homes and small offices.",
    price: 12000,
    category: "security",
    features: [
      "Fingerprint, PIN, RFID, and app access",
      "Stores up to 100 fingerprints",
      "Smartphone control via Bluetooth",
      "Emergency USB power backup",
      "Low battery warning",
      "Easy installation"
    ],
    specifications: {
      "Access Methods": "Fingerprint, PIN, RFID, App",
      "Fingerprint Capacity": "100",
      "PIN Capacity": "100",
      "RFID Card Capacity": "100",
      Battery: "4 x AA (not included)",
      "Battery Life": "Up to 12 months",
      Material: "Zinc alloy",
      Color: "Black"
    },
    image: "/public/smart-lock-with-digital-interface-futuristic-design.jpg"
  },
  {
    id: "p3",
    name: "Solar Panel Kit",
    description: "250W solar panel with mounting hardware and inverter",
    fullDescription: "This complete solar panel kit includes everything you need to start generating your own clean, renewable energy. The kit includes a high-efficiency 250W monocrystalline solar panel, mounting hardware, a charge controller, and an inverter. Perfect for homes, cabins, RVs, or as a backup power source.",
    price: 25000,
    category: "solar",
    features: [
      "250W monocrystalline solar panel",
      "High efficiency conversion rate",
      "Complete mounting hardware included",
      "MPPT charge controller",
      "Pure sine wave inverter",
      "Easy DIY installation"
    ],
    specifications: {
      "Panel Type": "Monocrystalline",
      "Power Output": "250W",
      Voltage: "24V",
      Dimensions: "1650 x 992 x 40mm",
      Weight: "19kg",
      Inverter: "500W pure sine wave",
      "Charge Controller": "30A MPPT",
      Warranty: "25 years (panel), 5 years (electronics)"
    },
    image: "/public/solarpanelkit.jpg"
  },
  {
    id: "p12",
    name: "Smart Home Hub",
    description: "Central control system for home automation",
    fullDescription: "This versatile smart home hub serves as the central control point for your entire home automation system. It's compatible with over 100 different smart devices including lights, thermostats, locks, cameras, and more. Control everything through a single intuitive app, set up automated routines, and even use voice commands through integration with popular voice assistants.",
    price: 12500,
    category: "automation",
    features: [
      "Compatible with 100+ smart devices",
      "Voice assistant integration",
      "Automated routines and scenes",
      "Energy usage monitoring",
      "Remote access from anywhere",
      "Simple setup process"
    ],
    specifications: {
      Connectivity: "Wi-Fi, Bluetooth, Zigbee, Z-Wave",
      "Power Supply": "5V DC (adapter included)",
      Processor: "Quad-core 1.5GHz",
      Memory: "1GB RAM, 8GB storage",
      Dimensions: "110 x 110 x 30mm",
      "Compatible Assistants": "Alexa, Google Assistant, Siri",
      "App Support": "iOS, Android",
      Warranty: "2 years"
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-indoor-living-room-with-comfortable-sofa-generative-ai.jpg-S83e0tSImTL98IyR91lRnniP5KhUJV.jpeg"
  }
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id
  }));
}

export const dynamicParams = false;

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-8">
      <div className="container">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}