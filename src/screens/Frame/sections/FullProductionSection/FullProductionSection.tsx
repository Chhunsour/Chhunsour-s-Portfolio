import { useI18n } from "../../../../i18n";

export const FullProductionSection = (): JSX.Element => {
  const { t } = useI18n();
  const workflowSteps = [
    { title: t("development.plan"), description: t("development.planNote") },
    { title: t("development.design"), description: t("development.designNote") },
    { title: t("development.frontend"), description: t("development.frontendNote") },
    { title: t("development.backend"), description: t("development.backendNote") },
  ];

  return (
    <section
      aria-labelledby="full-production-section-heading"
      className="relative w-full overflow-hidden px-5 py-24 sm:px-10 sm:py-28 desk:min-h-[1024px] desk:w-[1440px] desk:px-[110px] desk:py-[132px]"
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <p className="eyebrow">{t("development.label")}</p>

        <div className="mt-9 grid gap-8 desk:mt-12 desk:grid-cols-[minmax(0,780px)_1fr] desk:items-end desk:gap-[90px]">
          <h2
            id="full-production-section-heading"
            className="[font-family:'WisnuMan-Regular',Helvetica] text-[46px] font-normal leading-[1.06] tracking-[-0.025em] text-[#ffe9d9] sm:text-[62px] desk:text-[76px]"
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

          <p className="border-l border-[#fe7f2d]/70 pl-6 [font-family:'WisnuMan-Regular',Helvetica] text-[19px] font-normal leading-[1.6] text-[#ffe9d9]/70 sm:text-[22px] desk:mb-2">
            {t("development.note")}
          </p>
        </div>

        <ol className="mt-14 grid list-none border-y border-[#ffe9d9]/15 p-0 sm:grid-cols-2 desk:mt-20 desk:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <li
              key={step.title}
              className={`group relative min-h-[210px] px-1 py-8 sm:px-7 desk:min-h-[250px] desk:px-8 desk:py-10 ${
                index % 2 === 1 ? "sm:border-l sm:border-[#ffe9d9]/15" : ""
              } ${index > 0 ? "desk:border-l desk:border-[#ffe9d9]/15" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 bg-[#fe7f2d] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125"
                />
                <h3 className="[font-family:'WisnuMan-Regular',Helvetica] text-[30px] font-normal leading-none text-[#ffe9d9] desk:text-[34px]">
                  {step.title}
                </h3>
              </div>

              <p className="mt-6 max-w-[230px] [font-family:'WisnuMan-Regular',Helvetica] text-[17px] font-normal leading-[1.55] text-[#ffe9d9]/60 desk:text-[19px]">
                {step.description}
              </p>

              {index < workflowSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-8 right-7 hidden text-[24px] text-[#fe7f2d]/65 transition-transform duration-300 group-hover:translate-x-1 desk:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between desk:mt-14">
          <p className="[font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[4px] text-[#ffe9d9]/45 sm:text-sm">
            {t("development.process")}
          </p>
          <p className="[font-family:'Rafles-Regular',Helvetica] text-[36px] font-normal leading-none text-[#fe7f2d] sm:text-[44px] desk:text-[52px]">
            {t("development.production")}
          </p>
        </div>
      </div>
    </section>
  );
};
