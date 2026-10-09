import type { Metadata } from "next"

// Unlisted review page for the first photo batch. Not linked anywhere, not in
// the sitemap, noindex. Faces are blurred, and no screens from the WMS appear.
export const metadata: Metadata = {
  title: "Photo Review",
  robots: { index: false, follow: false, nocache: true },
}

type Shot = { id: string; src: string; w: number; h: number; caption: string; where?: string }

const used: Shot[] = [
  { id: "U01", src: "/images/review-p1-r4t8w2/U01.jpg", w: 525, h: 700, caption: "DHL eCommerce pallets staged for pickup (approved)", where: "Blog (Platform Guides, Business Strategy, Retail, B2B) \u00b7 Retail industry page" },
  { id: "U02", src: "/images/review-p1-r4t8w2/U02.jpg", w: 525, h: 700, caption: "Pallets loaded in a trailer", where: "Blog (Business Strategy, Industry Insights, Retail, B2B) \u00b7 courier service pages" },
  { id: "U03", src: "/images/review-p1-r4t8w2/U03.jpg", w: 700, h: 933, caption: "Forklift (PULLED from the pages)", where: "Removed: handwritten client labels are readable in the background. Waiting for a cleaned version." },
  { id: "U04", src: "/images/review-p1-r4t8w2/U04.jpg", w: 525, h: 700, caption: "Reach truck", where: "Blog (Operations)" },
  { id: "U05", src: "/images/review-p1-r4t8w2/U05.jpg", w: 700, h: 525, caption: "Dock doors from inside", where: "Blog (Platform Guides, Business Strategy, Operations, B2B)" },
  { id: "U06", src: "/images/review-p1-r4t8w2/U06.jpg", w: 700, h: 525, caption: "Numbered dock doors", where: "Not placed on any page yet" },
  { id: "U07", src: "/images/review-p1-r4t8w2/U07.jpg", w: 700, h: 525, caption: "Loading docks, exterior", where: "Blog (Comparisons, Business Strategy, Industry Insights, Sustainability) \u00b7 Healthcare industry page \u00b7 courier service pages" },
  { id: "U08", src: "/images/review-p1-r4t8w2/U08.jpg", w: 700, h: 400, caption: "Loading docks, retouched by Jason", where: "Container removed, yard cleaned, company sign added (the original photo has no sign). Blog (Operations, Industry Insights) · Retail industry page" },
  { id: "U09", src: "/images/review-p1-r4t8w2/U09.jpg", w: 700, h: 525, caption: "Automatic bagger at a pack bench", where: "Blog (FBA Prep, Platform Guides, Comparisons, E-Commerce) \u00b7 E-Commerce industry \u00b7 fulfillment service pages" },
  { id: "U10", src: "/images/review-p1-r4t8w2/U10.jpg", w: 525, h: 700, caption: "Pack bench, portrait", where: "Not placed on any page yet" },
  { id: "U11", src: "/images/review-p1-r4t8w2/U11.jpg", w: 525, h: 700, caption: "Bagger close-up with carrier label", where: "Blog (FBA Prep, Technology, Customer Experience)" },
  { id: "U12", src: "/images/review-p1-r4t8w2/U12.jpg", w: 525, h: 700, caption: "Barcode scanner on a stand", where: "Blog (FBA Prep, Technology)" },
  { id: "U13", src: "/images/review-p1-r4t8w2/U13.jpg", w: 700, h: 459, caption: "Poly bags with suffocation warnings", where: "Blog (FBA Prep, Customer Experience)" },
  { id: "U14", src: "/images/review-p1-r4t8w2/U14.jpg", w: 700, h: 525, caption: "Returns workstation", where: "Blog (Technology, Customer Experience, E-Commerce) \u00b7 returns service pages" },
  { id: "U15", src: "/images/review-p1-r4t8w2/U15.jpg", w: 700, h: 443, caption: "Inspection tables", where: "Blog (Platform Guides, Comparisons, E-Commerce) \u00b7 E-Commerce industry \u00b7 returns service pages" },
  { id: "U16", src: "/images/review-p1-r4t8w2/U16.jpg", w: 525, h: 700, caption: "Items bagged and packed in a carton", where: "Blog (FBA Prep, Platform Guides, Customer Experience, E-Commerce) \u00b7 E-Commerce industry \u00b7 fulfillment service pages" },
  { id: "U17", src: "/images/review-p1-r4t8w2/U17.jpg", w: 525, h: 700, caption: "Inbound pallets awaiting check-in", where: "Blog (Comparisons, Operations, Supplements, Retail, Healthcare) \u00b7 Healthcare and Supplements industry pages" },
]

