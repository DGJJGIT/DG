import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, BarChart3, Map, Bell, Cpu, Code2, Lock, Zap, Layers,
  ShoppingCart, Store, Globe, Package, CheckCircle
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

export const metadata: Metadata = {
  title: "Technology & Platform Integrations — 3PL for Shopify, Amazon, WooCommerce & More",
  description:
    "DeliveryGroup integrates with 17+ major e-commerce platforms including Shopify, Amazon, WooCommerce, BigCommerce, Walmart, eBay, Etsy, TikTok Shop, and more. AI-powered route optimization, real-time tracking, and enterprise-grade logistics technology.",
  keywords: [
    "3pl shopify integration",
    "3pl amazon fulfillment",
    "woocommerce 3pl",
    "bigcommerce fulfillment",
    "walmart marketplace 3pl",
    "ebay fulfillment service",
    "etsy fulfillment partner",
    "tiktok shop fulfillment",
    "ecommerce 3pl integrations",
    "logistics technology platform",
  ],
  alternates: { canonical: "https://deliverygroupinc.com/technology" },
}

const platformCapabilities = [
  { icon: Map, title: "Route Intelligence", body: "AI-driven route optimization that factors in real-time traffic, vehicle capacity, delivery time windows, and driver skill to minimize time and cost while maximizing success rates." },
  { icon: BarChart3, title: "Real-Time Dashboard", body: "Live visibility into every shipment across your account. Track delivery status, monitor performance metrics, and identify exceptions before they impact your customers." },
  { icon: Bell, title: "Proactive Notifications", body: "Automated, branded delivery communications via SMS, email, and push — keeping recipients informed without requiring a single customer service contact." },
  { icon: Code2, title: "API Platform", body: "Enterprise-grade REST API with webhooks, enabling seamless integration with your e-commerce platform, WMS, OMS, and ERP systems in 48 hours or less." },
  { icon: Lock, title: "Proof of Delivery", body: "Electronic POD with GPS coordinates, timestamp, photo documentation, and signature capture — eliminating delivery disputes and accelerating invoice processing." },
  { icon: Cpu, title: "Predictive Analytics", body: "Machine learning models that forecast delivery success rates, identify high-risk shipments, and surface operational improvement opportunities before they become problems." },
]

/* ── Platform Integration Data ── */

const marketplaces = [
  {
    name: "Amazon",
    slug: "amazon",
    description: "Amazon is the largest online marketplace in the United States, with over 300 million active customer accounts. Sellers on Amazon need a fulfillment partner that can handle both Fulfillment by Amazon (FBA) prep and merchant-fulfilled orders. DeliveryGroup connects directly to Amazon Seller Central, syncing orders and inventory in real time. Our Northern Kentucky warehouse sits 5 miles from Amazon's $1.5 billion CVG Air Hub, so FBA shipments reach Amazon's shelves the same day they leave our dock.",
    highlights: ["FBA prep + merchant fulfilled", "Real-time Seller Central sync", "5 miles from Amazon CVG Air Hub"],
  },
  {
    name: "eBay",
    slug: "ebay",
    description: "eBay serves over 130 million active buyers worldwide and remains one of the top marketplaces for both new and refurbished goods. eBay sellers need fast shipping to maintain high seller ratings and win the \"Best Match\" algorithm. DeliveryGroup integrates with eBay to automatically import orders, generate shipping labels at discounted DHL rates, and push tracking numbers back to eBay so buyers get real-time updates.",
    highlights: ["Automatic order import", "Discounted DHL shipping rates", "Tracking sync for seller ratings"],
  },
  {
    name: "Walmart Marketplace",
    slug: "walmart",
    description: "Walmart Marketplace has grown rapidly and now hosts over 150,000 third-party sellers. Walmart holds sellers to strict shipping standards — late shipments and cancellations can get your account suspended. DeliveryGroup integrates with Walmart's API to pull orders automatically, ship on time, and meet Walmart's two-day delivery expectations using our central NKY location and DHL partnership.",
    highlights: ["Meets Walmart 2-day standards", "Automatic order pull via API", "Central location for fast ground shipping"],
  },
  {
    name: "Etsy",
    slug: "etsy",
    description: "Etsy is the go-to marketplace for handmade, vintage, and unique goods with over 90 million active buyers. Many Etsy sellers start by shipping from home but hit a wall as order volume grows. DeliveryGroup integrates with Etsy to handle pick, pack, and ship for growing Etsy stores. We support custom packaging and marketing inserts so your brand experience stays personal even when a 3PL handles the fulfillment.",
    highlights: ["Custom packaging support", "Marketing insert capabilities", "Scales with your growth"],
  },
  {
    name: "Temu",
    slug: "temu",
    description: "Temu has become one of the fastest-growing e-commerce platforms in the US, attracting millions of shoppers looking for value. Sellers on Temu need a fulfillment partner that can handle high order volumes at low cost. DeliveryGroup offers competitive pick-and-pack rates and discounted DHL shipping that make Temu fulfillment profitable even at low price points. Our central location keeps ground shipping fast across the entire country.",
    highlights: ["High-volume, low-cost fulfillment", "Discounted DHL rates", "Fast ground shipping nationwide"],
  },
  {
    name: "TikTok Shop",
    slug: "tiktok-shop",
    description: "TikTok Shop has transformed social media into a direct selling channel, and brands that go viral need a fulfillment partner that can handle sudden spikes in order volume. DeliveryGroup integrates with TikTok Shop to automatically receive orders and ship them fast. When a product takes off on TikTok, order volume can jump from 50 to 5,000 in a single day — our infrastructure is built to scale without breaking.",
    highlights: ["Handles viral order spikes", "Automatic order integration", "Scalable infrastructure"],
  },
  {
    name: "Mercari",
    slug: "mercari",
    description: "Mercari is a popular resale marketplace in the US with millions of active users buying and selling everything from electronics to clothing. For high-volume Mercari sellers, DeliveryGroup provides fulfillment services that take the work out of packing and shipping. We integrate with Mercari to pull orders, pick and pack items from your stored inventory, and ship with tracking at competitive rates.",
    highlights: ["Ideal for high-volume resellers", "Automated order pulling", "Competitive shipping rates"],
  },
  {
    name: "Poshmark",
    slug: "poshmark",
    description: "Poshmark is one of the leading fashion resale platforms in the United States with a strong community of buyers and sellers. Poshmark sellers who scale beyond a closet operation need a partner to store, organize, and ship their inventory. DeliveryGroup offers apparel-friendly fulfillment with poly bagging, labeling, and careful handling that keeps clothing in sellable condition.",
    highlights: ["Apparel-friendly handling", "Poly bagging and labeling", "Organized inventory storage"],
  },
]

