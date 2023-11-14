import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0058c9",
        secondary: "#0e97eb",
        pBlack: "#000000",
        pLight: "#ffffff",
        ligthText: "#f1f1f1",
        darkText: "#1e1e1e",
        dimLabel: "#6A6868",
        navDark: "#1f1f1f",
        withImage: "#afafaf",
        whiteOpacity: "#00000033",
        blackGradient: "#000000b3",
      },
      fontFamily: {
        sarpanch: ["Sarpanch", "sans-serif"],
        rubik: ["var(--font-rubik)", "sans-serif"],
        speed: ["Special-Speed-Agent", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xm: "890px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
export default config
