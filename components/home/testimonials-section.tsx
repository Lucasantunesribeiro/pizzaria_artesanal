import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TESTIMONIALS } from "@/lib/content"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const averageRating = (
    TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1)

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <Badge className="mb-2 mx-auto bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            AVALIAÇÕES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-2">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= parseFloat(averageRating)
                      ? "fill-secondary text-secondary"
                      : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-black text-primary">{averageRating}</span>
            <span className="text-muted-foreground font-medium">
              {TESTIMONIALS.length} avaliações
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group relative border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Ícone de aspas decorativo */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="h-10 w-10 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= testimonial.rating
                            ? "fill-secondary text-secondary"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Texto do depoimento */}
                  <p className="text-sm text-foreground/90 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Autor */}
                  <div className="pt-3 border-t-2 border-dashed">
                    <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonial.neighborhood}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
