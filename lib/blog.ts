import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

export interface Post {
  slug: string
  title: string
  excerpt: string
  body: string
  category: string
  date: string
  readTime: string
  author: string
  image?: string
  updated?: string
  seoTitle?: string
  faqs: { q: string; a: string }[]
}

// "## Frequently Asked Questions" blocks are written as **Question?** followed by the answer paragraph.
// Parsed from the markdown so the FAQPage schema matches the visible text exactly.
function plain(md: string): string {
  return md.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\*\*|__|`/g, "").replace(/\*/g, "").replace(/\s+/g, " ").trim()
}
function extractFaqs(content: string): { q: string; a: string }[] {
  const m = content.match(/^##\s+(?:Frequently Asked Questions|FAQs?)\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im)
  if (!m) return []
  const out: { q: string; a: string }[] = []
  if (/^###\s+/m.test(m[1])) {
    // "### Question?" headings, answer = the paragraph(s) until the next heading
    for (const chunk of m[1].split(/^###\s+/m).slice(1)) {
      const nl = chunk.indexOf("\n")
      const q = plain(nl === -1 ? chunk : chunk.slice(0, nl))
      const body = (nl === -1 ? "" : chunk.slice(nl + 1)).trim()
      const a = plain(body.split(/\n\s*\n/)[0] || "")  // first answer paragraph only
      if (q.endsWith("?") && a) out.push({ q, a })
    }
    return out
  }
  const re = /^\*\*(.+?\?)\*\*(?:[ \t]+|[ \t]*\n(?:[ \t]*\n)?)((?:(?!\*\*.+?\?\*\*)[^\n]+\n?)+)/gm
  let x: RegExpExecArray | null
  while ((x = re.exec(m[1])) !== null) {
    const a = plain(x[2])
    if (a) out.push({ q: plain(x[1]), a })
  }
  return out
}

const contentDir = path.join(process.cwd(), "content", "blog")

function loadPosts(): Post[] {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"))

  const allPosts = files.map((file) => {
    const slug = file.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8")
    const { data, content } = matter(raw)
    const body = marked.parse(content, { async: false }) as string

    return {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      body,
      category: data.category ?? "",
      date: data.date ?? "",
      readTime: data.readTime ?? "",
      author: data.author ?? "",
      image: data.image,
      updated: data.updated,
      seoTitle: data.seoTitle,
      faqs: extractFaqs(content),
    } satisfies Post
  })

  // Sort by date descending
  allPosts.sort((a, b) => {
    const da = new Date(a.date)
    const db = new Date(b.date)
    return db.getTime() - da.getTime()
  })

  return allPosts
}

export const posts: Post[] = loadPosts()

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}
