/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apfel: ['var(--font-apfel-grotezk-fett)', 'sans-serif'],
        euclidMedium: ['var(--font-euclid-circular-medium)', 'sans-serif'],
        euclidRegular: ['var(--font-euclid-circular-regular)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
