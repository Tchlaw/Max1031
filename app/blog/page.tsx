import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDir = path.join(process.cwd(), "content/posts");

export default function BlogIndex() {
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(fileContent);

    return {
      ...data,                       // spread frontmatter
      slug: filename.replace(".mdx", ""),  // add slug
    };
  });

  return (
    <>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-sky-900 to-blue-800 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
            Learn About 1031 Exchanges
          </h1>
        </div>
      </div>

      {/* Blog List */}
      <div className="mx-auto max-w-2xl px-4 space-y-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>

        {posts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post) => (
            <div key={post.slug} className="border-b pb-4">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold hover:underline cursor-pointer">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString()}
              </p>
              {post.excerpt && (
                <p className="text-gray-700 text-sm mt-2">{post.excerpt}</p>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
