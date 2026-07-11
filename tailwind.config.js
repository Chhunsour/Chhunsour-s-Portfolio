module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      screens: {
        // full 1440px design canvas kicks in here; below it everything is fluid
        desk: "1440px",
      },
      fontFamily: {
        "apple-com-semantic-emphasis":
          "var(--apple-com-semantic-emphasis-font-family)",
        "apple-com-semantic-heading-2":
          "var(--apple-com-semantic-heading-2-font-family)",
        "apple-com-semantic-heading-3":
          "var(--apple-com-semantic-heading-3-font-family)",
        "apple-com-semantic-item": "var(--apple-com-semantic-item-font-family)",
        "apple-com-semantic-link": "var(--apple-com-semantic-link-font-family)",
        "apple-com-SF-pro-regular":
          "var(--apple-com-SF-pro-regular-font-family)",
        "apple-com-SF-pro-regular-underline":
          "var(--apple-com-SF-pro-regular-underline-font-family)",
        "landonorris-com-arial-bold":
          "var(--landonorris-com-arial-bold-font-family)",
        "landonorris-com-mona-sans-black-upper":
          "var(--landonorris-com-mona-sans-black-upper-font-family)",
        "landonorris-com-mona-sans-bold":
          "var(--landonorris-com-mona-sans-bold-font-family)",
        "landonorris-com-mona-sans-bold-upper":
          "var(--landonorris-com-mona-sans-bold-upper-font-family)",
        "landonorris-com-mona-sans-extrabold":
          "var(--landonorris-com-mona-sans-extrabold-font-family)",
        "landonorris-com-mona-sans-medium":
          "var(--landonorris-com-mona-sans-medium-font-family)",
        "landonorris-com-mona-sans-regular":
          "var(--landonorris-com-mona-sans-regular-font-family)",
        "landonorris-com-mona-sans-semibold":
          "var(--landonorris-com-mona-sans-semibold-font-family)",
        "landonorris-com-semantic-heading-2-upper":
          "var(--landonorris-com-semantic-heading-2-upper-font-family)",
        "landonorris-com-semantic-link-upper":
          "var(--landonorris-com-semantic-link-upper-font-family)",
        "landonorris-com-semantic-strong":
          "var(--landonorris-com-semantic-strong-font-family)",
        "landonorris-com-semantic-strong-upper":
          "var(--landonorris-com-semantic-strong-upper-font-family)",
        "typhonmachinery-com-afacad-bold":
          "var(--typhonmachinery-com-afacad-bold-font-family)",
        "typhonmachinery-com-afacad-bold-upper":
          "var(--typhonmachinery-com-afacad-bold-upper-font-family)",
        "typhonmachinery-com-afacad-medium":
          "var(--typhonmachinery-com-afacad-medium-font-family)",
        "typhonmachinery-com-afacad-regular":
          "var(--typhonmachinery-com-afacad-regular-font-family)",
        "typhonmachinery-com-afacad-semibold":
          "var(--typhonmachinery-com-afacad-semibold-font-family)",
        "typhonmachinery-com-afacad-semibold-upper":
          "var(--typhonmachinery-com-afacad-semibold-upper-font-family)",
        "typhonmachinery-com-alata-regular-upper":
          "var(--typhonmachinery-com-alata-regular-upper-font-family)",
        "typhonmachinery-com-bebas-neue-regular-upper":
          "var(--typhonmachinery-com-bebas-neue-regular-upper-font-family)",
        "typhonmachinery-com-font-awesome-5-brands-regular":
          "var(--typhonmachinery-com-font-awesome-5-brands-regular-font-family)",
        "typhonmachinery-com-font-awesome-5-free-regular":
          "var(--typhonmachinery-com-font-awesome-5-free-regular-font-family)",
        "typhonmachinery-com-jost-bold-lower":
          "var(--typhonmachinery-com-jost-bold-lower-font-family)",
        "typhonmachinery-com-jost-medium":
          "var(--typhonmachinery-com-jost-medium-font-family)",
        "typhonmachinery-com-jost-regular":
          "var(--typhonmachinery-com-jost-regular-font-family)",
        "typhonmachinery-com-jost-semibold":
          "var(--typhonmachinery-com-jost-semibold-font-family)",
        "typhonmachinery-com-lato-bold-upper":
          "var(--typhonmachinery-com-lato-bold-upper-font-family)",
        "typhonmachinery-com-montserrat-black-upper":
          "var(--typhonmachinery-com-montserrat-black-upper-font-family)",
        "typhonmachinery-com-montserrat-extrabold":
          "var(--typhonmachinery-com-montserrat-extrabold-font-family)",
        "typhonmachinery-com-montserrat-extrabold-upper":
          "var(--typhonmachinery-com-montserrat-extrabold-upper-font-family)",
        "typhonmachinery-com-montserrat-semibold":
          "var(--typhonmachinery-com-montserrat-semibold-font-family)",
        "typhonmachinery-com-montserrat-semibold-upper":
          "var(--typhonmachinery-com-montserrat-semibold-upper-font-family)",
        "typhonmachinery-com-open-sans-semibold":
          "var(--typhonmachinery-com-open-sans-semibold-font-family)",
        "typhonmachinery-com-oswald-bold-upper":
          "var(--typhonmachinery-com-oswald-bold-upper-font-family)",
        "typhonmachinery-com-poppins-bold":
          "var(--typhonmachinery-com-poppins-bold-font-family)",
        "typhonmachinery-com-poppins-medium":
          "var(--typhonmachinery-com-poppins-medium-font-family)",
        "typhonmachinery-com-poppins-regular":
          "var(--typhonmachinery-com-poppins-regular-font-family)",
        "typhonmachinery-com-poppins-regular-underline":
          "var(--typhonmachinery-com-poppins-regular-underline-font-family)",
        "typhonmachinery-com-poppins-semibold":
          "var(--typhonmachinery-com-poppins-semibold-font-family)",
        "typhonmachinery-com-roboto-bold-upper":
          "var(--typhonmachinery-com-roboto-bold-upper-font-family)",
        "typhonmachinery-com-roboto-regular":
          "var(--typhonmachinery-com-roboto-regular-font-family)",
        "typhonmachinery-com-roboto-regular-upper":
          "var(--typhonmachinery-com-roboto-regular-upper-font-family)",
      },
    },
  },
  plugins: [],
};
