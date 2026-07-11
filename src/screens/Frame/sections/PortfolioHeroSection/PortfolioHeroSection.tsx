import { useI18n } from "../../../../i18n";

const outlinedPortfolioRows = [
  { top: "top-[336px]", left: "left-[495px]", drift: "drift-a" },
  { top: "top-[475px]", left: "left-[495px]", drift: "drift-b" },
  { top: "top-[606px]", left: "left-[495px]", drift: "drift-a" },
];

const roles = [
  "role.ux",
  "role.graphic",
  "role.software",
  "role.photo",
];

const RoleLine = ({ className }: { className: string }): JSX.Element => {
  const { t } = useI18n();
  return (
    <ul className={`m-0 flex list-none flex-wrap items-center p-0 ${className}`}>
    {roles.map((roleKey, index) => (
      <li key={roleKey} className="flex items-center">
        {index > 0 && (
          <span aria-hidden="true" className="mx-4 text-sm text-[#fe7f2d] sm:mx-6">
            ✦
          </span>
        )}
        <span className="[font-family:'OTTERO-Regular',Helvetica] text-sm font-normal tracking-[2px] text-[#ffe9d9] sm:text-base desk:text-lg">
          {t(roleKey)}
        </span>
      </li>
    ))}
    </ul>
  );
};

const ScrollCue = ({ className }: { className: string }): JSX.Element => {
  const { t } = useI18n();
  return (
  <div
    aria-hidden="true"
    className={`flex flex-col items-center gap-3 ${className}`}
  >
    <span className="[font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[4px] text-[#ffe9d9]/40">
      {t("global.scroll")}
    </span>
    <span className="scroll-cue-line" />
    </div>
  );
};

export const PortfolioHeroSection = (): JSX.Element => {
  return (
    <section
      aria-label="Portfolio hero section"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet (below 1440px) ---- */}
      <div className="flex min-h-[100svh] flex-col justify-center gap-8 px-5 pb-14 pt-24 sm:px-10 md:gap-10 desk:hidden">
        <div>
          <p className="eyebrow mb-6">CHHUNSOUR · 2026</p>
          <h1 className="latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13vw] font-normal leading-[1.05] text-[#fe7f2d]">
            PORTFOLIO
          </h1>
          {[0, 1].map((row) => (
            <div
              key={row}
              aria-hidden="true"
              className={`${row === 0 ? "drift-a" : "drift-b"} latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13vw] font-normal leading-[1.05] text-transparent opacity-60 [-webkit-text-stroke:1.5px_#ffe9d9]`}
            >
              PORTFOLIO
            </div>
          ))}
        </div>
        <div className="relative w-full max-w-[420px] self-center md:max-w-[480px]">
          <div
            aria-hidden="true"
            className="absolute left-3 top-3 h-full w-full border-2 border-[#fe7f2d]/60"
          />
          <img
            className="relative aspect-[0.89] w-full object-cover"
            alt="Portfolio portrait"
            src="/img/untitled-6-1.webp"
          />
        </div>
        <RoleLine className="justify-center" />
        <ScrollCue className="self-center" />
      </div>

      {/* ---- desktop (1440px canvas) ---- */}
      <div className="hidden desk:block">
        <header className="contents">
          <p className="eyebrow absolute left-[398px] top-[148px]">
            CHHUNSOUR · 2026
          </p>
          <h1 className="absolute left-[392px] top-[193px] latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[180px] font-normal leading-[normal] tracking-[0] text-[#fe7f2d]">
            PORTFOLIO
          </h1>
          {outlinedPortfolioRows.map((row, index) => (
            <div
              key={`${row.top}-${index}`}
              aria-hidden="true"
              className={`absolute ${row.left} ${row.top} ${row.drift} w-[887px] latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[180px] font-normal leading-[normal] tracking-[0] text-transparent opacity-60 [-webkit-text-stroke:2px_#ffe9d9]`}
            >
              PORTFOLIO
            </div>
          ))}
        </header>
        <div className="absolute left-[57px] top-[274px] h-[488px] w-[434px]">
          <div
            aria-hidden="true"
            className="absolute left-3.5 top-3.5 h-full w-full border-2 border-[#fe7f2d]/60"
          />
          <img
            className="relative aspect-[0.89] h-[488px] w-[434px] object-cover"
            alt="Portfolio portrait"
            src="/img/untitled-6-1.webp"
          />
        </div>
        <RoleLine className="absolute left-[57px] top-[832px]" />
        <ScrollCue className="absolute bottom-8 left-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
};
