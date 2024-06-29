/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color": "#242254",
        "font-color": "#03014C",
        "red-upschool": "#d71a5f",
        "red-custom": "#BC0D4D",
        "pink-upschool": "#BB3860",
        // light mode
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
    },
    // dark mode
    "dark-tremor": {
      brand: {
        faint: "#0B1229",
        muted: colors.blue[950],
        subtle: colors.blue[800],
        DEFAULT: colors.blue[500],
        emphasis: colors.blue[400],
        inverted: colors.blue[950],
      },
      background: {
        muted: "#131A2B",
        subtle: colors.gray[800],
        DEFAULT: colors.gray[900],
        emphasis: colors.gray[300],
      },
      border: {
        DEFAULT: colors.gray[700],
      },
      ring: {
        DEFAULT: colors.gray[800],
      },
      content: {
        subtle: colors.gray[600],
        DEFAULT: colors.gray[500],
        emphasis: colors.gray[200],
        strong: colors.gray[50],
        inverted: colors.gray[950],
      },
    },
  },
  boxShadow: {
    // light
    "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "tremor-card":
      "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "tremor-dropdown":
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    // dark
    "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "dark-tremor-card":
      "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "dark-tremor-dropdown":
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  borderRadius: {
    "tremor-small": "0.375rem",
    "tremor-default": "0.5rem",
    "tremor-full": "9999px",
  },
  fontSize: {
    "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
    "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
    "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
    "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
  },
  fontFamily: {
    lexend: ["Lexend", "sans-serif"],
    roboto: ["Roboto", "sans-serif"],
    check: ['"Pixelify Sans"', "sans-serif"],
    anton: ["'Anton'", "sans-serif"],
    didact: ["'Didact Gothic'", "sans-serif"],
    caveat: ["Caveat", "cursive"],
    poppins: ["Poppins", "sans-serif"],
    nunito: ["Nunito Sans", "sans-serif"],
    annieUseYourTelescope: ['"Annie Use Your Telescope"', "cursive"],
    kumbh: ["Kumbh Sans", "sans-serif"],
    greatvibes: ["Great Vibes", "sans-serif"],
  },
  flexGrow: {
    2: "2",
    3: "3",
    4: "4",
    5: "5",
  },
  flexShrink: {
    2: "2",
    3: "3",
  },
  gridTemplateColumns: {
    12: "repeat(12,minmax(0,1fr))",
    13: "repeat(13,minmax(0,1fr))",
    14: "repeat(14,minmax(0,1fr))",
    15: "repeat(15,minmax(0,1fr))",
    16: "repeat(16,minmax(0,1fr))",
  },
  gridTemplateRows: {
    7: "repeat(7,minmax(0,1fr))",
    8: "repeat(8,minmax(0,1fr))",
    9: "repeat(9,minmax(0,1fr))",
    10: "repeat(10,minmax(0,1fr))",
    11: "repeat(11,minmax(0,1fr))",
    12: "repeat(12,minmax(0,1fr))",
    13: "repeat(13,minmax(0,1fr))",
    15: "repeat(15,minmax(0,1fr))",
    16: "repeat(16,minmax(0,1fr))",
  },
  gridRow: {
    "span-7": "span 7/ span 7",
    "span-8": "span 8/ span 8",
    "span-9": "span 9/ span 9",
    "span-10": "span 10/ span 10",
  },
  gridRowStart: {
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
  },
  gridColumnStart: {
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
  },
  gridColumnEnd: {
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
  },
  screens: {
    tab: "900px",
    // => @media (min-width: 900px) { ... }
    ms: "320px",
    xss: "340px",
    xs: "420px",
    xm: "540px",
    1450: "1450px",
    1520: "1520px",
    xxxl: "1850px",
    xlarge: "1920px",
    xxlarge: "2560px",
  },
  aspectRatio: {
    "2/1": "2 / 1",
  },
},
  },
darkMode: "class",
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
    plugins: [require("@headlessui/tailwindcss"), require("@tailwindcss/forms")],
};
