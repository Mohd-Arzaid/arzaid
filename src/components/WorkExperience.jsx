import experience from "@/data/experience";

function Step({ children, className = "mb-4 ml-2" }) {
  return (
    <li className={className}>
      <div className="flex items-start">
        <span className="mr-2 mt-0.5 shrink-0 leading-none text-gray-700">
          •
        </span>
        <p className="text-gray-700">{children}</p>
      </div>
    </li>
  );
}

export default function WorkExperience({
  limit,
  withTopMargin = true,
  showHeading = true,
}) {
  const roles = limit ? experience.slice(0, limit) : experience;

  return (
    <section className="w-full">
      {showHeading && (
        <h3
          className={`font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black${
            withTopMargin ? " mt-8" : ""
          }`}
        >
          Work Experience
        </h3>
      )}

      {roles.map((role, index) => (
        <div key={`${role.company}-${role.dates}`} className="w-full">
          {index > 0 && <div className="border border-gray-200 w-full my-8" />}

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h4 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
              {role.title}
            </h4>
            <p className="text-sm text-gray-500 shrink-0">{role.dates}</p>
          </div>

          <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="font-medium italic text-gray-800">{role.company}</p>
            <p className="text-sm italic text-gray-500 shrink-0">{role.location}</p>
          </div>

          <ul className="mt-4">
            {role.points.map((point, pointIndex) => {
              const isLast =
                index === roles.length - 1 &&
                pointIndex === role.points.length - 1;

              return (
                <Step
                  key={point}
                  className={isLast ? "mb-0 ml-2" : "mb-4 ml-2"}
                >
                  {point}
                </Step>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
