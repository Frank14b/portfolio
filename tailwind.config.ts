import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryBlack: {
        50: "#F2F6FF",
        100: "#E3EBFB",
        200: "#BFD4FF",
        300: "#95B8FF",
        400: "#95B8FF",
        500: "#001540",
        600: "#121212d9",
        700: "#051E51",
        800: "#041332",
        900: "#000715",
      }
    }
  },
  plugins: [],
});

export default config;