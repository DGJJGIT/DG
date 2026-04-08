import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Delivery Group Inc. and help build the future of logistics. Open positions in operations, technology, sales, and more.",
  alternates: { canonical: "https://www.deliverygroupinc.com/careers" },
}

const perks = [
  { title: "Competitive Compensation", body: "Salary, equity participation, and performance bonuses tied to individual and company results." },
  { title: "Healthcare & Benefits", body: "Comprehensive medical, dental, and vision coverage for you and your family, fully company-funded." },
  { title: "Remote Flexibility", body: "Flexible remote and hybrid arrangements for roles where location independence is viable." },
  { title: "Career Growth", body: "Rapid organizational growth creates genuine advancement opportunities for high performers." },
  { title: "Retirement Plan", body: "401(k) with company match, helping you build long-term financial security." },
  { title: "Learning & Development", body: "Annual L&D budget for courses, certifications, and professional development of your choice." },
]

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Join Our Team</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[560px]">
            Build the future of<br />
            <span className="gold-text">last-mile logistics.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[520px] leading-relaxed">
            We're a fast-growing logistics company building the technology, operations, and team that will define how goods are delivered in the modern era. Come do the best work of your career.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-[640px]">
            <SectionLabel>Open Positions</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-5">We're always looking for great people.</h2>
            <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
              Delivery Group is growing fast and we're always interested in hearing from talented people in operations, technology, sales, and logistics. If you think you'd be a great fit, reach out to us.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
              Get in Touch <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <SectionLabel>Benefits</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1">Why people choose Delivery Group.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map(p => (
              <div key={p.title} className="bg-white p-6 rounded-lg border border-[#E2DFD8]">
                <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#737373] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
