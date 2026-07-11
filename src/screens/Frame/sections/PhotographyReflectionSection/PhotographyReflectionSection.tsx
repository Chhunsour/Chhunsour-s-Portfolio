import { useEffect, useRef } from "react";
import { useI18n } from "../../../../i18n";

const topImages = [
  { src: "/img/img-1244-1.webp", alt: "Beauty campaign portrait" },
  { src: "/img/img-1245-1.webp", alt: "Beauty product portrait" },
  { src: "/img/img-1247-1.webp", alt: "Studio beauty portrait" },
  { src: "/img/img-7660-1.webp", alt: "Sunscreen campaign portrait" },
  { src: "/img/img-8401-1.webp", alt: "Studio product portrait" },
  { src: "/img/img-8941-1.webp", alt: "Beauty campaign photograph" },
  { src: "/img/img-8941-2.webp", alt: "Beauty campaign detail" },
];

const bottomImages = [
  { src: "/img/dsc09995-2-1.webp", alt: "Event photograph" },
  { src: "/img/dsc09921-1.webp", alt: "Birthday event portrait" },
  { src: "/img/dsc09871-1.webp", alt: "Birthday campaign photograph" },
  { src: "/img/dsc00374-1.webp", alt: "Night automotive portrait" },
  { src: "/img/dsc00023-1.webp", alt: "Family event portrait" },
  { src: "/img/dsc00106-2-1.webp", alt: "Family celebration photograph" },
  { src: "/img/dsc09823-2-1.webp", alt: "Event photograph detail" },
];

const mobileGalleryImages = [...topImages, ...bottomImages];

const smoothstep = (start: number, end: number, value: number) => {
  const progress = Math.min(1, Math.max(0, (value - start) / (end - start)));
  return progress * progress * (3 - 2 * progress);
};

const centerOutRevealOrder = [5, 3, 1, 0, 2, 4, 6];

const GalleryRow = ({
  images,
  label,
  sequenceOffset,
}: {
  images: typeof topImages;
  label: string;
  sequenceOffset: number;
}): JSX.Element => (
  <div
    className="grid w-full grid-cols-7 gap-3 will-change-transform sm:gap-5 desk:gap-8"
    role="list"
    aria-label={label}
  >
    {images.map((image, index) => (
      <img
        key={image.src}
        className="aspect-[2/3] w-full object-cover will-change-[opacity,transform,clip-path]"
        alt={image.alt}
        src={image.src}
        loading="lazy"
        decoding="async"
        role="listitem"
        data-story-image
        data-story-sequence={
          centerOutRevealOrder[index] * 2 + sequenceOffset
        }
        style={{ transition: "none", transformOrigin: "center" }}
      />
    ))}
  </div>
);

