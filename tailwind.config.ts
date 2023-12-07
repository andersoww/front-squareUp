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
        Grey: {
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          90: "#E6E6E6",
        },
        Green: {
          50: "#9EFF00",
          70: "#C5FF66",
          80: "#C5FF66",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const blendModeUtilities = {
        ".blend-mode-multiply": {
          mixBlendMode: "multiply",
        },
        // Adicione mais classes conforme necessário para outros modos de mesclagem
      };

      addUtilities(blendModeUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
