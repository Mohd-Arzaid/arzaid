"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export default function ProjectCard({ title, description, href, image, tags }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const hasLive = href && href !== "#";

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 w-full"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-linear-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-linear-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0" />

        <div className="flex flex-col items-start rounded p-4 relative">
          {image && (
            <a
              href={hasLive ? href : undefined}
              aria-label={title}
              target={hasLive ? "_blank" : undefined}
              rel={hasLive ? "noopener noreferrer" : undefined}
              onClick={!hasLive ? (e) => e.preventDefault() : undefined}
              className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-zinc-950 mb-4 block"
            >
              <Image
                key={image}
                src={image}
                alt={title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top"
              />
            </a>
          )}

          <h4 className="text-xl font-bold tracking-tight text-gray-900">
            {hasLive ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h4>

          <p className="pt-3 text-sm text-gray-700">{description}</p>
          <div className="pt-4 flex md:flex-row flex-wrap">
            {tags?.map((tag, idx) => (
              <p
                key={idx}
                className="leading-5 mb-2 text-gray-700 rounded-md text-xs italic bg-gray-50 mr-2 px-1"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HoverPattern({ mouseX, mouseY }) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      />
    </div>
  );
}
