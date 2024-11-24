import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      keyframes: {
        translateY: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(-30px)" },
        },
      },
      animation: {
        "up-down": "translateY 5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
