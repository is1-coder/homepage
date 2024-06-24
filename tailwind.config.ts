import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
      },
      fontFamily: {
        noto: ["Noto Sans Jp", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      screens: {
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
