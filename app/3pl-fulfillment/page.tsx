import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Package, MapPin, Shield, CheckCircle,
  Truck, DollarSign, Warehouse, Zap,
  BarChart3, RefreshCw, Settings, Plus, Layers,
  Box, Tag, Users
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "3PL Fulfillment Services",
  description:
    "A 3PL fulfillment company in Northern Kentucky that receives same-day, preps FBA in 48 hours, and ships FBA, FBM, and DTC orders for ecommerce brands.",
  alternates: { canonical: "https://deliverygroupinc.com/3pl-fulfillment" },
  openGraph: {
    url: "https://deliverygroupinc.com/3pl-fulfillment",
    title: "3PL Fulfillment Services | Delivery Group Inc.",
    description: "A 3PL fulfillment company in Northern Kentucky that receives same-day, preps FBA in 48 hours, and ships FBA, FBM, and DTC orders for ecommerce brands.",
    images: [{ url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630 }],
  },
}

/* ── Pricing Data ── */

const onboardingPricing = [
  { service: "Account Setup & Integration", dg: "$350", note: "WMS config, SKU mapping, system setup" },
  { service: "Custom API/EDI Integration", dg: "$1,000 to $2,500", note: "Shopify, WooCommerce, custom ERP" },
  { service: "SKU Onboarding", dg: "$0.75/SKU", note: "Catalog entry, barcode verification" },
]

const receivingPricing = [
  { service: "Per Pallet Received", dg: "$30" },
  { service: "Per Carton/Case Received", dg: "$3.50" },
  { service: "Per Unit (Item-Level)", dg: "$0.35" },
  { service: "Container Unload (20ft)", dg: "$300" },
  { service: "Container Unload (40ft)", dg: "$475" },
  { service: "Receiving Labor (hourly)", dg: "$45/hr", note: "Non-standard or problem shipments" },
]

const storagePricing = [
  { service: "Per Pallet / Month", dg: "$25" },
  { service: "Per Bin / Month (small items)", dg: "$8" },
  { service: "Per Cubic Foot / Month", dg: "$0.60" },
  { service: "Per Sq Ft / Month (bulk floor)", dg: "$1.00" },
  { service: "Long-Term Storage (90+ days)", dg: "+15%" },
]

const pickPackPricing = [
  { service: "First Item Pick Fee (per order)", dg: "$3.00", note: "Processing + first pick" },
  { service: "Each Additional Item", dg: "$0.65" },
  { service: "Flat Per-Order Fee (alt.)", dg: "$4.00", note: "Simplified model for high-volume" },
  { service: "Standard Packing Materials", dg: "$1.00", note: "Poly mailers, boxes, dunnage" },
  { service: "Custom / Branded Packaging", dg: "$2.00", note: "Custom boxes, tissue, inserts" },
  { service: "Marketing Inserts", dg: "$0.35", note: "Flyers, coupons, thank-you cards" },
  { service: "Kitting / Assembly", dg: "$1.25", note: "Bundling multiple SKUs" },
  { service: "Gift Wrapping", dg: "$3.50", note: "Seasonal / premium add-on" },
]

const returnsPricing = [
  { service: "Returns Processing", dg: "$4.50", note: "Receive, inspect, restock or dispose" },
  { service: "Quality Inspection", dg: "$1.50", note: "Detailed inspection / grading" },
  { service: "Restocking", dg: "$1.50", note: "Put-away back to inventory" },
  { service: "Disposal / Destruction", dg: "$0.75", note: "Items not suitable for resale" },
]

const vasPricing = [
  { service: "Kitting & Bundling", dg: "$1.50 to $3.00/kit", note: "Subscription boxes, gift sets, variety packs" },
  { service: "Labeling / Relabeling", dg: "$0.50/unit", note: "Barcode, compliance, promo stickers" },
  { service: "Shrink Wrapping", dg: "$1.00/unit" },
  { service: "Lot / Expiration Tracking", dg: "$0.15/unit", note: "Supplements, nutraceuticals, cosmetics" },
  { service: "Custom Reporting", dg: "$150/month", note: "Advanced analytics, dashboards" },
]

