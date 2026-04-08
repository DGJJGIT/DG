import Link from "next/link"
import {
  ArrowRight, Package, Zap, Truck, Star, BarChart3, Warehouse,
  MapPin, Shield, Clock, CheckCircle, ChevronRight,
  Users, Globe, Award, TrendingUp
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"
import JsonLd from "@/components/JsonLd"

const stats = [
  { value: "2M+", label: "Monthly Deliveries" },
  { value: "99.4%", label: "On-Time Rate" },
  { value: "50", label: "States Served" },
  { value: "5yr", label: "Industry Experience" },
]

const services = [
  {
    icon: Package,
    title: "Amazon FBA Prep",
    body: "75,000 sq ft facility 5 miles from Amazon's CVG Air Hub. Under 48-hour turnaround with 99.9% accuracy.",
    href: "/amazon-fba-prep",
  },
  {
    icon: Warehouse,
    title: "3PL Fulfillment",
    body: "Full-service fulfillment with direct DHL partnership. Ship faster and spend less from our NKY location.",
    href: "/3pl-fulfillment",
  },
  {
    icon: Star,
    title: "Last-Mile Delivery",
    body: "The most critical leg of the supply chain, executed with precision and brand-level care.",
    href: "/services/last-mile-delivery",
  },
  {
    icon: Truck,
    title: "Expedited Shipping",
    body: "Direct inject into DHL's CVG Super Hub — 5 miles away. Central NKY location means faster, cheaper shipping nationwide.",
    href: "/services/expedited-shipping",
  },
]

const industries = [
  { label: "E-Commerce", href: "/industries/ecommerce" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Supplements", href: "/industries/supplements" },
]

const differentiators = [
  {
    icon: BarChart3,
    title: "Real-Time Intelligence",
    body: "End-to-end shipment visibility with live GPS tracking, proactive exception alerts, and performance dashboards.",
  },
  {
    icon: Shield,
    title: "Guaranteed SLAs",
    body: "Contractual service level commitments with financial accountability — not just best-effort promises.",
  },
  {
    icon: Clock,
    title: "7AM–7PM EST Support",
    body: "Dedicated operations support Monday through Friday, with exception management and escalation handling.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    body: "Consistent, premium delivery service across all 50 states plus over 100 additional countries.",
  },
  {
    icon: Users,
    title: "Dedicated Accounts",
    body: "A named account team for every client — not a call center queue.",
  },
  {
    icon: Award,
    title: "Proven at Scale",
    body: "Trusted by Fortune 500 companies and emerging brands alike to deliver at any volume.",
  },
]

const testimonials = [
  {
    quote: "Delivery Group transformed our last-mile operations. Our customer satisfaction scores increased 28% within the first quarter of partnership.",
    name: "Sarah Chen",
    title: "VP of Operations",
    company: "NovaBrand Commerce",
  },
  {
    quote: "The FBA prep service is exceptional. Our inventory gets to Amazon shelves faster than any provider we've used, and the accuracy rate is unmatched.",
    name: "Marcus Reid",
    title: "Director of Operations",
    company: "PeakBrand Commerce",
  },
  {
    quote: "The DHL direct-inject from their NKY facility cut our transit times by a full day and reduced shipping costs across the board. The ROI was immediate.",
    name: "Jennifer Kwon",
    title: "Chief Supply Chain Officer",
    company: "Velocity Retail Group",
  },
]

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Delivery Group Inc.",
          url: "https://www.deliverygroupinc.com",
          telephone: "+1-800-370-2105",
          email: "info@deliverygroupinc.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7587 Empire Dr",
            addressLocality: "Florence",
            addressRegion: "KY",
            postalCode: "41042",
            addressCountry: "US",
          },
          openingHours: "Mo-Fr 07:00-19:00",
          geo: {
            "@type": "GeoCoordinates",
            latitude: 38.9989,
            longitude: -84.6266,
          },
          areaServed: "US",
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "500",
          },
        }}
      />
      {/* ── Hero ── */}
      <section className="relative bg-[#0D0D0D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #B8962E 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-32 lg:py-40">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="gold-bar" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#B8962E]">
                Premium Logistics
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-semibold text-white leading-[1.1] tracking-[-0.03em] mb-6">
              Delivery that defines<br />
              <span className="gold-text">your brand.</span>
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#A3A3A3] leading-relaxed max-w-[520px] mb-10">
              Delivery Group provides Amazon FBA prep, last-mile, and expedited shipping solutions engineered for precision, scale, and a customer experience that reflects your standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
              >
                Get a Quote <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#333] text-white text-[14px] font-medium rounded-md hover:border-[#555] hover:bg-[#111] transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative border-t border-[#1a1a1a]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#1f1f1f]">
              {stats.map((s) => (
                <div key={s.label} className="md:px-8 first:pl-0 last:pr-0">
                  <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{s.value}</div>
                  <div className="text-[12.5px] text-[#737373] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D]">
                Every delivery modality.<br />One trusted partner.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#B8962E] hover:text-[#0D0D0D] transition-colors shrink-0">
              All Services <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group p-7 bg-[#F7F6F3] rounded-lg hover:bg-[#0D0D0D] transition-all duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-md bg-white group-hover:bg-[#1a1a1a] border border-[#E2DFD8] group-hover:border-[#2a2a2a] flex items-center justify-center mb-5 transition-colors">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] group-hover:text-white mb-2 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-[#737373] group-hover:text-[#A3A3A3] leading-relaxed flex-1 transition-colors">
                    {s.body}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-[12.5px] font-medium text-[#B8962E] group-hover:text-[#D4AF37]">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Industries Served</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-5">
                Purpose-built solutions for every sector.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-10 max-w-[480px]">
                Generic logistics doesn't serve specialized industries. We've built vertical-specific solutions for the sectors where precision, compliance, and speed matter most.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className="flex items-center gap-2.5 p-3.5 bg-white rounded-md border border-[#E2DFD8] hover:border-[#B8962E] hover:bg-[#F5EDD4] transition-all group"
                  >
                    <ChevronRight size={13} className="text-[#B8962E] shrink-0" />
                    <span className="text-[13.5px] font-medium text-[#0D0D0D]">{ind.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-[#0D0D0D] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: TrendingUp, label: "On-Time Rate", value: "99.4%" },
                      { icon: Globe, label: "States Served", value: "50" },
                      { icon: Package, label: "Monthly Volume", value: "2M+" },
                      { icon: Award, label: "NPS Score", value: "72" },
                    ].map((m) => {
                      const Icon = m.icon
                      return (
                        <div key={m.label} className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                          <Icon size={16} className="text-[#B8962E] mb-2" />
                          <div className="text-xl font-semibold text-white">{m.value}</div>
                          <div className="text-[11px] text-[#737373] mt-0.5">{m.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Delivery Group ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>Why Delivery Group</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              The standard that sets us apart.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => {
              const Icon = d.icon
              return (
                <div key={d.title} className="p-7 border border-[#E2DFD8] rounded-lg hover:border-[#C8C4BB] transition-colors">
                  <div className="w-9 h-9 rounded-md bg-[#F7F6F3] flex items-center justify-center mb-4">
                    <Icon size={17} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">{d.title}</h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed">{d.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>Client Voices</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              What our clients say.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-lg border border-[#E2DFD8] flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#B8962E] text-[#B8962E]" />
                  ))}
                </div>
                <p className="text-[14px] text-[#3D3D3D] leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-[13.5px] font-semibold text-[#0D0D0D]">{t.name}</div>
                  <div className="text-[12.5px] text-[#737373] mt-0.5">{t.title}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations CTA ── */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2DFD8]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#F7F6F3] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-[#B8962E]" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#0D0D0D] mb-1">Nationwide Coverage</h3>
                <p className="text-[13.5px] text-[#737373]">
                  Active delivery operations in all 50 states plus over 100 additional countries.
                </p>
              </div>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E2DFD8] text-[13.5px] font-medium text-[#0D0D0D] rounded-md hover:bg-[#F7F6F3] transition-colors shrink-0"
            >
              Find Your Market <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <SectionLabel light>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-1 mb-5">
            Ready to elevate your<br />delivery experience?
          </h2>
          <p className="text-[15px] text-[#737373] max-w-[480px] mx-auto mb-10">
            Speak with a logistics specialist to discuss your requirements and receive a custom solution proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
            >
              Request a Quote <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#333] text-white text-[14px] font-medium rounded-md hover:border-[#555] hover:bg-[#111] transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
