import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Heart, Store, Pill } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Industries",
  description: "Vertical-specific logistics solutions for e-commerce, healthcare, retail, and supplements & nutraceuticals.",
  alternates: { canonical: "https://deliverygroupinc.com/industries" },
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShoppingCart, Heart, Store, Pill
}

const industries = [
  { slug: "ecommerce", icon: "ShoppingCart", title: "E-Commerce", tagline: "Built for the velocity of modern e-commerce.", body: "Platform integrations, automated fulfillment, and carrier rate shopping built for D2C brands and marketplace sellers." },
  { slug: "healthcare", icon: "Heart", title: "Healthcare", tagline: "Where precision delivery protects lives.", body: "HIPAA-compliant delivery for pharmaceuticals, medical devices, and healthcare providers with full chain-of-custody documentation." },
  { slug: "retail", icon: "Store", title: "Retail", tagline: "Omnichannel fulfillment for the modern retailer.", body: "Store replenishment, ship-from-store, and BOPIS fulfillment for omnichannel retail operations." },
  { slug: "supplements", icon: "Pill", title: "Supplements & Nutraceuticals", tagline: "Precision fulfillment for the OTD supplements market.", body: "Lot-tracked, expiration-managed fulfillment for supplement brands selling DTC, on Amazon, and through wholesale channels." },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Vertical Expertise</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[560px]">
            Purpose-built for<br />
            <span className="gold-text">every sector.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[520px] leading-relaxed">
            Generic logistics can't serve specialized industries. We've invested in building vertical-specific expertise, compliance frameworks, and operational protocols for the sectors that demand the most.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon]
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group p-8 bg-[#F7F6F3] rounded-lg hover:bg-[#0D0D0D] transition-all duration-300 flex flex-col border border-transparent hover:border-[#2a2a2a]"
                >
                  <div className="w-10 h-10 rounded-md bg-white group-hover:bg-[#1a1a1a] border border-[#E2DFD8] group-hover:border-[#333] flex items-center justify-center mb-5 transition-colors">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <h2 className="text-[16px] font-semibold text-[#0D0D0D] group-hover:text-white mb-1.5 transition-colors">
                    {ind.title}
                  </h2>
                  <p className="text-[12.5px] font-medium text-[#B8962E] mb-3">{ind.tagline}</p>
                  <p className="text-[13px] text-[#737373] group-hover:text-[#A3A3A3] leading-relaxed flex-1 transition-colors">
                    {ind.body}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-[12.5px] font-medium text-[#B8962E] group-hover:text-[#D4AF37]">
                    View solutions <ArrowRight size={12} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
