import { Metadata } from "next"
import FbaSavingsCalculator from "@/components/FbaSavingsCalculator"
import SectionLabel from "@/components/ui/SectionLabel"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "FBA Savings Calculator — See What You'd Save with DeliveryGroup",
  description: "Calculate your real monthly FBA prep cost vs. DIY. DeliveryGroup charges $0.50/unit with no hidden fees. See your exact savings in 30 seconds.",
  alternates: { canonical: "https://deliverygroupinc.com/fba-savings-calculator" },
  openGraph: {
    title: "FBA Savings Calculator — DeliveryGroup",
    description: "Calculate your real monthly FBA prep cost vs. DIY.",
    images: [{ url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop"],
  },
}

export default function FbaSavingsCalculatorPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>FBA Prep Pricing</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-2xl">
            How much are you actually spending on FBA prep?
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[520px] leading-relaxed">
            DIY prep costs $1.20–$1.80 per unit in labor and materials — verified. DeliveryGroup charges $0.50/unit all-in. See the difference for your volume.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <FbaSavingsCalculator />
        </div>
      </section>

      {/* Supporting content */}
      <section className="py-16 bg-[#F7F6F3] border-t border-[#E2DFD8]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 space-y-10">

          <div>
            <SectionLabel>What's Included</SectionLabel>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mt-2 mb-4">Standard FBA prep at $0.50/unit</h2>
            <ul className="space-y-3 text-[14px] text-[#737373]">
              {[
                "Receiving and inspection",
                "FNSKU labeling (printed on-site, applied per Amazon requirements)",
                "Poly bagging with suffocation warnings where required",
                "Bundling and kitting per your shipment plan",
                "Shrink wrapping for eligible items",
                "Shipping plan creation and box content uploads",
                "Under 48-hour turnaround from receipt to out the door",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[#B8962E]/15 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8962E]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>Location Advantage</SectionLabel>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mt-2 mb-4">5 miles from Amazon's CVG Air Hub</h2>
            <p className="text-[14px] text-[#737373] leading-relaxed">
              Our 75,000 sq ft facility in Northern Kentucky sits 5 miles from Amazon's CVG Air Hub — the primary Amazon air cargo facility in the US. Inventory prepped at DeliveryGroup reaches Amazon fulfillment centers faster than prep centers located anywhere else in the country. Faster to Amazon means faster to your customer.
            </p>
          </div>

          <div className="bg-white border border-[#E2DFD8] rounded-xl p-7">
            <h3 className="text-[17px] font-semibold text-[#0D0D0D] mb-2">Ready for a real number?</h3>
            <p className="text-[14px] text-[#737373] mb-5">
              The calculator gives you a close estimate. For an exact quote based on your product mix, apparel or bulky requirements, or multi-channel setup — contact us.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0D0D0D] text-white text-[13.5px] font-medium rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              Get a custom quote <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
