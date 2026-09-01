import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // FIX 3 — retarget four soft-match solution/service pages to their dedicated keyword slugs
      { source: "/solutions/subscription-boxes", destination: "/subscription-box-fulfillment", permanent: true },
      { source: "/solutions/apparel", destination: "/apparel-fulfillment", permanent: true },
      { source: "/solutions/supplements", destination: "/supplement-fulfillment", permanent: true },
      { source: "/services/expedited-shipping", destination: "/expedited-freight", permanent: true },
    ]
  },
};

export default nextConfig;
