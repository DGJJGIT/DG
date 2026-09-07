import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, ArrowRight } from "lucide-react"
import { posts, getPost } from "@/lib/blog"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"
import JsonLd from "@/components/JsonLd"

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

// Shorten a blog post title to fit within 38 chars (template adds " | Delivery Group Inc." = 22, total ≤60)
function shortTitle(title: string): string {
  if (title.length <= 38) return title
  for (const sep of [": ", " — ", " - "]) {
    const i = title.indexOf(sep)
    if (i > 10 && i <= 38) return title.slice(0, i)
  }
  const trimmed = title.slice(0, 38)
  const lastSpace = trimmed.lastIndexOf(" ")
  return (lastSpace > 10 ? trimmed.slice(0, lastSpace) : trimmed) + "…"
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Not Found" }
  const metaTitle = shortTitle(post.title)
  return {
    title: metaTitle,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: metaTitle,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: post.excerpt,
    },
    alternates: { canonical: `https://deliverygroupinc.com/blog/${slug}` },
    keywords: [post.category],
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.image
            ? `https://deliverygroupinc.com${post.image}`
            : undefined,
          datePublished: new Date(post.date).toISOString(),
          author: {
            "@type": "Organization",
            name: "Delivery Group Inc.",
          },
          publisher: {
            "@type": "Organization",
            name: "Delivery Group Inc.",
          },
        }}
      />
      <section className="bg-[#0D0D0D] text-white pt-16 pb-20">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] text-[#737373] hover:text-white transition-colors mb-8">
            <ArrowLeft size={13} /> All Articles
          </Link>
          <div className="flex flex-wrap gap-3 mb-5">
            <Badge variant="gold">{post.category}</Badge>
            <span className="flex items-center gap-1.5 text-[12.5px] text-[#737373]">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-[12.5px] text-[#737373]">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5 leading-snug">
            {post.title}
          </h1>
          <p className="text-[16px] text-[#A3A3A3] leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {post.image && (
        <div className="relative w-full h-[320px] md:h-[420px] bg-[#151515]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div
            className="prose prose-dg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <div className="mt-10 pt-8 border-t border-[#E2DFD8]">
            <div className="text-[13px] text-[#737373]">Written by the {post.author}</div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#F7F6F3] border-t border-[#E2DFD8]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <SectionLabel>Related Articles</SectionLabel>
            <div className="grid md:grid-cols-3 gap-5 mt-6">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group bg-white rounded-lg border border-[#E2DFD8] hover:border-[#B8962E] transition-all overflow-hidden">
                  {r.image && (
                    <div className="relative w-full h-[140px] bg-[#151515]">
                      <Image src={r.image} alt={r.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  <div className="p-6">
                    <Badge variant="muted">{r.category}</Badge>
                    <h3 className="text-[14px] font-semibold text-[#0D0D0D] mt-3 mb-2 group-hover:text-[#B8962E] transition-colors leading-snug">{r.title}</h3>
                    <div className="flex items-center gap-1 text-[12.5px] font-medium text-[#B8962E] mt-3">
                      Read <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
