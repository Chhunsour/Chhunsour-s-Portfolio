const socialLinks = [
  {
    label: "GITHUB",
    href: "https://github.com/Denvor369",
    icon: "/img/icons/github.svg",
  },
  {
    label: "TELEGRAM",
    href: "https://t.me/ChhunsourSENG",
    icon: "/img/icons/telegram.svg",
  },
  {
    label: "WHATSAPP",
    href: "https://wa.me/85585688833",
    icon: "/img/icons/whatsapp.svg",
  },
  {
    label: "PINTEREST",
    href: "https://www.pinterest.com/Dennvor/",
    icon: "/img/icons/pinterest.svg",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative flex w-full flex-col items-center gap-7 overflow-hidden px-5 pb-12 pt-20 sm:px-10 desk:w-[1440px] desk:gap-10 desk:pb-16 desk:pt-36"
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
      <div className="mt-4 flex flex-col items-center gap-8">
        <a
          href="mailto:sengchhunsour@gmail.com"
          className="bg-[#fe7f2d] px-10 py-5 [font-family:'OTTERO-Regular',Helvetica] text-lg text-[#272727] transition-all duration-300 hover:scale-105 hover:bg-[#ffe9d9] active:scale-95"
        >
          SAY HELLO
        </a>
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-5 p-0 sm:gap-x-10">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 [font-family:'OTTERO-Regular',Helvetica] text-lg text-[#ffe9d9] underline decoration-[#fe7f2d] underline-offset-8 transition-colors duration-300 hover:text-[#fe7f2d]"
              >
                <img
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  alt=""
                  aria-hidden="true"
                  src={link.icon}
                />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="m-0 flex flex-wrap items-center justify-center gap-x-3 text-center [font-family:'OTTERO-Regular',Helvetica] text-sm tracking-[2px] text-[#ffe9d9]/60">
          <a
            href="tel:+85585688833"
            className="transition-colors duration-300 hover:text-[#fe7f2d]"
          >
            085 688 833
          </a>
          <span aria-hidden="true" className="text-[#fe7f2d]">
            ✦
          </span>
          <a
            href="mailto:sengchhunsour@gmail.com"
            className="transition-colors duration-300 hover:text-[#fe7f2d]"
          >
            SENGCHHUNSOUR@GMAIL.COM
          </a>
        </p>
      </div>
      <p className="mt-10 text-center [font-family:'OTTERO-Regular',Helvetica] text-sm font-normal tracking-[3px] text-[#ffe9d9]/40 desk:mt-20">
        © 2026 — DESIGNED &amp; BUILT BY DENNVOR
      </p>
    </section>
  );
};
