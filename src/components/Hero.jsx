import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-rost-gradient px-6 pb-24 pt-28 text-center">
      <p className="mx-auto mb-4 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-rose-glow">
        Tercer aniversario
      </p>
      <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        Nuevo menú, <span className="text-gradient">misma pasión</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-slate-300">
        Tres años acompañando tus mañanas. Hoy celebramos con una carta renovada
        pensada para sorprenderte en cada visita.
      </p>
      <div className="mt-10 flex justify-center">
        <Link
          to="/menu"
          className="rounded-full bg-rost-cta px-8 py-3 text-sm font-semibold text-base-950 shadow-glow transition hover:scale-[1.03]"
        >
          Ver Menú Completo
        </Link>
      </div>
    </section>
  )
}
