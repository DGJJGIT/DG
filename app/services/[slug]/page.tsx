import { Metadata } from "next"
import JsonLd from "@/components/JsonLd"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react"
import { services, getService } from "@/lib/services"
import SectionLabel from "@/components/ui/SectionLabel"

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `https://deliverygroupinc.com/services/${slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.slug,
          provider: { "@type": "Organization", name: "Delivery Group Inc.", url: "https://deliverygroupinc.com" },
          areaServed: { "@type": "Country", name: "United States" },
          url: `https://deliverygroupinc.com/services/${slug}`,
        }}
      />
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] text-[#737373] hover:text-white transition-colors mb-8">
            <ArrowLeft size={13} /> All Services
          </Link>
          <SectionLabel light>Service</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-4 max-w-[600px]">
            {service.title}
          </h1>
          <p className="text-[16px] text-[#B8962E] font-medium mb-5">{service.tagline}</p>
          <p className="text-[15px] text-[#A3A3A3] max-w-[560px] leading-relaxed mb-10">
            {service.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#1f1f1f]">
            {service.stats.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-white tracking-tight">{s.value}</div>
                <div className="text-[12px] text-[#737373] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Overview</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mb-5">
                How it works
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <div className="space-y-2.5">
                {service.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-[#B8962E] shrink-0" />
                    <span className="text-[14px] text-[#3D3D3D]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Use Cases</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mb-5">
                Who relies on this service
              </h2>
              <div className="space-y-3 mb-10">
                {service.useCases.map(u => (
                  <div key={u} className="flex items-center gap-3 p-4 bg-[#F7F6F3] rounded-md border border-[#E2DFD8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B8962E] shrink-0" />
                    <span className="text-[14px] text-[#3D3D3D]">{u}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <SectionLabel>Key Benefits</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              What you gain
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.benefits.map(b => (
              <div key={b.title} className="bg-white p-7 rounded-lg border border-[#E2DFD8]">
                <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-2">{b.title}</h3>
                <p className="text-[13px] text-[#737373] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
              Ready to get started with {service.shortTitle}?
            </h2>
            <p className="text-[14px] text-[#737373]">Speak with a specialist and get a custom proposal within 24 hours.</p>
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
