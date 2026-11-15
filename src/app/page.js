import Link from "next/link";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased"
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <Header />
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black">
            Recent Blogs
          </h3>
          <BlogPost
            title="Ace the Javascript Interview - Practical questions to help you clear your next interview"
            summary="Ace your next Javascript Interview - Practice these topics in depth with examples and code snippets."
            slug="ace-the-javascript-interview"
          />
          <BlogPost
            title="Free portfolio website template that gets you hired in 2021"
            summary="Build a modern, minimal portfolio website with Next.js and tailwindcss for developers that gets you hired for Full Stack Developer roles in 2021."
            slug="developer-portfolio-website"
          />
          <Link
            href="/blog"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900"
          >
            See All Blogs
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
            Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Moonbeam"
              description="Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant."
              href="https://gomoonbeam.com"
              icon="moonbeam"
              tags={[
                "Front-end",
                "GPT-3",
                "Next.js",
                "React",
                "TailwindCSS",
                "Chrome Extension",
              ]}
            />
            <ProjectCard
              title="Aceternity"
              description="Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love."
              href="https://aceternity.com"
              icon="aceternity"
              tags={["Next.js", "React", "TailwindCSS", "Full-Stack"]}
            />
            <ProjectCard
              title="Algochurn"
              description="Practice the most popular algorithmic questions and Front-end interview questions with an interactive IDE and learning environment."
              href="https://algochurn.com"
              icon="algochurn"
              tags={["Next.js", "React", "TailwindCSS", "Monaco", "Algorithms"]}
            />
            <ProjectCard
              title="Tailwind Master Kit"
              description="Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project."
              href="https://tailwindmasterkit.com/"
              icon="tailwindmasterkit"
              tags={["Tailwind", "Next.js", "Freemium"]}
            />
            <ProjectCard
              title="PlaceholderTech"
              description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
              href="https://placeholdertech.in/"
              icon="placeholdertech"
              tags={["Web Dev Agency", "Products", "Freemium"]}
            />
            <ProjectCard
              title="Feedmeback"
              description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
              href="https://feedmeback-beta.vercel.app/"
              icon="fastfeedback"
              tags={["Next.js", "Stripe", "TailwindCSS"]}
            />
          </div>
          <Link
            href="/projects"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
