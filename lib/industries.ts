export interface Industry {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  challenges: { title: string; body: string }[]
  solutions: string[]
  stats: { value: string; label: string }[]
  featuredClients: string
  icon: string
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    title: "E-Commerce",
    tagline: "Built for the velocity of modern e-commerce.",
    description: "End-to-end delivery infrastructure designed to scale with your order volume, meet customer expectations, and protect your brand.",
    longDescription: "E-commerce brands live and die by delivery performance. In a marketplace where two-day delivery is standard and next-day is the new competitive battleground, your logistics partner defines your customer experience. Delivery Group provides the technology integrations, carrier network, and operational excellence to power e-commerce fulfillment at any scale.",
    challenges: [
      { title: "Peak Season Scalability", body: "Your carrier network must flex from 10,000 to 100,000+ shipments during Q4 without degraded performance." },
      { title: "Returns Management", body: "A frictionless returns experience is as important as the forward shipment for retention and LTV." },
      { title: "Real-Time Visibility", body: "Customers expect proactive tracking notifications — not reactive responses to complaints." },
      { title: "Multi-Channel Complexity", body: "Serving marketplace, DTC, and wholesale channels through a unified logistics operation." },
    ],
    solutions: ["Platform integrations (Shopify, Magento, WooCommerce)", "Automated label generation", "Carrier rate shopping", "Branded tracking pages", "Returns portal management", "Inventory distributed storage"],
    stats: [{ value: "200+", label: "Platform Integrations" }, { value: "48hr", label: "Integration Time" }, { value: "99.4%", label: "Delivery Success" }, { value: "35%", label: "Average Cost Reduction" }],
    featuredClients: "D2C brands, marketplace sellers, omnichannel retailers",
    icon: "ShoppingCart",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Where precision delivery protects lives.",
    description: "Compliant, time-critical delivery solutions for healthcare providers, medical device companies, and pharmaceutical distributors.",
    longDescription: "Healthcare logistics demands a standard of accuracy and care that goes beyond conventional delivery. From time-sensitive pharmaceuticals and medical devices to specimen transport, Delivery Group maintains the regulatory compliance and chain-of-custody documentation that healthcare shipments require.",
    challenges: [
      { title: "Regulatory Compliance", body: "Strict adherence to HIPAA, DEA, and FDA requirements for pharmaceutical and medical device transport." },
      { title: "Chain of Custody", body: "Documented, auditable proof of handling for every touchpoint in the delivery process." },
      { title: "Time Criticality", body: "Missed deliveries for medications, specimens, or devices can directly impact patient outcomes." },
      { title: "Serialization & Traceability", body: "Full DSCSA compliance with serialized tracking from manufacturer to final delivery." },
    ],
    solutions: ["HIPAA-compliant operations", "Electronic chain of custody", "Stat delivery for critical items", "Hospital and clinic delivery expertise", "Pharmacy direct delivery", "Serialized tracking & DSCSA compliance"],
    stats: [{ value: "100%", label: "Regulatory Compliant" }, { value: "HIPAA", label: "Fully Certified" }, { value: "99.8%", label: "On-Time for Critical" }, { value: "7AM–7PM", label: "EST Support" }],
    featuredClients: "Hospital systems, pharmaceutical distributors, medical device companies",
    icon: "Heart",
  },
  {
    slug: "retail",
    title: "Retail",
    tagline: "Omnichannel fulfillment for the modern retailer.",
    description: "Retail fulfillment for DTC and wholesale from one inventory pool. Ship single orders and case or pallet to retailers, with labeling and returns handled.",
    longDescription: "Many retail brands sell direct-to-consumer online and also ship product to stores, distributors, and marketplaces, and running two separate logistics operations for that is slow and expensive. Delivery Group holds your inventory in one pool and fulfills from it either way, single-unit DTC orders picked, packed, and shipped, or case and pallet quantities palletized and sent to your wholesale buyers. Because both channels draw on the same stock and the same system, you see one live inventory count instead of guessing what is committed where.",
    challenges: [
      { title: "Split Inventory", body: "Holding stock in separate DTC and wholesale warehouses creates two counts that drift apart." },
      { title: "Two Order Types", body: "Single-unit DTC orders and bulk case or pallet wholesale orders need different pick and pack handling." },
      { title: "Return Volume", body: "Managing the return tide from both online and wholesale channels efficiently." },
      { title: "Seasonal Demand", body: "Scaling logistics capacity for holiday, back-to-school, and promotional peaks." },
    ],
    solutions: ["Direct-to-consumer pick, pack, and ship for single orders", "B2B and wholesale fulfillment in case and pallet quantities", "One shared inventory pool feeding both DTC and wholesale", "Cartons to LTL and FTL palletized freight outbound", "Product and carton labeling to your requirements", "Full returns processing: inspection, restocking, relabeling, repacking"],
    stats: [{ value: "DTC+B2B", label: "Both channels, one pool" }, { value: "1 Pool", label: "Shared inventory count" }, { value: "LTL+FTL", label: "Palletized freight outbound" }, { value: "SKU/Lot", label: "Inventory tracking with visibility" }],
    featuredClients: "DTC brands, wholesale suppliers, omnichannel retailers",
    icon: "Store",
  },
  {
    slug: "supplements",
    title: "Supplements & Nutraceuticals",
    tagline: "Precision fulfillment for the OTD supplements market.",
    description: "Lot-tracked, expiration-managed fulfillment for supplement brands selling direct-to-consumer, on Amazon, and through wholesale channels.",
    longDescription: "The supplements and nutraceuticals market demands fulfillment that goes beyond standard e-commerce — lot tracking, expiration date management, FDA-compliant labeling, and the operational discipline to handle products that consumers trust with their health. Delivery Group provides purpose-built supplement fulfillment with the compliance infrastructure, inventory precision, and shipping speed that OTD supplement brands need to scale.",
    challenges: [
      { title: "Lot & Expiration Tracking", body: "Every unit must be traceable by lot number with FEFO (First Expired, First Out) inventory rotation." },
      { title: "FDA Compliance", body: "Supplement labeling, storage conditions, and handling must meet FDA and cGMP requirements." },
      { title: "Multi-Channel Complexity", body: "Selling across DTC, Amazon, and wholesale requires unified inventory management and channel-specific prep." },
      { title: "Subscription Management", body: "Recurring subscription orders demand reliable, on-time fulfillment every cycle without errors." },
    ],
    solutions: ["Lot-level inventory tracking", "FEFO expiration management", "FDA-compliant storage & handling", "Subscription order automation", "Amazon FBA prep for supplements", "Custom kitting for variety packs & bundles"],
    stats: [{ value: "100%", label: "Lot Traceability" }, { value: "FEFO", label: "Expiration Management" }, { value: "99.9%", label: "Order Accuracy" }, { value: "<48hr", label: "Turnaround Time" }],
    featuredClients: "DTC supplement brands, Amazon supplement sellers, nutraceutical wholesalers",
    icon: "Pill",
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug)
}
