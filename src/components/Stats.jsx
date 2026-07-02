import { stats } from '../data/products.js'

export default function Stats() {
  return (
    <section className="mx-auto -mt-12 max-w-4xl px-6">
      <div className="glass-card grid grid-cols-1 gap-6 p-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-gradient text-3xl font-bold sm:text-4xl">
              {stat.value.toLocaleString('es-AR')}
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
