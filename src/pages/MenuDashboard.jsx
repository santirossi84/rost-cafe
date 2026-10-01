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
    <section className="mx-auto max-w-pagina px-6 py-seccion sm:py-seccion-lg">
      <div className="mb-8">
        <p className="etiqueta">La carta</p>
        <h1 className="punto-dorado mt-4 text-titulo sm:text-titulo-lg">Nuestra carta</h1>
        <p className="mt-4 max-w-lectura text-bajada text-chocolate-suave sm:text-bajada-lg">
          Filtrá por categoría y descubrí todo lo que preparamos.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter categories={categories} active={activeCategory} onSelect={setActiveCategory} />
      </div>

      <div className="mb-seccion grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <SalesChart />
    </section>
  )
}
