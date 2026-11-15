import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesCard from "@/components/ResourcesCard";
import resources from "@/data/resources";

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased"
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
            Resources
          </h1>
          <p className="text-gray-600 mb-4">
            Helpful{" "}
            <span className="inline-block px-2 py-0 font-bold bg-gray-100 mx-1">
              websites
            </span>{" "}
            that I&apos;ve been using for years that have helped me in
            developing applications and much more.
          </p>

          {resources.map((section) => (
            <div key={section.title} className="w-full">
              <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black border-b-4 border-green-300 w-fit">
                {section.title}
              </h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
                {section.items.map((item) => (
                  <ResourcesCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}