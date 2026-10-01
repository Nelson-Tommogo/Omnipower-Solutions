import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import "./globals.css"
import { Providers } from "./providers"
import { Header } from "@/src/components/header"
import { Footer } from "@/src/components/footer"
import { BottomNav } from "@/src/components/bottom-nav"
import { InstallPrompt } from "@/src/components/install-prompt"
import { ServiceWorkerRegister } from "@/src/components/service-worker-register"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Omnipower Solutions - Electrical & Electronics Services",
  description:
    "Professional CCTV installations, wiring, solar panel installations, electrical fences, automated gates and more.",
  generator: "v0.dev",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Omnipower",
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#5C1414",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Omnipower" />
        <meta name="msapplication-TileColor" content="#5C1414" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#5C1414" />
        <link rel="icon" href="/placeholder-logo.png" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: "mui" }}>
          <Providers>
            <div className="mobile-bottom-nav-shell flex min-h-svh flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <BottomNav />
            <InstallPrompt />
            <ServiceWorkerRegister />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
