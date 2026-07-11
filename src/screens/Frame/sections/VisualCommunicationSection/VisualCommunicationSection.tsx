import { useI18n } from "../../../../i18n";

const toolIcons = [
  { src: "/img/image-32.webp", alt: "Adobe Photoshop", name: "PHOTOSHOP" },
  { src: "/img/image-31.webp", alt: "Adobe Illustrator", name: "ILLUSTRATOR" },
  { src: "/img/image-35.webp", alt: "Adobe Lightroom", name: "LIGHTROOM" },
];

export const VisualCommunicationSection = (): JSX.Element => {
  const { t } = useI18n();

  return (
    <section
      aria-labelledby="visual-communication-heading"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden px-5 py-24 sm:px-10 sm:py-28 desk:min-h-[1024px] desk:w-[1440px] desk:px-[110px] desk:py-[132px]"
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <p className="eyebrow">{t("visual.label")}</p>

        <div className="mt-9 grid gap-10 desk:mt-12 desk:grid-cols-[minmax(0,760px)_1fr] desk:items-end desk:gap-[100px]">
          <h2
            id="visual-communication-heading"
            className="[font-family:'WisnuMan-Regular',Helvetica] text-[44px] font-normal leading-[1.08] tracking-[-0.025em] text-[#ffe9d9] sm:text-[60px] desk:text-[74px]"
          >
            {t("visual.heading.before")}
            <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
              {t("visual.heading.developer")}
            </span>
            {t("visual.heading.middle")}
            <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
              {t("visual.heading.visually")}
            </span>
            {t("global.period")}
          </h2>

          <p className="border-l border-[#fe7f2d]/70 pl-6 [font-family:'WisnuMan-Regular',Helvetica] text-[19px] font-normal leading-[1.65] text-[rgba(255,233,217,0.74)] sm:text-[22px] desk:mb-2">
            {t("visual.body.before")}
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              {t("visual.body.accent")}
            </span>
            {t("visual.body.after")}
          </p>
        </div>

        <div className="mt-16 border-y border-[#ffe9d9]/15 py-8 desk:mt-24 desk:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="[font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[4px] text-[#ffe9d9]/45 sm:text-sm">
              {t("visual.toolkit")}
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-3 p-0 sm:justify-end desk:gap-4">
              {toolIcons.map((tool) => (
                <li key={tool.name}>
                  <div className="group flex items-center gap-3.5 border border-[#ffe9d9]/15 px-4 py-3 transition-colors duration-300 hover:border-[#fe7f2d]/60 desk:px-5">
                    <img
                      className="h-7 w-7 rounded-md opacity-75 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                      alt={tool.alt}
                      src={tool.src}
                      loading="lazy"
                    />
                    <span className="[font-family:'OTTERO-Regular',Helvetica] text-[12px] tracking-[2.5px] text-[#ffe9d9]/65 group-hover:text-[#ffe9d9] sm:text-[13px]">
                      {tool.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
