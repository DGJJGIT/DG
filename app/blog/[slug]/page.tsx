import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, ArrowRight } from "lucide-react"
import { posts, getPost } from "@/lib/blog"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"
import JsonLd from "@/components/JsonLd"
import { clampMeta } from "@/lib/seo/meta"
import { getPostImagery, withInlineImages } from "@/lib/imagery"

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

// Title fitting: "<title> | Delivery Group Inc." when it fits in 60 chars; else the part before a ": " / " - "
// separator; else the full post title on its own (never cut mid-phrase with an ellipsis).
function shortTitle(title: string): string | { absolute: string } {
  if (title.length <= 38) return title
  for (const sep of [": ", " — ", " - "]) {
    const i = title.indexOf(sep)
    if (i > 10 && i <= 38) return title.slice(0, i)
  }
  return { absolute: title }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Not Found" }
  const metaTitle = shortTitle(post.seoTitle || post.title)
  return {
    title: metaTitle,
    description: clampMeta(post.excerpt),
    openGraph: {
      type: "article",
      title: typeof metaTitle === "string" ? metaTitle : metaTitle.absolute,
      description: clampMeta(post.excerpt),
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: getPostImagery(post.slug, post.category).hero.src, alt: getPostImagery(post.slug, post.category).hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof metaTitle === "string" ? metaTitle : metaTitle.absolute,
      description: clampMeta(post.excerpt),
    },
    alternates: { canonical: `https://deliverygroupinc.com/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  const { hero, inline } = getPostImagery(post.slug, post.category)
  const bodyHtml = withInlineImages(post.body, inline)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: clampMeta(post.excerpt),
          image: `https://deliverygroupinc.com${hero.src}`,
          datePublished: new Date(post.date).toISOString(),
          dateModified: new Date(post.updated || post.date).toISOString(),
          mainEntityOfPage: { "@type": "WebPage", "@id": `https://deliverygroupinc.com/blog/${post.slug}` },
          author: post.author
            ? { "@type": "Person", name: post.author }
            : { "@type": "Organization", name: "Delivery Group Inc." },
          publisher: {
            "@type": "Organization",
            "@id": "https://deliverygroupinc.com/#org",
            name: "Delivery Group Inc.",
            logo: { "@type": "ImageObject", url: "https://deliverygroupinc.com/logo.png" },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `https://deliverygroupinc.com/blog/${post.slug}#webpage`,
          url: `https://deliverygroupinc.com/blog/${post.slug}`,
          name: post.title,
          isPartOf: { "@type": "WebSite", "@id": "https://deliverygroupinc.com/#website" },
          about: { "@type": "Organization", "@id": "https://deliverygroupinc.com/#org" },
          dateModified: new Date(post.updated || post.date).toISOString(),
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".quick-answer"] },
        }}
      />
      {post.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
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
            {post.updated && <span className="text-[12.5px] text-[#737373]">Updated {post.updated}</span>}
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5 leading-snug">
            {post.title}
          </h1>
          <p className="text-[16px] text-[#A3A3A3] leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <div className="relative -mt-12 bg-[linear-gradient(to_bottom,#0D0D0D_50%,#ffffff_50%)]">
        <div className="relative max-w-[960px] mx-auto px-6 md:px-10">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#151515] shadow-lg">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              sizes="(min-width: 960px) 880px, 100vw"
              style={{ objectPosition: hero.position }}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          {post.answer && (
            <div className="mb-8 rounded-lg border border-[#E2DFD8] bg-[#F7F6F3] p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#B8962E] mb-2">Quick answer</div>
              <p className="quick-answer text-[16px] text-[#3D3D3D] leading-relaxed">{post.answer}</p>
            </div>
          )}
          <div
            className="prose prose-dg max-w-none"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
          <div className="mt-10 pt-8 border-t border-[#E2DFD8]">
            <div className="text-[13px] text-[#737373]">Written by {post.author}</div>
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
                  <div className="relative w-full h-[140px] bg-[#151515]">
                    <Image
                      src={getPostImagery(r.slug, r.category).hero.src}
                      alt={getPostImagery(r.slug, r.category).hero.alt}
                      fill
                      sizes="(min-width: 768px) 400px, 100vw"
                      style={{ objectPosition: getPostImagery(r.slug, r.category).hero.position }}
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
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
