import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code2, Handshake, TrendingUp } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Partners & Integrations",
  description: "Delivery Group's partner ecosystem includes technology platforms, e-commerce providers, and logistics integrators.",
}

const partnerTypes = [
  { icon: Code2, title: "Technology Partners", body: "E-commerce platforms, WMS providers, and logistics technology companies with certified native integrations.", partners: ["Shopify", "Magento", "WooCommerce", "BigCommerce", "NetSuite", "SAP", "Salesforce", "Oracle"] },
  { icon: Handshake, title: "Carrier Partners", body: "A vetted network of regional and national carriers providing coverage across all 50 states.", partners: ["Regional carriers", "National fleets", "Last-mile specialists", "DHL direct integration"] },
  { icon: TrendingUp, title: "Agency & Consultant Partners", body: "Logistics consultants and supply chain advisors who recommend Delivery Group to their enterprise clients.", partners: [] },
]

export default function PartnersPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Partner Ecosystem</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[520px]">
            Built to work with<br />
            <span className="gold-text">your existing stack.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[500px] leading-relaxed">
            We integrate natively with 200+ platforms and maintain a growing ecosystem of technology, carrier, and advisory partners.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map(pt => {
              const Icon = pt.icon
              return (
                <div key={pt.title} className="p-8 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8]">
                  <Icon size={20} className="text-[#B8962E] mb-4" />
                  <h3 className="text-[16px] font-semibold text-[#0D0D0D] mb-2">{pt.title}</h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed mb-5">{pt.body}</p>
                  {pt.partners.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {pt.partners.map(p => (
                        <span key={p} className="px-3 py-1.5 bg-white border border-[#E2DFD8] rounded text-[12px] font-medium text-[#3D3D3D]">{p}</span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F7F6F3] border-y border-[#E2DFD8]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight mb-3">Interested in becoming a partner?</h2>
          <p className="text-[15px] text-[#737373] mb-7 max-w-[420px] mx-auto">We partner with technology providers, logistics consultants, and solution integrators.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0D0D] text-white text-[13.5px] font-medium rounded-md hover:bg-[#1a1a1a] transition-colors">
            Partner with Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
