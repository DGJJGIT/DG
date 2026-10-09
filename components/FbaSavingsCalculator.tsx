"use client"

import { useState } from "react"

// ─── Confirmed pricing, FBA Prep only (3PL has a separate structure) ─────────
// Mirrors the published /amazon-fba-prep rate card. Tier 1 intro applies to the first 90 days or the intro unit
// cap (whichever comes first); after that Tier 2 applies at any volume, and Tier 3 at the volume threshold.
const RATES = {
  standard: { intro: 0.50, tier2: 0.65, tier3: 0.45, introCap: 5000, tier3Min: 5000, receivingTier2: 0.10 },
  bulky:    { intro: 2.50, tier2: 3.00, tier3: 2.25, introCap: 2000, tier3Min: 1000, receivingTier2: 0.20 },
} as const
const INTRO_MONTHS_MAX = 3            // 90 days
const ONBOARDING_FEE   = 350          // one-time, new accounts under 500 units/month

// Storage, per cubic foot / month (FBA Prep)
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
  avgPrepRate: number
}

// Monthly cost in either the intro month (new client) or an ongoing month.
function calcDGCost(
  volume: number,
  storageUnits: number,
  isNewClient: boolean,
  isBulky: boolean,
  months: number,
): CalcResult {
  const r = isBulky ? RATES.bulky : RATES.standard
  const volumeTier = volume >= r.tier3Min
  const ongoingRate = volumeTier ? r.tier3 : r.tier2
  const ongoingReceiving = volumeTier ? 0 : r.receivingTier2

  let prep: number
  let receiving: number
  if (isNewClient) {
    // intro rate up to the intro unit cap; any units above it already fall under the ongoing tiers
    const introUnits = Math.min(volume, r.introCap)
    const rest = volume - introUnits
    prep = introUnits * r.intro + rest * ongoingRate
    receiving = rest * ongoingReceiving
  } else {
    prep = volume * ongoingRate
    receiving = volume * ongoingReceiving
  }

  // One-time onboarding fee for new accounts under 500 units/month, shown amortized over the period
  const onboarding = isNewClient && volume < 500 ? ONBOARDING_FEE / months : 0

  // Storage: convert units → cubic feet, then apply rate by product type
  const cuFtPerUnit = isBulky ? AVG_CUFT_BULKY : AVG_CUFT_STANDARD
  const storageCuFt = storageUnits * cuFtPerUnit
  const storageRate = isBulky ? STORAGE_BULKY_PER_CUFT : STORAGE_STANDARD_PER_CUFT
  const storage = storageCuFt * storageRate

  return { prep, receiving, onboarding, storage, storageCuFt, total: prep + receiving + onboarding + storage, avgPrepRate: volume ? prep / volume : 0 }
}

// First-year DG cost: intro months (up to 90 days or the intro unit cap) then ongoing months.
function firstYearCost(volume: number, storageUnits: number, isNewClient: boolean, isBulky: boolean): number {
  const ongoing = calcDGCost(volume, storageUnits, false, isBulky, 12).total
  if (!isNewClient) return ongoing * 12
  const r = isBulky ? RATES.bulky : RATES.standard
  const introMonths = Math.min(INTRO_MONTHS_MAX, volume ? r.introCap / volume : INTRO_MONTHS_MAX)
  const intro = calcDGCost(volume, storageUnits, true, isBulky, 12)
  const introMonthly = intro.total - intro.onboarding
  return introMonths * introMonthly + (12 - introMonths) * ongoing + (volume < 500 ? ONBOARDING_FEE : 0)
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
  const yearDG = firstYearCost(volume, storageUnits, isNewClient, isBulky)
  const yearSavingsLow  = diyLow * 12 - yearDG
  const yearSavingsHigh = diyHigh * 12 - yearDG

  const storageRate = isBulky ? STORAGE_BULKY_PER_CUFT : STORAGE_STANDARD_PER_CUFT

  return (
    <div className="bg-[#F7F6F3] border border-[#E2DFD8] rounded-2xl p-8 max-w-2xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[#B8962E] mb-3">
          FBA Prep, Savings Calculator
        </span>
        <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight">
          How much are you spending on FBA prep?
        </h2>
        <p className="text-[14px] text-[#737373] mt-2">
          Compare your real monthly cost, DIY vs. DeliveryGroup. FBA Prep pricing only.{" "}
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
            {[`Yes, within first 90 days / ${(isBulky ? RATES.bulky : RATES.standard).introCap.toLocaleString()} units`, "No, ongoing account"] .map((label, i) => {
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
            New clients receive free receiving for the first 90 days <em>or</em> 5,000 cumulative units, whichever comes first. After that, $0.10/unit.
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
          <p className="text-[12px] text-[#A3A3A3] mt-1">per month</p>
          {isNewClient && volume < 500 && (
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
            Over {isNewClient ? "your first year" : "a year"}, that&apos;s <strong>{fmtUSD(yearSavingsLow)} – {fmtUSD(yearSavingsHigh)}</strong>{isNewClient ? ", including the intro period and then ongoing rates" : ""}.
          </p>
        </div>
      )}

      {/* Cost breakdown */}
      <div className="space-y-2 mb-8">
        <p className="text-[12px] font-semibold text-[#3D3D3D] uppercase tracking-wider">Cost breakdown, DeliveryGroup</p>
        <div className="divide-y divide-[#E2DFD8] border border-[#E2DFD8] rounded-lg overflow-hidden bg-white text-[13px]">
          <div className="flex justify-between px-4 py-3">
            <span className="text-[#737373]">Prep ({volume.toLocaleString()} units × ${dg.avgPrepRate.toFixed(2)}{isNewClient ? (volume > (isBulky ? RATES.bulky : RATES.standard).introCap ? " blended: intro rate up to the cap, then ongoing" : " intro rate") : volume >= (isBulky ? RATES.bulky : RATES.standard).tier3Min ? " volume rate" : " ongoing rate"})</span>
            <span className="font-medium text-[#0D0D0D]">{fmtUSD(dg.prep)}</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span className="text-[#737373]">
              Receiving {dg.receiving === 0
                ? (isNewClient ? "(free during the intro period)" : "(free at volume rates)")
                : `(at $${(isBulky ? RATES.bulky : RATES.standard).receivingTier2.toFixed(2)}/unit)`}
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
          {isNewClient && volume < 500 && (
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

      {/* CTA, passes calculator state to quote form as URL params */}
      <div className="text-center">
        <a
          href={(() => {
            const bucket = volume < 500 ? "under-500"
              : volume < 2000 ? "500-2000"
              : volume < 10000 ? "2000-10000"
              : volume < 50000 ? "10000-50000"
              : "50000+"
            const svc = isBulky ? "fba-prep-bulky" : "fba-prep-standard"
            return `/quote?service=${svc}&volume=${bucket}&from=calculator`
          })()}
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
