"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MENU_ITEMS } from "@/lib/content"
import { formatMoney } from "@/lib/money"
import { ArrowRight, Clock, Flame, Leaf, ShoppingCart, Star } from "lucide-react"

const POPULAR_IDS = [
  "burrata-parma",
  "trufa-negra",
  "margherita",
  "calabresa",
  "frango-catupiry",
  "quatro-queijos",
]

const FEATURED_ID = "burrata-parma"

export function PopularPizzasSection() {
  const popularPizzas = MENU_ITEMS.filter((item) => POPULAR_IDS.includes(item.id)).sort(
    (a, b) => POPULAR_IDS.indexOf(a.id) - POPULAR_IDS.indexOf(b.id)
  )

  if (!popularPizzas.length) {
    return null
  }

  const featuredPizza =
    popularPizzas.find((pizza) => pizza.id === FEATURED_ID) ?? popularPizzas[0]
  const gridPizzas = popularPizzas.filter((pizza) => pizza.id !== featuredPizza.id)

  const highlights = [
    {
      title: "Forno a lenha",
      description: "480C no ponto certo",
      icon: Flame,
    },
    {
      title: "Fermentacao lenta",
      description: "72h de leveza e sabor",
      icon: Clock,
    },
    {
      title: "Ingredientes premium",
      description: "selecionados a mao",
      icon: Leaf,
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-secondary/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] items-start">
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="flex flex-col gap-4">
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                MAIS PEDIDAS
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                As favoritas dos clientes
              </h2>
              <p className="text-lg text-muted-foreground">
                Selecao com receitas classicas e especiais que vivem no topo do ranking.
                Massa leve, forno a lenha e ingredientes premium em cada fatia.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="font-semibold text-foreground">5.0</span>
              <span>avaliacao media no delivery</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="h-12 px-6 text-base font-bold">
                <Link href="/cardapio">
                  Ver cardapio completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-6 text-base font-bold">
                <Link href="/reservas">Reservar mesa</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
            <article className="group relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl sm:col-span-2">
              <div className="absolute inset-0">
                {featuredPizza.image ? (
                  <img
                    src={featuredPizza.image}
                    alt={featuredPizza.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-muted" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end gap-4 p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-secondary text-secondary-foreground border-0">
                    Favorita da casa
                  </Badge>
                  <Badge className="bg-white/90 text-primary border-0">
                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                    TOP
                  </Badge>
                </div>
                <h3 className="text-3xl font-black text-white">{featuredPizza.name}</h3>
                <p className="text-sm text-white/85 max-w-xl line-clamp-2">
                  {featuredPizza.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/70">A partir de</p>
                    <p className="text-3xl font-black text-secondary">
                      {formatMoney(featuredPizza.prices.P)}
                    </p>
                    <p className="text-xs text-white/70">
                      M {formatMoney(featuredPizza.prices.M)} | G {formatMoney(featuredPizza.prices.G)}
                    </p>
                  </div>
                  <Button asChild className="h-11 px-5 text-sm font-bold">
                    <Link href="/cardapio">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Pedir agora
                    </Link>
                  </Button>
                </div>
              </div>
            </article>

            {gridPizzas.map((pizza) => (
              <article
                key={pizza.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  {pizza.image ? (
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-muted" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  {pizza.tags && pizza.tags.length > 0 && (
                    <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                      {pizza.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-white/90 text-primary border-0 text-[10px] font-bold uppercase tracking-wide"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{pizza.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {pizza.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">A partir de</p>
                      <p className="text-xl font-black text-primary">
                        {formatMoney(pizza.prices.P)}
                      </p>
                    </div>
                    <Link
                      href="/cardapio"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
                    >
                      Ver no cardapio
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
