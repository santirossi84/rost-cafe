import { direccion } from '../services/contact.js'

export default function Footer() {
  return (
    <footer className="border-t border-hilo px-6 py-10">
      <div className="mx-auto flex max-w-pagina flex-col gap-2 text-nota text-chocolate-suave sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ROST Café — Tercer aniversario.</p>
        <p>{direccion}</p>
      </div>
    </footer>
  )
}
