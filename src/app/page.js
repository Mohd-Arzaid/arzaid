import Link from "next/link";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";
import VideoShowcase from "@/components/VideoShowcase";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased"
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-10">
          <Header />
          <VideoShowcase />
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-10 text-black">
            Recent Blogs
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

          <WorkExperience limit={2} />
          <Link
            href="/work"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900"
          >
            View All
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
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <Link
            href="/projects"
            className="flex items-center text-sm mt-4 mb-10 mx-auto px-4 py-2 rounded-md font-medium text-gray-900"
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

          <VideoShowcase src="/videos/snapgram-demo-2.mp4" />
        </div>
        <Footer />
      </main>
    </div>
  );
}
