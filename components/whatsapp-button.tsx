"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_WHATSAPP } from "@/lib/constants"
import { getWhatsAppLink } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <Link
      href={getWhatsAppLink(BUSINESS_WHATSAPP, "Olá! Gostaria de fazer um pedido.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <Button
        size="icon-lg"
        className="rounded-full shadow-lg h-14 w-14 bg-green-500 hover:bg-green-600 transition-all group-hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </Link>
  )
}
