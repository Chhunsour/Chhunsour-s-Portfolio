import { useI18n } from "../../../../i18n";

const wordpressSites = [
  "machinery.org",
  "machineryusa.online",
  "tinyexcavator.com",
  "newexcavator.com",
  "newexcavatorsforsale.com",
  "usaexcavators.com",
  "unitedstatesofexcavators.com",
  "newdiggerforsale.com",
  "newminiexcavator.com",
  "typhonnow.com",
];

// small tech logos for the project labels
const TECH_ICONS: Record<string, JSX.Element> = {
  vue: (
    <svg viewBox="0 0 262 227" className="h-3.5 w-3.5" aria-hidden="true">
      <path fill="#41B883" d="M161.1 0l-30.2 52.4L100.6 0H0l130.9 226.7L261.7 0z" />
      <path fill="#35495E" d="M161.1 0l-30.2 52.4L100.6 0H52.3l78.5 136L209.4 0z" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 109 113" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        fill="#3ECF8E"
        d="M63.7 110.3c-2.9 3.6-8.7 1.6-8.7-3V40.1h45.2c8.2 0 12.8 9.5 7.7 15.9z"
      />
      <path
        fill="#249361"
        d="M45.3 2.1c2.9-3.6 8.7-1.6 8.7 3v67.2H8.9c-8.2 0-12.8-9.5-7.7-15.9z"
      />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 38 57" className="h-3.5 w-auto" aria-hidden="true">
      <path fill="#0ACF83" d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
      <path fill="#FF7262" d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" />
      <path fill="#1ABCFE" d="M38 28.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z" />
    </svg>
  ),
  code: (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="#fe7f2d"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  ),
  db: (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="#fe7f2d"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  ),
  cart: (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="#fe7f2d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21.6 7H6.2" />
      <circle cx="9.5" cy="20" r="1.5" />
      <circle cx="17.5" cy="20" r="1.5" />
    </svg>
  ),
  pay: (
    <img
      className="h-3.5 w-3.5 rounded-[3px]"
      alt=""
      aria-hidden="true"
      src="/img/favicons/aba-payway.png"
      loading="lazy"
    />
  ),
};

const ProjectLabel = ({
  parts,
  className,
}: {
  parts: { text: string; icon?: string; sep?: string }[];
  className: string;
}): JSX.Element => (
  <p className={`flex flex-wrap items-center gap-y-1.5 ${className}`}>
    {parts.map((part, index) => (
      <span key={index} className="flex items-center">
        {index > 0 && (
          <span className="mx-2.5 text-[#fe7f2d]/60">{part.sep ?? "\u00b7"}</span>
        )}
        {part.icon && (
          <span className="mr-2 inline-flex items-center">
            {TECH_ICONS[part.icon]}
          </span>
        )}
        {part.text}
      </span>
    ))}
  </p>
);

const Browser = ({
  src,
  alt,
  url,
  compact = false,
  className = "",
}: {
  src: string;
  alt: string;
  url: string;
  compact?: boolean;
  className?: string;
}): JSX.Element => (
  <div
    className={`${className} overflow-hidden rounded-lg border border-[#ffe9d9]/15 bg-[#1e1e1e] shadow-[0_24px_60px_rgba(0,0,0,0.38)]`}
  >
    <div className="flex items-center gap-2 border-b border-[#ffe9d9]/10 px-5 py-3">
      <span className="h-3 w-3 rounded-full bg-[#fe7f2d]" />
      <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
      <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
      <span className="ml-4 rounded bg-[#272727] px-4 py-1 font-mono text-[12px] text-[#ffe9d9]/50">
        {url}
      </span>
    </div>
    <img
      className={
        compact
          ? "block aspect-[16/10] w-full object-cover object-top"
          : "block w-full"
      }
      alt={alt}
      src={src}
      loading="lazy"
    />
  </div>
);

/* Slide timing (i * 6s) is coupled to the 18s cycle-fade keyframes. */
const CycleBrowser = ({
  slides,
}: {
  slides: { src: string; alt: string; url: string }[];
}): JSX.Element => (
  <div className="cycle overflow-hidden rounded-xl border border-[#ffe9d9]/15 bg-[#171717] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
    <div className="flex h-11 items-center gap-2 border-b border-[#ffe9d9]/10 px-4 sm:px-5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#fe7f2d]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffe9d9]/25" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffe9d9]/25" />
      <span className="ml-2 grid min-w-0 rounded bg-[#272727] px-3 py-1 font-mono text-[10px] text-[#ffe9d9]/50 sm:ml-4 sm:text-[11px]">
        {slides.map((slide, i) => (
          <span
            key={slide.url}
            className="cycle-item col-start-1 row-start-1 truncate"
            style={{ animationDelay: `${i * 6}s` }}
          >
            {slide.url}
          </span>
        ))}
      </span>
    </div>
    <div className="grid aspect-[4/3] sm:aspect-[16/10] desk:aspect-[16/9]">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          className="cycle-item col-start-1 row-start-1 block h-full w-full object-cover object-top"
          alt={slide.alt}
          src={slide.src}
          loading="lazy"
          style={{ animationDelay: `${i * 6}s` }}
        />
      ))}
    </div>
  </div>
);

