import { Link } from 'react-router-dom'

// Portada: foto propia a sangre con velo chocolate al 35%. Mientras no haya foto,
// se muestra el fondo chocolate. Para sumarla: poné la imagen en public/images/portada.jpg
// y pasá heroImage="/images/portada.jpg".
export default function Hero({ heroImage }) {
  return (
    <section
      className="relative isolate overflow-hidden bg-chocolate py-24 sm:py-32"
      style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {heroImage && <div className="absolute inset-0 -z-10 bg-chocolate/35" aria-hidden="true" />}
      <div className="mx-auto max-w-pagina px-6">
        <p className="etiqueta !text-blanco/80">Café de especialidad · Ramona</p>
        <h1 className="mt-6 max-w-3xl font-condensado text-portada text-blanco sm:text-portada-lg">
          Café de especialidad y pastelería artesanal<span className="text-dorado">.</span>
        </h1>
        <p className="mt-6 max-w-lectura text-bajada text-blanco/90 sm:text-bajada-lg">
          Tres años acompañando tus mañanas. Hoy celebramos con una carta renovada.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2">
          <Link
            to="/menu"
            className="inline-flex min-h-[48px] items-center rounded-boton bg-papel px-[22px] py-[14px] text-[17px] font-medium text-chocolate"
          >
            Ver la carta
          </Link>
          <a
            href="#como-llegar"
            className="inline-flex min-h-[48px] items-center text-[17px] font-medium text-blanco underline decoration-dorado decoration-1 underline-offset-4"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}
