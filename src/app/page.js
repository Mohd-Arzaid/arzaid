import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

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
        </div>
      </main>
    </div>
  );
}
