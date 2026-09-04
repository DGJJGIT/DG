"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Package, Warehouse, Truck, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react"

const servicesClusters = [
  {
    label: "Fulfillment",
    icon: Package,
    hub: { label: "Fulfillment Center", href: "/fulfillment-center" },
    spokes: [
      { label: "Pick & Pack Services", href: "/pick-and-pack-services" },
      { label: "Kitting Services", href: "/kitting-services" },
      { label: "Subscription Box", href: "/subscription-box-fulfillment" },
      { label: "TikTok Shop", href: "/tiktok-shop-fulfillment" },
      { label: "Small Business", href: "/small-business-fulfillment" },
      { label: "Apparel Fulfillment", href: "/apparel-fulfillment" },
    ],
  },
  {
    label: "3PL & Warehousing",
    icon: Warehouse,
    hub: { label: "3PL Fulfillment", href: "/3pl-fulfillment" },
    spokes: [
      { label: "3PL Warehouse", href: "/3pl-warehouse" },
      { label: "3PL Warehousing", href: "/3pl-warehousing" },
      { label: "3PL WMS", href: "/3pl-wms" },
      { label: "eCommerce 3PL", href: "/3pl-ecommerce-fulfillment" },
      { label: "Small Business 3PL", href: "/3pl-for-small-business" },
      { label: "Liquidation Pallets", href: "/liquidation-pallets" },
    ],
  },
  {
    label: "Courier & Delivery",
    icon: Truck,
    hub: { label: "White Glove Delivery", href: "/white-glove-delivery" },
    spokes: [
      { label: "Same-Day Courier", href: "/same-day-courier" },
      { label: "Last-Mile Delivery", href: "/last-mile-delivery" },
      { label: "Expedited Freight", href: "/expedited-freight" },
      { label: "Cross Docking", href: "/cross-docking" },
      { label: "Amazon FBA Prep", href: "/amazon-fba-prep" },
      { label: "Courier Services", href: "/courier-services" },
    ],
  },
  {
    label: "Returns & Reverse",
    icon: RefreshCw,
    hub: { label: "Returns Management", href: "/returns-management" },
    spokes: [
      { label: "Reverse Logistics", href: "/reverse-logistics-services" },
      { label: "eCommerce Returns", href: "/ecommerce-returns-management" },
      { label: "Returns Processing", href: "/returns-processing" },
      { label: "Reverse Logistics Co.", href: "/reverse-logistics-company" },
      { label: "Returns Solution", href: "/ecommerce-returns-solution" },
    ],
  },
  {
    label: "Hazmat",
    icon: AlertTriangle,
    hub: { label: "Hazmat Trucking", href: "/hazmat-trucking-companies" },
    spokes: [
      { label: "Hazmat Storage", href: "/hazmat-storage" },
      { label: "Hazmat Warehouse", href: "/hazmat-warehouse" },
      { label: "Hazmat Logistics", href: "/hazmat-logistics" },
      { label: "Hazmat 3PL", href: "/hazmat-3pl" },
      { label: "Dangerous Goods", href: "/dangerous-goods-warehouse" },
    ],
  },
]

const otherNav = [
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
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMega = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current)
    setMegaOpen(true)
    setOpenDropdown(null)
  }
  const closeMega = () => {
    megaCloseTimer.current = setTimeout(() => setMegaOpen(false), 200)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2DFD8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => { setMegaOpen(false); setMobileOpen(false) }}>
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#0D0D0D] rounded-md" />
              <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold tracking-tight text-[#B8962E] leading-none">
                DG
              </span>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#B8962E] rounded-tl-sm rounded-br-[3px]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-[14px] tracking-tight text-[#0D0D0D]">Delivery</span>
              <span className="font-semibold text-[14px] tracking-tight text-[#0D0D0D]">Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services mega-menu trigger */}
            <div
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium text-[#3D3D3D] hover:text-[#0D0D0D] transition-colors rounded-md hover:bg-[#F7F6F3]"
              >
                Services
                <ChevronDown size={13} className={`text-[#A3A3A3] transition-transform duration-150 ${megaOpen ? "rotate-180" : ""}`} />
              </Link>
            </div>

            {/* Other nav items */}
            {otherNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => { item.children ? setOpenDropdown(item.label) : null; setMegaOpen(false) }}
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
            <a href="tel:+18003702105" className="text-[13.5px] font-medium text-[#3D3D3D] hover:text-[#0D0D0D] transition-colors">
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

      {/* Mega-menu — full-width panel below header */}
      {megaOpen && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 bg-white border-t border-[#E2DFD8] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] z-40"
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-7">
            <div className="grid grid-cols-5 gap-6">
              {servicesClusters.map((cluster) => {
                const Icon = cluster.icon
                return (
                  <div key={cluster.label}>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Icon size={14} className="text-[#B8962E] shrink-0" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A3A3A3]">
                        {cluster.label}
                      </span>
                    </div>
                    <Link
                      href={cluster.hub.href}
                      className="block text-[13.5px] font-semibold text-[#0D0D0D] hover:text-[#B8962E] transition-colors mb-2.5"
                      onClick={() => setMegaOpen(false)}
                    >
                      {cluster.hub.label}
                    </Link>
                    <ul className="space-y-1.5 mb-3">
                      {cluster.spokes.map((spoke) => (
                        <li key={spoke.href}>
                          <Link
                            href={spoke.href}
                            className="text-[12.5px] text-[#737373] hover:text-[#0D0D0D] transition-colors"
                            onClick={() => setMegaOpen(false)}
                          >
                            {spoke.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="mt-5 pt-4 border-t border-[#F0EDE6] flex items-center justify-between">
              <span className="text-[12px] text-[#A3A3A3]">44 service pages across 5 specializations</span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#B8962E] hover:text-[#0D0D0D] transition-colors"
                onClick={() => setMegaOpen(false)}
              >
                View all services <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2DFD8] max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-0.5">
            {/* Services with cluster accordion */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className="py-2.5 text-[14px] font-medium text-[#0D0D0D]"
                  onClick={() => setMobileOpen(false)}
                >
                  Services
                </Link>
                <button
                  className="p-2 text-[#737373]"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-label="Toggle services"
                >
                  <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="pl-4 pb-2 space-y-3">
                  {servicesClusters.map((cluster) => {
                    const Icon = cluster.icon
                    return (
                      <div key={cluster.label}>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Icon size={12} className="text-[#B8962E]" />
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-[#A3A3A3]">
                            {cluster.label}
                          </span>
                        </div>
                        <Link
                          href={cluster.hub.href}
                          className="block py-1 text-[13.5px] font-semibold text-[#0D0D0D]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {cluster.hub.label}
                        </Link>
                        {cluster.spokes.map((spoke) => (
                          <Link
                            key={spoke.href}
                            href={spoke.href}
                            className="block py-1 text-[12.5px] text-[#737373] hover:text-[#0D0D0D]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {spoke.label}
                          </Link>
                        ))}
                      </div>
                    )
                  })}
                  <Link
                    href="/services"
                    className="flex items-center gap-1 text-[12.5px] font-medium text-[#B8962E] pt-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    View all services <ArrowRight size={11} />
                  </Link>
                </div>
              )}
            </div>

            {otherNav.map((item) => (
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
              <Link href="/contact" className="block py-2.5 text-[14px] font-medium text-[#0D0D0D]" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
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
