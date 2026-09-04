import Link from "next/link"
import { ArrowRight, CheckCircle, type LucideIcon } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"
import JsonLd from "@/components/JsonLd"

export type Section = { h2: string; body: string }
export type NavLink = { label: string; href: string }
export type Faq = { q: string; a: string }

export type ServiceLandingData = {
  slug: string
  keyword: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  eyebrowIcon: LucideIcon
  eyebrow: string
  h1lead: string
  h1gold: string
  heroSub: string
  ctaLabel: string
  overviewLabel: string
  intro: string
  sections: Section[]
  whyLabel: string
  whyHeading: string
  whyBullets: string[]
  relatedLabel: string
  related: NavLink[]
  faqs: Faq[]
  ctaHeading: string
  ctaSub: string
  ctaBadge: string
}

// Cluster-specific photography from Unsplash — one per service category
const CLUSTER_IMAGES: { match: string[]; url: string; alt: string }[] = [
  {
    match: ["3pl", "warehousing", "warehouse"],
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    alt: "3PL warehouse operations — organized shelving and inventory management",
  },
  {
    match: ["courier", "delivery", "last-mile", "last mile"],
    url: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=1400&q=80",
    alt: "Courier and delivery operations — Delivery Group fleet on route",
  },
  {
    match: ["return", "reverse"],
    url: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    alt: "Returns processing center — reverse logistics operations",
  },
  {
    match: ["hazmat", "dangerous", "hazardous"],
    url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    alt: "Hazmat storage and logistics facility — compliant dangerous goods handling",
  },
]

const DEFAULT_IMAGE = {
  url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=80",
  alt: "Delivery Group Inc. fulfillment and logistics operations — Northern Kentucky hub",
}

function getClusterImage(eyebrow: string, slug: string): { url: string; alt: string } {
  const text = `${eyebrow} ${slug}`.toLowerCase()
  for (const entry of CLUSTER_IMAGES) {
    if (entry.match.some((kw) => text.includes(kw))) {
      return { url: entry.url, alt: entry.alt }
    }
  }
  return DEFAULT_IMAGE
}

export default function ServiceLanding({ data }: { data: ServiceLandingData }) {
  const EyebrowIcon = data.eyebrowIcon
  const quoteHref = `/quote?service=${data.slug}`
  const clusterImg = getClusterImage(data.eyebrow, data.slug)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.metaTitle,
          serviceType: data.keyword,
          provider: { "@type": "Organization", name: "Delivery Group Inc.", url: "https://deliverygroupinc.com" },
          areaServed: { "@type": "Country", name: "United States" },
          url: `https://deliverygroupinc.com/${data.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Hero — dark with text */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <EyebrowIcon size={16} className="text-[#B8962E]" />
                <span className="text-[13px] text-[#B8962E] font-medium">{data.eyebrow}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
                {data.h1lead}
                <br />
                <span className="gold-text">{data.h1gold}</span>
              </h1>
              <p className="text-[15px] text-[#A3A3A3] max-w-[560px] leading-relaxed mb-10">{data.heroSub}</p>
              <Link
                href={quoteHref}
                className="inline-flex items-center gap-2 bg-[#B8962E] text-[#0D0D0D] font-medium text-[14px] px-6 py-3 rounded hover:bg-[#D4AF37] transition-colors"
              >
                {data.ctaLabel} <ArrowRight size={15} />
              </Link>
            </div>

            {/* Hero image — desktop only */}
            <div className="hidden lg:block relative">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={clusterImg.url}
                  alt={clusterImg.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width photo strip — mobile */}
      <div className="lg:hidden relative h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={clusterImg.url}
          alt={clusterImg.alt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/20" />
      </div>

      {/* Overview: intro + sections */}
      <section className="py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel>{data.overviewLabel}</SectionLabel>
          <p className="text-[16px] text-[#3D3D3D] leading-relaxed mb-10">{data.intro}</p>
          {data.sections.map((s) => (
            <div key={s.h2} className="mb-9">
              <h2 className="text-xl md:text-2xl font-semibold text-[#0D0D0D] tracking-tight mb-3">{s.h2}</h2>
              <p className="text-[15px] text-[#3D3D3D] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why DG — secondary image full-bleed on mobile, in-grid on desktop */}
      <div className="lg:hidden px-4 py-2">
        <div className="relative h-56 overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80"
            alt="Delivery Group Inc. Northern Kentucky warehouse facility — pick, pack, and ship operations"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: photo — desktop only (mobile version is full-bleed above) */}
            <div className="hidden lg:block relative overflow-hidden rounded-lg aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80"
                alt="Delivery Group Inc. Northern Kentucky warehouse facility — pick, pack, and ship operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right: bullets */}
            <div>
              <SectionLabel>{data.whyLabel}</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] tracking-tight mb-6 max-w-[560px]">
                {data.whyHeading}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.whyBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14px] text-[#3D3D3D]">
                    <CheckCircle size={17} className="text-[#B8962E] mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel>{data.relatedLabel}</SectionLabel>
          <div className="flex flex-wrap gap-2.5">
            {data.related.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-1.5 border border-[#E2DFD8] rounded px-3.5 py-2 text-[13.5px] text-[#3D3D3D] hover:border-[#B8962E] hover:text-[#0D0D0D] transition-colors"
              >
                {s.label} <ArrowRight size={13} className="text-[#B8962E]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#F7F6F3]">
        <div className="max-w-[820px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel>Frequently asked</SectionLabel>
          <dl className="space-y-6 mt-4">
            {data.faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-[15px] font-semibold text-[#0D0D0D] mb-1.5">{f.q}</dt>
                <dd className="text-[14px] text-[#737373] leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] tracking-tight mb-4">{data.ctaHeading}</h2>
          <p className="text-[15px] text-[#737373] mb-8 max-w-[520px] mx-auto">{data.ctaSub}</p>
          <Link
            href={quoteHref}
            className="inline-flex items-center gap-2 bg-[#0D0D0D] text-white font-medium text-[14px] px-6 py-3 rounded hover:bg-[#3D3D3D] transition-colors"
          >
            {data.ctaLabel} <ArrowRight size={15} />
          </Link>
          <div className="mt-4">
            <Badge variant="gold">{data.ctaBadge}</Badge>
          </div>
        </div>
      </section>
    </>
  )
}
