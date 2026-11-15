export default function ResourcesCard({
  title,
  description,
  link,
  websiteLink,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-200 rounded-xl p-4 w-full relative"
    >
      <span className="absolute w-[40%] -bottom-px right-px h-px bg-linear-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
      <span className="absolute w-px -left-px h-[40%] bg-linear-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0" />
      <div className="flex items-center text-gray-900">
        <span className="mt-1 text-gray-400 inline-block">{websiteLink}</span>
        <svg
          className="h-4 w-4 ml-1 mt-1.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-left mt-2 text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-700">{description}</p>
    </a>
  );
}
