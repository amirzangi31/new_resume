import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {

      screens: {
        '2xl': '1100px',
      }
    }
    ,
    extend: {
      colors: {
        "bg-body": "#0F0F0F",
        "text-primary": "#9f9f9f",
        primary: "#323232",
        secondary: "#5B78F6",
      },
      keyframes: {
        logo: {
          "0%": {
            transform: "translateY(-100%) scale(1.5)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translateY(0px) scale(1)",
            opacity: "1",
          },
        }
      },
      animation: {
        logo: "logo 1s ease-out both",
      }
    },

  },
  plugins: [],
}
export default config;
