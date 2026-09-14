"use client"

import { useState } from "react"

// ─── Pricing constants ────────────────────────────────────────────────────────
// TODO: confirm TIER1_THRESHOLD and STORAGE_RATE_PER_UNIT with client before launch.
const PREP_COST_PER_UNIT = 0.50          // DG standard FBA prep
const RECEIVING_FREE_THRESHOLD = 500     // TODO: confirm Tier 1 threshold with client
const RECEIVING_COST_PER_UNIT = 0.10    // per unit above Tier 1
const ONBOARDING_FEE = 350              // one-time, only if monthly volume < 500 units
const STORAGE_RATE_PER_UNIT = 0.04      // TODO: confirm with client — placeholder
const DIY_LOW = 1.20                     // DIY cost range low (verified: labor + materials)
const DIY_HIGH = 1.80                    // DIY cost range high (verified: labor + materials)

// ─── Types ────────────────────────────────────────────────────────────────────
type Tier = "small" | "mid" | "large"

function getTier(volume: number): Tier {
  if (volume < 500) return "small"
  if (volume <= RECEIVING_FREE_THRESHOLD) return "small"
  if (volume <= 10000) return "mid"
  return "large"
}

function calcDGCost(volume: number, months: number, storageUnits: number): {
  prep: number; receiving: number; onboarding: number; storage: number; total: number
} {
  const tier = getTier(volume)
  const prep = volume * PREP_COST_PER_UNIT
  const receiving = volume <= RECEIVING_FREE_THRESHOLD
    ? 0
    : (volume - RECEIVING_FREE_THRESHOLD) * RECEIVING_COST_PER_UNIT
  const onboarding = tier === "small" ? ONBOARDING_FEE / months : 0  // amortized over term
  const storage = storageUnits * STORAGE_RATE_PER_UNIT
  return { prep, receiving, onboarding, storage, total: prep + receiving + onboarding + storage }
}

function fmtUSD(n: number) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function FbaSavingsCalculator() {
  const [volume, setVolume] = useState(500)
  const [storageUnits, setStorageUnits] = useState(0)
  const [months, setMonths] = useState(12)
  const [submitted, setSubmitted] = useState(false)

  const diy = { low: volume * DIY_LOW, high: volume * DIY_HIGH }
  const dg = calcDGCost(volume, months, storageUnits)
  const savingsLow = diy.low - dg.total
  const savingsHigh = diy.high - dg.total
  const annualSavingsLow = savingsLow * 12
  const annualSavingsHigh = savingsHigh * 12
  const tier = getTier(volume)

  return (
    <div className="bg-[#F7F6F3] border border-[#E2DFD8] rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[#B8962E] mb-3">
          FBA Savings Calculator
        </span>
        <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
          How much are you spending on FBA prep?
        </h2>
        <p className="text-[14px] text-[#737373] mt-2">
          See your monthly cost at DeliveryGroup vs. handling it yourself.
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

        {/* Storage units */}
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">
            Units in storage after 30 days
            <span className="ml-2 font-semibold text-[#0D0D0D]">{storageUnits.toLocaleString()}</span>
            <span className="ml-1 text-[11px] text-[#A3A3A3] font-normal">(leave 0 if none)</span>
          </label>
          <input
            type="range" min={0} max={5000} step={50}
            value={storageUnits}
            onChange={e => setStorageUnits(Number(e.target.value))}
            className="w-full accent-[#B8962E]"
          />
          <div className="flex justify-between text-[11px] text-[#A3A3A3] mt-1">
            <span>0</span><span>5,000</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {/* DIY cost */}
        <div className="bg-white border border-[#E2DFD8] rounded-xl p-5">
          <p className="text-[12px] font-semibold text-[#737373] uppercase tracking-wider mb-1">DIY Prep Cost</p>
          <p className="text-2xl font-bold text-[#0D0D0D]">
            {fmtUSD(diy.low)} – {fmtUSD(diy.high)}
          </p>
          <p className="text-[12px] text-[#A3A3A3] mt-1">per month (labor + materials)</p>
          <p className="text-[11px] text-[#A3A3A3] mt-2">
            Verified range: $1.20–$1.80/unit. Excludes your time.
          </p>
        </div>

        {/* DG cost */}
        <div className="bg-[#0D0D0D] rounded-xl p-5 text-white">
          <p className="text-[12px] font-semibold text-[#B8962E] uppercase tracking-wider mb-1">DeliveryGroup Cost</p>
          <p className="text-2xl font-bold">{fmtUSD(dg.total)}</p>
          <p className="text-[12px] text-[#A3A3A3] mt-1">per month, all-in</p>
          {tier === "small" && (
            <p className="text-[11px] text-[#A3A3A3] mt-2">
              Includes ${(ONBOARDING_FEE / months).toFixed(2)}/mo onboarding (one-time $350 amortized over {months} months)
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
            That's <strong>{fmtUSD(annualSavingsLow)} – {fmtUSD(annualSavingsHigh)}</strong> per year — back in your pocket.
          </p>
        </div>
      )}

      {/* Cost breakdown */}
      <div className="space-y-2 mb-8">
        <p className="text-[12px] font-semibold text-[#3D3D3D] uppercase tracking-wider">DeliveryGroup cost breakdown</p>
        <div className="divide-y divide-[#E2DFD8] border border-[#E2DFD8] rounded-lg overflow-hidden bg-white text-[13px]">
          <div className="flex justify-between px-4 py-3">
            <span className="text-[#737373]">Standard prep ({volume.toLocaleString()} units × $0.50)</span>
            <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.prep)}</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span className="text-[#737373]">
              Receiving {volume <= RECEIVING_FREE_THRESHOLD ? "(free — Tier 1)" : `(${(volume - RECEIVING_FREE_THRESHOLD).toLocaleString()} units × $0.10)`}
            </span>
            <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.receiving)}</span>
          </div>
          {storageUnits > 0 && (
            <div className="flex justify-between px-4 py-3">
              <span className="text-[#737373]">Storage after 30 days ({storageUnits.toLocaleString()} units)</span>
              <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.storage)}</span>
            </div>
          )}
          {tier === "small" && (
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
      {!submitted ? (
        <div className="text-center">
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
          >
            Get your exact quote →
          </a>
          <p className="text-[12px] text-[#A3A3A3] mt-3">No commitment. Response within 1 business day.</p>
        </div>
      ) : (
        <p className="text-center text-[14px] text-[#737373]">We'll be in touch within 1 business day.</p>
      )}

      <p className="text-[11px] text-[#A3A3A3] text-center mt-4">
        Estimates based on standard prep pricing. Storage rate is an estimate pending confirmation. Contact us for a precise quote based on your product mix.
      </p>
    </div>
  )
}
