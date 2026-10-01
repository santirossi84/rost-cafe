// Datos de contacto del local. El número de WhatsApp va por variable de entorno
// (VITE_WHATSAPP_NUMBER, solo dígitos con código de país, ej. 5493510000000).
export const direccion = 'Alvear 210, Ramona'
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `ROST Café, ${direccion}`,
)}`

export function whatsappUrl(mensaje = 'Hola ROST, quería hacer una consulta.') {
  const numero = import.meta.env.VITE_WHATSAPP_NUMBER || ''
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}
