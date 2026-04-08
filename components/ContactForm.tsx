"use client"

import { useState } from "react"

export default function ContactForm() {
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
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="text-xl font-semibold text-[#0D0D0D] mb-2">Message sent</h3>
        <p className="text-[14px] text-[#737373]">We'll get back to you within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">First Name</label>
          <input name="firstName" type="text" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] text-[#0D0D0D] placeholder-[#A3A3A3] focus:outline-none focus:border-[#B8962E] transition-colors" placeholder="First name" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Last Name</label>
          <input name="lastName" type="text" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] text-[#0D0D0D] placeholder-[#A3A3A3] focus:outline-none focus:border-[#B8962E] transition-colors" placeholder="Last name" />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Work Email</label>
        <input name="email" type="email" required className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] text-[#0D0D0D] placeholder-[#A3A3A3] focus:outline-none focus:border-[#B8962E] transition-colors" placeholder="you@company.com" />
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Company</label>
        <input name="company" type="text" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] text-[#0D0D0D] placeholder-[#A3A3A3] focus:outline-none focus:border-[#B8962E] transition-colors" placeholder="Company name" />
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Subject</label>
        <select name="subject" className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] text-[#0D0D0D] focus:outline-none focus:border-[#B8962E] transition-colors">
          <option value="">Select a subject</option>
          <option>Get a Quote</option>
          <option>Service Information</option>
          <option>Partnership Inquiry</option>
          <option>Technical Support</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-[#3D3D3D] mb-2">Message</label>
        <textarea name="message" rows={5} className="w-full px-4 py-2.5 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[14px] text-[#0D0D0D] placeholder-[#A3A3A3] focus:outline-none focus:border-[#B8962E] transition-colors resize-none" placeholder="Tell us about your logistics needs..." />
      </div>
      {status === "error" && (
        <p className="text-[13px] text-red-500">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-[#0D0D0D] text-white text-[14px] font-medium rounded-md hover:bg-[#1a1a1a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}
