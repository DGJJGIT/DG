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
  metadataBase: new URL("https://deliverygroupinc.com"),
  title: {
    default: "Delivery Group Inc. — Premium Last-Mile Delivery & Logistics",
    template: "%s | Delivery Group Inc.",
  },
  description:
    "Delivery Group Inc. provides premium Amazon FBA prep, last-mile, and expedited shipping solutions for e-commerce, healthcare, retail, and enterprise clients nationwide.",
  keywords: ["last mile delivery", "amazon fba prep", "logistics", "expedited shipping", "delivery service", "fba prep service", "dhl integration", "3pl fulfillment", "3pl warehouse"],
  openGraph: {
    type: "website",
    url: "https://deliverygroupinc.com",
    siteName: "Delivery Group Inc.",
    title: "Delivery Group Inc. — Premium Last-Mile Delivery & Logistics",
    description: "Premium Amazon FBA prep, last-mile, and expedited shipping solutions nationwide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Delivery Group Inc. — warehouse and logistics operations in Northern Kentucky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deliverygr_inc",
    images: ["https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://deliverygroupinc.com" },
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
            url: "https://deliverygroupinc.com",
            logo: "https://deliverygroupinc.com/logo.png",
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
            sameAs: [
              "https://www.instagram.com/delivery.group.inc/",
              "https://www.linkedin.com/company/106558314",
              "https://www.facebook.com/profile.php?id=61574137717976",
              "https://www.tiktok.com/@deliverygroup0",
              "https://www.youtube.com/@DeliveryGroupInc",
              "https://x.com/deliverygr_inc",
              "https://www.pinterest.com/deliverygroupinc/",
            ],
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
