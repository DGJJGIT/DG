import type { Metadata } from "next"
import { photos } from "@/lib/imagery"

// Unlisted working page for the photographer. Not linked anywhere, not in the
// sitemap, and marked noindex. Reachable only by its URL.
export const metadata: Metadata = {
  title: "Facility Shot List",
  robots: { index: false, follow: false, nocache: true },
}

type Photo = { id: string; scene: string; detail: string; usedOn: string; p1?: boolean }

const photoShots: Photo[] = [
  { id: "S01", scene: "Pick and pack station", detail: "Associate packing an order: handheld scanner, open carton, shipping label, filled shelves behind. One wide, one close on hands and label.", usedOn: "Fulfillment pages (16), Platform Guides blogs (17), E-commerce", p1: true },
  { id: "S02", scene: "Outbound dock and carrier pickup", detail: "Parcels or pallets staged by carrier, a trailer or van at the dock door, carrier driver collecting. DHL if possible, since the site leans on that partnership.", usedOn: "Courier & Delivery pages (10), Business Strategy blogs, Operations blogs", p1: true },
  { id: "S03", scene: "FBA prep bench", detail: "FNSKU labeling, poly bagging, bubble wrap, suffocation warning on the bag. Finished prepped cartons with Amazon shipment labels stacked and ready.", usedOn: "/amazon-fba-prep, FBA Prep blogs (5), Comparisons blogs", p1: true },
  { id: "S04", scene: "Receiving and inspection", detail: "Forklift unloading inbound pallets or a container, associate scanning and counting cartons at check-in.", usedOn: "3PL & Warehousing pages (6), Operations blogs, Comparisons blogs", p1: true },
  { id: "S05", scene: "Handheld scanner and workstation screen", detail: "Close-up of a scanner or monitor showing an inventory or order view. Blur or use dummy data so no client names or addresses are readable.", usedOn: "Technology blogs (4), Platform Guides blogs, /technology", p1: true },
  { id: "S06", scene: "Returns processing table", detail: "Returned cartons opened, items inspected and graded, restock bins beside the table.", usedOn: "Reverse Logistics pages (7), E-commerce blog, Retail", p1: true },
  { id: "S07", scene: "Lot code and expiration labeling", detail: "Close-up of lot and expiry labels on cartons or bottles, FIFO tags on racks, a rack label with a date.", usedOn: "/supplement-fulfillment, Supplements blogs (2), Healthcare, supplements industry", p1: true },
  { id: "S08", scene: "Kitting and assembly", detail: "A bench assembling bundles: inserts, branded boxes, tissue, a finished kit beside the components.", usedOn: "Kitting and subscription-box pages, Customer Experience blogs (3)", p1: true },
  { id: "S15", scene: "Front of building and dock doors", detail: "The entrance with signage, dock doors, an aerial or drone wide of the site. We only have a side wall today.", usedOn: "Homepage, /about, /contact, Locations, Comparisons blogs", p1: true },
  { id: "S09", scene: "Branded packaging and unboxing", detail: "A finished, branded package on a clean surface, then opened. Use a neutral demo brand.", usedOn: "Customer Experience blogs, Fulfillment pages, Retail" },
  { id: "S10", scene: "Hazmat storage area", detail: "Flammables cabinet, placards, compliant labeling, spill kit. Only if the facility actually handles these goods; confirm with compliance before anything is published.", usedOn: "Dangerous Goods pages (7)" },
  { id: "S11", scene: "Team at work", detail: "Associates in PPE at stations, an account manager at a desk, a supervisor walking the floor. Signed photo releases for everyone visible.", usedOn: "/about, /careers, homepage, Customer Experience blogs" },
  { id: "S12", scene: "Vehicles and drivers", detail: "Company vans or trucks and drivers loading and handing off. If delivery runs through partner carriers, skip and use S02 instead.", usedOn: "Courier & Delivery pages (10), Industry Insights blogs" },
  { id: "S13", scene: "Palletizing and stretch wrap", detail: "Associate wrapping a pallet, a labeled pallet ready for freight, a pallet being loaded onto a trailer.", usedOn: "B2B Logistics, Retail, Business Strategy and Operations blogs" },
  { id: "S14", scene: "Sustainability in practice", detail: "Cardboard baling, recycled-content packaging, any EV or charging equipment. Only what really exists.", usedOn: "Sustainability blogs (2)" },
  { id: "S16", scene: "Product-category packing", detail: "Packing shots with typical goods: apparel, toys, pet products, jewelry, sporting goods, beauty.", usedOn: "Category pages (apparel, toys, pet, jewelry, sporting goods, beauty)" },
]

