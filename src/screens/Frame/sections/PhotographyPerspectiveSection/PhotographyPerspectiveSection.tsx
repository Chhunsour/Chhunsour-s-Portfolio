const leftColumnImages = [
  { src: "/img/rectangle-4328.webp", alt: "Photography collage tile 1" },
  { src: "/img/rectangle-4329.webp", alt: "Photography collage tile 2" },
  { src: "/img/rectangle-4330.webp", alt: "Photography collage tile 3" },
  { src: "/img/rectangle-4331.webp", alt: "Photography collage tile 4" },
  { src: "/img/rectangle-4332.webp", alt: "Photography collage tile 5" },
  { src: "/img/rectangle-4333.webp", alt: "Photography collage tile 6" },
];

const centerColumnImages = [
  { src: "/img/hotpot-at-italy-1.webp", alt: "Hotpot at Italy project image" },
  { src: "/img/1-cover-copy-2.webp", alt: "Design cover composition" },
  { src: "/img/no-mockup-1-4-1.webp", alt: "Mockup-free design preview" },
  { src: "/img/1-4-1.webp", alt: "Design project preview" },
  { src: "/img/3-menu-quality-2.webp", alt: "Menu quality design project" },
];

const rightColumnImages = [
  { src: "/img/rectangle-4322.webp", alt: "Photography collage tile 7" },
  { src: "/img/rectangle-4323.webp", alt: "Photography collage tile 8" },
  { src: "/img/rectangle-4324.webp", alt: "Photography collage tile 9" },
  { src: "/img/rectangle-4325.webp", alt: "Photography collage tile 10" },
  { src: "/img/rectangle-4335.webp", alt: "Photography collage tall tile" },
  { src: "/img/rectangle-4336.webp", alt: "Photography collage tile 11" },
];

const mobileTiles = [...leftColumnImages, ...rightColumnImages];

// endless downward "poster drop" column; two copies of the stack loop seamlessly.
// all columns share one duration (in CSS) so they stay in perfect sync
const FallColumn = ({
  images,
  className,
  square,
}: {
  images: typeof leftColumnImages;
  className: string;
  square?: boolean;
}): JSX.Element => (
  <div className={`fall absolute top-0 h-full ${className}`}>
    <div className="fall-track">
      {[0, 1].map((group) => (
        <div key={group} className="flex flex-col gap-4 pb-4">
          {images.map((image) => (
            <img
              key={`${group}-${image.src}`}
              className={`w-full object-cover ${square ? "aspect-square" : ""}`}
              alt={group === 0 ? image.alt : ""}
              aria-hidden={group === 1 ? "true" : undefined}
              src={image.src}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const SeeMoreLink = (): JSX.Element => {
  const { t } = useI18n();
  return (
  <a
    href="https://www.pinterest.com/Dennvor/"
    target="_blank"
    rel="noreferrer"
    aria-label="See more photography on Pinterest"
    className="block"
  >
    <p className="[font-family:'Rafles-Regular',Helvetica] font-normal text-transparent text-[24px] desk:text-[33px] tracking-[0] leading-[1.3] desk:leading-[31.5px]">
      <span className="text-[#fe7f2d]">{t("selected.more")}</span>
      <span className="[font-family:'WisnuMan-Regular',Helvetica] text-white">
        : <br />
      </span>
      <span className="[font-family:'WisnuMan-Regular',Helvetica] text-[#ffe9d9] underline">
        {t("selected.pinterest")}
      </span>
    </p>
    </a>
  );
};

export const PhotographyPerspectiveSection = (): JSX.Element => {
  const { t } = useI18n();
  return (
    <section
      aria-labelledby="photography-perspective-title"
      className="relative w-full overflow-hidden desk:h-[728px] desk:w-[1440px]"
    >
      <h2 id="photography-perspective-title" className="sr-only">
        Photography perspective
      </h2>

      {/* ---- mobile / tablet ---- */}
      <div className="flex flex-col gap-6 py-16 desk:hidden">
        <div className="flex flex-col gap-6 px-5 sm:px-10 md:mx-auto md:w-full md:max-w-[760px]">
        <p className="eyebrow">{t("selected.label")}</p>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] font-normal text-[34px] tracking-[0] leading-[1.25] sm:text-[42px]">
          <span className="text-[#ffe9d9]">{t("selected.heading.before")}</span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            {t("selected.heading.accent")}
          </span>
          <span className="text-[#ffe9d9]">{t("global.period")}</span>
        </p>
        <p className="[font-family:'WisnuMan-Regular',Helvetica] font-normal text-[20px] tracking-[0] leading-[1.6] sm:text-[24px]">
          <span className="text-[#ffe9d9]/90">
            {t("selected.body.before")}
          </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            {t("selected.body.accent")}
          </span>
          <span className="text-[#ffe9d9]/90">{t("selected.body.after")}</span>
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

      {/* ---- desktop (1440px canvas) ---- */}
      <div className="hidden desk:block">
        <FallColumn
          images={leftColumnImages}
          className="left-[78px] w-[155px]"
          square
        />
        <FallColumn
          images={centerColumnImages}
          className="left-[254px] w-[413px]"
        />
        <FallColumn
          images={rightColumnImages}
          className="left-[687px] w-[155px]"
          square
        />

        <div className="absolute top-28 left-[888px] w-[500px]">
          <p className="eyebrow">{t("selected.label")}</p>
          <p className="mt-10 [font-family:'WisnuMan-Regular',Helvetica] font-normal text-[42px] tracking-[0] leading-[1.25]">
            <span className="text-[#ffe9d9]">
              {t("selected.heading.before")}
            </span>
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              {t("selected.heading.accent")}
            </span>
            <span className="text-[#ffe9d9]">{t("global.period")}</span>
          </p>
          <p className="mt-8 [font-family:'WisnuMan-Regular',Helvetica] font-normal text-[26px] tracking-[0] leading-[1.55]">
            <span className="text-[#ffe9d9]/90">
              {t("selected.body.before")}
            </span>
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              {t("selected.body.accent")}
            </span>
            <span className="text-[#ffe9d9]/90">{t("selected.body.after")}</span>
          </p>
        </div>
        <img
          className="absolute top-[580px] left-[888px] w-[74px] h-[74px] aspect-[1] object-cover"
          alt=""
          src="/img/image-58.webp"
          aria-hidden="true"
        />
        <div className="absolute top-[586px] left-[967px]">
          <SeeMoreLink />
        </div>
      </div>
    </section>
  );
};
import { useI18n } from "../../../../i18n";
