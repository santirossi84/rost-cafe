import { Link, NavLink } from 'react-router-dom'
import { whatsappUrl } from '../services/contact.js'

const linkClass = ({ isActive }) =>
  `inline-flex min-h-[48px] items-center text-base font-medium text-chocolate ${
    isActive ? 'underline decoration-dorado decoration-1 underline-offset-8' : 'hover:text-chocolate-suave'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hilo bg-papel">
      <nav className="mx-auto flex max-w-pagina items-center justify-between gap-4 px-6 py-3">
        <Link to="/" aria-label="ROST Café, inicio" className="flex min-h-[48px] items-center">
          {/* Placeholder: reemplazar public/logo-rost.svg por el logo oficial */}
          <img src="/logo-rost.svg" alt="ROST Café" className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            <NavLink to="/" end className={linkClass}>
              Inicio
            </NavLink>
            <NavLink to="/menu" className={linkClass}>
              Carta
            </NavLink>
          </div>
          <a href={whatsappUrl()} className="boton-primario" target="_blank" rel="noreferrer">
            Pedí por WhatsApp
          </a>
        </div>
      </nav>
      <div className="flex justify-center gap-6 border-t border-hilo sm:hidden">
        <NavLink to="/" end className={linkClass}>
          Inicio
        </NavLink>
        <NavLink to="/menu" className={linkClass}>
          Carta
        </NavLink>
      </div>
    </header>
  )
}
