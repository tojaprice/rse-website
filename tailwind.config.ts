import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rs-gray": "#616365",
        "rs-green": "#69bd28",
        "rs-blue": "#39b9e9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
