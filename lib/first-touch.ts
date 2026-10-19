// Lead attribution for the AEO dashboard (#305): remember what first brought a visitor (referrer host, landing
// page, UTM tags) and, after a successful form submit, post a path-encoded beacon. The path carries the data
// because this Cloudflare plan's analytics expose neither referrer nor query string. No personal data is sent.
const KEY = "dg_ft"

type FirstTouch = { r: string; l: string; s: string; m: string }

export function captureFirstTouch() {
  try {
    if (localStorage.getItem(KEY)) return
    const q = new URLSearchParams(location.search)
    let r = ""
    try {
      r = document.referrer ? new URL(document.referrer).hostname : ""
    } catch {}
    if (r === location.hostname) r = ""
    const ft: FirstTouch = { r, l: location.pathname, s: q.get("utm_source") || "", m: q.get("utm_medium") || "" }
    if (/[?&](gclid|msclkid|gbraid|wbraid)=/.test(location.search) && !ft.m) ft.m = "cpc"
    localStorage.setItem(KEY, JSON.stringify(ft))
  } catch {}
}

// /lead-ping/<kind>/<referrer host>/<utm_source>/<utm_medium>/<landing path with "/" as "~">, "-" = empty
export function leadPing(kind: "contact" | "quote") {
  try {
    let ft: Partial<FirstTouch> = {}
    try {
      ft = JSON.parse(localStorage.getItem(KEY) || "{}")
    } catch {}
    const seg = (v?: string) => (v ? encodeURIComponent(v.replace(/\//g, "~")) : "-")
    const url = `/lead-ping/${kind}/${seg(ft.r)}/${seg(ft.s)}/${seg(ft.m)}/${seg(ft.l || "/")}`
    if (!(navigator.sendBeacon && navigator.sendBeacon(url))) fetch(url, { method: "POST", keepalive: true })
  } catch {}
}
