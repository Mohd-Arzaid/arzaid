import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mohd Arzaid",
    template: "%s | Mohd Arzaid",
  },
  description:
    "Full-stack developer who loves building cool things and low-level programming.",
  icons: {
    icon: [{ url: "/avatar.webp", type: "image/webp" }],
    apple: [{ url: "/avatar.webp", type: "image/webp" }],
  },
  openGraph: {
    title: "Mohd Arzaid",
    description:
      "Full-stack developer who loves building cool things and low-level programming.",
    type: "website",
    images: [{ url: "/avatar.webp" }],
  },
  twitter: {
    card: "summary",
    title: "Mohd Arzaid",
    description:
      "Full-stack developer who loves building cool things and low-level programming.",
    images: ["/avatar.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${inter.className} min-h-full flex flex-col bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
