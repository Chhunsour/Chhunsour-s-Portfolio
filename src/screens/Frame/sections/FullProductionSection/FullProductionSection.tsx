const workflowSteps = [
  {
    label: "Plan Structure",
    left: "left-[164px]",
    top: "top-[577px]",
  },
  {
    label: "Design UX/UI",
    left: "left-[518px]",
    top: "top-[577px]",
  },
  {
    label: "Front-End",
    left: "left-[834px]",
    top: "top-[577px]",
  },
  {
    label: "Back-End",
    left: "left-[1103px]",
    top: "top-[577px]",
  },
];

const arrowImages = [
  {
    src: "/img/arrow-8.svg",
    alt: "",
    className: "absolute top-[581px] left-[465px] w-7 h-[22px]",
  },
  {
    src: "/img/arrow-8.svg",
    alt: "",
    className: "absolute top-[581px] left-[779px] w-7 h-[22px]",
  },
  {
    src: "/img/arrow-9.svg",
    alt: "",
    className: "absolute top-[776px] left-[709px] w-[22px] h-7",
  },
  {
    src: "/img/arrow-8.svg",
    alt: "",
    className: "absolute top-[581px] left-[1050px] w-7 h-[22px]",
  },
];

export const FullProductionSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="full-production-section-heading"
      className="relative w-full overflow-hidden desk:h-[1024px] desk:w-[1440px]"
    >
      {/* ---- mobile / tablet: vertical workflow ---- */}
      <div className="flex flex-col items-center gap-8 px-5 py-16 text-center sm:px-10 desk:hidden">
        <p className="eyebrow eyebrow-center">05 — DEVELOPMENT</p>
        <h2 className="[font-family:'WisnuMan-Regular',Helvetica] text-[36px] font-normal leading-[1.2] text-transparent sm:text-[50px] md:max-w-[680px]">
          <span className="text-[#ffe9d9]">But I wanted to do more than </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            design
          </span>
          <span className="text-[#ffe9d9]"> the screen. I wanted to </span>
          <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
            build
          </span>
          <span className="text-[#ffe9d9]"> it.</span>
        </h2>
        <div className="flex max-w-[560px] flex-wrap items-center justify-center gap-x-4 gap-y-3">
          {workflowSteps.map((step, index) => (
            <div key={`m-${step.label}`} className="flex items-center gap-4">
              {index > 0 && (
                <img
                  className="h-[16px] w-5"
                  alt=""
                  aria-hidden="true"
                  src="/img/arrow-8.svg"
                />
              )}
              <div className="[font-family:'WisnuMan-Regular',Helvetica] text-[22px] font-normal text-[#ffe9d9] sm:text-[26px]">
                {step.label}
              </div>
            </div>
          ))}
        </div>
        <p className="[font-family:'Rafles-Regular',Helvetica] text-[44px] font-normal text-[#fe7f2d] sm:text-[56px]">
          Full Production
        </p>
      </div>

      {/* ---- desktop (1440px canvas, unchanged) ---- */}
      <div className="hidden desk:block">
      <div className="absolute top-[96px] left-44 w-[1089px] flex justify-center">
        <p className="eyebrow eyebrow-center">05 — DEVELOPMENT</p>
      </div>
      <h2
        id="full-production-section-heading"
        className="absolute top-[141px] left-44 w-[1089px] [font-family:'WisnuMan-Regular',Helvetica] font-normal text-transparent text-[90px] text-center tracking-[0] leading-[normal]"
      >
        <span className="text-[#ffe9d9]">But I wanted to do more than </span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          design
        </span>
        <span className="text-[#ffe9d9]"> the screen. I wanted to </span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          build
        </span>
        <span className="text-[#ffe9d9]"> it.</span>
      </h2>
      {arrowImages.map((arrow, index) => (
        <img
          key={`${arrow.src}-${index}`}
          className={arrow.className}
          alt={arrow.alt}
          aria-hidden="true"
          src={arrow.src}
        />
      ))}

      {workflowSteps.map((step) => (
        <div
          key={step.label}
          className={`absolute ${step.top} ${step.left} [font-family:'WisnuMan-Regular',Helvetica] font-normal text-[#ffe9d9] text-[42px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
        >
          {step.label}
        </div>
      ))}

      <p className="absolute top-[856px] left-[448px] [font-family:'Rafles-Regular',Helvetica] font-normal text-[#fe7f2d] text-7xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Full Production
      </p>
      <img
        className="absolute top-[593px] left-[105px] w-[1222px] h-[186px]"
        alt=""
        aria-hidden="true"
        src="/img/vector-639.svg"
      />
      </div>
    </section>
  );
};
