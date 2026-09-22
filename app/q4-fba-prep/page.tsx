import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Package, Clock, DollarSign, Zap,
  CheckCircle, MapPin, Truck, AlertTriangle, ShoppingCart,
  Shirt, Box, Star
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Q4 FBA Prep 2026 — Ship Now, Hit BFCM Deadlines | Delivery Group",
  description:
    "FBA prep center 5 miles from Amazon's CVG Air Hub. Same-day to next-day inbound. $0.50/unit standard prep — 30–50% below market. No minimums. Ship before BFCM cutoffs.",
  alternates: { canonical: "https://deliverygroupinc.com/q4-fba-prep" },
  openGraph: {
    url: "https://deliverygroupinc.com/q4-fba-prep",
    title: "Q4 FBA Prep 2026 — Ship Now, Hit BFCM Deadlines | Delivery Group",
    description:
      "FBA prep center 5 miles from Amazon's CVG Air Hub. Same-day to next-day inbound. $0.50/unit standard prep — 30–50% below market. No minimums. Ship before BFCM cutoffs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
      },
    ],
  },
}

const urgencyPoints = [
  {
    icon: Clock,
    heading: "BFCM optimized-split deadline is weeks away",
    body: "Sellers who ship to a CVG-adjacent prep center this week can still hit Amazon's optimized inbound split deadline. Most NOMAD-state and coastal prep centers can't say the same.",
  },
  {
    icon: DollarSign,
    heading: "Amazon's peak surcharges are already eating your margin",
    body: "Amazon's Q4 peak fulfillment fee plus a 3.5% holiday surcharge stack on top of your normal FBA fees. Every dollar you save on prep is a dollar that survives those hits.",
  },
  {
    icon: AlertTriangle,
    heading: "Your current prep center may not make the cut",
    body: "If your prep center is in a NOMAD state (OR, DE, MT) or on a coast, the freight and placement fee math no longer works the way it did before Amazon's 2026 fee restructure.",
  },
]

const pricingRows = [
  { service: "Standard Prep (FNSKU + poly bag + inspection)", dg: "$0.50/unit", market: "$0.80–$1.25/unit" },
  { service: "Receiving — new accounts (first 90 days / 5,000 units)", dg: "FREE", market: "$0.10–$0.25/unit" },
  { service: "FNSKU Labeling Only", dg: "$0.20/unit", market: "$0.50–$0.75/unit" },
  { service: "Bundling (2-pack, incl. FNSKU + poly bag)", dg: "$1.00/bundle", market: "$1.50–$2.50/bundle" },
  { service: "Apparel / Footwear Prep", dg: "Custom — contact us", market: "$1.00–$2.00+/unit" },
  { service: "Storage — first 30 days", dg: "FREE", market: "$0.50–$1.50/cu ft/mo" },
  { service: "Onboarding / Setup Fee", dg: "FREE", market: "$0–$975" },
]

const speedFacts = [
  { stat: "Same-day → next-day", label: "Inbound to Amazon FCs from our dock" },
  { stat: "48 hours", label: "Standard FBA prep turnaround (consistently delivered)" },
  { stat: "Same-day", label: "Receiving in most cases — inventory in the system fast" },
  { stat: "5 miles", label: "From Amazon's CVG Air Hub, one of the largest Amazon Air freight nodes in the US" },
]

const categories = [
  { icon: Package, label: "Standard Units", note: "FNSKU, poly bag, bubble wrap, bundling" },
  { icon: Shirt, label: "Apparel & Footwear", note: "Category-compliant prep, bagging, labeling" },
  { icon: Box, label: "Bulky / Oversized", note: "Heavy-goods handling and FBA compliance" },
  { icon: ShoppingCart, label: "Multi-Channel (FBM / DTC)", note: "FBM + DTC fulfillment alongside FBA prep" },
]

const competitors = [
  {
    name: "ShipBob",
    issues: ["$975 setup fee", "$275/month minimum", "Quote-gated pricing — no public rate card"],
    dgAdvantage: "No setup fee, no monthly minimum, published rates you can see today.",
  },
  {
    name: "AMZ Prep",
    issues: [
      "2,500 unit/month minimum for OA/RA sellers",
      "300-unit minimum across the board",
      "Rejects low-volume accounts outright",
    ],
    dgAdvantage: "We accept OA/RA sellers and low-volume accounts with no minimum to start.",
  },
  {
    name: "NOMAD State Prep Centers (OR / DE / MT)",
    issues: [
      "Sales-tax advantage ended with the 2019 Wayfair decision — myth, not math",
      "Longer transit to Amazon MidWest/East FCs means slower inbound",
      "Higher Amazon placement fees due to suboptimal inbound origin",
    ],
    dgAdvantage: "CVG proximity delivers real freight savings + faster Amazon inbound that NOMAD centers can't replicate.",
  },
]

