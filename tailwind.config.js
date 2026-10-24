/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind doit analyser le HTML d'entrée et tous les composants source.
  // Les extensions TS/TSX sont incluses pour éviter de perdre les classes si
  // des composants TypeScript sont ajoutés plus tard.
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { violet: { brand: '#8B5CF6', soft: '#C4B5FD' } } } },
  plugins: []
}
