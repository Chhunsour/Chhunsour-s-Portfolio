import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Fragment, useEffect, useRef } from "react";
import { LanguageSwitcher, useI18n } from "../../i18n";
import { ContactSection } from "./sections/ContactSection";
import { DevelopmentEraSection } from "./sections/DevelopmentEraSection";
import { DevelopmentJourneySection } from "./sections/DevelopmentJourneySection";
import { ProcessSection } from "./sections/ProcessSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { DeveloperOriginSection } from "./sections/DeveloperOriginSection";
import { FullProductionSection } from "./sections/FullProductionSection";
import { PhotographyPerspectiveSection } from "./sections/PhotographyPerspectiveSection";
import { PhotographyReflectionSection } from "./sections/PhotographyReflectionSection";
import { PortfolioHeroSection } from "./sections/PortfolioHeroSection";
import { VisualCommunicationSection } from "./sections/VisualCommunicationSection";

const sections = [
  { id: "portfolio-hero", Component: PortfolioHeroSection },
  { id: "developer-origin", Component: DeveloperOriginSection },
  { id: "visual-communication", Component: VisualCommunicationSection },
  { id: "photography-perspective", Component: PhotographyPerspectiveSection },
  { id: "photography-reflection", Component: PhotographyReflectionSection },
  { id: "full-production", Component: FullProductionSection },
  { id: "development-era", Component: DevelopmentEraSection },
  { id: "development-journey", Component: DevelopmentJourneySection },
  { id: "projects", Component: ProjectsSection },
  { id: "process", Component: ProcessSection },
  { id: "contact", Component: ContactSection },
];

const tickerItemKeys = ["role.ux", "role.graphic", "role.software", "role.photo"];

// sum-of-waves terrain field; each term's phase moves at its own speed,
// so contour cells continuously merge and split
const TOPO_TERMS = [
  [1, 0, 0.9, 0.0, 0.11],
  [0, 1, 0.8, 1.7, -0.09],
  [1, 1, 0.6, 3.1, 0.13],
  [2, -1, 0.45, 4.2, -0.07],
  [-1, 2, 0.4, 0.8, 0.1],
  [2, 1, 0.38, 2.4, -0.12],
  [3, 2, 0.25, 5.0, 0.08],
  [1, -2, 0.42, 1.2, 0.06],
  [-2, -3, 0.2, 2.9, -0.05],
  [3, -1, 0.22, 4.7, 0.09],
  [0, 3, 0.28, 0.4, -0.08],
  [2, 3, 0.18, 3.8, 0.07],
];

// Marching-squares edge pairs per case, flattened (4 slots each, -1 = end).
// Edge indexes: 0 top, 1 right, 2 bottom, 3 left. Flat + inline point math
// keeps the hot draw loop completely allocation-free.
const EDGE_PAIRS = new Int8Array([
  -1, -1, -1, -1,
  3, 2, -1, -1,
  2, 1, -1, -1,
  3, 1, -1, -1,
  0, 1, -1, -1,
  3, 0, 2, 1,
  0, 2, -1, -1,
  3, 0, -1, -1,
  0, 3, -1, -1,
  0, 2, -1, -1,
  0, 1, 2, 3,
  0, 1, -1, -1,
  1, 3, -1, -1,
  1, 2, -1, -1,
  2, 3, -1, -1,
  -1, -1, -1, -1,
]);

// depth-graded contour styles, one papaya signature line in the middle
const LEVEL_STYLES = [
  { color: "rgba(255, 233, 217, 0.10)", width: 1.25 },
  { color: "rgba(255, 233, 217, 0.05)", width: 0.75 },
  { color: "rgba(255, 233, 217, 0.06)", width: 0.9 },
  { color: "rgba(254, 127, 45, 0.12)", width: 1.1 },
  { color: "rgba(255, 233, 217, 0.05)", width: 0.75 },
  { color: "rgba(255, 233, 217, 0.08)", width: 1.0 },
];

