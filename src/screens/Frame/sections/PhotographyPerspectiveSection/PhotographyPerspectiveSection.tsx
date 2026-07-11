const leftColumnImages = [
  {
    src: "/img/rectangle-4328.webp",
    alt: "Photography collage tile 1",
    className: "absolute top-0.5 left-[78px] w-[155px] h-[154px] object-cover",
  },
  {
    src: "/img/rectangle-4329.webp",
    alt: "Photography collage tile 2",
    className:
      "absolute top-[170px] left-[78px] w-[155px] h-[155px] object-cover",
  },
  {
    src: "/img/rectangle-4330.webp",
    alt: "Photography collage tile 3",
    className:
      "absolute top-[339px] left-[78px] w-[155px] h-[156px] object-cover",
  },
  {
    src: "/img/rectangle-4331.webp",
    alt: "Photography collage tile 4",
    className:
      "absolute top-[507px] left-[78px] w-[155px] h-[156px] object-cover",
  },
  {
    src: "/img/rectangle-4332.webp",
    alt: "Photography collage tile 5",
    className:
      "absolute top-[676px] left-[78px] w-[155px] h-[156px] object-cover",
  },
  {
    src: "/img/rectangle-4333.webp",
    alt: "Photography collage tile 6",
    className:
      "absolute top-[845px] left-[78px] w-[155px] h-[155px] object-cover",
  },
  {
    src: "/img/image-57.webp",
    alt: "",
    className:
      "absolute top-[1014px] left-[78px] w-[156px] h-2.5 aspect-[0.8] object-cover",
    ariaHidden: true,
  },
];

const centerColumnImages = [
  {
    src: "/img/hotpot-at-italy-1.webp",
    alt: "Hotpot at Italy project image",
    className:
      "absolute top-0 left-[254px] w-[413px] h-[149px] aspect-[1.78] object-cover",
  },
  {
    src: "/img/1-cover-copy-2.webp",
    alt: "Design cover composition",
    className:
      "absolute top-[163px] left-[254px] w-[414px] h-[155px] aspect-[2.67] object-cover",
  },
  {
    src: "/img/no-mockup-1-4-1.webp",
    alt: "Mockup-free design preview",
    className:
      "absolute top-[332px] left-[254px] w-[412px] h-[232px] aspect-[1.78] object-cover",
  },
  {
    src: "/img/1-4-1.webp",
    alt: "Design project preview",
    className:
      "absolute top-[579px] left-[254px] w-[411px] h-[154px] aspect-[2.67] object-cover",
  },
  {
    src: "/img/3-menu-quality-2.webp",
    alt: "Menu quality design project",
    className:
      "absolute top-[747px] left-[254px] w-[413px] h-[277px] aspect-[1.4] object-cover",
  },
];

const rightColumnImages = [
  {
    src: "/img/rectangle-4322.webp",
    alt: "Photography collage tile 7",
    className: "absolute top-0.5 left-[687px] w-[155px] h-[154px] object-cover",
  },
  {
    src: "/img/rectangle-4323.webp",
    alt: "Photography collage tile 8",
    className:
      "absolute top-[170px] left-[687px] w-[155px] h-[155px] object-cover",
  },
  {
    src: "/img/rectangle-4324.webp",
    alt: "Photography collage tile 9",
    className:
      "absolute top-[339px] left-[687px] w-[155px] h-[156px] object-cover",
  },
  {
    src: "/img/rectangle-4325.webp",
    alt: "Photography collage tile 10",
    className:
      "absolute top-[507px] left-[687px] w-[155px] h-[156px] object-cover",
  },
  {
    src: "/img/rectangle-4335.webp",
    alt: "Photography collage tall tile",
    className: "absolute top-[676px] left-[687px] w-[155px] h-[207px]",
  },
  {
    src: "/img/rectangle-4336.webp",
    alt: "Photography collage tile 11",
    className:
      "absolute top-[897px] left-[687px] w-[155px] h-[127px] object-cover",
  },
];

// square collage tiles reused by the mobile grid (skips the 10px-high filler strip)
const mobileTiles = [...leftColumnImages.slice(0, 6), ...rightColumnImages];

