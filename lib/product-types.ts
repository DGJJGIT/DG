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
    description: "Oversized shipping and fulfillment for big, bulky, heavy products. LTL and FTL freight receiving, pallet storage, and protective packaging across the US.",
    icon: "Box",
    highlights: [
      "Freight and LTL receiving inbound, palletized freight outbound via carriers",
      "Pallet storage and heavy-item racking",
      "Palletizing and securing oversized units for LTL and FTL freight",
      "Custom protective packaging and wrapping",
      "Pick and pack for big and bulky orders",
      "B2B case and pallet shipments",
    ],
    stats: [
      { value: "LTL+FTL", label: "Freight receiving and outbound" },
      { value: "Pallet", label: "Storage and heavy-item racking" },
      { value: "B2B", label: "Case and pallet shipments" },
    ],
    body: `Oversized and heavy products require fulfillment infrastructure that most 3PLs simply do not have. A single catalog can run from a 5-pound accessory to a 50-pound box that is four feet long, and standard pick-and-pack operations are not set up for that range. You need a partner with the space, equipment, and freight relationships to handle these products efficiently.

DeliveryGroup's Northern Kentucky facility is equipped for oversized fulfillment, with pallet racking, floor space, and material handling for large items. We receive inbound LTL and FTL freight at the dock, log each SKU, and store oversized units on heavy-item racking or open floor space. Our team is trained in safe handling for heavy products.

On the way out, we ship oversized items by LTL, FTL, and palletized freight through carriers when they are too large for a parcel carrier, palletizing, securing, and labeling each unit for freight. For B2B shipments, we handle appointment scheduling and compliance documentation. Protective packaging is standard on oversized orders, not an upsell: we use custom packaging and protective wrapping sized to each item, so heavy and awkward products are cushioned before they ship.

Whether you sell furniture, fitness equipment, large electronics, or industrial products, we build a fulfillment process around the product's size and weight. Many fulfillment providers decline big and bulky items because they lack the racking, floor space, and freight relationships to move them. We take those products, keep inventory accurate by SKU, and coordinate freight and B2B shipment details directly with you rather than leaving a shipment stuck. We provide oversized shipping and fulfillment across the United States.`,
  },
  {
    slug: "fragile",
    name: "Fragile & High-Value",
    description: "Fragile shipping and fulfillment with protective pack-out, reboxing, and inspection at receiving and returns so breakable goods ship ready for transit.",
    icon: "ShieldCheck",
    highlights: [
      "Protective pack-out for breakable and damage-prone goods",
      "Reboxing into a right-sized carton with protective fill",
      "Polybagging, bundling, and kitting for multi-item orders",
      "Item and condition inspection at receiving",
      "Inspection on returns, with restocking, relabeling, and repacking",
      "FBA, FBM, and direct-to-consumer fulfillment for fragile catalogs",
    ],
    stats: [
      { value: "Careful", label: "Protective pack-out" },
      { value: "QC", label: "Inspection at receiving and returns" },
      { value: "FBA+FBM+DTC", label: "Fulfillment coverage" },
    ],
    body: `When your products are fragile or breakable, fulfillment errors are not just inconvenient, they are costly. A broken item is expensive twice, once for the refund and again for the replacement shipment. Fragile fulfillment lives or dies on two things: how the order is packed and whether it is inspected before it ships.

DeliveryGroup builds careful pack-out into the standard packing process. We rebox items into a right-sized carton with protective fill and polybag or bundle multi-item orders, so a breakable order leaves the building packed for transit rather than thrown in a box. We do not build custom foam tooling or crating, and we do not guarantee a breakage rate. Fragile handling here means protective pack-out, right-sized reboxing, and inspection.

Every fragile item is inspected at receiving, and orders are checked during pack-out so the correct item and variant go out. If something looks wrong at receiving, we flag it and call you rather than send it on. Inventory is tracked by SKU, location, lot, and expiration for full visibility the whole way.

We fulfill Amazon FBA, Amazon FBM, and direct-to-consumer orders for fragile catalogs, and we connect to Shopify and other platforms through Hopstack, the multi-channel integration platform we use, so orders flow in automatically. Returns come back to us for inspection, restocking, relabeling, and repacking, and we identify and flag damaged inventory so returned units get back to sellable condition or are pulled. We ship from a fulfillment center in Northern Kentucky, near the Cincinnati and CVG hub, with same-day receiving in most cases and 48-hour FBA prep.`,
  },
  {
    slug: "beauty-cosmetics",
    name: "Beauty & Cosmetics",
    description: "Cosmetics fulfillment with lot and expiration tracking, branded unboxing, gift-set and subscription-box kitting, influencer kits, and returns for DTC beauty brands.",
    icon: "Sparkles",
    highlights: [
      "Lot and expiration tracking by SKU and location for batch traceability",
      "Recall workflows when a specific lot needs to be identified",
      "Branded boxes, tissue, stickers, and inserts on every order",
      "Sample sachets, gift-with-purchase items, and promotional cards per order",
      "Gift-set kitting, subscription-box assembly, and influencer kits",
      "Protective packaging (polybagging, reboxing) for fragile and leak-prone items",
    ],
    stats: [
      { value: "Lot", label: "Batch-level tracking" },
      { value: "GWP", label: "Gift with purchase support" },
      { value: "Custom", label: "Unboxing experience" },
    ],
    body: `Beauty and cosmetics brands live and die by the customer experience. In this category the box is part of the product, so generic brown boxes and packing peanuts undercut the brand a customer paid a premium for. We receive your inventory, track it by lot and expiration for batch traceability, and pack each order in your branded materials with the sample sachets, gift-with-purchase items, and inserts you specify. The result is an unboxing experience you designed, shipped by a partner who protects both the presentation and the product inside.

Beauty products need to arrive undamaged and traceable, so our cosmetics fulfillment covers both protective packing and batch-level records. We pack each order in your branded boxes, tissue, stickers, and inserts, and add protective packaging such as polybagging or reboxing where a product needs it, so fragile compacts, glass bottles, and palettes travel safely. On the inventory side, our warehouse system tracks stock by SKU, location, lot, and expiration, which gives you batch traceability if a formulation issue ever requires a recall workflow.

Cosmetics sell in sets as much as in singles, so kitting and assembly are core to beauty fulfillment. We build gift sets and multi-product bundles, assemble beauty subscription boxes on your schedule, and put together influencer kits for outreach campaigns, from a handful of kits to several hundred. Whether an order is a single lipstick or a curated holiday set, it ships packed to your specification.

For a DTC beauty brand the unboxing is the brand, and the return has to be just as easy, so we handle both ends of the customer experience. Every outbound order reflects the packaging you designed, from the box to the tissue to the insert. When product comes back, we run full returns processing, including inspection, restocking, relabeling, and repacking, so sellable units go back to stock while damaged or expired units are flagged rather than reshipped. You connect your sales channels through Hopstack, the multi-channel integration platform we use, send inventory inbound from single cartons to LTL and palletized freight, and we receive it, same day in most cases, then pick, pack, and kit your orders in your branded materials.`,
  },
]

export function getProductType(slug: string): ProductType | undefined {
  return productTypes.find(p => p.slug === slug)
}
