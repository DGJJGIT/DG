import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Package, Warehouse, Truck, RefreshCw, AlertTriangle, ShoppingBag, BookOpen } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "All Logistics & Delivery Services",
  description: "Dedicated service pages across fulfillment, 3PL warehousing, courier & delivery, reverse logistics, and hazmat. One trusted partner for every logistics need.",
  alternates: { canonical: "https://deliverygroupinc.com/services" },
  openGraph: {
    title: "All Logistics & Delivery Services",
    description: "Dedicated service pages across fulfillment, 3PL, courier, reverse logistics, and hazmat.",
    images: [{ url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630, alt: "Delivery Group Inc., logistics services" }],
  },
}

const clusters = [
  {
    id: "fulfillment",
    label: "Fulfillment",
    icon: Package,
    color: "#B8962E",
    tagline: "Order fulfillment for every channel and scale",
    hub: { label: "Fulfillment Center", href: "/fulfillment-center", flagship: true },
    pages: [
      { label: "Fulfillment Warehouse", href: "/fulfillment-warehouse" },
      { label: "Pick & Pack Fulfillment", href: "/pick-and-pack-fulfillment" },
      { label: "Kitting Services", href: "/kitting-services" },
      { label: "Amazon FBA Prep", href: "/amazon-fba-prep" },
      { label: "Subscription Box Fulfillment", href: "/subscription-box-fulfillment" },
      { label: "Small Business Fulfillment", href: "/small-business-fulfillment" },
      { label: "TikTok Shop Fulfillment", href: "/tiktok-shop-fulfillment" },
      { label: "Apparel Fulfillment", href: "/apparel-fulfillment" },
      { label: "Crowdfunding Fulfillment", href: "/crowdfunding-fulfillment" },
      { label: "Supplement Fulfillment", href: "/supplement-fulfillment" },
      { label: "Etsy Fulfillment", href: "/etsy-fulfillment" },
    ],
  },
  {
    id: "3pl",
    label: "3PL & Warehousing",
    icon: Warehouse,
    color: "#3D7BBF",
    tagline: "Third-party logistics from one Northern Kentucky hub",
    hub: { label: "3PL Fulfillment", href: "/3pl-fulfillment", flagship: true },
    pages: [
      { label: "3PL (Overview)", href: "/3pl" },
      { label: "3PL Warehousing", href: "/3pl-warehousing" },
      { label: "3PL WMS", href: "/3pl-wms" },
      { label: "3PL Ecommerce Fulfillment", href: "/3pl-ecommerce-fulfillment" },
      { label: "3PL for Small Business", href: "/3pl-for-small-business" },
      { label: "Liquidation Pallets", href: "/liquidation-pallets" },
    ],
  },
  {
    id: "courier",
    label: "Courier & Delivery",
    icon: Truck,
    color: "#2E7D52",
    tagline: "Last-mile, white-glove, and expedited nationwide",
    hub: { label: "White Glove Delivery", href: "/white-glove-delivery", flagship: true },
    pages: [
      { label: "Same-Day Courier", href: "/same-day-courier" },
      { label: "Last-Mile Delivery", href: "/last-mile-delivery" },
      { label: "Expedited Freight", href: "/expedited-freight" },
      { label: "Cross Docking", href: "/cross-docking" },
      { label: "On-Demand Delivery", href: "/on-demand-delivery" },
      { label: "Rush Delivery", href: "/rush-delivery" },
      { label: "Courier for Business", href: "/courier-for-business" },
      { label: "Courier Services", href: "/courier-services" },
      { label: "Medical Courier", href: "/medical-courier" },
    ],
  },
  {
    id: "returns",
    label: "Returns & Reverse Logistics",
    icon: RefreshCw,
    color: "#7B5EA7",
    tagline: "Returns processing and reverse logistics at scale",
    hub: { label: "Returns Management", href: "/returns-management", flagship: true },
    pages: [
      { label: "Reverse Logistics Company", href: "/reverse-logistics-company" },
    ],
  },
  {
    id: "hazmat",
    label: "Hazmat",
    icon: AlertTriangle,
    color: "#C0392B",
    tagline: "Storage, pick, pack, and shipping of regulated products",
    hub: { label: "Hazmat Fulfillment", href: "/hazmat-fulfillment", flagship: true },
    pages: [
      { label: "Electronics & Batteries", href: "/electronics-fulfillment" },
    ],
  },
  {
    id: "products",
    label: "Product Categories",
    icon: ShoppingBag,
    color: "#2E7D6B",
    tagline: "Fulfillment built around what you sell",
    hub: { label: "DTC Fulfillment", href: "/dtc-fulfillment", flagship: true },
    pages: [
      { label: "Electronics Fulfillment", href: "/electronics-fulfillment" },
      { label: "Food & Beverage Fulfillment", href: "/food-and-beverage-fulfillment" },
      { label: "Footwear Fulfillment", href: "/footwear-fulfillment" },
      { label: "Jewelry Fulfillment", href: "/jewelry-fulfillment" },
      { label: "Pet Product Fulfillment", href: "/pet-product-fulfillment" },
      { label: "Sporting Goods Fulfillment", href: "/sporting-goods-fulfillment" },
      { label: "Toy Fulfillment", href: "/toy-fulfillment" },
      { label: "Book Fulfillment", href: "/book-fulfillment" },
      { label: "CBD Fulfillment", href: "/cbd-fulfillment" },
      { label: "Beauty & Cosmetics", href: "/solutions/beauty-cosmetics" },
      { label: "Fragile Items", href: "/solutions/fragile" },
      { label: "Oversized Items", href: "/solutions/oversized" },
    ],
  },
  {
    id: "guides",
    label: "Guides & Comparisons",
    icon: BookOpen,
    color: "#5A6B7B",
    tagline: "Answers for brands choosing a 3PL",
    hub: { label: "What Is a 3PL?", href: "/what-is-a-3pl", flagship: true },
    pages: [
      { label: "3PL Services Overview", href: "/3pl" },
      { label: "ShipBob Alternative", href: "/shipbob-alternative" },
      { label: "ShipMonk Alternative", href: "/shipmonk-alternative" },
    ],
  },
]

