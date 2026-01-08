"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, Phone, Clock, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BUSINESS_WHATSAPP, SOCIAL_MEDIA } from "@/lib/constants"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/reservas", label: "Reservas" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isSolid = isScrolled || !isHome

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setIsScrolled(scrollPos > 50)
      // Calcula progresso de 0 a 1 nos primeiros 150px de scroll
      setScrollProgress(Math.min(scrollPos / 150, 1))
      
      // Lógica para esconder/mostrar header no mobile
      if (isMobile) {
        const scrollDifference = scrollPos - lastScrollY
        
        // Se rolar para baixo mais de 10px, esconde o header
        if (scrollDifference > 10 && scrollPos > 100) {
          setIsHeaderVisible(false)
        }
        // Se rolar para cima, mostra o header
        else if (scrollDifference < -10) {
          setIsHeaderVisible(true)
        }
        // Se estiver no topo, sempre mostra
        if (scrollPos < 50) {
          setIsHeaderVisible(true)
        }
        
        setLastScrollY(scrollPos)
      } else {
        // No desktop, sempre visível
        setIsHeaderVisible(true)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMobile])

  return (
    <>
      {/* Topbar - Animação suave de fade e slide */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-10 w-full z-40",
          "transition-all duration-700 ease-out",
          "lg:translate-y-0",
          isHeaderVisible ? "translate-y-0" : "-translate-y-full",
          isSolid
            ? "bg-background/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            : "bg-gradient-to-br from-primary via-primary/95 to-primary/80"
        )}
        style={{
          transform: `translateY(${isScrolled ? '0' : '0'})`,
          opacity: 1,
        }}
      />

      {/* Header Principal - Transições fluidas e elegantes */}
      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-50",
          "transition-all duration-700 ease-out",
          "lg:translate-y-0",
          isHeaderVisible ? "translate-y-0" : "-translate-y-full",
          isSolid
            ? "bg-background/95 backdrop-blur-xl border-b border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            : "bg-gradient-to-br from-primary via-primary/95 to-primary/80"
        )}
        style={{
          // Aplica animação de scroll progressivo apenas no desktop
          ...(!isMobile ? { transform: `translateY(${scrollProgress * -2}px)` } : {}),
        }}
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between max-w-6xl mx-auto">
            {/* Logo Centralizado à Esquerda */}
            <Link
              href="/"
              className="flex items-center group"
              style={{
                transform: `scale(${1 - scrollProgress * 0.05})`,
              }}
            >
              <Logo variant={isSolid ? "dark" : "light"} />
            </Link>

            {/* Desktop Navigation Centralizado */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-all duration-500 hover:scale-105 relative",
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary",
                  "after:transition-all after:duration-300 hover:after:w-full",
                  isSolid ? "text-foreground" : "text-white drop-shadow-md"
                )}
                style={{
                  transform: `translateY(${scrollProgress * -1}px)`,
                  opacity: 1 - scrollProgress * 0.1,
                  transitionDelay: `${index * 30}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}

            </nav>

            {/* Social Icons e Phone Button à Direita */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors hover:text-primary",
                  isSolid ? "text-foreground" : "text-white"
                )}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors hover:text-primary",
                  isSolid ? "text-foreground" : "text-white"
                )}
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* Phone Button */}
              <Button
                size="icon"
                className={cn(
                  "rounded-full",
                  isSolid
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/90"
                )}
                asChild
              >
                <a href={`tel:${BUSINESS_WHATSAPP}`}>
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu"
                className={cn(
                  isSolid ? "text-foreground" : "text-white"
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
              <SheetTitle className="text-left">
                  <Logo compact />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium transition-colors hover:text-primary py-3 px-2 rounded hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Social Links Mobile */}
                <div className="flex items-center gap-4 mt-6 px-2">
                  <a
                    href={SOCIAL_MEDIA.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href={SOCIAL_MEDIA.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={`tel:${BUSINESS_WHATSAPP}`}
                    className="ml-auto"
                  >
                    <Button size="icon" className="rounded-full">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
