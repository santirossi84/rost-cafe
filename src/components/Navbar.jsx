import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          ROST <span className="text-gradient">Café</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-300">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-white' : 'transition hover:text-white'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'transition hover:text-white'
            }
          >
            Menú
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