export default function ServicesPage() {
  const totalPages = clusters.reduce((sum, c) => sum + 1 + c.pages.length, 0)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>What We Deliver</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[600px]">
            Every logistics service.<br />
            <span className="gold-text">One trusted partner.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[560px] leading-relaxed mb-8">
            {totalPages} dedicated service pages across 5 specializations, fulfillment, 3PL warehousing, courier &amp; delivery, reverse logistics, and hazmat. 2M+ deliveries/month, 99.4% on-time, all 50 states.
          </p>
          <div className="flex flex-wrap gap-2">
            {clusters.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#333] text-[12.5px] text-[#A3A3A3] hover:border-[#B8962E] hover:text-[#B8962E] transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service clusters */}
      <div className="bg-white">
        {clusters.map((cluster, idx) => {
          const Icon = cluster.icon
          return (
            <section
              key={cluster.id}
              id={cluster.id}
              className={`py-16 md:py-20 ${idx % 2 === 1 ? "bg-[#F7F6F3]" : "bg-white"} border-b border-[#E2DFD8]`}
            >
              <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
                {/* Cluster header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-10 h-10 rounded-md bg-[#0D0D0D] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <div>
                    <SectionLabel>{cluster.label}</SectionLabel>
                    <p className="text-[14px] text-[#737373] mt-1">{cluster.tagline}</p>
                  </div>
                </div>

                {/* Hub link (flagship) */}
                <Link
                  href={cluster.hub.href}
                  className="group flex items-center justify-between p-5 bg-[#0D0D0D] rounded-lg mb-4 hover:bg-[#1a1a1a] transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#B8962E] mb-1 block">Hub page</span>
                    <span className="text-[16px] font-semibold text-white">{cluster.hub.label}</span>
                  </div>
                  <ArrowRight size={18} className="text-[#B8962E] group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Spoke pages grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {cluster.pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group flex items-center justify-between px-4 py-3 bg-white border border-[#E2DFD8] rounded-md hover:border-[#B8962E] hover:bg-[#FDFBF7] transition-colors"
                    >
                      <span className="text-[13.5px] text-[#3D3D3D] group-hover:text-[#0D0D0D] transition-colors">
                        {page.label}
                      </span>
                      <ArrowRight size={13} className="text-[#A3A3A3] group-hover:text-[#B8962E] shrink-0 ml-2 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="py-16 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] tracking-tight mb-3">
            Not sure which service fits your needs?
          </h2>
          <p className="text-[15px] text-[#737373] mb-7">Our logistics specialists will help you build the right solution.</p>
          <Link href="/quote" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D0D0D] text-white text-[14px] font-medium rounded-md hover:bg-[#1a1a1a] transition-colors">
            Talk to a Specialist <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
