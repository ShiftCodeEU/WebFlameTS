import { Config } from "tailwindcss";
import daisyui from "daisyui";

const tailwindcssConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMonoNerd: "var(--font-jetbrains-nerd)"
      },
      colors: {
        ThisIsInferno: "#dc0030"
      }
    }
  },
  plugins: [daisyui]
} satisfies Config;

export default tailwindcssConfig;