const accountPricing = [
  { service: "Account Management", dg: "Included", note: "Day-to-day account communication and operations" },
  { service: "Platform / WMS Access", dg: "Included", note: "No monthly platform fee" },
  { service: "Order Minimum", dg: "None", note: "No minimums to start" },
]

const surcharges = [
  { service: "Rush / Same-Day Processing", dg: "+35%" },
  { service: "After-Hours Work", dg: "+50%", note: "Weekend or holiday fulfillment" },
  { service: "Oversized / Heavy Items", dg: "$5 to $15/unit" },
  { service: "Hazmat / Special Handling", dg: "$5 to $10/unit" },
  { service: "Project / Manual Labor", dg: "$40/hr" },
]

/* ── FAQ Data (shared by visible FAQ + FAQPage schema) ── */

const faqs = [
  {
    q: "What does a 3PL fulfillment company do?",
    a: "A 3PL fulfillment company receives your inventory, stores it, and picks, packs, and ships each customer order for you. Delivery Group Inc. handles receiving, storage, pick and pack, Amazon FBA prep, FBA, FBM, and DTC shipping, returns processing, and B2B case and pallet fulfillment from one Northern Kentucky facility.",
  },
  {
    q: "How fast does Delivery Group receive and prep inventory?",
    a: "We offer same-day receiving in most cases and prep Amazon FBA shipments within 48 hours, so inventory clears the dock and becomes sellable quickly.",
  },
  {
    q: "Is there an order minimum for 3PL fulfillment?",
    a: "No. There is no order minimum to start, and account management and platform access are included with no monthly platform fee.",
  },
  {
    q: "Which sales channels and platforms do you integrate with?",
    a: "We connect to Shopify, WooCommerce, BigCommerce, Amazon FBA and FBM, and custom ERP systems through Hopstack and direct API or EDI integrations.",
  },
  {
    q: "Do you handle returns and kitting?",
    a: "Yes. We run full reverse logistics, receiving, inspecting, grading, restocking, or disposing of returns, and we offer kitting and bundling for subscription boxes, gift sets, and variety packs.",
  },
  {
    q: "Where is Delivery Group Inc. located?",
    a: "Our fulfillment facility is in Northern Kentucky, near the Cincinnati and CVG air hub, which keeps inbound freight and outbound Amazon shipments moving.",
  },
]

/* ── Pricing Table Component ── */

