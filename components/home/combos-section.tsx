"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { src: "/assets/img/11.jpg", alt: "Pizza artesanal no forno à lenha" },
  { src: "/assets/img/22.jpg", alt: "Pizza napolitana pronta para servir" },
]

export function CombosSection() {
  const [activeIndex, setActiveIndex] = useState(1)
  const total = slides.length

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % total)
  }

  return (
    <section id="about" className="about w-full py-16 md:py-20 bg-primary/5">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-muted/30 shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                {slides.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={index !== activeIndex}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-foreground shadow-md transition hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-foreground shadow-md transition hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                LÁ VEM ELA
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-foreground">
                Um pedacinho de Nápoles no Rio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa massa artesanal leva apenas água, farinha italiana e fermento natural, e segue as diretrizes
                napolitanas: tem fermentação espontânea de, no mínimo, 48 horas; é aberta na mão e assada no nosso forno
                à lenha em até um minuto e meio; é macia e elástica. Nossos ingredientes são sempre fresquíssimos e os
                molhos também são fiéis à tradição.
              </p>
            </div>
            <Button asChild className="h-12 px-6 text-base font-bold">
              <Link href="/contato">
                Fale Conosco
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
