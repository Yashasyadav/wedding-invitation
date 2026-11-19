/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        subtle: 'var(--subtle)',
        maroon: 'var(--maroon)',
        'deep-maroon': 'var(--deep-maroon)',
        gold: 'var(--gold)',
        'light-gold': 'var(--light-gold)',
        rose: 'var(--rose)',
        leaf: 'var(--leaf)',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'hero-arch': '0 30px 80px rgba(101, 11, 11, 0.44), 0 0 40px rgba(196, 154, 80, 0.08)',
        'seal': '0 10px 50px rgba(101, 11, 11, 0.85), 0 0 0 4px #8f1919, 0 0 0 5px #c49a50',
        'gold-button': '0 10px 22px rgba(101, 11, 11, 0.18)',
        'gold-button-hover': '0 13px 28px rgba(101, 11, 11, 0.28)',
        'arch-card': '0 16px 40px rgba(101, 11, 11, 0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c49a50, #d6b56d, #c49a50)',
      },
    },
  },
  plugins: [],
}
