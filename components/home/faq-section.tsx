import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FAQS } from "@/lib/content"
import { HelpCircle } from "lucide-react"

export function FAQSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
          <Badge className="mb-2 w-fit mx-auto md:mx-0 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            DÚVIDAS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-2">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Tire suas dúvidas sobre delivery, formas de pagamento e mais.
          </p>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
