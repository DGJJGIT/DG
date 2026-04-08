import { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { locations } from "@/lib/locations"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Delivery Locations — Markets We Serve",
  description: "Delivery Group operates in all 50 states plus over 100 additional countries. Find delivery services available in your city.",
}

export default function LocationsPage() {
  const byState = locations.reduce((acc, loc) => {
    const key = loc.state
    if (!acc[key]) acc[key] = []
    acc[key].push(loc)
    return acc
  }, {} as Record<string, typeof locations>)

  const stateKeys = Object.keys(byState).sort()

  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Coverage Map</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[520px]">
            Nationwide delivery.<br />
            <span className="gold-text">Local expertise.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[480px] leading-relaxed mb-8">
            Active operations in {locations.length}+ cities across all 50 states plus over 100 additional countries. Find the delivery services available in your market.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5 pt-8 border-t border-[#1f1f1f] max-w-[500px]">
            {[
              { value: "50", label: "States" },
              { value: `${locations.length}+`, label: "Cities" },
              { value: "100+", label: "Countries" },
              { value: "99.4%", label: "On-Time Rate" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-white">{s.value}</div>
                <div className="text-[12px] text-[#737373] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {locations.map(loc => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between p-5 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8] hover:border-[#B8962E] hover:bg-[#F5EDD4] transition-all"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-[#B8962E] shrink-0" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#0D0D0D]">{loc.city}</div>
                    <div className="text-[12px] text-[#737373]">{loc.stateAbbr}</div>
                  </div>
                </div>
                <ArrowRight size={14} className="text-[#C8C4BB] group-hover:text-[#B8962E] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
