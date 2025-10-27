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
    return data;
  });

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        ))}
    </div>
  );
}
