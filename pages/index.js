import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const services = [
    {
      title: 'Cobertura de eventos',
      description: 'Documentación profesional que refleja tu liderazgo',
      type: 'video',
      src: '/videos/eventos.mp4'
    },
    {
      title: 'Redacción de discursos estratégicos',
      description: 'Mensajes que inspiran y generan impacto',
      type: 'video',
      src: '/videos/discursos.mp4'
    },
    {
      title: 'Asesoría de imagen',
      description: 'Estilo profesional alineado a tus objetivos',
      type: 'video',
      src: '/videos/asesoria.mp4'
    },
    {
      title: 'Expresión persuasiva',
      description: 'Comunicación efectiva para influir',
      type: 'image',
      src: '/images/expresion.jpg'
    },
    {
      title: 'Fotografías profesionales',
      description: 'Retratos que proyectan autoridad',
      type: 'image',
      src: '/images/fotografias.jpg'
    },
    {
      title: 'Media training',
      description: 'Preparación para medios de comunicación',
      type: 'image',
      src: '/images/media-training.jpg'
    },
    {
      title: 'Estrategia de contenido digital',
      description: 'Presencia digital coherente y estratégica',
      type: 'video',
      src: '/videos/contenido.mp4'
    },
    {
      title: 'Narrativa de impacto',
      description: 'Mensajes clave que definen tu marca',
      type: 'image',
      src: '/images/narrativa.jpg'
    }
  ]

  const benefits = [
    {
      title: 'Visibilidad',
      description: 'Incrementa tu presencia y reconocimiento en tu industria',
      icon: '👁️'
    },
    {
      title: 'Posicionamiento',
      description: 'Establécete como referente en tu área de expertise',
      icon: '🎯'
    },
    {
      title: 'Reputación',
      description: 'Construye credibilidad y confianza con tu audiencia',
      icon: '⭐'
    },
    {
      title: 'Networking',
      description: 'Conecta con líderes y decisores clave',
      icon: '🤝'
    }
  ]

  return (
    <>
      <Head>
        <title>PRessence - Be seen. Lead loud. Stay ahead.</title>
      </Head>
      <Header />
      <Hero />

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container-max"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
              Resultados tangibles
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-4" style={{ color: '#16367D' }}>
              Beneficios de una marca personal sólida
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-xl mb-3" style={{ color: '#16367D' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Servicios destacados */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
              Soluciones estratégicas
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-4" style={{ color: '#16367D' }}>
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos un conjunto integral de servicios diseñados para construir y fortalecer tu marca personal
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="mb-12"
          >
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                <div className="relative h-80 rounded-xl overflow-hidden shadow-soft group cursor-pointer">
                  {service.type === 'image' ? (
                    <Image
                      src={service.src}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      src={service.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-xl md:text-2xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 rounded-full font-semibold shadow-soft hover:shadow-lg transition-all"
              style={{ backgroundColor: '#16367D', color: '#FFFFFF' }}
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>

        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #16367D;
            opacity: 0.3;
          }
          .swiper-pagination-bullet-active {
            background: #F2994A;
            opacity: 1;
          }
        `}</style>
      </section>

      {/* Quiénes somos */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container-max"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
                Nuestra historia
              </span>
              <h3 className="font-display text-3xl md:text-4xl mt-4 mb-6" style={{ color: '#16367D' }}>
                Quiénes somos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Somos una boutique especializada en el desarrollo de marcas personales para fundadores y líderes visionarios. Trabajamos con un modelo de <strong>Bundling</strong> y enfoque <strong>Founder-Led Growth</strong> para construir marcas personales auténticas y poderosas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro equipo combina experiencia en comunicación estratégica, relaciones públicas e imagen profesional para ofrecer soluciones integrales y personalizadas.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center font-semibold hover:underline"
                style={{ color: '#F2994A' }}
              >
                Conoce más sobre nosotras
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src="/images/quienes-somos.jpg"
                  alt="Quiénes somos"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonios */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
              Casos de éxito
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-4" style={{ color: '#16367D' }}>
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Me acompañaron en aspectos claves para el lanzamiento. Tranquilamente disfruté del evento y compartí con los invitados. Me siento afortunada de haberlas encontrado en ese momento.",
                author: "Silvia Monzón",
                role: "Fundadora de Convicción Leasing"
              },
              {
                quote: "Las chicas fueron súper ordenadas en la metodología. Inmediatamente incrementé seguidores e hice conexiones nuevas.",
                author: "Vany Argueta",
                role: "Project Manager en CMI"
              },
              {
                quote: "El servicio que brindan es de primera calidad. Nosotros no tuvimos nada que decirles, todo estaba controlado por ellas.",
                author: "Roberto Morales",
                role: "Presidente de GRENAT"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-soft"
              >
                <div className="text-3xl mb-4" style={{ color: '#F2994A' }}>❝</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t pt-4" style={{ borderColor: '#E6ECF8' }}>
                  <p className="font-semibold" style={{ color: '#16367D' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container-max"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-xl">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              ¿Lista para construir tu marca personal?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda tu sesión de diagnóstico gratuita y descubre cómo podemos ayudarte a destacar en tu industria
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              style={{ backgroundColor: '#F2994A', color: '#FFFFFF' }}
            >
              Agenda tu diagnóstico →
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}