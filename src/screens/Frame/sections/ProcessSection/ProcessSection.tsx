import { useI18n } from "../../../../i18n";

const stepIcon = (path: JSX.Element): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 text-[#fe7f2d] transition-transform duration-300 group-hover:scale-125"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {path}
  </svg>
);

const processSteps = [
  {
    key: "process.understand",
    icon: stepIcon(
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </>,
    ),
  },
  {
    key: "process.research",
    icon: stepIcon(
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4.3-4.3" />
      </>,
    ),
  },
  {
    key: "process.design",
    icon: stepIcon(
      <>
        <path d="M15.7 6.4 8.2 4.2a1 1 0 0 0-1.2 1.2l2.2 7.5" />
        <path d="m2.4 2.4 7 7" />
        <path d="M12.8 21.6 21.6 12.8 15.7 6.4 6.4 15.7z" transform="translate(0.5 0.5) scale(0.92)" />
        <circle cx="11" cy="11" r="2" />
      </>,
    ),
  },
  {
    key: "process.build",
    icon: stepIcon(<path d="m8 6-6 6 6 6M16 6l6 6-6 6" />),
  },
  {
    key: "process.test",
    icon: stepIcon(
      <path d="M9 3h6M10 3v6l-5.3 8.9A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.7-3.1L14 9V3" />,
    ),
  },
  {
    key: "process.improve",
    icon: stepIcon(
      <>
        <path d="M21 12a9 9 0 1 1-2.6-6.3" />
        <path d="M21 3v6h-6" />
      </>,
    ),
  },
];

export const ProcessSection = (): JSX.Element => {
  const { t } = useI18n();
  return (
    <section
      aria-labelledby="process-heading"
      className="relative flex w-full flex-col items-center overflow-hidden px-5 py-16 sm:px-10 desk:w-[1440px] desk:px-[110px] desk:py-36"
    >
      <p className="eyebrow eyebrow-center">{t("process.label")}</p>
      <h2
        id="process-heading"
        className="mt-8 w-full max-w-[1100px] text-center [font-family:'WisnuMan-Regular',Helvetica] text-[36px] font-normal leading-[1.2] tracking-[0] sm:text-[50px] desk:mt-10 desk:text-[66px] desk:leading-[1.15]"
      >
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          {t("process.design")}
        </span>
        <span className="text-[#ffe9d9]">{t("process.designAfter")}</span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          {t("process.photo")}
        </span>
        <span className="text-[#ffe9d9]">{t("process.photoAfter")}</span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          {t("process.code")}
        </span>
        <span className="text-[#ffe9d9]">{t("process.codeAfter")}</span>
      </h2>

      <div className="relative mt-12 w-full max-w-[1220px] desk:mt-24">
        {/* pipeline rail with a travelling pulse, visible in the gaps */}
        <div
          aria-hidden="true"
          className="process-rail absolute inset-x-0 top-1/2 hidden h-[2px] -translate-y-1/2 desk:block"
        />
        <ol className="relative m-0 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 desk:grid-cols-6">
          {processSteps.map((step) => (
            <li key={step.key}>
              <div className="group flex flex-col items-center gap-3.5 border border-[#ffe9d9]/15 bg-[#272727] px-3 py-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fe7f2d]/70 desk:py-7">
                {step.icon}
                <span className="[font-family:'WisnuMan-Regular',Helvetica] text-[17px] text-[#ffe9d9]/85 transition-colors duration-300 group-hover:text-[#ffe9d9] desk:text-[19px]">
                  {t(step.key)}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-10 w-full max-w-[760px] text-center [font-family:'WisnuMan-Regular',Helvetica] text-[20px] font-normal leading-[1.6] tracking-[0] text-[#ffe9d9]/90 sm:text-[24px] desk:mt-20 desk:text-[26px] desk:leading-[1.55]">
        {t("process.body")}
      </p>
    </section>
  );
};
