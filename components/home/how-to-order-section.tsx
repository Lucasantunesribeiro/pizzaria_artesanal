import { Badge } from "@/components/ui/badge"
import { HOW_TO_ORDER } from "@/lib/content"
import { ArrowRight } from "lucide-react"

export function HowToOrderSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <Badge className="mb-2 mx-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
            FÁCIL E RÁPIDO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-2">
            Como Fazer Seu Pedido
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Simples, rápido e direto pelo WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {HOW_TO_ORDER.map((item, index) => (
            <div key={item.step} className="relative flex flex-col items-center text-center gap-4 group">
              {/* Seta conectora (apenas entre itens) */}
              {index < HOW_TO_ORDER.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-12 z-0">
                  <ArrowRight className="h-8 w-8 text-primary/30" />
                </div>
              )}

              {/* Círculo numerado com animação */}
              <div className="relative z-10 h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center text-3xl font-black shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                {item.step}
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
