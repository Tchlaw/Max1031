import Link from "next/link"
import { Button } from "@/components/ui/button"

// This is a simple example - you'll expand this
const posts = [
  {
    slug: "1031-exchange-basics",
    title: "Understanding 1031 Exchange Basics",
    excerpt: "Learn the fundamentals of 1031 exchanges and how they can help you defer capital gains taxes.",
    date: "2024-01-15"
  },
  {
    slug: "choosing-replacement-property",
    title: "How to Choose the Right Replacement Property",
    excerpt: "Key factors to consider when selecting your replacement property for a successful exchange.",
    date: "2024-01-20"
  }
  
  {
    slug: "deferring-gains-fire-damaged-lot",
    title: "How to Defer Capital Gains When Selling Your Fire-Damaged Lot",
    excerpt: "Learn how Sections 1031 and 1033 let property owners defer or eliminate capital gains taxes after a wildfire or disaster.",
    date: "2025-10-26"
}


]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Learn About 1031 Exchanges</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Button asChild variant="outline">
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  )
}
