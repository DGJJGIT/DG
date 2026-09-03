import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Globe, Award, TrendingUp, CheckCircle, Shield } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "About Us",
  description: "Delivery Group Inc. is a premium last-mile delivery and logistics company built on precision, technology, and a commitment to the customer experience.",
  alternates: { canonical: "https://deliverygroupinc.com/about" },
  openGraph: {
    title: "About Us | Delivery Group Inc.",
    description: "Delivery Group Inc. is a premium last-mile delivery and logistics company built on precision, technology, and a commitment to the customer experience.",
    images: [{ url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630 }],
  },
}

const timeline = [
  { year: "2020", event: "Founded in Florence, KY with a singular focus on premium last-mile delivery and logistics excellence." },
  { year: "2021", event: "Expanded operations to cover all 50 states. Launched proprietary route optimization platform." },
  { year: "2022", event: "Opened 75,000 sq ft facility near Amazon's CVG Air Hub. Launched Amazon FBA Prep services." },
  { year: "2023", event: "Surpassed 2 million monthly deliveries. Expanded to over 100 international destinations." },
  { year: "2024", event: "Recognized as a top last-mile provider. Launched DHL direct-inject integration from NKY facility." },
  { year: "2025", event: "Continuing expansion with investment in fleet infrastructure and AI-powered logistics technology." },
]

const values = [
  { icon: Shield, title: "Integrity", body: "We do what we say we will do. If something goes wrong, we own it, fix it, and communicate transparently." },
  { icon: TrendingUp, title: "Excellence", body: "We hold ourselves to a higher standard in every delivery, every conversation, and every relationship." },
  { icon: Users, title: "Partnership", body: "We succeed when our clients succeed. Our incentives are aligned with your outcomes, not just our metrics." },
  { icon: Globe, title: "Innovation", body: "We invest continuously in the technology and processes that improve performance and expand what's possible." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Our Story</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-6 max-w-[560px]">
            Built to deliver.<br />
            <span className="gold-text">Built to last.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[540px] leading-relaxed">
            Founded in 2020 with a simple conviction: logistics could be both operationally excellent and genuinely service-oriented. Five years later, we've proven it at scale.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-5">
                Elevating the standard of what logistics can be.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-5">
                We believe that logistics is not a commodity. The way a package is delivered is a brand statement. The moment a customer receives an order is a brand moment. We exist to make that moment exceptional.
              </p>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                Our mission is to be the most trusted delivery partner in North America — trusted by clients for our reliability, trusted by recipients for our professionalism, and trusted by our team for our culture.
              </p>
              <div className="space-y-3">
                {["99.4% on-time delivery performance", "Industry-leading NPS of 72", "Zero-compromise service level guarantees", "Named account management for every client"].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#B8962E] shrink-0" />
                    <span className="text-[14px] text-[#3D3D3D]">{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full h-[240px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&h=480&q=80"
                  alt="Delivery Group Inc. warehouse and fulfillment operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2M+", label: "Monthly Deliveries", sub: "And growing" },
                  { value: "99.4%", label: "On-Time Rate", sub: "Industry-leading" },
                  { value: "1,200+", label: "Team Members", sub: "Nationwide" },
                  { value: "5yr", label: "Experience", sub: "Founded 2020" },
                ].map(s => (
                  <div key={s.label} className="p-6 bg-[#F7F6F3] rounded-lg">
                    <div className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">{s.value}</div>
                    <div className="text-[13px] font-medium text-[#0D0D0D] mt-1">{s.label}</div>
                    <div className="text-[12px] text-[#B8962E] mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              The principles behind every delivery.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white p-7 rounded-lg border border-[#E2DFD8]">
                  <div className="w-9 h-9 rounded-md bg-[#F7F6F3] flex items-center justify-center mb-4">
                    <Icon size={17} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">{v.title}</h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>Our Journey</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
                Five years of rapid growth.
              </h2>
            </div>
            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#F7F6F3] border-2 border-[#E2DFD8] flex items-center justify-center shrink-0 text-[11px] font-semibold text-[#B8962E]">
                      {t.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-[#E2DFD8] mt-2" />}
                  </div>
                  <div className="pt-2 pb-2">
                    <div className="text-[12.5px] font-semibold text-[#B8962E] mb-1">{t.year}</div>
                    <p className="text-[14px] text-[#3D3D3D] leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Join the Delivery Group team.
          </h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[420px] mx-auto">
            We're building the future of logistics. See open positions across operations, technology, and sales.
          </p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
            View Careers <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
