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
  const { t } = useI18n();
  return (
    <section
      aria-label="Portfolio hero section"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet (below 1440px) ---- */}
      <div className="flex min-h-[100svh] flex-col justify-center px-5 pb-12 pt-24 sm:px-10 desk:hidden">
        <p className="eyebrow mb-5">CHHUNSOUR · 2026</p>
        <h1 className="latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13.5vw] font-normal leading-[1.02] text-[#fe7f2d] sm:text-[72px] md:text-[84px]">
          PORTFOLIO
        </h1>
        {[
          { drift: "drift-a", opacity: "opacity-50", travel: "[--drift:-14px]" },
          { drift: "drift-b", opacity: "opacity-25", travel: "[--drift:14px]" },
        ].map((row) => (
          <div
            key={row.drift}
            aria-hidden="true"
            className={`${row.drift} ${row.opacity} ${row.travel} latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13.5vw] font-normal leading-[1.02] text-transparent [-webkit-text-stroke:1.5px_#ffe9d9] sm:text-[72px] md:text-[84px]`}
          >
            PORTFOLIO
          </div>
        ))}
        <div className="relative -mt-[15vw] ml-auto w-[82%] max-w-[400px] sm:-mt-16 md:max-w-[440px]">
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
        <ul className="mx-auto mt-9 grid w-full max-w-[420px] list-none grid-cols-2 gap-x-4 gap-y-4 p-0 sm:max-w-[520px]">
          {roles.map((roleKey) => (
            <li key={roleKey} className="flex items-center gap-2.5">
              <span aria-hidden="true" className="text-xs text-[#fe7f2d]">
                ✦
              </span>
              <span className="[font-family:'OTTERO-Regular',Helvetica] text-[13px] font-normal tracking-[2px] text-[#ffe9d9] sm:text-base">
                {t(roleKey)}
              </span>
            </li>
          ))}
        </ul>
        <ScrollCue className="mt-10 self-center" />
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
