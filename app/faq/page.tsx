import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description: "Answers to common questions about Delivery Group's services, pricing, integrations, and operations.",
  alternates: { canonical: "https://deliverygroupinc.com/faq" },
}

const faqs = [
  {
    category: "Getting Started",
    items: [
      { q: "How quickly can we go live with Delivery Group?", a: "Most clients are operational within 5–10 business days. Technology integrations via our API platform typically deploy in 24–48 hours. We assign a dedicated implementation specialist to every new client to ensure a smooth launch." },
      { q: "Is there a minimum volume requirement?", a: "We work with businesses ranging from 500 to 500,000+ monthly shipments. There is no rigid minimum, though our solutions are designed to deliver the most value at volumes of 1,000+ shipments per month." },
      { q: "Do you require long-term contracts?", a: "We offer both contract and flexible arrangements. Most enterprise clients prefer annual contracts that provide rate certainty and dedicated capacity. We also offer month-to-month arrangements for clients who need flexibility." },
      { q: "How is pricing structured?", a: "Pricing is based on service type, volume, delivery zones, and service level requirements. We provide all-inclusive, transparent per-shipment pricing with no hidden fees, surcharges, or surprises on invoices." },
    ],
  },
  {
    category: "Services & Operations",
    items: [
      { q: "What is your service area?", a: "We operate in all 50 states plus over 100 additional countries. Our DHL direct-inject integration from Northern Kentucky reaches 60%+ of the US population within 1–2 day ground transit." },
      { q: "What is your average on-time delivery rate?", a: "Our network-wide on-time delivery rate is 99.4%, sustained across all delivery modalities. Service-level guarantees are available for enterprise clients with financial penalties for performance failures." },
      { q: "How do you handle failed delivery attempts?", a: "Our technology platform automatically re-routes failed attempts to the optimal next window. We proactively notify recipients and provide self-service rescheduling. Our first-attempt success rate for scheduled deliveries is 97%." },
      { q: "How does your DHL integration work?", a: "We direct-inject packages into DHL's CVG Super Hub — one of only 3 in the world — located just 5 miles from our facility. Daily pickups ensure your packages enter the DHL network at the earliest possible point, resulting in faster transit times and lower shipping costs." },
    ],
  },
  {
    category: "Technology & Integration",
    items: [
      { q: "What e-commerce platforms do you integrate with?", a: "We have native integrations with 200+ platforms including Shopify, Magento, WooCommerce, BigCommerce, NetSuite, SAP, Salesforce, and all major ERPs. Custom integrations are available via our REST API." },
      { q: "How does your tracking and visibility platform work?", a: "Our real-time dashboard provides end-to-end shipment visibility with GPS tracking, delivery status updates, exception alerts, and performance reporting. Customers receive automated branded notifications via SMS and email." },
      { q: "Can we use your API to build custom integrations?", a: "Yes. Our enterprise-grade REST API supports label generation, shipment creation, tracking, and reporting. Developer documentation is available, and our technical team provides integration support." },
      { q: "What data and reporting do you provide?", a: "Clients receive access to a full analytics dashboard with on-time performance, delivery success rates, exception analysis, cost reporting, and trend data. Custom reporting is available for enterprise accounts." },
    ],
  },
  {
    category: "Specialized Services",
    items: [
      { q: "What does your Amazon FBA Prep service include?", a: "Our FBA Prep service includes receiving, inspection, labeling (FNSKU/suffocation), poly bagging, bundling, kitting, and shipping plan creation. We operate a 75,000 sq ft facility just 5 miles from Amazon's CVG Air Hub with under 48-hour turnaround." },
      { q: "Do you handle supplement and nutraceutical fulfillment?", a: "Yes. We provide lot-tracked, expiration-managed fulfillment for supplement brands with FEFO inventory rotation, FDA-compliant storage, and subscription order automation. We serve DTC, Amazon, and wholesale channels." },
      { q: "Can you manage our returns process?", a: "Yes. We offer comprehensive reverse logistics including consumer-facing returns portals, return label generation, pickup scheduling, and returned goods processing and reporting." },
      { q: "What is your turnaround time for FBA prep?", a: "We guarantee under 48-hour turnaround from receipt to out the door. Our proximity to Amazon's CVG Air Hub means your inventory reaches Amazon fulfillment centers faster than nearly any other prep center in the country." },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>FAQ</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5">
            Frequently asked questions.
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[480px] leading-relaxed">
            Answers to the questions we hear most from prospective clients. Can't find what you're looking for? Contact our team.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="space-y-14">
            {faqs.map(section => (
              <div key={section.category}>
                <SectionLabel>{section.category}</SectionLabel>
                <div className="divide-y divide-[#E2DFD8] mt-4">
                  {section.items.map(item => (
                    <div key={item.q} className="py-6">
                      <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-3">{item.q}</h3>
                      <p className="text-[14px] text-[#737373] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] text-center">
            <h3 className="text-[17px] font-semibold text-[#0D0D0D] mb-2">Still have questions?</h3>
            <p className="text-[14px] text-[#737373] mb-6">Our team is available Monday–Friday, 7AM–7PM EST.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0D0D0D] text-white text-[13.5px] font-medium rounded-md hover:bg-[#1a1a1a] transition-colors">
                Contact Us <ArrowRight size={14} />
              </Link>
              <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#E2DFD8] text-[#0D0D0D] text-[13.5px] font-medium rounded-md hover:bg-white transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
