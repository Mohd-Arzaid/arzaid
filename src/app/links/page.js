import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import links from "@/data/links";

export default function LinksPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased"
      >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
            Links
          </h1>
          <p className="text-gray-600 mb-4 hidden md:block">
            Links to all my socials, projects, and source code.
          </p>

          {links.map((el) => {
            const Icon = el.icon;
            const isExternal = el.href.startsWith("http");

            return (
              <a
                key={el.href}
                href={el.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="border-2 border-gray-200 rounded-md py-2 w-full mb-4 hover:bg-gray-50 flex flex-row items-center space-x-2 px-2"
              >
                <Icon className={`h-5 w-5 ${el.iconClass || ""}`} />
                <span className="font-bold">{el.name}</span>
              </a>
            );
          })}
        </div>
        <Footer />
      </main>
    </div>
  );
}