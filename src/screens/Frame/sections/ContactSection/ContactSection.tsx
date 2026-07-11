export const ContactSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden px-5 pb-14 pt-24 sm:px-10 desk:w-[1440px] desk:gap-10 desk:pb-16 desk:pt-36"
    >
      <p className="eyebrow eyebrow-center">10 — CONTACT</p>
      <h2
        id="contact-heading"
        className="text-center [font-family:'Mogin-Regular',Helvetica] text-[15vw] font-normal leading-[0.95] tracking-[0] text-[#ffe9d9] sm:text-[90px] desk:text-[130px]"
      >
        LET&apos;S BUILD
        <br />
        <span className="text-transparent [-webkit-text-stroke:2px_#fe7f2d]">
          SOMETHING
        </span>
      </h2>
      <p className="w-full max-w-[560px] text-center [font-family:'WisnuMan-Regular',Helvetica] text-[20px] font-normal leading-[1.5] tracking-[0] text-[#ffe9d9]/80 sm:text-[24px] desk:text-[26px]">
        Have a project in mind — or just want to talk design, code, or cameras?
      </p>
      <div className="mt-4 flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
        <a
          href="mailto:justharuki38@gmail.com"
          className="bg-[#fe7f2d] px-10 py-5 [font-family:'OTTERO-Regular',Helvetica] text-lg text-[#272727] transition-all duration-300 hover:scale-105 hover:bg-[#ffe9d9]"
        >
          SAY HELLO
        </a>
        <a
          href="https://www.pinterest.com/Dennvor/"
          target="_blank"
          rel="noreferrer"
          className="[font-family:'OTTERO-Regular',Helvetica] text-lg text-[#ffe9d9] underline decoration-[#fe7f2d] underline-offset-8 transition-colors duration-300 hover:text-[#fe7f2d]"
        >
          PINTEREST
        </a>
      </div>
      <p className="mt-14 text-center [font-family:'OTTERO-Regular',Helvetica] text-sm font-normal tracking-[3px] text-[#ffe9d9]/40 desk:mt-20">
        © 2026 — DESIGNED &amp; BUILT BY DENNVOR
      </p>
    </section>
  );
};
