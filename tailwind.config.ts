import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        arial: ["var(--font-arial)"],
        foghe: ["var(--font-foghe)"],
        sofiapro: ["var(--font-sofiapro)"],
      },
      colors: {
        primary: "",
        secondary: "",
        graish: "#F6F6F6",
        accent: "#00FFE1",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        navsize: { max: "1180px" },
        tab: { max: "991px" },
        mob: { max: "768px" },
      },
    },
  },
  plugins: [],
};
export default config;
