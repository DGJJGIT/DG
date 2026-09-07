import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicit allow for AI crawlers (AEO requirement — some CF configs block these by default)
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "ClaudeBot",
          "claude-web",
          "Perplexity-User",
          "PerplexityBot",
          "Google-Extended",
          "Amazonbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://deliverygroupinc.com/sitemap.xml",
  }
}
