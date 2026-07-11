const processSteps = [
  "Understand",
  "Research",
  "Design",
  "Build",
  "Test",
  "Improve",
];

export const ProcessSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative flex w-full flex-col items-center overflow-hidden px-5 py-16 sm:px-10 desk:w-[1440px] desk:px-[110px] desk:py-36"
    >
      <p className="eyebrow eyebrow-center">09 — THE PROCESS</p>
      <h2
        id="process-heading"
        className="mt-8 w-full max-w-[1100px] text-center [font-family:'WisnuMan-Regular',Helvetica] text-[36px] font-normal leading-[1.2] tracking-[0] sm:text-[50px] desk:mt-10 desk:text-[66px] desk:leading-[1.15]"
      >
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          Design
        </span>
        <span className="text-[#ffe9d9]"> taught me why. </span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          Photography
        </span>
        <span className="text-[#ffe9d9]"> taught me what to see. </span>
        <span className="[font-family:'Rafles-Regular',Helvetica] text-[#fe7f2d]">
          Code
        </span>
        <span className="text-[#ffe9d9]"> lets me build it.</span>
      </h2>

      <div className="mt-10 flex max-w-[560px] flex-wrap items-center justify-center gap-x-4 gap-y-3 desk:mt-24 desk:max-w-none desk:flex-nowrap desk:gap-7">
        {processSteps.map((step, index) => (
          <span key={step} className="flex items-center gap-4 desk:gap-7">
            {index > 0 && (
              <img
                className="h-[16px] w-5 desk:h-[22px] desk:w-7"
                alt=""
                aria-hidden="true"
                src="/img/arrow-8.svg"
              />
            )}
            <span className="[font-family:'WisnuMan-Regular',Helvetica] text-[22px] text-[#ffe9d9] desk:text-[30px]">
              {step}
            </span>
          </span>
        ))}
      </div>

      <p className="mt-10 w-full max-w-[760px] text-center [font-family:'WisnuMan-Regular',Helvetica] text-[20px] font-normal leading-[1.6] tracking-[0] text-[#ffe9d9]/90 sm:text-[24px] desk:mt-20 desk:text-[26px] desk:leading-[1.55]">
        I don&apos;t just write code. I understand visual communication, user
        experience, and everything between the first sketch and the shipped
        product.
      </p>
    </section>
  );
};
