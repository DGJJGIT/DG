import type { MetadataRoute } from "next"

const BASE_URL = "https://deliverygroupinc.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  /* ── Static pages ── */
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  /* ── High-priority service pages (top-level + dynamic) ── */
  const serviceSlugs = [
    "last-mile-delivery",
    "expedited-shipping",
  ]

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/amazon-fba-prep`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/3pl-fulfillment`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/solutions`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ]

  /* ── Solution product type pages ── */
  const solutionSlugs = [
    "apparel",
    "supplements",
    "subscription-boxes",
    "oversized",
    "fragile",
    "beauty-cosmetics",
  ]

  const solutionPages: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  /* ── Industry pages ── */
  const industrySlugs = [
    "ecommerce",
    "healthcare",
    "retail",
    "supplements",
  ]

  const industryPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/industries`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...industrySlugs.map((slug) => ({
      url: `${BASE_URL}/industries/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]

  /* ── Blog posts ── */
  const blogSlugs = [
    "what-is-3pl",
    "3pl-shipping-cost-analysis",
    "amazon-fba-prep-guide-2025",
    "amazon-inbound-placement-fees",
    "b2b-delivery-best-practices",
    "best-3pl-for-amazon-business",
    "best-3pl-for-amazon-sellers",
    "best-3pl-for-bigcommerce",
    "best-3pl-for-ebay-sellers",
    "best-3pl-for-etsy-sellers",
    "best-3pl-for-faire-wholesale",
    "best-3pl-for-magento-adobe-commerce",
    "best-3pl-for-mercari-sellers",
    "best-3pl-for-poshmark-sellers",
    "best-3pl-for-salesforce-commerce-cloud",
    "best-3pl-for-shopify-sellers",
    "best-3pl-for-squarespace",
    "best-3pl-for-temu-sellers",
    "best-3pl-for-tiktok-shop",
    "best-3pl-for-walmart-marketplace",
    "best-3pl-for-wix-stores",
    "best-3pl-for-woocommerce",
    "carrier-diversification-strategy",
    "customer-communication-logistics",
    "delivery-experience-customer-retention",
    "delivery-proof-technology",
    "delivery-tracking-customer-expectations",
    "driver-shortage-solutions",
    "ecommerce-returns-management",
    "electric-vehicle-delivery-fleets",
    "expedited-shipping-dhl-integration",
    "fba-prep-location-matters",
    "last-mile-cost-reduction",
    "last-mile-delivery-trends-2025",
    "logistics-contract-negotiation",
    "logistics-data-analytics",
    "logistics-technology-stack",
    "micro-fulfillment-centers",
    "national-delivery-network-advantages",
    "parcel-dimensional-weight",
    "peak-season-logistics-preparation",
    "pharmaceutical-logistics-compliance",
    "retail-logistics-omnichannel",
    "route-optimization-technology",
    "supplement-brand-fulfillment-guide",
    "supplement-fulfillment-lot-tracking",
    "sustainability-in-last-mile-logistics",
    "urban-delivery-density",
    "warehouse-to-doorstep-efficiency",
    "deliverygroup-vs-shipbob",
    "deliverygroup-vs-shipmonk",
    "deliverygroup-vs-red-stag-fulfillment",
    "fba-prep-center-comparison",
    "in-house-fulfillment-vs-3pl",
  ]

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]

  /* ── Other informational pages ── */
  const otherPages: MetadataRoute.Sitemap = [
    "about",
    "technology",
    "faq",
    "contact",
    "quote",
    "careers",
    "partners",
    "privacy",
    "terms",
    "pricing",
    "how-it-works",
    "integrations",
  ].map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  /* ── Location pages ── */
  const locationSlugs = [
    "new-york-ny",
    "los-angeles-ca",
    "chicago-il",
    "houston-tx",
    "phoenix-az",
    "philadelphia-pa",
    "san-antonio-tx",
    "san-diego-ca",
    "dallas-tx",
    "san-jose-ca",
    "austin-tx",
    "jacksonville-fl",
    "fort-worth-tx",
    "columbus-oh",
    "charlotte-nc",
    "indianapolis-in",
    "san-francisco-ca",
    "seattle-wa",
    "denver-co",
    "washington-dc",
    "nashville-tn",
    "el-paso-tx",
    "oklahoma-city-ok",
    "boston-ma",
    "portland-or",
    "las-vegas-nv",
    "memphis-tn",
    "louisville-ky",
    "baltimore-md",
    "milwaukee-wi",
    "albuquerque-nm",
    "tucson-az",
    "fresno-ca",
    "sacramento-ca",
    "mesa-az",
    "omaha-ne",
    "atlanta-ga",
    "miami-fl",
    "minneapolis-mn",
    "cleveland-oh",
    "tampa-fl",
    "pittsburgh-pa",
    "raleigh-nc",
    "cincinnati-oh",
    "kansas-city-mo",
    "st-louis-mo",
    "salt-lake-city-ut",
  ]

  const locationPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/locations`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    ...locationSlugs.map((slug) => ({
      url: `${BASE_URL}/locations/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]

  /* ── New SEO cluster pages (hazmat, fulfillment, 3PL, courier, reverse logistics) ── */
  const seoSlugs = [
    "liquidation-pallets",
    "ecommerce-returns-solution",
    "reverse-logistics-company",
    "courier-for-business",
    "3pl-for-small-business",
    "pick-and-pack-fulfillment",
    "3pl-ecommerce-fulfillment",
    "3pl-warehouse",
    "3pl-warehousing",
    "3pl-wms",
    "courier-services",
    "cross-docking",
    "crowdfunding-fulfillment",
    "dangerous-goods-warehouse",
    "ecommerce-returns-management",
    "etsy-fulfillment",
    "fulfillment-center",
    "fulfillment-warehouse",
    "hazmat-3pl",
    "hazmat-fulfillment",
    "hazmat-logistics",
    "hazmat-storage",
    "hazmat-trucking-companies",
    "hazmat-warehouse",
    "kitting-services",
    "medical-courier",
    "on-demand-delivery",
    "pick-and-pack-services",
    "returns-management",
    "returns-processing",
    "reverse-logistics-services",
    "rush-delivery",
    "same-day-courier",
    "small-business-fulfillment",
    "tiktok-shop-fulfillment",
    "white-glove-delivery",
  ]
  const seoPages: MetadataRoute.Sitemap = seoSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    ...homepage,
    ...servicePages,
    ...seoPages,
    ...solutionPages,
    ...industryPages,
    ...blogPages,
    ...otherPages,
    ...locationPages,
  ]
}
