module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "wotfard-100": ["wotfardextralight", "sans-serif"],
      "wotfard-200": ["wotfardlight", "sans-serif"],
      "wotfard-300": ["wotfardregular", "sans-serif"],
      "wotfard-400": ["wotfardmedium", "sans-serif"],
      "wotfard-500": ["wotfardsemibold", "sans-serif"],
      "wotfard-thin": ["wotfardthin", "sans-serif"],
      "wotfard-bold": ["wotfardbold", "sans-serif"],
      "wotfard-100-i": ["wotfardextralight_italic", "sans-serif"],
      "wotfard-200-i": ["wotfardlight_italic", "sans-serif"],
      "wotfard-300-i": ["wotfardregular_italic", "sans-serif"],
      "wotfard-400-i": ["wotfardmedium_italic", "sans-serif"],
      "wotfard-500-i": ["wotfardsemibold_italic", "sans-serif"],
      "wotfard-thin-i": ["wotfardthin_italic", "sans-serif"],
      "wotfard-bold-i": ["wotfardbold_italic", "sans-serif"],
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
        "ui-aqua": "#8EC6C5",
        "ui-white": "#eef1f5",
      },
    },
  },
  plugins: [],
};
