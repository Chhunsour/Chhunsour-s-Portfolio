const topImages = [
  {
    src: "/img/group-8761.webp",
    alt: "Photography collage row",
    className: "absolute top-[82px] left-0 w-[1353px] h-[315px]",
  },
  {
    src: "/img/img-8401-1.webp",
    alt: "Photography collage image",
    className:
      "absolute top-[83px] left-[1369px] w-[71px] h-[314px] aspect-[0.67] object-cover",
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

export const BuildAmbitionSection = (): JSX.Element => {
  return (
    <section
      aria-label="Photography gallery"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet: swipeable photo strips ---- */}
      <div className="flex flex-col gap-6 py-20 desk:hidden">
        <div className="overflow-x-auto px-5 sm:px-10">
          <img
            className="h-[190px] w-auto max-w-none"
            alt="Photography collage row"
            src="/img/group-8761.webp"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className="flex gap-3 overflow-x-auto px-5 sm:px-10"
          role="list"
          aria-label="Photography thumbnails"
        >
          {bottomImages.map((image) => (
            <img
              key={`m-${image.src}`}
              className="h-[210px] shrink-0 object-cover"
              alt={image.alt}
              src={image.src}
              loading="lazy"
              decoding="async"
              role="listitem"
            />
          ))}
        </div>
        <p className="px-5 pt-4 text-center [font-family:'Rafles-Regular',Helvetica] text-[26px] font-normal leading-[1.45] tracking-[0] sm:px-10 sm:text-[32px] md:mx-auto md:max-w-[680px]">
          <span className="text-[#fe7f2d]">Photography</span>
          <span className="[font-family:'WisnuMan-Regular',Helvetica] text-[#ffe9d9]/90">
            {" "}
            taught me lighting, composition, and how to tell a story without
            words.
          </span>
        </p>
      </div>

      {/* ---- desktop (1440px canvas, unchanged) ---- */}
      <div className="hidden desk:block">
      {topImages.map((image) => (
        <img
          key={image.src}
          className={image.className}
          alt={image.alt}
          src={image.src}
          loading="lazy"
          decoding="async"
        />
      ))}

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
