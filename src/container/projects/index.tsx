import { useIntl } from "react-intl";

const Projects = () => {
  const intl = useIntl();
  const projectCount = intl.formatMessage({ id: "project-count" });
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="py-10 text-center text-4xl">Project</h1>
      <div>
        {Array.from({ length: parseInt(projectCount) }, (_, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={intl.formatMessage({ id: `project-${i + 1}-image` })}
                alt={intl.formatMessage({ id: `project-${i + 1}-title` })}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {intl.formatMessage({ id: `project-${i + 1}-title` })}
              </h6>
              <p className="mb-4 text-neutral-400">
                {intl.formatMessage({ id: `project-${i + 1}-description` })}
              </p>
              {intl
                .formatMessage({ id: `project-${i + 1}-technologies` })
                .split(",")
                .map((tech: any, index: any) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
