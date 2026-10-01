/**
 * Clamp a meta description to <=160 chars at a word boundary (SEO snippet limit).
 * Leaves the source text (excerpt / description) untouched for on-page display.
 */
export function clampMeta(s: string, max = 160): string {
  if (!s || s.length <= max) return s
  const cut = s.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(" ")
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:\s]+$/, "") + "…"
}
