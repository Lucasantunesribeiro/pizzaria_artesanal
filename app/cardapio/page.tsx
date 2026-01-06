"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MENU_ITEMS, PizzaSize } from "@/lib/content"
import { formatMoney } from "@/lib/money"
import { useCart } from "@/hooks/use-cart"
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react"
import { BUSINESS_WHATSAPP, DELIVERY_FEE } from "@/lib/constants"
import { getWhatsAppLink, formatOrderMessage } from "@/lib/whatsapp"

type Category = "all" | "tradicional" | "especial" | "doce" | "bebida"

const CATEGORIES = [
  { value: "all" as Category, label: "Todas" },
  { value: "tradicional" as Category, label: "Tradicionais" },
  { value: "especial" as Category, label: "Especiais" },
  { value: "doce" as Category, label: "Doces" },
  { value: "bebida" as Category, label: "Bebidas" },
]

export default function CardapioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [selectedSizes, setSelectedSizes] = useState<Record<string, PizzaSize>>({})
  const cart = useCart()

  const filteredItems =
    selectedCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory)

  const handleAddToCart = (item: typeof MENU_ITEMS[0]) => {
    const size = selectedSizes[item.id] || "M"
    cart.addItem(item, size)
  }

  const handleSizeChange = (itemId: string, size: PizzaSize) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }))
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Cardápio</h1>
          <p className="text-muted-foreground text-lg">
            Escolha suas pizzas favoritas e finalize no WhatsApp
          </p>
        </div>

        {/* Filtro de Categorias */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.value)}
              className="shrink-0"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid de Pizzas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {filteredItems.map((item) => {
          const selectedSize = selectedSizes[item.id] || "M"
          const isBebida = item.category === "bebida"

          return (
            <Card key={item.id} className="flex flex-col">
              <div className="h-48 bg-muted relative overflow-hidden rounded-t-xl">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground text-center px-4">
                      Foto em breve
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                {item.tags && item.tags.length > 0 && (
                  <div className="absolute top-3 right-3 flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                {/* Seletor de Tamanho */}
                {!isBebida && (
                  <div className="flex gap-2">
                    {(["P", "M", "G"] as PizzaSize[]).map((size) => (
                      <Button
                        key={size}
                        size="sm"
                        variant={selectedSize === size ? "default" : "outline"}
                        onClick={() => handleSizeChange(item.id, size)}
                        className="flex-1"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Preço */}
                <div className="text-2xl font-bold text-primary">
                  {formatMoney(item.prices[selectedSize])}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" onClick={() => handleAddToCart(item)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar ao Pedido
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Botão Flutuante do Carrinho */}
      {cart.isHydrated && cart.itemCount > 0 && (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="lg"
              className="fixed bottom-20 right-6 z-40 rounded-full shadow-2xl h-16 px-6"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {cart.itemCount} {cart.itemCount === 1 ? "item" : "itens"}
              <span className="ml-4 font-bold">{formatMoney(cart.subtotal)}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col">
            <SheetHeader>
              <SheetTitle>Seu Pedido</SheetTitle>
            </SheetHeader>

            {/* Lista de Itens */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.items.map((item, index) => (
                <div key={`${item.id}-${item.size}-${index}`} className="flex gap-4 pb-4 border-b">
                  <div className="flex-1">
                    <h4 className="font-semibold">
                      {item.name} ({item.size})
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {formatMoney(item.price)} cada
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon-sm"
                      variant="outline"
                      onClick={() =>
                        cart.updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon-sm"
                      variant="outline"
                      onClick={() =>
                        cart.updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      onClick={() => cart.removeItem(item.id, item.size)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo */}
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatMoney(cart.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Taxa de entrega (DEMO)</span>
                <span>{formatMoney(DELIVERY_FEE)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatMoney(cart.subtotal + DELIVERY_FEE)}</span>
              </div>

              <Button
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href={getWhatsAppLink(
                    BUSINESS_WHATSAPP,
                    formatOrderMessage(cart.items, DELIVERY_FEE)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Finalizar no WhatsApp
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={cart.clearCart}
              >
                Limpar Carrinho
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
}
