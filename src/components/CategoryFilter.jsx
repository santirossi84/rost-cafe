const base =
  'inline-flex min-h-[48px] items-center rounded-full px-5 text-[17px] font-medium transition-colors'
const on = 'bg-chocolate text-blanco'
const off = 'border border-hilo text-chocolate hover:border-dorado'

export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onSelect('todos')}
        aria-pressed={active === 'todos'}
        className={`${base} ${active === 'todos' ? on : off}`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onSelect(category.id)}
          aria-pressed={active === category.id}
          className={`${base} ${active === category.id ? on : off}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
