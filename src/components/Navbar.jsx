"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  const links = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Work", link: "/work" },
    { name: "Projects", link: "/projects" },
    { name: "Resources", link: "/resources" },
  ];

  const mobileLinks = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Work", link: "/work" },
    { name: "Projects", link: "/projects" },
    { name: "Resources", link: "/resources" },
  ];

  return (
    <nav className="sticky-nav flex justify-end items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white/60">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        <Desktop
          links={links}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          pathname={pathname}
        />
      </div>
      <div className="block sm:hidden">
        <Mobile links={mobileLinks} />
      </div>
    </nav>
  );
}

export function Mobile({ links }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const dropIn = {
    hidden: {
      y: "-4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };

  const handleClick = (link) => {
    setOpen(false);
    router.push(link);
  };

  return (
    <div className="w-full flex flex-row items-center space-x-2">
      <button
        onClick={() => handleClick(links[0].link)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
      >
        {links[0]?.name}
      </button>
      <button
        onClick={() => handleClick(links[1].link)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
      >
        {links[1]?.name}
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%] p-4 rounded-lg shadow-xl z-999 bg-white divide-y"
          >
            {[...links].splice(2).map((el) => (
              <button
                key={el?.link}
                onClick={() => handleClick(el.link)}
                className="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900 text-left"
              >
                <span className="relative z-10">{el.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Desktop({ links, hoveredIndex, setHoveredIndex, pathname }) {
  return (
    <>
      {links.map((navLink, index) => (
        <NextLink
          key={navLink.link}
          href={navLink.link}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 transform bg-gray-50"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span
            className={`relative z-10 ${
              pathname === navLink.link ? "text-teal-600" : "text-gray-600"
            }`}
          >
            {navLink.name}
          </span>
          {pathname === navLink.link && (
            <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
          )}
        </NextLink>
      ))}
    </>
  );
}