const faqs = [
  {
    q: "Can I start with a test shipment before committing?",
    a: "Yes. We accept test shipments from new clients — no minimum order required. It's the lowest-friction way to verify turnaround, accuracy, and communication before you scale into Q4.",
  },
  {
    q: "How fast can you realistically get my inventory to Amazon before BFCM?",
    a: "We run same-day to next-day inbound to Amazon fulfillment centers from our dock. With a 48-hour standard prep turnaround and 5 miles from CVG, inventory you send us this week can realistically land at Amazon FCs before optimized-split deadlines close.",
  },
  {
    q: "Do you accept online arbitrage (OA) or retail arbitrage (RA) sellers?",
    a: "Yes — including low-volume accounts. AMZ Prep rejects OA/RA sellers under 2,500 units/month. We don't have that policy.",
  },
  {
    q: "Is there a setup or onboarding fee?",
    a: "No setup fee. No onboarding fee. Month-to-month only — no long-term contracts. For new accounts under 500 units/month, we waive the $350 one-time onboarding fee entirely.",
  },
  {
    q: "Do you handle apparel, footwear, and bulky items?",
    a: "Yes. Full category coverage under one roof: standard, apparel, footwear, and bulky/oversized. No need to split shipments across multiple prep centers during peak season.",
  },
  {
    q: "What happens if Amazon rejects part of my shipment?",
    a: "We work directly with you to resolve compliance, labeling, or inventory issues — we don't let inventory sit and wait. Hands-on communication when problems come up is part of the service.",
  },
]