const people: Shot[] = [
  { id: "H01", src: "/images/review-p1-r4t8w2/H01.jpg", w: 375, h: 500, caption: "Worker in frame (blurred here)" },
  { id: "H02", src: "/images/review-p1-r4t8w2/H02.jpg", w: 375, h: 500, caption: "Worker in frame (blurred here)" },
  { id: "H03", src: "/images/review-p1-r4t8w2/H03.jpg", w: 439, h: 500, caption: "Worker in frame (blurred here)" },
  { id: "H04", src: "/images/review-p1-r4t8w2/H04.jpg", w: 375, h: 500, caption: "Worker in frame (blurred here)" },
  { id: "H05", src: "/images/review-p1-r4t8w2/H05.jpg", w: 375, h: 500, caption: "Worker in frame (blurred here)" },
  { id: "H06", src: "/images/review-p1-r4t8w2/H06.jpg", w: 375, h: 500, caption: "Worker in frame (blurred here)" },
  { id: "H07", src: "/images/review-p1-r4t8w2/H07.jpg", w: 375, h: 500, caption: "Worker in frame (blurred here)" },
]

const brands: Shot[] = [
  { id: "B01", src: "/images/review-p1-r4t8w2/B01.jpg", w: 370, h: 520, caption: "Boxes with expiry stickers" },
  { id: "B02", src: "/images/review-p1-r4t8w2/B02.jpg", w: 520, h: 473, caption: "Boxes with expiry stickers, angle" },
  { id: "B03", src: "/images/review-p1-r4t8w2/B03.jpg", w: 390, h: 520, caption: "Toy packaging with FBA label (licensed character)" },
  { id: "B04", src: "/images/review-p1-r4t8w2/B04.jpg", w: 390, h: 520, caption: "Toy box with FBA label (licensed character)" },
  { id: "B05", src: "/images/review-p1-r4t8w2/B05.jpg", w: 490, h: 520, caption: "Carton of character lunch bags (licensed character)" },
  { id: "B06", src: "/images/review-p1-r4t8w2/B06.jpg", w: 390, h: 520, caption: "Cartons with shipping labels" },
  { id: "B07", src: "/images/review-p1-r4t8w2/B07.jpg", w: 390, h: 520, caption: "Bagged character cups, 'sold as set' label" },
  { id: "B08", src: "/images/review-p1-r4t8w2/B08.jpg", w: 390, h: 520, caption: "Case and glasses in a carton" },
  { id: "B09", src: "/images/review-p1-r4t8w2/B09.jpg", w: 390, h: 520, caption: "Bagged character cups (duplicate of B07)" },
]

const lot: Shot[] = [
  { id: "L01", src: "/images/review-p1-r4t8w2/L01.jpg", w: 240, h: 320, caption: "Lot / production batch label on a carton" },
]

const spare: Shot[] = [
  { id: "E01", src: "/images/review-p1-r4t8w2/E01.jpg", w: 525, h: 700, caption: "Wide view of the pack floor" },
  { id: "E02", src: "/images/review-p1-r4t8w2/E02.jpg", w: 525, h: 700, caption: "Side wall with door and awning" },
  { id: "E03", src: "/images/review-p1-r4t8w2/E03.jpg", w: 525, h: 700, caption: "Dock doors with a shipping container" },
  { id: "E04", src: "/images/review-p1-r4t8w2/E04.jpg", w: 525, h: 700, caption: "Dock door, close" },
  { id: "E05", src: "/images/review-p1-r4t8w2/E05.jpg", w: 525, h: 700, caption: "Open dock door with a truck" },
  { id: "E06", src: "/images/review-p1-r4t8w2/E06.jpg", w: 525, h: 700, caption: "Forklift, rear view" },
]

