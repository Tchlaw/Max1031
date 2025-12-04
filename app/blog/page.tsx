import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

const postsDir = path.join(process.cwd(), "content/posts");

export const metadata: Metadata = {
  title: "Learn About 1031 Exchanges | Maximize 1031",
  description: "Clear, practical strategies to defer taxes, reinvest smarter, and build long-term wealth through 1031 exchanges.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Learn About 1031 Exchanges | Maximize 1031",
    description: "Clear, practical strategies to defer taxes, reinvest smarter, and build long-term wealth through 1031 exchanges.",
    type: "website",
  },
};

export default function BlogIndex() {
  const files = fs.readdirSync(postsDir);
  const posts = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(fileContent);
      return {
        ...data,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort((a: any, b: any) => {
      // Put featured posts first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Otherwise sort by date
      return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-sky-900 to-blue-800 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Learn About 1031 Exchanges
          </h1>
          <p className="text-sky-100 mt-4 text-lg max-w-xl mx-auto">
            Clear, practical strategies to defer taxes, reinvest smarter, and build long-term wealth
          </p>
        </div>
      </section>
      
      {/* Blog List */}
      <section className="mx-auto max-w-3xl px-4 py-12 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
        {posts.map((post: any) => (
          <article 
            key={post.slug} 
            className="border-b pb-6 hover:bg-gray-50 transition-colors rounded-lg p-3 -mx-3"
          >
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-semibold hover:underline text-blue-700">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-500 text-sm mt-1">
              {new Date(post.date).toLocaleDateString()}
            </p>
            {post.excerpt && (
              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </article>
        ))}
      </section>
    </>
  );
}
