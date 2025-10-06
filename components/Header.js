import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: '#16367D' }}
    >
      <div className="container-max flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full" style={{ backgroundColor: '#F4A300' }}></div>
          <span
            className="font-display text-xl tracking-tight"
            style={{ color: '#FFFFFF' }}
          >
            PRessence
          </span>
        </Link>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services" className="text-white hover:text-gray-200 transition-colors">
            Servicios
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
            Sobre Nosotras
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-200 transition-colors">
            Blog
          </Link>
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-full font-medium transition-colors"
            style={{
              backgroundColor: '#F4A300',
              color: '#16367D',
            }}
          >
            Empieza hoy
          </Link>
        </nav>
      </div>

      {/* Menú móvil (desplegable) */}
      {menuOpen && (
        <nav className="md:hidden bg-[#16367D] border-t border-white/20">
          <div className="container-max py-4 flex flex-col gap-4">
            <Link 
              href="/services" 
              className="text-white hover:text-gray-200 transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gray-200 transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nosotras
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:text-gray-200 transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full font-medium transition-colors text-center"
              style={{
                backgroundColor: '#F4A300',
                color: '#16367D',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Empieza hoy
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}