import type { MetadataRoute } from "next"
import { execSync } from "child_process"
import { seoPages as seoPagesData } from "@/lib/seo/pages"
import { posts } from "@/lib/blog"

const BASE_URL = "https://deliverygroupinc.com"

// Real per-page lastmod (2026-10-09 indexing fix): the date of the last git commit that touched the files behind
// each URL, instead of the build time on every URL (which teaches Google to ignore lastmod). Blog posts use their
// own "updated" or publish date. Falls back to a fixed date if git history is unavailable at build time.
const FALLBACK_DATE = new Date("2026-10-09T00:00:00Z")
const gitDateCache = new Map<string, Date>()
function gitDate(...paths: string[]): Date {
  const key = paths.join("|")
  const hit = gitDateCache.get(key)
  if (hit) return hit
  let d = FALLBACK_DATE
  try {
    const out = execSync(`git log -1 --format=%cI -- ${paths.map((x) => `"${x}"`).join(" ")}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim()
    if (out) d = new Date(out)
  } catch {
    /* no git history: keep the fallback */
  }
  gitDateCache.set(key, d)
  return d
}

export default function sitemap(): MetadataRoute.Sitemap {

  /* ── Static pages ── */
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: gitDate("app/page.tsx"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  /* ── High-priority service pages (top-level + dynamic) ── */
  const serviceSlugs: string[] = []

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/amazon-fba-prep`, lastModified: gitDate("app/amazon-fba-prep"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/3pl-fulfillment`, lastModified: gitDate("app/3pl-fulfillment"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: gitDate("app/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/solutions`, lastModified: gitDate("app/solutions"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/fba-savings-calculator`, lastModified: gitDate("app/fba-savings-calculator", "components/FbaSavingsCalculator.tsx"), changeFrequency: "monthly", priority: 0.8 },
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: gitDate("app/services"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ]

  /* ── Solution product type pages ── */
  const solutionSlugs = [
    "oversized",
    "fragile",
    "beauty-cosmetics",
  ]

  const solutionPages: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${BASE_URL}/solutions/${slug}`,
    lastModified: gitDate("app/solutions", "lib/product-types.ts"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  /* ── Industry pages ── */
  const industrySlugs = [
    // "ecommerce" and "supplements" 301 to /3pl-ecommerce-fulfillment and /supplement-fulfillment (#302)
    "healthcare",
    "retail",
  ]

  const industryPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/industries`, lastModified: gitDate("app/industries", "lib/industries.ts"), changeFrequency: "monthly", priority: 0.8 },
    ...industrySlugs.map((slug) => ({
      url: `${BASE_URL}/industries/${slug}`,
      lastModified: gitDate("app/industries", "lib/industries.ts"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]

  /* ── Blog posts ── every post in content/blog, dated by its own "updated" or publish date */
  const postDate = (p: { date: string; updated?: string }) => {
    const d = new Date(p.updated || p.date)
    return isNaN(d.getTime()) ? FALLBACK_DATE : d
  }
  const newestPost = posts.reduce((m, p) => (postDate(p) > m ? postDate(p) : m), new Date(0))
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/blog`, lastModified: newestPost, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: postDate(p),
      changeFrequency: "monthly" as const,
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
    lastModified: gitDate(`app/${path}`),
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
    { url: `${BASE_URL}/locations`, lastModified: gitDate("app/locations", "lib/locations.ts"), changeFrequency: "monthly", priority: 0.5 },
    ...locationSlugs.map((slug) => ({
      url: `${BASE_URL}/locations/${slug}`,
      lastModified: gitDate("app/locations", "lib/locations.ts"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]

  /* ── New SEO cluster pages (hazmat, fulfillment, 3PL, courier, reverse logistics) ── */
  // #302 — exclude URLs that 301 to a canonical (see next.config redirects)
  const REDIRECTED_SLUGS = new Set([
    "pick-and-pack-services",
    "3pl-warehouse",
    "returns-processing",
    "ecommerce-returns-management",
    "ecommerce-returns-solution",
    "reverse-logistics-services",
    "hazmat-3pl",
    "hazmat-logistics",
    "hazmat-storage",
    "hazmat-warehouse",
    "dangerous-goods-warehouse",
    "hazmat-trucking-companies",
  ])
  const seoSlugs = Object.keys(seoPagesData).filter((slug) => !REDIRECTED_SLUGS.has(slug))
  const seoPages: MetadataRoute.Sitemap = seoSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: gitDate("lib/seo/pages.ts", "components/seo/ServiceLanding.tsx", `app/${slug}`),
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
