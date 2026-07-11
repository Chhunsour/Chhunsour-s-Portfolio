export const DeveloperOriginSection = (): JSX.Element => {
  const headingParts = [
    {
      text: "I didn't start with ",
      className: "text-[#ffe9d9]",
    },
    {
      text: "code",
      className: "[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]",
    },
    {
      text: ".",
      className: "text-[#ffe9d9]",
    },
  ];

  const bodyParts = [
    {
      text: "I started with ",
      className: "text-[#ffe9d9]/90",
    },
    {
      text: "graphic design",
      className: "[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]",
    },
    {
      text: " — learning how color, ",
      className: "text-[#ffe9d9]/90",
    },
    {
      text: "typography",
      className: "[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]",
    },
    {
      text: ", and composition turn an idea into something people feel.",
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
        <p className="eyebrow">01 — THE ORIGIN</p>
        <h2 className="[font-family:'WisnuMan-Regular',Helvetica] text-[42px] font-normal leading-[1.15] sm:text-[56px]">
          {headingParts.map((part, index) => (
            <span key={`m-heading-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </h2>
        <img
          className="w-full max-w-[320px] aspect-[0.86] object-cover"
          alt="Portrait representing the start in graphic design"
          src="/img/image-53.webp"
        />
        <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[20px] font-normal leading-[1.6] sm:text-[24px]">
          {bodyParts.map((part, index) => (
            <span key={`m-body-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
      </div>

      {/* ---- desktop (1440px canvas, unchanged) ---- */}
      <div className="hidden desk:block">
        <h2
          id="developer-origin-heading"
          className="absolute left-[250px] top-[117px] w-[941px] [font-family:'WisnuMan-Regular',Helvetica] text-[90px] font-normal leading-[normal] tracking-[0] text-transparent"
        >
          {headingParts.map((part, index) => (
            <span key={`heading-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </h2>
        <img
          className="absolute left-[97px] top-[330px] h-[540px] w-[465px] aspect-[0.86] object-cover"
          alt="Portrait representing the start in graphic design"
          src="/img/image-53.webp"
        />
        <p className="eyebrow absolute left-[620px] top-[440px]">
          01 — THE ORIGIN
        </p>
        <p className="absolute left-[620px] top-[496px] w-[600px] [font-family:'WisnuMan-Regular',Helvetica] text-[30px] font-normal leading-[1.55] tracking-[0]">
          {bodyParts.map((part, index) => (
            <span key={`body-part-${index}`} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
