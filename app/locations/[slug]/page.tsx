import { Metadata } from "next"
import JsonLd from "@/components/JsonLd"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, MapPin, CheckCircle, ArrowLeft, Phone } from "lucide-react"
import { locations, getLocation } from "@/lib/locations"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"

export async function generateStaticParams() {
  return locations.map(l => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return { title: "Not Found" }
  return {
    title: `Delivery Services in ${loc.city}, ${loc.stateAbbr}`,
    description: `Premium last-mile and logistics delivery services in ${loc.city}, ${loc.state}. ${loc.description}`,
    alternates: { canonical: `https://deliverygroupinc.com/locations/${slug}` },
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  const nearby = locations.filter(l => l.stateAbbr === loc.stateAbbr && l.slug !== loc.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Delivery Services in ${loc.city}, ${loc.stateAbbr}`,
          serviceType: "last-mile delivery",
          provider: { "@type": "Organization", name: "Delivery Group Inc.", url: "https://deliverygroupinc.com" },
          areaServed: { "@type": "City", name: loc.city },
          url: `https://deliverygroupinc.com/locations/${slug}`,
        }}
      />
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <Link href="/locations" className="inline-flex items-center gap-1.5 text-[13px] text-[#737373] hover:text-white transition-colors mb-8">
            <ArrowLeft size={13} /> All Locations
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-[#B8962E]" />
            <span className="text-[13px] text-[#B8962E] font-medium">{loc.metro}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
            Delivery Services in<br />
            <span className="gold-text">{loc.city}, {loc.stateAbbr}</span>
          </h1>
          <p className="text-[15px] text-[#A3A3A3] max-w-[560px] leading-relaxed mb-10">
            {loc.description}
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1f1f1f] max-w-[400px]">
            {loc.stats.map(s => (
              <div key={s.label}>
                <div className="text-xl font-semibold text-white">{s.value}</div>
                <div className="text-[11.5px] text-[#737373] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Available Services</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mb-7">
                What we deliver in {loc.city}
              </h2>
              <div className="space-y-3">
                {loc.services.map(s => (
                  <div key={s} className="flex items-center gap-3 p-4 bg-[#F7F6F3] rounded-md border border-[#E2DFD8]">
                    <CheckCircle size={15} className="text-[#B8962E] shrink-0" />
                    <span className="text-[14px] font-medium text-[#0D0D0D]">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mb-5">
                Ready to deliver in {loc.city}?
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                Our {loc.city} operations team is ready to support your delivery requirements. Request a quote or speak with a local specialist to get started.
              </p>
              <div className="space-y-3">
                <Link href="/quote" className="flex items-center justify-between w-full px-5 py-4 bg-[#0D0D0D] text-white rounded-md hover:bg-[#1a1a1a] transition-colors">
                  <span className="text-[14px] font-medium">Request a Quote</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="tel:+18003702105" className="flex items-center justify-between w-full px-5 py-4 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md hover:border-[#B8962E] transition-colors">
                  <div>
                    <div className="text-[14px] font-medium text-[#0D0D0D]">Call Us</div>
                    <div className="text-[12.5px] text-[#737373]">1-800-370-2105</div>
                  </div>
                  <Phone size={16} className="text-[#B8962E]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="py-16 bg-[#F7F6F3] border-t border-[#E2DFD8]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-5">Nearby Markets</h3>
            <div className="flex flex-wrap gap-3">
              {nearby.map(n => (
                <Link key={n.slug} href={`/locations/${n.slug}`} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2DFD8] rounded-md text-[13.5px] font-medium text-[#0D0D0D] hover:border-[#B8962E] transition-colors">
                  <MapPin size={13} className="text-[#B8962E]" /> {n.city}, {n.stateAbbr}
                </Link>
              ))}
              <Link href="/locations" className="flex items-center gap-1.5 px-4 py-2.5 text-[13.5px] font-medium text-[#B8962E] hover:text-[#0D0D0D] transition-colors">
                View all locations <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