const SeeMoreLink = (): JSX.Element => (
  <a
    href="https://www.pinterest.com/Dennvor/"
    target="_blank"
    rel="noreferrer"
    aria-label="See more on Pinterest at www.pinterest.com/Dennvor/"
    className="block"
  >
    <p className="[font-family:'Rafles-Regular',Helvetica] font-normal text-transparent text-[24px] desk:text-[33px] tracking-[0] leading-[1.3] desk:leading-[31.5px]">
      <span className="text-[#fe7f2d]">See more</span>
      <span className="[font-family:'WisnuMan-Regular',Helvetica] text-white">
        : <br />
      </span>
      <span className="[font-family:'WisnuMan-Regular',Helvetica] text-[#ffe9d9] underline">
        www.pinterest.com/Dennvor/
      </span>
    </p>
  </a>
);

export const PhotographyPerspectiveSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="photography-perspective-title"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      <h2 id="photography-perspective-title" className="sr-only">
        Photography perspective
      </h2>

      {/* ---- mobile / tablet ---- */}
      <div className="flex flex-col gap-6 py-16 desk:hidden">
        <div className="flex flex-col gap-6 px-5 sm:px-10 md:mx-auto md:w-full md:max-w-[760px]">
        <p className="eyebrow">03 — SELECTED WORK</p>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] font-normal text-[34px] tracking-[0] leading-[1.25] sm:text-[42px]">
          <span className="text-[#ffe9d9]">Everything I make starts with </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            design
          </span>
          <span className="text-[#ffe9d9]">.</span>
        </p>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] font-normal text-[20px] tracking-[0] leading-[1.6] sm:text-[24px]">
          <span className="text-[#ffe9d9]/90">
            Typography, color, and hierarchy — the same instincts now drive my
            photography,{" "}
          </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            UI/UX
          </span>
          <span className="text-[#ffe9d9]/90">, and web work.</span>
        </p>
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 sm:px-10">
          {centerColumnImages.map((image) => (
            <img
              key={`m-${image.src}`}
              className="h-[180px] shrink-0 object-cover"
              alt={image.alt}
              src={image.src}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <div className="strip" aria-hidden="true">
          <div className="strip-track [--strip-duration:45s]">
            {[0, 1].map((group) => (
              <div key={group} className="flex gap-3 pr-3">
                {mobileTiles.map((image) => (
                  <img
                    key={`m-${group}-${image.src}`}
                    className="h-[110px] w-[110px] shrink-0 object-cover"
                    alt=""
                    src={image.src}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 sm:px-10 md:mx-auto md:w-full md:max-w-[760px]">
          <SeeMoreLink />
        </div>
      </div>

      {/* ---- desktop (1440px canvas, unchanged) ---- */}
      <div className="hidden desk:block">
        {leftColumnImages.map((image, index) => (
          <img
            key={`left-${index}`}
            className={image.className}
            alt={image.alt}
            src={image.src}
            aria-hidden={image.ariaHidden ? "true" : undefined}
          />
        ))}

        {centerColumnImages.map((image, index) => (
          <img
            key={`center-${index}`}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}

        {rightColumnImages.map((image, index) => (
          <img
            key={`right-${index}`}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}

        <div className="absolute top-28 left-[888px] w-[500px]">
          <p className="eyebrow">03 — SELECTED WORK</p>
          <p className="mt-10 [font-family:'WisnuMan-Regular',Helvetica] font-normal text-[42px] tracking-[0] leading-[1.25]">
            <span className="text-[#ffe9d9]">
              Everything I make starts with{" "}
            </span>
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              design
            </span>
            <span className="text-[#ffe9d9]">.</span>
          </p>
          <p className="mt-8 [font-family:'WisnuMan-Regular',Helvetica] font-normal text-[26px] tracking-[0] leading-[1.55]">
            <span className="text-[#ffe9d9]/90">
              Typography, color, and hierarchy — the same instincts now drive
              my photography,{" "}
            </span>
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              UI/UX
            </span>
            <span className="text-[#ffe9d9]/90">, and web work.</span>
          </p>
        </div>
        <img
          className="absolute top-[876px] left-[888px] w-[74px] h-[74px] aspect-[1] object-cover"
          alt=""
          src="/img/image-58.webp"
          aria-hidden="true"
        />
        <div className="absolute top-[882px] left-[967px]">
          <SeeMoreLink />
        </div>
      </div>
    </section>
  );
};
