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

export const PortfolioHeroSection = (): JSX.Element => {
  const { t } = useI18n();
  return (
    <section
      aria-label="Portfolio hero section"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet (below 1440px) ---- */}
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[560px] flex-col justify-center px-5 pb-10 pt-24 sm:px-10 desk:hidden">
        <p className="eyebrow mb-4">CHHUNSOUR · 2026</p>
        <h1 className="latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13.5vw] font-normal leading-[1] text-[#fe7f2d] sm:text-[64px]">
          PORTFOLIO
        </h1>
        <div
          aria-hidden="true"
          className="drift-a latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13.5vw] font-normal leading-[1] text-transparent opacity-50 [--drift:-14px] [-webkit-text-stroke:1.5px_#ffe9d9] sm:text-[64px]"
        >
          PORTFOLIO
        </div>
        <div className="relative mt-5 sm:mt-6">
          <div
            aria-hidden="true"
            className="absolute left-3 top-3 h-full w-full border-2 border-[#fe7f2d]/60"
          />
          <img
            className="relative aspect-[5/4] w-full object-cover object-[center_22%]"
            alt="Portfolio portrait"
            src="/img/untitled-6-1.webp"
            width={868}
            height={976}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div
          aria-hidden="true"
          className="drift-b mt-4 latin-display whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13.5vw] font-normal leading-[1] text-transparent opacity-25 [--drift:14px] [-webkit-text-stroke:1.5px_#ffe9d9] sm:text-[64px]"
        >
          PORTFOLIO
        </div>
        <ul className="mt-7 grid w-full list-none grid-cols-2 gap-x-3 gap-y-4 p-0">
          {roles.map((roleKey) => (
            <li key={roleKey} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-[11px] text-[#fe7f2d]">
                ✦
              </span>
              <span className="whitespace-nowrap [font-family:'OTTERO-Regular',Helvetica] text-[11px] font-normal tracking-[1.5px] text-[#ffe9d9] sm:text-sm sm:tracking-[2px]">
                {t(roleKey)}
              </span>
            </li>
          ))}
        </ul>
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
            width={868}
            height={976}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <RoleLine className="absolute left-[57px] top-[832px]" />
      </div>
    </section>
  );
};
