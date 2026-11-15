"use client";

import { BlurImage } from "./BlurImage";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black">
          Mohd Arzaid
        </h1>

        <div className="relative leading-7 items-center flex-wrap text-zinc-700 mb-5">
          I love building{" "}
          <span className="inline-block px-2 py-0 font-bold bg-gray-100 mx-1">
            cool things
          </span>
        </div>
        <p className="text-zinc-600">
          I&apos;m a full-stack developer who loves low-level programming. Find
          me on{" "}
          <a
            href="https://x.com/__Arzaid__"
            className="font-bold group relative inline-flex overflow-hidden"
            target="__blank"
          >
            <span className="relative">twitter</span>
          </a>{" "}
          for tech updates.
        </p>
      </div>

      <div className="relative shrink p-4 md:p-4 md:order-last order-first">
        <a
          href="https://x.com/skrrtt_skrrrt_"
          target="__blank"
          className="block z-5 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20"
        >
          <BlurImage
            fill
            priority
            quality={100}
            sizes="80px"
            className="object-cover"
            src="/avatar.webp"
            alt="Mohd Arzaid"
          />
        </a>
        <div className="z-0">
          <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/10 mask-[linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
          <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/10 mask-[linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
          <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/10 mask-[linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
          <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/10 mask-[linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-0.5 w-40 scale-x-[-1]">
              <div className="w-full flex-none blur-sm bg-[linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
              <div className="-ml-full w-full flex-none blur-px bg-[linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
