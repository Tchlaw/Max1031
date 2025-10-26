import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Temporary static content - you'll make this dynamic
const posts = {
  "1031-exchange-basics": {
    title: "Understanding 1031 Exchange Basics",
    date: "2024-01-15",
    content: `
      
  },
  "choosing-replacement-property": {
    title: "How to Choose the Right Replacement Property",
    date: "2024-01-20",
    content: `
      <h2>Location Considerations</h2>
      <p>When selecting a replacement property, location is crucial. Consider factors like market growth potential, rental demand, and economic stability of the area.</p>
      
      <h2>Property Type and Value</h2>
      <p>Your replacement property should align with your investment goals. Consider whether you want to maintain the same property type or diversify into a different asset class.</p>
    `
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]
  
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="container mx-auto py-12 px-4 max-w-4xl">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
