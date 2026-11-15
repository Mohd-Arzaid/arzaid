"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export default function ProjectCard({ title, description, href, icon, tags }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <a
      className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-linear-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-linear-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0" />

        <div className="flex flex-col items-start rounded p-4 relative">
          <div className="my-4">
            <ProjectIcon icon={icon} />
          </div>
          <div>
            <h4 className="text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h4>
            <p className="leading-6 pt-4 text-gray-700">{description}</p>
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
    </a>
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

function ProjectIcon({ icon }) {
  if (icon === "moonbeam") {
    return (
      <svg
        className="h-8 w-12 text-gray-900"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 82.43954467773438 36.907936096191406"
      >
        <rect
          width="82.43954467773438"
          height="36.907936096191406"
          fill="none"
        />
        <g transform="matrix(1,0,0,1,-28.194570541381836,-64.04541778564453)">
          <path
            d="M110.63412,80.395c-.1825-.02539-18.34884-2.69087-27.68421-15.47783l-.63669-.87175H28.19457v36.90794H82.31322l.63669-.87176c9.33537-12.78754,27.50171-15.45243,27.68362-15.47783l-.29-2.10379ZM60.853,81.43629H47.71166V68.29555H60.853ZM32.44468,83.56194H45.5866V96.70327H32.44468ZM80.17576,96.70327H65.1031V68.29555H80.17576a42.1149,42.1149,0,0,0,15.99168,12.0788H80.5514a4.68191,4.68191,0,1,0,0,4.25012H96.16684A42.11772,42.11772,0,0,0,80.17576,96.70327Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  }

  if (icon === "aceternity") {
    return (
      <div className="h-8 w-8 ml-2 mr-4">
        <svg
          width="25"
          height="25"
          viewBox="0 0 62 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
        >
          <path
            d="M6.09521 5.98586C6.09521 5.98586 52.9961 16.1083 55.9639 27.9921C58.9317 39.876 7.14953 55.3998 7.14953 55.3998"
            stroke="url(#aceternity-gradient)"
            strokeWidth="11"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
            style={{ mixBlendMode: "darken" }}
          />
          <defs>
            <linearGradient
              id="aceternity-gradient"
              x1="30.5444"
              y1="2.16844"
              x2="31.5724"
              y2="50.347"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#374151" />
              <stop offset="0.5" stopColor="#111827" />
              <stop offset="1" stopColor="#374151" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (icon === "algochurn") {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <rect width="100" height="100" rx="12" fill="#0284C7" />
        <path
          d="M0 5C0 2.23858 2.23858 0 5 0H95C97.7614 0 100 2.23858 100 5V17H0V5Z"
          fill="white"
          fillOpacity="0.87"
        />
        <circle cx="33" cy="8" r="4" fill="#16A34A" />
        <circle cx="21" cy="8" r="4" fill="#6B7280" />
        <circle cx="9" cy="8" r="4" fill="#EF4444" />
        <path
          d="M44.088 64.208C44.088 65.488 44.2587 66.416 44.6 66.992C44.9627 67.568 45.5387 68.0053 46.328 68.304L44.248 74.96C42.2427 74.768 40.5467 74.3307 39.16 73.648C37.7947 72.944 36.7173 71.888 35.928 70.48C34.6267 72.0373 32.9627 73.2 30.936 73.968C28.9093 74.7147 26.84 75.088 24.728 75.088C21.2293 75.088 18.4347 74.096 16.344 72.112C14.2747 70.1067 13.24 67.536 13.24 64.4C13.24 60.7093 14.68 57.8613 17.56 55.856C20.4613 53.8507 24.536 52.848 29.784 52.848H34.36V51.568C34.36 49.7973 33.784 48.4853 32.632 47.632C31.5013 46.7787 29.8373 46.352 27.64 46.352C26.552 46.352 25.1547 46.512 23.448 46.832C21.7413 47.1307 20.0347 47.568 18.328 48.144L15.992 41.424C18.1893 40.592 20.472 39.9627 22.84 39.536C25.2293 39.1093 27.3627 38.896 29.24 38.896C34.296 38.896 38.0293 39.9307 40.44 42C42.872 44.048 44.088 47.0133 44.088 50.896V64.208ZM28.216 67.856C29.304 67.856 30.4453 67.536 31.64 66.896C32.8347 66.2347 33.7413 65.3067 34.36 64.112V58.608H31.864C29.048 58.608 26.9787 59.0453 25.656 59.92C24.3333 60.7733 23.672 62.032 23.672 63.696C23.672 64.9973 24.0667 66.0213 24.856 66.768C25.6667 67.4933 26.7867 67.856 28.216 67.856ZM70.591 67.12C71.9777 67.12 73.279 66.8533 74.495 66.32C75.7323 65.7653 76.959 65.0613 78.175 64.208L82.687 70.608C81.1937 71.888 79.3697 72.9547 77.215 73.808C75.0817 74.6613 72.6923 75.088 70.047 75.088C66.399 75.088 63.263 74.3413 60.639 72.848C58.015 71.3333 55.999 69.2427 54.591 66.576C53.183 63.888 52.479 60.7733 52.479 57.232C52.479 53.6907 53.1937 50.544 54.623 47.792C56.0737 45.0187 58.1217 42.8427 60.767 41.264C63.4337 39.6853 66.591 38.896 70.239 38.896C72.8203 38.896 75.1137 39.2587 77.119 39.984C79.1457 40.688 81.0017 41.744 82.687 43.152L78.303 49.232C77.151 48.4213 75.935 47.792 74.655 47.344C73.375 46.896 72.0417 46.672 70.655 46.672C68.3723 46.672 66.527 47.4827 65.119 49.104C63.7323 50.704 63.039 53.4133 63.039 57.232C63.039 59.728 63.3697 61.7013 64.031 63.152C64.6923 64.5813 65.5883 65.6053 66.719 66.224C67.871 66.8213 69.1617 67.12 70.591 67.12Z"
          fill="white"
        />
      </svg>
    );
  }

  if (icon === "tailwindmasterkit") {
    return (
      <div className="h-8 w-8 ml-2 mr-4">
        <svg
          width="260"
          height="260"
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
        >
          <rect width="260" height="260" rx="11" fill="#FBBF24" />
          <path
            d="M76.3492 60.7143C76.3492 57.9529 78.5878 55.7143 81.3492 55.7143H260V107.302H81.3492C78.5878 107.302 76.3492 105.063 76.3492 102.302V60.7143Z"
            fill="white"
          />
          <rect
            x="156.825"
            y="260"
            width="156.825"
            height="51.5873"
            transform="rotate(-90 156.825 260)"
            fill="white"
          />
        </svg>
      </div>
    );
  }

  if (icon === "placeholdertech") {
    return (
      <div className="h-8 w-8 ml-2 mr-4">
        <svg
          className="h-8 w-8 text-gray-900"
          width="366"
          height="385"
          viewBox="0 0 366 385"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.888 240.769L113.444 144.658L197.882 193.686L111.888 240.769Z"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M187.166 188.391L65.2489 109.876C63.9179 109.019 62.166 109.975 62.166 111.558V193.891L61.166 275.391"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M106.166 298.891C90.6661 307.039 61.166 297.391 61.166 274.891"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M69.666 54.3909C79.0318 30.3506 114.666 20.8909 134.666 33.8909"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M251.666 167.391C269.666 178.891 271.166 210.891 246.666 223.891"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M11.1666 100.391C11.1664 56.3907 63.6665 47.3908 85.6658 61.3907"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M118.666 348.391C62.729 378.337 10.1861 322.74 10.6663 287.891"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M287.666 131.391C345.666 168.391 321.166 240.391 291.166 256.391"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M105.166 299.391L246.666 223.891"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M251.666 167.391L85.666 61.3909"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M11.166 100.391L10.666 288.391"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M118.667 348.391L291.167 256.391"
            stroke="black"
            strokeWidth="16"
          />
          <path
            d="M287.666 131.391L134.518 33.7655"
            stroke="black"
            strokeWidth="16"
          />
        </svg>
      </div>
    );
  }

  if (icon === "fastfeedback") {
    return (
      <div className="h-8 w-8 ml-2 mr-4">
        <svg className="h-8 w-8 text-gray-900" viewBox="0 0 46 32">
          <path
            d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  return null;
}
