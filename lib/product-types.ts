export interface ProductType {
  slug: string
  name: string
  description: string
  icon: string
  highlights: string[]
  stats: { value: string; label: string }[]
  body: string
}

export const productTypes: ProductType[] = [
  {
    slug: "apparel",
    name: "Apparel & Fashion",
    description: "Fulfillment built for clothing and fashion brands. From poly bagging to hanger storage, we handle apparel with the care your customers expect.",
    icon: "Shirt",
    highlights: [
      "Poly bagging and tissue wrapping for every garment",
      "Hanger storage and folded bin organization by SKU",
      "Size and color variant management",
      "High return rate handling with inspection and restocking",
      "Seasonal volume spike capacity",
      "Custom branded packaging and inserts",
    ],
    stats: [
      { value: "30%+", label: "Avg apparel return rate we manage" },
      { value: "<48hr", label: "Order processing turnaround" },
      { value: "99.4%", label: "On-time delivery rate" },
    ],
    body: `Apparel fulfillment is different from standard e-commerce. Clothing needs to arrive in perfect condition — wrinkle-free, neatly folded or hung, and protected from damage during transit. Your customers judge your brand by the unboxing experience, and a crushed blouse or wrinkled dress means a return and a lost customer.

DeliveryGroup handles apparel fulfillment with the care your brand demands. Every garment is poly bagged or tissue wrapped before shipping. Items are stored on hangers or folded neatly in organized bins, sorted by SKU, size, and color. When an order comes in, we pick the exact variant, pack it in your custom packaging, and ship it using our discounted DHL rates.

Apparel has the highest return rate of any e-commerce category — often exceeding 30 percent. Our returns processing system handles the full cycle: customer-facing returns portal, return label generation, incoming inspection, restocking of sellable items, and reporting on return reasons. We help you identify patterns so you can reduce returns over time.

Fashion is seasonal. Black Friday, holiday gifting, spring launches — your order volume can triple overnight. Our warehouse operations and staffing model are designed to absorb these spikes without delays or errors. Whether you ship 500 orders a month or 5,000, we scale with your brand.`,
  },
  {
    slug: "supplements",
    name: "Supplements & Nutraceuticals",
    description: "FDA-compliant fulfillment with lot tracking, FEFO rotation, and expiration management built into every process.",
    icon: "Pill",
    highlights: [
      "Lot-level inventory tracking and traceability",
      "FEFO (First Expired, First Out) rotation",
      "Expiration date management and alerts",
      "FDA-compliant storage conditions",
      "Subscription order automation",
      "Multi-channel fulfillment (DTC, Amazon, wholesale)",
    ],
    stats: [
      { value: "100%", label: "Lot-level traceability" },
      { value: "FEFO", label: "Inventory rotation standard" },
      { value: "3 channels", label: "DTC + Amazon + Wholesale" },
    ],
    body: `Supplement brands face fulfillment challenges that standard 3PLs are not equipped to handle. FDA compliance, lot-level tracking, expiration date management, and the complexity of selling across DTC, Amazon, and wholesale channels demand a specialized approach.

DeliveryGroup has built supplement fulfillment capabilities from the ground up. Every unit in our warehouse is tracked at the lot level. Our WMS enforces FEFO rotation automatically, ensuring that products closest to expiration ship first. Expiration alerts notify you well in advance so you can plan promotions or removals before products expire on the shelf.

Our facility meets FDA storage requirements for dietary supplements, including temperature monitoring and proper documentation. In the event of a recall, our lot-level traceability means we can identify exactly which units went to which customers — down to the individual order.

For subscription supplement brands, we automate recurring orders across all your channels. Whether a customer subscribes through your Shopify store, reorders on Amazon, or you fulfill wholesale orders to retail partners, everything ships from the same inventory pool in our Northern Kentucky warehouse.`,
  },
  {
    slug: "subscription-boxes",
    name: "Subscription Boxes",
    description: "Kitting, assembly, and custom packaging for subscription box brands that need consistent quality at scale.",
    icon: "Gift",
    highlights: [
      "Custom kitting and assembly for each box",
      "Branded packaging with your box, tissue, and inserts",
      "Marketing insert and promotional material inclusion",
      "Recurring order automation",
      "Seasonal and limited-edition kit variations",
      "Flexible assembly for changing product mixes",
    ],
    stats: [
      { value: "Custom", label: "Packaging for every brand" },
      { value: "<48hr", label: "Kit assembly turnaround" },
      { value: "200+", label: "Platform integrations" },
    ],
    body: `Subscription box fulfillment is part logistics, part production line. Every box needs to be assembled with the right products, the right packaging, and the right inserts — consistently, at scale, every single month.

DeliveryGroup handles the full kitting and assembly process. We store your individual components, assemble each box according to your specifications, include branded packaging and marketing inserts, and ship on your schedule. Whether your box contains 3 items or 15, we build it to your exact standard.

Subscription brands often change their product mix monthly. A new hero product, a seasonal item, a promotional insert for an upcoming launch. Our flexible assembly process accommodates these changes without slowing down fulfillment. You tell us the new kit configuration and we execute it.

We integrate with subscription platforms and your e-commerce store to automate recurring orders. When renewal day hits, orders flow into our system automatically. We assemble, pack, and ship — and your subscribers get their box on time, every time. Our discounted DHL rates keep your per-box shipping costs low, which matters when margins are tight in the subscription space.`,
  },
  {
    slug: "oversized",
    name: "Oversized & Heavy Items",
    description: "Specialized handling, freight shipping, and pallet storage for products that do not fit in a standard box.",
    icon: "Box",
    highlights: [
      "Freight and LTL shipping capabilities",
      "Pallet storage and heavy item racking",
      "Liftgate delivery coordination",
      "Custom protective packaging",
      "White glove delivery options",
      "B2B and residential delivery handling",
    ],
    stats: [
      { value: "75K", label: "Sq ft facility capacity" },
      { value: "LTL", label: "Freight shipping available" },
      { value: "B2B+B2C", label: "Business and residential" },
    ],
    body: `Oversized and heavy products require fulfillment infrastructure that most 3PLs simply do not have. Standard pick-and-pack operations are not built for items that weigh 50 pounds or come in boxes that are 4 feet long. You need a partner with the space, equipment, and shipping relationships to handle these products efficiently.

DeliveryGroup's 75,000 square foot facility in Northern Kentucky is equipped for oversized fulfillment. We have the racking, floor space, and material handling equipment to store and ship large items. Pallet storage accommodates bulk inventory, and our team is trained in safe handling for heavy products.

Shipping oversized items is where costs can spiral. Our DHL partnership and carrier relationships include freight and LTL options that keep costs manageable. For residential deliveries, we coordinate liftgate service so your customers do not need to unload heavy packages themselves. For B2B shipments, we handle dock delivery, appointment scheduling, and compliance documentation.

Whether you sell furniture, fitness equipment, large electronics, or industrial products, we build a fulfillment process tailored to your product's specific requirements. Custom packaging, protective wrapping, and careful handling are standard — not add-ons.`,
  },
  {
    slug: "fragile",
    name: "Fragile & High-Value",
    description: "Extra care, custom protective packaging, and inspection protocols for products that cannot afford damage in transit.",
    icon: "ShieldCheck",
    highlights: [
      "Custom protective packaging design",
      "Multi-point inspection before shipping",
      "Photo documentation of packed orders",
      "Insurance coordination for high-value items",
      "Careful handling SOPs for warehouse staff",
      "Damage rate tracking and reporting",
    ],
    stats: [
      { value: "<0.1%", label: "Target damage rate" },
      { value: "QC", label: "Multi-point inspection" },
      { value: "Photo", label: "Documentation available" },
    ],
    body: `When your products are fragile, expensive, or both, fulfillment errors are not just inconvenient — they are costly. A broken item means a refund, a replacement shipment, and potentially a lost customer. For high-value products, the stakes are even higher.

DeliveryGroup takes a different approach to fragile and high-value fulfillment. We start by designing custom protective packaging for your specific products. Bubble wrap, foam inserts, double-boxing, corner protectors — whatever your product needs to arrive in perfect condition, we build that into the standard packing process.

Every fragile item goes through a multi-point inspection before it ships. We check the product condition, verify the correct item and variant, confirm the packaging meets protection standards, and document the packed order with photos when requested. This level of quality control keeps damage rates well below industry averages.

For high-value products, we coordinate shipping insurance and use carrier services that include signature confirmation and delivery documentation. Our real-time tracking gives you and your customers visibility into exactly where the package is at every point in transit. If an exception occurs, our system alerts you immediately so we can take action before the customer even notices.`,
  },
  {
    slug: "beauty-cosmetics",
    name: "Beauty & Cosmetics",
    description: "Lot-tracked, beautifully packaged fulfillment for beauty brands that care about the customer experience.",
    icon: "Sparkles",
    highlights: [
      "Lot tracking for batch traceability",
      "Temperature-aware storage",
      "Sample and GWP (gift with purchase) inserts",
      "Gift packaging and wrapping options",
      "Influencer kit assembly",
      "Subscription box kitting for beauty boxes",
    ],
    stats: [
      { value: "Lot", label: "Batch-level tracking" },
      { value: "GWP", label: "Gift with purchase support" },
      { value: "Custom", label: "Unboxing experience" },
    ],
    body: `Beauty and cosmetics brands live and die by the customer experience. From the moment someone places an order to the moment they open the box, every touchpoint reflects your brand. Generic fulfillment with brown boxes and packing peanuts does not cut it in the beauty space.

DeliveryGroup provides fulfillment that matches the quality of your products. We support custom branded packaging — your boxes, your tissue paper, your stickers, your inserts. Sample sachets, gift-with-purchase items, and promotional cards are included in every order according to your specifications. The unboxing experience your customer gets is the one you designed.

Beauty products often require lot tracking for batch traceability. If a formulation issue arises, you need to know exactly which batch went to which customers. Our WMS tracks inventory at the lot level and supports recall workflows when needed. We also monitor storage conditions to ensure your products maintain their quality.

Influencer marketing is a major channel for beauty brands. We assemble custom influencer kits — curated selections of your products, packaged beautifully, and shipped to your influencer list on your schedule. Whether you are sending 10 kits or 500, we handle the assembly and shipping so your marketing team can focus on relationships.`,
  },
]

export function getProductType(slug: string): ProductType | undefined {
  return productTypes.find(p => p.slug === slug)
}
