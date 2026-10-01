# AGENTS.md

Instrucciones para agentes de IA (Claude Code y similares) que trabajen en este
repositorio.

## Contexto del proyecto

ROST Café está relanzando su web para el tercer aniversario: nueva landing page
y un dashboard de menú interactivo con filtros por categoría. La identidad
visual (tema claro, estilo revista) está definida en `DESIGN.md`: leelo antes de
tocar estilos.

## Stack y convenciones

- **React + Vite**, componentes funcionales con hooks. No se usa TypeScript.
- **Tailwind CSS** para estilos. Los tokens de marca (colores, tipografías,
  radios, sombra) viven en `tailwind.config.js` y siguen `DESIGN.md` —
  reutilizalos en vez de escribir valores arbitrarios sueltos (`bg-[#...]`)
  (`bg-papel`, `text-chocolate`, `.boton-primario`, `.tarjeta`, `.etiqueta`, etc.).
- **Chart.js** vía `react-chartjs-2` para visualizaciones. Registrar solo los
  elementos de Chart.js que se usan (ver `SalesChart.jsx`).
- **React Router** para navegación entre `/` (landing) y `/menu` (dashboard).
- Datos de productos, categorías y ventas son mock y viven en
  `src/data/products.js`. Al conectar un backend real, reemplazar esos mocks
  por fetch/hooks manteniendo la misma forma de datos para no romper los
  componentes que los consumen.

## Integración con n8n

Los webhooks salientes deben pasar por `src/services/n8n.js`
(`triggerWebhook(path, payload)`), que respeta `VITE_N8N_WEBHOOK_URL`. No
hardcodear URLs de n8n en componentes.

## Antes de dar por terminada una tarea

1. `npm run build` debe pasar sin errores.
2. `npm run lint` debe pasar sin errores nuevos.
3. Si el cambio es visual, levantar `npm run dev` y verificar en navegador
   (o con captura de pantalla) que se respeta `DESIGN.md` entre landing y
   carta (tema claro, sin degradados, sin negritas en títulos, sin emojis,
   carta sin precios).

## Qué evitar

- No introducir CSS-in-JS ni librerías de estilos alternativas a Tailwind.
- No añadir dependencias pesadas (UI kits completos, animación 3D, etc.) sin
  que el pedido lo justifique explícitamente.
- No commitear `.env` ni credenciales de n8n.
