import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../../../i18n";

const slides = [
  {
    titleKey: "",
    noteKey: "",
    detail: "",
    file: "",
    code: [] as string[],
  },
  {
    titleKey: "journey.frontend",
    noteKey: "journey.frontendNote",
    detail: "STRUCTURE · STYLE · INTERACTION",
    file: "index.html",
    code: [
      '<section class="hero">',
      "  <h1>Ideas, shipped.</h1>",
      "  <button>Explore</button>",
      "</section>",
      "",
      "// my designs, finally alive in the browser",
    ],
  },
  {
    titleKey: "journey.responsive",
    noteKey: "journey.responsiveNote",
    detail: "DESKTOP · TABLET · MOBILE",
    file: "styles.css",
    code: [
      ".grid { display: grid; gap: 24px; }",
      "",
      "@media (max-width: 768px) {",
      "  .grid { grid-template-columns: 1fr; }",
      "}",
      "",
      "// one design, every screen",
    ],
  },
  {
    titleKey: "journey.apps",
    noteKey: "journey.appsNote",
    detail: "STATE · MOTION · REAL-TIME UI",
    file: "app.tsx",
    code: [
      "const [cart, setCart] = useState([]);",
      "",
      "<button onClick={() => add(item)}>",
      "  Add to cart",
      "</button>",
      "",
      "// interfaces that remember",
    ],
  },
  {
    titleKey: "journey.backend",
    noteKey: "journey.backendNote",
    detail: "SERVERS · DATA · LOGIC",
    file: "terminal",
    code: [
      "$ node server.js",
      "→ connected to database",
      "",
      "SELECT * FROM orders WHERE status = 'paid';",
      "✓ 42 rows in 12ms",
    ],
  },
  {
    titleKey: "journey.auth",
    noteKey: "journey.authNote",
    detail: "ACCOUNTS · SECURITY · INTEGRATIONS",
    file: "api",
    code: [
      "POST /api/auth/login",
      "✓ 200 OK — session issued",
      "",
      "GET /api/orders → 200",
      "GET /api/reports/monthly → 200",
    ],
  },
  {
    titleKey: "journey.fullstack",
    noteKey: "journey.fullstackNote",
    detail: "END TO END",
    file: "production",
    code: [
      "$ git push production main",
      "→ building…",
      "",
      "✓ build complete",
      "✓ live at konstructz.com",
    ],
  },
];

const lineColor = (line: string): string => {
  if (line.trimStart().startsWith("//") || line.startsWith("✓"))
    return "text-[#fe7f2d]";
  if (line.startsWith("$")) return "text-[#ffe9d9]";
  return "text-[#ffe9d9]/70";
};

export const DevelopmentJourneySection = (): JSX.Element => {
  const { t } = useI18n();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrapRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, -el.getBoundingClientRect().top / total),
      );
      el.style.setProperty("--journey-progress", String(progress));
      setActive(
        Math.min(slides.length - 1, Math.floor(progress * slides.length)),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section aria-label="Development journey" className="relative w-full desk:w-[1440px]">
      {/* tall track: scrolling through it drives the pinned showcase */}
      <div ref={wrapRef} className="relative h-[400vh] desk:h-[600vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <p className="eyebrow absolute left-5 top-[92px] sm:left-10 md:left-12 desk:left-[110px] desk:top-16">
            {t("journey.label")}
          </p>

          {/* progress rail */}
          <div className="absolute left-6 top-1/2 hidden h-[300px] w-[2px] -translate-y-1/2 bg-[#ffe9d9]/15 md:block desk:left-[62px]">
            <div
              className="w-full bg-[#fe7f2d] transition-[height] duration-200 ease-linear"
              style={{ height: "calc(var(--journey-progress, 0) * 100%)" }}
            />
          </div>

          {slides.map((slide, index) => (
            <div
              key={index}
              aria-hidden={index !== active}
              className={`pointer-events-none absolute inset-x-5 sm:inset-x-10 md:inset-x-12 desk:inset-x-[110px] transition-all duration-500 ease-out ${
                index === active
                  ? "translate-y-0 opacity-100"
                  : index < active
                    ? "-translate-y-12 opacity-0"
                    : "translate-y-12 opacity-0"
              }`}
            >
              {index === 0 ? (
                <h2 className="w-full max-w-[860px] [font-family:'WisnuMan-Regular',Helvetica] text-[40px] font-normal leading-[1.1] tracking-[0] sm:text-[54px] desk:text-[72px]">
                  <span className="text-[#ffe9d9]">
                    {t("journey.intro.before")}
                  </span>
                  <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
                    {t("journey.intro.accent")}
                  </span>
                  <span className="text-[#ffe9d9]">{t("journey.intro.after")}</span>
                </h2>
              ) : (
                <div className="flex flex-col gap-8 desk:flex-row desk:items-center desk:justify-between desk:gap-16">
                  <div className="w-full desk:w-[560px] desk:shrink-0">
                    <h3 className="[font-family:'WisnuMan-Regular',Helvetica] text-[32px] font-normal leading-[1.1] tracking-[0] text-[#ffe9d9] sm:text-[42px] desk:text-[58px]">
                      {t(slide.titleKey)}
                    </h3>
                    <p className="mt-4 [font-family:'WisnuMan-Regular',Helvetica] text-[18px] font-normal leading-[1.5] tracking-[0] text-[#ffe9d9]/80 sm:text-[20px] desk:mt-8 desk:text-[25px]">
                      {t(slide.noteKey)}
                    </p>
                    <p className="mt-5 [font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[4px] text-[#fe7f2d]/70 sm:text-sm desk:mt-10 desk:tracking-[5px]">
                      {slide.detail}
                    </p>
                  </div>
                  <div className="w-full max-w-[520px] shrink-0 overflow-hidden rounded-lg border border-[#ffe9d9]/15 bg-[#1e1e1e] shadow-[0_30px_80px_rgba(0,0,0,0.45)] desk:w-[520px]">
                    <div className="flex items-center gap-2 border-b border-[#ffe9d9]/10 px-5 py-3">
                      <span className="h-3 w-3 rounded-full bg-[#fe7f2d]" />
                      <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
                      <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
                      <span className="ml-4 font-mono text-[13px] text-[#ffe9d9]/50">
                        {slide.file}
                      </span>
                    </div>
                    <pre className="m-0 overflow-x-auto px-4 py-4 font-mono text-[12px] leading-[1.8] desk:px-6 desk:py-5 desk:text-[14px]">
                      {slide.code.map((line, lineIndex) => (
                        <div key={lineIndex} className={lineColor(line)}>
                          {line || " "}
                        </div>
                      ))}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* closing line appears with the last step */}
          <p
            className={`absolute bottom-24 left-12 right-12 hidden md:block [font-family:'WisnuMan-Regular',Helvetica] text-[24px] leading-[1.4] transition-opacity duration-700 desk:left-[110px] desk:right-auto desk:w-[760px] desk:text-[30px] ${
              active === slides.length - 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-[#ffe9d9]">
              {t("journey.closing.before")}
            </span>
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              {t("journey.closing.accent")}
            </span>
          </p>

          <p
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 [font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[4px] text-[#ffe9d9]/40 transition-opacity duration-500 ${
              active === slides.length - 1 ? "opacity-0" : "opacity-100"
            }`}
          >
            {t("global.keepScrolling")}
          </p>
        </div>
      </div>
    </section>
  );
};
