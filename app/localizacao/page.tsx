import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_NAME,
} from "@/lib/constants"
import { DELIVERY_NEIGHBORHOODS } from "@/lib/content"
import { formatMoney } from "@/lib/money"
import { DELIVERY_FEE } from "@/lib/constants"

export const metadata = {
  title: `Localização e Entrega | ${BUSINESS_NAME}`,
  description: `Encontre nossa pizzaria em ${BUSINESS_ADDRESS.neighborhood}, ${BUSINESS_ADDRESS.city}. Entregamos em Copacabana, Ipanema, Leblon e região.`,
}

export default function LocalizacaoPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Localização e Entrega
          </h1>
          <p className="text-lg text-muted-foreground">
            Visite nossa loja ou peça delivery. Estamos prontos para atender você!
          </p>
        </div>

        {/* Endereço e Mapa */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Nossa Loja</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-sm text-muted-foreground">
                        {BUSINESS_ADDRESS.street}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {BUSINESS_ADDRESS.neighborhood} - {BUSINESS_ADDRESS.city}/{BUSINESS_ADDRESS.state}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CEP: {BUSINESS_ADDRESS.cep}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Horário de Funcionamento</p>
                      <p className="text-sm text-muted-foreground">
                        Segunda a Quinta: {BUSINESS_HOURS.weekdays}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sexta a Domingo: {BUSINESS_HOURS.weekend}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Delivery: {BUSINESS_HOURS.delivery}
                      </p>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <a
                      href={BUSINESS_ADDRESS.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Abrir no Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mapa Embed Placeholder */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-square md:aspect-auto md:h-full min-h-[400px] bg-muted rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2 p-6">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      [Mapa do Google Maps - Copacabana, Rio de Janeiro]
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                      Em produção, adicione um iframe do Google Maps aqui com as coordenadas corretas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bairros Atendidos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Bairros Atendidos</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span className="font-medium">Taxa de Entrega</span>
                  <Badge variant="secondary" className="text-base">
                    {formatMoney(DELIVERY_FEE)}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {DELIVERY_NEIGHBORHOODS.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {neighborhood}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Tempo médio de entrega: 40-50 minutos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Retirada */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Retirada no Local</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Prefere buscar sua pizza? Faça seu pedido pelo WhatsApp e retire sem taxa adicional!
                </p>
                <div className="flex items-start gap-2 bg-muted p-4 rounded-lg">
                  <div className="h-5 w-5 text-primary mt-0.5">ℹ️</div>
                  <p className="text-sm">
                    <strong>Importante:</strong> Aguarde nossa confirmação via WhatsApp antes de ir buscar seu pedido.
                    O tempo de preparo médio é de 25-35 minutos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
