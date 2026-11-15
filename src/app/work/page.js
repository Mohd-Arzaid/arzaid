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
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-4">
          <WorkExperience withTopMargin={false} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
