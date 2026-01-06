import Link from "next/link"
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_HOURS, SOCIAL_MEDIA, LUCAS_WHATSAPP } from "@/lib/constants"
import { getWhatsAppLink } from "@/lib/whatsapp"

const FOOTER_LINKS = [
  { href: "/", label: "Início" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/localizacao", label: "Localização" },
  { href: "/contato", label: "Contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="mb-4">
              <Logo compact />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Pizza artesanal com massa de fermentação natural de 72h, feita no forno a lenha com ingredientes premium.
            </p>
            <div className="flex gap-4">
              <Link
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {BUSINESS_ADDRESS.street}, {BUSINESS_ADDRESS.neighborhood} - {BUSINESS_ADDRESS.city}/{BUSINESS_ADDRESS.state}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <div>Seg-Qui: {BUSINESS_HOURS.weekdays}</div>
                  <div>Sex-Dom: {BUSINESS_HOURS.weekend}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {BUSINESS_NAME}. Todos os direitos reservados.</p>
          <Link
            href={getWhatsAppLink(LUCAS_WHATSAPP, "Quero um site nesse estilo (Pizzaria Artesanal)")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-primary transition-colors"
          >
            Quero um site igual → Lucas Dev
          </Link>
        </div>
      </div>
    </footer>
  )
}
