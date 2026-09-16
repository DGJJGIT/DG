"use client"

import { useState, useEffect } from "react"

const TURNSTILE_SITEKEY = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY
const CALENDLY = "https://calendly.com/chris-l-deliverygroupinc/15min"

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [prefillService, setPrefillService] = useState("")
  const [prefillVolume, setPrefillVolume] = useState("")

  // Pre-fill service + volume when arriving from the calculator (?from=calculator)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    if (q.get("from") === "calculator") {
      if (q.get("service")) setPrefillService(q.get("service")!)
      if (q.get("volume"))  setPrefillVolume(q.get("volume")!)
    }
  }, [])

  // Freeze first-touch attribution (UTM + referrer) on first visit (card #115).
  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem("dg_first_touch")) return
    const q = new URLSearchParams(window.location.search)
    localStorage.setItem("dg_first_touch", JSON.stringify({
      utm_source: q.get("utm_source") || "",
      utm_medium: q.get("utm_medium") || "",
      utm_campaign: q.get("utm_campaign") || "",
      utm_term: q.get("utm_term") || "",
      utm_content: q.get("utm_content") || "",
      first_touch_referrer: document.referrer || "",
      first_touch_landing: window.location.pathname || "",
    }))
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      volume: (form.elements.namedItem("volume") as HTMLSelectElement).value,
      geography: (form.elements.namedItem("geography") as HTMLInputElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
      // Honeypot — humans leave this blank; bots fill it
      bot_field: (form.elements.namedItem("bot_field") as HTMLInputElement | null)?.value || "",
      // Turnstile token — present when widget is active and solved
      cfToken: (form.elements.namedItem("cf-turnstile-response") as HTMLInputElement | null)?.value || "",
      // Attribution (card #115): which SEO page produced the lead + first-touch/UTM.
      seoService: new URLSearchParams(window.location.search).get("service") || "",
      ...(() => { try { return JSON.parse(localStorage.getItem("dg_first_touch") || "{}") } catch { return {} } })(),
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || "Something went wrong")
      }
      setStatus("success")
      form.reset()
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-[#B8962E]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#B8962E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">Request received</h3>
        <p className="text-[14px] text-[#737373] mb-6">We'll have a custom proposal ready within one business day.</p>
        <div className="border-t border-[#E2DFD8] pt-6">
          <p className="text-[13px] text-[#737373] mb-3">Prefer to talk now?</p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#B8962E] text-white text-[13.5px] font-medium rounded-md hover:bg-[#A0801F] transition-colors"
          >
            Book a call now →
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        name="bot_field"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">First Name *</label>
          <input name="firstName" required type="text" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Last Name *</label>
          <input name="lastName" required type="text" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Work Email *</label>
        <input name="email" required type="email" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Company *</label>
          <input name="company" required type="text" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Phone</label>
          <input name="phone" type="tel" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Services Needed *</label>
        <select name="service" required value={prefillService} onChange={e => setPrefillService(e.target.value)} className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors">
          <option value="">Select primary service</option>
          <optgroup label="FBA Prep">
            <option value="fba-prep-standard">Amazon FBA Prep — Standard</option>
            <option value="fba-prep-apparel">Amazon FBA Prep — Apparel / Footwear</option>
            <option value="fba-prep-bulky">Amazon FBA Prep — Bulky / Oversized</option>
            <option value="fba-prep-hazmat">Amazon FBA Prep — Hazmat / Dangerous Goods</option>
          </optgroup>
          <optgroup label="Fulfillment &amp; 3PL">
            <option value="3pl-fulfillment">3PL / eCommerce Fulfillment</option>
            <option value="dtc-multichannel">DTC + Multi-Channel (Amazon + TikTok Shop + WFS)</option>
            <option value="subscription-box">Subscription Box Fulfillment</option>
            <option value="kitting-bundling">Kitting &amp; Bundling</option>
          </optgroup>
          <optgroup label="Delivery &amp; Logistics">
            <option value="last-mile">Last-Mile Delivery</option>
            <option value="white-glove">White Glove Delivery</option>
            <option value="same-day-courier">Same-Day Courier</option>
            <option value="expedited-freight">Expedited Freight</option>
          </optgroup>
          <optgroup label="Reverse Logistics">
            <option value="returns-management">Returns Management / Reverse Logistics</option>
            <option value="re-prep">Returns Re-Prep for FBA</option>
          </optgroup>
          <option value="multiple">Multiple Services / Not Sure</option>
        </select>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Monthly Unit Volume *</label>
        <select name="volume" required value={prefillVolume} onChange={e => setPrefillVolume(e.target.value)} className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors">
          <option value="">Select your monthly volume</option>
          <option value="under-500">Under 500 units/month</option>
          <option value="500-2000">500 – 2,000 units/month</option>
          <option value="2000-10000">2,000 – 10,000 units/month</option>
          <option value="10000-50000">10,000 – 50,000 units/month</option>
          <option value="50000+">50,000+ units/month</option>
        </select>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Delivery Geography</label>
        <input name="geography" type="text" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors" placeholder="e.g. Nationwide, Northeast US, Chicago metro..." />
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Additional Requirements</label>
        <textarea name="notes" rows={4} className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors resize-none" placeholder="Special handling requirements, integration needs, timeline, etc." />
      </div>
      {/* Cloudflare Turnstile — renders when NEXT_PUBLIC_TURNSTILE_SITEKEY is set */}
      {TURNSTILE_SITEKEY && (
        <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_SITEKEY}
          data-theme="light"
          data-size="normal"
        />
      )}
      {status === "error" && (
        <p className="text-[13px] text-red-500">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting…" : "Submit Request"}
      </button>
      <p className="text-[12px] text-[#A3A3A3] text-center">We'll respond within 1 business day. No commitment required.</p>
    </form>
  )
}
