/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#f39e19',
        primaryBlue: '#16367d',
        lightBg: '#fdf3c0',
        lightBlue: '#d9faff',
        secondaryYellow: '#f9c737'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-montserrat)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
