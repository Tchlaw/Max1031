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
    <article className="prose mx-auto">
      <h1>{data.title}</h1>
      <p>{new Date(data.date).toLocaleDateString()}</p>
      <MDXRemote source={content} />
    </article>
  );
}
