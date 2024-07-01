/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
    colors: {
      yellow: "#ECD444",
      red: "#FF715B",
      gray: "#ECE8EF",
      green: "#06D6A0",
      black: "#222222",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
};
