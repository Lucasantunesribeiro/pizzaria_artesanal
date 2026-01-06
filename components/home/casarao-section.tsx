import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CasaraoSection() {
  return (
    <section className="casarao w-full relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/assets/img/bg-home-1teste.jpg"
          alt=""
          className="h-full w-full object-cover opacity-22 scale-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
      </div>
      <div className="content relative z-10 py-10 md:py-16">
        <div className="container">
          <div className="row flex flex-col items-center text-center gap-6">
            <div className="col-md-12 w-full max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                <strong>Nossa casa, seu encontro no Jardim Botânico</strong>
              </h2>
              <div className="h-4" />
              <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow">
                Um salão aconchegante, tijolinhos aparentes e um bar que convida a ficar mais tempo.
                <br />
                Daqui você vê o forno a lenha em ação e sente o aroma das pizzas napolitanas recém-saídas.
                <br />
                Um endereço feito para encontros, celebrações e noites especiais.
              </p>
              <div className="h-4" />
              <div className="flex justify-center">
                <Button
                  asChild
                  className="h-10 px-5 text-sm font-bold btn-casarao btn-menu animate__animated animate__fadeInUp scrollto"
                >
                  <Link href="/reservas">
                    Fazer Reserva
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="col-md-12 w-full">
              <div className="grid gap-4 md:grid-cols-3 place-items-center">
                <div className="w-full max-w-md aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                  <img
                    src="/assets/img/bg-home-2-left.jpg"
                    alt="Ambiente interno com mesas"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full max-w-md aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                  <img
                    src="/assets/img/bg-home-2.jpg"
                    alt="Salão com bar e mesas"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full max-w-md aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                  <img
                    src="/assets/img/bg-home-2-right.jpg"
                    alt="Salao com mesas e cadeiras"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
