import type { Metadata } from "next"
import ServiceLanding from "@/components/seo/ServiceLanding"
import { seoPages } from "@/lib/seo/pages"

const data = seoPages["3pl-ecommerce-fulfillment"]

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: `https://deliverygroupinc.com/${data.slug}` },
  openGraph: { title: `${data.metaTitle} | Delivery Group`, description: data.metaDescription },
}

export default function Page() {
  return <ServiceLanding data={data} />
}
