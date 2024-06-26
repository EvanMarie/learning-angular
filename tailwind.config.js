/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        100: "var(--one)",
        110: "var(--one-ten)",
        120: "var(--one-twenty)",
        130: "var(--one-thirty)",
        140: "var(--one-forty)",
        150: "var(--one-fifty)",
        160: "var(--one-sixty)",
        170: "var(--one-seventy)",
        180: "var(--one-eighty)",
        190: "var(--one-ninety)",
        200: "var(--two)",
        210: "var(--two-ten)",
        220: "var(--two-twenty)",
        230: "var(--two-thirty)",
        240: "var(--two-forty)",
        250: "var(--two-fifty)",
        260: "var(--two-sixty)",
        270: "var(--two-seventy)",
        280: "var(--two-eighty)",
        290: "var(--two-ninety)",
        300: "var(--three)",
        310: "var(--three-ten)",
        320: "var(--three-twenty)",
        330: "var(--three-thirty)",
        340: "var(--three-forty)",
        350: "var(--three-fifty)",
        360: "var(--three-sixty)",
        370: "var(--three-seventy)",
        380: "var(--three-eighty)",
        390: "var(--three-ninety)",
        400: "var(--four)",
        410: "var(--four-ten)",
        420: "var(--four-twenty)",
        430: "var(--four-thirty)",
        440: "var(--four-forty)",
        450: "var(--four-fifty)",
        460: "var(--four-sixty)",
        470: "var(--four-seventy)",
        480: "var(--four-eighty)",
        490: "var(--four-ninety)",
        500: "var(--five)",
        510: "var(--five-ten)",
        520: "var(--five-twenty)",
        530: "var(--five-thirty)",
        540: "var(--five-forty)",
        550: "var(--five-fifty)",
        560: "var(--five-sixty)",
        570: "var(--five-seventy)",
        580: "var(--five-eighty)",
        590: "var(--five-ninety)",
        600: "var(--six)",
        610: "var(--six-ten)",
        620: "var(--six-twenty)",
        630: "var(--six-thirty)",
        640: "var(--six-forty)",
        650: "var(--six-fifty)",
        660: "var(--six-sixty)",
        670: "var(--six-seventy)",
        680: "var(--six-eighty)",
        690: "var(--six-ninety)",
        700: "var(--seven)",
        710: "var(--seven-ten)",
        720: "var(--seven-twenty)",
        730: "var(--seven-thirty)",
        740: "var(--seven-forty)",
        750: "var(--seven-fifty)",
        760: "var(--seven-sixty)",
        770: "var(--seven-seventy)",
        780: "var(--seven-eighty)",
        790: "var(--seven-ninety)",
        800: "var(--eight)",
        810: "var(--eight-ten)",
        820: "var(--eight-twenty)",
        830: "var(--eight-thirty)",
        840: "var(--eight-forty)",
        850: "var(--eight-fifty)",
        860: "var(--eight-sixty)",
        870: "var(--eight-seventy)",
        880: "var(--eight-eighty)",
        890: "var(--eight-ninety)",
        900: "var(--nine)",
        910: "var(--nine-ten)",
        920: "var(--nine-twenty)",
        930: "var(--nine-thirty)",
        940: "var(--nine-forty)",
        950: "var(--nine-fifty)",
        960: "var(--nine-sixty)",
        970: "var(--nine-seventy)",
        980: "var(--nine-eighty)",
        990: "var(--nine-ninety)",
      },
      height: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      minHeight: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      maxHeight: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      width: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      maxWidth: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      minWidth: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      maxWidth: Object.assign(
        {},
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      padding: Object.assign(
        {
          "3xs": "var(--xxxs)",
          "2xs": "var(--xxs)",
          xs: "var(--xs)",
          sm: "var(--sm)",
          md: "var(--md)",
          lg: "var(--lg)",
          xl: "var(--xl)",
          "2xl": "var(--xxl)",
          "3xl": "var(--xxxl)",
          "4xl": "var(--xxxxl)",
          "5xl": "var(--xxxxxl)",
          "6xl": "var(--xxxxxxl)",
          "7xl": "var(--xxxxxxxl)",
        },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      gap: Object.assign(
        {
          "3xs": "var(--xxxs)",
          "2xs": "var(--xxs)",
          xs: "var(--xs)",
          sm: "var(--sm)",
          md: "var(--md)",
          lg: "var(--lg)",
          xl: "var(--xl)",
          "2xl": "var(--xxl)",
          "3xl": "var(--xxxl)",
          "4xl": "var(--xxxxl)",
          "5xl": "var(--xxxxxl)",
          "6xl": "var(--xxxxxxl)",
          "7xl": "var(--xxxxxxxl)",
        },
        ...Array.from({ length: 1000 }, (_, i) => ({
          [`${(i + 1) / 10}vh`]: `${(i + 1) / 10}vh`,
          [`${(i + 1) / 10}vw`]: `${(i + 1) / 10}vw`,
          [`${(i + 1) / 10}%`]: `${(i + 1) / 10}%`,
        }))
      ),
      borderRadius: {
        "3xs": "var(--xxxs)",
        "2xs": "var(--xxs)",
        xs: "var(--xs)",
        sm: "var(--sm)",
        md: "var(--md)",
        lg: "var(--lg)",
        xl: "var(--xl)",
        "2xl": "var(--xxl)",
        "3xl": "var(--xxxl)",
        "4xl": "var(--xxxxl)",
        "5xl": "var(--xxxxxl)",
        "6xl": "var(--xxxxxxl)",
        "7xl": "var(--xxxxxxxl)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      const newUtilities = {};

      Object.keys(theme.colors).forEach((colorKey) => {
        const baseColor = theme.colors[colorKey];
        for (let i = 0; i <= 90; i += 10) {
          const opacityClass = colorKey + i;
          const opacityValue = i / 100;
          newUtilities[`.bg-${opacityClass}`] = {
            backgroundColor: `${baseColor}`,
            opacity: `${opacityValue}`,
          };
        }
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
