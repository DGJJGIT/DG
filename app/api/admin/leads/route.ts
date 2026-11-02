import { NextRequest, NextResponse } from "next/server"
import { readFileSync, existsSync } from "fs"
import { join } from "path"
import { classify } from "@/lib/botcheck"

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token")
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // ?file=rejected lists submissions the API rejected (see backupRejected), default = accepted leads
  const which = req.nextUrl.searchParams.get("file") === "rejected" ? "rejected.jsonl" : "leads.jsonl"
  const file = join(process.cwd(), "data", which)
  if (!existsSync(file)) {
    return NextResponse.json({ leads: [], total: 0, message: "No leads yet" })
  }

  const lines = readFileSync(file, "utf8")
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l))

  lines.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime())

  // Bot tags on every record (old ones too): human / suspect / bot + reasons. Nothing is deleted.
  // ?bots=exclude (humans + suspects) | only | humans | suspects
  const perIp: Record<string, number> = {}
  for (const l of lines) if (l.ip) perIp[l.ip] = (perIp[l.ip] || 0) + 1
  const tagged = lines.map((l) => ({ ...l, bot: classify(l, l.ua || "", !!l.honeypot, l.ip ? perIp[l.ip] : 0) }))
  const mode = req.nextUrl.searchParams.get("bots")
  const shown = tagged.filter((l) =>
    mode === "exclude" ? l.bot.verdict !== "bot" : mode === "only" ? l.bot.verdict === "bot"
      : mode === "humans" ? l.bot.verdict === "human" : mode === "suspects" ? l.bot.verdict === "suspect" : true)
  const counts: Record<string, number> = { human: 0, suspect: 0, bot: 0 }
  for (const l of tagged) counts[l.bot.verdict]++
  return NextResponse.json({ leads: shown, total: shown.length, counts })
}
