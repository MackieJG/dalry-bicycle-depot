/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      background: "#1f1f21",
      pink: "#f077c2",
      green: "14C39B",
      white: "#e2e8f0",
      yellow: "#facc15",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
