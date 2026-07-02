import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'

export default function MenuCategories() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Nuestro <span className="text-gradient">Menú</span>
        </h2>
        <p className="mt-3 text-slate-400">Explorá las categorías de nuestra nueva carta.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/menu?categoria=${category.id}`}
            className="glass-card group flex flex-col items-center gap-3 p-8 text-center transition hover:border-rose-glow/40 hover:bg-white/[0.06]"
          >
            <span className="text-4xl">{category.icon}</span>
            <span className="font-medium text-slate-100 group-hover:text-white">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to="/menu"
          className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-rose-glow/60 hover:text-white"
        >
          Ver Menú Completo
        </Link>
      </div>
    </section>
  )
}
