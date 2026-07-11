const topImages = [
  {
    src: "/img/img-1244-1.webp",
    alt: "Photography portrait 8",
    className:
      "w-[70.05px] h-[315.04px] ml-[140px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/img-1245-1.webp",
    alt: "Photography portrait 9",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/img-1247-1.webp",
    alt: "Photography portrait 10",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/img-7660-1.webp",
    alt: "Photography portrait 11",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/img-8401-1.webp",
    alt: "Photography portrait 12",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/img-8941-1.webp",
    alt: "Photography portrait 13",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/img-8941-2.webp",
    alt: "Photography portrait 14",
    className:
      "mt-0 w-[71.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
];

const bottomImages = [
  {
    src: "/img/dsc09995-2-1.webp",
    alt: "Photography portrait 1",
    className:
      "w-[70.05px] h-[315.04px] ml-[140px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/dsc09921-1.webp",
    alt: "Photography portrait 2",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/dsc09871-1.webp",
    alt: "Photography portrait 3",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/dsc00374-1.webp",
    alt: "Photography portrait 4",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/dsc00023-1.webp",
    alt: "Photography portrait 5",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/dsc00106-2-1.webp",
    alt: "Photography portrait 6",
    className: "w-[210.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
  {
    src: "/img/dsc09823-2-1.webp",
    alt: "Photography portrait 7",
    className:
      "mt-0 w-[71.05px] h-[315.04px] aspect-[0.67] object-cover shrink-0",
  },
];

const MobileStrip = ({
  images,
  reverse,
  label,
}: {
  images: typeof topImages;
  reverse?: boolean;
  label: string;
}): JSX.Element => (
  <div className="strip" aria-label={label}>
    <div
      className={`strip-track [--strip-duration:40s] ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {[0, 1].map((group) => (
        <div key={group} className="flex gap-3 pr-3">
          {images.map((image) => (
            <img
              key={`m-${group}-${image.src}`}
              className="h-[180px] shrink-0 object-cover"
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

export const BuildAmbitionSection = (): JSX.Element => {
  return (
    <section
      aria-label="Photography gallery"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet: auto-scrolling photo strips ---- */}
      <div className="flex flex-col gap-4 py-16 desk:hidden">
        <MobileStrip images={topImages} label="Photography highlights" />
        <MobileStrip
          images={bottomImages}
          reverse
          label="Photography thumbnails"
        />
        <p className="px-5 pt-4 text-center [font-family:'Rafles-Regular',Helvetica] text-[26px] font-normal leading-[1.45] tracking-[0] sm:px-10 sm:text-[32px] md:mx-auto md:max-w-[680px]">
          <span className="text-[#fe7f2d]">Photography</span>
          <span className="[font-family:'WisnuMan-Regular',Helvetica] text-[#ffe9d9]/90">
            {" "}
            taught me lighting, composition, and how to tell a story without
            words.
          </span>
        </p>
      </div>

      {/* ---- desktop (1440px canvas) ---- */}
      <div className="hidden desk:block">
        <div
          className="absolute top-[82px] left-[-140px] flex h-[315px] w-[1719px] gap-[41.4px]"
          role="list"
          aria-label="Photography highlights"
        >
          {topImages.map((image) => (
            <img
              key={image.src}
              className={image.className}
              alt={image.alt}
              src={image.src}
              loading="lazy"
              decoding="async"
              role="listitem"
            />
          ))}
        </div>

        <div
          className="absolute top-[438px] left-[-140px] flex h-[315px] w-[1719px] gap-[41.4px]"
          role="list"
          aria-label="Photography thumbnails"
        >
          {bottomImages.map((image) => (
            <img
              key={image.src}
              className={image.className}
              alt={image.alt}
              src={image.src}
              loading="lazy"
              decoding="async"
              role="listitem"
            />
          ))}
        </div>
        <p className="absolute top-[810px] left-[340px] w-[760px] text-center [font-family:'Rafles-Regular',Helvetica] text-4xl font-normal leading-[1.45] tracking-[0]">
          <span className="text-[#fe7f2d]">Photography</span>
          <span className="[font-family:'WisnuMan-Regular',Helvetica] text-[#ffe9d9]/90">
            {" "}
            taught me lighting, composition, and how to tell a story without
            words.
          </span>
        </p>
      </div>
    </section>
  );
};
