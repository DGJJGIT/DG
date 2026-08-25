import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Package, RefreshCw, Globe, Zap, BarChart3, Settings, Warehouse, Shirt, Pill, Gift, Box, ShieldCheck, Sparkles } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Solutions",
  description: "End-to-end logistics solutions for e-commerce fulfillment, omnichannel retail, returns management, and enterprise supply chain operations.",
  alternates: { canonical: "https://deliverygroupinc.com/solutions" },
}

const solutions = [
  { icon: Warehouse, title: "3PL Fulfillment", body: "Full-service pick, pack, and ship with direct DHL partnership. Faster transit times and lower shipping costs from our NKY warehouse.", href: "/3pl-fulfillment" },
  { icon: Package, title: "E-Commerce Fulfillment", body: "End-to-end fulfillment from warehouse to doorstep with platform integrations, automated workflows, and branded delivery communications.", href: "/industries/ecommerce" },
  { icon: RefreshCw, title: "Reverse Logistics", body: "Consumer returns portal, label generation, pickup scheduling, and returned goods processing — turning returns into a retention tool.", href: "/services" },
  { icon: Globe, title: "Omnichannel Distribution", body: "Unified logistics across DTC, marketplace, and brick-and-mortar channels, with inventory visibility and flexible fulfillment routing.", href: "/industries/retail" },
  { icon: Zap, title: "Expedited Shipping", body: "DHL direct-inject from our NKY facility — faster transit times and lower zoned pricing for brands that need speed.", href: "/services/expedited-shipping" },
  { icon: BarChart3, title: "Supply Chain Analytics", body: "Delivery performance intelligence, cost analysis, and operational benchmarking to continuously optimize your logistics investment.", href: "/technology" },
  { icon: Settings, title: "Managed Logistics", body: "Fully outsourced logistics management with a dedicated team, comprehensive reporting, and continuous process optimization.", href: "/contact" },
]

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>How We Help</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[520px]">
            Solutions built for<br />
            <span className="gold-text">real business problems.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[500px] leading-relaxed">
            We don't sell logistics services. We solve logistics problems. Our solutions are purpose-built for the operational challenges your business actually faces.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(s => {
              const Icon = s.icon
              return (
                <div key={s.title} className="p-8 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8] flex flex-col">
                  <div className="w-10 h-10 rounded-md bg-white border border-[#E2DFD8] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#0D0D0D] mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed flex-1 mb-5">{s.body}</p>
                  <Link href={s.href} className="flex items-center gap-1 text-[13px] font-medium text-[#B8962E] hover:text-[#0D0D0D] transition-colors">
                    Learn more <ArrowRight size={12} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions by Product Type */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <SectionLabel>By Product Type</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Fulfillment tailored to your products.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {([
              { icon: Shirt, name: "Apparel & Fashion", slug: "apparel", desc: "Poly bagging, tissue wrapping, hanger storage, and high return rate management." },
              { icon: Pill, name: "Supplements & Nutraceuticals", slug: "supplements", desc: "Lot tracking, FEFO rotation, expiration management, and FDA-compliant storage." },
              { icon: Gift, name: "Subscription Boxes", slug: "subscription-boxes", desc: "Kitting, assembly, custom packaging, and recurring order automation." },
              { icon: Box, name: "Oversized & Heavy Items", slug: "oversized", desc: "Freight shipping, pallet storage, liftgate delivery, and special handling." },
              { icon: ShieldCheck, name: "Fragile & High-Value", slug: "fragile", desc: "Custom protective packaging, inspection protocols, and photo documentation." },
              { icon: Sparkles, name: "Beauty & Cosmetics", slug: "beauty-cosmetics", desc: "Lot tracking, sample inserts, gift packaging, and influencer kit assembly." },
            ]).map(pt => {
              const Icon = pt.icon
              return (
                <Link key={pt.slug} href={`/solutions/${pt.slug}`} className="group p-7 bg-white rounded-lg border border-[#E2DFD8] hover:border-[#B8962E] transition-all">
                  <div className="w-10 h-10 rounded-md bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center mb-4 group-hover:border-[#B8962E] transition-colors">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2 group-hover:text-[#B8962E] transition-colors">{pt.name}</h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed mb-4">{pt.desc}</p>
                  <span className="flex items-center gap-1 text-[12.5px] font-medium text-[#B8962E]">
                    Learn more <ArrowRight size={11} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Not seeing your use case?</h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[440px] mx-auto">We build custom logistics programs for complex operational requirements. Let's talk.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
