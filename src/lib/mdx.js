import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export function mdxExists(type, slug) {
  return fs.existsSync(path.join(root, "data", type, `${slug}.mdx`));
}

export function getFiles(type) {
  const dir = path.join(root, "data", type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export async function getFileBySlug(type, slug) {
  const source = fs.readFileSync(
    path.join(root, "data", type, `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);
  const normalizedContent = content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/HighlightBox>\s+([^\n])/g, "</HighlightBox>\n\n$1");

  let mdxSource;
  try {
    mdxSource = await serialize(normalizedContent);
  } catch {
    mdxSource = await serialize(
      "This article has legacy MDX syntax that needs migration."
    );
  }

  return {
    mdxSource,
    frontMatter: {
      wordCount: normalizedContent.split(/\s+/gu).length,
      readingTime: readingTime(normalizedContent),
      slug: slug || null,
      ...data,
    },
  };
}