const storefronts = [
  {
    name: "Shopify",
    slug: "shopify",
    description: "Shopify powers millions of online stores and is the most popular e-commerce platform for DTC brands. DeliveryGroup offers a native Shopify integration that syncs orders in real time, updates tracking automatically, and manages inventory across your Shopify store and other channels. Whether you sell 100 orders a month or 15,000, our Shopify integration gets you up and running in under 48 hours.",
    highlights: ["Native real-time integration", "Auto tracking updates", "Live in under 48 hours"],
  },
  {
    name: "WooCommerce",
    slug: "woocommerce",
    description: "WooCommerce is the most widely used open-source e-commerce platform, powering over 5 million online stores worldwide on WordPress. DeliveryGroup connects to WooCommerce via API to automatically import orders, sync inventory levels, and push tracking information back to your store. Because WooCommerce is open-source, we can also build custom integrations for stores with unique workflows.",
    highlights: ["API-based integration", "Custom workflow support", "Inventory sync across channels"],
  },
  {
    name: "BigCommerce",
    slug: "bigcommerce",
    description: "BigCommerce is an enterprise-ready e-commerce platform trusted by brands that need flexibility and scalability. DeliveryGroup integrates natively with BigCommerce to handle order fulfillment, inventory management, and shipping at scale. Our integration supports multi-channel selling, so your BigCommerce store, Amazon listings, and wholesale orders can all be fulfilled from a single inventory pool in our warehouse.",
    highlights: ["Multi-channel inventory support", "Enterprise-ready integration", "Single inventory pool fulfillment"],
  },
  {
    name: "Squarespace",
    slug: "squarespace",
    description: "Squarespace is known for beautiful website design and has become a popular choice for brands that want a polished online store without complex development. DeliveryGroup integrates with Squarespace Commerce to pull orders and manage fulfillment. Squarespace sellers get the same fast DHL shipping rates, real-time tracking, and professional fulfillment that larger platforms enjoy.",
    highlights: ["Seamless commerce integration", "Professional fulfillment for design-first brands", "DHL shipping rates included"],
  },
  {
    name: "Wix",
    slug: "wix",
    description: "Wix eCommerce serves millions of small businesses and entrepreneurs who want an easy way to sell online. As Wix stores grow, shipping and fulfillment becomes a bottleneck. DeliveryGroup integrates with Wix to take over the fulfillment process — orders are pulled automatically, packed with care, and shipped at discounted DHL rates from our central NKY location.",
    highlights: ["Automatic order import", "Great for growing Wix stores", "Discounted DHL shipping"],
  },
  {
    name: "Adobe Commerce (Magento)",
    slug: "magento",
    description: "Adobe Commerce, formerly Magento, is the platform of choice for enterprise e-commerce brands that need deep customization and control. DeliveryGroup offers custom API and EDI integrations for Adobe Commerce stores. Our technical team works with your developers to build a fulfillment connection that fits your exact workflow — including custom order routing, multi-warehouse logic, and advanced inventory rules.",
    highlights: ["Custom API & EDI integration", "Enterprise-grade fulfillment", "Multi-warehouse support"],
  },
  {
    name: "Salesforce Commerce Cloud",
    slug: "salesforce",
    description: "Salesforce Commerce Cloud powers some of the largest online retail brands in the world. Enterprise brands on Salesforce need a 3PL that can match their operational complexity. DeliveryGroup provides custom integrations with Salesforce Commerce Cloud, including order management, inventory synchronization, and fulfillment orchestration. Our dedicated account management team works alongside your Salesforce implementation.",
    highlights: ["Custom enterprise integration", "Fulfillment orchestration", "Dedicated account management"],
  },
]

