import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";


const postsDir = path.join(process.cwd(), "content/posts");

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => ({
    slug: frontmatter.slug || filename.replace(".mdx", ""),
  }));
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
    };
  });

  const related = (data.relatedPosts || [])
    .map((slug: string) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline flex items-center gap-2 text-sm mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Blog
      </Link>

      <h1 className="text-4xl font-bold leading-tight mb-3">
        {data.title}
      </h1>

      <p className="text-gray-500 text-sm mb-10">
        {new Date(data.date).toLocaleDateString()}
      </p>

      <div
        className="
          prose prose-lg
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

      {/* -------- Related Posts -------- */}
      {related.length > 0 && (
        <section className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

          <div className="grid gap-6">
            {related.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
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
  );
}
