import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Package, MapPin, Clock, Shield, CheckCircle,
  Truck, Tag, DollarSign, Warehouse, Zap, Star,
  ShoppingCart, Shirt, Footprints, Box, Plus
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Amazon FBA Prep Services — 30-50% Below Market Rates",
  description:
    "Professional Amazon FBA prep services from our 75,000 sq ft Northern Kentucky facility — 5 miles from Amazon's CVG Air Hub. Under 48-hour turnaround, 99.9% accuracy, rates starting at $0.20/unit.",
  keywords: ["amazon fba prep", "fba prep service", "amazon prep center", "fba labeling", "fba poly bagging", "amazon cvg air hub"],
  alternates: { canonical: "https://deliverygroupinc.com/amazon-fba-prep" },
  openGraph: {
    title: "Amazon FBA Prep Services — 30-50% Below Market Rates",
    description: "Professional Amazon FBA prep services from our 75,000 sq ft Northern Kentucky facility — 5 miles from Amazon's CVG Air Hub. Under 48-hour turnaround, 99.9% accuracy, rates starting at $0.20/unit.",
    images: [{ url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630 }],
  },
}

/* ── Pricing Data ── */

const standardPricing = {
  intro: [
    { service: "FNSKU Labeling Only", dg: "$0.20/unit", market: "$0.50–$0.75" },
    { service: "Standard Prep (FNSKU + poly bag + inspection)", dg: "$0.50/unit", market: "$0.80–$1.25" },
    { service: "Bubble Wrap + FNSKU + Poly Bag", dg: "$0.75/unit", market: "$1.35–$2.00" },
    { service: "Bundling (2-pack, incl. FNSKU + poly bag)", dg: "$1.00/bundle", market: "$1.50–$2.50" },
    { service: "Each Additional Bundle Item", dg: "$0.20/item", market: "$0.40–$0.50" },
    { service: "Receiving", dg: "FREE", market: "$0.10–$0.25/unit" },
    { service: "Shipping Plan Creation", dg: "FREE", market: "$0–$5.00/plan" },
    { service: "Storage (first 30 days)", dg: "FREE", market: "$0.50–$1.50/cu ft/mo" },
  ],
  ongoing: [
    { service: "Standard Prep All-In", dg: "$0.65/unit", market: "$0.80–$1.25" },
    { service: "Bubble Wrap Prep", dg: "$0.95/unit", market: "$1.35–$2.00" },
    { service: "Bundling (2-pack)", dg: "$1.25/bundle", market: "$1.50–$2.50" },
    { service: "Additional Bundle Item", dg: "$0.25/item", market: "$0.40–$0.50" },
    { service: "Receiving", dg: "$0.10/unit", market: "$0.15–$0.25" },
    { service: "Storage", dg: "$0.40/cu ft/mo", market: "$0.50–$1.50" },
  ],
  volume: [
    { service: "Standard Prep All-In", dg: "$0.45/unit" },
    { service: "Bubble Wrap All-In", dg: "$0.70/unit" },
    { service: "Bundling All-In", dg: "$0.95/bundle" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
}

const apparelPricing = {
  intro: [
    { service: "Apparel Prep (FNSKU + polybag + suffocation label + tag removal + verification)", dg: "$0.70/unit", market: "$1.00–$1.75" },
    { service: "Apparel Bundling (multi-pack sets)", dg: "$1.25/bundle", market: "$2.00–$3.00" },
    { service: "Each Additional Item in Bundle", dg: "$0.30/item", market: "$0.50–$0.60" },
    { service: "Hang Tag / Swing Tag Removal", dg: "Included", market: "$0.10–$0.25" },
    { service: "Polybag Resize / Trim & Tape", dg: "Included", market: "$0.10–$0.20" },
    { service: "Receiving", dg: "FREE", market: "$0.10–$0.25/unit" },
    { service: "Storage (first 30 days)", dg: "FREE", market: "$0.50–$1.50/cu ft/mo" },
  ],
  ongoing: [
    { service: "Apparel Prep All-In", dg: "$0.90/unit", market: "$1.00–$1.75" },
    { service: "Apparel Bundling", dg: "$1.50/bundle", market: "$2.00–$3.00" },
    { service: "Additional Bundle Item", dg: "$0.35/item", market: "$0.50–$0.60" },
    { service: "Receiving", dg: "$0.10/unit", market: "$0.15–$0.25" },
    { service: "Storage", dg: "$0.40/cu ft/mo", market: "$0.50–$1.50" },
  ],
  volume: [
    { service: "Apparel Prep All-In", dg: "$0.65/unit" },
    { service: "Apparel Bundling All-In", dg: "$1.15/bundle" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
}

const shoePricing = {
  intro: [
    { service: "Shoe Prep — Boxed (FNSKU + polybag over box + tag removal + verification)", dg: "$1.00/unit", market: "$1.75–$2.50" },
    { service: "Shoe Prep — Unboxed (slippers, sandals, Crocs)", dg: "$0.75/unit", market: "$1.25–$1.75" },
    { service: "Shoe Bundling (pair sets, multi-pack)", dg: "$1.50/bundle", market: "$2.50–$3.50" },
    { service: "Box Replacement (if damaged)", dg: "$0.50 + box cost", market: "$1.00+" },
    { service: "Receiving", dg: "FREE", market: "$0.10–$0.25/unit" },
    { service: "Storage (first 30 days)", dg: "FREE", market: "$0.50–$1.50/cu ft/mo" },
  ],
  ongoing: [
    { service: "Shoe Prep — Boxed All-In", dg: "$1.25/unit", market: "$1.75–$2.50" },
    { service: "Shoe Prep — Unboxed All-In", dg: "$0.95/unit", market: "$1.25–$1.75" },
    { service: "Shoe Bundling", dg: "$1.75/bundle", market: "$2.50–$3.50" },
    { service: "Receiving", dg: "$0.10/unit", market: "$0.15–$0.25" },
    { service: "Storage", dg: "$0.40/cu ft/mo", market: "$0.50–$1.50" },
  ],
  volume: [
    { service: "Shoe Prep — Boxed All-In", dg: "$0.95/unit" },
    { service: "Shoe Prep — Unboxed All-In", dg: "$0.70/unit" },
    { service: "Shoe Bundling All-In", dg: "$1.35/bundle" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
}

const bulkyPricing = {
  intro: [
    { service: "Large Bulky (18\"–60\", under 50 lbs) Prep All-In", dg: "$2.50/unit", market: "$3.50–$5.00" },
    { service: "Extra Large (60\"+ OR 50+ lbs) Prep All-In", dg: "$4.00/unit", market: "$5.00–$8.00+" },
    { service: "Rug Prep (roll/fold + polybag/shrink + FNSKU + dim verify)", dg: "$3.00/unit", market: "$4.00–$6.00" },
    { service: "Bubble Wrap (bulky/fragile)", dg: "+$1.50/unit", market: "+$2.00–$3.50" },
    { service: "Palletizing (incl. pallet, packing, shrink wrap)", dg: "$30/pallet", market: "$40–$50/pallet" },
    { service: "Receiving", dg: "FREE", market: "$0.25–$0.50/unit" },
    { service: "Storage (first 30 days)", dg: "FREE", market: "$0.75–$2.00/cu ft/mo" },
  ],
  ongoing: [
    { service: "Large Bulky Prep", dg: "$3.00/unit", market: "$3.50–$5.00" },
    { service: "Extra Large Prep", dg: "$5.00/unit", market: "$5.00–$8.00+" },
    { service: "Rug Prep All-In", dg: "$3.50/unit", market: "$4.00–$6.00" },
    { service: "Bubble Wrap (bulky)", dg: "+$1.75/unit", market: "+$2.00–$3.50" },
    { service: "Palletizing", dg: "$35/pallet", market: "$40–$50/pallet" },
    { service: "Receiving", dg: "$0.20/unit", market: "$0.25–$0.50" },
    { service: "Storage", dg: "$0.60/cu ft/mo", market: "$0.75–$2.00" },
  ],
  volume: [
    { service: "Large Bulky Prep", dg: "$2.25/unit" },
    { service: "Extra Large Prep", dg: "$3.75/unit" },
    { service: "Rug Prep All-In", dg: "$2.75/unit" },
    { service: "Bubble Wrap (bulky)", dg: "+$1.25/unit" },
    { service: "Palletizing", dg: "$25/pallet" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
}

const addOns = [
  { service: "Expiration Date Labeling", dg: "$0.10/unit", market: "$0.15–$0.25" },
  { service: "Suffocation Warning Label", dg: "Included in prep", market: "$0.05–$0.10" },
  { service: "\"Sold as Set\" / \"This is a Set\" Label", dg: "Included in bundles", market: "$0.05–$0.15" },
  { service: "Photo Documentation (damaged/questionable units)", dg: "FREE", market: "$0.25–$0.50/photo" },
  { service: "Returns Processing & Inspection", dg: "$1.00/unit", market: "$1.50–$3.00" },
  { service: "Returns Re-Prep (re-bag, re-label, restock)", dg: "$0.75/unit", market: "$1.25–$2.00" },
  { service: "Custom Request / Special Handling", dg: "$30/hour", market: "$40–$50/hour" },
  { service: "Additional Storage (standard, 30+ days)", dg: "$0.40/cu ft/mo", market: "$0.50–$1.50" },
  { service: "Additional Storage (bulky, 30+ days)", dg: "$0.60/cu ft/mo", market: "$0.75–$2.00" },
  { service: "Long-Term Storage (90+ days)", dg: "$0.75/cu ft/mo", market: "$1.00–$2.50" },
]

/* ── Pricing Table Component ── */

function PricingTable({
  rows,
  showMarket = true,
}: {
  rows: { service: string; dg: string; market?: string }[]
  showMarket?: boolean
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-[#E2DFD8]">
            <th className="py-3 pr-4 text-[12px] font-semibold uppercase tracking-wide text-[#737373]">
              Service
            </th>
            <th className="py-3 px-4 text-[12px] font-semibold uppercase tracking-wide text-[#B8962E] text-right whitespace-nowrap">
              DeliveryGroup
            </th>
            {showMarket && (
              <th className="py-3 pl-4 text-[12px] font-semibold uppercase tracking-wide text-[#A3A3A3] text-right whitespace-nowrap">
                Market Avg
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isFree = row.dg === "FREE" || row.dg === "Included" || row.dg === "Included in prep" || row.dg === "Included in bundles"
            return (
              <tr
                key={row.service}
                className="border-b border-[#EFEDE8] last:border-0"
              >
                <td className="py-3.5 pr-4 text-[13.5px] text-[#3D3D3D]">
                  {row.service}
                </td>
                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <span
                    className={`text-[13.5px] font-semibold ${
                      isFree ? "text-[#B8962E]" : "text-[#0D0D0D]"
                    }`}
                  >
                    {row.dg}
                  </span>
                </td>
                {showMarket && (
                  <td className="py-3.5 pl-4 text-[13px] text-[#A3A3A3] text-right whitespace-nowrap line-through decoration-[#C8C4BB]">
                    {row.market || "—"}
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/* ── Category Section Component ── */

function CategorySection({
  id,
  icon: Icon,
  title,
  description,
  intro,
  ongoing,
  volume,
  introLabel,
  volumeLabel,
}: {
  id: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  intro: { service: string; dg: string; market?: string }[]
  ongoing: { service: string; dg: string; market?: string }[]
  volume: { service: string; dg: string; market?: string }[]
  introLabel?: string
  volumeLabel?: string
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
          <Icon size={20} className="text-[#B8962E]" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
            {title}
          </h2>
          <p className="text-[14px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
            {description}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Intro Tier */}
        <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#B8962E]" />
          <Badge variant="gold">Most Popular</Badge>
          <h3 className="text-[15px] font-semibold text-[#0D0D0D] mt-3 mb-1">
            Tier 1 — Intro
          </h3>
          <p className="text-[12px] text-[#737373] mb-5">
            {introLabel || "First 90 days or first 5,000 units"}
          </p>
          <PricingTable rows={intro} />
        </div>

        {/* Ongoing Tier */}
        <div className="bg-white rounded-xl border border-[#E2DFD8] p-6">
          <Badge>Standard</Badge>
          <h3 className="text-[15px] font-semibold text-[#0D0D0D] mt-3 mb-1">
            Tier 2 — Ongoing
          </h3>
          <p className="text-[12px] text-[#737373] mb-5">
            500+ units/month
          </p>
          <PricingTable rows={ongoing} />
        </div>

        {/* Volume Tier */}
        <div className="bg-[#0D0D0D] rounded-xl border border-[#2a2a2a] p-6 text-white">
          <span className="inline-flex items-center px-2.5 py-1 rounded text-[11.5px] font-medium bg-[#1a1a1a] text-[#B8962E] border border-[#333]">
            Best Value
          </span>
          <h3 className="text-[15px] font-semibold text-white mt-3 mb-1">
            Tier 3 — Volume
          </h3>
          <p className="text-[12px] text-[#737373] mb-5">
            {volumeLabel || "5,000+ units/month"}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="py-3 pr-4 text-[12px] font-semibold uppercase tracking-wide text-[#737373]">
                    Service
                  </th>
                  <th className="py-3 pl-4 text-[12px] font-semibold uppercase tracking-wide text-[#B8962E] text-right">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {volume.map((row) => {
                  const isFree = row.dg === "FREE"
                  return (
                    <tr
                      key={row.service}
                      className="border-b border-[#1f1f1f] last:border-0"
                    >
                      <td className="py-3.5 pr-4 text-[13.5px] text-[#A3A3A3]">
                        {row.service}
                      </td>
                      <td className="py-3.5 pl-4 text-right whitespace-nowrap">
                        <span
                          className={`text-[13.5px] font-semibold ${
                            isFree ? "text-[#B8962E]" : "text-white"
                          }`}
                        >
                          {row.dg}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Page ── */

export default function AmazonFBAPrepPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Amazon FBA Prep",
          provider: {
            "@type": "Organization",
            name: "Delivery Group Inc.",
            url: "https://deliverygroupinc.com",
          },
          areaServed: "US",
          description:
            "Professional Amazon FBA prep services from our 75,000 sq ft Northern Kentucky facility — 5 miles from Amazon's CVG Air Hub. Under 48-hour turnaround, 99.9% accuracy, rates starting at $0.20/unit.",
        }}
      />
      {/* ── Hero ── */}
      <section className="relative bg-[#0D0D0D] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #B8962E 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-32 lg:py-40">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="gold-bar" />
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#B8962E]">
                  Amazon FBA Prep Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-[-0.03em] mb-6">
                The fastest, most
                <br />
                cost-effective FBA prep
                <br />
                <span className="gold-text">in the country.</span>
              </h1>
              <p className="text-[16px] md:text-[17px] text-[#A3A3A3] leading-relaxed max-w-[540px] mb-10">
                75,000 sq ft facility, 5 miles from Amazon&apos;s $1.5B CVG Air Hub.
                Under 48-hour turnaround. 99.9% accuracy. Rates 30–50% below
                market. No minimums to start.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
                >
                  Get a Free Quote <ArrowRight size={15} />
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#333] text-white text-[14px] font-medium rounded-md hover:border-[#555] hover:bg-[#111] transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative overflow-hidden rounded-lg aspect-[4/3] mt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=80"
                alt="Amazon FBA prep facility — Northern Kentucky warehouse 5 miles from CVG Air Hub"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D]/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative border-t border-[#1a1a1a]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 md:divide-x md:divide-[#1f1f1f]">
              {[
                { value: "75,000", label: "Sq Ft Facility" },
                { value: "<48hr", label: "Turnaround Time" },
                { value: "99.9%", label: "Accuracy Rate" },
                { value: "5 mi", label: "From Amazon CVG Hub" },
                { value: "30–50%", label: "Below Market Rates" },
              ].map((s) => (
                <div key={s.label} className="md:px-8 first:pl-0 last:pr-0">
                  <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[12.5px] text-[#737373] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Amazon Changed Everything ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Why This Matters Now</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-6">
                Amazon eliminated all FBA prep services. The stakes have never been higher.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                As of January 1, 2026, Amazon discontinued all FBA prep and labeling services in the US. Every unit must now arrive at Amazon&apos;s fulfillment centers 100% compliant and shelf-ready. The consequences of non-compliance are severe.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Shield,
                    title: "Defect Fees Skyrocketed 80x",
                    body: "Inbound defect fees jumped from $0.02–$0.07/unit to $0.32–$1.74 for standard items and up to $5.72 for bulky items. A single labeling mistake on 1,000 units now costs up to $1,740.",
                  },
                  {
                    icon: DollarSign,
                    title: "Zero Reimbursement Policy",
                    body: "Improperly prepped inventory now receives zero reimbursement from Amazon if lost or damaged. The safety net sellers relied on is gone.",
                  },
                  {
                    icon: CheckCircle,
                    title: "100% Compliance Required",
                    body: "Every unit through AWD, AGL, SEND, or direct to FBA must be fully compliant. FNSKU labels, poly bags, suffocation warnings, set labels — everything.",
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-9 h-9 rounded-md bg-[#F7F6F3] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-[#B8962E]" />
                      </div>
                      <div>
                        <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[13.5px] text-[#737373] leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Cost Comparison Card */}
            <div className="bg-[#0D0D0D] rounded-xl p-8 text-white sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-[#B8962E]" />
                <span className="text-[13px] font-semibold text-[#B8962E]">
                  The CVG Advantage
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Why Northern Kentucky is the #1 FBA prep location in the country
              </h3>
              <p className="text-[14px] text-[#A3A3A3] leading-relaxed mb-6">
                We&apos;re 5 miles from Amazon&apos;s $1.5 billion Air Hub at CVG — the central
                node of Amazon Air&apos;s entire US cargo network — surrounded by 20+ Amazon
                fulfillment centers within 200 miles.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-[13px]">
                  <thead>
                    <tr className="border-b border-[#2a2a2a]">
                      <th className="py-2.5 pr-3 text-[11px] font-semibold uppercase tracking-wide text-[#737373]">
                        Factor
                      </th>
                      <th className="py-2.5 px-3 text-[11px] font-semibold uppercase tracking-wide text-[#737373] text-center">
                        OR/DE
                      </th>
                      <th className="py-2.5 pl-3 text-[11px] font-semibold uppercase tracking-wide text-[#B8962E] text-center">
                        KY (Us)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12.5px]">
                    {[
                      ["Nearest Amazon FCs", "2–4", "20+"],
                      ["Air Hub Distance", "600–2,300 mi", "5 mi"],
                      ["Freight to FC (standard)", "$0.15–$0.60", "$0.05–$0.15"],
                      ["Freight to FC (bulky)", "$0.50–$3.00", "$0.15–$0.40"],
                      ["Transit to FC", "1–7 days", "Same day–1 day"],
                    ].map(([factor, nomad, ky]) => (
                      <tr
                        key={factor}
                        className="border-b border-[#1f1f1f] last:border-0"
                      >
                        <td className="py-2.5 pr-3 text-[#A3A3A3]">
                          {factor}
                        </td>
                        <td className="py-2.5 px-3 text-[#737373] text-center">
                          {nomad}
                        </td>
                        <td className="py-2.5 pl-3 text-[#B8962E] font-semibold text-center">
                          {ky}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                <div className="text-[12px] text-[#737373] uppercase tracking-wide mb-1">
                  Net Savings vs. NOMAD States
                </div>
                <div className="text-2xl font-semibold text-[#B8962E]">
                  $0.25–$0.62
                </div>
                <div className="text-[12.5px] text-[#737373] mt-0.5">
                  per unit in freight &amp; placement — more than offsetting KY&apos;s
                  6% service tax
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why DeliveryGroup ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>The DeliveryGroup Difference</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Built for speed, accuracy, and scale.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Warehouse,
                title: "75,000 Sq Ft Facility",
                body: "Purpose-built warehouse infrastructure — not rented space. Dedicated zones for standard, apparel, footwear, and bulky prep.",
              },
              {
                icon: Zap,
                title: "Under 48-Hour Turnaround",
                body: "From receipt to out the door in under 48 hours. Lightning-fast processing powered by Hopstack WMS automation.",
              },
              {
                icon: Star,
                title: "99.9% Accuracy Rate",
                body: "Automated compliance workflows catch labeling and prep errors before they ship — saving you from $1.74+/unit defect fees.",
              },
              {
                icon: MapPin,
                title: "5 Miles from CVG Air Hub",
                body: "Your inventory goes from our dock to Amazon's shelves same-day. No cross-country freight bills. No transit delays.",
              },
              {
                icon: ShoppingCart,
                title: "Real-Time Client Portal",
                body: "Track every unit through prep in real time. Full integration with your Seller Central for seamless inventory management.",
              },
              {
                icon: Tag,
                title: "No Minimums to Start",
                body: "Start with any volume during the intro period. We accept online arbitrage, retail arbitrage, wholesale, and private label sellers.",
              },
              {
                icon: Clock,
                title: "Free 30-Day Storage",
                body: "No storage charges for the first 30 days — giving you flexibility to time your inbound shipments strategically.",
              },
              {
                icon: Truck,
                title: "Same-Day FC Delivery",
                body: "20+ Amazon fulfillment centers within 200 miles. Same-day to next-day delivery from our dock to Amazon's shelves.",
              },
            ].map((d) => {
              const Icon = d.icon
              return (
                <div
                  key={d.title}
                  className="bg-white p-6 rounded-lg border border-[#E2DFD8]"
                >
                  <div className="w-9 h-9 rounded-md bg-[#F7F6F3] flex items-center justify-center mb-4">
                    <Icon size={17} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-2">
                    {d.title}
                  </h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed">
                    {d.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 md:py-28 bg-white scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-8">
            <SectionLabel>Transparent Pricing</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-3">
              Simple, transparent pricing.
              <br />
              30–50% below market.
            </h2>
            <p className="text-[15px] text-[#737373] max-w-[540px] mx-auto">
              All pricing is per-unit, all-inclusive. No hidden fees, no surprise surcharges.
              Receiving, shipping plan creation, and 30-day storage included free on intro tiers.
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {[
              { label: "Standard Items", href: "#standard", icon: Package },
              { label: "Apparel", href: "#apparel", icon: Shirt },
              { label: "Footwear", href: "#footwear", icon: Footprints },
              { label: "Bulky / Oversized", href: "#bulky", icon: Box },
              { label: "Add-On Services", href: "#addons", icon: Plus },
            ].map((nav) => {
              const Icon = nav.icon
              return (
                <a
                  key={nav.label}
                  href={nav.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[13px] font-medium text-[#3D3D3D] hover:border-[#B8962E] hover:bg-[#F5EDD4] transition-colors"
                >
                  <Icon size={14} className="text-[#B8962E]" />
                  {nav.label}
                </a>
              )
            })}
          </div>

          <div className="space-y-20">
            {/* Standard Items */}
            <CategorySection
              id="standard"
              icon={Package}
              title="Standard Items"
              description="Non-apparel, standard-size items. The most common FBA prep category — FNSKU labeling, poly bagging, inspection, and bundling."
              intro={standardPricing.intro}
              ongoing={standardPricing.ongoing}
              volume={standardPricing.volume}
            />

            {/* Apparel */}
            <CategorySection
              id="apparel"
              icon={Shirt}
              title="Clothing & Apparel"
              description="Mandatory polybagging, suffocation labels, polybag trimming/taping to the 3-inch overhang rule, tag removal/covering, and size/color/style verification."
              intro={apparelPricing.intro}
              ongoing={apparelPricing.ongoing}
              volume={apparelPricing.volume}
            />

            {/* Footwear */}
            <CategorySection
              id="footwear"
              icon={Footprints}
              title="Shoes & Footwear"
              description="Box condition check, box polybagging, shoe pair matching, price tag removal, and dimensional handling. Boxed shoes require 2–3x the handling time of standard items."
              intro={shoePricing.intro}
              ongoing={shoePricing.ongoing}
              volume={shoePricing.volume}
            />

            {/* Bulky / Oversized */}
            <CategorySection
              id="bulky"
              icon={Box}
              title="Bulky & Oversized Items"
              description={'Items exceeding standard size (18"+ longest side or 20+ lbs). Rugs, furniture, fitness equipment — requiring floor staging, larger polybags or shrink wrap, and heavy handling. Inbound defect fees for bulky items can reach $5.72/unit.'}
              intro={bulkyPricing.intro}
              ongoing={bulkyPricing.ongoing}
              volume={bulkyPricing.volume}
              introLabel="First 90 days or first 2,000 units"
              volumeLabel="1,000+ units/month"
            />

            {/* Add-On Services */}
            <div id="addons" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Plus size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Add-On Services
                  </h2>
                  <p className="text-[14px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Available across all categories. Many services included free with standard prep.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                <PricingTable rows={addOns} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              From your shipment to Amazon&apos;s shelves.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Ship to Us",
                body: "Send your inventory to our 75,000 sq ft facility in Northern Kentucky. We handle receiving and intake at no charge on intro tiers.",
              },
              {
                step: "02",
                title: "We Prep",
                body: "FNSKU labeling, poly bagging, inspection, bundling, and all Amazon compliance requirements. Automated quality checks at every stage.",
              },
              {
                step: "03",
                title: "Quality Check",
                body: "Every unit passes our quality verification process. Photo documentation of any issues. 99.9% accuracy guaranteed.",
              },
              {
                step: "04",
                title: "Ship to Amazon",
                body: "Optimized shipping plans created automatically. Same-day to next-day delivery to 20+ Amazon FCs within 200 miles.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="text-[42px] font-semibold text-[#E2DFD8] leading-none mb-3">
                  {s.step}
                </div>
                <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#737373] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <SectionLabel light>Start Prepping</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-1 mb-5">
            Ready to save 30–50% on
            <br />
            your FBA prep?
          </h2>
          <p className="text-[15px] text-[#737373] max-w-[500px] mx-auto mb-10">
            No minimums. No long-term contracts. Free receiving and 30-day
            storage to start. Get a custom quote or call us today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
            >
              Get a Free Quote <ArrowRight size={15} />
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
