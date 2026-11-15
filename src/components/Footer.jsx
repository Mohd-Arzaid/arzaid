import Link from "next/link";

const linkClass = "text-gray-500 hover:text-gray-600 transition";

const ExternalLink = ({ href, children }) => (
  <a
    className={linkClass}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border border-gray-200 mb-8" />

      {/* Mobile: exactly 2 columns */}
      <div className="w-full grid grid-cols-2 gap-4 pb-16 sm:hidden">
        <div className="flex flex-col space-y-4">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <Link href="/projects" className={linkClass}>
            Projects
          </Link>
          <Link href="/links" className={linkClass}>
            Links
          </Link>
          <Link href="/snippets" className={linkClass}>
            Snippets
          </Link>
          <Link href="/resources" className={linkClass}>
            Resources
          </Link>
          <Link href="/demos" className={linkClass}>
            Live Demos
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/Mohd-Arzaid">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/mohd-arzaid-3220742ab/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://x.com/__Arzaid__">Twitter</ExternalLink>
          <ExternalLink href="https://instagram.com">Instagram</ExternalLink>
          <Link href="/freelance" className={linkClass}>
            Freelancing
          </Link>
          <Link href="/freecodecamp" className={linkClass}>
            freeCodeCamp
          </Link>
          <Link href="/boxshadows" className={linkClass}>
            Box Shadows
          </Link>
          <Link href="/design-inspiration" className={linkClass}>
            Design Inspiration
          </Link>
        </div>
      </div>

      {/* Desktop: 3 columns */}
      <div className="hidden w-full gap-4 pb-16 sm:grid sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <Link href="/projects" className={linkClass}>
            Projects
          </Link>
          <Link href="/links" className={linkClass}>
            Links
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/Mohd-Arzaid">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/mohd-arzaid-3220742ab/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://x.com/__Arzaid__">Twitter</ExternalLink>
          <ExternalLink href="https://instagram.com">Instagram</ExternalLink>
          <Link href="/freelance" className={linkClass}>
            Freelancing
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets" className={linkClass}>
            Snippets
          </Link>
          <Link href="/resources" className={linkClass}>
            Resources
          </Link>
          <Link href="/demos" className={linkClass}>
            Live Demos
          </Link>
          <Link href="/freecodecamp" className={linkClass}>
            freeCodeCamp
          </Link>
          <Link href="/boxshadows" className={linkClass}>
            Box Shadows
          </Link>
          <Link href="/design-inspiration" className={linkClass}>
            Design Inspiration
          </Link>
        </div>
      </div>

      <p className="flex flex-row text-gray-400 items-center">
        Find me on
        <a href="https://x.com/__Arzaid__" target="__blank">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 mx-1">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </a>
      </p>
      <p className="flex flex-row text-gray-400 items-center mt-2">
        Thanks for visiting my site !
      </p>
    </footer>
  );
}