const videoShots = [
  { id: "V01", clip: "Exterior establishing shot", detail: "Slow pass from the street or drone, ending on the entrance.", length: "10 to 15 s", goesOn: "Homepage hero loop" },
  { id: "V02", clip: "Aisle walk-through", detail: "Steady forward walk down a racking aisle.", length: "15 to 20 s", goesOn: "Homepage, 3PL pages" },
  { id: "V03", clip: "Pick and pack in action", detail: "Pick, scan, pack, label, seal.", length: "15 to 20 s", goesOn: "Fulfillment pages, e-commerce industry" },
  { id: "V04", clip: "FBA prep close-up", detail: "Labeling and bagging with hands in frame.", length: "10 to 15 s", goesOn: "/amazon-fba-prep" },
  { id: "V05", clip: "Pallet wrap and load-out", detail: "Wrap, move with forklift, load the trailer.", length: "15 s", goesOn: "Retail, B2B" },
  { id: "V06", clip: "Carrier pickup", detail: "Truck arrives at the dock, parcels loaded.", length: "10 to 15 s", goesOn: "Courier pages" },
  { id: "V07", clip: "Returns processing", detail: "Open, inspect, restock.", length: "10 to 15 s", goesOn: "Reverse Logistics pages, healthcare and retail industries" },
  { id: "V08", clip: "Team intro", detail: "Allenn or a supervisor walking the floor and saying what the facility does.", length: "30 to 45 s", goesOn: "/about" },
]

const existing = [
  { photo: photos.aisleRacking, label: "Racking aisle" },
  { photo: photos.supplementInventory, label: "Lot-labeled supplement inventory" },
  { photo: photos.palletStaging, label: "Palletized inventory staged" },
  { photo: photos.exterior, label: "Building exterior (side wall)" },
]

const th = "text-left text-[11.5px] uppercase tracking-wider text-[#737373] font-semibold px-4 py-3 bg-[#F7F6F3] border-b border-[#E2DFD8]"
const td = "align-top px-4 py-3.5 border-b border-[#EFEDE8] text-[14px] text-[#3D3D3D]"

