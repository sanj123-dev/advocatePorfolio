// tailwind.config.js
export default {
  content: [
    "./index.html",                 // ✅ include HTML root file
    "./src/**/*.{js,ts,jsx,tsx}",   // ✅ include all React + TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
