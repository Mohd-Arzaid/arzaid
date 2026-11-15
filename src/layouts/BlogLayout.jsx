import Image from "next/image";
import Link from "next/link";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <Link href="/blog" aria-label="Back to blog">
        <svg
          className="h-8 w-8 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </Link>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
        {frontMatter.title}
      </h1>
      <div className="flex items-center w-full mt-2 mb-8">
        <Image
          alt="Mohd Arzaid"
          height={24}
          width={24}
          src="/avatar.webp"
          className="rounded-full"
          style={{ width: "auto", height: "auto" }}
        />
        <p className="text-sm text-gray-700 ml-2">Mohd Arzaid</p>
      </div>
      <div className="prose max-w-none w-full">{children}</div>
    </article>
  );
}