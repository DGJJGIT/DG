// Lead beacon endpoint (see lib/first-touch.ts): the request itself is the record (Cloudflare analytics logs the
// path), so it only acknowledges. Not a page; never cached.
export function POST() {
  return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } })
}

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } })
}
