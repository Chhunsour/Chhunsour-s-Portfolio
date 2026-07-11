import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Fragment, useEffect, useRef } from "react";
import { BuildAmbitionSection } from "./sections/BuildAmbitionSection";
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
  { id: "build-ambition", Component: BuildAmbitionSection },
  { id: "full-production", Component: FullProductionSection },
  { id: "development-era", Component: DevelopmentEraSection },
  { id: "development-journey", Component: DevelopmentJourneySection },
  { id: "projects", Component: ProjectsSection },
  { id: "process", Component: ProcessSection },
  { id: "contact", Component: ContactSection },
];

const tickerItems = [
  "UX/UI DESIGNER",
  "GRAPHIC DESIGNER",
  "SOFTWARE DEVELOPER",
  "PHOTOGRAPHER",
];

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

export const Frame = (): JSX.Element => {
  const topoRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true });
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const canvas = topoRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const CELL = 10;
    const LEVELS = 7;
    const RANGE = 2.2; // fixed field range keeps line density calm
    const TAU = Math.PI * 2;

    const resize = () => {
      // render at device resolution so lines are crisp on Retina
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
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
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.px = e.clientX;
      mouse.py = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const draw = (t: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cols = Math.ceil(w / CELL);
      const rows = Math.ceil(h / CELL);

      const vals = new Float32Array((cols + 1) * (rows + 1));
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * CELL + offX;
          const y = r * CELL + offY;
          let v = 0;
          for (const [nx, ny, amp, ph, sp] of TOPO_TERMS) {
            v += amp * Math.sin(TAU * ((nx * x) / 1600 + (ny * y) / 1200) + ph + sp * 2.5 * t);
          }
          // gentle rise under the cursor so contours bend toward it
          const dx = c * CELL - mouse.px;
          const dy = r * CELL - mouse.py;
          v += 0.25 * Math.exp(-(dx * dx + dy * dy) / 245000);
          vals[r * (cols + 1) + c] = v;
        }
      }

      ctx.clearRect(0, 0, w, h);
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
            const x0 = c * CELL;
            const y0 = r * CELL;
            // interpolated crossing points on each cell edge
            const top: [number, number] = [x0 + (CELL * (level - tl)) / (tr - tl), y0];
            const right: [number, number] = [x0 + CELL, y0 + (CELL * (level - tr)) / (br - tr)];
            const bottom: [number, number] = [x0 + (CELL * (level - bl)) / (br - bl), y0 + CELL];
            const left: [number, number] = [x0, y0 + (CELL * (level - tl)) / (bl - tl)];
            const SEGS: Record<number, [number, number][][]> = {
              1: [[left, bottom]], 2: [[bottom, right]], 3: [[left, right]],
              4: [[top, right]], 5: [[left, top], [bottom, right]], 6: [[top, bottom]],
              7: [[left, top]], 8: [[top, left]], 9: [[top, bottom]],
              10: [[top, right], [bottom, left]], 11: [[top, right]],
              12: [[right, left]], 13: [[right, bottom]], 14: [[bottom, left]],
            };
            for (const [a, b] of SEGS[idx]) {
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
      if (now - last < 33) return; // ~30fps is plenty for a background
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
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 desk:px-12 desk:py-6">
        <a
          href="#portfolio-hero"
          aria-label="Back to top"
          className="relative block h-[38px] w-[51px] transition-transform duration-300 hover:scale-110"
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
        <a
          href="mailto:sengchhunsour@gmail.com"
          className="bg-[#fe7f2d] px-5 py-3 sm:px-7 [font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[3px] text-[#272727] transition-all duration-300 hover:scale-105 hover:bg-[#ffe9d9] active:scale-95"
        >
          LET&apos;S TALK
        </a>
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
          <section id={id} className="relative z-[1] mx-auto w-full desk:w-[1440px]">
            <Component />
          </section>
          {index === 0 && (
            <div className="ticker" aria-hidden="true">
              <div className="ticker-track">
                {[0, 1].map((group) => (
                  <div className="ticker-group" key={`ticker-group-${group}`}>
                    {tickerItems.map((item) => (
                      <span key={`${group}-${item}`} className="ticker-item">
                        <span className="ticker-label">{item}</span>
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
