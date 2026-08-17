import { useEffect, useRef } from "react";
import { useI18n } from "../../../../i18n";

interface PhotoItem {
  src: string;
  alt: string;
  category: string;
  year: string;
  series: string;
  featured?: boolean;
}

const galleryPhotos: PhotoItem[] = [
  {
    src: "/img/dsc00374-1.webp",
    alt: "Night automotive portrait with orange sports car",
    category: "NIGHT AUTOMOTIVE",
    year: "2026",
    series: "01",
    featured: true,
  },
  {
    src: "/img/img-8401-1.webp",
    alt: "Studio product portrait",
    category: "STUDIO PRODUCT",
    year: "2025",
    series: "02",
  },
  {
    src: "/img/img-1244-1.webp",
    alt: "Beauty campaign portrait",
    category: "STUDIO BEAUTY",
    year: "2025",
    series: "03",
  },
  {
    src: "/img/img-7660-1.webp",
    alt: "Sunscreen campaign portrait",
    category: "SUNSCREEN CAMPAIGN",
    year: "2025",
    series: "04",
  },
  {
    src: "/img/dsc09995-2-1.webp",
    alt: "Event atmosphere photography",
    category: "EVENT ATMOSPHERE",
    year: "2026",
    series: "05",
  },
  {
    src: "/img/img-1245-1.webp",
    alt: "Beauty product portrait",
    category: "BEAUTY EDITORIAL",
    year: "2025",
    series: "06",
  },
  {
    src: "/img/dsc09921-1.webp",
    alt: "Birthday celebration portrait",
    category: "CELEBRATION",
    year: "2026",
    series: "07",
  },
  {
    src: "/img/img-8941-1.webp",
    alt: "Beauty campaign photograph",
    category: "BEAUTY CAMPAIGN",
    year: "2025",
    series: "08",
  },
  {
    src: "/img/dsc00023-1.webp",
    alt: "Family celebration photograph",
    category: "FAMILY CELEBRATION",
    year: "2026",
    series: "09",
  },
  {
    src: "/img/img-1247-1.webp",
    alt: "Studio beauty portrait",
    category: "STUDIO ELEGANCE",
    year: "2025",
    series: "10",
  },
  {
    src: "/img/dsc09871-1.webp",
    alt: "Campaign detail portrait",
    category: "CAMPAIGN DETAIL",
    year: "2026",
    series: "11",
  },
];

