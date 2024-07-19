/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        lightGrayColor: "var(--light-gray)",
        grayColor: "var(--gray-color)",
        bgColor: "var(--bg-color)",
      },
    },
  },
  plugins: [],
};
