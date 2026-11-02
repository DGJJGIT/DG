// botcheck: tag a saved submission as human / suspect / bot, with the reasons. Tags only: nothing is
// deleted, so a misjudged real lead is still there. Same rules as botcheck.py used by our other sites'
// form logs (form-log on the lander server); keep the two in sync.

const BOT_UA = /(curl|wget|python|httpclient|okhttp|go-http|java\/|libwww|scrapy|headless|phantom|selenium|puppeteer|playwright|bot\b|spider|crawler|axios|node-fetch|postman)/i
const SPAM_WORDS = /(seo service|backlink|guest post|rank(ing)? (your|on) (google|first page)|web ?design (offer|service)|crypto|bitcoin|casino|betting|viagra|cialis|loan offer|forex signal|lead generation service|increase (your )?traffic|dear (sir|madam)|we can help your website|outsourc)/i
const DISPOSABLE = new Set(["mailinator.com", "guerrillamail.com", "10minutemail.com", "tempmail.com", "temp-mail.org", "yopmail.com",
  "trashmail.com", "sharklasers.com", "getnada.com", "dispostable.com", "maildrop.cc", "throwawaymail.com"])
const LINK = /(https?:\/\/|www\.)/gi
const NAME_KEYS = new Set(["name", "firstname", "first_name", "lastname", "last_name", "contact_name"])
const TEXT_KEYS = new Set(["message", "notes", "subject", "comments", "details"])

export type BotVerdict = { verdict: "human" | "suspect" | "bot"; tags: string[] }

function gibberish(s: string): boolean {
  const t = (s || "").replace(/[^A-Za-z]/g, "")
  if (t.length < 8) return false
  const vowels = (t.match(/[aeiou]/gi) || []).length
  return vowels / t.length < 0.15 || /[bcdfghjklmnpqrstvwxz]{6,}/i.test(t)
}

export function classify(fields: Record<string, unknown>, ua = "", honeypot = false, repeats = 0): BotVerdict {
  const f: Record<string, string> = {}
  for (const [k, v] of Object.entries(fields || {})) f[k] = v == null ? "" : String(v)
  const strong: string[] = [], weak: string[] = []
  if (honeypot) strong.push("honeypot")
  if (ua && BOT_UA.test(ua)) strong.push("bot_user_agent")
  if (!ua) weak.push("no_user_agent")
  const text = Object.entries(f).filter(([k]) => TEXT_KEYS.has(k.toLowerCase())).map(([, v]) => v).join(" ")
  const names = Object.entries(f).filter(([k]) => NAME_KEYS.has(k.toLowerCase())).map(([, v]) => v)
  const links = (text.match(LINK) || []).length + names.reduce((n, s) => n + (s.match(LINK) || []).length, 0)
  if (links >= 2) strong.push(`links_x${links}`)
  else if (links === 1) weak.push("link_in_message")
  if (SPAM_WORDS.test(text)) (links ? strong : weak).push("spam_phrases")
  if (names.some((n) => /(https?:\/\/|www\.)/i.test(n))) strong.push("link_in_name")
  const email = Object.entries(f).find(([k]) => k.toLowerCase() === "email")?.[1] || ""
  const dom = email.includes("@") ? email.split("@").pop()!.toLowerCase() : ""
  if (DISPOSABLE.has(dom)) weak.push("disposable_email")
  if (names.some(gibberish)) weak.push("gibberish_name")
  const filled = names.map((n) => n.trim()).filter(Boolean)
  if (filled.length >= 2 && new Set(filled.map((n) => n.toLowerCase())).size === 1) weak.push("same_value_in_name_fields")
  if (repeats >= 5) weak.push(`repeat_ip_x${repeats}`)
  return { verdict: strong.length ? "bot" : weak.length ? "suspect" : "human", tags: [...strong, ...weak] }
}
