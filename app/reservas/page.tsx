"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MessageCircle, MapPin, Phone } from "lucide-react"
import { BUSINESS_NAME, BUSINESS_WHATSAPP, BUSINESS_ADDRESS, BUSINESS_HOURS } from "@/lib/constants"
import { getWhatsAppLink, formatReservationMessage } from "@/lib/whatsapp"

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: "2",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = formatReservationMessage(formData)
    window.open(getWhatsAppLink(BUSINESS_WHATSAPP, message), "_blank")
  }

  return (
    <div className="container pt-40 pb-12 md:pt-44">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Reservas</h1>
          <p className="text-lg text-muted-foreground">
            Garanta sua mesa no {BUSINESS_NAME} com confirmação rápida pelo WhatsApp
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Faça sua reserva</CardTitle>
              <CardDescription>
                Preencha os dados abaixo e enviaremos sua solicitação no WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium block mb-2">
                      WhatsApp
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(21) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="date" className="text-sm font-medium block mb-2">
                      Data
                    </label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="text-sm font-medium block mb-2">
                      Horário
                    </label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="people" className="text-sm font-medium block mb-2">
                      Pessoas
                    </label>
                    <Input
                      id="people"
                      type="number"
                      min={1}
                      max={20}
                      value={formData.people}
                      onChange={(e) => setFormData((prev) => ({ ...prev, people: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="text-sm font-medium block mb-2">
                    Observações (opcional)
                  </label>
                  <Textarea
                    id="notes"
                    placeholder="Aniversário, preferência de mesa, restrições alimentares..."
                    value={formData.notes}
                    onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Solicitar reserva pelo WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Horários para reservas</CardTitle>
                <CardDescription>Confirme a disponibilidade com antecedência</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm space-y-1">
                    <p>Segunda a Quinta: {BUSINESS_HOURS.weekdays}</p>
                    <p>Sexta a Domingo: {BUSINESS_HOURS.weekend}</p>
                    <p className="text-muted-foreground mt-2">
                      Chegue 10 minutos antes do horário reservado
                    </p>
                  </div>
                </div>
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
                <Button className="w-full" variant="outline" asChild>
                  <Link
                    href={BUSINESS_ADDRESS.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Abrir no Google Maps
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reserva rápida</CardTitle>
                <CardDescription>Prefere falar direto com a gente?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  Atendimento via WhatsApp em poucos minutos
                </div>
                <Button className="w-full" asChild>
                  <Link
                    href={getWhatsAppLink(
                      BUSINESS_WHATSAPP,
                      "Olá! Quero reservar uma mesa."
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
          </div>
        </div>
      </div>
    </div>
  )
}
