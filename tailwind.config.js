module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Manrope", "sans-serif"],
      body: ["Open Sans"],
    },
    extend: {
      gap: {
        11: "1rem",
      },
      backgroundImage: {
        hero: "url('/assets/FujiRecipeTesting_Nov 24 2021-0028.webp?jpg')",
      },
    },
  },
  plugins: [],
};
