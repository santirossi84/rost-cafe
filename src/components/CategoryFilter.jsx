export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onSelect('todos')}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          active === 'todos'
            ? 'bg-rost-cta text-base-950'
            : 'border border-white/10 text-slate-300 hover:border-rose-glow/40 hover:text-white'
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onSelect(category.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            active === category.id
              ? 'bg-rost-cta text-base-950'
              : 'border border-white/10 text-slate-300 hover:border-rose-glow/40 hover:text-white'
          }`}
        >
          {category.icon} {category.name}
        </button>
      ))}
    </div>
  )
}