const batch2Used: Shot[] = [
  { id: "N01", src: "/images/review-p1-r4t8w2/N01.jpg", w: 450, h: 600, caption: "Stretch-wrapped pallet", where: "Blog (Business Strategy, Operations, Retail, B2B)" },
  { id: "N02", src: "/images/review-p1-r4t8w2/N02.jpg", w: 525, h: 700, caption: "Order packed in a carton", where: "Blog (Customer Experience, Platform Guides, E-Commerce)" },
  { id: "N03", src: "/images/review-p1-r4t8w2/N03.jpg", w: 525, h: 700, caption: "Bottles wrapped in bubble wrap", where: "Blog (FBA Prep, Customer Experience, E-Commerce)" },
]

const batch2Held: Shot[] = [
  { id: "M01", src: "/images/review-p1-r4t8w2/M01.jpg", w: 225, h: 300, caption: "Pallet with client shipping labels", where: "Barcodes and a client code are readable at full size. Needs a version with labels covered or turned away." },
  { id: "M02", src: "/images/review-p1-r4t8w2/M02.jpg", w: 126, h: 300, caption: "Taller pallet, same labels", where: "Same issue as M01." },
  { id: "M03", src: "/images/review-p1-r4t8w2/M03.jpg", w: 525, h: 700, caption: "Smartwatch box in a poly mailer", where: "Third-party product brand (PEJE) is legible. Same question as the other brand shots." },
  { id: "M04", src: "/images/review-p1-r4t8w2/M04.jpg", w: 525, h: 700, caption: "White van at the building", where: "Is this a Delivery Group vehicle? It has no branding, and the courier pages would imply it is ours." },
  { id: "M05", src: "/images/review-p1-r4t8w2/M05.jpg", w: 525, h: 700, caption: "Cardboard baler", where: "Real and useful for the sustainability posts, but the floor is stained and a warning sign is visible. Candidate for Jason's cleanup pass." },
]

