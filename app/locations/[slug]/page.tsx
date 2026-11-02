import { Metadata } from "next"
import JsonLd from "@/components/JsonLd"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, MapPin, CheckCircle, ArrowLeft, Phone } from "lucide-react"
import { locations, getLocation } from "@/lib/locations"
import { clampMeta } from "@/lib/seo/meta"
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
    description: clampMeta(`Premium last-mile and logistics delivery services in ${loc.city}, ${loc.state}. ${loc.description}`),
    alternates: { canonical: `https://deliverygroupinc.com/locations/${slug}` },
  }
}

// City-center coordinates: "Nearby Markets" = the 3 closest listed cities by distance (any state).
// The old same-state + Census-region rotation listed cities up to 1,700 miles away (audit 2026-10-14).
const COORDS: Record<string, [number, number]> = {
  "new-york-ny": [40.7128, -74.006],
  "los-angeles-ca": [34.0522, -118.2437],
  "chicago-il": [41.8781, -87.6298],
  "houston-tx": [29.7604, -95.3698],
  "phoenix-az": [33.4484, -112.074],
  "philadelphia-pa": [39.9526, -75.1652],
  "san-antonio-tx": [29.4241, -98.4936],
  "san-diego-ca": [32.7157, -117.1611],
  "dallas-tx": [32.7767, -96.797],
  "san-jose-ca": [37.3382, -121.8863],
  "austin-tx": [30.2672, -97.7431],
  "jacksonville-fl": [30.3322, -81.6557],
  "fort-worth-tx": [32.7555, -97.3308],
  "columbus-oh": [39.9612, -82.9988],
  "charlotte-nc": [35.2271, -80.8431],
  "indianapolis-in": [39.7684, -86.1581],
  "san-francisco-ca": [37.7749, -122.4194],
  "seattle-wa": [47.6062, -122.3321],
  "denver-co": [39.7392, -104.9903],
  "washington-dc": [38.9072, -77.0369],
  "nashville-tn": [36.1627, -86.7816],
  "el-paso-tx": [31.7619, -106.485],
  "oklahoma-city-ok": [35.4676, -97.5164],
  "boston-ma": [42.3601, -71.0589],
  "portland-or": [45.5152, -122.6784],
  "las-vegas-nv": [36.1699, -115.1398],
  "memphis-tn": [35.1495, -90.049],
  "louisville-ky": [38.2527, -85.7585],
  "baltimore-md": [39.2904, -76.6122],
  "milwaukee-wi": [43.0389, -87.9065],
  "albuquerque-nm": [35.0844, -106.6504],
  "tucson-az": [32.2226, -110.9747],
  "fresno-ca": [36.7378, -119.7871],
  "sacramento-ca": [38.5816, -121.4944],
  "mesa-az": [33.4152, -111.8315],
  "omaha-ne": [41.2565, -95.9345],
  "atlanta-ga": [33.749, -84.388],
  "miami-fl": [25.7617, -80.1918],
  "minneapolis-mn": [44.9778, -93.265],
  "cleveland-oh": [41.4993, -81.6944],
  "tampa-fl": [27.9506, -82.4572],
  "pittsburgh-pa": [40.4406, -79.9959],
  "raleigh-nc": [35.7796, -78.6382],
  "cincinnati-oh": [39.1031, -84.512],
  "kansas-city-mo": [39.0997, -94.5786],
  "st-louis-mo": [38.627, -90.1994],
  "salt-lake-city-ut": [40.7608, -111.891],
}
function milesBetween(a: [number, number], b: [number, number]): number {
  const r = (d: number) => (d * Math.PI) / 180
  const h = Math.sin(r(b[0] - a[0]) / 2) ** 2 + Math.cos(r(a[0])) * Math.cos(r(b[0])) * Math.sin(r(b[1] - a[1]) / 2) ** 2
  return 3959 * 2 * Math.asin(Math.sqrt(h))
}

// US Census Bureau regions, fallback for a city without coordinates
const REGION: Record<string, string> = {
  CT: "Northeast", ME: "Northeast", MA: "Northeast", NH: "Northeast", RI: "Northeast", VT: "Northeast", NJ: "Northeast", NY: "Northeast", PA: "Northeast",
  IL: "Midwest", IN: "Midwest", MI: "Midwest", OH: "Midwest", WI: "Midwest", IA: "Midwest", KS: "Midwest", MN: "Midwest", MO: "Midwest", NE: "Midwest", ND: "Midwest", SD: "Midwest",
  DE: "South", DC: "South", FL: "South", GA: "South", MD: "South", NC: "South", SC: "South", VA: "South", WV: "South", AL: "South", KY: "South", MS: "South", TN: "South", AR: "South", LA: "South", OK: "South", TX: "South",
  AZ: "West", CO: "West", ID: "West", MT: "West", NV: "West", NM: "West", UT: "West", WY: "West", AK: "West", CA: "West", HI: "West", OR: "West", WA: "West",
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  // Same-state markets first; cities alone in their state are filled from the same US Census region,
  // rotated from this city's position so every location page gets inbound links from its neighbors.
  const sameState = locations.filter(l => l.stateAbbr === loc.stateAbbr && l.slug !== loc.slug)
  const idx = locations.findIndex(l => l.slug === loc.slug)
  const rotated = [...locations.slice(idx + 1), ...locations.slice(0, idx)]
  const regional = rotated.filter(l => l.stateAbbr !== loc.stateAbbr && REGION[l.stateAbbr] && REGION[l.stateAbbr] === REGION[loc.stateAbbr])
  const here = COORDS[loc.slug]
  const nearby = here
    ? locations.filter(l => l.slug !== loc.slug && COORDS[l.slug])
        .sort((a, b) => milesBetween(here, COORDS[a.slug]) - milesBetween(here, COORDS[b.slug])).slice(0, 3)
    : [...sameState, ...regional].slice(0, 3)

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
