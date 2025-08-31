import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      {/* Beneficios */}
      <section className="container-max py-16 rounded-2xl mt-10" style={{ backgroundColor: '#E6ECF8' }}>
        <h2 className="font-display text-3xl mb-6" style={{ color: '#16367D' }}>Beneficios principales</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['Visibilidad', 'Posicionamiento', 'Reputación', 'Networking'].map((b) => (
            <div key={b} className="card text-center">
              <div className="text-2xl mb-2">⭐</div>
              <div className="font-semibold">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Carrusel de servicios */}
      <section className="container-max py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-3xl" style={{ color: '#16367D' }}>Servicios</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 }
          }}
        >
          {[
            'Cobertura de eventos',
            'Redacción discursos estratégicos',
            'Asesoría de imagen',
            'Expresión persuasiva',
            'Fotografías profesionales',
            'Media training',
            'Estrategia de contenido digital',
            'Narrativa de impacto'
          ].map((s) => (
            <SwiperSlide key={s}>
              <div
                onClick={() => window.location.href = '/services'}
                className="cursor-pointer h-48 flex items-center justify-center text-lg font-semibold bg-white border-2 transition hover:shadow-lg"
                style={{ borderColor: '#16367D', color: '#16367D' }}
              >
                {s}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Quiénes somos */}
      <section className="section-gradient py-16">
        <div className="container-max grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-2xl mb-3" style={{ color: '#16367D' }}>Quiénes somos</h3>
            <p className="text-gray-700">
              Trabajamos con un Modelo de Bundling y enfoque Founder-Led Growth para construir marcas personales auténticas y poderosas.
            </p>
            <Link href="/about" className="text-primary mt-3 inline-block">Conócenos →</Link>
          </div>
          <div className="card min-h-[200px] flex items-center justify-center">Foto/ilustración</div>
        </div>
      </section>

      {/* Testimonios con borde azul */}
      <section className="section-gradient py-16">
        <div className="container-max">
          <h2 className="font-display text-3xl mb-8" style={{ color: '#16367D' }}>Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: '"Gracias a PRessence logré posicionarme como líder en mi sector."', author: 'Cliente 1' },
              { text: '"Su asesoría me dio claridad y proyección para mi marca personal."', author: 'Cliente 2' }
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 bg-white border-2 rounded-lg shadow-sm"
                style={{ borderColor: '#16367D' }}
              >
                <p className="italic text-gray-700">{t.text}</p>
                <p className="mt-4 font-semibold" style={{ color: '#16367D' }}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
