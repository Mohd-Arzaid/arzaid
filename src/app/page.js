import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white px-8 text-gray-900 antialiased"
      />
    </div>
  );
}
