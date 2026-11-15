"use client";

import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@/components/MDXComponents";

export default function BlogPostClient({ mdxSource }) {
  return <MDXRemote {...mdxSource} components={MDXComponents} />;
}
