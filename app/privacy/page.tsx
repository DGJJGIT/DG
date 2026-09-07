import { Metadata } from "next"
import SectionLabel from "@/components/ui/SectionLabel"
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Delivery Group Inc. collects, uses, and protects your personal information as a licensed logistics and fulfillment provider.",
  alternates: { canonical: "https://deliverygroupinc.com/privacy" },
}
export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-16"><div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12"><h1 className="text-3xl font-semibold text-white tracking-tight">Privacy Policy</h1><p className="text-[#737373] mt-2">Last updated: January 1, 2025</p></div></section>
      <section className="py-16 bg-white"><div className="max-w-[800px] mx-auto px-6 md:px-10 space-y-8">
        {["Information We Collect","How We Use Your Information","Information Sharing","Data Security","Your Rights","Contact Us"].map(h=>(
          <div key={h}><h2 className="text-[18px] font-semibold text-[#0D0D0D] mb-3">{h}</h2><p className="text-[14.5px] text-[#737373] leading-relaxed">This section describes our practices related to {h.toLowerCase()}. For questions, contact us at privacy@deliverygroupinc.com.</p></div>
        ))}
      </div></section>
    </>
  )
}
