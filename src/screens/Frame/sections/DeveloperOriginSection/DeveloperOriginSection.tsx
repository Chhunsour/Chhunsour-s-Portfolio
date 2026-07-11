import { useI18n } from "../../../../i18n";

export const DeveloperOriginSection = (): JSX.Element => {
  const { t } = useI18n();
  const headingParts = [
    {
      text: t("origin.heading.before"),
      className: "text-[#ffe9d9]",
    },
    {
      text: t("origin.heading.accent"),
      className: "[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]",
    },
    {
      text: t("global.period"),
      className: "text-[#ffe9d9]",
    },
  ];

  const bodyParts = [
    {
      text: t("origin.body.before"),
      className: "text-[#ffe9d9]/90",
    },
    {
      text: t("origin.body.accent"),
      className: "[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]",
    },
    {
      text: t("origin.body.after"),
      className: "text-[#ffe9d9]/90",
    },
  ];

  return (
    <section
      aria-labelledby="developer-origin-heading"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet ---- */}
      <div className="flex flex-col gap-6 px-5 py-16 sm:px-10 md:mx-auto md:max-w-[760px] desk:hidden">
        <p className="eyebrow">{t("origin.label")}</p>
        <h2 className="[font-family:'WisnuMan-Regular',Helvetica] text-[42px] font-normal leading-[1.15] sm:text-[56px]">
          {headingParts.map((part, index) => (
            <span key={`m-heading-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </h2>
        <div className="relative w-full max-w-[320px]">
          <div
            aria-hidden="true"
            className="absolute left-3 top-3 h-full w-full border-2 border-[#fe7f2d]/60"
          />
          <img
            className="relative w-full aspect-[0.86] object-cover"
            alt="Portrait representing the start in graphic design"
            src="/img/image-53.webp"
          />
        </div>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[20px] font-normal leading-[1.6] sm:text-[24px]">
          {bodyParts.map((part, index) => (
            <span key={`m-body-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[17px] font-normal leading-[1.55] text-[#ffe9d9]/55 sm:text-[19px]">
          {t("origin.note")}
        </p>
      </div>

      {/* ---- desktop (1440px canvas) ---- */}
      <div className="hidden desk:block">
        <p className="eyebrow absolute left-[110px] top-[130px]">
          {t("origin.label")}
        </p>
        <h2
          id="developer-origin-heading"
          className="absolute left-[110px] top-[180px] w-[1100px] [font-family:'WisnuMan-Regular',Helvetica] text-[90px] font-normal leading-[normal] tracking-[0] text-transparent"
        >
          {headingParts.map((part, index) => (
            <span key={`heading-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </h2>
        <div className="absolute left-[110px] top-[360px] h-[500px] w-[430px]">
          <div
            aria-hidden="true"
            className="absolute left-3.5 top-3.5 h-full w-full border-2 border-[#fe7f2d]/60"
          />
          <img
            className="relative h-[500px] w-[430px] object-cover"
            alt="Portrait representing the start in graphic design"
            src="/img/image-53.webp"
          />
        </div>
        <p className="absolute left-[630px] top-[370px] w-[610px] [font-family:'WisnuMan-Regular',Helvetica] text-[30px] font-normal leading-[1.55] tracking-[0]">
          {bodyParts.map((part, index) => (
            <span key={`body-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
        <p className="absolute left-[630px] top-[590px] w-[540px] [font-family:'WisnuMan-Regular',Helvetica] text-[22px] font-normal leading-[1.55] tracking-[0] text-[#ffe9d9]/55">
          {t("origin.note")}
        </p>
        <a
          href="#photography-perspective"
          className="absolute left-[630px] top-[688px] block"
        >
          <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[18px] font-normal leading-[normal] tracking-[0] text-[#ffe9d9]/50">
            {t("origin.pieces")}{" "}
            <span className="text-[#fe7f2d]">↓</span>
          </p>
          <div className="mt-4 flex items-start gap-5">
            <img
              className="h-[160px] w-auto"
              alt="Early design work"
              src="/img/no-mockup-1-4-1.webp"
              loading="lazy"
            />
            <img
              className="h-[160px] w-auto"
              alt="Early menu design"
              src="/img/3-menu-quality-2.webp"
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
