/** @type {import('tailwindcss').Config} */
// Tokens del sistema de diseño de ROST Café (ver DESIGN.md).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        papel: '#FFFEFB',
        blanco: '#FFFFFF',
        chocolate: {
          DEFAULT: '#331F13',
          suave: '#5A4636',
          niebla: '#8C7B6E',
        },
        dorado: {
          DEFAULT: '#BF935E',
          profundo: '#8A6A45',
        },
        salvia: {
          DEFAULT: '#86986B',
          profunda: '#56673F',
          niebla: '#F1F3EC',
        },
        hilo: '#E7E1D8',
        cereza: '#D75730',
      },
      fontFamily: {
        titulo: ['Barlow', 'system-ui', 'sans-serif'],
        condensado: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
        etiqueta: ['"Josefin Sans"', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        firma: ['Yellowtail', 'cursive'],
      },
      fontSize: {
        nota: ['15px', { lineHeight: '1.5' }],
        texto: ['18px', { lineHeight: '1.65' }],
        bajada: ['19px', { lineHeight: '1.5' }],
        'bajada-lg': ['21px', { lineHeight: '1.5' }],
        'titulo-chico': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'titulo-chico-lg': ['25px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        titulo: ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'titulo-lg': ['34px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        portada: ['42px', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'portada-lg': ['68px', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        etiqueta: ['13px', { lineHeight: '1.4', letterSpacing: '0.28em' }],
      },
      maxWidth: {
        pagina: '1200px',
        lectura: '640px',
      },
      borderRadius: {
        tarjeta: '20px',
        boton: '10px',
        campo: '12px',
      },
      boxShadow: {
        tarjeta: '0 6px 27px rgba(51, 31, 19, 0.07)',
      },
      spacing: {
        seccion: '80px',
        'seccion-lg': '120px',
      },
    },
  },
  plugins: [],
}
