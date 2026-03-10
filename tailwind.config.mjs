/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
        colors: {
            cielo: '#e4f0fa',
            rosita: '#fbe9eb',
            crema: '#fcfaf5',
            platino: '#b0b5bc',
            texto: '#2d3748',
        },
        fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            mono: ['"Fira Code"', 'monospace'],
        }
        },
    },
    plugins: [],
}