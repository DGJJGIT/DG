import { Metadata } from "next"
export const metadata: Metadata = { title: "Terms of Service", description: "Delivery Group Inc. Terms of Service." }
export default function TermsPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-16"><div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12"><h1 className="text-3xl font-semibold text-white tracking-tight">Terms of Service</h1><p className="text-[#737373] mt-2">Last updated: January 1, 2025</p></div></section>
      <section className="py-16 bg-white"><div className="max-w-[800px] mx-auto px-6 md:px-10 space-y-8">
        {["Acceptance of Terms","Services","Payment Terms","Liability Limitations","Dispute Resolution","Governing Law"].map(h=>(
          <div key={h}><h2 className="text-[18px] font-semibold text-[#0D0D0D] mb-3">{h}</h2><p className="text-[14.5px] text-[#737373] leading-relaxed">This section governs {h.toLowerCase()} for users of Delivery Group Inc. services. For questions, contact legal@deliverygroupinc.com.</p></div>
        ))}
      </div></section>
    </>
  )
}
