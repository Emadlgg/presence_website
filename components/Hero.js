import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-lightBg">
      <div className="container-max py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6" style={{color:'#16367d'}}>
            Be seen. <span className="text-primary">Lead loud.</span> Stay ahead.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            PRessence es una boutique dedicada a impulsar la huella única de cada fundador.
            Transformamos su historia, experiencia y visión en una marca personal sólida que inspire confianza,
            genere influencia y abra puertas a nuevas oportunidades.
          </p>
          <Link href="/contact" className="btn-primary">Empieza hoy</Link>
        </div>
        <div className="card min-h-[260px] flex items-center justify-center">
          <span className="badge">Imagen/Video de alto impacto</span>
        </div>
      </div>
    </section>
  )
}
