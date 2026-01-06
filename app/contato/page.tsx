"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { BUSINESS_NAME, BUSINESS_WHATSAPP, BUSINESS_ADDRESS, BUSINESS_HOURS, SOCIAL_MEDIA, LUCAS_WHATSAPP } from "@/lib/constants"
import { getWhatsAppLink, formatContactMessage } from "@/lib/whatsapp"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    neighborhood: "",
    type: "entrega" as "entrega" | "retirada",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = formatContactMessage(formData)
    window.open(getWhatsAppLink(BUSINESS_WHATSAPP, message), "_blank")
  }

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contato</h1>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco para fazer seu pedido ou tirar dúvidas
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formulário */}
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário e enviaremos sua mensagem via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="neighborhood" className="text-sm font-medium block mb-2">
                    Bairro
                  </label>
                  <Input
                    id="neighborhood"
                    placeholder="Ex: Copacabana"
                    value={formData.neighborhood}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        neighborhood: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Tipo de Pedido
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant={formData.type === "entrega" ? "default" : "outline"}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, type: "entrega" }))
                      }
                    >
                      Entrega
                    </Button>
                    <Button
                      type="button"
                      variant={formData.type === "retirada" ? "default" : "outline"}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, type: "retirada" }))
                      }
                    >
                      Retirada
                    </Button>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="text-sm font-medium block mb-2">
                    Observações (opcional)
                  </label>
                  <Textarea
                    id="notes"
                    placeholder="Alguma observação especial?"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>
                  Nossa forma mais rápida de atendimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link
                    href={getWhatsAppLink(
                      BUSINESS_WHATSAPP,
                      "Olá! Gostaria de fazer um pedido."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chamar no WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Endereço</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <p>{BUSINESS_ADDRESS.street}</p>
                    <p>{BUSINESS_ADDRESS.neighborhood} - {BUSINESS_ADDRESS.city}/{BUSINESS_ADDRESS.state}</p>
                    <p>CEP: {BUSINESS_ADDRESS.cep}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm space-y-1">
                    <p>Seg-Qui: {BUSINESS_HOURS.weekdays}</p>
                    <p>Sex-Dom: {BUSINESS_HOURS.weekend}</p>
                    <p className="text-muted-foreground mt-2">
                      Delivery: {BUSINESS_HOURS.delivery}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" asChild>
                    <Link
                      href={SOCIAL_MEDIA.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <Link
                      href={SOCIAL_MEDIA.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Link Portfolio */}
            <Card className="bg-muted/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium">Gostou deste site?</p>
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href={getWhatsAppLink(LUCAS_WHATSAPP, "Quero um site nesse estilo (Pizzaria Artesanal)")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero um site igual
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