export const Frame = (): JSX.Element => {
  const topoRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Native touch scrolling is already smooth and cheaper on mobile.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      lerp: 0.065,
      wheelMultiplier: 0.72,
    });
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const canvas = topoRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let cell = window.innerWidth < 768 ? 18 : 16;
    const LEVELS = 6;
    const RANGE = 2.2; // fixed field range keeps line density calm
    const TAU = Math.PI * 2;
    let viewWidth = window.innerWidth;
    let viewHeight = window.innerHeight;
    let cols = Math.ceil(viewWidth / cell);
    let rows = Math.ceil(viewHeight / cell);
    let vals = new Float32Array((cols + 1) * (rows + 1));

    const resize = () => {
      // 1.5x is visually identical for hairlines at half the pixel cost
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      viewWidth = window.innerWidth;
      viewHeight = window.innerHeight;
      cell = viewWidth < 768 ? 18 : 16;
      cols = Math.ceil(viewWidth / cell);
      rows = Math.ceil(viewHeight / cell);
      vals = new Float32Array((cols + 1) * (rows + 1));
      canvas.width = viewWidth * dpr;
      canvas.height = viewHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
    };
    resize();
    window.addEventListener("resize", resize);

    // mouse influence: drift leans toward the cursor, terrain rises under it
    const mouse = { x: 0, y: 0, px: -9999, py: -9999 };
    const lean = { x: 0, y: 0 };
    let offX = 0;
    let offY = 0;
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / viewWidth) * 2 - 1;
      mouse.y = (e.clientY / viewHeight) * 2 - 1;
      mouse.px = e.clientX;
      mouse.py = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const draw = (t: number) => {
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * cell + offX;
          const y = r * cell + offY;
          let v = 0;
          for (const [nx, ny, amp, ph, sp] of TOPO_TERMS) {
            v += amp * Math.sin(TAU * ((nx * x) / 1600 + (ny * y) / 1200) + ph + sp * 1.8 * t);
          }
          // gentle rise under the cursor so contours bend toward it
          const dx = c * cell - mouse.px;
          const dy = r * cell - mouse.py;
          v += 0.22 * Math.exp(-(dx * dx + dy * dy) / 245000);
          vals[r * (cols + 1) + c] = v;
        }
      }

      ctx.clearRect(0, 0, viewWidth, viewHeight);
      for (let l = 0; l < LEVELS; l++) {
        const level = -RANGE + ((l + 0.5) / LEVELS) * RANGE * 2;
        const style = LEVEL_STYLES[l % LEVEL_STYLES.length];
        ctx.strokeStyle = style.color;
        ctx.lineWidth = style.width;
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const tl = vals[r * (cols + 1) + c];
            const tr = vals[r * (cols + 1) + c + 1];
            const bl = vals[(r + 1) * (cols + 1) + c];
            const br = vals[(r + 1) * (cols + 1) + c + 1];
            let idx = 0;
            if (tl > level) idx |= 8;
            if (tr > level) idx |= 4;
            if (br > level) idx |= 2;
            if (bl > level) idx |= 1;
            if (idx === 0 || idx === 15) continue;
            const x0 = c * cell;
            const y0 = r * cell;
            const base = idx << 2;
            for (let k = 0; k < 4; k += 2) {
              const e1 = EDGE_PAIRS[base + k];
              if (e1 < 0) break;
              const e2 = EDGE_PAIRS[base + k + 1];
              let ax: number;
              let ay: number;
              if (e1 === 0) {
                ax = x0 + (cell * (level - tl)) / (tr - tl);
                ay = y0;
              } else if (e1 === 1) {
                ax = x0 + cell;
                ay = y0 + (cell * (level - tr)) / (br - tr);
              } else if (e1 === 2) {
                ax = x0 + (cell * (level - bl)) / (br - bl);
                ay = y0 + cell;
              } else {
                ax = x0;
                ay = y0 + (cell * (level - tl)) / (bl - tl);
              }
              let bx: number;
              let by: number;
              if (e2 === 0) {
                bx = x0 + (cell * (level - tl)) / (tr - tl);
                by = y0;
              } else if (e2 === 1) {
                bx = x0 + cell;
                by = y0 + (cell * (level - tr)) / (br - tr);
              } else if (e2 === 2) {
                bx = x0 + (cell * (level - bl)) / (br - bl);
                by = y0 + cell;
              } else {
                bx = x0;
                by = y0 + (cell * (level - tl)) / (bl - tl);
              }
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
            }
          }
        }
        ctx.stroke();
      }
    };

    let raf = 0;
    let last = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return; // ~30fps, cheap now that the loop is allocation-free
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      // ease the drift direction toward the cursor
      lean.x += (mouse.x - lean.x) * 0.045;
      lean.y += (mouse.y - lean.y) * 0.045;
      offX += dt * (10 + lean.x * 36);
      offY += dt * (5 + lean.y * 26);
      draw(now / 1000);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const all = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main :is(h1, h2, h3, p, figure, a, li, img)",
      ),
    ).filter((el) => !el.closest(".photography-story"));

    // Reveal the meaningful outer block once; nested media inherits the motion.
    const els = all.filter((el) => {
      if (el.closest("[aria-hidden='true']")) return false;
      if (el.matches("h1, h2, h3")) return true;
      return !all.some(
        (other) =>
          other !== el &&
          other.contains(el) &&
          !other.closest("[aria-hidden='true']"),
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              const target = entry.target as HTMLElement;
              target.classList.add("is-visible");
              target.addEventListener(
                "transitionend",
                () => target.classList.add("reveal-complete"),
                { once: true },
              );
            });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    const perSection = new Map<Element, number>();
    const mediaPerSection = new Map<Element, number>();
    const maskedHeadings: HTMLElement[] = [];

    const measureHeadingRows = (heading: HTMLElement) => {
      heading.querySelector("[data-heading-mask]")?.remove();

      const range = document.createRange();
      range.selectNodeContents(heading);
      const headingRect = heading.getBoundingClientRect();
      const fragments = Array.from(range.getClientRects())
        .filter((rect) => rect.width > 2 && rect.height > 2)
        .sort((a, b) => a.top - b.top || a.left - b.left);

      const rows: Array<{
        top: number;
        bottom: number;
        left: number;
        right: number;
      }> = [];

      for (const rect of fragments) {
        const row = rows.find(
          (candidate) =>
            Math.abs(candidate.top - rect.top) < Math.max(3, rect.height * 0.18),
        );
        if (row) {
          row.top = Math.min(row.top, rect.top);
          row.bottom = Math.max(row.bottom, rect.bottom);
          row.left = Math.min(row.left, rect.left);
          row.right = Math.max(row.right, rect.right);
        } else {
          rows.push({
            top: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            right: rect.right,
          });
        }
      }

      if (!rows.length) return;
      const layer = document.createElement("span");
      layer.dataset.headingMask = "true";
      layer.className = "heading-mask-layer";
      layer.setAttribute("aria-hidden", "true");

      rows.forEach((row, index) => {
        const padX = Math.max(2, (row.bottom - row.top) * 0.035);
        const padY = Math.max(1, (row.bottom - row.top) * 0.045);
        const mask = document.createElement("span");
        mask.className = "heading-mask-row";
        mask.style.left = `${row.left - headingRect.left - padX}px`;
        mask.style.top = `${row.top - headingRect.top - padY}px`;
        mask.style.width = `${row.right - row.left + padX * 2}px`;
        mask.style.height = `${row.bottom - row.top + padY * 2}px`;
        mask.style.setProperty("--line-delay", `${index * 78}ms`);
        if (heading.classList.contains("is-visible")) {
          mask.style.transform = "scaleX(0)";
        }
        layer.append(mask);
      });

      heading.append(layer);
    };

    for (const el of els) {
      const section = el.closest("section") ?? document.body;
      const index = perSection.get(section) ?? 0;
      perSection.set(section, index + 1);

      el.classList.add("reveal");
      if (el.matches("h1, h2, h3")) {
        el.classList.add("reveal-heading", "reveal-lines");
        maskedHeadings.push(el);
        measureHeadingRows(el);
      } else if (el.matches("figure, img")) {
        const mediaIndex = mediaPerSection.get(section) ?? 0;
        mediaPerSection.set(section, mediaIndex + 1);
        el.classList.add(
          "reveal-media",
          mediaIndex % 2 === 0 ? "reveal-left" : "reveal-right",
        );
      } else if (el.matches("a, li")) {
        el.classList.add("reveal-detail");
      } else {
        el.classList.add("reveal-copy");
      }

      el.style.setProperty(
        "--reveal-delay",
        `${Math.min(index, 6) * 110}ms`,
      );

      if (reducedMotion || el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.classList.add("is-visible", "reveal-complete");
      } else {
        observer.observe(el);
      }
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        measureHeadingRows(entry.target as HTMLElement);
      }
    });
    maskedHeadings.forEach((heading) => resizeObserver.observe(heading));

    document.fonts?.ready.then(() => {
      maskedHeadings.forEach(measureHeadingRows);
    });

    let localeTimer = 0;
    const localeObserver = new MutationObserver(() => {
      window.clearTimeout(localeTimer);
      localeTimer = window.setTimeout(() => {
        maskedHeadings.forEach(measureHeadingRows);
      }, 120);
    });
    localeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-locale"],
    });

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      localeObserver.disconnect();
      window.clearTimeout(localeTimer);
      maskedHeadings.forEach((heading) => {
        heading.querySelector("[data-heading-mask]")?.remove();
      });
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px bg-[#ffe9d9]/15"
      >
        <div
          ref={progressRef}
          className="h-full origin-left scale-x-0 bg-[#fe7f2d] shadow-[0_0_12px_rgba(254,127,45,0.7)] will-change-transform"
        />
      </div>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-transparent px-5 pb-6 pt-4 sm:px-8 desk:px-12 desk:py-6">
        <a
          href="#portfolio-hero"
          aria-label="Back to top"
          className="pointer-events-auto relative block h-[38px] w-[51px] transition-transform duration-300 hover:scale-110"
        >
          <img
            className="absolute left-[13px] top-0 h-[38px] w-[37px]"
            alt=""
            aria-hidden="true"
            src="/img/vector-638.svg"
          />
          <img
            className="absolute left-0 top-px h-[38px] w-[34px]"
            alt=""
            aria-hidden="true"
            src="/img/vector-637.svg"
          />
        </a>
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href="mailto:sengchhunsour@gmail.com"
            className="hidden bg-[#fe7f2d] px-5 py-3 text-sm tracking-[3px] text-[#272727] transition-all duration-300 hover:scale-105 hover:bg-[#ffe9d9] active:scale-95 sm:block [font-family:'OTTERO-Regular',Helvetica]"
          >
            {t("global.talk")}
          </a>
        </div>
      </header>
      <main
        className="relative bg-[#272727] w-full flex flex-col"
        data-model-id="503:81"
      >
      <div aria-hidden="true" className="livery">
        <canvas ref={topoRef} className="livery-topo" />
        <div className="livery-glow-blue" />
        <div className="livery-glow" />
        <div className="livery-noise" />
      </div>
      {sections.map(({ id, Component }, index) => (
        <Fragment key={id}>
          <section
            id={id}
            className={`relative z-[1] mx-auto w-full ${
              id === "photography-reflection" ? "desk:w-full" : "desk:w-[1440px]"
            }`}
          >
            <Component />
          </section>
          {index === 0 && (
            <div className="ticker" aria-hidden="true">
              <div className="ticker-track">
                {[0, 1].map((group) => (
                  <div className="ticker-group" key={`ticker-group-${group}`}>
                    {tickerItemKeys.map((itemKey) => (
                      <span key={`${group}-${itemKey}`} className="ticker-item">
                        <span className="ticker-label">{t(itemKey)}</span>
                        <span className="ticker-star">✦</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </main>
    </>
  );
};