export const PhotographyReflectionSection = (): JSX.Element => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const narrative = narrativeRef.current;
    const gallery = galleryRef.current;
    if (!section || !narrative || !gallery) return;

    const galleryImages = Array.from(
      gallery.querySelectorAll<HTMLImageElement>("[data-story-image]"),
    ).sort(
      (a, b) =>
        Number(a.dataset.storySequence) - Number(b.dataset.storySequence),
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const imageProgress = galleryImages.map(() => -1);
    let frame = 0;
    let active = true;

    const update = () => {
      frame = 0;
      if (reducedMotion.matches) return;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const narrativeExit = smoothstep(0.18, 0.46, progress);
      const galleryEnter = smoothstep(0.28, 0.42, progress);

      narrative.style.opacity = `${1 - narrativeExit}`;
      narrative.style.transform = `translate3d(0, ${-48 * narrativeExit}px, 0) scale(${1 - 0.018 * narrativeExit})`;
      narrative.style.pointerEvents = narrativeExit > 0.7 ? "none" : "auto";

      gallery.style.opacity = `${galleryEnter}`;
      gallery.style.transform = "none";
      gallery.style.pointerEvents = progress > 0.72 ? "auto" : "none";

      galleryImages.forEach((image, index) => {
        const start = 0.28 + index * 0.03;
        const imageEnter = smoothstep(start, start + 0.22, progress);
        const aperture = 49 * (1 - imageEnter);
        const scale = 1.08 - 0.08 * imageEnter;

        if (Math.abs(imageProgress[index] - imageEnter) < 0.003) return;
        imageProgress[index] = imageEnter;

        image.style.opacity = `${imageEnter}`;
        image.style.clipPath = `inset(${aperture}% ${aperture}% ${aperture}% ${aperture}% round ${16 * (1 - imageEnter)}px)`;
        image.style.transform = `scale(${scale})`;
      });
    };

    const requestUpdate = () => {
      if (active && !frame) frame = requestAnimationFrame(update);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) requestUpdate();
      },
      { rootMargin: "100% 0px" },
    );

    update();
    visibilityObserver.observe(section);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      visibilityObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <>
      <section
        aria-labelledby="photography-reflection-title-mobile"
        className="relative overflow-hidden px-5 py-16 sm:px-10 sm:py-20 desk:hidden"
      >
        <p className="eyebrow">{t("photo.label")}</p>

        <div className="mt-7 grid grid-cols-[minmax(0,1fr)_108px] items-end gap-5 sm:grid-cols-[minmax(0,1fr)_150px] sm:gap-8">
          <div>
            <h2
              id="photography-reflection-title-mobile"
              className="[font-family:'WisnuMan-Regular',Helvetica] text-[39px] font-normal leading-[1.03] tracking-[-0.025em] text-[#ffe9d9] sm:text-[54px]"
            >
              {t("photo.heading.before")}
              <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
                {t("photo.heading.accent")}
              </span>
              {t("global.period")}
            </h2>
          </div>

          <figure className="m-0">
            <img
              className="aspect-[4/5] w-full object-cover"
              alt="Sour holding a camera and composing a photograph"
              src="/img/untitled-67-1.webp"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="mt-7 border-l border-[#fe7f2d]/70 pl-5">
          <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[27px] font-normal leading-[1.15] tracking-[-0.015em] text-[#ffe9d9] sm:text-[34px]">
            {t("photo.reflection.before")}
            <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
              {t("photo.reflection.accent")}
            </span>
            {t("global.period")}
          </p>
          <p className="mt-3 [font-family:'WisnuMan-Regular',Helvetica] text-[16px] leading-[1.5] text-[#ffe9d9]/60 sm:text-[18px]">
            {t("photo.note")}
          </p>
        </div>

        <div className="mt-10 flex items-end justify-between gap-5">
          <p className="[font-family:'OTTERO-Regular',Helvetica] text-[10px] tracking-[2.5px] text-[#fe7f2d]">
            {t("photo.selected")}
          </p>
          <p className="[font-family:'OTTERO-Regular',Helvetica] text-[9px] tracking-[2px] text-[#ffe9d9]/35">
            {t("photo.swipe")}
          </p>
        </div>

        <div
          className="mobile-photo-rail -mx-5 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 sm:-mx-10 sm:gap-4 sm:px-10"
          role="list"
          aria-label="Selected photography gallery"
        >
          {mobileGalleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`m-0 min-w-[42vw] snap-center sm:min-w-[30vw] ${
                index === 0 ? "ml-0" : ""
              }`}
              role="listitem"
            >
              <img
                className="aspect-[2/3] w-full object-cover"
                alt={image.alt}
                src={image.src}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>

      <section
        ref={sectionRef}
        aria-labelledby="photography-reflection-title"
        className="photography-story relative hidden h-[300svh] w-full desk:block"
      >
      <div className="photography-story-sticky sticky top-0 h-[100svh] w-full overflow-hidden">
        <div
          ref={narrativeRef}
          className="photography-story-narrative absolute inset-0 flex items-center px-5 py-20 will-change-[opacity,transform] sm:px-10 desk:px-[110px]"
        >
          <div className="mx-auto w-full max-w-[1220px]">
            <p className="eyebrow">{t("photo.label")}</p>

            <div className="mt-7 grid items-center gap-7 md:mt-8 md:grid-cols-[minmax(0,0.9fr)_minmax(300px,0.75fr)] md:gap-12 desk:mt-10 desk:grid-cols-[minmax(0,1fr)_500px] desk:gap-[108px]">
              <div>
                <h2
                  id="photography-reflection-title"
                  className="max-w-[690px] [font-family:'WisnuMan-Regular',Helvetica] text-[42px] font-normal leading-[1.04] tracking-[-0.025em] text-[#ffe9d9] sm:text-[56px] md:text-[58px] desk:text-[82px]"
                >
                  {t("photo.heading.before")}
                  <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
                    {t("photo.heading.accent")}
                  </span>
                  {t("global.period")}
                </h2>

                <div className="mt-6 flex items-stretch gap-4 sm:mt-8 sm:gap-6 desk:mt-12">
                  <span
                    aria-hidden="true"
                    className="w-px shrink-0 bg-gradient-to-b from-[#fe7f2d] to-[#fe7f2d]/10"
                  />
                  <div>
                    <p className="max-w-[570px] [font-family:'WisnuMan-Regular',Helvetica] text-[27px] font-normal leading-[1.13] tracking-[-0.015em] text-[#ffe9d9] sm:text-[34px] md:text-[34px] desk:text-[46px]">
                      {t("photo.reflection.before")}
                      <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
                        {t("photo.reflection.accent")}
                      </span>
                      {t("global.period")}
                    </p>
                    <p className="mt-4 hidden max-w-[500px] [font-family:'WisnuMan-Regular',Helvetica] text-[18px] font-normal leading-[1.55] text-[#ffe9d9]/65 sm:block desk:mt-5 desk:text-[21px]">
                      {t("photo.note")}
                    </p>
                  </div>
                </div>
              </div>

              <figure className="group m-0 w-full max-w-[270px] justify-self-center sm:max-w-[320px] md:max-w-none md:justify-self-end">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 h-full w-full border border-[#fe7f2d]/55 sm:-bottom-4 sm:-right-4"
                  />
                  <div className="relative overflow-hidden bg-[#fe7f2d]/10">
                    <img
                      className="aspect-[8/9] w-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-105"
                      alt="Sour holding a camera and composing a photograph"
                      src="/img/untitled-67-1.webp"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <figcaption className="mt-5 flex items-center justify-between gap-3 [font-family:'OTTERO-Regular',Helvetica] text-[9px] tracking-[2px] text-[#ffe9d9]/55 sm:text-[10px] desk:mt-6 desk:text-xs desk:tracking-[3px]">
                  <span>{t("photo.lens")}</span>
                  <span
                    className="h-px flex-1 bg-[#ffe9d9]/15"
                    aria-hidden="true"
                  />
                  <span>{t("photo.location")}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="photography-story-gallery pointer-events-none absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden opacity-0 will-change-[opacity,transform] sm:gap-5 desk:gap-[41px]"
          aria-label="Selected photography gallery"
        >
          <div className="w-full px-3 sm:px-5 desk:px-8">
            <GalleryRow
              images={topImages}
              label="Beauty campaign photography"
              sequenceOffset={0}
            />
          </div>
          <div className="w-full px-3 sm:px-5 desk:px-8">
            <GalleryRow
              images={bottomImages}
              label="Event photography"
              sequenceOffset={1}
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 [font-family:'OTTERO-Regular',Helvetica] text-[9px] tracking-[3px] text-[#ffe9d9]/35 sm:bottom-8 sm:text-[10px]"
        >
          <span>{t("global.keepScrolling")}</span>
          <span className="h-7 w-px bg-gradient-to-b from-[#fe7f2d] to-transparent" />
        </div>
      </div>
      </section>
    </>
  );
};
