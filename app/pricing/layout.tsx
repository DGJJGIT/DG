import type { Metadata } from "next"

// /pricing renders a client component (can't export metadata itself), so it was
// inheriting the root/home metadata (title + canonical → home). This layout gives
// the route its own metadata + self-canonical. (Audit fix.)
export const metadata: Metadata = {
  title: "Fulfillment & 3PL Pricing",
  description:
    "Transparent per-order fulfillment and 3PL pricing from Delivery Group, covering receiving, storage, pick & pack, and returns. Estimate your costs.",
  alternates: { canonical: "https://deliverygroupinc.com/pricing" },
  openGraph: {
    title: "Fulfillment & 3PL Pricing | Delivery Group",
    description: "Transparent per-order fulfillment and 3PL pricing, estimate your costs.",
    images: [{ url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630 }],
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
