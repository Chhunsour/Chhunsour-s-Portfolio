export const PhotographyReflectionSection = (): JSX.Element => {
  const headingParts = [
    {
      text: "Then I picked up a ",
      className: "text-[#ffe9d9]",
    },
    {
      text: "camera",
      className: "[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]",
    },
    {
      text: ".",
      className: "text-[#ffe9d9]",
    },
  ];

  const reflectionParts = [
    {
      text: "And I started seeing things ",
      className: "text-[#ffe9d9] leading-[57.2px]",
    },
    {
      text: "Differently",
      className:
        "[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d] leading-[57.2px]",
    },
    {
      text: "...",
      className:
        "[font-family:'Rafles-Regular',Helvetica] text-[#ffe9d9] leading-[57.2px]",
    },
  ];

  return (
    <section
      aria-label="Photography reflection"
      className="relative w-full overflow-hidden desk:mt-[87px] desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet ---- */}
      <div className="flex flex-col gap-8 px-5 py-20 sm:px-10 md:mx-auto md:max-w-[760px] desk:hidden">
        <p className="eyebrow">04 — PHOTOGRAPHY</p>
        <h2 className="[font-family:'WisnuMan-Regular',Helvetica] text-[42px] font-normal leading-[1.15] text-transparent sm:text-[56px]">
          {headingParts.map((part, index) => (
            <span key={`m-${part.text}-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </h2>
        <figure className="m-0">
          <img
            className="w-full max-w-[420px] aspect-[0.89] object-cover"
            alt="Portrait photograph"
            src="/img/untitled-67-1.webp"
            loading="lazy"
          />
        </figure>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[34px] font-normal leading-[1.15] text-transparent sm:text-[44px]">
          {reflectionParts.map((part, index) => (
            <span
              key={`m-${part.text}-${index}`}
              className={`${part.className} !leading-[1.15]`}
            >
              {part.text}
            </span>
          ))}
        </p>
      </div>

      {/* ---- desktop (1440px canvas, unchanged) ---- */}
      <div className="hidden desk:block">
        <p className="eyebrow absolute left-44 top-[74px]">04 — PHOTOGRAPHY</p>
        <h2 className="absolute left-44 top-[117px] w-[1089px] [font-family:'WisnuMan-Regular',Helvetica] text-[90px] font-normal leading-[normal] tracking-[0] text-transparent">
          {headingParts.map((part, index) => (
            <span key={`${part.text}-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </h2>
        <figure className="absolute left-[558px] top-[284px] m-0">
          <img
            className="h-[432px] w-96 aspect-[0.89] object-cover"
            alt="Portrait photograph"
            src="/img/untitled-67-1.webp"
          />
        </figure>
        <p className="absolute left-[455px] top-[798px] w-[590px] [font-family:'WisnuMan-Regular',Helvetica] text-6xl font-normal leading-[60px] tracking-[0] text-transparent">
          {reflectionParts.map((part, index) => (
            <span key={`${part.text}-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
