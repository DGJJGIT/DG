import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { posts } from "@/lib/blog"
import SectionLabel from "@/components/ui/SectionLabel"
import Badge from "@/components/ui/Badge"

export const metadata: Metadata = {
  title: "Blog — Logistics Insights & Industry News",
  description: "Expert perspectives on last-mile delivery, logistics technology, industry trends, and supply chain best practices from the Delivery Group team.",
  alternates: { canonical: "https://deliverygroupinc.com/blog" },
  openGraph: {
    title: "Blog — Logistics Insights & Industry News",
    description: "Expert perspectives on last-mile delivery, logistics technology, industry trends, and supply chain best practices from the Delivery Group team.",
  },
}

const categories = Array.from(new Set(posts.map(p => p.category)))

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel light>Insights & Analysis</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-5">
            The Delivery Group Blog.
          </h1>
          <p className="text-[16px] text-[#A3A3A3] max-w-[480px] leading-relaxed">
            Expert analysis on last-mile logistics, supply chain strategy, and the technology shaping the future of delivery.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className="group block bg-[#F7F6F3] rounded-xl overflow-hidden border border-[#E2DFD8] hover:border-[#B8962E] transition-all mb-12">
            {featured.image && (
              <div className="relative w-full h-[240px] md:h-[320px] bg-[#151515]">
                <Image src={featured.image} alt={featured.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="gold">{featured.category}</Badge>
                <span className="text-[12.5px] text-[#737373]">{featured.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] tracking-tight mb-3 group-hover:text-[#B8962E] transition-colors max-w-[640px]">
                {featured.title}
              </h2>
              <p className="text-[14.5px] text-[#737373] leading-relaxed max-w-[580px] mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[12.5px] text-[#737373]">
                  <Clock size={12} /> {featured.readTime}
                </span>
                <span className="flex items-center gap-1 text-[13px] font-medium text-[#B8962E]">
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-[#F7F6F3] rounded-lg border border-[#E2DFD8] hover:border-[#B8962E] transition-all overflow-hidden">
                {post.image && (
                  <div className="relative w-full h-[160px] bg-[#151515]">
                    <Image src={post.image} alt={post.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="flex items-center justify-between mb-4 px-6 pt-5">
                  <Badge variant="muted">{post.category}</Badge>
                  <span className="flex items-center gap-1 text-[11.5px] text-[#737373]">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-[14.5px] font-semibold text-[#0D0D0D] leading-snug mb-2 group-hover:text-[#B8962E] transition-colors flex-1 px-6">
                  {post.title}
                </h3>
                <p className="text-[13px] text-[#737373] leading-relaxed mb-4 line-clamp-2 px-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E2DFD8] px-6 pb-5">
                  <span className="text-[12px] text-[#A3A3A3]">{post.date}</span>
                  <span className="flex items-center gap-1 text-[12.5px] font-medium text-[#B8962E]">
                    Read <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
