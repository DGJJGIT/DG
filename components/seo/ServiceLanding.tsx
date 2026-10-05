import Link from "next/link"
import { ArrowRight, CheckCircle, type LucideIcon } from "lucide-react"
import { photos } from "@/lib/imagery"
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

// Hero images per cluster
const CLUSTER_IMAGES: { match: string[]; url: string; alt: string }[] = [
  {
    match: ["3pl", "warehousing", "warehouse"],
    url: photos.aisleRacking.src,
    alt: photos.aisleRacking.alt,
  },
  {
    match: ["courier", "delivery", "last-mile", "last mile"],
    url: photos.dockExterior.src,
    alt: photos.dockExterior.alt,
  },
  {
    match: ["return", "reverse"],
    url: photos.returnsTables.src,
    alt: photos.returnsTables.alt,
  },
  {
    match: ["hazmat", "dangerous", "hazardous"],
    url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    alt: "Hazmat storage and logistics facility, compliant dangerous goods handling",
  },
  {
    match: ["supplement"],
    url: photos.supplementInventory.src,
    alt: photos.supplementInventory.alt,
  },
  {
    match: ["fulfillment", "pick and pack", "kitting"],
    url: photos.autoBagger.src,
    alt: photos.autoBagger.alt,
  },
]

const DEFAULT_IMAGE = {
  url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=80",
  alt: "Delivery Group Inc. fulfillment and logistics operations, Northern Kentucky hub",
}

// Secondary "Why DG" images — different photo per cluster so pages don't all look the same
const CLUSTER_WHY_IMAGES: { match: string[]; url: string; alt: string }[] = [
  {
    match: ["3pl", "warehousing", "warehouse"],
    url: photos.forklift.src,
    alt: photos.forklift.alt,
  },
  {
    match: ["courier", "delivery", "last-mile", "last mile"],
    url: photos.trailerLoaded.src,
    alt: photos.trailerLoaded.alt,
  },
  {
    match: ["return", "reverse"],
    url: photos.returnsWorkstation.src,
    alt: photos.returnsWorkstation.alt,
  },
  {
    match: ["hazmat", "dangerous", "hazardous"],
    url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80",
    alt: "Compliant hazmat and dangerous goods warehouse facility",
  },
  {
    match: ["supplement"],
    url: photos.palletStaging.src,
    alt: photos.palletStaging.alt,
  },
  {
    match: ["fulfillment", "pick and pack", "kitting"],
    url: photos.glassesPacking.src,
    alt: photos.glassesPacking.alt,
  },
]

const DEFAULT_WHY_IMAGE = {
  url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  alt: "Delivery Group Inc. warehouse team, pick, pack, and ship operations",
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

function getClusterWhyImage(eyebrow: string, slug: string): { url: string; alt: string } {
  const text = `${eyebrow} ${slug}`.toLowerCase()
  for (const entry of CLUSTER_WHY_IMAGES) {
    if (entry.match.some((kw) => text.includes(kw))) {
      return { url: entry.url, alt: entry.alt }
    }
  }
  return DEFAULT_WHY_IMAGE
}

export default function ServiceLanding({ data }: { data: ServiceLandingData }) {
  const EyebrowIcon = data.eyebrowIcon
  const quoteHref = `/quote?service=${data.slug}`
  const clusterImg = getClusterImage(data.eyebrow, data.slug)
  const whyImg = getClusterWhyImage(data.eyebrow, data.slug)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://deliverygroupinc.com" },
            { "@type": "ListItem", position: 2, name: data.metaTitle, item: `https://deliverygroupinc.com/${data.slug}` },
          ],
        }}
      />
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `https://deliverygroupinc.com/${data.slug}#webpage`,
          url: `https://deliverygroupinc.com/${data.slug}`,
          name: data.metaTitle,
          description: data.metaDescription,
          isPartOf: { "@type": "WebSite", url: "https://deliverygroupinc.com" },
          about: { "@type": "Organization", name: "Delivery Group Inc.", url: "https://deliverygroupinc.com" },
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".quick-answer"] },
        }}
      />

      {/* Hero — dark with text */}
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
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
            <div className="hidden md:block relative">
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
      <div className="md:hidden relative h-56 overflow-hidden">
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
          <p className="quick-answer text-[16px] text-[#3D3D3D] leading-relaxed mb-10">{data.intro}</p>
          {data.sections.map((s) => (
            <div key={s.h2} className="mb-9">
              <h2 className="text-xl md:text-2xl font-semibold text-[#0D0D0D] tracking-tight mb-3">{s.h2}</h2>
              <p className="text-[15px] text-[#3D3D3D] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why DG — secondary image full-bleed on mobile, in-grid on desktop */}
      <div className="md:hidden px-4 py-2">
        <div className="relative h-56 overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={whyImg.url}
            alt={whyImg.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-[#F7F6F3]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
            {/* Left: photo — desktop only (mobile version is full-bleed above) */}
            <div className="hidden md:block relative overflow-hidden rounded-lg aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={whyImg.url}
                alt={whyImg.alt}
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
