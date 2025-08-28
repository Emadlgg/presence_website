import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="container-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primary"></div>
          <span className="font-display text-xl tracking-tight" style={{color:'#16367d'}}>PRessence</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services">Servicios</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="btn-primary">Empieza hoy</Link>
        </nav>
      </div>
    </header>
  )
}
