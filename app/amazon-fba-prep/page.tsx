import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Package, MapPin, Clock, Shield, CheckCircle,
  Truck, Tag, Warehouse, Zap, Star,
  ShoppingCart, Shirt, Footprints, Box, Plus
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Amazon FBA Prep Service | Delivery Group Inc.",
  description:
    "Amazon FBA prep with 48-hour turnaround and same-day receiving in most cases. FNSKU labeling, polybagging, and bundling for FBA, FBM, and DTC sellers.",
  alternates: { canonical: "https://deliverygroupinc.com/amazon-fba-prep" },
  openGraph: {
    url: "https://deliverygroupinc.com/amazon-fba-prep",
    title: "Amazon FBA Prep Service | Delivery Group Inc.",
    description: "Amazon FBA prep with 48-hour turnaround and same-day receiving in most cases. FNSKU labeling, polybagging, and bundling for FBA, FBM, and DTC sellers.",
    images: [{ url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630 }],
  },
}

/* ── Pricing Data ── */

const standardPricing = {
  intro: [
    { service: "FNSKU Labeling Only", dg: "$0.20/unit" },
    { service: "Standard Prep (FNSKU + poly bag + inspection)", dg: "$0.50/unit" },
    { service: "Bubble Wrap + FNSKU + Poly Bag", dg: "$0.75/unit" },
    { service: "Bundling (2-pack, incl. FNSKU + poly bag)", dg: "$1.00/bundle" },
    { service: "Each Additional Bundle Item", dg: "$0.20/item" },
    { service: "Receiving", dg: "FREE" },
    { service: "Shipping Plan Creation", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
  ongoing: [
    { service: "Standard Prep All-In", dg: "$0.65/unit" },
    { service: "Bubble Wrap Prep", dg: "$0.95/unit" },
    { service: "Bundling (2-pack)", dg: "$1.25/bundle" },
    { service: "Additional Bundle Item", dg: "$0.25/item" },
    { service: "Receiving", dg: "$0.10/unit" },
    { service: "Storage", dg: "$0.40/cu ft/mo" },
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
    { service: "Apparel Prep (FNSKU + polybag + suffocation label + tag removal + verification)", dg: "$0.70/unit" },
    { service: "Apparel Bundling (multi-pack sets)", dg: "$1.25/bundle" },
    { service: "Each Additional Item in Bundle", dg: "$0.30/item" },
    { service: "Hang Tag / Swing Tag Removal", dg: "Included" },
    { service: "Polybag Resize / Trim & Tape", dg: "Included" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
  ongoing: [
    { service: "Apparel Prep All-In", dg: "$0.90/unit" },
    { service: "Apparel Bundling", dg: "$1.50/bundle" },
    { service: "Additional Bundle Item", dg: "$0.35/item" },
    { service: "Receiving", dg: "$0.10/unit" },
    { service: "Storage", dg: "$0.40/cu ft/mo" },
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
    { service: "Shoe Prep, Boxed (FNSKU + polybag over box + tag removal + verification)", dg: "$1.00/unit" },
    { service: "Shoe Prep, Unboxed (slippers, sandals, Crocs)", dg: "$0.75/unit" },
    { service: "Shoe Bundling (pair sets, multi-pack)", dg: "$1.50/bundle" },
    { service: "Box Replacement (if damaged)", dg: "$0.50 + box cost" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
  ongoing: [
    { service: "Shoe Prep, Boxed All-In", dg: "$1.25/unit" },
    { service: "Shoe Prep, Unboxed All-In", dg: "$0.95/unit" },
    { service: "Shoe Bundling", dg: "$1.75/bundle" },
    { service: "Receiving", dg: "$0.10/unit" },
    { service: "Storage", dg: "$0.40/cu ft/mo" },
  ],
  volume: [
    { service: "Shoe Prep, Boxed All-In", dg: "$0.95/unit" },
    { service: "Shoe Prep, Unboxed All-In", dg: "$0.70/unit" },
    { service: "Shoe Bundling All-In", dg: "$1.35/bundle" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
}

const bulkyPricing = {
  intro: [
    { service: "Large Bulky (18\" to 60\", under 50 lbs) Prep All-In", dg: "$2.50/unit" },
    { service: "Extra Large (60\"+ OR 50+ lbs) Prep All-In", dg: "$4.00/unit" },
    { service: "Rug Prep (roll/fold + polybag/shrink + FNSKU + dim verify)", dg: "$3.00/unit" },
    { service: "Bubble Wrap (bulky/fragile)", dg: "+$1.50/unit" },
    { service: "Palletizing (incl. pallet, packing, shrink wrap)", dg: "$30/pallet" },
    { service: "Receiving", dg: "FREE" },
    { service: "Storage (first 30 days)", dg: "FREE" },
  ],
  ongoing: [
    { service: "Large Bulky Prep", dg: "$3.00/unit" },
    { service: "Extra Large Prep", dg: "$5.00/unit" },
    { service: "Rug Prep All-In", dg: "$3.50/unit" },
    { service: "Bubble Wrap (bulky)", dg: "+$1.75/unit" },
    { service: "Palletizing", dg: "$35/pallet" },
    { service: "Receiving", dg: "$0.20/unit" },
    { service: "Storage", dg: "$0.60/cu ft/mo" },
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
  { service: "Expiration Date Labeling", dg: "$0.10/unit" },
  { service: "Suffocation Warning Label", dg: "Included in prep" },
  { service: "\"Sold as Set\" / \"This is a Set\" Label", dg: "Included in bundles" },
  { service: "Photo Documentation (damaged/questionable units)", dg: "FREE" },
  { service: "Returns Processing & Inspection", dg: "$1.00/unit" },
  { service: "Returns Re-Prep (re-bag, re-label, restock)", dg: "$0.75/unit" },
  { service: "Custom Request / Special Handling", dg: "$30/hour" },
  { service: "Additional Storage (standard, 30+ days)", dg: "$0.40/cu ft/mo" },
  { service: "Additional Storage (bulky, 30+ days)", dg: "$0.60/cu ft/mo" },
  { service: "Long-Term Storage (90+ days)", dg: "$0.75/cu ft/mo" },
]

/* ── Pricing Table Component ── */

function PricingTable({
  rows,
}: {
  rows: { service: string; dg: string }[]
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
  intro: { service: string; dg: string }[]
  ongoing: { service: string; dg: string }[]
  volume: { service: string; dg: string }[]
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
          <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
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
Tier 1 &middot; Intro
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
Tier 2 &middot; Ongoing
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
Tier 3 &middot; Volume
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
            "Amazon FBA prep with 48-hour turnaround and same-day receiving in most cases, from a Northern Kentucky prep center near the Amazon CVG air hub. FNSKU labeling, polybagging with suffocation warnings, bundling, kitting, reboxing, expiration labeling, and protective packaging.",
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
          <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="gold-bar" />
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#B8962E]">
                  Amazon FBA Prep Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-[-0.03em] mb-6">
                Fast, compliant{" "}
                <br />
                Amazon FBA prep{" "}
                <br />
                <span className="gold-text">near the CVG hub.</span>
              </h1>
              <p className="text-[16px] md:text-[17px] text-[#A3A3A3] leading-relaxed max-w-[540px] mb-10">
                Amazon FBA prep with a 48-hour turnaround and same-day receiving
                in most cases, from a Northern Kentucky facility near the Amazon
                CVG air hub. FNSKU labeling, polybagging, and bundling for FBA,
                FBM, and DTC sellers.
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
            <div className="hidden md:block relative overflow-hidden rounded-lg aspect-[4/3] mt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=80"
                alt="Amazon FBA prep facility, Northern Kentucky warehouse near the CVG air hub"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D]/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Mobile hero image strip */}
        <div className="md:hidden px-4 py-2">
          <div className="relative h-56 overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80"
              alt="Amazon FBA prep facility, Northern Kentucky warehouse near the CVG air hub"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative border-t border-[#1a1a1a]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 md:divide-x md:divide-[#1f1f1f]">
              {[
                { value: "48hr", label: "FBA Prep Turnaround" },
                { value: "Same-day", label: "Receiving (Most Cases)" },
                { value: "FNSKU", label: "Labeling & Polybagging" },
                { value: "FBA/FBM/DTC", label: "Fulfillment In One Place" },
                { value: "CVG", label: "Near the Amazon Air Hub" },
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

      {/* ── What is FBA Prep + Requirements ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>What Is Amazon FBA Prep</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-6">
                Getting every unit compliant and shelf-ready for FBA.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                Amazon FBA prep is the set of steps that make a product compliant and shelf-ready before it enters Fulfillment by Amazon: applying the FNSKU barcode, polybagging with suffocation warnings where required, bundling multi-packs, and inspecting each unit. Amazon inspects inbound shipments and can charge fees or block receipt when units arrive non-compliant, so many sellers hand prep to a third-party prep center. Delivery Group Inc. runs FBA prep alongside FBM and direct-to-consumer fulfillment, so one partner covers receiving through outbound shipping.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Tag,
                    title: "FNSKU Labeling",
                    body: "A scannable FNSKU barcode on every unit. We apply and verify labels per unit so shipments are ready for Amazon's inbound scan.",
                  },
                  {
                    icon: Shield,
                    title: "Polybagging & Set Labeling",
                    body: "Polybagging with a suffocation warning on bags over the size threshold, and sold as set labeling on multi-packs. Bagged and labeled to spec.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Inspection & Protective Packaging",
                    body: "We inspect each unit and secure fragile or bulky items with bubble wrap and reboxing, so problems get caught on our dock, not at Amazon's.",
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
                        <p className="text-[16px] text-[#737373] leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Requirements Card */}
            <div className="bg-[#0D0D0D] rounded-xl p-8 text-white sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-[#B8962E]" />
                <span className="text-[13px] font-semibold text-[#B8962E]">
                  Amazon FBA Prep Requirements
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                What Amazon expects, and how we handle it
              </h3>
              <p className="text-[16px] text-[#A3A3A3] leading-relaxed mb-6">
                Amazon requires that every inbound unit arrive compliant and shelf-ready, and it inspects shipments on receipt. We check each unit against these requirements before it ships.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-[13px]">
                  <thead>
                    <tr className="border-b border-[#2a2a2a]">
                      <th className="py-2.5 pr-3 text-[11px] font-semibold uppercase tracking-wide text-[#737373]">
                        Requirement
                      </th>
                      <th className="py-2.5 pl-3 text-[11px] font-semibold uppercase tracking-wide text-[#B8962E]">
                        How we handle it
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12.5px]">
                    {[
                      ["FNSKU labeling", "Applied and verified per unit"],
                      ["Polybagging", "Bagged and labeled to spec"],
                      ["Bundling", "Set-labeled and verified"],
                      ["Protective packaging", "Bubble wrap and reboxing as needed"],
                      ["Expiration items", "Lot and expiration labeling"],
                    ].map(([requirement, handling]) => (
                      <tr
                        key={requirement}
                        className="border-b border-[#1f1f1f] last:border-0"
                      >
                        <td className="py-2.5 pr-3 text-[#A3A3A3]">
                          {requirement}
                        </td>
                        <td className="py-2.5 pl-3 text-[#B8962E] font-semibold">
                          {handling}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                <div className="text-[12px] text-[#737373] uppercase tracking-wide mb-1">
                  Fast FBA Prep Turnaround
                </div>
                <div className="text-2xl font-semibold text-[#B8962E]">
                  48 hours
                </div>
                <div className="text-[12.5px] text-[#737373] mt-0.5">
                  with same-day receiving in most cases, so units clear the dock
                  and reach Amazon sooner
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
                icon: MapPin,
                title: "Northern Kentucky Location",
                body: "Our facility sits near the Amazon CVG air hub, which keeps inbound freight and outbound Amazon shipments moving.",
              },
              {
                icon: Zap,
                title: "48-Hour Turnaround",
                body: "A consistent 48-hour turnaround on Amazon FBA prep, so your product reaches Amazon and becomes sellable sooner.",
              },
              {
                icon: Clock,
                title: "Same-Day Receiving",
                body: "We receive most inbound inventory the same day it arrives, so units clear the dock fast and prep can begin.",
              },
              {
                icon: Star,
                title: "Compliance Checks",
                body: "We check each unit against Amazon's requirements before it ships, so labeling and prep issues get caught on our dock.",
              },
              {
                icon: ShoppingCart,
                title: "Inventory Visibility",
                body: "Inventory is tracked by SKU, location, lot, and expiration, so you can follow units and stock the whole way through.",
              },
              {
                icon: Tag,
                title: "Flexible Prep Options",
                body: "FNSKU labeling, polybagging, bundling, kitting, reboxing, and expiration labeling, customized to your product and category.",
              },
              {
                icon: Truck,
                title: "FBA, FBM, and DTC",
                body: "Prep and fulfillment handled under one roof, with FBM and DTC orders flowing in through Hopstack.",
              },
              {
                icon: Warehouse,
                title: "Hands-On Support",
                body: "We work directly with you on labeling, compliance, and inventory questions rather than leaving a shipment stuck.",
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
            </h2>
            <p className="text-[15px] text-[#737373] max-w-[540px] mx-auto">
              All pricing is per-unit and all-inclusive, with no hidden fees and no surprise surcharges.
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
              description="Non-apparel, standard-size items. The most common FBA prep category, covering FNSKU labeling, polybagging, inspection, and bundling."
              intro={standardPricing.intro}
              ongoing={standardPricing.ongoing}
              volume={standardPricing.volume}
            />

            {/* Apparel */}
            <CategorySection
              id="apparel"
              icon={Shirt}
              title="Clothing and Apparel"
              description="Mandatory polybagging, suffocation labels, polybag trimming and taping to the 3-inch overhang rule, tag removal or covering, and size, color, and style verification."
              intro={apparelPricing.intro}
              ongoing={apparelPricing.ongoing}
              volume={apparelPricing.volume}
            />

            {/* Footwear */}
            <CategorySection
              id="footwear"
              icon={Footprints}
              title="Shoes and Footwear"
              description="Box condition check, box polybagging, shoe pair matching, price tag removal, and dimensional handling. Boxed shoes require more handling time than standard items."
              intro={shoePricing.intro}
              ongoing={shoePricing.ongoing}
              volume={shoePricing.volume}
            />

            {/* Bulky / Oversized */}
            <CategorySection
              id="bulky"
              icon={Box}
              title="Bulky and Oversized Items"
              description={'Items exceeding standard size (18"+ longest side or 20+ lbs). Rugs, furniture, and fitness equipment, requiring floor staging, larger polybags or shrink wrap, and heavy handling.'}
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
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
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
                body: "Send your inventory to our Northern Kentucky facility, from single cartons to LTL, FTL, and palletized freight. We receive it, usually same day.",
              },
              {
                step: "02",
                title: "We Prep",
                body: "FNSKU labeling, polybagging, inspection, bundling, and Amazon compliance requirements. We log each unit by SKU, location, lot, and expiration.",
              },
              {
                step: "03",
                title: "Quality Check",
                body: "We verify compliance and document any questionable units before they ship, so problems get caught on our dock, not at Amazon's.",
              },
              {
                step: "04",
                title: "Ship to Amazon",
                body: "We create the inbound shipping plan and ship into Amazon FBA, and you track units and inventory with full visibility the whole way.",
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
            Ready to start your
            <br />
            FBA prep?
          </h2>
          <p className="text-[15px] text-[#737373] max-w-[500px] mx-auto mb-10">
            Tell us your unit volume, product category, and sales channels, and
            we will send an FBA prep quote built around your product. Get a custom
            quote or call us today.
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
