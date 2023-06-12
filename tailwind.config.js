/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["var(--font-baloo_2)"],
        roboto: ["var(--font-roboto)"],
      },
      screens: {
        mob: "100px",
        tablet: "600px",
        pc: "1000px",
      },
      fontSize: {
        "3xs": 10,
        "2xs": 12,
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },

      colors: {
        brand: {
          "yellow-light": "#F1E9C9",
          yellow: "#DBAC2C",
          "yellow-dark": "#C47F17",
          "purple-light": "#EBE5F9",
          purple: "#8047F8",
          "purple-dark": "#4B2995",
        },
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574F4D",
          label: "#8D8686",
          hover: "#D7D5D5",
          button: "#E6E5E5",
          input: "#EDEDED",
          card: "#F3F2F2",
          background: "#FAFAFA",
          hr: "#E6E5E5",
        },
      },
    },
  },
  plugins: [],
};
