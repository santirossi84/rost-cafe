export const categories = [
  { id: 'cafe', name: 'Café de especialidad' },
  { id: 'pasteleria', name: 'Pastelería' },
  { id: 'brunch', name: 'Brunch' },
  { id: 'bebidas-frias', name: 'Bebidas frías' },
]

export const products = [
  {
    id: 1,
    name: 'Flat White Signature',
    category: 'cafe',
    description: 'Doble shot de espresso con leche vaporizada en microespuma sedosa.',
    image: '',
    signature: true,
  },
  {
    id: 2,
    name: 'Cold Brew ROST',
    category: 'cafe',
    description: 'Extracción en frío 18 horas, notas a chocolate y cítricos.',
    image: '',
    signature: true,
  },
  {
    id: 3,
    name: 'Cortado Clásico',
    category: 'cafe',
    description: 'Espresso cortado con leche en partes iguales.',
    image: '',
  },
  {
    id: 4,
    name: 'Medialuna de Manteca',
    category: 'pasteleria',
    description: 'Hojaldrada, horneada todas las mañanas.',
    image: '',
  },
  {
    id: 5,
    name: 'Cheesecake de Frutos Rojos',
    category: 'pasteleria',
    description: 'Base de galleta, cremoso de queso y coulis casero.',
    image: '',
    signature: true,
  },
  {
    id: 6,
    name: 'Avocado Toast',
    category: 'brunch',
    description: 'Pan de masa madre, palta, huevo poché y semillas tostadas.',
    image: '',
  },
  {
    id: 7,
    name: 'Bowl de Yogur y Granola',
    category: 'brunch',
    description: 'Yogur griego, granola casera, miel y frutas de estación.',
    image: '',
  },
  {
    id: 8,
    name: 'Iced Matcha Latte',
    category: 'bebidas-frias',
    description: 'Matcha ceremonial batido con leche a elección sobre hielo.',
    image: '',
    signature: true,
  },
  {
    id: 9,
    name: 'Limonada de Jengibre',
    category: 'bebidas-frias',
    description: 'Limón exprimido, jengibre fresco y un toque de menta.',
    image: '',
  },
]

export const stats = [
  { id: 'clientes', label: 'Clientes felices', value: 48000, suffix: '+' },
  { id: 'anios', label: 'Años de historia', value: 3, suffix: '' },
  { id: 'productos', label: 'Productos signature', value: 12, suffix: '' },
]

export const salesData = {
  labels: products.filter((p) => p.signature).map((p) => p.name),
  values: [420, 385, 310, 260],
}
