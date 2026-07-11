import { useI18n } from "../../../../i18n";

type WorkflowIconName = "plan" | "design" | "frontend" | "backend";

const WorkflowIcon = ({ name }: { name: WorkflowIconName }): JSX.Element => {
  const sharedProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6 sm:h-7 sm:w-7",
    "aria-hidden": true,
  };

  if (name === "plan") {
    return (
      <svg {...sharedProps}>
        <path d="M5 4.5h14v15H5z" />
        <path d="M8 8h8M8 12h5M8 16h3" />
        <path d="m15 15 1.4 1.4L19 13.8" />
      </svg>
    );
  }

  if (name === "design") {
    return (
      <svg {...sharedProps}>
        <path d="m4 20 4.2-1 10.6-10.6-3.2-3.2L5 15.8 4 20Z" />
        <path d="m13.8 7 3.2 3.2M4.8 16.2l3 3" />
        <path d="M14 4.5 16.5 2 22 7.5 19.5 10" />
      </svg>
    );
  }

  if (name === "frontend") {
    return (
      <svg {...sharedProps}>
        <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M14 4l-4 16" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
      <path d="M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </svg>
  );
};

export const FullProductionSection = (): JSX.Element => {
  const { t } = useI18n();
  const workflowSteps = [
    { icon: "plan" as const, title: t("development.plan"), description: t("development.planNote") },
    { icon: "design" as const, title: t("development.design"), description: t("development.designNote") },
    { icon: "frontend" as const, title: t("development.frontend"), description: t("development.frontendNote") },
    { icon: "backend" as const, title: t("development.backend"), description: t("development.backendNote") },
  ];

  return (
    <section
      aria-labelledby="full-production-section-heading"
      className="relative w-full overflow-hidden px-5 py-16 sm:px-10 sm:py-24 desk:min-h-[1024px] desk:w-[1440px] desk:px-[110px] desk:py-[132px]"
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <p className="eyebrow">{t("development.label")}</p>

        <div className="mt-8 grid gap-6 sm:mt-9 sm:gap-8 desk:mt-12 desk:grid-cols-[minmax(0,780px)_1fr] desk:items-end desk:gap-[90px]">
          <h2
            id="full-production-section-heading"
            className="[font-family:'WisnuMan-Regular',Helvetica] text-[40px] font-normal leading-[1.07] tracking-[-0.025em] text-[#ffe9d9] sm:text-[58px] desk:text-[76px]"
          >
            {t("development.heading.before")}
            <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
              {t("development.heading.design")}
            </span>{" "}
            {t("development.heading.middle")}
            <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
              {t("development.heading.build")}
            </span>{" "}
            {t("development.heading.after")}
          </h2>

          <p className="max-w-[560px] bg-[#171717]/35 px-4 py-4 [font-family:'WisnuMan-Regular',Helvetica] text-[17px] font-normal leading-[1.55] text-[#ffe9d9]/68 sm:px-5 sm:text-[20px] desk:mb-2 desk:text-[22px]">
            {t("development.note")}
          </p>
        </div>

        <ol className="mt-10 grid list-none grid-cols-2 gap-3 p-0 sm:mt-14 sm:gap-4 desk:mt-20 desk:grid-cols-4 desk:gap-5">
          {workflowSteps.map((step) => (
            <li
              key={step.title}
              className="group relative min-h-[190px] overflow-hidden rounded-[18px] bg-[#171717]/45 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.14)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:bg-[#fe7f2d]/10 sm:min-h-[220px] sm:p-6 desk:min-h-[260px] desk:rounded-[22px] desk:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#fe7f2d]/12 text-[#fe7f2d] transition-all duration-500 group-hover:rotate-[-4deg] group-hover:bg-[#fe7f2d] group-hover:text-[#272727] sm:h-13 sm:w-13 desk:h-14 desk:w-14">
                <WorkflowIcon name={step.icon} />
              </div>

              <h3 className="mt-5 [font-family:'WisnuMan-Regular',Helvetica] text-[24px] font-normal leading-none text-[#ffe9d9] sm:text-[28px] desk:mt-7 desk:text-[32px]">
                {step.title}
              </h3>

              <p className="mt-3 [font-family:'WisnuMan-Regular',Helvetica] text-[14px] font-normal leading-[1.45] text-[#ffe9d9]/58 sm:mt-4 sm:text-[16px] desk:text-[17px]">
                {step.description}
              </p>

              <span
                aria-hidden="true"
                className="absolute -bottom-8 -right-5 h-20 w-20 rounded-full bg-[#fe7f2d]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#fe7f2d]/25"
              />
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-2 sm:mt-10 sm:flex-row sm:items-center sm:justify-between desk:mt-14">
          <p className="[font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[4px] text-[#ffe9d9]/45 sm:text-sm">
            {t("development.process")}
          </p>
          <p className="[font-family:'Rafles-Regular',Helvetica] text-[32px] font-normal leading-none text-[#fe7f2d] sm:text-[42px] desk:text-[52px]">
            {t("development.production")}
          </p>
        </div>
      </div>
    </section>
  );
};