function Grid({ shots, cols = "grid-cols-2 md:grid-cols-4" }: { shots: Shot[]; cols?: string }) {
  return (
    <div className={`grid ${cols} gap-4`}>
      {shots.map(s => (
        <figure key={s.id} className="m-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} width={s.w} height={s.h} alt={s.caption} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-md bg-[#F7F6F3]" />
          <figcaption className="mt-1.5 text-[12.5px] leading-snug text-[#3D3D3D]">
            <span className="font-mono font-semibold text-[#8F6F12] mr-1.5">{s.id}</span>
            {s.caption}
            {s.where && <span className="block text-[#737373] mt-0.5">{s.where}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

const h2 = "text-xl font-semibold text-[#0D0D0D] mt-14 mb-1"
const sub = "text-[14px] text-[#737373] mb-4 max-w-[680px]"

export default function PhotoReviewPage() {
  return (
    <div className="bg-white">
      <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-3">Photo review: batches 1 and 2</h1>
        <p className="text-[16px] text-[#737373] leading-relaxed max-w-[680px] mb-2">
          Batch 1: 45 photos from Allenn, 16 in use on staging, 29 held back. Batch 2 is at the bottom. Below is every photo and why, so you can approve, change, or veto before anything goes to the live site.
        </p>
        <p className="text-[13px] text-[#737373] mb-10">Prepared October 6, updated October 9, 2026. Reply with photo IDs (for example &quot;U03 out, B03 ok&quot;).</p>

        <div className="border border-[#E2DFD8] rounded-lg p-5 md:p-6 mb-8">
          <h2 className="text-lg font-semibold text-[#0D0D0D] mb-3">Update, Oct 9</h2>
          <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-1">The 5 industries images</h3>
          <p className="text-[14.5px] text-[#3D3D3D] mb-4 max-w-[680px]">
            The new &quot;NEW AI PICTURES&quot; folder contained the same 5 industries images that came in the Oct 6 zip (Industries hero, E-Commerce, Retail, Healthcare, Supplements). The files are identical, so nothing changed on the site. If retouched versions exist, they were not in that folder. Please send them again and we will swap them in.
          </p>
          <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-1">What worked</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-[14.5px] text-[#3D3D3D] max-w-[680px] mb-4">
            <li>The 5 AI images are in use on the Industries page and each industry card.</li>
            <li>Jason&apos;s retouched loading docks (U08) are in, with the company sign.</li>
            <li>3 clean photos from the second batch are live on staging: the wrapped pallet and two packed cartons (N01 to N03).</li>
            <li>DHL boxes (U01) are approved by Mr White (partner logos).</li>
          </ul>
          <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] mb-1">Still needed</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-[14.5px] text-[#3D3D3D] max-w-[680px]">
            <li>Retouched versions of the shots that show machine brand names (Rollbag bagger, Yale reach truck, forklift), and the three decisions below.</li>
          </ul>
        </div>

        <div className="border border-[#E2DFD8] rounded-lg p-5 md:p-6 bg-[#FBFAF7]">
          <h2 className="text-lg font-semibold text-[#0D0D0D] mb-3">Three decisions needed, one settled</h2>
          <p className="text-[14.5px] text-[#3D3D3D] mb-3">
            <strong className="font-semibold">Settled: DHL boxes (U01).</strong>{" "}Mr White approved showing partners&apos; logos in website imagery on Oct 6, so the DHL eCommerce pallets stay.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14.5px] text-[#3D3D3D]">
            <li><strong className="font-semibold">People (H01 to H07).</strong> Seven shots show a worker with no photo release on file. Get releases, or ask Allenn to reshoot with hands only.</li>
            <li><strong className="font-semibold">Other companies&apos; products (B01 to B09, M03).</strong> Toys with licensed characters, a sold-as-set label, and a smartwatch box. These are not partners, so the Oct 6 approval does not clearly cover them. OK to show, or reshoot with unbranded goods?</li>
            <li><strong className="font-semibold">Client labels (L01, M01, M02).</strong> Shipping labels and batch labels with barcodes from a client&apos;s product. Needs the client&apos;s OK or a cleaner shot.</li>
          </ol>
        </div>

        <h2 className={h2}>In use on staging (16, plus U03 pulled)</h2>
        <p className={sub}>These appear on blog posts, industries, and service pages on staging only. Two (U06, U10) are ready but not placed yet. Production is untouched. Machine brand names (Yale, Rollbag) are still visible in U04, U09, U10 and U11 until retouched versions replace them.</p>
        <Grid shots={used} />

        <h2 className={h2}>Held back: people (7)</h2>
        <p className={sub}>Faces are blurred here on purpose. Not used until releases are signed, or until reshot with hands only.</p>
        <Grid shots={people} cols="grid-cols-2 md:grid-cols-4" />

        <h2 className={h2}>Held back: other companies&apos; products (9)</h2>
        <p className={sub}>Good FBA prep and kitting shots, but they show licensed characters or third-party packaging.</p>
        <Grid shots={brands} cols="grid-cols-2 md:grid-cols-4" />

        <h2 className={h2}>Held back: client label (1)</h2>
        <p className={sub}>Shown small on purpose so the label is not readable.</p>
        <Grid shots={lot} cols="grid-cols-2 md:grid-cols-4" />

        <h2 className={h2}>Fine, but not needed yet (6)</h2>
        <p className={sub}>Usable. We have better versions of the same scenes. Say the word and they go in.</p>
        <Grid shots={spare} cols="grid-cols-2 md:grid-cols-4" />


        <h2 className={h2}>Batch 2 (8 new photos, Oct 9)</h2>
        <p className={sub}>Allenn sent 8 more phone photos plus the same 5 AI images as before (already in use). I put the 3 clean ones on staging and held the other 5.</p>
        <h3 className="text-[15px] font-semibold text-[#0D0D0D] mb-2">In use on staging (3)</h3>
        <Grid shots={batch2Used} />
        <h3 className="text-[15px] font-semibold text-[#0D0D0D] mt-8 mb-2">Held back (5)</h3>
        <Grid shots={batch2Held} />

        <h2 className={h2}>Not usable (5), not shown</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-[14.5px] text-[#3D3D3D] max-w-[680px]">
          <li>3 photos of a monitor showing the warehouse system (one with the system address and admin name, two washed out by glare).</li>
          <li>1 photo of a personal desktop.</li>
          <li>1 screenshot of an order-volume chart, not a facility photo.</li>
        </ul>

        <h2 className={h2}>Still missing from the shot list</h2>
        <p className="text-[14.5px] text-[#3D3D3D] max-w-[680px]">
          Lot and expiration close-ups, unboxing, hazmat storage, team at work, vehicles and drivers, palletizing, sustainability, and all video clips (V01 to V08). The homepage and about 35 service pages still use stock images until those arrive.
        </p>
      </div>
    </div>
  )
}