export default function Q4FbaPrepPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Q4 FBA Prep — Black Friday / Cyber Monday 2026",
          provider: {
            "@type": "LocalBusiness",
            name: "Delivery Group Inc.",
            url: "https://deliverygroupinc.com",
            telephone: "+1-800-370-2105",
            address: {
              "@type": "PostalAddress",
              streetAddress: "7587 Empire Dr",
              addressLocality: "Florence",
              addressRegion: "KY",
              postalCode: "41042",
              addressCountry: "US",
            },
          },
          description:
            "FBA prep center 5 miles from Amazon CVG Air Hub. Same-day to next-day inbound, 48-hour turnaround, $0.50/unit standard prep, no minimums.",
          areaServed: "US",
          offers: {
            "@type": "Offer",
            price: "0.50",
            priceCurrency: "USD",
            description: "Standard FBA Prep per unit",
          },
        }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#0D0D0D] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #B8962E 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />

        {/* Q4 urgency banner */}
        <div className="relative border-b border-[#1f1f1f] bg-[#111]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#B8962E] animate-pulse shrink-0" />
              <span className="text-[12.5px] text-[#A3A3A3]">
                Q4 2026 — BFCM inbound cutoffs approaching. Same-day receiving available.
              </span>
            </div>
            <Link
              href="/quote"
              className="text-[12px] font-medium text-[#B8962E] hover:text-[#D4AF37] flex items-center gap-1 shrink-0 transition-colors"
            >
              Get a quote now <ArrowRight size={11} />
            </Link>
          </div>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-32">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="gold-bar" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#B8962E]">
                Q4 FBA Prep · Black Friday / Cyber Monday 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-[-0.03em] mb-6">
              Ship this week.<br />
              Hit BFCM deadlines.<br />
              <span className="gold-text">$0.50/unit, no minimums.</span>
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#A3A3A3] leading-relaxed max-w-[600px] mb-10">
              Delivery Group is an FBA prep center 5 miles from Amazon's CVG Air Hub in Northern Kentucky.
              Same-day to next-day inbound to Amazon FCs from our dock. Sellers who ship to us this week can
              still hit the optimized-split deadline — most NOMAD-state and coastal prep centers can't say the same.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
              >
                Get a Q4 Quote <ArrowRight size={15} />
              </Link>
              <Link
                href="/fba-savings-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#333] text-white text-[14px] font-medium rounded-md hover:border-[#555] hover:bg-[#111] transition-colors"
              >
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </div>

        {/* Speed stats bar */}
        <div className="relative border-t border-[#1a1a1a]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#1f1f1f]">
              {speedFacts.map((f) => (
                <div key={f.stat} className="md:px-8 first:pl-0 last:pr-0">
                  <div className="text-xl md:text-2xl font-semibold text-white tracking-tight">{f.stat}</div>
                  <div className="text-[12px] text-[#737373] mt-1 leading-snug">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Q4 is Different This Year ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-14">
            <SectionLabel>Why Q4 2026 Is Different</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Three reasons your prep decision matters more this quarter.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {urgencyPoints.map((pt) => {
              const Icon = pt.icon
              return (
                <div key={pt.heading} className="p-7 border border-[#E2DFD8] rounded-lg">
                  <div className="w-10 h-10 rounded-md bg-[#FBF8F2] border border-[#E2DFD8] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-3">{pt.heading}</h3>
                  <p className="text-[15px] text-[#737373] leading-relaxed">{pt.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-12">
            <SectionLabel>Transparent Pricing</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Published rates. No quote-gating.
            </h2>
            <p className="text-[15px] text-[#737373] mt-4 max-w-[540px] leading-relaxed">
              30–50% below market. See the real number today — not after a sales call next week you don&apos;t have time for.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-[#E2DFD8] bg-white">
            <table className="w-full min-w-[540px] text-[14px]">
              <thead>
                <tr className="border-b border-[#E2DFD8] bg-[#F7F6F3]">
                  <th className="text-left px-6 py-4 font-semibold text-[#0D0D0D]">Service</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#B8962E]">Delivery Group</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#737373]">Market Range</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-[#E2DFD8] last:border-0 ${i % 2 === 1 ? "bg-[#FAFAF8]" : ""}`}
                  >
                    <td className="px-6 py-4 text-[#3D3D3D]">{row.service}</td>
                    <td className="px-6 py-4 font-semibold text-[#0D0D0D]">{row.dg}</td>
                    <td className="px-6 py-4 text-[#737373]">{row.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex items-start gap-2.5 text-[13px] text-[#737373]">
              <CheckCircle size={14} className="text-[#B8962E] shrink-0 mt-0.5" />
              <span>New accounts: receiving is free for first 90 days or 5,000 cumulative units — whichever comes first.</span>
            </div>
            <div className="flex items-start gap-2.5 text-[13px] text-[#737373]">
              <CheckCircle size={14} className="text-[#B8962E] shrink-0 mt-0.5" />
              <span>No setup fee. No monthly minimum. Month-to-month only.</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/fba-savings-calculator"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#0D0D0D] text-white text-[13.5px] font-medium rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              Calculate your exact savings <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category Coverage ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Full Category Coverage</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-5">
                Every category. One roof. No split shipments.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8 max-w-[480px]">
                Standard, apparel, footwear, and bulky/oversized — all handled in our single 75,000 sq ft
                Northern Kentucky facility. No need to route different product types to different prep centers
                during the exact season when speed matters most.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <div key={cat.label} className="p-4 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8]">
                      <Icon size={16} className="text-[#B8962E] mb-2.5" />
                      <div className="text-[13.5px] font-semibold text-[#0D0D0D] mb-1">{cat.label}</div>
                      <div className="text-[12.5px] text-[#737373]">{cat.note}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Zap, title: "Same-day receiving", body: "Inventory hits our system the day it arrives in most cases — no multi-day check-in queue." },
                { icon: Clock, title: "48-hour turnaround", body: "Standard FBA prep turnaround we consistently deliver. Not a best-effort estimate." },
                { icon: Truck, title: "Direct DHL partnership", body: "Outbound ships direct-inject into DHL's CVG Super Hub, 5 miles from our facility — faster and cheaper nationwide." },
                { icon: MapPin, title: "5 miles from Amazon CVG Air Hub", body: "One of the largest Amazon Air freight nodes in the country. Same-day to next-day inbound to Amazon FCs." },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4 p-5 border border-[#E2DFD8] rounded-lg">
                    <div className="w-9 h-9 rounded-md bg-[#F7F6F3] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#B8962E]" />
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#0D0D0D] mb-1">{item.title}</div>
                      <div className="text-[13.5px] text-[#737373] leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Competitor Comparison ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-12">
            <SectionLabel>Competitor Comparison</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Why sellers switch to Delivery Group for Q4.
            </h2>
          </div>
          <div className="space-y-5">
            {competitors.map((comp) => (
              <div key={comp.name} className="bg-white rounded-lg border border-[#E2DFD8] overflow-hidden">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2DFD8]">
                  <div className="p-6 md:p-7">
                    <div className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#737373] mb-3">
                      {comp.name}
                    </div>
                    <ul className="space-y-2">
                      {comp.issues.map((issue) => (
                        <li key={issue} className="flex items-start gap-2 text-[13.5px] text-[#3D3D3D]">
                          <span className="text-[#C94C4C] mt-1 shrink-0">✕</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 md:p-7 bg-[#FAFAF8]">
                    <div className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#B8962E] mb-3">
                      Delivery Group advantage
                    </div>
                    <p className="text-[13.5px] text-[#3D3D3D] leading-relaxed">{comp.dgAdvantage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
            >
              Start with a test shipment <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who We Accept ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Who We Accept</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-5">
                We say yes when others say no.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8 max-w-[480px]">
                For a seller scrambling in late September to find a prep partner before BFCM cutoffs,
                &ldquo;no minimum, start this week&rdquo; is the whole pitch.
              </p>
              <div className="space-y-3">
                {[
                  { label: "New / small sellers (100–1,000 units/mo)", note: "No minimums. No onboarding fee." },
                  { label: "OA / RA sellers", note: "We accept accounts AMZ Prep rejects under 2,500 units/month." },
                  { label: "Mid-size scaling brands (1,000–10,000 units/mo)", note: "Turnaround speed + cost savings." },
                  { label: "Apparel / footwear brands", note: "Category expertise, compliance accuracy." },
                  { label: "DTC brands going multi-channel", note: "FBA prep + 3PL under one roof." },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3 p-4 border border-[#E2DFD8] rounded-lg">
                    <CheckCircle size={15} className="text-[#B8962E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[13.5px] font-semibold text-[#0D0D0D]">{row.label}</div>
                      <div className="text-[12.5px] text-[#737373] mt-0.5">{row.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Q4 urgency callout */}
            <div className="bg-[#0D0D0D] rounded-xl p-8 md:p-10 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Star size={14} className="text-[#B8962E] fill-[#B8962E]" />
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#B8962E]">
                  Q4 At a Glance
                </span>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Standard prep rate", value: "$0.50/unit" },
                  { label: "Receiving (new accounts)", value: "FREE first 90 days" },
                  { label: "Prep turnaround", value: "48 hours" },
                  { label: "Distance to CVG Amazon Air Hub", value: "5 miles" },
                  { label: "Inbound to Amazon FCs", value: "Same-day → next-day" },
                  { label: "Setup / onboarding fee", value: "$0" },
                  { label: "Monthly minimum", value: "None" },
                  { label: "Contract required", value: "Month-to-month only" },
                  { label: "OA / RA sellers accepted", value: "Yes" },
                  { label: "Apparel + footwear + bulky", value: "All in one facility" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 border-b border-[#1f1f1f] pb-4 last:border-0 last:pb-0">
                    <span className="text-[13px] text-[#A3A3A3]">{item.label}</span>
                    <span className="text-[13.5px] font-semibold text-white shrink-0">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/quote"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
                >
                  Get a Q4 quote <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Questions sellers ask before BFCM.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-[1000px]">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-lg border border-[#E2DFD8]">
                <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-3">{faq.q}</h3>
                <p className="text-[13.5px] text-[#737373] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <SectionLabel light>Get Started Before BFCM</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-1 mb-5">
            Sellers who act now make the deadline.<br />
            <span className="gold-text">Sellers who wait don&apos;t.</span>
          </h2>
          <p className="text-[15px] text-[#737373] max-w-[480px] mx-auto mb-10">
            75,000 sq ft facility in Florence, KY. 5 miles from Amazon&apos;s CVG Air Hub.
            $0.50/unit standard prep. No minimums. No contracts. Start with a test shipment this week.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
            >
              Get a Q4 Quote <ArrowRight size={15} />
            </Link>
            <Link
              href="/amazon-fba-prep"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#333] text-white text-[14px] font-medium rounded-md hover:border-[#555] hover:bg-[#111] transition-colors"
            >
              Full FBA Prep Details
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
