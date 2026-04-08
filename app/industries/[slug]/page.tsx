import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle, ArrowLeft, AlertCircle } from "lucide-react"
import { industries, getIndustry } from "@/lib/industries"
import SectionLabel from "@/components/ui/SectionLabel"

export async function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return { title: "Not Found" }
  return { title: industry.title, description: industry.description }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <Link href="/industries" className="inline-flex items-center gap-1.5 text-[13px] text-[#737373] hover:text-white transition-colors mb-8">
            <ArrowLeft size={13} /> All Industries
          </Link>
          <SectionLabel light>Industry Solution</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-4 max-w-[600px]">
            {industry.title}
          </h1>
          <p className="text-[16px] text-[#B8962E] font-medium mb-5">{industry.tagline}</p>
          <p className="text-[15px] text-[#A3A3A3] max-w-[560px] leading-relaxed mb-10">
            {industry.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-8 border-t border-[#1f1f1f]">
            {industry.stats.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-white tracking-tight">{s.value}</div>
                <div className="text-[12px] text-[#737373] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mb-8">
                What {industry.title} logistics demands
              </h2>
              <div className="space-y-6">
                {industry.challenges.map(c => (
                  <div key={c.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-md bg-[#F7F6F3] flex items-center justify-center shrink-0 mt-0.5">
                      <AlertCircle size={16} className="text-[#B8962E]" />
                    </div>
                    <div>
                      <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-1">{c.title}</h3>
                      <p className="text-[13.5px] text-[#737373] leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Our Solutions</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mb-8">
                How we solve it
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                {industry.longDescription}
              </p>
              <div className="space-y-2.5">
                {industry.solutions.map(s => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-[#B8962E] shrink-0" />
                    <span className="text-[14px] text-[#3D3D3D]">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
              Ready to optimize your {industry.title} logistics?
            </h2>
            <p className="text-[14px] text-[#737373]">Speak with an industry specialist today.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8962E] text-white text-[13.5px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
              Get a Quote <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-white text-[13.5px] font-medium rounded-md hover:bg-[#111] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
