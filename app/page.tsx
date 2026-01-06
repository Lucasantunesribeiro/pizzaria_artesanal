import { HeroSection } from "@/components/home/hero-section"
import { CombosSection } from "@/components/home/combos-section"
import { CasaraoSection } from "@/components/home/casarao-section"
import { PopularPizzasSection } from "@/components/home/popular-pizzas-section"
import { HowToOrderSection } from "@/components/home/how-to-order-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"
import { BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_HOURS } from "@/lib/constants"

export default function HomePage() {
  // JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": BUSINESS_NAME,
    "image": "https://pizzariaartesanal.com.br/og-image.jpg", // ATUALIZAR
    "description": "Pizza artesanal com massa de fermentação natural de 72h, feita no forno a lenha com ingredientes premium",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_ADDRESS.street,
      "addressLocality": BUSINESS_ADDRESS.city,
      "addressRegion": BUSINESS_ADDRESS.state,
      "postalCode": BUSINESS_ADDRESS.cep,
      "addressCountry": "BR"
    },
    "servesCuisine": "Pizza Artesanal",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "18:00",
        "closes": "23:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "18:00",
        "closes": "00:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "4"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <CombosSection />
      <CasaraoSection />
      <PopularPizzasSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
