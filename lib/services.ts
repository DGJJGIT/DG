export interface Service {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  benefits: { title: string; body: string }[]
  stats: { value: string; label: string }[]
  useCases: string[]
  icon: string
}

export const services: Service[] = [
  {
    slug: "last-mile-delivery",
    title: "Last-Mile Delivery",
    shortTitle: "Last-Mile",
    tagline: "The final connection between your brand and your customer.",
    description: "Precision last-mile delivery solutions engineered for reliability, speed, and a seamless recipient experience.",
    longDescription: "Our last-mile delivery infrastructure is built on a foundation of technology, operational discipline, and a nationwide network of vetted delivery professionals. We handle the most critical and complex leg of the supply chain — ensuring every parcel arrives on time, intact, and with a delivery experience that reflects your brand's standards.",
    features: ["Real-time GPS tracking", "Electronic proof of delivery", "Delivery window scheduling", "Contactless delivery options", "Failed delivery management", "Route optimization engine"],
    benefits: [
      { title: "Branded Experience", body: "Customized delivery communications that represent your brand at every touchpoint." },
      { title: "Flexible Scheduling", body: "Morning, afternoon, evening, and weekend delivery windows to meet customer demand." },
      { title: "Transparent Visibility", body: "Live tracking dashboards for you and your customers throughout the delivery journey." },
      { title: "Scalable Capacity", body: "Surge-ready infrastructure that scales during peak seasons without compromising quality." },
    ],
    stats: [{ value: "99.4%", label: "On-Time Delivery Rate" }, { value: "2M+", label: "Deliveries Monthly" }, { value: "50", label: "States Served" }, { value: "<2hr", label: "Exception Response" }],
    useCases: ["E-commerce fulfillment", "Subscription box delivery", "Direct-to-consumer brands", "Marketplace sellers", "Retail replenishment"],
    icon: "Package",
  },
  {
    slug: "expedited-shipping",
    title: "Expedited Shipping",
    shortTitle: "Expedited",
    tagline: "Faster and cheaper from the center of it all.",
    description: "Expedited shipping powered by a deep DHL integration and Northern Kentucky's unbeatable geographic advantage.",
    longDescription: "Our 3PL facility sits just 5 miles from DHL's Global Super Hub at CVG — one of only three in the world, alongside Leipzig and Hong Kong. Through daily scheduled pickups, we direct-inject packages straight into the hub, so your shipments enter the DHL network at the earliest possible point and reach their destination faster than a traditional carrier handoff. Northern Kentucky's central US geography also unlocks lower zoned pricing, letting us reach more of the US population at lower cost and with shorter transit times than prep centers on either coast.",
    features: ["Direct inject into DHL's Global Super Hub at CVG", "Daily scheduled pickups", "Zoned pricing optimization", "Central US geographic advantage", "Real-time shipment tracking", "Multi-carrier rate shopping"],
    benefits: [
      { title: "DHL Global Super Hub Access", body: "Direct injection into one of only 3 DHL Global Super Hubs worldwide — just 5 miles from our facility — means packages enter the network at the earliest possible point." },
      { title: "Lower Shipping Costs", body: "Northern Kentucky's central location means lower zone-based pricing to reach the majority of the US population compared to coastal origins." },
      { title: "Faster Transit Times", body: "Central geography plus direct DHL injection shaves transit days versus shipping from either coast." },
      { title: "Broader Reach", body: "Reach more ZIP codes in fewer days. Our NKY location puts 60%+ of the US population within a 1–2 day ground window." },
    ],
    stats: [{ value: "5 mi", label: "To DHL Global Hub" }, { value: "1 of 3", label: "Worldwide" }, { value: "60%+", label: "US in 1–2 Days" }, { value: "Daily", label: "DHL Pickups" }],
    useCases: ["E-commerce fulfillment", "D2C brands", "Subscription box shipping", "Marketplace sellers", "B2B parts & supplies"],
    icon: "Truck",
  },
]

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
