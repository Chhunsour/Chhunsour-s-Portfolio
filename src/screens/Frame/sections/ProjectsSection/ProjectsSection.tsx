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

const Browser = ({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url: string;
}): JSX.Element => (
  <div className="overflow-hidden rounded-lg border border-[#ffe9d9]/15 bg-[#1e1e1e] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
    <div className="flex items-center gap-2 border-b border-[#ffe9d9]/10 px-5 py-3">
      <span className="h-3 w-3 rounded-full bg-[#fe7f2d]" />
      <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
      <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
      <span className="ml-4 rounded bg-[#272727] px-4 py-1 font-mono text-[12px] text-[#ffe9d9]/50">
        {url}
      </span>
    </div>
    <img className="block w-full" alt={alt} src={src} loading="lazy" />
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
      <div className="mt-14 desk:mt-36">
        <div className="flex flex-col gap-5 desk:flex-row desk:items-end desk:justify-between">
          <div>
            <p className="[font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[4px] text-[#fe7f2d]">
              PROJECT 01 · VUE · SUPABASE
            </p>
            <h3 className="mt-4 [font-family:'WisnuMan-Regular',Helvetica] text-[32px] leading-[1.15] text-[#ffe9d9] sm:text-[40px] desk:mt-6 desk:text-[46px]">
              Website Department Workflow
            </h3>
          </div>
          <p className="mb-2 [font-family:'OTTERO-Regular',Helvetica] text-sm leading-[2] tracking-[3px] text-[#ffe9d9]/45 desk:text-right">
            HEAD OF DEPARTMENT
            <br />
            DESIGNED &amp; BUILT SOLO
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-8 desk:mt-10 desk:flex-row desk:items-start desk:justify-between desk:gap-20">
          <p className="w-full [font-family:'WisnuMan-Regular',Helvetica] text-[19px] leading-[1.6] text-[#ffe9d9]/85 desk:w-[620px] desk:text-[22px] desk:leading-[1.55]">
            {t("projects.workflow.body")}
          </p>
          <ul className="m-0 list-none space-y-3 p-0 [font-family:'WisnuMan-Regular',Helvetica] text-[17px] leading-[1.5] text-[#ffe9d9]/65 desk:text-[19px]">
            <li>{t("projects.workflow.one")}</li>
            <li>{t("projects.workflow.two")}</li>
            <li>{t("projects.workflow.three")}</li>
            <li>{t("projects.workflow.four")}</li>
          </ul>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 desk:mt-14 desk:gap-7">
          <Browser
            src="/img/projects/workflow-dashboard.webp"
            alt="Website Department Workflow dashboard"
            url="workflow — dashboard"
          />
          <Browser
            src="/img/projects/workflow-tasks.webp"
            alt="Workflow task board with team assignments"
            url="workflow — task board"
          />
        </div>
      </div>

      {/* ── Project 02: Konstructz ────────────────────────────────── */}
      <div className="mt-16 desk:mt-44">
        <div className="flex flex-col items-start gap-6 desk:flex-row desk:items-end desk:justify-between">
          <div>
            <p className="[font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[4px] text-[#fe7f2d]">
              PROJECT 02 · FIGMA → CODE · OWN CMS
            </p>
            <h3 className="mt-4 [font-family:'WisnuMan-Regular',Helvetica] text-[32px] leading-[1.15] text-[#ffe9d9] sm:text-[40px] desk:mt-6 desk:text-[46px]">
              Konstructz
            </h3>
          </div>
          <a
            href="https://konstructz.com"
            target="_blank"
            rel="noreferrer"
            className="mb-2 shrink-0 border border-[#fe7f2d] px-7 py-4 [font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[3px] text-[#fe7f2d] transition-all duration-300 hover:bg-[#fe7f2d] hover:text-[#272727] active:scale-95"
          >
            {t("projects.visit")} KONSTRUCTZ.COM
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-8 desk:mt-10 desk:flex-row desk:items-start desk:justify-between desk:gap-20">
          <p className="w-full [font-family:'WisnuMan-Regular',Helvetica] text-[19px] leading-[1.6] text-[#ffe9d9]/85 desk:w-[620px] desk:text-[22px] desk:leading-[1.55]">
            {t("projects.konstructz.body")}
          </p>
          <ul className="m-0 list-none space-y-3 p-0 [font-family:'WisnuMan-Regular',Helvetica] text-[17px] leading-[1.5] text-[#ffe9d9]/65 desk:text-[19px]">
            <li>{t("projects.konstructz.one")}</li>
            <li>{t("projects.konstructz.two")}</li>
            <li>{t("projects.konstructz.three")}</li>
          </ul>
        </div>
        <div className="relative mt-10 desk:mt-16">
          <Browser
            src="/img/projects/konstructz-desktop.webp"
            alt="Konstructz e-commerce website on desktop"
            url="konstructz.com"
          />
          <img
            className="absolute -bottom-8 right-3 w-[110px] rounded-[16px] border-4 border-[#101010] shadow-[0_30px_80px_rgba(0,0,0,0.7)] sm:w-[150px] desk:-bottom-14 desk:right-12 desk:w-[220px] desk:rounded-[30px] desk:border-[6px]"
            alt="Konstructz on mobile"
            src="/img/projects/konstructz-mobile.webp"
            loading="lazy"
          />
        </div>
        <p className="mt-14 [font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[4px] text-[#ffe9d9]/45 desk:mt-28">
          {t("projects.behind")}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 desk:gap-10">
          <Browser
            src="/img/projects/workflow-cms-product.webp"
            alt="Editing a Konstructz product inside the Workflow CMS"
            url="workflow — product editor"
          />
          <Browser
            src="/img/projects/workflow-cms-blog.webp"
            alt="Writing a Konstructz blog post inside the Workflow CMS"
            url="workflow — blog editor"
          />
        </div>
      </div>

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
          <p className="[font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[4px] text-[#fe7f2d]">
            PROJECT 03 · E-COMMERCE · ABA PAYWAY
          </p>
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
import { useI18n } from "../../../../i18n";
