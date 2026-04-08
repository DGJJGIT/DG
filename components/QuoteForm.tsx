"use client"

import { useState } from "react"

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

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
        <p className="text-[14px] text-[#737373]">We'll have a custom proposal ready within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <select name="service" required className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors">
          <option value="">Select primary service</option>
          <option>Amazon FBA Prep</option>
          <option>3PL Fulfillment</option>
          <option>Last-Mile Delivery</option>
          <option>Expedited Shipping</option>
          <option>Multiple Services</option>
        </select>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Monthly Shipment Volume *</label>
        <select name="volume" required className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] focus:outline-none focus:border-[#B8962E] transition-colors">
          <option value="">Select volume range</option>
          <option>Under 500 shipments/month</option>
          <option>500 – 2,000 shipments/month</option>
          <option>2,000 – 10,000 shipments/month</option>
          <option>10,000 – 50,000 shipments/month</option>
          <option>50,000+ shipments/month</option>
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
