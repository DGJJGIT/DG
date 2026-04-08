"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calculator, DollarSign, Warehouse, Truck, Users, Package, Shirt, Footprints, Box, Wrench } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

const volumeOptions = [
  { label: "Under 500", min: 250, max: 500 },
  { label: "500 – 1,000", min: 500, max: 1000 },
  { label: "1,000 – 3,000", min: 1000, max: 3000 },
  { label: "3,000 – 5,000", min: 3000, max: 5000 },
  { label: "5,000 – 10,000", min: 5000, max: 10000 },
  { label: "10,000+", min: 10000, max: 15000 },
]

const itemsOptions = [
  { label: "1 item", value: 1 },
  { label: "2 items", value: 2 },
  { label: "3 items", value: 3 },
  { label: "4 items", value: 4 },
  { label: "5+ items", value: 5 },
]

const weightOptions = [
  { label: "Under 1 lb", ship: 4.5 },
  { label: "1 – 3 lbs", ship: 5.5 },
  { label: "3 – 5 lbs", ship: 6.5 },
  { label: "5 – 10 lbs", ship: 7.5 },
  { label: "10+ lbs", ship: 9.0 },
]

const storageOptions = [
  { label: "1 – 5 pallets", pallets: 3 },
  { label: "5 – 20 pallets", pallets: 12 },
  { label: "20 – 50 pallets", pallets: 35 },
  { label: "50+ pallets", pallets: 65 },
]

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

