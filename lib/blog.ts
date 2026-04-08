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
