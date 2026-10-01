import { whatsappUrl } from '../services/contact.js'

// La carta de la web va sin precios (ver DESIGN.md).
export default function ProductCard({ product }) {
  return (
    <article className="flex flex-col">
      <div className="aspect-[4/5] overflow-hidden rounded-tarjeta border border-hilo bg-salvia-niebla">
        {product.image && (
          <img src={product.image} alt={product.imageAlt || product.name} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 pt-4">
        {product.signature && <p className="etiqueta">De la casa</p>}
        <h3 className="text-titulo-chico sm:text-titulo-chico-lg">{product.name}</h3>
        <p className="flex-1 text-chocolate-suave">{product.description}</p>
        <a
          href={whatsappUrl(`Hola ROST, quería pedir: ${product.name}`)}
          target="_blank"
          rel="noreferrer"
          className="boton-secundario self-start"
        >
          Pedilo
        </a>
      </div>
    </article>
  )
}
