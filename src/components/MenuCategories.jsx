import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'

export default function MenuCategories() {
  return (
    <section className="mx-auto max-w-pagina px-6 py-seccion sm:py-seccion-lg">
      <p className="etiqueta">La carta</p>
      <h2 className="punto-dorado mt-4 text-titulo sm:text-titulo-lg">Nuestra carta</h2>
      <p className="mt-4 max-w-lectura text-bajada text-chocolate-suave sm:text-bajada-lg">
        Explorá las categorías de la carta renovada.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/menu?categoria=${category.id}`}
              className="tarjeta flex h-full min-h-[120px] flex-col justify-between p-6 transition-colors hover:border-dorado sm:p-8"
            >
              <span className="text-titulo-chico sm:text-titulo-chico-lg">{category.name}</span>
              <span className="mt-6 text-[17px] font-medium underline decoration-dorado decoration-1 underline-offset-4">
                Ver
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to="/menu" className="boton-primario">
          Ver la carta completa
        </Link>
      </div>
    </section>
  )
}