export default function ShotListPage() {
  return (
    <div className="bg-white">
      <div className="max-w-[980px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D] mb-3">Facility shot list</h1>
        <p className="text-[16px] text-[#737373] leading-relaxed max-w-[640px] mb-2">
          What we need photographed and filmed at the Florence, KY facility so the blog, industries, and service pages stop relying on stock images and abstract illustrations.
        </p>
        <p className="text-[13px] text-[#737373] mb-8">For Allenn (shooting) and Jason (AI visuals). Prepared October 5, 2026.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            ["4", "real photos on the site today"],
            ["57", "blog posts, none with images in the text"],
            ["40+", "service pages still using stock photos"],
            ["0", "videos anywhere on the site"],
          ].map(([n, l]) => (
            <div key={l} className="border border-[#E2DFD8] rounded-lg p-4">
              <div className="text-2xl font-semibold tracking-tight text-[#0D0D0D]">{n}</div>
              <div className="text-[13px] text-[#737373] mt-1">{l}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-[#0D0D0D] mb-1">What we already have</h2>
        <p className="text-[14px] text-[#737373] mb-4">These four are already placed on the site. Please don&apos;t reshoot the same scenes; we need new angles and new operations.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {existing.map(({ photo, label }) => (
            <figure key={photo.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-md" style={{ objectPosition: photo.position }} />
              <figcaption className="text-[12.5px] text-[#737373] mt-1.5">{label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="text-[14px] bg-[#FBEFD9] text-[#6B4A07] rounded-lg px-4 py-3 mb-12">
          <strong className="font-semibold">Client branding.</strong>{" "}Two of these show other companies&apos; boxes. Before more are published, shoot with generic unbranded cartons or turn labels away from the camera.
        </p>

        <h2 className="text-xl font-semibold text-[#0D0D0D] mb-1">Photos to shoot</h2>
        <p className="text-[14px] text-[#737373] mb-4">Ordered by how many pages each shot unlocks. P1 first.</p>
        <div className="overflow-x-auto border border-[#E2DFD8] rounded-lg mb-12">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr>
                <th className={th}>ID</th>
                <th className={th}>Scene</th>
                <th className={th}>Used on</th>
                <th className={th}>Priority</th>
              </tr>
            </thead>
            <tbody>
              {photoShots.map(s => (
                <tr key={s.id}>
                  <td className={`${td} font-mono text-[13px] whitespace-nowrap`}>{s.id}</td>
                  <td className={td}>
                    <span className="block font-semibold text-[#0D0D0D] mb-0.5">{s.scene}</span>
                    {s.detail}
                  </td>
                  <td className={td}>{s.usedOn}</td>
                  <td className={`${td} whitespace-nowrap`}>
                    <span className={s.p1 ? "text-[12px] font-semibold text-[#8F6F12] border border-[#8F6F12] rounded-full px-2.5 py-0.5" : "text-[12px] font-semibold text-[#737373] border border-[#E2DFD8] rounded-full px-2.5 py-0.5"}>
                      {s.p1 ? "P1" : "P2/P3"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-[#0D0D0D] mb-1">Video to film</h2>
        <p className="text-[14px] text-[#737373] mb-4">Short clips, horizontal first. Each one also in vertical 9:16 if easy.</p>
        <div className="overflow-x-auto border border-[#E2DFD8] rounded-lg mb-12">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className={th}>ID</th>
                <th className={th}>Clip</th>
                <th className={th}>Length</th>
                <th className={th}>Goes on</th>
              </tr>
            </thead>
            <tbody>
              {videoShots.map(v => (
                <tr key={v.id}>
                  <td className={`${td} font-mono text-[13px] whitespace-nowrap`}>{v.id}</td>
                  <td className={td}>
                    <span className="block font-semibold text-[#0D0D0D] mb-0.5">{v.clip}</span>
                    {v.detail}
                  </td>
                  <td className={`${td} whitespace-nowrap`}>{v.length}</td>
                  <td className={td}>{v.goesOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">How to shoot</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          <div className="border border-[#E2DFD8] rounded-lg p-5">
            <h3 className="font-semibold text-[#0D0D0D] mb-2">Photos</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[#3D3D3D]">
              <li>Phone is fine: original quality, no filters, 3000 px or more on the long side.</li>
              <li>For each scene, one wide landscape shot and one tighter shot. A portrait version of the best one helps.</li>
              <li>Bright light, clean floor, tidy the frame first. No loose trash, no personal items.</li>
              <li>Nothing readable that identifies a customer: addresses, order numbers, names on screens or labels.</li>
            </ul>
          </div>
          <div className="border border-[#E2DFD8] rounded-lg p-5">
            <h3 className="font-semibold text-[#0D0D0D] mb-2">Video</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[#3D3D3D]">
              <li>Horizontal, 4K if the phone allows, 30 fps, held steady or on a gimbal.</li>
              <li>Clips of 10 to 30 seconds. No audio needed for the background loops.</li>
              <li>Film from two distances for each action: wide to set the scene, close to show the detail.</li>
              <li>Everyone visible signs a release first.</li>
            </ul>
          </div>
        </div>
        <p className="text-[14px] text-[#3D3D3D] mb-12">
          Name files like <code className="font-mono text-[13px] bg-[#F5EDD4] px-1.5 py-0.5 rounded">S01-pick-pack-wide-01.jpg</code> or <code className="font-mono text-[13px] bg-[#F5EDD4] px-1.5 py-0.5 rounded">V03-pick-pack-01.mp4</code> and send them in one shared folder.
        </p>

        <h2 className="text-xl font-semibold text-[#0D0D0D] mb-1">AI-generated visuals (for Jason)</h2>
        <p className="text-[14px] bg-[#FBEFD9] text-[#6B4A07] rounded-lg px-4 py-3 mb-4">
          <strong className="font-semibold">Rule:</strong>{" "}anything that shows our facility, our team, our vehicles, or a customer must be a real photo. AI is for concept art on blog posts about ideas, not about us.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          <div className="border border-[#E2DFD8] rounded-lg p-5">
            <h3 className="font-semibold text-[#0D0D0D] mb-2">OK for AI</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[#3D3D3D]">
              <li>Technology, Industry Insights, Sustainability, and Business Strategy blog art</li>
              <li>Route maps, data dashboards, network diagrams</li>
              <li>Abstract concept scenes (driver shortage, micro-fulfillment, EV fleets)</li>
              <li>Caption these as illustrations</li>
            </ul>
          </div>
          <div className="border border-[#E2DFD8] rounded-lg p-5">
            <h3 className="font-semibold text-[#0D0D0D] mb-2">Not OK for AI</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[#3D3D3D]">
              <li>Anything on /about, /careers, or the homepage hero</li>
              <li>Warehouse interiors presented as ours</li>
              <li>Vehicles, uniforms, signage, or people</li>
              <li>Any image of a customer&apos;s product or packaging</li>
            </ul>
          </div>
        </div>
        <p className="text-[14px] text-[#3D3D3D] max-w-[680px]">
          Style: photoreal editorial look, low warm light, deep black background with gold accents (#0D0D0D, #B8962E). 16:9, at least 2400 by 1350. No text, no logos, no close-up faces. Same treatment across all of them so they read as a set.
        </p>
      </div>
    </div>
  )
}
