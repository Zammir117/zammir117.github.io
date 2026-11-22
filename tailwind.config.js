/**
 * Tailwind CSS v3.4 (Standalone CLI, sin Node).
 * Compilar (PowerShell, desde la carpeta pettypets-web):
 *   .\tailwindcss.exe -c .\tailwind.config.js -i .\src\input.css -o .\assets\css\styles.css --minify
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Teal oficial de la app PettyPets (Theme.kt: primary #00796B, degradado hasta #004D40).
        brand: {
          50: '#E0F2F1',
          100: '#D7F2EE',
          200: '#A7DCD5',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#00897B',
          600: '#00796B', // primario de la app: 5,3:1 sobre blanco (AA)
          700: '#00695C',
          800: '#005B50',
          900: '#004D40',
          950: '#00201C',
        },
        // Acento comercial de la app (Theme.kt: secondary / promo).
        promo: { DEFAULT: '#B83A1E', soft: '#FFE3D9' },
        ink: { DEFAULT: '#191C1C', soft: '#3F4947' },
        // Acentos por módulo: los de Tailwind ya coinciden con la paleta pedida
        // (emerald-500 #10B981, orange-500 #F97316, cyan-500 #06B6D4, red-500 #EF4444, violet-500 #8B5CF6).
      },
      fontFamily: {
        // Fuentes del sistema: cero descargas. En Android es Roboto, la misma de la app.
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: { site: '72rem' },
      boxShadow: {
        card: '0 1px 2px rgb(0 32 28 / 0.06), 0 4px 16px rgb(0 32 28 / 0.06)',
        phone: '0 30px 60px -20px rgb(0 32 28 / 0.45), 0 0 0 1px rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [],
};