export default function PricingPage() {
  const [service, setService] = useState("3pl")
  const [volumeIdx, setVolumeIdx] = useState(1)
  const [itemsIdx, setItemsIdx] = useState(0)
  const [weightIdx, setWeightIdx] = useState(1)
  const [storageIdx, setStorageIdx] = useState(0)
  const [customPkg, setCustomPkg] = useState(false)
  const [kitting, setKitting] = useState(false)
  const [returns, setReturns] = useState(false)
  const [lotTracking, setLotTracking] = useState(false)
  const [activeTab, setActiveTab] = useState("standard")

  const vol = volumeOptions[volumeIdx]
  const items = itemsOptions[itemsIdx]
  const weight = weightOptions[weightIdx]
  const storage = storageOptions[storageIdx]

  const pickPackPer = 3.0 + (items.value - 1) * 0.75
  const pickPackLow = vol.min * pickPackPer
  const pickPackHigh = vol.max * pickPackPer

  const storageCost = storage.pallets * 25

  const shipLow = vol.min * weight.ship * 0.9
  const shipHigh = vol.max * weight.ship * 1.1

  let specialLow = 0
  let specialHigh = 0
  if (customPkg) { specialLow += vol.min * 0.5; specialHigh += vol.max * 0.5 }
  if (kitting) { specialLow += vol.min * 1.5; specialHigh += vol.max * 1.5 }
  if (returns) { specialLow += vol.min * 0.15 * 4.5; specialHigh += vol.max * 0.15 * 4.5 }
  if (lotTracking) { specialLow += vol.min * 0.25; specialHigh += vol.max * 0.25 }

  const totalLow = pickPackLow + storageCost + shipLow + specialLow
  const totalHigh = pickPackHigh + storageCost + shipHigh + specialHigh

  const selectClass = "w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors"
  const checkClass = "w-4 h-4 rounded border-[#E2DFD8] text-[#B8962E] focus:ring-[#B8962E]"

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Pricing Estimator</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-6 max-w-[580px]">
            See what fulfillment costs with{" "}
            <span className="gold-text">DeliveryGroup.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[480px] leading-relaxed">
            Get an instant ballpark estimate based on your volume and requirements. For a detailed custom quote, contact our team.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Inputs */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight mb-6">Configure your estimate</h2>

              <div>
                <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Service Type</label>
                <select value={service} onChange={e => setService(e.target.value)} className={selectClass}>
                  <option value="3pl">3PL Fulfillment</option>
                  <option value="fba">Amazon FBA Prep</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Monthly Order Volume</label>
                <select value={volumeIdx} onChange={e => setVolumeIdx(+e.target.value)} className={selectClass}>
                  {volumeOptions.map((o, i) => <option key={i} value={i}>{o.label} orders/month</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Average Items Per Order</label>
                <select value={itemsIdx} onChange={e => setItemsIdx(+e.target.value)} className={selectClass}>
                  {itemsOptions.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Average Product Weight</label>
                <select value={weightIdx} onChange={e => setWeightIdx(+e.target.value)} className={selectClass}>
                  {weightOptions.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Storage Needed</label>
                <select value={storageIdx} onChange={e => setStorageIdx(+e.target.value)} className={selectClass}>
                  {storageOptions.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#3D3D3D] mb-3">Special Services</label>
                <div className="space-y-3">
                  {[
                    { label: "Custom Packaging", checked: customPkg, set: setCustomPkg },
                    { label: "Kitting / Bundling", checked: kitting, set: setKitting },
                    { label: "Returns Processing", checked: returns, set: setReturns },
                    { label: "Lot Tracking / Expiration Management", checked: lotTracking, set: setLotTracking },
                  ].map(opt => (
                    <label key={opt.label} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={opt.checked} onChange={e => opt.set(e.target.checked)} className={checkClass} />
                      <span className="text-[14px] text-[#3D3D3D]">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimate */}
            <div className="lg:col-span-2">
              <div className="bg-[#F7F6F3] rounded-xl p-7 border border-[#E2DFD8] sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator size={18} className="text-[#B8962E]" />
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D]">Monthly Estimate</h3>
                </div>

                <div className="mb-6">
                  <div className="text-[13px] text-[#737373] mb-1">Estimated Range</div>
                  <div className="text-[28px] font-semibold text-[#0D0D0D] tracking-tight">
                    {fmt(totalLow)} – {fmt(totalHigh)}
                  </div>
                  <div className="text-[12px] text-[#A3A3A3]">per month</div>
                </div>

                <div className="space-y-3 pb-5 mb-5 border-b border-[#E2DFD8]">
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-[#737373]">Pick & Pack</span>
                    <span className="text-[#3D3D3D] font-medium">{fmt(pickPackLow)} – {fmt(pickPackHigh)}</span>
                  </div>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-[#737373]">Storage</span>
                    <span className="text-[#3D3D3D] font-medium">{fmt(storageCost)}</span>
                  </div>
                  <div className="flex justify-between text-[13.5px]">
                    <span className="text-[#737373]">Shipping (est.)</span>
                    <span className="text-[#3D3D3D] font-medium">{fmt(shipLow)} – {fmt(shipHigh)}</span>
                  </div>
                  {(customPkg || kitting || returns || lotTracking) && (
                    <div className="flex justify-between text-[13.5px]">
                      <span className="text-[#737373]">Special Services</span>
                      <span className="text-[#3D3D3D] font-medium">{fmt(specialLow)} – {fmt(specialHigh)}</span>
                    </div>
                  )}
                </div>

                <p className="text-[12px] text-[#A3A3A3] mb-6 leading-relaxed">
                  This is a ballpark estimate. Your actual pricing depends on specific product dimensions, shipping zones, and service requirements.
                </p>

                <Link href="/quote" className="flex items-center justify-center gap-2 w-full py-3 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
                  Get Your Custom Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="py-20 md:py-24 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <SectionLabel>Transparent Pricing</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1">No hidden fees. No surprises.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: DollarSign, title: "Pick & Pack", body: "Per-order fulfillment fees based on items and complexity. Volume discounts available." },
              { icon: Warehouse, title: "Storage", body: "Monthly pallet storage in our climate-controlled NKY facility. $25 per pallet per month." },
              { icon: Truck, title: "Shipping", body: "Discounted DHL rates passed directly to you. No markup on carrier charges." },
              { icon: Users, title: "Account Management", body: "Dedicated support, technology platform, and reporting included at no extra charge." },
            ].map(c => {
              const Icon = c.icon
              return (
                <div key={c.title} className="p-6 bg-white rounded-lg border border-[#E2DFD8]">
                  <div className="w-9 h-9 rounded-md bg-[#F7F6F3] flex items-center justify-center mb-4">
                    <Icon size={17} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">{c.title}</h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed">{c.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FBA Prep Rate Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>Amazon FBA Prep</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-3">
              FBA Prep Pricing
            </h2>
            <p className="text-[15px] text-[#737373] max-w-[560px] mx-auto leading-relaxed">
              Introductory rates for new clients. Volume discounts available at 500+ and 5,000+ units per month.
              Free receiving, free shipping plan creation, and free storage for your first 30 days.
            </p>
          </div>

          {/* Rate card tabs */}
          {(() => {
            const tabs = [
              { id: "standard", label: "Standard Items", icon: Package },
              { id: "apparel", label: "Apparel", icon: Shirt },
              { id: "shoes", label: "Shoes", icon: Footprints },
              { id: "bulky", label: "Bulky / Oversized", icon: Box },
              { id: "addons", label: "Add-Ons", icon: Wrench },
            ]

            const rateCards: Record<string, { service: string; price: string; note?: string }[]> = {
              standard: [
                { service: "FNSKU Labeling Only", price: "$0.20/unit" },
                { service: "Standard Prep (FNSKU + poly bag + inspection)", price: "$0.50/unit" },
                { service: "Bubble Wrap + FNSKU + Poly Bag", price: "$0.75/unit" },
                { service: "Bundling (2-pack, incl. FNSKU + poly bag)", price: "$1.00/bundle" },
                { service: "Each Additional Bundle Item", price: "$0.20/item" },
                { service: "Receiving", price: "FREE" },
                { service: "Shipping Plan Creation", price: "FREE" },
                { service: "Storage (first 30 days)", price: "FREE" },
              ],
              apparel: [
                { service: "Apparel Prep (FNSKU + polybag + suffocation label + tag removal + verification)", price: "$0.70/unit" },
                { service: "Apparel Bundling (multi-pack sets)", price: "$1.25/bundle" },
                { service: "Each Additional Item in Bundle", price: "$0.30/item" },
                { service: "Hang Tag / Swing Tag Removal", price: "Included" },
                { service: "Polybag Resize / Trim & Tape", price: "Included" },
                { service: "Receiving", price: "FREE" },
                { service: "Storage (first 30 days)", price: "FREE" },
              ],
              shoes: [
                { service: "Shoe Prep — Boxed (FNSKU + polybag over box + tag removal + verification)", price: "$1.00/unit" },
                { service: "Shoe Prep — Unboxed (slippers, sandals, Crocs)", price: "$0.75/unit" },
                { service: "Shoe Bundling (pair sets, multi-pack)", price: "$1.50/bundle" },
                { service: "Box Replacement (if damaged)", price: "$0.50 + box cost" },
                { service: "Receiving", price: "FREE" },
                { service: "Storage (first 30 days)", price: "FREE" },
              ],
              bulky: [
                { service: "Large Bulky (18\u201360\u2033, under 50 lbs) — Prep All-In", price: "$2.50/unit" },
                { service: "Extra Large (60\u2033+ or 50+ lbs) — Prep All-In", price: "$4.00/unit" },
                { service: "Rug Prep (roll/fold + polybag/shrink + FNSKU + dim verify)", price: "$3.00/unit" },
                { service: "Bubble Wrap (bulky/fragile)", price: "+$1.50/unit" },
                { service: "Palletizing (incl. pallet, packing, shrink wrap)", price: "$30/pallet" },
                { service: "Receiving", price: "FREE" },
                { service: "Storage (first 30 days)", price: "FREE" },
              ],
              addons: [
                { service: "Expiration Date Labeling", price: "$0.10/unit" },
                { service: "Suffocation Warning Label", price: "Included in prep" },
                { service: "\u201CSold as Set\u201D / \u201CThis is a Set\u201D Label", price: "Included in bundles" },
                { service: "Photo Documentation (damaged/questionable units)", price: "FREE" },
                { service: "Returns Processing & Inspection", price: "$1.00/unit" },
                { service: "Returns Re-Prep (re-bag, re-label, restock)", price: "$0.75/unit" },
                { service: "Custom Request / Special Handling", price: "$30/hour" },
                { service: "Storage (after first 30 days, standard)", price: "$0.40/cu ft/mo" },
                { service: "Storage (after first 30 days, bulky)", price: "$0.60/cu ft/mo" },
                { service: "Long-Term Storage (90+ days)", price: "$0.75/cu ft/mo" },
              ],
            }

            return (
              <div>
                {/* Tab buttons */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {tabs.map(t => {
                    const Icon = t.icon
                    return (
                      <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-[13px] font-medium transition-all ${
                          activeTab === t.id
                            ? "bg-[#0D0D0D] text-white"
                            : "bg-[#F7F6F3] text-[#737373] border border-[#E2DFD8] hover:border-[#B8962E] hover:text-[#3D3D3D]"
                        }`}
                      >
                        <Icon size={14} />
                        {t.label}
                      </button>
                    )
                  })}
                </div>

                {/* Rate table */}
                <div className="max-w-[800px] mx-auto">
                  <div className="rounded-lg border border-[#E2DFD8] overflow-hidden">
                    <div className="grid grid-cols-[1fr_auto] bg-[#0D0D0D] text-white">
                      <div className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wider">Service</div>
                      <div className="px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-right">Price</div>
                    </div>
                    {rateCards[activeTab].map((row, i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-[1fr_auto] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"} ${
                          i < rateCards[activeTab].length - 1 ? "border-b border-[#E2DFD8]" : ""
                        }`}
                      >
                        <div className="px-5 py-3.5 text-[14px] text-[#3D3D3D]">{row.service}</div>
                        <div className={`px-5 py-3.5 text-[14px] font-semibold text-right ${
                          row.price === "FREE" || row.price === "Included" || row.price === "Included in prep" || row.price === "Included in bundles"
                            ? "text-[#B8962E]"
                            : "text-[#0D0D0D]"
                        }`}>
                          {row.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[12px] text-[#A3A3A3] mt-4 text-center leading-relaxed">
                    Introductory rates shown. Volume discounts available at 500+ and 5,000+ units/month.
                    {activeTab !== "addons" && " Receiving, shipping plan creation, and first 30 days of storage included free."}
                  </p>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* CVG Advantage */}
      <section className="py-16 md:py-20 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-[800px] mx-auto text-center">
            <SectionLabel>Location Advantage</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-4">
              5 miles from Amazon's CVG Air Hub.
            </h2>
            <p className="text-[15px] text-[#737373] leading-relaxed mb-8 max-w-[560px] mx-auto">
              Our Northern Kentucky facility sits next to Amazon's $1.5 billion Air Hub — the central node of Amazon Air's US cargo network. With 20+ Amazon fulfillment centers within 200 miles, your inventory goes from our dock to Amazon's shelves same-day.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-[500px] mx-auto">
              <div className="p-5 bg-white rounded-lg border border-[#E2DFD8]">
                <div className="text-xl font-semibold text-[#0D0D0D] tracking-tight">Same Day</div>
                <div className="text-[11px] text-[#B8962E] mt-0.5">FC Transit Time</div>
              </div>
              <div className="p-5 bg-white rounded-lg border border-[#E2DFD8]">
                <div className="text-xl font-semibold text-[#0D0D0D] tracking-tight">20+</div>
                <div className="text-[11px] text-[#B8962E] mt-0.5">Nearby Amazon FCs</div>
              </div>
              <div className="p-5 bg-white rounded-lg border border-[#E2DFD8]">
                <div className="text-xl font-semibold text-[#0D0D0D] tracking-tight">$0.25+</div>
                <div className="text-[11px] text-[#B8962E] mt-0.5">Saved Per Unit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Want exact numbers for your business?
          </h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[420px] mx-auto">
            Our team will build a detailed proposal based on your specific products, volume, and requirements.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
            Request Custom Quote <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
