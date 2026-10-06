// Single source of truth for photography on blog, industries, and service pages.
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
  // First four shot in August: homepage, About, supplement pages.
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

  // P1 shoot, October 2026.
  dhlGaylords: {
    src: "/images/facility/dhl-gaylords-staged.jpg",
    alt: "Two DHL eCommerce gaylord boxes on pallets staged on the warehouse floor for pickup",
    caption: "DHL eCommerce pallets staged for pickup",
    w: 1500,
    h: 2000,
    position: "center 55%",
  },
  trailerLoaded: {
    src: "/images/facility/trailer-loaded-dhl-pallets.jpg",
    alt: "Inside a box trailer loaded with two DHL eCommerce pallets",
    caption: "Pallets loaded into a trailer",
    w: 1500,
    h: 2000,
    position: "center 55%",
  },
  forklift: {
    src: "/images/facility/forklift-hyster.jpg",
    alt: "Yellow forklift parked in front of pallet racking in the warehouse",
    caption: "Forklift on the warehouse floor",
    w: 1500,
    h: 2000,
    position: "center 40%",
  },
  reachTruck: {
    src: "/images/facility/reach-truck-yale.jpg",
    alt: "Yellow reach truck beside pallet racking used for high-rack storage",
    caption: "Reach truck for high-rack storage",
    w: 1500,
    h: 2000,
    position: "center 55%",
  },
  dockInterior: {
    src: "/images/facility/dock-doors-interior.jpg",
    alt: "Numbered dock doors seen from inside the warehouse",
    caption: "Dock doors from inside the building",
    w: 2000,
    h: 1500,
    position: "center 45%",
  },
  dockDoorsNumbered: {
    src: "/images/facility/dock-doors-numbered.jpg",
    alt: "Two numbered dock doors on the warehouse floor",
    caption: "Numbered dock doors",
    w: 2000,
    h: 1500,
    position: "center 50%",
  },
  dockExterior: {
    src: "/images/facility/dock-exterior.jpg",
    alt: "Loading dock doors on the outside of the Delivery Group warehouse under a clear sky",
    caption: "Loading docks at our Florence, KY facility",
    w: 2000,
    h: 1500,
    position: "center 65%",
  },
  dockRowContainer: {
    src: "/images/facility/dock-row-container.jpg",
    alt: "Row of dock doors with a shipping container parked in the yard",
    caption: "Dock row and yard",
    w: 2000,
    h: 1500,
    position: "center 60%",
  },
  autoBagger: {
    src: "/images/facility/auto-bagger-station.jpg",
    alt: "Automatic bagging machine at a packing bench with pallet racking in the background",
    caption: "Automated bagging station at a pack bench",
    w: 2000,
    h: 1500,
    position: "center 50%",
  },
  autoBaggerPortrait: {
    src: "/images/facility/auto-bagger-portrait.jpg",
    alt: "Packing bench with an automatic bagging machine and a fan beside racking",
    caption: "Pack bench with automatic bagger",
    w: 1500,
    h: 2000,
    position: "center 45%",
  },
  autoBaggerClose: {
    src: "/images/facility/auto-bagger-closeup.jpg",
    alt: "Automatic bagger touchscreen and a shipping bag with a carrier label coming out of the machine",
    caption: "Automatic bagger producing a labeled shipping bag",
    w: 1500,
    h: 2000,
    position: "center 40%",
  },
  barcodeScanner: {
    src: "/images/facility/barcode-scanner.jpg",
    alt: "Barcode scanner on a stand with its scan light on at a packing station",
    caption: "Barcode scanning at the pack station",
    w: 1500,
    h: 2000,
    position: "center 35%",
  },
  polyBags: {
    src: "/images/facility/poly-bags.jpg",
    alt: "Clear poly bags in three sizes with suffocation warnings laid out flat",
    caption: "Poly bags with suffocation warnings for FBA prep",
    w: 2000,
    h: 1311,
    position: "center 50%",
  },
  returnsWorkstation: {
    src: "/images/facility/returns-workstation.jpg",
    alt: "Returns processing workstation with a monitor, keyboard, and a box of returned items",
    caption: "Returns processing workstation",
    w: 2000,
    h: 1500,
    position: "center 55%",
  },
  returnsTables: {
    src: "/images/facility/returns-tables.jpg",
    alt: "Stainless steel packing and inspection tables with anti-fatigue mats on the warehouse floor",
    caption: "Stainless packing and inspection tables",
    w: 2000,
    h: 1267,
    position: "center 55%",
  },
  glassesPacking: {
    src: "/images/facility/glasses-packing.jpg",
    alt: "Sunglasses in individual poly bags and a case packed in a shipping carton",
    caption: "Items bagged individually and packed",
    w: 1500,
    h: 2000,
    position: "center 55%",
  },
  receivingPallets: {
    src: "/images/facility/receiving-pallets.jpg",
    alt: "Shrink-wrapped pallets of labeled cartons waiting for check-in on the receiving floor",
    caption: "Inbound pallets awaiting check-in",
    w: 1500,
    h: 2000,
    position: "center 55%",
  },
  // AI-generated, supplied by the client's marketing lead on Oct 6, 2026 for
  // the industries pages. Generic scenes with no Delivery Group branding; the
  // people and vehicles in them are not ours.
  aiIndustriesHero: {
    src: "/images/industries/hero.jpg",
    alt: "Delivery van loading at a warehouse dock at dusk, illustration",
    caption: "Industries hero (illustration)",
    w: 1776,
    h: 896,
    position: "50% 60%",
  },
  aiEcommerce: {
    src: "/images/industries/ecommerce.jpg",
    alt: "Gloved hands taping a carton on a conveyor next to a barcode scanner, illustration",
    caption: "E-Commerce (illustration)",
    w: 1536,
    h: 1024,
    position: "center 50%",
  },
  aiRetail: {
    src: "/images/industries/retail.jpg",
    alt: "Worker wheeling cartons on a hand truck into a clothing store, illustration",
    caption: "Retail (illustration)",
    w: 1536,
    h: 1024,
    position: "center 50%",
  },
  aiHealthcare: {
    src: "/images/industries/healthcare.jpg",
    alt: "Courier carrying an insulated medical cooler from a van toward a clinic entrance, illustration",
    caption: "Healthcare (illustration)",
    w: 1536,
    h: 1024,
    position: "center 45%",
  },
  aiSupplements: {
    src: "/images/industries/supplements.jpg",
    alt: "Gloved hand scanning supplement bottles on a stainless shelf, illustration",
    caption: "Supplements and nutraceuticals (illustration)",
    w: 1536,
    h: 1024,
    position: "center 55%",
  },
} satisfies Record<string, Photo>

