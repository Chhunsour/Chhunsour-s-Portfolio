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
            width={465}
            height={540}
            loading="lazy"
            decoding="async"
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
            width={465}
            height={540}
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="absolute left-[630px] top-[358px] w-[610px] [font-family:'WisnuMan-Regular',Helvetica] text-[30px] font-normal leading-[1.55] tracking-[0]">
          {bodyParts.map((part, index) => (
            <span key={`body-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
        <p className="absolute left-[630px] top-[578px] w-[540px] [font-family:'WisnuMan-Regular',Helvetica] text-[22px] font-normal leading-[1.55] tracking-[0] text-[#ffe9d9]/55">
          {t("origin.note")}
        </p>
        <a
          href="#photography-perspective"
          className="absolute left-[630px] top-[684px] block"
        >
          <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[19px] font-normal leading-[normal] tracking-[0] text-[#ffe9d9]/60">
            {t("origin.pieces")}{" "}
            <span className="text-[#fe7f2d]">↓</span>
          </p>
          <div className="mt-3 flex items-start gap-5">
            <img
              className="h-[150px] w-auto border border-[#ffe9d9]/15"
              alt="Early design work"
              src="/img/no-mockup-1-4-1.webp"
              width={1100}
              height={620}
              loading="lazy"
              decoding="async"
            />
            <img
              className="h-[150px] w-auto border border-[#ffe9d9]/15"
              alt="Early menu design"
              src="/img/3-menu-quality-2.webp"
              width={1100}
              height={784}
              loading="lazy"
              decoding="async"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
