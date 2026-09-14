"use client"

import { useState } from "react"

// ─── Confirmed pricing — FBA Prep only (3PL has a separate structure) ─────────
const PREP_COST_PER_UNIT        = 0.50   // standard FBA prep, all-in
const RECEIVING_COST_PER_UNIT   = 0.10   // Tier 2 rate (after free period ends)
const ONBOARDING_FEE            = 350    // one-time, only if monthly volume < 500 units

// Storage — per cubic foot / month (FBA Prep)
const STORAGE_STANDARD_PER_CUFT = 0.40  // standard size items
const STORAGE_BULKY_PER_CUFT    = 0.60  // bulky / oversized items

// Avg cubic feet per unit (used to convert unit count → cu ft for storage estimate)
const AVG_CUFT_STANDARD = 0.10          // ~typical Amazon standard-size unit
const AVG_CUFT_BULKY    = 0.50          // ~typical oversized/bulky unit

// DIY baseline (verified: labor + materials)
const DIY_LOW  = 1.20
const DIY_HIGH = 1.80

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmtUSD(n: number) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface CalcResult {
  prep: number
  receiving: number
  onboarding: number
  storage: number
  storageCuFt: number
  total: number
}

function calcDGCost(
  volume: number,
  storageUnits: number,
  isNewClient: boolean,
  isBulky: boolean,
  months: number,
): CalcResult {
  const prep = volume * PREP_COST_PER_UNIT

  // Receiving: free during first 90 days OR first 5,000 cumulative units (whichever comes first).
  // For new clients, show $0. For existing clients past Tier 1, charge $0.10/unit on the full volume.
  const receiving = isNewClient ? 0 : volume * RECEIVING_COST_PER_UNIT

  // One-time onboarding fee amortized over the selected period (only < 500 units/mo)
  const onboarding = volume < 500 ? ONBOARDING_FEE / months : 0

  // Storage: convert units → cubic feet, then apply rate by product type
  const cuFtPerUnit = isBulky ? AVG_CUFT_BULKY : AVG_CUFT_STANDARD
  const storageCuFt = storageUnits * cuFtPerUnit
  const storageRate = isBulky ? STORAGE_BULKY_PER_CUFT : STORAGE_STANDARD_PER_CUFT
  const storage = storageCuFt * storageRate

  return { prep, receiving, onboarding, storage, storageCuFt, total: prep + receiving + onboarding + storage }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function FbaSavingsCalculator() {
  const [volume, setVolume]           = useState(500)
  const [storageUnits, setStorageUnits] = useState(0)
  const [isNewClient, setIsNewClient] = useState(true)
  const [isBulky, setIsBulky]         = useState(false)
  const [months] = useState(12)

  const dg = calcDGCost(volume, storageUnits, isNewClient, isBulky, months)
  const diyLow  = volume * DIY_LOW
  const diyHigh = volume * DIY_HIGH
  const savingsLow  = diyLow  - dg.total
  const savingsHigh = diyHigh - dg.total

  const storageRate = isBulky ? STORAGE_BULKY_PER_CUFT : STORAGE_STANDARD_PER_CUFT

  return (
    <div className="bg-[#F7F6F3] border border-[#E2DFD8] rounded-2xl p-8 max-w-2xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[#B8962E] mb-3">
          FBA Prep — Savings Calculator
        </span>
        <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
          How much are you spending on FBA prep?
        </h2>
        <p className="text-[14px] text-[#737373] mt-2">
          Compare your real monthly cost — DIY vs. DeliveryGroup. FBA Prep pricing only.{" "}
          <a href="/3pl-fulfillment" className="underline underline-offset-2 hover:text-[#0D0D0D] transition-colors">
            3PL fulfillment uses different pricing →
          </a>
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-6 mb-8">

        {/* Monthly volume */}
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">
            Monthly units to prep
            <span className="ml-2 font-semibold text-[#0D0D0D]">{volume.toLocaleString()}</span>
          </label>
          <input
            type="range" min={100} max={20000} step={100}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            className="w-full accent-[#B8962E]"
          />
          <div className="flex justify-between text-[11px] text-[#A3A3A3] mt-1">
            <span>100 units</span><span>20,000 units</span>
          </div>
        </div>

        {/* Product size */}
        <div>
          <p className="text-[13px] font-medium text-[#3D3D3D] mb-2">Product size</p>
          <div className="flex gap-3">
            {(["Standard", "Bulky / Oversized"] as const).map(label => {
              const active = label === "Standard" ? !isBulky : isBulky
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setIsBulky(label !== "Standard")}
                  className={`px-4 py-2 rounded-md text-[13px] font-medium border transition-colors ${
                    active
                      ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                      : "bg-white text-[#3D3D3D] border-[#E2DFD8] hover:border-[#B8962E]"
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
          <p className="text-[11px] text-[#A3A3A3] mt-1.5">
            Affects storage rate: standard ${STORAGE_STANDARD_PER_CUFT}/cu ft · bulky ${STORAGE_BULKY_PER_CUFT}/cu ft
          </p>
        </div>

        {/* New client toggle */}
        <div>
          <p className="text-[13px] font-medium text-[#3D3D3D] mb-2">Are you a new DeliveryGroup client?</p>
          <div className="flex gap-3">
            {["Yes — within first 90 days / 5,000 units", "No — ongoing account"] .map((label, i) => {
              const active = i === 0 ? isNewClient : !isNewClient
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setIsNewClient(i === 0)}
                  className={`px-4 py-2 rounded-md text-[13px] font-medium border transition-colors ${
                    active
                      ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                      : "bg-white text-[#3D3D3D] border-[#E2DFD8] hover:border-[#B8962E]"
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
          <p className="text-[11px] text-[#A3A3A3] mt-1.5">
            New clients receive free receiving for the first 90 days <em>or</em> 5,000 cumulative units — whichever comes first. After that, $0.10/unit.
          </p>
        </div>

        {/* Storage units */}
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">
            Units in storage beyond 30 days
            <span className="ml-2 font-semibold text-[#0D0D0D]">{storageUnits.toLocaleString()}</span>
            <span className="ml-1 text-[11px] text-[#A3A3A3] font-normal">
              (≈ {dg.storageCuFt.toFixed(1)} cu ft · leave 0 if none)
            </span>
          </label>
          <input
            type="range" min={0} max={5000} step={50}
            value={storageUnits}
            onChange={e => setStorageUnits(Number(e.target.value))}
            className="w-full accent-[#B8962E]"
          />
          <div className="flex justify-between text-[11px] text-[#A3A3A3] mt-1">
            <span>0</span><span>5,000 units</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-[#E2DFD8] rounded-xl p-5">
          <p className="text-[12px] font-semibold text-[#737373] uppercase tracking-wider mb-1">DIY Prep Cost</p>
          <p className="text-2xl font-bold text-[#0D0D0D]">
            {fmtUSD(diyLow)} – {fmtUSD(diyHigh)}
          </p>
          <p className="text-[12px] text-[#A3A3A3] mt-1">per month (labor + materials)</p>
          <p className="text-[11px] text-[#A3A3A3] mt-2">$1.20–$1.80/unit verified. Excludes your time.</p>
        </div>

        <div className="bg-[#0D0D0D] rounded-xl p-5 text-white">
          <p className="text-[12px] font-semibold text-[#B8962E] uppercase tracking-wider mb-1">DeliveryGroup Cost</p>
          <p className="text-2xl font-bold">{fmtUSD(dg.total)}</p>
          <p className="text-[12px] text-[#A3A3A3] mt-1">per month, all-in</p>
          {volume < 500 && (
            <p className="text-[11px] text-[#A3A3A3] mt-2">
              Includes ${(ONBOARDING_FEE / months).toFixed(2)}/mo onboarding (one-time $350 over {months} months)
            </p>
          )}
        </div>
      </div>

      {/* Savings callout */}
      {savingsLow > 0 && (
        <div className="bg-[#B8962E]/10 border border-[#B8962E]/30 rounded-xl p-5 mb-6 text-center">
          <p className="text-[13px] font-medium text-[#0D0D0D] mb-1">Your estimated monthly savings</p>
          <p className="text-3xl font-bold text-[#B8962E]">
            {fmtUSD(savingsLow)} – {fmtUSD(savingsHigh)}
          </p>
          <p className="text-[12px] text-[#737373] mt-2">
            That&apos;s <strong>{fmtUSD(savingsLow * 12)} – {fmtUSD(savingsHigh * 12)}</strong> per year back in your pocket.
          </p>
        </div>
      )}

      {/* Cost breakdown */}
      <div className="space-y-2 mb-8">
        <p className="text-[12px] font-semibold text-[#3D3D3D] uppercase tracking-wider">Cost breakdown — DeliveryGroup</p>
        <div className="divide-y divide-[#E2DFD8] border border-[#E2DFD8] rounded-lg overflow-hidden bg-white text-[13px]">
          <div className="flex justify-between px-4 py-3">
            <span className="text-[#737373]">Prep ({volume.toLocaleString()} units × $0.50)</span>
            <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.prep)}</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span className="text-[#737373]">
              Receiving {isNewClient
                ? "(free — Tier 1: first 90 days / 5,000 units)"
                : `(${volume.toLocaleString()} units × $0.10 — Tier 2)`}
            </span>
            <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.receiving)}</span>
          </div>
          {storageUnits > 0 && (
            <div className="flex justify-between px-4 py-3">
              <span className="text-[#737373]">
                Storage ({dg.storageCuFt.toFixed(1)} cu ft × ${storageRate}/cu ft)
              </span>
              <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.storage)}</span>
            </div>
          )}
          {volume < 500 && (
            <div className="flex justify-between px-4 py-3">
              <span className="text-[#737373]">Onboarding fee (one-time $350, amortized)</span>
              <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.onboarding)}</span>
            </div>
          )}
          <div className="flex justify-between px-4 py-3 bg-[#F7F6F3]">
            <span className="font-semibold text-[#0D0D0D]">Total / month</span>
            <span className="font-bold text-[#0D0D0D]">{fmtUSD(dg.total)}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/quote"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
        >
          Get your exact quote →
        </a>
        <p className="text-[12px] text-[#A3A3A3] mt-3">No commitment. Response within 1 business day.</p>
      </div>

      <p className="text-[11px] text-[#A3A3A3] text-center mt-4">
        FBA Prep pricing only. Storage estimated using avg cu ft per unit; exact charges based on your product dimensions.
        For 3PL fulfillment pricing, <a href="/quote" className="underline underline-offset-2">contact us for a custom quote</a>.
      </p>
    </div>
  )
}
