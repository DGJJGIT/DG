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
  ip?: string
  ua?: string
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


// Submissions the API REJECTED (missing fields, security check), kept with the reason in
// data/rejected.jsonl so a real visitor's details are never lost if validation or the security
// check misfires (three quote leads were lost that way, Oct 19-27 2026). Security tokens are not
// stored. View with GET /api/admin/leads?file=rejected. Never throws.
const REJECTED_FILE = join(DATA_DIR, "rejected.jsonl")

export function backupRejected(source: "quote" | "contact", reason: string, data: Record<string, unknown>,
                               meta: { ip?: string; ua?: string; honeypot?: boolean } = {}) {
  try {
    const clean: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(data || {})) {
      if (/token|captcha|turnstile|bot_field/i.test(k)) continue
      clean[k] = typeof v === "string" ? v.slice(0, 5000) : v
    }
    console.warn(`[lead rejected] source=${source} reason=${reason} email=${String(clean.email || "")}`)
    mkdirSync(DATA_DIR, { recursive: true })
    appendFileSync(REJECTED_FILE, JSON.stringify({ source, reason, ...clean, ip: meta.ip || "", ua: (meta.ua || "").slice(0, 200),
      ...(meta.honeypot ? { honeypot: true } : {}), savedAt: new Date().toISOString() }) + "\n", "utf8")
  } catch {
    // best-effort, like backupLead
  }
}
