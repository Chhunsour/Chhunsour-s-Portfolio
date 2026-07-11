// real excerpt from this site's own Frame.tsx — it draws the topo background
const codeLines = [
  "const draw = (t) => {",
  "  for (let r = 0; r <= rows; r++) {",
  "    for (let c = 0; c <= cols; c++) {",
  "      let v = 0;",
  "      for (const [nx, ny, amp, ph, sp] of TOPO_TERMS) {",
  "        v += amp * Math.sin(",
  "          TAU * ((nx * x) / 1600 + (ny * y) / 1200)",
  "            + ph + sp * 2.5 * t,",
  "        );",
  "      }",
  "    }",
  "  }",
  "  // ^ the contour lines moving behind this page",
  "};",
];

export const DevelopmentEraSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="development-era-heading"
      className="relative flex w-full flex-col items-stretch gap-10 overflow-hidden px-5 py-16 sm:px-10 desk:w-[1440px] desk:flex-row desk:items-center desk:gap-20 desk:px-[110px] desk:py-36"
    >
      <div className="w-full desk:w-[560px] desk:shrink-0">
        <p className="eyebrow">06 — THE NEXT CHAPTER</p>
        <h2
          id="development-era-heading"
          className="mt-8 [font-family:'WisnuMan-Regular',Helvetica] text-[40px] font-normal leading-[1.1] tracking-[0] sm:text-[52px] desk:mt-10 desk:text-[66px]"
        >
          <span className="text-[#ffe9d9]">So I learned to turn </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            ideas
          </span>
          <span className="text-[#ffe9d9]"> into </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            working products
          </span>
          <span className="text-[#ffe9d9]">.</span>
        </h2>
        <p className="mt-8 [font-family:'WisnuMan-Regular',Helvetica] text-[20px] font-normal leading-[1.6] tracking-[0] text-[#ffe9d9]/90 sm:text-[24px] desk:mt-10 desk:text-[26px] desk:leading-[1.55]">
          Design taught me what a screen should say. Development taught me how
          to make it real — every pixel I once drew in Figma, I could now ship
          to a browser.
        </p>
      </div>
      <figure className="m-0 min-w-0 flex-1">
        <div className="overflow-hidden rounded-lg border border-[#ffe9d9]/15 bg-[#1e1e1e] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-2 border-b border-[#ffe9d9]/10 px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#fe7f2d]" />
            <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
            <span className="h-3 w-3 rounded-full bg-[#ffe9d9]/30" />
            <span className="ml-4 font-mono text-[13px] text-[#ffe9d9]/50">
              Frame.tsx — this website
            </span>
          </div>
          <pre className="m-0 overflow-x-auto px-6 py-5 font-mono text-[14px] leading-[1.7]">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className={
                  line.trimStart().startsWith("//")
                    ? "text-[#fe7f2d]"
                    : "text-[#ffe9d9]/75"
                }
              >
                <span className="mr-5 inline-block w-5 select-none text-right text-[#ffe9d9]/25">
                  {i + 1}
                </span>
                {line}
              </div>
            ))}
          </pre>
        </div>
        <figcaption className="mt-5 [font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[3px] text-[#ffe9d9]/50">
          REAL CODE — IT&apos;S DRAWING THE BACKGROUND OF THIS PAGE RIGHT NOW
        </figcaption>
      </figure>
    </section>
  );
};