function PricingTable({
  rows,
  showNotes = false,
}: {
  rows: { service: string; dg: string; note?: string }[]
  showNotes?: boolean
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
              Rate
            </th>
            {showNotes && (
              <th className="py-3 pl-4 text-[12px] font-semibold uppercase tracking-wide text-[#A3A3A3] text-right whitespace-nowrap hidden md:table-cell">
                Notes
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isFree =
              row.dg === "FREE" ||
              row.dg === "Included"
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
                {showNotes && (
                  <td className="py-3.5 pl-4 text-[12.5px] text-[#A3A3A3] text-right whitespace-nowrap hidden md:table-cell">
                    {row.note || ""}
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

/* ── Page ── */

export default function ThreePLFulfillmentPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://deliverygroupinc.com" },
            { "@type": "ListItem", position: 2, name: "3PL Fulfillment Services", item: "https://deliverygroupinc.com/3pl-fulfillment" },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "3PL Fulfillment",
          serviceType: "3pl fulfillment",
          provider: {
            "@type": "Organization",
            name: "Delivery Group Inc.",
            url: "https://deliverygroupinc.com",
          },
          areaServed: { "@type": "Country", name: "United States" },
          url: "https://deliverygroupinc.com/3pl-fulfillment",
          description:
            "Full-service 3PL fulfillment from a Northern Kentucky facility: receiving, storage, pick and pack, Amazon FBA prep, FBA/FBM/DTC shipping, returns processing, kitting, and B2B case and pallet fulfillment.",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://deliverygroupinc.com/3pl-fulfillment#webpage",
          url: "https://deliverygroupinc.com/3pl-fulfillment",
          name: "3PL Fulfillment Services | Delivery Group Inc.",
          description:
            "A 3PL fulfillment company in Northern Kentucky that receives same-day, preps FBA in 48 hours, and ships FBA, FBM, and DTC orders for ecommerce brands.",
          isPartOf: { "@type": "WebSite", url: "https://deliverygroupinc.com" },
          about: { "@type": "Organization", name: "Delivery Group Inc.", url: "https://deliverygroupinc.com" },
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".quick-answer"] },
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
                  3PL Fulfillment Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-[-0.03em] mb-6">
                3PL fulfillment{" "}
                <br />
                from one{" "}
                <br />
                <span className="gold-text">Northern Kentucky hub.</span>
              </h1>
              <p className="quick-answer text-[16px] md:text-[17px] text-[#A3A3A3] leading-relaxed max-w-[540px] mb-10">
                A third-party logistics fulfillment company that receives your
                inventory, stores it, and ships FBA, FBM, and direct-to-consumer
                orders from one facility, with same-day receiving in most cases
                and 48-hour Amazon FBA prep.
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                alt="Delivery Group Inc. 3PL fulfillment warehouse, organized inventory and pick-and-pack operations in Northern Kentucky"
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
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
              alt="Delivery Group Inc. 3PL fulfillment warehouse, organized inventory in Northern Kentucky"
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
                { value: "Same-day", label: "Receiving (Most Cases)" },
                { value: "48hr", label: "Amazon FBA Prep" },
                { value: "FBA/FBM/DTC", label: "Order Fulfillment" },
                { value: "Returns", label: "Full Reverse Logistics" },
                { value: "B2B", label: "Case & Pallet Shipments" },
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

      {/* ── What is 3PL Fulfillment ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>What Is 3PL Fulfillment</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-6">
                One partner for receiving through outbound shipping.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                3PL fulfillment is order fulfillment run by a third-party logistics provider that stores your inventory and ships each customer order for you, covering receiving, storage, pick and pack, packaging, and outbound shipping. It differs from self-fulfillment, where you pack and ship every order yourself, and from a plain warehouse, which mainly stores goods in bulk. At Delivery Group Inc., 3PL fulfillment also includes Amazon FBA prep, returns processing, kitting, and B2B case and pallet shipments.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Truck,
                    title: "Receiving and Fulfillment",
                    body: "We receive inbound freight, store it with SKU-level tracking, prep and pack each order, and ship FBA, FBM, and direct-to-consumer orders from one Northern Kentucky facility.",
                  },
                  {
                    icon: MapPin,
                    title: "Near the Amazon CVG Hub",
                    body: "Our Northern Kentucky location sits near the Cincinnati and CVG air hub, which keeps inbound freight and outbound Amazon shipments moving.",
                  },
                  {
                    icon: DollarSign,
                    title: "Hands-On Service",
                    body: "On labeling, compliance, or inventory questions, we work directly with you rather than leaving a shipment stuck. That is what separates a 3PL from a warehouse that only stores your boxes.",
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

            {/* Comparison Card */}
            <div className="bg-[#0D0D0D] rounded-xl p-8 text-white sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-[#B8962E]" />
                <span className="text-[13px] font-semibold text-[#B8962E]">
                  3PL vs. Warehouse vs. Self-Fulfillment
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                What a 3PL does that a warehouse does not
              </h3>
              <p className="text-[16px] text-[#A3A3A3] leading-relaxed mb-6">
                A warehouse mainly stores goods in bulk. A 3PL stores your products and also picks, packs, ships, and processes returns on every order.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-[13px]">
                  <thead>
                    <tr className="border-b border-[#2a2a2a]">
                      <th className="py-2.5 pr-3 text-[11px] font-semibold uppercase tracking-wide text-[#737373]">
                        Capability
                      </th>
                      <th className="py-2.5 px-3 text-[11px] font-semibold uppercase tracking-wide text-[#B8962E] text-center">
                        3PL
                      </th>
                      <th className="py-2.5 pl-3 text-[11px] font-semibold uppercase tracking-wide text-[#737373] text-center">
                        Warehouse
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[12.5px]">
                    {[
                      ["Pick and pack", "Yes", "No"],
                      ["Order shipping", "Yes", "No"],
                      ["Returns processing", "Yes", "Rarely"],
                      ["Amazon FBA prep", "Yes", "No"],
                      ["Bulk storage", "Yes", "Yes"],
                    ].map(([cap, threepl, wh]) => (
                      <tr
                        key={cap}
                        className="border-b border-[#1f1f1f] last:border-0"
                      >
                        <td className="py-2.5 pr-3 text-[#A3A3A3]">
                          {cap}
                        </td>
                        <td className="py-2.5 px-3 text-[#B8962E] font-semibold text-center">
                          {threepl}
                        </td>
                        <td className="py-2.5 pl-3 text-[#737373] text-center">
                          {wh}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                <div className="text-[12px] text-[#737373] uppercase tracking-wide mb-1">
                  Same-Day Receiving
                </div>
                <div className="text-2xl font-semibold text-[#B8962E]">
                  Most cases
                </div>
                <div className="text-[12.5px] text-[#737373] mt-0.5">
                  so inventory clears the dock fast and your product becomes
                  sellable sooner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>Full-Service Fulfillment</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Everything from receiving to delivery.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Warehouse,
                title: "Receiving & Storage",
                body: "Pallet, carton, and unit-level receiving with barcode verification. Racked, bin, and bulk floor storage options.",
              },
              {
                icon: Package,
                title: "Pick & Pack",
                body: "Accurate, efficient order fulfillment with standard or custom branded packaging. Marketing inserts, kitting, and gift wrapping available.",
              },
              {
                icon: Truck,
                title: "Outbound Shipping",
                body: "We create inbound shipping plans and ship FBA, FBM, and direct-to-consumer orders, including cartons to LTL and FTL freight.",
              },
              {
                icon: RefreshCw,
                title: "Returns Processing",
                body: "Full reverse logistics: receive, inspect, grade, restock, or dispose. Turn returns into a retention tool, not a cost center.",
              },
              {
                icon: Layers,
                title: "Kitting & Bundling",
                body: "Subscription boxes, gift sets, variety packs, and multi-SKU assembly. Seasonal and promotional kitting with fast turnaround.",
              },
              {
                icon: Tag,
                title: "Labeling & Compliance",
                body: "Barcode labeling, relabeling, lot and expiration tracking for supplements, nutraceuticals, and regulated products.",
              },
              {
                icon: Settings,
                title: "Platform Integrations",
                body: "Native integrations with Shopify, WooCommerce, BigCommerce, Amazon, and custom ERP systems via API or EDI.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Visibility",
                body: "WMS-powered inventory tracking, order status updates, and performance dashboards accessible 24/7 through your client portal.",
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
              Clear pricing.
              <br />
              No hidden fees.
            </h2>
            <p className="text-[15px] text-[#737373] max-w-[540px] mx-auto">
              Every rate is published. No surprise surcharges, no opaque billing.
              Volume discounts and custom pricing available for high-volume accounts.
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {[
              { label: "Pick & Pack", href: "#pickpack", icon: Package },
              { label: "Storage", href: "#storage", icon: Warehouse },
              { label: "Receiving", href: "#receiving", icon: Box },
              { label: "Returns", href: "#returns", icon: RefreshCw },
              { label: "Value-Added", href: "#vas", icon: Plus },
              { label: "Account", href: "#account", icon: Users },
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

          <div className="space-y-16">
            {/* Pick & Pack */}
            <div id="pickpack" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Package size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Pick & Pack / Order Fulfillment
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Our core fulfillment service. Per-order processing with flexible packaging options.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                <PricingTable rows={pickPackPricing} showNotes />
              </div>
            </div>

            {/* Storage */}
            <div id="storage" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Warehouse size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Storage
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Flexible storage options: racked pallets, bins for small items, and bulk floor space.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                <PricingTable rows={storagePricing} />
              </div>
            </div>

            {/* Receiving */}
            <div id="receiving" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Box size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Receiving
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Pallet, carton, and unit-level receiving with inspection and put-away. Container unloading available.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                <PricingTable rows={receivingPricing} showNotes />
              </div>
            </div>

            {/* Shipping */}
            <div id="shipping" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Truck size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Shipping & Postage
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    We create inbound shipping plans and ship each order. Postage is billed at our negotiated DHL and parcel rates with no markup, plus a $0.75 per-label fee.
                  </p>
                </div>
              </div>
              <div className="bg-[#0D0D0D] rounded-xl border border-[#2a2a2a] p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} className="text-[#B8962E]" />
                  <span className="text-[13px] font-semibold text-[#B8962E]">
                    Outbound Shipping
                  </span>
                </div>
                <p className="text-[14px] text-[#A3A3A3] leading-relaxed mb-6 max-w-[600px]">
                  We ship FBA, FBM, and direct-to-consumer orders, from cartons to LTL and FTL freight.
                  Ask us for a shipping cost analysis using your actual order data.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Shipping Label Fee", value: "$0.75/label", sub: "On top of postage" },
                    { label: "DIM Weight Surcharges", value: "Pass-through", sub: "At our negotiated carrier rates, no markup" },
                    { label: "Residential Delivery", value: "Pass-through", sub: "Standard carrier surcharge" },
                    { label: "Signature / Insurance", value: "Cost + margin", sub: "Optional add-on per shipment" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]"
                    >
                      <div className="text-[12px] text-[#737373] mb-1">{item.label}</div>
                      <div className="text-[15px] font-semibold text-white">{item.value}</div>
                      <div className="text-[11.5px] text-[#737373] mt-0.5">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Returns */}
            <div id="returns" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <RefreshCw size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Returns Processing
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Full reverse logistics: receive, inspect, grade, restock, or dispose.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                <PricingTable rows={returnsPricing} showNotes />
              </div>
            </div>

            {/* Value-Added Services */}
            <div id="vas" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Plus size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Value-Added Services
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Kitting, labeling, lot tracking, custom reporting, and more.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                <PricingTable rows={vasPricing} showNotes />
              </div>
            </div>

            {/* Account & Technology */}
            <div id="account" className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Users size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Account & Technology
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Account management and platform access are included. Onboarding fees are listed below.
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                  <h3 className="text-[14px] font-semibold text-[#0D0D0D] mb-4">Account</h3>
                  <PricingTable rows={accountPricing} showNotes />
                </div>
                <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                  <h3 className="text-[14px] font-semibold text-[#0D0D0D] mb-4">Onboarding</h3>
                  <PricingTable rows={onboardingPricing} showNotes />
                </div>
              </div>
            </div>

            {/* Surcharges */}
            <div className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield size={20} className="text-[#B8962E]" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    Surcharges & Special Handling
                  </h2>
                  <p className="text-[16px] text-[#737373] mt-1 leading-relaxed max-w-[600px]">
                    Additional fees for rush processing, oversized items, and specialty handling.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F6F3] rounded-xl border border-[#E2DFD8] p-6">
                <PricingTable rows={surcharges} showNotes />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Scenarios ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>What It Looks Like</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Real-world fulfillment costs.
            </h2>
            <p className="text-[15px] text-[#737373] max-w-[500px] mx-auto mt-3">
              Here&apos;s what typical e-commerce brands pay at different order volumes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Scenario A */}
            <div className="bg-white rounded-xl border border-[#E2DFD8] overflow-hidden">
              <div className="p-6 border-b border-[#E2DFD8]">
                <Badge variant="gold">Growing Brand</Badge>
                <h3 className="text-[17px] font-semibold text-[#0D0D0D] mt-3 mb-1">
                  1,000 orders/month
                </h3>
                <p className="text-[13px] text-[#737373] leading-relaxed">
                  DTC brand selling via Shopify. ~1.5 items per order. Ready to outsource fulfillment to focus on growth.
                </p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  ["Storage (8 pallets)", "$200"],
                  ["Receiving", "$240"],
                  ["Pick & Pack (1,000 orders)", "$3,500"],
                  ["Packing Materials", "$1,000"],
                  ["Outbound Shipping", "~$1,250"],
                  ["Marketing Inserts (50%)", "$175"],
                  ["Returns (3% rate)", "$135"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-[13px] text-[#737373]">{label}</span>
                    <span className="text-[13px] font-medium text-[#0D0D0D]">{value}</span>
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-[#E2DFD8] flex justify-between items-center">
                  <span className="text-[14px] font-semibold text-[#0D0D0D]">Est. Monthly Total</span>
                  <span className="text-[18px] font-semibold text-[#B8962E]">~$6,500</span>
                </div>
              </div>
            </div>

            {/* Scenario B */}
            <div className="bg-[#0D0D0D] rounded-xl border border-[#2a2a2a] overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#B8962E]" />
              <div className="p-6 border-b border-[#2a2a2a]">
                <span className="inline-flex items-center px-2.5 py-1 rounded text-[11.5px] font-medium bg-[#1a1a1a] text-[#B8962E] border border-[#333]">
                  Most Common
                </span>
                <h3 className="text-[17px] font-semibold text-white mt-3 mb-1">
                  5,000 orders/month
                </h3>
                <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                  Mid-size brand doing $300K to $500K/month. Selling on Shopify and Amazon. Needs better rates and faster delivery.
                </p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  ["Storage (25 pallets)", "$625"],
                  ["Receiving", "$720"],
                  ["Pick & Pack (5,000 orders)", "$16,250"],
                  ["Packing Materials", "$5,000"],
                  ["Outbound Shipping", "~$7,500"],
                  ["Kitting (20% of orders)", "$1,500"],
                  ["Marketing Inserts", "$1,750"],
                  ["Returns (5% rate)", "$1,125"],
                  ["Lot/Expiration Tracking", "$750"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-[13px] text-[#A3A3A3]">{label}</span>
                    <span className="text-[13px] font-medium text-white">{value}</span>
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-[#2a2a2a] flex justify-between items-center">
                  <span className="text-[14px] font-semibold text-white">Est. Monthly Total</span>
                  <span className="text-[18px] font-semibold text-[#B8962E]">~$35,220</span>
                </div>
              </div>
            </div>

            {/* Scenario C */}
            <div className="bg-white rounded-xl border border-[#E2DFD8] overflow-hidden">
              <div className="p-6 border-b border-[#E2DFD8]">
                <Badge>Enterprise</Badge>
                <h3 className="text-[17px] font-semibold text-[#0D0D0D] mt-3 mb-1">
                  15,000+ orders/month
                </h3>
                <p className="text-[13px] text-[#737373] leading-relaxed">
                  Established brand doing $1M+/month. Multi-channel with complex fulfillment needs including kitting and custom packaging.
                </p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  ["Storage (60 pallets)", "$1,500"],
                  ["Receiving", "$1,800"],
                  ["Pick & Pack (15,000 orders)", "$45,000"],
                  ["Branded Packaging", "$30,000"],
                  ["Outbound Shipping", "~$26,250"],
                  ["Kitting (30% of orders)", "$6,750"],
                  ["Marketing Inserts", "$5,250"],
                  ["Returns (5% rate)", "$3,375"],
                  ["Lot Tracking + Reporting", "$2,400"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-[13px] text-[#737373]">{label}</span>
                    <span className="text-[13px] font-medium text-[#0D0D0D]">{value}</span>
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-[#E2DFD8] flex justify-between items-center">
                  <span className="text-[14px] font-semibold text-[#0D0D0D]">Est. Monthly Total</span>
                  <span className="text-[18px] font-semibold text-[#B8962E]">~$122,325</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[12.5px] text-[#A3A3A3] text-center mt-6">
            Estimates based on typical order profiles. Your actual costs depend on order complexity, SKU count, and service mix.
            <Link href="/quote" className="text-[#B8962E] hover:underline ml-1">Get a custom quote →</Link>
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Up and running in days, not weeks.
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Connect Your Channels",
                body: "Connect your sales channels through Hopstack, the multi-channel integration platform we use, including Shopify, other ecommerce platforms, and Amazon FBA and FBM.",
              },
              {
                step: "02",
                title: "Onboarding",
                body: "WMS configuration, SKU mapping, and platform integration. Shopify, WooCommerce, and Amazon, we connect to your stack.",
              },
              {
                step: "03",
                title: "Send Inventory",
                body: "Ship your inventory to our warehouse. We receive, inspect, barcode-verify, and put away to designated storage.",
              },
              {
                step: "04",
                title: "We Fulfill",
                body: "Orders flow in automatically. We pick, pack, and ship each order, with real-time tracking the whole way.",
              },
              {
                step: "05",
                title: "You Grow",
                body: "Monitor everything through your client portal. Focus on marketing and product development, we handle the logistics.",
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

      {/* ── Who It's For ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Who We Work With</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-6">
                From startups to established brands.
              </h2>
              <p className="text-[15px] text-[#737373] leading-relaxed mb-8">
                Whether you&apos;re shipping 500 orders a month from your garage or 15,000+ across multiple channels, our infrastructure scales with you.
              </p>
              <div className="space-y-3">
                {[
                  "DTC / Shopify brands ready to outsource fulfillment",
                  "Amazon merchant-fulfilled sellers seeking faster delivery",
                  "Subscription box companies needing kitting and assembly",
                  "Multi-channel brands selling across DTC, Amazon, and wholesale",
                  "Supplement and nutraceutical brands requiring lot tracking",
                  "Growing brands that have outgrown their current 3PL",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-[#B8962E] shrink-0" />
                    <span className="text-[14px] text-[#3D3D3D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "Same-day", label: "Receiving", sub: "In most cases" },
                { value: "48hr", label: "FBA Prep", sub: "Consistent turnaround" },
                { value: "FBA/FBM/DTC", label: "Fulfillment", sub: "In one place" },
                { value: "B2B", label: "Case & Pallet", sub: "Wholesale shipments" },
              ].map((s) => (
                <div key={s.label} className="p-7 bg-white rounded-lg border border-[#E2DFD8]">
                  <div className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[13px] font-medium text-[#0D0D0D] mt-1">
                    {s.label}
                  </div>
                  <div className="text-[12px] text-[#B8962E] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related 3PL Services ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#A3A3A3] mb-4">Related services</p>
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: "3PL Warehouse", href: "/3pl-warehousing" },
              { label: "3PL Warehousing", href: "/3pl-warehousing" },
              { label: "3PL WMS", href: "/3pl-wms" },
              { label: "eCommerce 3PL Fulfillment", href: "/3pl-ecommerce-fulfillment" },
              { label: "3PL for Small Business", href: "/3pl-for-small-business" },
              { label: "Liquidation Pallets", href: "/liquidation-pallets" },
              { label: "Fulfillment Center", href: "/fulfillment-center" },
              { label: "Pick & Pack Services", href: "/pick-and-pack-fulfillment" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-1.5 border border-[#E2DFD8] rounded px-3.5 py-2 text-[13.5px] text-[#3D3D3D] hover:border-[#B8962E] hover:text-[#0D0D0D] transition-colors"
              >
                {s.label} <ArrowRight size={13} className="text-[#B8962E]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3]">
        <div className="max-w-[820px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="mb-10">
            <SectionLabel>Frequently Asked</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              3PL fulfillment questions.
            </h2>
          </div>
          <dl className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-[#E2DFD8] pb-6 last:border-0">
                <dt className="text-[16px] font-semibold text-[#0D0D0D] mb-2">{f.q}</dt>
                <dd className="text-[14px] text-[#737373] leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <SectionLabel light>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-1 mb-5">
            See what you&apos;d save
            <br />
            with DeliveryGroup.
          </h2>
          <p className="text-[15px] text-[#737373] max-w-[500px] mx-auto mb-10">
            Request a free shipping cost analysis using your actual order data.
            Most brands see meaningful savings on every shipment, before factoring
            in faster transit times.
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