export const ProjectsSection = (): JSX.Element => {
  const { t } = useI18n();
  return (
    <section
      aria-labelledby="projects-heading"
      className="relative w-full overflow-hidden px-5 py-16 sm:px-10 desk:w-[1440px] desk:px-[110px] desk:py-36"
    >
      <p className="eyebrow">{t("projects.label")}</p>
      <h2
        id="projects-heading"
        className="mt-8 w-full max-w-[1000px] [font-family:'WisnuMan-Regular',Helvetica] text-[40px] font-normal leading-[1.1] tracking-[0] sm:text-[52px] desk:mt-10 desk:text-[66px]"
      >
        <span className="text-[#ffe9d9]">{t("projects.heading.before")}</span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          {t("projects.heading.accent")}
        </span>
        <span className="text-[#ffe9d9]">{t("global.period")}</span>
      </h2>

      {/* ── Project 01: Website Department Workflow ───────────────── */}
      <article
        id="workflow-project"
        className="mt-14 scroll-mt-20 rounded-[24px] bg-[#171717]/35 px-5 py-8 shadow-[0_32px_90px_rgba(0,0,0,0.16)] sm:px-7 sm:py-10 desk:mt-28 desk:scroll-mt-24 desk:px-10 desk:py-12"
      >
        <div className="grid gap-9 desk:grid-cols-[410px_minmax(0,1fr)] desk:items-center desk:gap-12">
          <div className="min-w-0">
            <ProjectLabel
              className="[font-family:'OTTERO-Regular',Helvetica] text-[11px] leading-[1.7] tracking-[3px] text-[#fe7f2d] sm:text-xs"
              parts={[
                { text: "PROJECT 01" },
                { text: "VUE", icon: "vue" },
                { text: "SUPABASE", icon: "supabase" },
              ]}
            />
            <h3 className="mt-3 max-w-[560px] [font-family:'WisnuMan-Regular',Helvetica] text-[32px] leading-[1.02] text-[#ffe9d9] sm:text-[40px] desk:mt-4 desk:text-[42px]">
              <span className="block whitespace-nowrap">Website Department</span>
              <span className="mt-1 block [font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
                Workflow
              </span>
            </h3>
            <p className="mt-4 inline-flex bg-[#fe7f2d]/10 px-3 py-2 [font-family:'OTTERO-Regular',Helvetica] text-[9px] leading-[1.5] tracking-[2px] text-[#fe7f2d]/85 sm:text-[10px]">
              HEAD OF DEPARTMENT · BUILT SOLO
            </p>
            <p className="mt-5 max-w-[390px] [font-family:'WisnuMan-Regular',Helvetica] text-[17px] leading-[1.55] text-[#ffe9d9]/75 desk:text-[18px]">
              {t("projects.workflow.body")}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 [font-family:'WisnuMan-Regular',Helvetica] text-[14px] leading-[1.35] text-[#ffe9d9]/65 sm:grid-cols-2 desk:text-[14px]">
              {[
                t("projects.workflow.one"),
                t("projects.workflow.two"),
                t("projects.workflow.three"),
                t("projects.workflow.four"),
              ].map((item) => (
                <li
                  key={item}
                  className="flex min-h-[58px] items-start gap-2.5 bg-[#ffe9d9]/[0.035] px-3 py-3 transition-colors duration-300 hover:bg-[#fe7f2d]/10"
                >
                  <span aria-hidden="true" className="text-[#fe7f2d]">
                    ✦
                  </span>
                  <span>{item.replace(/^—\s*/, "")}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <div
              className="workflow-screen-rail -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:-mx-7 sm:px-7 md:hidden"
              aria-label="Workflow dashboard screens"
            >
              <Browser
                className="min-w-[88%] snap-center md:min-w-0"
                compact
                src="/img/projects/workflow-dashboard.webp"
                alt="Website Department Workflow dashboard"
                url="workflow — dashboard"
              />
              <Browser
                className="min-w-[88%] snap-center md:min-w-0"
                compact
                src="/img/projects/workflow-tasks.webp"
                alt="Workflow task board with team assignments"
                url="workflow — task board"
              />
            </div>
            <div
              className="relative hidden aspect-[16/10] md:block"
              aria-label="Workflow dashboard screens"
            >
              <div
                aria-hidden="true"
                className="absolute inset-[9%_5%_5%_9%] rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(254,127,45,0.12),rgba(255,233,217,0.025)_58%,transparent_75%)] blur-xl"
              />
              <Browser
                className="absolute left-0 top-[4%] z-10 w-[76%] transition-transform duration-500 hover:-translate-y-1"
                compact
                src="/img/projects/workflow-dashboard.webp"
                alt="Website Department Workflow dashboard"
                url="workflow — dashboard"
              />
              <Browser
                className="absolute bottom-[2%] right-0 z-20 w-[76%] transition-transform duration-500 hover:-translate-y-1"
                compact
                src="/img/projects/workflow-tasks.webp"
                alt="Workflow task board with team assignments"
                url="workflow — task board"
              />
            </div>
            <p className="mt-3 flex items-center gap-3 [font-family:'OTTERO-Regular',Helvetica] text-[9px] tracking-[2.5px] text-[#ffe9d9]/40 md:hidden">
              <span className="h-px w-8 bg-[#fe7f2d]/70" aria-hidden="true" />
              {t("projects.workflow.swipe")}
            </p>
          </div>
        </div>
      </article>

      {/* ── Project 02: Konstructz ────────────────────────────────── */}
      <article
        id="konstructz-project"
        className="mt-16 scroll-mt-20 rounded-[24px] bg-[#171717]/30 px-5 py-10 sm:px-7 desk:mt-36 desk:scroll-mt-24 desk:px-10 desk:py-14"
      >
        <div className="grid gap-10 desk:grid-cols-[350px_minmax(0,1fr)] desk:items-center desk:gap-14">
          <div className="min-w-0">
            <ProjectLabel
              className="[font-family:'OTTERO-Regular',Helvetica] text-[11px] leading-[1.7] tracking-[3px] text-[#fe7f2d] sm:text-xs"
              parts={[
                { text: "PROJECT 02" },
                { text: "FIGMA", icon: "figma" },
                { text: "CODE", icon: "code", sep: "\u2192" },
                { text: "OWN CMS", icon: "db" },
              ]}
            />
            <h3 className="mt-3 [font-family:'WisnuMan-Regular',Helvetica] text-[38px] leading-none text-[#ffe9d9] sm:text-[44px] desk:mt-4 desk:text-[52px]">
              Konstructz
            </h3>
            <p className="mt-5 [font-family:'WisnuMan-Regular',Helvetica] text-[18px] leading-[1.55] text-[#ffe9d9]/80 desk:text-[19px]">
              {t("projects.konstructz.body")}
            </p>

            <ul className="mt-6 divide-y divide-[#ffe9d9]/10 border-y border-[#ffe9d9]/10 [font-family:'WisnuMan-Regular',Helvetica] text-[15px] leading-[1.4] text-[#ffe9d9]/65 desk:text-[16px]">
              {[
                t("projects.konstructz.one"),
                t("projects.konstructz.two"),
                t("projects.konstructz.three"),
              ].map((item) => (
                <li key={item} className="flex gap-3 py-3">
                  <span aria-hidden="true" className="text-[#fe7f2d]">
                    ✦
                  </span>
                  <span>{item.replace(/^—\s*/, "")}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://konstructz.com"
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex min-h-12 items-center gap-4 border border-[#fe7f2d] px-5 [font-family:'OTTERO-Regular',Helvetica] text-xs tracking-[2.5px] text-[#fe7f2d] transition-all duration-300 hover:bg-[#fe7f2d] hover:text-[#272727] active:scale-95 sm:px-6"
            >
              {t("projects.visit")} KONSTRUCTZ.COM
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <div className="min-w-0">
            <div className="relative pb-8 sm:pb-10 desk:pb-7">
              <CycleBrowser
                slides={[
                  {
                    src: "/img/projects/konstructz-desktop.webp",
                    alt: "Konstructz e-commerce website on desktop",
                    url: "konstructz.com",
                  },
                  {
                    src: "/img/projects/workflow-cms-product.webp",
                    alt: "Editing a Konstructz product inside the Workflow CMS",
                    url: "workflow — product editor",
                  },
                  {
                    src: "/img/projects/workflow-cms-blog.webp",
                    alt: "Writing a Konstructz blog post inside the Workflow CMS",
                    url: "workflow — blog editor",
                  },
                ]}
              />
              <img
                className="absolute -bottom-1 right-3 w-[86px] sm:right-6 sm:w-[120px] desk:-bottom-4 desk:right-7 desk:w-[142px]"
                alt="Konstructz on mobile"
                src="/img/projects/konstructz-mobile.webp"
                loading="lazy"
              />
            </div>
            <p className="max-w-[75%] [font-family:'OTTERO-Regular',Helvetica] text-[10px] leading-[1.8] tracking-[2.5px] text-[#ffe9d9]/40 sm:text-xs desk:max-w-none">
              {t("projects.behind")}
            </p>
          </div>
        </div>
      </article>

      {/* ── Project 03: Darila Official ───────────────────────────── */}
      <div className="mt-16 flex flex-col gap-8 desk:mt-52 desk:flex-row desk:items-start desk:gap-16">
        <div className="relative min-w-0 flex-1 pb-16 desk:pb-24">
          <Browser
            src="/img/projects/payway-desktop.webp"
            alt="Darila Official e-commerce website"
            url="darilaofficial.com"
          />
          <div className="absolute -bottom-0 right-0 w-[62%] desk:right-[-30px]">
            <Browser
              src="/img/projects/payway-checkout.webp"
              alt="Checkout with ABA PayWay payment"
              url="darilaofficial.com — checkout"
            />
          </div>
        </div>
        <div className="w-full desk:w-[420px] desk:shrink-0 desk:pt-8">
          <ProjectLabel
            className="[font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[4px] text-[#fe7f2d]"
            parts={[
              { text: "PROJECT 03" },
              { text: "E-COMMERCE", icon: "cart" },
              { text: "ABA PAYWAY", icon: "pay" },
            ]}
          />
          <h3 className="mt-4 [font-family:'WisnuMan-Regular',Helvetica] text-[32px] leading-[1.15] text-[#ffe9d9] sm:text-[40px] desk:mt-6 desk:text-[46px]">
            Darila Official
          </h3>
          <p className="mt-6 [font-family:'WisnuMan-Regular',Helvetica] text-[19px] leading-[1.6] text-[#ffe9d9]/85 desk:text-[22px] desk:leading-[1.55]">
            {t("projects.darila.body.before")}
            <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
              ABA PayWay
            </span>{" "}
            {t("projects.darila.body.after")}
          </p>
          <p className="mt-6 [font-family:'WisnuMan-Regular',Helvetica] text-[17px] leading-[1.55] text-[#ffe9d9]/65 desk:text-[19px]">
            {t("projects.darila.note")}
          </p>
          <a
            href="https://darilaofficial.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border border-[#fe7f2d] px-7 py-4 [font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[3px] text-[#fe7f2d] transition-all duration-300 hover:bg-[#fe7f2d] hover:text-[#272727] active:scale-95"
          >
            {t("projects.visit")} DARILAOFFICIAL.COM
          </a>
        </div>
      </div>

      {/* ── …and ten more ─────────────────────────────────────────── */}
      <div className="mt-16 desk:mt-52">
        <h3 className="[font-family:'WisnuMan-Regular',Helvetica] text-[40px] leading-[1.1] tracking-[0] sm:text-[52px] desk:text-[66px]">
          <span className="text-[#ffe9d9]">{t("projects.more.before")}</span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            {t("projects.more.accent")}
          </span>
          <span className="text-[#ffe9d9]">{t("projects.more.after")}</span>
        </h3>
        <p className="mt-6 w-full max-w-[720px] [font-family:'WisnuMan-Regular',Helvetica] text-[19px] leading-[1.6] text-[#ffe9d9]/85 desk:text-[22px] desk:leading-[1.55]">
          {t("projects.more.body")}
        </p>
        <ul className="mt-10 grid list-none grid-cols-1 gap-x-10 gap-y-5 p-0 sm:grid-cols-2 lg:grid-cols-3 desk:mt-12">
          {wordpressSites.map((site) => (
            <li key={site}>
              <a
                href={`https://${site}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 [font-family:'OTTERO-Regular',Helvetica] text-[15px] tracking-[3px] text-[#ffe9d9]/60 transition-colors duration-300 hover:text-[#fe7f2d]"
              >
                <img
                  className="h-6 w-6 rounded-md opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                  alt=""
                  aria-hidden="true"
                  src={`/img/favicons/${site}.png`}
                  loading="lazy"
                />
                {site.toUpperCase()} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
