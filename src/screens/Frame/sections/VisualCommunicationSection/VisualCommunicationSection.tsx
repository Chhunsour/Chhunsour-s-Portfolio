const decorativeImages = [
  {
    src: "/img/image-35.webp",
    alt: "",
    className:
      "absolute top-[520px] left-[1197px] w-[132px] h-[129px] aspect-[1.02] object-cover",
  },
  {
    src: "/img/image-31.webp",
    alt: "",
    className:
      "absolute top-[586px] left-[1131px] w-[127px] h-[127px] aspect-[1] object-cover",
  },
  {
    src: "/img/image-32.webp",
    alt: "",
    className:
      "absolute top-[648px] left-[1063px] w-[133px] h-[129px] aspect-[1.03] object-cover",
  },
];

export const VisualCommunicationSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="visual-communication-heading"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet ---- */}
      <div className="flex flex-col gap-8 px-5 py-20 sm:px-10 md:mx-auto md:max-w-[760px] desk:hidden">
        <h2 className="[font-family:'WisnuMan-Regular',Helvetica] text-[38px] font-normal leading-[1.2] sm:text-[52px]">
          <span className="text-[#ffe9d9]">Before I became a </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            developer
          </span>
          <span className="text-[#ffe9d9]">
            , I learned how to communicate ideas{" "}
          </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            visually
          </span>
          <span className="text-[#ffe9d9]">.</span>
        </h2>
        <p className="eyebrow">02 — GRAPHIC DESIGN</p>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[20px] font-normal leading-[1.6] sm:text-[24px]">
          <span className="text-[#ffe9d9]/90">
            It began with posters — learning how{" "}
          </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            typography, color, and hierarchy
          </span>
          <span className="text-[#ffe9d9]/90">
            {" "}
            turn a simple idea into something people instantly understand.
          </span>
        </p>
        <div className="flex gap-2">
          {decorativeImages.map((image) => (
            <img
              key={`m-${image.src}`}
              className="w-1/3 aspect-square object-cover"
              alt=""
              aria-hidden="true"
              src={image.src}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* ---- desktop (1440px canvas, unchanged) ---- */}
      <div className="hidden desk:block">
      <h2
        id="visual-communication-heading"
        className="absolute top-[114px] left-[134px] w-[1172px] [font-family:'WisnuMan-Regular',Helvetica] font-normal text-transparent text-[90px] text-center tracking-[0] leading-[normal]"
      >
        <span className="text-[#ffe9d9]">Before I became a </span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          developer
        </span>
        <span className="text-[#ffe9d9]">
          , I learned how to communicate ideas{" "}
        </span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          visually
        </span>
        <span className="text-[#ffe9d9]">.</span>
      </h2>
      <p className="eyebrow absolute top-[512px] left-[134px]">
        02 — GRAPHIC DESIGN
      </p>
      <p className="absolute top-[568px] left-[134px] w-[720px] [font-family:'WisnuMan-Regular',Helvetica] font-normal text-[30px] tracking-[0] leading-[1.55]">
        <span className="text-[#ffe9d9]/90">
          It began with posters — learning how{" "}
        </span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          typography, color, and hierarchy
        </span>
        <span className="text-[#ffe9d9]/90">
          {" "}
          turn a simple idea into something people instantly understand.
        </span>
      </p>
      {decorativeImages.map((image) => (
        <img
          key={image.src}
          className={image.className}
          alt={image.alt}
          aria-hidden="true"
          src={image.src}
        />
      ))}
      </div>
    </section>
  );
};
