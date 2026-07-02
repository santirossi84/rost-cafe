const currencyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export default function ProductCard({ product }) {
  return (
    <article className="glass-card group flex flex-col overflow-hidden transition hover:border-rose-glow/40">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-rose-glow/10 to-cyan-glow/10 text-5xl">
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <span>☕</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-100">{product.name}</h3>
          {product.signature && (
            <span className="shrink-0 rounded-full border border-rose-glow/30 bg-rose-glow/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-rose-glow">
              Signature
            </span>
          )}
        </div>
        <p className="flex-1 text-sm text-slate-400">{product.description}</p>
        <p className="text-gradient text-lg font-semibold">
          {currencyFormatter.format(product.price)}
        </p>
      </div>
    </article>
  )
}
