import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import posts from "@/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased"
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-800 mb-8"
          >
            ← Back to blog
          </Link>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
            {post.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">{post.summary}</p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
