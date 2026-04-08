import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageSquare, Settings, Warehouse, Truck, CheckCircle } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "How It Works — Getting Started with DeliveryGroup",
  description: "Go from first call to first shipment in 5-10 business days. See how our simple onboarding process works for FBA prep and 3PL fulfillment.",
  alternates: { canonical: "https://www.deliverygroupinc.com/how-it-works" },
  keywords: ["3pl onboarding", "fulfillment setup", "how 3pl works", "fba prep process", "ecommerce fulfillment setup"],
}

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us About Your Business",
    body: "Fill out a quote form or give us a call. We will learn about your products, order volume, selling platforms, and specific requirements. This conversation usually takes about 15 minutes and gives us everything we need to build your custom proposal.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Custom Proposal & Integration",
    body: "We deliver a tailored proposal within 24 hours. Once you approve, our tech team sets up your platform integrations in 24 to 48 hours. Shopify, Amazon, WooCommerce, BigCommerce, and 200+ other platforms connect automatically through our API.",
  },
  {
    icon: Warehouse,
    number: "03",
    title: "Send Us Your Inventory",
    body: "Ship your products to our 75,000 square foot facility in Northern Kentucky. We receive, inspect, catalog, and organize everything by SKU. Your inventory is barcoded and stored in our climate-controlled warehouse, ready to ship the moment an order comes in.",
  },
  {
    icon: Truck,
    number: "04",
    title: "We Pick, Pack & Ship",
    body: "Orders flow into our system automatically from your selling platforms. We pick the items, pack them in your packaging, and ship using our discounted DHL rates. Tracking numbers sync back to your store in real time. You focus on growing your business while we handle the logistics.",
  },
]

const timeline = [
  { day: "Day 1–2", label: "Discovery call + custom proposal", detail: "We learn your business and deliver a tailored pricing proposal within 24 hours." },
  { day: "Day 2–4", label: "Platform integration & API setup", detail: "Our tech team connects your selling platforms and configures order routing." },
  { day: "Day 4–7", label: "Inventory receiving & cataloging", detail: "We receive your products, barcode them, and organize them in our warehouse." },
  { day: "Day 7–10", label: "First orders fulfilled", detail: "Orders start flowing and shipping. Your dedicated account manager monitors everything." },
]

const includes = [
  "Dedicated implementation specialist",
  "Platform integration (200+ supported)",
  "SKU mapping & inventory setup",
  "Custom packaging configuration",
  "Test order verification",
  "Go-live support & monitoring",
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Getting Started</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-6 max-w-[600px]">
            From first call to first shipment —{" "}
            <span className="gold-text">in days, not months.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[520px] leading-relaxed">
            Our onboarding process is designed to be fast and painless. Most clients are fully operational within 5 to 10 business days.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Four steps. That's it.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.number} className="relative p-8 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center border border-[#E2DFD8]">
                      <Icon size={18} className="text-[#B8962E]" />
                    </div>
                    <span className="text-[28px] font-semibold text-[#E2DFD8] tracking-tight">{s.number}</span>
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#0D0D0D] mb-3">{s.title}</h3>
                  <p className="text-[14px] text-[#737373] leading-relaxed">{s.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Onboarding Timeline */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <SectionLabel>Onboarding Timeline</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Go live in 5–10 business days.
            </h2>
          </div>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={t.day} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-10 rounded-full bg-white border-2 border-[#B8962E] flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-semibold text-[#B8962E]">{t.day}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-[#E2DFD8] mt-2" />}
                </div>
                <div className="pt-1.5 pb-2">
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-1">{t.label}</h3>
                  <p className="text-[14px] text-[#737373] leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[#A3A3A3] mt-8 text-center italic">
            Enterprise clients with complex integrations may require additional time. Your dedicated implementation specialist manages the entire process.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <SectionLabel>What's Included</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Everything you need to launch.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[960px] mx-auto">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8]">
                <CheckCircle size={16} className="text-[#B8962E] shrink-0 mt-0.5" />
                <span className="text-[14px] text-[#3D3D3D]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[420px] mx-auto">
            Tell us about your business and we will have a custom proposal in your inbox within 24 hours.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
            Get a Quote <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
