import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0A2540",
          aqua: "#00B4D8",
          mist: "#F5F7FB"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      backgroundImage: {
        "water-wash": "radial-gradient(circle at 20% 20%, rgba(0,180,216,0.2), transparent 60%), radial-gradient(circle at 80% 0%, rgba(10,37,64,0.35), transparent 55%)"
      },
      boxShadow: {
        glass: "0 8px 30px rgba(10, 37, 64, 0.15)"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem"
      }
    }
  },
  plugins: []
};

export default config;
