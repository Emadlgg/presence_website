import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: '#16367D' }} // Fondo azul
    >
      <div className="container-max flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full" style={{ backgroundColor: '#F4A300' }}></div>
          <span
            className="font-display text-xl tracking-tight"
            style={{ color: '#FFFFFF' }} // Texto blanco
          >
            PRessence
          </span>
        </Link>

        {/* Menú de navegación */}
        <nav className="flex items-center gap-6 text-sm">
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
              backgroundColor: '#F4A300', // Anaranjado
              color: '#16367D', // Texto azul
            }}
          >
            Empieza hoy
          </Link>
        </nav>
      </div>
    </header>
  )
}
