import { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import QuoteForm from "@/components/QuoteForm"

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a custom logistics proposal from Delivery Group. Share your requirements and receive a tailored quote within 24 hours.",
  alternates: { canonical: "https://www.deliverygroupinc.com/quote" },
}

const includes = [
  "Custom service level proposal tailored to your volume and requirements",
  "Transparent, all-inclusive pricing with no hidden fees",
  "Integration assessment for your existing technology stack",
  "Dedicated account manager assignment from day one",
  "Response within 1 business day",
]

export default function QuotePage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Custom Proposal</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[520px]">
            Get a quote built for your operation.
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[480px] leading-relaxed">
            Share your requirements and we'll deliver a tailored proposal within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight mb-8">Tell us about your needs</h2>
              <QuoteForm />
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#F7F6F3] rounded-lg p-7 border border-[#E2DFD8] sticky top-24">
                <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-5">Your proposal includes:</h3>
                <div className="space-y-4">
                  {includes.map(i => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle size={15} className="text-[#B8962E] shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-[#3D3D3D] leading-relaxed">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t border-[#E2DFD8]">
                  <div className="text-[12px] text-[#737373] font-medium uppercase tracking-wide mb-1">Response Time</div>
                  <div className="text-[22px] font-semibold text-[#0D0D0D]">&lt; 24 Hours</div>
                  <div className="text-[13px] text-[#737373] mt-0.5">Business days, Mon–Fri</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
