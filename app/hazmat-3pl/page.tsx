import type { Metadata } from "next"
import ServiceLanding from "@/components/seo/ServiceLanding"
import { seoPages } from "@/lib/seo/pages"

const data = seoPages["hazmat-3pl"]

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: `https://deliverygroupinc.com/${data.slug}` },
  openGraph: { title: `${data.metaTitle} | Delivery Group`, description: data.metaDescription, images: [{ url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630 }] },
}

export default function Page() {
  return <ServiceLanding data={data} />
}