const wholesale = [
  {
    name: "Faire",
    slug: "faire",
    description: "Faire is the leading online wholesale marketplace, connecting independent retailers with brands. Brands selling on Faire need a fulfillment partner that can handle both individual store orders and bulk wholesale shipments. DeliveryGroup integrates with Faire to fulfill wholesale orders alongside your DTC orders from a single inventory pool — no need for separate warehouses or operations.",
    highlights: ["Wholesale + DTC from one warehouse", "Single inventory pool", "B2B shipping capabilities"],
  },
  {
    name: "Amazon Business",
    slug: "amazon-business",
    description: "Amazon Business is the B2B arm of Amazon, serving millions of business buyers. Sellers on Amazon Business need fulfillment that meets business customer expectations — including purchase order numbers, bulk packaging, and reliable delivery schedules. DeliveryGroup handles Amazon Business fulfillment with the same infrastructure that powers our FBA prep and merchant-fulfilled services.",
    highlights: ["B2B fulfillment capabilities", "Bulk packaging options", "PO number tracking"],
  },
]

/* ── Platform Card Component ── */

function PlatformCard({
  platform,
}: {
  platform: { name: string; slug: string; description: string; highlights: string[] }
}) {
  return (
    <div id={platform.slug} className="scroll-mt-24 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8] p-6 md:p-8">
      <h3 className="text-[18px] font-semibold text-[#0D0D0D] mb-3">
        {platform.name}
      </h3>
      <p className="text-[14px] text-[#737373] leading-relaxed mb-5">
        {platform.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {platform.highlights.map((h) => (
          <span
            key={h}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E2DFD8] rounded text-[12px] font-medium text-[#3D3D3D]"
          >
            <CheckCircle size={11} className="text-[#B8962E]" />
            {h}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Page ── */

export default function TechnologyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Our Platform</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5 max-w-[560px]">
            Technology that drives<br />
            <span className="gold-text">every delivery.</span>
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[520px] leading-relaxed mb-10">
            Our logistics platform combines AI-powered route optimization, real-time tracking, and native integrations with every major e-commerce selling platform — from Shopify and Amazon to TikTok Shop and Faire.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Zap, label: "Real-Time Tracking" },
              { icon: Layers, label: "17+ Platform Integrations" },
              { icon: Cpu, label: "AI Route Optimization" },
            ].map(f => {
              const Icon = f.icon
              return (
                <div key={f.label} className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md">
                  <Icon size={14} className="text-[#B8962E]" />
                  <span className="text-[13px] text-[#A3A3A3]">{f.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Platform Capabilities ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <SectionLabel>Platform Capabilities</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mt-1">
              Built for performance at scale.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformCapabilities.map(p => {
              const Icon = p.icon
              return (
                <div key={p.title} className="p-7 bg-[#F7F6F3] rounded-lg border border-[#E2DFD8]">
                  <div className="w-10 h-10 rounded-md bg-white border border-[#E2DFD8] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#B8962E]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">{p.title}</h3>
                  <p className="text-[13px] text-[#737373] leading-relaxed">{p.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Quick Platform Nav ── */}
      <section className="py-6 bg-white border-b border-[#E2DFD8] sticky top-16 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "Marketplaces", href: "#marketplaces", icon: ShoppingCart },
              { label: "Storefront Platforms", href: "#storefronts", icon: Store },
              { label: "Wholesale / B2B", href: "#wholesale", icon: Globe },
            ].map((nav) => {
              const Icon = nav.icon
              return (
                <a
                  key={nav.label}
                  href={nav.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F6F3] border border-[#E2DFD8] rounded-md text-[13px] font-medium text-[#3D3D3D] hover:border-[#B8962E] hover:bg-[#F5EDD4] transition-colors"
                >
                  <Icon size={14} className="text-[#B8962E]" />
                  {nav.label}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Marketplaces ── */}
      <section id="marketplaces" className="py-20 md:py-28 bg-white scroll-mt-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
              <ShoppingCart size={20} className="text-[#B8962E]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] tracking-tight">
                Marketplace Integrations
              </h2>
              <p className="text-[15px] text-[#737373] mt-2 leading-relaxed max-w-[640px]">
                We integrate with the biggest online marketplaces in the United States. Sell on one platform or sell on all of them — DeliveryGroup fulfills orders from a single inventory pool in our Northern Kentucky warehouse with discounted DHL shipping rates.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {marketplaces.map((p) => (
              <PlatformCard key={p.slug} platform={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Storefront Platforms ── */}
      <section id="storefronts" className="py-20 md:py-28 bg-[#F7F6F3] scroll-mt-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-11 h-11 rounded-lg bg-white border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
              <Store size={20} className="text-[#B8962E]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] tracking-tight">
                Storefront & DTC Platform Integrations
              </h2>
              <p className="text-[15px] text-[#737373] mt-2 leading-relaxed max-w-[640px]">
                Whether you run your own online store on Shopify, WooCommerce, BigCommerce, or an enterprise platform like Salesforce Commerce Cloud, DeliveryGroup plugs into your stack and starts fulfilling orders in days — not weeks.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {storefronts.map((p) => (
              <PlatformCard key={p.slug} platform={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Wholesale / B2B ── */}
      <section id="wholesale" className="py-20 md:py-28 bg-white scroll-mt-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-11 h-11 rounded-lg bg-[#F7F6F3] border border-[#E2DFD8] flex items-center justify-center shrink-0 mt-0.5">
              <Globe size={20} className="text-[#B8962E]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] tracking-tight">
                Wholesale & B2B Integrations
              </h2>
              <p className="text-[15px] text-[#737373] mt-2 leading-relaxed max-w-[640px]">
                Selling wholesale or B2B? DeliveryGroup handles wholesale fulfillment right alongside your DTC orders. One warehouse, one inventory pool, one partner for every channel.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {wholesale.map((p) => (
              <PlatformCard key={p.slug} platform={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content Section ── */}
      <section className="py-20 md:py-28 bg-[#F7F6F3] border-t border-[#E2DFD8]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel>Why Platform Integration Matters</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0D0D0D] mt-1 mb-6">
            The right 3PL integration saves you time, money, and headaches.
          </h2>
          <div className="prose prose-sm max-w-none text-[15px] text-[#3D3D3D] leading-relaxed space-y-5">
            <p>
              When you sell online, getting orders to customers fast and cheap is what keeps your business growing. But as your order volume increases, packing and shipping from your home, garage, or office becomes impossible. That is where a 3PL (third-party logistics) partner like DeliveryGroup comes in.
            </p>
            <p>
              A 3PL stores your inventory in their warehouse, picks and packs your orders when they come in, and ships them to your customers. The best 3PLs connect directly to your selling platform so orders flow in automatically — no copying and pasting, no manual data entry, no mistakes.
            </p>
            <p>
              DeliveryGroup integrates with all of the major e-commerce platforms in the United States: Amazon, Shopify, WooCommerce, BigCommerce, eBay, Walmart Marketplace, Etsy, TikTok Shop, Temu, Mercari, Poshmark, Squarespace, Wix, Adobe Commerce, Salesforce Commerce Cloud, Faire, and Amazon Business.
            </p>
            <p>
              What makes DeliveryGroup different from other 3PLs is two things. First, we have a direct partnership with DHL that gives you shipping rates you cannot get on your own. Second, our warehouse is in Northern Kentucky — one of the best shipping locations in the country. From here, we can reach over 80% of the US population within 2 to 3 business days by ground shipping. That means your customers get their orders faster, and you pay less to ship them.
            </p>
            <p>
              Whether you sell on one platform or ten, DeliveryGroup manages all of your fulfillment from a single warehouse with a single inventory count. You never have to worry about overselling or splitting your stock between different locations. Our technology keeps everything in sync across every channel, every order, every day.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">
            See the platform in action.
          </h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[440px] mx-auto">
            Request a personalized demo and discover how DeliveryGroup integrates with your selling platform to save you time and money on every order.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B8962E] text-white text-[14px] font-medium rounded-md hover:bg-[#A0801F] transition-colors">
              Request a Demo <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#333] text-white text-[14px] font-medium rounded-md hover:border-[#555] hover:bg-[#111] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
