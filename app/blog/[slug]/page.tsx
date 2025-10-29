import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(postsDir, `${params.slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);

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

      <div className="
        prose prose-lg
        prose-headings:font-semibold
        prose-a:text-blue-600
        prose-a:underline-offset-2
        prose-img:rounded-xl
        prose-blockquote:border-l-blue-500
        prose-blockquote:border-l-4
        prose-blockquote:pl-4
        prose-li:marker:text-blue-600
        max-w-none
      ">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
