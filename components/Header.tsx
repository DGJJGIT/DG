"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const nav = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Amazon FBA Prep", href: "/amazon-fba-prep" },
      { label: "3PL Fulfillment", href: "/3pl-fulfillment" },
      { label: "Last-Mile Delivery", href: "/services/last-mile-delivery" },
      { label: "Expedited Shipping", href: "/services/expedited-shipping" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "E-Commerce", href: "/industries/ecommerce" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Supplements", href: "/industries/supplements" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2DFD8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#0D0D0D] rounded-md" />
              <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold tracking-tight text-[#B8962E] leading-none">
                DG
              </span>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#B8962E] rounded-tl-sm rounded-br-[3px]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-[14px] tracking-tight text-[#0D0D0D]">
                Delivery
              </span>
              <span className="font-semibold text-[14px] tracking-tight text-[#0D0D0D]">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium text-[#3D3D3D] hover:text-[#0D0D0D] transition-colors rounded-md hover:bg-[#F7F6F3]"
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} className="text-[#A3A3A3]" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1.5 w-52">
                    <div className="bg-white rounded-lg border border-[#E2DFD8] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.1)] py-1.5 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[13px] text-[#3D3D3D] hover:text-[#0D0D0D] hover:bg-[#F7F6F3] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18003702105"
              className="text-[13.5px] font-medium text-[#3D3D3D] hover:text-[#0D0D0D] transition-colors"
            >
              1-800-370-2105
            </a>
            <Link
              href="/quote"
              className="px-4 py-2 bg-[#0D0D0D] text-white text-[13px] font-medium rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#0D0D0D]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2DFD8]">
          <div className="px-6 py-4 space-y-0.5">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-[14px] font-medium text-[#0D0D0D]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-1 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-[13px] text-[#737373] hover:text-[#0D0D0D]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#E2DFD8] flex flex-col gap-2">
              <Link href="/contact" className="block py-2.5 text-[14px] font-medium text-[#0D0D0D]" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link
                href="/quote"
                className="block text-center py-2.5 bg-[#0D0D0D] text-white text-[13.5px] font-medium rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
