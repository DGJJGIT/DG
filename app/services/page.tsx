import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Package, Truck, Warehouse } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive delivery and logistics services including Amazon FBA prep, last-mile, and expedited shipping solutions nationwide.",
  alternates: { canonical: "https://deliverygroupinc.com/services" },
}

const services = [
  { slug: "../amazon-fba-prep", icon: Package, title: "Amazon FBA Prep", tagline: "The fastest, most cost-effective FBA prep in the country.", body: "75,000 sq ft facility just 5 miles from Amazon's $1.5B CVG Air Hub. Under 48-hour turnaround, 99.9% accuracy, and rates 30–50% below market.", stats: ["<48hr Turnaround", "99.9% Accuracy", "30-50% Savings"] },
  { slug: "../3pl-fulfillment", icon: Warehouse, title: "3PL Fulfillment", tagline: "Ship faster. Spend less. Scale without limits.", body: "Full-service 3PL with direct DHL partnership and a premier NKY shipping location. Your customers get orders 1–2 days faster and you pay less to ship them.", stats: ["DHL Partnership", "80%+ US in 2–3 Days", "99.5% Accuracy"] },
  { slug: "last-mile-delivery", icon: Package, title: "Last-Mile Delivery", tagline: "The final connection between your brand and your customer.", body: "Precision last-mile delivery engineered for reliability and a seamless recipient experience. Real-time tracking, route optimization, and proof of delivery across all 50 states.", stats: ["99.4% On-Time", "2M+ Monthly", "50 States"] },
  { slug: "expedited-shipping", icon: Truck, title: "Expedited Shipping", tagline: "Faster and cheaper from the center of it all.", body: "Direct inject into DHL's CVG Super Hub — one of only 3 worldwide — just 5 miles away. Central NKY location means lower zones and faster transit to more of the US.", stats: ["5mi to DHL Hub", "1 of 3 Worldwide", "60%+ US in 1–2 Days"] },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>What We Deliver</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[520px]">
            Every delivery modality.<br />
            <span className="gold-text">One trusted partner.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[520px] leading-relaxed">
            From Amazon FBA prep to expedited nationwide shipping, Delivery Group provides the full spectrum of delivery and logistics services under a single, accountable partner relationship.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group p-8 bg-[#F7F6F3] rounded-lg hover:bg-[#0D0D0D] transition-all duration-300 flex flex-col border border-transparent hover:border-[#2a2a2a]"
                >
                  <div className="w-10 h-10 rounded-md bg-white group-hover:bg-[#1a1a1a] border border-[#E2DFD8] group-hover:border-[#333] flex items-center justify-center mb-5 transition-colors">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <h2 className="text-[16px] font-semibold text-[#0D0D0D] group-hover:text-white mb-1.5 transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-[12.5px] font-medium text-[#B8962E] mb-3">{s.tagline}</p>
                  <p className="text-[13px] text-[#737373] group-hover:text-[#A3A3A3] leading-relaxed flex-1 transition-colors">
                    {s.body}
                  </p>
                  <div className="mt-6 pt-5 border-t border-[#E2DFD8] group-hover:border-[#2a2a2a] transition-colors">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.stats.map(stat => (
                        <span key={stat} className="text-[11px] font-medium px-2 py-1 bg-white group-hover:bg-[#1a1a1a] text-[#3D3D3D] group-hover:text-[#A3A3A3] rounded border border-[#E2DFD8] group-hover:border-[#333] transition-colors">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[12.5px] font-medium text-[#B8962E] group-hover:text-[#D4AF37]">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F7F6F3] border-y border-[#E2DFD8]">
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
