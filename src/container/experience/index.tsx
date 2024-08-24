import { useIntl } from "react-intl";

const Experience = () => {
  const intl = useIntl();
  const experienceCount = intl.formatMessage({ id: "experience-count" });
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="py-10 text-center text-4xl">Experience</h1>
      <div>
        {Array.from({ length: parseInt(experienceCount) }, (_, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">
                {intl.formatMessage({ id: `experience-${i + 1}-year` })}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {intl.formatMessage({ id: `experience-${i + 1}-role` })} -{" "}
                <span className="text-sm text-purple-100">
                  {intl.formatMessage({ id: `experience-${i + 1}-company` })}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">
                {intl.formatMessage({ id: `experience-${i + 1}-description` })}
              </p>
              {intl
                .formatMessage({ id: `experience-${i + 1}-technologies` })
                .split(",")
                .map((tech: any, index: any) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
