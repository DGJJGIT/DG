import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { productTypes, getProductType } from "@/lib/product-types"
import SectionLabel from "@/components/ui/SectionLabel"

export async function generateStaticParams() {
  return productTypes.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pt = getProductType(slug)
  if (!pt) return { title: "Not Found" }
  return {
    title: `${pt.name} Fulfillment`,
    description: pt.description,
    alternates: { canonical: `https://www.deliverygroupinc.com/solutions/${slug}` },
  }
}

export default async function ProductTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pt = getProductType(slug)
  if (!pt) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Solutions</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-6 max-w-[600px]">
            <span className="gold-text">{pt.name}</span> Fulfillment
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[540px] leading-relaxed">
            {pt.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-10">
            What we deliver for {pt.name.toLowerCase()} brands.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pt.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 p-5 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8]">
                <CheckCircle size={16} className="text-[#B8962E] shrink-0 mt-0.5" />
                <span className="text-[14px] text-[#3D3D3D] leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="prose prose-dg max-w-none">
            {pt.body.split("\n\n").map((p, i) => (
              <p key={i} className="text-[15.5px] text-[#3D3D3D] leading-[1.8] mb-5">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-3 gap-6 max-w-[640px] mx-auto">
            {pt.stats.map((s) => (
              <div key={s.label} className="text-center p-6 bg-[#F7F6F3] rounded-lg">
                <div className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">{s.value}</div>
                <div className="text-[12px] text-[#B8962E] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Ready to simplify your {pt.name.toLowerCase()} fulfillment?
          </h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[420px] mx-auto">
            Get a custom proposal tailored to your products, volume, and requirements.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
            Get a Quote <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
