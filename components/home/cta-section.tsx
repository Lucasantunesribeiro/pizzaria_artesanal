import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BUSINESS_WHATSAPP } from "@/lib/constants"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { Phone, ArrowRight, Zap, Flame, Star } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

      {/* Conteúdo */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Está Com Fome?
            <span className="block text-secondary mt-2">Peça Agora</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            Pizza artesanal quentinha na sua porta em até 50 minutos.
            <strong className="text-secondary"> Garantimos ou seu dinheiro de volta.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              size="lg"
              asChild
              className="h-16 px-10 text-lg font-black bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl shadow-black/30 transform hover:scale-105 transition-all"
            >
              <Link
                href={getWhatsAppLink(BUSINESS_WHATSAPP, "Quero pedir agora!")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-6 w-6 mr-3" />
                FAZER PEDIDO AGORA
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-16 px-10 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 backdrop-blur"
            >
              <Link href="/cardapio">VER CARDÁPIO</Link>
            </Button>
          </div>

          {/* Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="h-12 w-12 mb-3 text-secondary" />
              <h3 className="text-white font-bold mb-2">Entrega Rápida</h3>
              <p className="text-white/80 text-sm">40-50 minutos em média</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Flame className="h-12 w-12 mb-3 text-secondary" />
              <h3 className="text-white font-bold mb-2">Forno a Lenha</h3>
              <p className="text-white/80 text-sm">480°C de sabor autêntico</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Star className="h-12 w-12 mb-3 text-secondary fill-secondary" />
              <h3 className="text-white font-bold mb-2">Satisfação</h3>
              <p className="text-white/80 text-sm">4.8/5 nas avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
