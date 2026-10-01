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
      backgroundColor: '#331F13',
      hoverBackgroundColor: '#BF935E',
      borderRadius: 4,
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
      backgroundColor: '#331F13',
      borderColor: '#E7E1D8',
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      ticks: { color: '#5A4636', font: { family: 'Barlow', size: 14 } },
      grid: { display: false },
    },
    y: {
      ticks: { color: '#5A4636', font: { family: 'Barlow', size: 14 } },
      grid: { color: '#E7E1D8' },
    },
  },
}

export default function SalesChart() {
  return (
    <div className="tarjeta p-6 sm:p-8">
      <h3 className="mb-4 text-titulo-chico">Top productos vendidos</h3>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}
