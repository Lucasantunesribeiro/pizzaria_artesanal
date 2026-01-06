"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getCookieConsent, setCookieConsent } from "@/lib/cookies"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay para evitar flash durante hydration
    const timer = setTimeout(() => {
      const consent = getCookieConsent()
      if (consent === null) {
        setIsVisible(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    setCookieConsent(true)
    setIsVisible(false)
  }

  const handleDecline = () => {
    setCookieConsent(false)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-gradient-to-r from-foreground via-foreground/95 to-foreground/90 text-background border-t-4 border-secondary shadow-2xl">
        <div className="container py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Mensagem */}
            <div className="flex-1 pr-4">
              <p className="text-sm md:text-base font-medium leading-relaxed">
                Utilizamos cookies para melhorar sua experiência de navegação,
                personalizar conteúdos e analisar nosso tráfego. Ao continuar navegando,
                você concorda com nossa{" "}
                <span className="text-secondary font-bold">Política de Cookies</span>.
              </p>
            </div>

            {/* Botões */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                onClick={handleDecline}
                variant="outline"
                size="sm"
                className="flex-1 md:flex-initial bg-background/10 hover:bg-background/20 text-background border-background/30 backdrop-blur h-10 px-6 font-bold"
              >
                Recusar
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="flex-1 md:flex-initial bg-secondary hover:bg-secondary/90 text-secondary-foreground h-10 px-8 font-bold shadow-lg"
              >
                Aceitar Cookies
              </Button>
              <Button
                onClick={handleDecline}
                variant="ghost"
                size="icon"
                className="hidden md:flex text-background hover:bg-background/10 h-10 w-10"
                aria-label="Fechar banner de cookies"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
