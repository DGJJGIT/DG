import Link from "next/link"
import { MapPin, Phone, Mail, Share2, ExternalLink, Globe } from "lucide-react"

const footerNav = {
  Services: [
    { label: "Amazon FBA Prep", href: "/amazon-fba-prep" },
    { label: "3PL Fulfillment", href: "/3pl-fulfillment" },
    { label: "Last-Mile Delivery", href: "/services/last-mile-delivery" },
    { label: "Expedited Shipping", href: "/services/expedited-shipping" },
  ],
  Industries: [
    { label: "E-Commerce", href: "/industries/ecommerce" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Supplements", href: "/industries/supplements" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
  ],
  Resources: [
    { label: "Get a Quote", href: "/quote" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Integrations", href: "/integrations" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-white rounded-md" />
                <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold tracking-tight text-[#0D0D0D] leading-none">
                  DG
                </span>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#B8962E] rounded-tl-sm rounded-br-[3px]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-[14px] tracking-tight text-white">
                  Delivery
                </span>
                <span className="font-semibold text-[14px] tracking-tight text-white">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-[13.5px] text-[#737373] leading-relaxed max-w-[260px] mb-6">
              Premium last-mile delivery and logistics solutions for businesses that demand precision, reliability, and a superior customer experience.
            </p>
            <div className="space-y-3">
              <a href="tel:+18003702105" className="flex items-center gap-2.5 text-[13px] text-[#737373] hover:text-white transition-colors">
                <Phone size={14} className="text-[#B8962E]" />
                1-800-370-2105
              </a>
              <a href="mailto:info@deliverygroupinc.com" className="flex items-center gap-2.5 text-[13px] text-[#737373] hover:text-white transition-colors">
                <Mail size={14} className="text-[#B8962E]" />
                info@deliverygroupinc.com
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-[#737373]">
                <MapPin size={14} className="text-[#B8962E] mt-0.5 shrink-0" />
                <span>7587 Empire Dr<br />Florence, KY 41042</span>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#A3A3A3] mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#737373] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#4D4D4D]">
            © {new Date().getFullYear()} Delivery Group Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[12px] text-[#4D4D4D] hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[12px] text-[#4D4D4D] hover:text-white transition-colors">Terms</Link>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" aria-label="LinkedIn" className="text-[#4D4D4D] hover:text-white transition-colors"><Share2 size={15} /></a>
              <a href="#" aria-label="Twitter" className="text-[#4D4D4D] hover:text-white transition-colors"><ExternalLink size={15} /></a>
              <a href="#" aria-label="Facebook" className="text-[#4D4D4D] hover:text-white transition-colors"><Globe size={15} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
