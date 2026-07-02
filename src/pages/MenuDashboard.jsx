import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CategoryFilter from '../components/CategoryFilter.jsx'
import ProductCard from '../components/ProductCard.jsx'
import SalesChart from '../components/SalesChart.jsx'
import { categories, products } from '../data/products.js'

export default function MenuDashboard() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('categoria') || 'todos'
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Menú <span className="text-gradient">Interactivo</span>
        </h1>
        <p className="mt-2 text-slate-400">
          Filtrá por categoría y descubrí nuestra carta completa.
        </p>
      </div>

      <div className="mb-10">
        <CategoryFilter categories={categories} active={activeCategory} onSelect={setActiveCategory} />
      </div>

      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <SalesChart />
    </section>
  )
}
