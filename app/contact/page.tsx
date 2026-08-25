import { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Delivery Group Inc. to discuss your logistics needs, get a quote, or speak with a delivery specialist.",
  alternates: { canonical: "https://deliverygroupinc.com/contact" },
}

const offices = [
  { city: "Florence (HQ)", address: "7587 Empire Dr", state: "Florence, KY 41042", phone: "1-800-370-2105" },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Get in Touch</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5">
            Let's talk logistics.
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[480px] leading-relaxed">
            Our specialists are ready to discuss your requirements, answer your questions, and build a proposal tailored to your operation.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight mb-8">Send a message</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#0D0D0D] tracking-tight mb-6">Direct contact</h2>
                <div className="space-y-4">
                  <a href="tel:+18003702105" className="flex items-center gap-4 p-5 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8] hover:border-[#B8962E] transition-colors group">
                    <div className="w-10 h-10 rounded-md bg-white border border-[#E2DFD8] flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#B8962E]" />
                    </div>
                    <div>
                      <div className="text-[12px] text-[#737373] font-medium uppercase tracking-wide">Phone</div>
                      <div className="text-[14.5px] font-medium text-[#0D0D0D] group-hover:text-[#B8962E] transition-colors">1-800-370-2105</div>
                    </div>
                  </a>
                  <a href="mailto:info@deliverygroupinc.com" className="flex items-center gap-4 p-5 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8] hover:border-[#B8962E] transition-colors group">
                    <div className="w-10 h-10 rounded-md bg-white border border-[#E2DFD8] flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#B8962E]" />
                    </div>
                    <div>
                      <div className="text-[12px] text-[#737373] font-medium uppercase tracking-wide">Email</div>
                      <div className="text-[14.5px] font-medium text-[#0D0D0D] group-hover:text-[#B8962E] transition-colors">info@deliverygroupinc.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-5 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8]">
                    <div className="w-10 h-10 rounded-md bg-white border border-[#E2DFD8] flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-[#B8962E]" />
                    </div>
                    <div>
                      <div className="text-[12px] text-[#737373] font-medium uppercase tracking-wide">Hours</div>
                      <div className="text-[14px] font-medium text-[#0D0D0D]">7:00 AM – 7:00 PM EST</div>
                      <div className="text-[13px] text-[#737373]">Monday – Friday</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-[#0D0D0D] mb-5">Office Locations</h3>
                <div className="space-y-4">
                  {offices.map(o => (
                    <div key={o.city} className="flex gap-3">
                      <MapPin size={15} className="text-[#B8962E] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[13.5px] font-semibold text-[#0D0D0D]">{o.city}</div>
                        <div className="text-[13px] text-[#737373]">{o.address}</div>
                        <div className="text-[13px] text-[#737373]">{o.state}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
