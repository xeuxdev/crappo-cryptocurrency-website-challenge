/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
  ],

  theme: {
    screens: {
      xs: "376px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    colors: {
      light_bg: "hsl(220, 27%, 98%)",
      white: "hsl(0, 0%, 100%)",
      gray_6: "hsl(0, 0%, 95%)",
      gray_5: "hsl(0, 0%, 88%)",
      gray_4: "hsl(0, 0%, 74%)",
      gray_3: "hsl(0, 0%, 51%)",
      primary: "hsl(240, 54%, 11%)",
      secondary: "hsl(261, 88%, 23%)",
      accent: "hsl(220, 80%, 56%)",
    },
    fontFamily: {
      rubik: ["'Rubik', sans-serif"],
    },
    fontSize: {
      h1: ["4rem", { lineHeight: "150%", fontWeight: "bold" }],
      h2: ["2.5rem", { lineHeight: "150%", fontWeight: "bold" }],
      h3: ["2rem", { lineHeight: "150%", fontWeight: "bold" }],
      title_lg: ["2rem", { lineHeight: "150%", fontWeight: "500" }],
      title_sm: ["1rem", { lineHeight: "150%", fontWeight: "500" }],
      body_lg_md: ["1.25rem", { lineHeight: "150%", fontWeight: "500" }],
      body_lg_rg: ["1.25rem", { lineHeight: "150%", fontWeight: "400" }],
      body_st_md: ["1.125rem", { lineHeight: "150%", fontWeight: "500" }],
      body_st_rg: ["1.125rem", { lineHeight: "150%", fontWeight: "400" }],
      body_sm_md: ["1rem", { lineHeight: "150%", fontWeight: "500" }],
      body_sm_rg: ["1rem", { lineHeight: "1.75rem", fontWeight: "400" }],
    },
    extend: {
      dropShadow: {
        custom: "0px 20px 200px rgba(57, 23, 119, 0.15)",
      },
    },
  },
  plugins: [],
}
