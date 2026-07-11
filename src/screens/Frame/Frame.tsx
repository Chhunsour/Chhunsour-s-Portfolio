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

// Edge indexes: 0 top, 1 right, 2 bottom, 3 left. Keeping this lookup
// outside the render loop avoids rebuilding it for every contour cell.
const MARCHING_SEGMENTS: Record<number, [number, number][]> = {
  1: [[3, 2]],
  2: [[2, 1]],
  3: [[3, 1]],
  4: [[0, 1]],
  5: [[3, 0], [2, 1]],
  6: [[0, 2]],
  7: [[3, 0]],
  8: [[0, 3]],
  9: [[0, 2]],
  10: [[0, 1], [2, 3]],
  11: [[0, 1]],
  12: [[1, 3]],
  13: [[1, 2]],
  14: [[2, 3]],
};

export const Frame = (): JSX.Element => {
  const topoRef = useRef<HTMLCanvasElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Native touch scrolling is already smooth and cheaper on mobile.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      lerp: 0.085,
      wheelMultiplier: 0.85,
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
      // render at device resolution so lines are crisp on Retina
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      viewWidth = window.innerWidth;
      viewHeight = window.innerHeight;
      cell = viewWidth < 768 ? 18 : 16;
      cols = Math.ceil(viewWidth / cell);
      rows = Math.ceil(viewHeight / cell);
      vals = new Float32Array((cols + 1) * (rows + 1));
      canvas.width = viewWidth * dpr;
      canvas.height = viewHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
            v += amp * Math.sin(TAU * ((nx * x) / 1600 + (ny * y) / 1200) + ph + sp * 2.5 * t);
          }
          // gentle rise under the cursor so contours bend toward it
          const dx = c * cell - mouse.px;
          const dy = r * cell - mouse.py;
          v += 0.25 * Math.exp(-(dx * dx + dy * dy) / 245000);
          vals[r * (cols + 1) + c] = v;
        }
      }

      ctx.clearRect(0, 0, viewWidth, viewHeight);
      for (let l = 0; l < LEVELS; l++) {
        const level = -RANGE + ((l + 0.5) / LEVELS) * RANGE * 2;
        const major = l % 4 === 0;
        ctx.strokeStyle = major
          ? "rgba(255, 233, 217, 0.1)"
          : "rgba(255, 233, 217, 0.05)";
        ctx.lineWidth = major ? 1.25 : 0.75;
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
            // interpolated crossing points on each cell edge
            const points: [number, number][] = [
              [x0 + (cell * (level - tl)) / (tr - tl), y0],
              [x0 + cell, y0 + (cell * (level - tr)) / (br - tr)],
              [x0 + (cell * (level - bl)) / (br - bl), y0 + cell],
              [x0, y0 + (cell * (level - tl)) / (bl - tl)],
            ];
            for (const [aIndex, bIndex] of MARCHING_SEGMENTS[idx]) {
              const a = points[aIndex];
              const b = points[bIndex];
              ctx.moveTo(a[0], a[1]);
              ctx.lineTo(b[0], b[1]);
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
      if (now - last < 42) return; // ~24fps keeps the background light
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      // ease the drift direction toward the cursor
      lean.x += (mouse.x - lean.x) * 0.03;
      lean.y += (mouse.y - lean.y) * 0.03;
      offX += dt * (14 + lean.x * 45);
      offY += dt * (6 + lean.y * 35);
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
    const all = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main :is(h1, h2, p, figure, a, li, img)",
      ),
    );
    // only reveal outermost elements, not e.g. an img inside a figure
    const els = all.filter(
      (el) => !all.some((other) => other !== el && other.contains(el)),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    const perSection = new Map<Element, number>();
    for (const el of els) {
      const section = el.closest("section") ?? document.body;
      const index = perSection.get(section) ?? 0;
      perSection.set(section, index + 1);
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 90}ms`);
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-[#272727] from-45% via-[#272727]/75 to-transparent px-5 pb-6 pt-4 sm:px-8 desk:bg-none desk:px-12 desk:py-6">
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
