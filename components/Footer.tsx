import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const clusterHubs = [
  { label: "Fulfillment Center", href: "/fulfillment-center" },
  { label: "3PL Fulfillment", href: "/3pl-fulfillment" },
  { label: "White Glove Delivery", href: "/white-glove-delivery" },
  { label: "Returns Management", href: "/returns-management" },
  { label: "Hazmat Trucking", href: "/hazmat-trucking-companies" },
  { label: "Amazon FBA Prep", href: "/amazon-fba-prep" },
  { label: "View all 44 services →", href: "/services" },
]

const footerNav = {
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

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.04a8.28 8.28 0 004.84 1.55V7.14a4.85 4.85 0 01-1.07-.45z" />
    </svg>
  )
}

function PinterestIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
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
                <span className="font-semibold text-[14px] tracking-tight text-white">Delivery</span>
                <span className="font-semibold text-[14px] tracking-tight text-white">Group</span>
              </div>
            </Link>
            <p className="text-[13.5px] text-[#737373] leading-relaxed max-w-[260px] mb-6">
              Premium last-mile delivery and logistics solutions for businesses that demand precision, reliability, and a superior customer experience.
            </p>
            <div className="space-y-3 mb-6">
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
            {/* Social icons */}
            <div className="flex items-center gap-3.5 flex-wrap">
              <a href="https://www.instagram.com/delivery.group.inc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#737373] hover:text-white transition-colors">
                <InstagramIcon size={15} />
              </a>
              <a href="https://www.linkedin.com/company/106558314" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#737373] hover:text-white transition-colors">
                <LinkedinIcon size={15} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574137717976" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#737373] hover:text-white transition-colors">
                <FacebookIcon size={15} />
              </a>
              <a href="https://www.youtube.com/@DeliveryGroupInc" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#737373] hover:text-white transition-colors">
                <YoutubeIcon size={15} />
              </a>
              <a href="https://x.com/deliverygr_inc" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-[#737373] hover:text-white transition-colors">
                <XIcon size={15} />
              </a>
              <a href="https://www.tiktok.com/@deliverygroup0" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-[#737373] hover:text-white transition-colors">
                <TikTokIcon size={15} />
              </a>
              <a href="https://www.pinterest.com/deliverygroupinc/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-[#737373] hover:text-white transition-colors">
                <PinterestIcon size={15} />
              </a>
            </div>
          </div>

          {/* Services column — cluster hubs directory */}
          <div>
            <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#A3A3A3] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {clusterHubs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-[#737373] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other nav columns */}
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#A3A3A3] mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] text-[#737373] hover:text-white transition-colors">
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
          </div>
        </div>
      </div>
    </footer>
  )
}
