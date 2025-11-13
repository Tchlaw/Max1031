import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import type { Metadata } from "next";

const postsDir = path.join(process.cwd(), "content/posts");

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

// ===== METADATA GENERATION FOR SEO =====
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const filePath = path.join(postsDir, `${params.slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return {
    title: data.title,
    description: data.description || data.excerpt || data.summary,
    authors: [{ name: data.author || "Maximize 1031" }],
    openGraph: {
      title: data.title,
      description: data.description || data.excerpt || data.summary,
      type: "article",
      publishedTime: data.date,
      authors: [data.author || "Maximize 1031"],
      url: `https://www.maximize1031.com/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description || data.excerpt || data.summary,
    },
    alternates: {
      canonical: `https://www.maximize1031.com/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(postsDir, `${params.slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);

  // ---- Load ALL posts (for Related Posts section) ----
  const files = fs.readdirSync(postsDir);
  const allPosts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data: frontmatter } = matter(raw);
    return {
      ...frontmatter,
      slug: frontmatter.slug || filename.replace(".mdx", ""),
      fileSlug: filename.replace(".mdx", ""),
    };
  });

  const related = (data.relatedPosts || [])
    .map((slug: string) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  // ===== SCHEMA MARKUP FOR SEO =====
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description || data.excerpt || data.summary,
    datePublished: data.date,
    dateModified: data.lastModified || data.date,
    author: {
      "@type": "Person",
      name: data.author || "Maximize 1031",
    },
    publisher: {
      "@type": "Organization",
      name: "Maximize 1031",
      url: "https://www.maximize1031.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.maximize1031.com/blog/${params.slug}`,
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline flex items-center gap-2 text-sm mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        {/* H1 tag - automatically created */}
        <h1 className="text-4xl font-bold leading-tight mb-3">
          {data.title}
        </h1>

        {/* Author and Date metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-10">
          {data.author && <span>By {data.author}</span>}
          <span>
            {new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>

        {/* MDX Content - headers in MDX will be H2, H3, etc. */}
        <div
          className="
            prose prose-lg
            prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-table:border
            prose-table:border-gray-300
            prose-th:bg-gray-100
            prose-th:font-semibold
            prose-td:p-3
            prose-th:p-3
            prose-td:border
            prose-th:border
            max-w-none
          "
        >
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypePrettyCode],
              },
            }}
          />
        </div>

        {/* -------- Disclaimer -------- */}
        <div className="mt-10 text-xs text-gray-600 border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded">
          <strong>Disclaimer:</strong> This article is for educational purposes only and does not constitute
          legal, tax, or financial advice. 1031 exchanges are highly fact-specific and subject to changing rules.
          Always consult a qualified CPA and attorney before acting.
        </div>
        
        {/* -------- Related Posts -------- */}
        {related.length > 0 && (
          <section className="mt-16 border-t pt-10">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

            <div className="grid gap-6">
              {related.map((post: any) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.fileSlug}`}
                  className="block p-4 border rounded-lg hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  {post.date && (
                    <p className="text-gray-500 text-sm mt-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  )}
                  {post.summary && (
                    <p className="text-gray-700 text-sm mt-2">{post.summary}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
