import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import JsonLd from "@/components/JsonLd"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deliverygroupinc.com"),
  title: {
    default: "Delivery Group Inc. — Premium Last-Mile Delivery & Logistics",
    template: "%s | Delivery Group Inc.",
  },
  description:
    "Delivery Group Inc. provides premium Amazon FBA prep, last-mile, and expedited shipping solutions for e-commerce, healthcare, retail, and enterprise clients nationwide.",
  keywords: ["last mile delivery", "amazon fba prep", "logistics", "expedited shipping", "delivery service", "fba prep service", "dhl integration", "3pl fulfillment", "3pl warehouse"],
  openGraph: {
    type: "website",
    siteName: "Delivery Group Inc.",
    title: "Delivery Group Inc. — Premium Last-Mile Delivery & Logistics",
    description: "Premium Amazon FBA prep, last-mile, and expedited shipping solutions nationwide.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@deliverygroupinc",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://www.deliverygroupinc.com" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] min-h-screen flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Delivery Group Inc.",
            url: "https://www.deliverygroupinc.com",
            logo: "https://www.deliverygroupinc.com/logo.png",
            description:
              "Premium last-mile delivery and logistics company offering Amazon FBA prep, 3PL fulfillment, last-mile delivery, and expedited shipping.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-370-2105",
              contactType: "customer service",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "7587 Empire Dr",
              addressLocality: "Florence",
              addressRegion: "KY",
              postalCode: "41042",
              addressCountry: "US",
            },
            sameAs: [],
            foundingDate: "2020",
          }}
        />
        <Header />
        <main className="flex-1 pt-16 md:pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
