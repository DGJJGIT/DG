import type { Metadata } from "next"

// /pricing renders a client component (can't export metadata itself), so it was
// inheriting the root/home metadata (title + canonical → home). This layout gives
// the route its own metadata + self-canonical. (Audit fix.)
export const metadata: Metadata = {
  title: "Fulfillment & 3PL Pricing",
  description:
    "Transparent per-order fulfillment and 3PL pricing from Delivery Group — receiving, storage, pick & pack, and returns. Estimate your costs.",
  alternates: { canonical: "https://www.deliverygroupinc.com/pricing" },
  openGraph: {
    title: "Fulfillment & 3PL Pricing | Delivery Group",
    description: "Transparent per-order fulfillment and 3PL pricing — estimate your costs.",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
