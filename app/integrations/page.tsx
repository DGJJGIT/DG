import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Store, Database, Truck, RotateCcw, Code } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Integrations — 200+ Platform Connections",
  description: "DeliveryGroup integrates with every major e-commerce platform, marketplace, ERP, and shipping carrier. Shopify, Amazon, WooCommerce, BigCommerce, and 200+ more.",
  alternates: { canonical: "https://deliverygroupinc.com/integrations" },
  keywords: ["3pl integrations", "ecommerce fulfillment integrations", "shopify 3pl", "amazon fulfillment integration", "woocommerce fulfillment"],
}

const marketplaces = [
  { name: "Amazon", desc: "FBA prep, Seller Central, and merchant fulfilled orders" },
  { name: "eBay", desc: "Automatic order import and tracking sync" },
  { name: "Walmart Marketplace", desc: "Order fulfillment meeting Walmart seller standards" },
  { name: "Etsy", desc: "Custom packaging support for handmade brands" },
  { name: "TikTok Shop", desc: "Fast fulfillment for viral social commerce" },
  { name: "Temu", desc: "High-volume, low-cost fulfillment at scale" },
  { name: "Mercari", desc: "Resale marketplace fulfillment and storage" },
  { name: "Poshmark", desc: "Apparel-friendly fulfillment with poly bagging" },
  { name: "Faire", desc: "Wholesale and DTC from a single inventory pool" },
  { name: "Amazon Business", desc: "B2B fulfillment with PO tracking and bulk packaging" },
]

const platforms = [
  { name: "Shopify", desc: "Native integration with real-time order sync" },
  { name: "WooCommerce", desc: "API connection for WordPress-based stores" },
  { name: "BigCommerce", desc: "Multi-channel fulfillment from one dashboard" },
  { name: "Squarespace", desc: "Seamless Commerce integration for DTC brands" },
  { name: "Wix", desc: "Automatic order pull for growing stores" },
  { name: "Adobe Commerce", desc: "Custom API/EDI for enterprise Magento stores" },
  { name: "Salesforce Commerce Cloud", desc: "Enterprise-grade fulfillment orchestration" },
]

const erps = [
  { name: "NetSuite", desc: "Real-time inventory and order sync" },
  { name: "SAP", desc: "Enterprise ERP fulfillment integration" },
  { name: "Salesforce", desc: "CRM-connected order management" },
  { name: "QuickBooks", desc: "Accounting and inventory sync" },
  { name: "Cin7", desc: "Inventory management platform connection" },
  { name: "Ordoro", desc: "Multi-channel order and inventory routing" },
  { name: "ChannelAdvisor", desc: "Marketplace management integration" },
  { name: "Linnworks", desc: "Multi-channel commerce automation" },
  { name: "Brightpearl", desc: "Retail operations platform sync" },
  { name: "SkuVault", desc: "Warehouse management system integration" },
]

const carriers = [
  { name: "DHL", desc: "Primary Partner — Direct CVG Super Hub inject for fastest transit and lowest rates", featured: true },
  { name: "UPS", desc: "Ground and express shipping options nationwide" },
  { name: "USPS", desc: "First-class and priority mail for lightweight shipments" },
  { name: "FedEx", desc: "Ground, express, and freight shipping services" },
]

const returns = [
  { name: "Returnly", desc: "Instant exchanges and return management" },
  { name: "Loop Returns", desc: "Automated returns and exchange portal" },
  { name: "AfterShip", desc: "Shipment tracking and delivery notifications" },
  { name: "Route", desc: "Package protection and tracking experience" },
  { name: "Narvar", desc: "Post-purchase customer experience platform" },
]

function IntegrationCard({ name, desc, featured }: { name: string; desc: string; featured?: boolean }) {
  return (
    <div className={`p-5 rounded-lg border ${featured ? "border-[#B8962E] bg-[#F7F6F3]" : "border-[#E2DFD8] bg-white"} hover:border-[#B8962E] transition-colors`}>
      <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-1.5">{name}</h3>
      {featured && <span className="inline-block text-[10.5px] font-semibold uppercase tracking-wide text-[#B8962E] mb-1.5">Primary Partner</span>}
      <p className="text-[13px] text-[#737373] leading-relaxed">{desc}</p>
    </div>
  )
}

function Section({ label, title, items, bg, icon: Icon }: { label: string; title: string; items: { name: string; desc: string; featured?: boolean }[]; bg: string; icon: React.ElementType }) {
  return (
    <section className={`py-20 md:py-24 ${bg}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-md bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center">
            <Icon size={16} className="text-[#B8962E]" />
          </div>
          <div>
            <SectionLabel>{label}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0D0D0D] mt-0.5">{title}</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item) => (
            <IntegrationCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Integrations</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-6 max-w-[560px]">
            200+ platforms.{" "}
            <span className="gold-text">One seamless connection.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[520px] leading-relaxed">
            We integrate with every major e-commerce platform, marketplace, ERP, and shipping carrier so your orders flow automatically.
          </p>
        </div>
      </section>

      <Section label="Marketplaces" title="Sell everywhere. Fulfill from one place." items={marketplaces} bg="bg-white" icon={ShoppingCart} />
      <Section label="E-Commerce Platforms" title="Your store, connected." items={platforms} bg="bg-[#F7F6F3]" icon={Store} />
      <Section label="ERP & Order Management" title="Enterprise systems, integrated." items={erps} bg="bg-white" icon={Database} />
      <Section label="Shipping Carriers" title="The best rates, automatically." items={carriers} bg="bg-[#F7F6F3]" icon={Truck} />
      <Section label="Returns & Tools" title="Post-purchase, handled." items={returns} bg="bg-white" icon={RotateCcw} />

      {/* Custom API */}
      <section className="py-20 md:py-24 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-md bg-white border border-[#E2DFD8] flex items-center justify-center">
              <Code size={16} className="text-[#B8962E]" />
            </div>
            <div>
              <SectionLabel>Custom Integrations</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0D0D0D] mt-0.5">Need something custom? We build it.</h2>
            </div>
          </div>
          <p className="text-[15px] text-[#737373] leading-relaxed mb-8 max-w-[640px]">
            Our enterprise-grade REST API supports label generation, shipment creation, tracking, and reporting. For retail and wholesale compliance, we offer full EDI integration.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-[640px]">
            <div className="p-6 bg-white rounded-lg border border-[#E2DFD8]">
              <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">REST API</h3>
              <p className="text-[13px] text-[#737373] leading-relaxed">
                Full-featured API for label generation, order management, real-time tracking, and analytics. Developer documentation and integration support included.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-[#E2DFD8]">
              <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">EDI Integrations</h3>
              <p className="text-[13px] text-[#737373] leading-relaxed">
                EDI 850, 856, and 810 support for retail compliance. ASN generation, routing guide adherence, and big-box retailer requirements handled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Don't see your platform?
          </h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[420px] mx-auto">
            Our technical team builds custom integrations for any platform or system. Tell us what you need.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
            Contact Our Team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
