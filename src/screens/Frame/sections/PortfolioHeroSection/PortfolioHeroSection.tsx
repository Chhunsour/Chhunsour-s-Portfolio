const outlinedPortfolioRows = [
  { top: "top-[336px]", left: "left-[495px]", drift: "drift-a" },
  { top: "top-[475px]", left: "left-[495px]", drift: "drift-b" },
  { top: "top-[606px]", left: "left-[495px]", drift: "drift-a" },
];

const roleItems = [
  { text: "UX/UI DESIGNER", left: "left-0", width: "w-[386px]" },
  { text: "GRAPHIC DESIGNER", left: "left-[326px]", width: "w-[482px]" },
  { text: "SOFTWARE DEVELOPER", left: "left-[718px]", width: "w-[597px]" },
  { text: "PHOTOGRAPHER", left: "left-[1185px]", width: "w-[142px]" },
];

export const PortfolioHeroSection = (): JSX.Element => {
  return (
    <section
      aria-label="Portfolio hero section"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet (below 1440px) ---- */}
      <div className="flex min-h-[100svh] flex-col justify-center gap-8 px-5 pb-14 pt-24 sm:px-10 md:gap-12 desk:hidden">
        <div>
          <h1 className="whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13vw] font-normal leading-[1.05] text-[#fe7f2d]">
            PORTFOLIO
          </h1>
          {[0, 1].map((row) => (
            <div
              key={row}
              aria-hidden="true"
              className={`${row === 0 ? "drift-a" : "drift-b"} whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[13vw] font-normal leading-[1.05] text-transparent opacity-60 [-webkit-text-stroke:1.5px_#ffe9d9]`}
            >
              PORTFOLIO
            </div>
          ))}
        </div>
        <img
          className="w-full max-w-[420px] self-center aspect-[0.89] object-cover md:max-w-[480px]"
          alt="Portfolio portrait"
          src="/img/untitled-6-1.webp"
        />
      </div>

      {/* ---- desktop (1440px canvas, unchanged) ---- */}
      <div className="hidden desk:block">
        <header className="contents">
          <h1 className="absolute left-[392px] top-[193px] whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[180px] font-normal leading-[normal] tracking-[0] text-[#fe7f2d]">
            PORTFOLIO
          </h1>
          {outlinedPortfolioRows.map((row, index) => (
            <div
              key={`${row.top}-${index}`}
              aria-hidden="true"
              className={`absolute ${row.left} ${row.top} ${row.drift} w-[887px] whitespace-nowrap [font-family:'Mogin-Regular',Helvetica] text-[180px] font-normal leading-[normal] tracking-[0] text-transparent opacity-60 [-webkit-text-stroke:2px_#ffe9d9]`}
            >
              PORTFOLIO
            </div>
          ))}
        </header>
        <img
          className="absolute left-[57px] top-[274px] aspect-[0.89] h-[488px] w-[434px] object-cover"
          alt="Portfolio portrait"
          src="/img/untitled-6-1.webp"
        />
        <ul className="absolute left-[57px] top-[809px] h-[21px] w-[1335px] list-none p-0 m-0">
          {roleItems.map((item) => (
            <li
              key={item.text}
              className={`absolute top-0 ${item.left} ${item.width} [font-family:'OTTERO-Regular',Helvetica] text-lg font-normal leading-[normal] tracking-[0] text-[#ffe9d9]`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
