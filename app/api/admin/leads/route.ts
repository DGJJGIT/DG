import { NextRequest, NextResponse } from "next/server"
import { readFileSync, existsSync } from "fs"
import { join } from "path"

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token")
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const file = join(process.cwd(), "data", "leads.jsonl")
  if (!existsSync(file)) {
    return NextResponse.json({ leads: [], total: 0, message: "No leads yet" })
  }

  const lines = readFileSync(file, "utf8")
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l))

  lines.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime())

  return NextResponse.json({ leads: lines, total: lines.length })
}
