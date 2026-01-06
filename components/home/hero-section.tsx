"use client"

import Link from "next/link"
import { Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_WHATSAPP, BUSINESS_HOURS } from "@/lib/constants"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { useEffect, useState, useRef } from "react"

type ArcConfig = {
  startX: number
  startY: number
  controlX: number
  controlY: number
  endX: number
  endY: number
  width: number
  height: number
}

const getQuadraticPoint = (t: number, arc: ArcConfig) => {
  const invT = 1 - t
  const x =
    invT * invT * arc.startX +
    2 * invT * t * arc.controlX +
    t * t * arc.endX
  const y =
    invT * invT * arc.startY +
    2 * invT * t * arc.controlY +
    t * t * arc.endY
  return { x, y }
}

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [arcConfig, setArcConfig] = useState<ArcConfig | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const pizzaRef = useRef<HTMLDivElement>(null)

  // ⚙️ PARÂMETROS CONFIGURÁVEIS
  const ARC_HEIGHT = 420 // Altura do arco em pixels (aumentado para arco mais suave e fluido)
  const PIZZA_OFFSET_X = 1000 // Deslocamento horizontal - parte da pizza fica fora à esquerda
  const PIZZA_OFFSET_Y = -350 // Deslocamento vertical - parte da pizza fica fora embaixo

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Calcula o motion path SVG baseado na POSIÇÃO FINAL da pizza
  useEffect(() => {
    const calculatePath = () => {
      if (prefersReducedMotion) {
        setArcConfig(null)
        return
      }

      if (!pizzaRef.current) return

      const heroContainer = pizzaRef.current.parentElement
      if (!heroContainer) return

      const heroRect = heroContainer.getBoundingClientRect()
      const pizzaRect = pizzaRef.current.getBoundingClientRect()

      // PONTO INICIAL do path (canto inferior esquerdo - onde pizza INICIA)
      const x0 = pizzaRect.left + pizzaRect.width / 2 - heroRect.left
      const y0 = pizzaRect.top + pizzaRect.height / 2 - heroRect.top

      // PONTO FINAL do path (centro superior - onde pizza VAI ao fazer scroll)
      const x1 = heroRect.width / 2 // Centro horizontal do container
      const y1 = 150 // Próximo ao topo (150px do topo)

      // Control point para Bézier quadrático (cria o arco suave)
      // Posiciona o ponto de controle mais à direita e acima para um arco elegante
      const cx = x0 + (x1 - x0) * 0.55 // 55% do caminho horizontal
      const cy = Math.min(y0, y1) - ARC_HEIGHT // Arco para cima

      // Path SVG: canto inferior esquerdo → centro superior com arco suave
      setArcConfig({
        startX: x0,
        startY: y0,
        controlX: cx,
        controlY: cy,
        endX: x1,
        endY: y1,
        width: pizzaRect.width,
        height: pizzaRect.height,
      })
    }

    // Aguarda o DOM estar pronto antes de calcular
    const timer = setTimeout(calculatePath, 100)

    // Recalcula ao redimensionar
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(calculatePath, 50)
    })
    const container = pizzaRef.current?.parentElement
    if (container) resizeObserver.observe(container)

    return () => {
      clearTimeout(timer)
      resizeObserver.disconnect()
    }
  }, [prefersReducedMotion, ARC_HEIGHT])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500
      const progress = Math.min(scrollPosition / maxScroll, 1)

      // Easing (easeOutCubic)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setScrollProgress(easedProgress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const arcPoint = arcConfig ? getQuadraticPoint(scrollProgress, arcConfig) : null

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-primary via-primary/95 to-primary/80 overflow-hidden pt-24">
      {/* Hero container com position: relative para ancorar a pizza */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_40%)]" />
      </div>

      {/* Conteúdo */}
      <div className="container relative py-20 md:py-32">
        <div className="max-w-4xl relative">
          {/* Imagem da Pizza Real - CANTO INFERIOR ESQUERDO */}
          <div
            ref={pizzaRef}
            className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] pointer-events-none will-change-transform"
            style={{
              // Se motion path disponível, usa ele; senão usa posição estática
              ...(arcPoint && !prefersReducedMotion && arcConfig
                ? {
                    // Motion Path com arco
                    left: 0,
                    top: 0,
                    transform: `translate3d(${arcPoint.x - arcConfig.width / 2}px, ${arcPoint.y - arcConfig.height / 2}px, 0)`,
                  }
                : {
                    // Fallback: posição estática no canto inferior esquerdo
                    left: `${PIZZA_OFFSET_X}px`,
                    bottom: `${PIZZA_OFFSET_Y}px`,
                    transform: `translateZ(0)`,
                  }),
              // Pizza sempre atrás do conteúdo
              zIndex: 0,
            }}
          >
            <div className="relative w-full h-full">
              {/* Brilho externo e vapor */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/30 via-orange-500/25 to-red-600/20 blur-3xl animate-pulse" />

              {/* Pizza Base (círculo principal) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-700 shadow-2xl"
                style={{
                  boxShadow: 'inset 0 -10px 20px rgba(139, 69, 19, 0.6), 0 15px 40px rgba(0,0,0,0.4)'
                }}
              >
                {/* Queijo derretido */}
                <div className="absolute inset-8 md:inset-12 rounded-full bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-300 shadow-inner"
                  style={{
                    boxShadow: 'inset 0 3px 15px rgba(255,165,0,0.6)'
                  }}
                >
                  {/* Calabresas */}
                  {[
                    { top: '20%', left: '25%', size: '14%' },
                    { top: '35%', left: '60%', size: '16%' },
                    { top: '55%', left: '30%', size: '13%' },
                    { top: '65%', left: '65%', size: '15%' },
                    { top: '45%', left: '45%', size: '12%' },
                    { top: '25%', left: '70%', size: '14%' },
                    { top: '15%', left: '50%', size: '15%' },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-gradient-to-br from-red-500 via-red-700 to-red-900 shadow-xl"
                      style={{
                        top: pos.top,
                        left: pos.left,
                        width: pos.size,
                        height: pos.size,
                        border: '3px solid rgba(100, 0, 0, 0.9)',
                        boxShadow: 'inset 0 2px 4px rgba(255,100,100,0.4), 0 4px 8px rgba(0,0,0,0.5)'
                      }}
                    >
                      <div className="absolute w-[25%] h-[25%] rounded-full bg-white/35 top-[25%] left-[30%]" />
                    </div>
                  ))}

                  {/* Azeitonas */}
                  <div className="absolute w-[6%] h-[6%] rounded-full bg-gradient-to-br from-gray-900 to-black shadow-lg" style={{ top: '40%', left: '38%' }} />
                  <div className="absolute w-[5%] h-[5%] rounded-full bg-gradient-to-br from-gray-900 to-black shadow-lg" style={{ top: '58%', left: '58%' }} />
                  <div className="absolute w-[6%] h-[6%] rounded-full bg-gradient-to-br from-gray-900 to-black shadow-lg" style={{ top: '30%', left: '55%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Título Principal com z-index controlado */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            <span className="relative z-20 text-white">Pizza</span>{" "}
            <span className="relative z-0 text-white">Artesanal</span>
            <span className="block text-secondary relative z-20">do Jeito Certo</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl font-medium relative z-20">
            Massa fermentada 72h • Forno a lenha 480°C • Ingredientes premium
          </p>

          {/* Info Rápida */}
          <div className="flex flex-wrap gap-4 mb-8 text-white/90 relative z-20">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">{BUSINESS_HOURS.delivery}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Entrega em 40-50min</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-20">
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl"
            >
              <Link
                href={getWhatsAppLink(BUSINESS_WHATSAPP, "Olá! Quero fazer um pedido agora!")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5 mr-2" />
                PEÇA AGORA NO WHATSAPP
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 px-8 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
            >
              <Link href="/cardapio">VER CARDÁPIO COMPLETO</Link>
            </Button>
          </div>

          {/* Destaque Oferta */}
          <div className="mt-12 inline-block bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl relative z-20">
            <p className="text-sm font-semibold text-primary mb-2">OFERTA ESPECIAL</p>
            <p className="text-2xl font-black text-foreground mb-1">
              2 Pizzas Grandes + Refri 2L
            </p>
            <p className="text-sm text-muted-foreground mb-3">De <span className="line-through">R$ 156,00</span> por apenas</p>
            <p className="text-4xl font-black text-primary">R$ 139,90</p>
            <p className="text-xs text-muted-foreground mt-2">Válido de segunda a quinta-feira</p>
          </div>
        </div>
      </div>
    </section>
  )
}
