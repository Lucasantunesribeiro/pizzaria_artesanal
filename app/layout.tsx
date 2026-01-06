import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CookieConsent } from "@/components/cookie-consent";
import { BUSINESS_NAME, DEFAULT_CITY } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Pizza Artesanal em ${DEFAULT_CITY}`,
  description: "Pizza artesanal com massa de fermentação natural de 72h, feita no forno a lenha com ingredientes premium. Delivery rápido em Copacabana, Ipanema, Leblon e região.",
  keywords: ["pizza artesanal", "forno a lenha", "delivery pizza", DEFAULT_CITY, "fermentação natural"],
  authors: [{ name: BUSINESS_NAME }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | Pizza Artesanal`,
    description: "Pizza artesanal com fermentação natural de 72h. Delivery em Copacabana, Ipanema, Leblon e região.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
