module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["wotfard", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Manrope", "sans-serif"],
    },
    extend: {
      gap: {
        11: "1rem",
      },
      backgroundImage: {
        hero: "url('/assets/FujiRecipeTesting_Nov 24 2021-0028.webp?jpg')",
      },
      colors: {
        "ui-blue": "#a1d9ff",
        "ui-purple": "#8566AA",
        "ui-pink": "#FF5F7E",
        "ui-orange": "#FFAB4C",
        "ui-navy": "#142F43",
        "ui-white": "#F7ECDE",
        "ui-aqua": "#8EC6C5",
      },
    },
  },
  plugins: [],
};
