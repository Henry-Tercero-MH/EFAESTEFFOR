/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F2D',
          light: '#4A7B4B',
          dark: '#1A4A1B',
        },
        secondary: {
          DEFAULT: '#97715B',
          light: '#B89985',
          dark: '#7A5A47',
        },
        accent: {
          DEFAULT: '#F4A259',
          light: '#F7BB86',
          dark: '#E68A38',
        },
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}