export const PhotographyReflectionSection = (): JSX.Element => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // High-Performance Desktop Horizontal Scroll Controller with Intentional Pause & Smooth Easing
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const progressBar = progressBarRef.current;
    if (!container || !track) return;

    let rafId = 0;
    let totalScroll = 0;
    let maxTranslate = 0;
    let isDesktop = window.innerWidth >= 1440;

    const columns = Array.from(
      track.querySelectorAll<HTMLElement>("[data-gallery-col]"),
    );

    // Initial pause window: Allows reading the narrative comfortably before horizontal motion starts
    const PAUSE_THRESHOLD = 0.14;

    const updateMetrics = () => {
      isDesktop = window.innerWidth >= 1440;
      if (!isDesktop) return;

      totalScroll = Math.max(container.offsetHeight - window.innerHeight, 1);
      maxTranslate = Math.max(track.scrollWidth - window.innerWidth + 240, 0);
    };

    updateMetrics();

    const onScroll = () => {
      if (!isDesktop) return;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          const rect = container.getBoundingClientRect();
          const progress = Math.min(1, Math.max(0, -rect.top / totalScroll));

          // 1. Initial Pause on Narrative: Hold stationary for the first 14% of scroll
          let easedProgress = 0;
          if (progress > PAUSE_THRESHOLD) {
            const rawT = (progress - PAUSE_THRESHOLD) / (1 - PAUSE_THRESHOLD);
            // Smooth ease-out polynomial curve for a silky start and deceleration
            easedProgress = 1 - Math.pow(1 - rawT, 1.8);
          }

          const currentTranslate = easedProgress * maxTranslate;
          track.style.transform = `translate3d(-${currentTranslate.toFixed(2)}px, 0, 0)`;

          if (progressBar) {
            progressBar.style.transform = `scaleX(${progress})`;
          }

          // 2. Smooth Fade-In and Upward Glide for upcoming gallery columns as they scroll into view
          const windowWidth = window.innerWidth;
          columns.forEach((col, index) => {
            if (index === 0) {
              // Slide 1 (Narrative hero) is always 100% visible
              col.style.opacity = "1";
              col.style.transform = "translate3d(0, 0, 0) scale(1)";
              return;
            }

            const colLeft = col.offsetLeft - currentTranslate;
            const revealThreshold = windowWidth * 0.94;

            if (colLeft < revealThreshold) {
              col.style.opacity = "1";
              col.style.transform = "translate3d(0, 0, 0) scale(1)";
            } else {
              col.style.opacity = "0";
              col.style.transform = "translate3d(0, 36px, 0) scale(0.95)";
            }
          });
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      updateMetrics();
      onScroll();
    });

    onScroll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  return (
    <>
      {/* ========================================================
          DESKTOP PINNED HORIZONTAL SECTION (>= 1440px, UNTOUCHED)
          ======================================================== */}
      <div
        ref={containerRef}
        className="portfolio-horizontal-section relative hidden w-screen overflow-visible bg-[#272727] text-[#ffe9d9] desk:block desk:h-[550vh]"
        data-testid="portfolio-horizontal-gallery"
      >
        {/* Sticky Viewport: Locks the screen while scrolling down translates track horizontally */}
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          {/* Top-Left Section Tag */}
          <div className="pointer-events-none absolute left-6 top-6 z-20 hidden sm:block desk:left-14 desk:top-8">
            <p className="eyebrow flex items-center gap-2 text-xs desk:text-sm">
              <span className="text-[#fe7f2d]">✦</span>
              <span>{t("photo.label")}</span>
            </p>
          </div>

          {/* ========================================================
              DESKTOP PINNED HORIZONTAL TRACK (With Intentional Pause & Smooth Glide)
              ======================================================== */}
          <div
            ref={trackRef}
            className="flex h-full items-center gap-32 pl-[8vw] pr-[24vw] will-change-transform desk:gap-40 [backface-visibility:hidden]"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {/* ---- Column 1: Full Photography Narrative Hero (Index 0) ---- */}
            <div
              data-gallery-col
              className="flex h-[86vh] w-[88vw] max-w-[1300px] shrink-0 items-center justify-between gap-16 pr-12"
            >
              {/* Left Narrative Text */}
              <div className="max-w-[700px]">
                <h2
                  id="photography-narrative-title"
                  className="[font-family:'WisnuMan-Regular',Helvetica] text-[48px] font-normal leading-[1.03] tracking-[-0.025em] text-[#ffe9d9] md:text-[64px] desk:text-[84px]"
                >
                  {t("photo.heading.before")}
                  <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
                    {t("photo.heading.accent")}
                  </span>
                  {t("global.period")}
                </h2>

                <div className="mt-8 flex items-stretch gap-5 desk:mt-12">
                  <span
                    aria-hidden="true"
                    className="w-0.5 shrink-0 bg-gradient-to-b from-[#fe7f2d] to-[#fe7f2d]/10"
                  />
                  <div>
                    <p className="max-w-[580px] [font-family:'WisnuMan-Regular',Helvetica] text-[30px] font-normal leading-[1.12] tracking-[-0.015em] text-[#ffe9d9] md:text-[38px] desk:text-[46px]">
                      {t("photo.reflection.before")}
                      <span className="[font-family:'Rafles-Regular',Helvetica] tracking-[0] text-[#fe7f2d]">
                        {t("photo.reflection.accent")}
                      </span>
                      {t("global.period")}
                    </p>
                    <p className="mt-5 max-w-[520px] [font-family:'WisnuMan-Regular',Helvetica] text-[17px] font-normal leading-[1.6] text-[#ffe9d9]/65 desk:text-[21px]">
                      {t("photo.note")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card: Sour holding camera */}
              <figure className="group m-0 w-fit shrink-0 opacity-100">
                <div className="relative w-fit">
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-4 -right-4 h-full w-full border border-[#fe7f2d]/60"
                  />
                  <div className="relative w-fit overflow-hidden rounded-sm bg-[#fe7f2d]/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                    <img
                      className="aspect-[8/9] h-[50vh] w-auto object-cover transition duration-700 group-hover:scale-[1.025]"
                      alt="Sour holding a camera and composing a photograph"
                      src="/img/untitled-67-1.webp"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                <figcaption className="mt-5 flex items-center justify-between gap-3 [font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[3px] text-[#ffe9d9]/60">
                  <span>{t("photo.lens")}</span>
                  <span className="h-px flex-1 bg-[#ffe9d9]/20" aria-hidden="true" />
                  <span>{t("photo.location")}</span>
                </figcaption>
              </figure>
            </div>

            {/* ---- Column 2: Studio Beauty Pair (Staggered Dynamic Spacing) ---- */}
            <div
              data-gallery-col
              className="flex h-[88vh] shrink-0 flex-col justify-between py-2 opacity-0 transition-all duration-700 ease-out"
              style={{ transform: "translate3d(0, 36px, 0) scale(0.95)" }}
            >
              {/* Studio Beauty - Top Left */}
              <div className="group relative w-fit">
                <span className="portfolio-eyebrow">STUDIO BEAUTY · 2025</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/img-1244-1.webp"
                    alt="Beauty campaign portrait"
                    className="aspect-[2/3] h-[36vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Beauty Editorial - Bottom Right Offset */}
              <div className="group relative w-fit pl-20">
                <span className="portfolio-eyebrow">BEAUTY EDITORIAL · 2025</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/img-1245-1.webp"
                    alt="Beauty product portrait"
                    className="aspect-[2/3] h-[34vh] w-auto object-cover grayscale-[15%] contrast-105 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* ---- Column 3: Automotive Centerpiece (Hero Showcase) ---- */}
            <div
              data-gallery-col
              className="flex h-[88vh] shrink-0 flex-col justify-between py-2 opacity-0 transition-all duration-700 ease-out"
              style={{ transform: "translate3d(0, 36px, 0) scale(0.95)" }}
            >
              {/* Serif Callout Quote */}
              <div className="w-[500px] pt-1 desk:w-[560px]">
                <p className="portfolio-serif-quote text-[34px] sm:text-[38px] desk:text-[42px]">
                  {t("photo.reflection.before")}
                  <span className="highlight text-[#fe7f2d]"> {t("photo.reflection.accent")}</span>
                  {t("global.period")} {t("photo.note")}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-0.5 w-16 bg-gradient-to-r from-[#fe7f2d] to-transparent" />
                  <span className="font-mona text-xs tracking-[3px] text-[#fe7f2d] desk:text-sm">
                    CHHUNSOUR · VISUAL ARCHIVE
                  </span>
                </div>
              </div>

              {/* Night Automotive Hero Image */}
              <div className="group relative w-fit">
                <span className="portfolio-eyebrow">NIGHT AUTOMOTIVE · 2026</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-lg border border-[#fe7f2d]/50 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                  <img
                    src="/img/dsc00374-1.webp"
                    alt="Night automotive portrait with orange sports car"
                    className="aspect-[2/3] h-[50vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* ---- Column 4: Sunscreen & Beauty Campaign Pair (Staggered Spacing) ---- */}
            <div
              data-gallery-col
              className="flex h-[88vh] shrink-0 flex-col justify-between py-2 opacity-0 transition-all duration-700 ease-out"
              style={{ transform: "translate3d(0, 36px, 0) scale(0.95)" }}
            >
              {/* Sunscreen Campaign - Top Left */}
              <div className="group relative w-fit">
                <span className="portfolio-eyebrow">SUNSCREEN CAMPAIGN · 2025</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/img-7660-1.webp"
                    alt="Sunscreen campaign portrait"
                    className="aspect-[2/3] h-[35vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Beauty Campaign - Bottom Right Offset */}
              <div className="group relative w-fit pl-20">
                <span className="portfolio-eyebrow">BEAUTY CAMPAIGN · 2025</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/img-8941-1.webp"
                    alt="Beauty campaign photograph"
                    className="aspect-[2/3] h-[35vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* ---- Column 5: Standout Studio Product (Dramatic Tall Centerpiece) ---- */}
            <div
              data-gallery-col
              className="flex h-[88vh] shrink-0 flex-col justify-center opacity-0 transition-all duration-700 ease-out"
              style={{ transform: "translate3d(0, 36px, 0) scale(0.95)" }}
            >
              <div className="group relative w-fit">
                <span className="portfolio-eyebrow flex items-center gap-2">
                  <span>STUDIO PRODUCT · 2025</span>
                  <span className="text-[#ffe9d9]/40">·</span>
                  <span className="text-[#ffe9d9]/60">EDITORIAL FEATURE</span>
                </span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/25 shadow-2xl">
                  <img
                    src="/img/img-8401-1.webp"
                    alt="Studio product portrait"
                    className="aspect-[2/3] h-[76vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* ---- Column 6: Celebration & Campaign Detail (Staggered Spacing) ---- */}
            <div
              data-gallery-col
              className="flex h-[88vh] shrink-0 flex-col justify-between py-2 opacity-0 transition-all duration-700 ease-out"
              style={{ transform: "translate3d(0, 36px, 0) scale(0.95)" }}
            >
              {/* Birthday Celebration - Top Left */}
              <div className="group relative w-fit">
                <span className="portfolio-eyebrow">CELEBRATION · 2026</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/dsc09921-1.webp"
                    alt="Birthday celebration portrait"
                    className="aspect-[2/3] h-[36vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Campaign Detail - Bottom Right Offset */}
              <div className="group relative w-fit pl-20">
                <span className="portfolio-eyebrow">CAMPAIGN DETAIL · 2026</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/dsc09871-1.webp"
                    alt="Campaign detail portrait"
                    className="aspect-[2/3] h-[34vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* ---- Column 7: Event Photography & Closing Quote ---- */}
            <div
              data-gallery-col
              className="flex h-[88vh] shrink-0 flex-col justify-between py-2 opacity-0 transition-all duration-700 ease-out"
              style={{ transform: "translate3d(0, 36px, 0) scale(0.95)" }}
            >
              {/* Event Atmosphere */}
              <div className="group relative w-fit">
                <span className="portfolio-eyebrow">EVENT ATMOSPHERE · 2026</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-lg border border-[#ffe9d9]/25 shadow-2xl">
                  <img
                    src="/img/dsc09995-2-1.webp"
                    alt="Event photography"
                    className="aspect-[2/3] h-[48vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Second Quote Callout */}
              <div className="w-[460px] border-l-2 border-[#fe7f2d]/80 pb-4 pl-6 desk:w-[500px]">
                <p className="font-brier text-[23px] leading-snug text-[#ffe9d9] desk:text-[27px]">
                  Every shot is a balance of light, composition, and authentic human emotion—captured
                  in the right fraction of a second.
                </p>
                <div className="mt-4 flex items-center gap-2 font-mona text-xs tracking-[2.5px] text-[#fe7f2d]">
                  <span>SELECTED WORKS</span>
                  <span className="text-[#ffe9d9]/40">·</span>
                  <span className="text-[#ffe9d9]/60">2024 — 2026</span>
                </div>
              </div>
            </div>

            {/* ---- Column 8: Family Portrait & Studio Elegance (Staggered Spacing) ---- */}
            <div
              data-gallery-col
              className="flex h-[88vh] shrink-0 flex-col justify-between py-2 opacity-0 transition-all duration-700 ease-out"
              style={{ transform: "translate3d(0, 36px, 0) scale(0.95)" }}
            >
              {/* Family Celebration - Top Left */}
              <div className="group relative w-fit">
                <span className="portfolio-eyebrow">FAMILY CELEBRATION · 2026</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/dsc00023-1.webp"
                    alt="Family celebration photograph"
                    className="aspect-[2/3] h-[36vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Studio Elegance - Bottom Right Offset */}
              <div className="group relative w-fit pl-20">
                <span className="portfolio-eyebrow">STUDIO ELEGANCE · 2025</span>
                <div className="portfolio-img-card w-fit overflow-hidden rounded-md border border-[#ffe9d9]/20 shadow-xl">
                  <img
                    src="/img/img-1247-1.webp"
                    alt="Studio beauty portrait"
                    className="aspect-[2/3] h-[34vh] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar & Indicator */}
          <div className="pointer-events-none absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between text-[10px] [font-family:'OTTERO-Regular',Helvetica] tracking-[2.5px] text-[#ffe9d9]/60 desk:bottom-6 desk:left-14 desk:right-14">
            <div className="flex items-center gap-2 uppercase">
              <span className="inline-block h-2 w-2 rounded-full bg-[#fe7f2d] shadow-[0_0_10px_#fe7f2d] animate-pulse" />
              <span>{t("global.keepScrolling")} — {t("photo.selected")}</span>
            </div>
            <div className="hidden h-1 w-36 overflow-hidden rounded-full bg-[#ffe9d9]/15 sm:block">
              <div
                ref={progressBarRef}
                className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#fe7f2d] to-[#ffe9d9] will-change-transform"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE / TABLET EDITORIAL PHOTOGRAPHY EXPERIENCE (<1440px)
          ======================================================== */}
      <section
        aria-labelledby="mobile-photography-title"
        className="relative w-full overflow-hidden px-5 py-16 text-[#ffe9d9] sm:px-10 sm:py-24 md:mx-auto md:max-w-[820px] desk:hidden"
      >
        {/* 1. Header & Narrative */}
        <div className="flex flex-col gap-6">
          <p className="eyebrow">{t("photo.label")}</p>

          <h2
            id="mobile-photography-title"
            className="[font-family:'WisnuMan-Regular',Helvetica] text-[40px] font-normal leading-[1.12] tracking-[-0.02em] text-[#ffe9d9] sm:text-[54px]"
          >
            {t("photo.heading.before")}
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              {t("photo.heading.accent")}
            </span>
            {t("global.period")}
          </h2>

          {/* Authentic Offset Frame: Sour holding camera */}
          <figure className="relative mt-2 w-full max-w-[340px] sm:max-w-[400px]">
            <div
              aria-hidden="true"
              className="absolute left-3 top-3 h-full w-full border-2 border-[#fe7f2d]/60"
            />
            <div className="relative overflow-hidden bg-[#1e1e1e]">
              <img
                src="/img/untitled-67-1.webp"
                alt="Sour holding a camera and composing a photograph"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between [font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[3px] text-[#ffe9d9]/60">
              <span>{t("photo.lens")}</span>
              <span className="h-px flex-1 mx-4 bg-[#ffe9d9]/20" aria-hidden="true" />
              <span>{t("photo.location")}</span>
            </figcaption>
          </figure>

          {/* 2. The Core Philosophy & Reflection */}
          <div className="mt-6 flex items-stretch gap-4 sm:gap-6">
            <span
              aria-hidden="true"
              className="w-0.5 shrink-0 bg-gradient-to-b from-[#fe7f2d] to-[#fe7f2d]/10"
            />
            <div>
              <p className="[font-family:'WisnuMan-Regular',Helvetica] text-[24px] font-normal leading-[1.25] tracking-[-0.015em] text-[#ffe9d9] sm:text-[32px]">
                {t("photo.reflection.before")}
                <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
                  {t("photo.reflection.accent")}
                </span>
                {t("global.period")}
              </p>
              <p className="mt-4 [font-family:'WisnuMan-Regular',Helvetica] text-[17px] font-normal leading-[1.65] text-[#ffe9d9]/70 sm:text-[20px]">
                {t("photo.note")}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Exhibition Gallery Header */}
        <div className="mt-16 flex items-center justify-between border-b border-[#ffe9d9]/15 pb-3">
          <p className="[font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[3px] text-[#fe7f2d]">
            {t("photo.selected")}
          </p>
          <span className="[font-family:'OTTERO-Regular',Helvetica] text-[11px] tracking-[2px] text-[#ffe9d9]/50">
            {t("photo.swipe")}
          </span>
        </div>

        {/* 4. Tactile Horizontal Gallery Showcase */}
        <div className="relative mt-6 -mx-5 px-5 sm:-mx-10 sm:px-10">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 scrollbar-none [touch-action:pan-x]">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={`photo-card-${idx}`}
                className="group relative w-[270px] xs:w-[290px] sm:w-[320px] shrink-0 snap-start"
              >
                {/* Meta Header */}
                <div className="mb-2.5 flex items-center justify-between [font-family:'OTTERO-Regular',Helvetica] text-[10px] tracking-[2px]">
                  <span className="text-[#fe7f2d] truncate max-w-[190px]">
                    {photo.series} // {photo.category}
                  </span>
                  <span className="text-[#ffe9d9]/40">{photo.year}</span>
                </div>

                {/* Image Surface */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#1a1a1a] shadow-lg border border-[#ffe9d9]/15 transition-transform duration-500 group-hover:border-[#fe7f2d]/50">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Editorial Statement Callout */}
        <div className="mt-14 max-w-[620px] border-l-2 border-[#fe7f2d]/70 pl-5 sm:pl-7">
          <p className="font-brier text-[20px] font-normal leading-snug text-[#ffe9d9] sm:text-[24px]">
            "Every shot is a balance of light, composition, and authentic human emotion—captured
            in the right fraction of a second."
          </p>
          <div className="mt-4 flex items-center gap-3 [font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[3px] text-[#fe7f2d]">
            <span className="h-0.5 w-8 bg-gradient-to-r from-[#fe7f2d] to-transparent" />
            <span>CHHUNSOUR · VISUAL ARCHIVE</span>
          </div>
        </div>
      </section>
    </>
  );
};
