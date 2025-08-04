/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./componentsInProgress/**/*.{js,jsx,ts,tsx}",
    "./src/embeddable.com/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
      },
    },
  },
  plugins: [],
  // Ensure Tailwind doesn't conflict with existing styles
  corePlugins: {
    preflight: false,
  }
}

