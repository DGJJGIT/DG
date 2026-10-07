import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // FIX 3 — retarget four soft-match solution/service pages to their dedicated keyword slugs
      { source: "/solutions/subscription-boxes", destination: "/subscription-box-fulfillment", permanent: true },
      { source: "/solutions/apparel", destination: "/apparel-fulfillment", permanent: true },
      { source: "/solutions/supplements", destination: "/supplement-fulfillment", permanent: true },
      { source: "/services/expedited-shipping", destination: "/expedited-freight", permanent: true },

      // #302 consolidation — 301 duplicate / cannibalizing URLs into their canonical page
      { source: "/3pl-warehouse", destination: "/3pl-warehousing", permanent: true },
      { source: "/returns-processing", destination: "/returns-management", permanent: true },
      { source: "/ecommerce-returns-management", destination: "/returns-management", permanent: true },
      { source: "/ecommerce-returns-solution", destination: "/returns-management", permanent: true },
      { source: "/reverse-logistics-services", destination: "/reverse-logistics-company", permanent: true },
      { source: "/industries/ecommerce", destination: "/3pl-ecommerce-fulfillment", permanent: true },
      { source: "/industries/supplements", destination: "/supplement-fulfillment", permanent: true },

      // #302 hazmat cluster → /hazmat-fulfillment (hazmat is a confirmed DG capability)
      { source: "/hazmat-3pl", destination: "/hazmat-fulfillment", permanent: true },
      { source: "/hazmat-logistics", destination: "/hazmat-fulfillment", permanent: true },
      { source: "/hazmat-storage", destination: "/hazmat-fulfillment", permanent: true },
      { source: "/hazmat-warehouse", destination: "/hazmat-fulfillment", permanent: true },
      { source: "/dangerous-goods-warehouse", destination: "/hazmat-fulfillment", permanent: true },
      { source: "/hazmat-trucking-companies", destination: "/hazmat-fulfillment", permanent: true },
      // 2026-10-07 AEO audit: duplicate pages competing with their canonical twins
      { source: "/pick-and-pack-services", destination: "/pick-and-pack-fulfillment", permanent: true },
      { source: "/services/last-mile-delivery", destination: "/last-mile-delivery", permanent: true },
    ]
  },
};

export default nextConfig;
