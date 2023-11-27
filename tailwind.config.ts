import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#dfcaff",
          secondary: "#00b200",
          accent: "#6f3f00",
          neutral: "#24151e",
          "base-100": "#f5fdff",
          info: "#008da6",
          success: "#00aa12",
          warning: "#985a00",
          error: "#ff0028",
          body: {
            // This way we can add a dark theme with a diff
            "background-color": "#dfcaff",
          },
        },
      },
    ],
  },
};
export default config;
