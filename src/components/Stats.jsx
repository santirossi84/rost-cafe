import { stats } from '../data/products.js'

export default function Stats() {
  return (
    <section className="mx-auto max-w-pagina px-6 pt-seccion sm:pt-seccion-lg">
      <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col border-t border-dorado pt-6">
            <dt className="order-2 mt-2 text-texto text-chocolate-suave">{stat.label}</dt>
            <dd className="order-1 font-condensado text-[40px] font-medium leading-none text-chocolate">
              {stat.value.toLocaleString('es-AR')}
              {stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
