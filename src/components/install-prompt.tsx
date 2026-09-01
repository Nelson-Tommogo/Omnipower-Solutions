"use client"

import { useEffect, useState } from "react"
import { Button } from "@/src/components/ui/button"
import { MdClose, MdDownload } from "react-icons/md"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if it's iOS
    const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : ""
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent))

    // Handler for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === "accepted") {
        setShowPrompt(false)
      }
      setDeferredPrompt(null)
    } catch (error) {
      console.error("Install prompt error:", error)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    setDeferredPrompt(null)
  }

  // Show iOS instructions if on iOS and app not installed
  if (isIOS && showPrompt) {
    return (
      <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50 animate-in fade-in slide-in-from-bottom-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-600" />
              Install Omnipower
            </h3>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Tap the Share button, then select "Add to Home Screen" to install the Omnipower app.
          </p>
          <Button onClick={handleDismiss} variant="outline" size="sm" className="w-full">
            Got it
          </Button>
        </div>
      </div>
    )
  }

  // Show Android/Desktop install prompt
  if (deferredPrompt && showPrompt && !isIOS) {
    return (
      <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50 animate-in fade-in slide-in-from-bottom-4">
        <div className="bg-white border border-blue-200 rounded-lg shadow-lg p-4 bg-gradient-to-r from-blue-50 to-white">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-600" />
              Install Omnipower
            </h3>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Get instant access to Omnipower Solutions. Install our app for the best experience on your device.
          </p>
          <div className="flex gap-2">
            <Button
              onClick={handleInstall}
              size="sm"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Install
            </Button>
            <Button
              onClick={handleDismiss}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              Later
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
