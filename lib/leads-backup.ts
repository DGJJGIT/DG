import { appendFileSync, mkdirSync } from "fs"
import { join } from "path"

const DATA_DIR = join(process.cwd(), "data")
const LEADS_FILE = join(DATA_DIR, "leads.jsonl")

export type LeadRecord = {
  source: "quote" | "contact"
  firstName?: string
  lastName?: string
  email: string
  company?: string
  phone?: string
  service?: string
  volume?: string
  geography?: string
  notes?: string
  subject?: string
  message?: string
  seoService?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  first_touch_referrer?: string
  first_touch_landing?: string
  savedAt: string
}

// Write lead to a JSON Lines file before touching HubSpot.
// Each line is one complete JSON object. Never throws — a backup
// failure must never block the actual form submission.
export function backupLead(data: Omit<LeadRecord, "savedAt">) {
  try {
    mkdirSync(DATA_DIR, { recursive: true })
    const record: LeadRecord = { ...data, savedAt: new Date().toISOString() }
    appendFileSync(LEADS_FILE, JSON.stringify(record) + "\n", "utf8")
  } catch {
    // Intentionally swallowed — backup is best-effort
  }
}
