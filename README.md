# ROST Café — Relaunch

Landing page y dashboard de menú interactivo para el tercer aniversario de ROST Café.

## Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/) vía `react-chartjs-2`
- [React Router](https://reactrouter.com/)

## Estructura

```
rost-cafe/
├── src/
│   ├── components/   # UI reutilizable (Navbar, Hero, ProductCard, SalesChart, ...)
│   ├── pages/        # Landing.jsx y MenuDashboard.jsx
│   ├── data/         # Mock data de productos, categorías y ventas
│   ├── services/     # Integración con webhooks de n8n
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # sirve el build de producción
npm run lint     # eslint
```

## Páginas

- **`/`** — Landing con hero, stats y categorías del menú.
- **`/menu`** — Dashboard interactivo con filtro por categoría, cards de producto y
  gráfico de top productos vendidos. Acepta `?categoria=<id>` para llegar con un
  filtro preseleccionado.

## Integración con n8n

`src/services/n8n.js` expone `triggerWebhook(path, payload)` para disparar
workflows de n8n (por ejemplo, registrar un pedido o una reserva). Configurá la
URL base del webhook con la variable de entorno `VITE_N8N_WEBHOOK_URL` en un
archivo `.env.local`:

```
VITE_N8N_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook
```

Si la variable no está definida, las llamadas se loguean en consola sin
romper la UI.

## Ver también

`AGENTS.md` para instrucciones dirigidas a agentes de IA que trabajen en este
repositorio.