const defaultPool: Photo[] = [
  photos.aisleRacking,
  photos.autoBagger,
  photos.dockExterior,
  photos.receivingPallets,
  photos.returnsTables,
]

// Photos suited to each blog category, most relevant first. A post rotates
// through its category's pool by slug so cards in the index do not all match.
const categoryPools: Record<string, Photo[]> = {
  "FBA Prep": [photos.polyBags, photos.autoBagger, photos.autoBaggerClose, photos.barcodeScanner, photos.glassesPacking],
  "Platform Guides": [photos.autoBagger, photos.returnsTables, photos.glassesPacking, photos.dhlGaylords, photos.aisleRacking, photos.dockInterior],
  Comparisons: [photos.aisleRacking, photos.receivingPallets, photos.returnsTables, photos.dockExterior, photos.autoBagger],
  "Business Strategy": [photos.dhlGaylords, photos.trailerLoaded, photos.dockExterior, photos.dockInterior, photos.palletStaging],
  Operations: [photos.forklift, photos.receivingPallets, photos.dockRowContainer, photos.reachTruck, photos.dockInterior, photos.aisleRacking],
  Technology: [photos.barcodeScanner, photos.returnsWorkstation, photos.autoBaggerClose],
  "Industry Insights": [photos.dockRowContainer, photos.trailerLoaded, photos.dockExterior, photos.forklift],
  "Customer Experience": [photos.glassesPacking, photos.autoBaggerClose, photos.polyBags, photos.returnsWorkstation],
  Sustainability: [photos.dockExterior, photos.palletStaging, photos.aisleRacking],
  Supplements: [photos.supplementInventory, photos.palletStaging, photos.aisleRacking, photos.receivingPallets],
  Retail: [photos.palletStaging, photos.dhlGaylords, photos.trailerLoaded, photos.receivingPallets],
  Healthcare: [photos.supplementInventory, photos.aisleRacking, photos.receivingPallets],
  "E-Commerce": [photos.returnsWorkstation, photos.returnsTables, photos.glassesPacking, photos.autoBagger],
  "B2B Logistics": [photos.dhlGaylords, photos.trailerLoaded, photos.palletStaging, photos.dockInterior],
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
  const pool = categoryPools[category] ?? defaultPool
  const start = hashSlug(slug) % pool.length
  const rotated = Array.from({ length: pool.length }, (_, i) => pool[(start + i) % pool.length])

  const hero = override?.hero ?? rotated[0]
  const rest = rotated.filter(p => p.src !== hero.src)
  return { hero, inline: (override?.inline ?? rest).slice(0, 2) }
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
    hero: photos.aiEcommerce,
    gallery: [photos.returnsTables, photos.glassesPacking],
  },
  healthcare: {
    hero: photos.aiHealthcare,
    gallery: [photos.receivingPallets, photos.dockExterior],
  },
  retail: {
    hero: photos.aiRetail,
    gallery: [photos.dhlGaylords, photos.dockRowContainer],
  },
  supplements: {
    hero: photos.aiSupplements,
    gallery: [photos.palletStaging, photos.receivingPallets],
  },
}
