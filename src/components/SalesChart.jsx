import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { salesData } from '../data/products.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const data = {
  labels: salesData.labels,
  datasets: [
    {
      label: 'Unidades vendidas (mes)',
      data: salesData.values,
      backgroundColor: 'rgba(255, 107, 157, 0.55)',
      hoverBackgroundColor: 'rgba(94, 234, 212, 0.65)',
      borderRadius: 8,
      maxBarThickness: 48,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#17181f',
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      ticks: { color: '#94a3b8' },
      grid: { display: false },
    },
    y: {
      ticks: { color: '#94a3b8' },
      grid: { color: 'rgba(255,255,255,0.06)' },
    },
  },
}

export default function SalesChart() {
  return (
    <div className="glass-card p-6">
      <h3 className="mb-4 font-semibold text-slate-100">Top productos vendidos</h3>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}
