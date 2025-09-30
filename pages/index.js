import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import { motion } from 'framer-motion'


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
            { title: 'Cobertura de eventos', type: 'video', src: '/videos/eventos.mp4' },
            { title: 'Redacción discursos estratégicos', type: 'video', src: '/videos/discursos.mp4' },
            { title: 'Asesoría de imagen', type: 'video', src: '/videos/asesoria.mp4' },
            { title: 'Expresión persuasiva', type: 'image', src: '/images/expresion.jpg' },
            { title: 'Fotografías profesionales', type: 'image', src: '/images/fotografias.jpg' },
            { title: 'Media training', type: 'image', src: '/images/media-training.jpg' },
            { title: 'Estrategia de contenido digital', type: 'video', src: '/videos/contenido.mp4' },
            { title: 'Narrativa de impacto', type: 'image', src: '/images/narrativa.jpg' }
          ].map((s) => (
            <SwiperSlide key={s.title}>
              <div
                onClick={() => window.location.href = '/services'}
                className="relative cursor-pointer h-64 rounded-lg overflow-hidden group"
              >
                {/* Imagen o Video dinámico */}
                {s.type === 'image' ? (
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <video
                    src={s.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

                {/* Texto animado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-white text-xl font-semibold text-center px-4"
                  >
                    {s.title}
                  </motion.h3>
                </div>
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
          <div className="card min-h-[200px] flex items-center justify-center overflow-hidden relative">
            <Image
              src="/images/quienes-somos.jpg"
              alt="Quiénes somos"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Testimonios con borde azul */}
      <section className="section-gradient py-16">
        <div className="container-max">
          <h2 className="font-display text-3xl mb-8" style={{ color: '#16367D' }}>Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonio Silvia */}
            <div
              className="p-6 bg-white border-2 rounded-lg shadow-sm"
              style={{ borderColor: '#16367D' }}
            >
              <p className="italic text-gray-700">“Me acompañaron en aspectos claves para el lanzamiento.”</p>
              <p className="italic text-gray-700 mt-2">“Tranquilamente disfruté del evento y compartí con los invitados.”</p>
              <p className="italic text-gray-700 mt-2">“Me siento afortunada de haberlas encontrado en ese momento.”</p>
              <p className="mt-4 font-semibold" style={{ color: '#16367D' }}>— Silvia Monzón, fundadora de Convicción Leasing</p>
            </div>

            {/* Testimonio Vany */}
            <div
              className="p-6 bg-white border-2 rounded-lg shadow-sm"
              style={{ borderColor: '#16367D' }}
            >
              <p className="italic text-gray-700">“Las chicas fueron súper ordenadas en la metodología.”</p>
              <p className="italic text-gray-700 mt-2">“Inmediatamente incrementé seguidores e hice conexiones nuevas.”</p>
              <p className="mt-4 font-semibold" style={{ color: '#16367D' }}>— Vany Argueta, gerente de área en Pollo Campero / Project Manager en CMI</p>
            </div>

            {/* Testimonio Roberto */}
            <div
              className="p-6 bg-white border-2 rounded-lg shadow-sm"
              style={{ borderColor: '#16367D' }}
            >
              <p className="italic text-gray-700">“El servicio que brindan es de primera calidad. Nosotros no tuvimos nada que decirles, todo estaba controlado por ellas.”</p>
              <p className="mt-4 font-semibold" style={{ color: '#16367D' }}>— Roberto Morales, presidente de la gremial de recursos naturales, minas y canteras (GRENAT)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
