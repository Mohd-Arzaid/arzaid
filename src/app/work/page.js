import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";

export default function WorkPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased"
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
            Work Experience
          </h1>
          <h2 className="text-gray-600 mb-16">
            Where I&apos;ve worked and what I&apos;ve shipped along the way.
          </h2>
          <WorkExperience withTopMargin={false} showHeading={false} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
