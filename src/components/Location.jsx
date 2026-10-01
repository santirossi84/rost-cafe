import { direccion, mapsUrl } from '../services/contact.js'

export default function Location() {
  return (
    <section id="como-llegar" className="mx-auto max-w-pagina px-6 pb-seccion sm:pb-seccion-lg">
      <div className="border-t border-hilo pt-8">
        <p className="etiqueta">Visitanos</p>
        <h2 className="punto-dorado mt-4 text-titulo sm:text-titulo-lg">Cómo llegar</h2>
        <p className="mt-4 text-bajada text-chocolate-suave sm:text-bajada-lg">{direccion}</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="boton-secundario mt-4">
          Abrir en Google Maps
        </a>
      </div>
    </section>
  )
}
