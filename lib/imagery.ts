// Single source of truth for photography on blog and industries pages.
// New facility photos: drop the file in public/images/, add a Photo below,
// then list it in the pool / override / industry entry it belongs to.

export interface Photo {
  src: string
  alt: string
  caption: string
  w: number
  h: number
  position?: string
}

export interface Video {
  src: string
  poster: string
  caption: string
}

export const photos = {
  aisleRacking: {
    src: "/images/warehouse/warehouse-aisle-racking.jpg",
    alt: "Aisle of pallet racking stacked with shrink-wrapped inventory at the Delivery Group warehouse in Florence, Kentucky",
    caption: "Pallet racking at our Florence, KY facility",
    w: 960,
    h: 1280,
    position: "center 45%",
  },
  supplementInventory: {
    src: "/images/warehouse/warehouse-supplement-inventory.jpg",
    alt: "Lot-labeled supplement inventory on warehouse racking at the Delivery Group facility",
    caption: "Lot-labeled inventory in storage",
    w: 960,
    h: 1280,
    position: "center 55%",
  },
  palletStaging: {
    src: "/images/warehouse/warehouse-pretium-pallets.jpg",
    alt: "Palletized inventory staged on the warehouse floor, ready for outbound shipment",
    caption: "Palletized inventory staged for outbound",
    w: 960,
    h: 1280,
    position: "center 50%",
  },
  exterior: {
    src: "/images/warehouse/warehouse-exterior-florence-ky.jpg",
    alt: "Exterior of the Delivery Group warehouse in Florence, Kentucky",
    caption: "Our Florence, KY warehouse",
    w: 1280,
    h: 1049,
    position: "center 60%",
  },
} satisfies Record<string, Photo>

// Fallback rotations for posts without a category match or override.
// The exterior shot is a blank wall at hero crops, so it only appears inline.
const heroPool: Photo[] = [photos.aisleRacking, photos.palletStaging, photos.supplementInventory]
const inlinePool: Photo[] = [photos.exterior, photos.aisleRacking, photos.palletStaging, photos.supplementInventory]

// Categories with an on-topic hero. inline defaults to a rotation of defaultPool.
const categoryImagery: Record<string, { hero: Photo; inline?: Photo[] }> = {
  Supplements: {
    hero: photos.supplementInventory,
    inline: [photos.palletStaging, photos.aisleRacking],
  },
}

// Per-post overrides, keyed by slug. Use these once post-specific photos exist.
const postOverrides: Record<string, { hero?: Photo; inline?: Photo[] }> = {}

export interface PostImagery {
  hero: Photo
  inline: Photo[]
}

function hashSlug(slug: string): number {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h
}

export function getPostImagery(slug: string, category: string): PostImagery {
  const override = postOverrides[slug]
  const cat = categoryImagery[category]
  const h = hashSlug(slug)

  const hero = override?.hero ?? cat?.hero ?? heroPool[h % heroPool.length]
  const rotatedInline = Array.from({ length: inlinePool.length }, (_, i) => inlinePool[(h + i) % inlinePool.length])
    .filter(p => p.src !== hero.src)
  const inline = override?.inline ?? cat?.inline ?? rotatedInline

  return { hero, inline: inline.slice(0, 2) }
}

// Inserts <figure> blocks between sections of rendered post HTML, roughly at
// the one-third and two-thirds marks, so they sit between h2 sections.
export function withInlineImages(html: string, images: Photo[]): string {
  if (images.length === 0) return html
  const h2Positions: number[] = []
  const re = /<h2[\s>]/g
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) h2Positions.push(m.index)
  if (h2Positions.length < 3) return html

  const n = h2Positions.length
  const targets = images.map((_, i) => Math.max(1, Math.round(((i + 1) * n) / (images.length + 1))))
  const unique = Array.from(new Set(targets))

  const figure = (p: Photo) =>
    `<figure class="blog-figure"><img src="${p.src}" alt="${p.alt}" width="${p.w}" height="${p.h}" loading="lazy" style="object-position:${p.position ?? "center"}" /><figcaption>${p.caption}</figcaption></figure>`

  let out = ""
  let cursor = 0
  unique.forEach((h2Index, i) => {
    const pos = h2Positions[h2Index]
    out += html.slice(cursor, pos) + figure(images[i])
    cursor = pos
  })
  return out + html.slice(cursor)
}

export interface IndustryImagery {
  hero: Photo
  gallery: Photo[]
  video?: Video
}

export const industryImagery: Record<string, IndustryImagery> = {
  ecommerce: {
    hero: photos.aisleRacking,
    gallery: [photos.palletStaging, photos.exterior],
  },
  healthcare: {
    hero: photos.supplementInventory,
    gallery: [photos.aisleRacking, photos.exterior],
  },
  retail: {
    hero: photos.palletStaging,
    gallery: [photos.aisleRacking, photos.exterior],
  },
  supplements: {
    hero: photos.supplementInventory,
    gallery: [photos.palletStaging, photos.aisleRacking],
  },
}
