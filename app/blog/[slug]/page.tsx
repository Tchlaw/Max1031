import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

const postsDir = path.join(process.cwd(), "content/posts");

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPost({ params }) {
  const filePath = path.join(postsDir, `${params.slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(file);

  return (
    <article className="prose mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 mb-8">
        {new Date(data.date).toLocaleDateString()}
      </p>
      <MDXRemote source={content} />
    </article>
  );
}
