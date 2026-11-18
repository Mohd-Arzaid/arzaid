"use client";

import { useState } from "react";
import BlogPost from "@/components/BlogPost";

export default function BlogClient({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .slice()
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
        Blog
      </h1>
      <p className="text-gray-600 mb-4">
        I write about software development, programming, freelancing, and
        building products. Use the search below to filter by title.
      </p>

      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="px-4 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white text-gray-900"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {!searchValue && (
        <>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
            Most Popular
          </h3>
          <BlogPost
            title="this, call, apply, bind — once and for all"
            summary="Short wrong vs right examples so this finally sticks — plus when to use call, apply, and bind."
            slug="this-call-apply-bind"
          />
          <BlogPost
            title="React Hooks traps that show up in real interviews"
            summary="Stale closures, effect dependencies, derived state, and other hooks mistakes — with clear wrong vs right examples."
            slug="react-hooks-traps"
          />
          <BlogPost
            title="Ace the JavaScript Interview"
            summary="Ace your next JavaScript Interview - Practice these topics in depth with examples."
            slug="ace-the-javascript-interview"
          />
        </>
      )}

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
        All Posts
      </h3>
      {!filteredBlogPosts.length && (
        <p className="text-gray-600 mb-4">No posts found.</p>
      )}
      {filteredBlogPosts.map((frontMatter) => (
        <BlogPost key={frontMatter.title} {...frontMatter} />
      ))}
    </>
  );
}
