export default function Footer() {
  return (
    <footer className="mt-16 bg-primaryBlue text-white">
      <div className="container-max py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="font-display text-lg">PRessence</span>
          </div>
          <p className="text-sm mt-3 opacity-80">Be seen. Lead loud. Stay ahead.</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2">Menú</div>
          <ul className="space-y-1">
            <li><a href="/">Inicio</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/about">Sobre Nosotras</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2">Contacto</div>
          <ul className="space-y-1">
            <li><a href="mailto:contacto@pressence.com">contacto@pressence.com</a></li>
            <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs opacity-70 pb-6">© {new Date().getFullYear()} PRessence. Todos los derechos reservados.</div>
    </footer>
  )
}
