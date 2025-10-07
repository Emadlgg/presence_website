import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const services = [
    {
      title: 'Cobertura de eventos',
      description: 'Fotografías y video profesional para potenciar tu presencia en LinkedIn y otros canales. Capturamos los momentos clave que reflejan tu liderazgo y profesionalismo.',
      icon: '📸',
      features: ['Fotografía profesional', 'Video highlights', 'Edición premium', 'Entrega en 48 horas']
    },
    {
      title: 'Redacción de discursos estratégicos',
      description: 'Desarrollamos discursos que transmiten tu mensaje con claridad e impacto. Incluye entrevista a profundidad, construcción del mensaje y sesión de práctica.',
      icon: '✍️',
      features: ['Entrevista personalizada', 'Mensaje persuasivo', 'Sesión de práctica', 'Ajustes finales']
    },
    {
      title: 'Asesoría de imagen',
      description: 'Estudio completo de colorimetría, proporciones corporales y definición de estilo personal alineado a tus objetivos profesionales.',
      icon: '👔',
      features: ['Estudio de colorimetría', 'Análisis de proporciones', 'Guía de estilo', 'Recomendaciones personalizadas']
    },
    {
      title: 'Expresión persuasiva',
      description: 'Workshops intensivos para desarrollar habilidades de comunicación persuasiva y proyectar confianza ante distintos públicos.',
      icon: '🎤',
      features: ['Técnicas de persuasión', 'Práctica intensiva', 'Feedback personalizado', 'Material de apoyo']
    },
    {
      title: 'Fotografías profesionales',
      description: 'Sesión fotográfica estratégica para crear retratos que proyecten autoridad, confianza y profesionalismo en todos tus canales.',
      icon: '📷',
      features: ['Sesión fotográfica completa', 'Múltiples looks', 'Edición profesional', 'Fotos corporativas de alto impacto']
    },
    {
      title: 'Media training',
      description: 'Preparación integral para entrevistas y encuentros con medios de comunicación. Aprende a manejar preguntas difíciles con confianza.',
      icon: '🎬',
      features: ['Simulaciones reales', 'Manejo de crisis', 'Técnicas de entrevista', 'Presencia en cámara']
    },
    {
      title: 'Estrategia de contenido digital',
      description: 'Diagnóstico completo de tu presencia digital seguido del diseño y ejecución de una matriz de contenido estratégico.',
      icon: '📱',
      features: ['Auditoría digital completa', 'Calendario editorial', 'Estrategia de distribución', 'Análisis de resultados']
    },
    {
      title: 'Narrativa de impacto',
      description: 'Definimos los pilares de tu marca personal y los mensajes clave que garantizan coherencia, autenticidad e influencia.',
      icon: '💬',
      features: ['Pilares de marca personal', 'Mensajes clave', 'Storytelling estratégico', 'Guía de voz y tono']
    },
  ]

  return (
    <>
      <Head>
        <title>Servicios - PRessence</title>
      </Head>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#16367D' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="container-max relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="font-display text-5xl md:text-6xl mb-6">
                Servicios
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Soluciones estratégicas para construir tu marca personal
              </p>
            </div>
          </motion.div>
        </section>

        {/* Grid de Servicios */}
        <section className="py-20 bg-white">
          <motion.div 
            className="container-max"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-lg transition-shadow p-8 border border-gray-100"
                >
                  {/* Header del servicio */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
                      style={{ backgroundColor: '#FFF6EF' }}
                    >
                      {service.icon}
                    </div>
                    
                    <h3 className="font-display text-xl mb-3" style={{ color: '#16367D' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="border-t pt-6" style={{ borderColor: '#E6ECF8' }}>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <svg className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="#F2994A" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Proceso de trabajo */}
        <section className="py-20" style={{ backgroundColor: '#E6ECF8' }}>
          <div className="container-max">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
                Cómo trabajamos
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-4" style={{ color: '#16367D' }}>
                Nuestro Proceso
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '01', title: 'Diagnóstico', desc: 'Evaluamos tu situación actual y objetivos' },
                { step: '02', title: 'Estrategia', desc: 'Diseñamos un plan personalizado' },
                { step: '03', title: 'Ejecución', desc: 'Implementamos las soluciones' },
                { step: '04', title: 'Seguimiento', desc: 'Medimos resultados y ajustamos' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold"
                    style={{ backgroundColor: '#F2994A' }}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: '#16367D' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios destacados */}
        <section className="py-20 bg-white">
          <div className="container-max">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
                Lo que dicen
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-4" style={{ color: '#16367D' }}>
                Experiencias de éxito
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
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
                  className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl"
                >
                  <div className="text-4xl mb-4" style={{ color: '#F2994A' }}>❝</div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold" style={{ color: '#16367D' }}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#16367D' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="container-max text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-white">
              ¿Lista para destacar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda tu sesión de diagnóstico gratuita y descubre cómo podemos impulsar tu marca personal
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              style={{ backgroundColor: '#F2994A', color: '#FFFFFF' }}
            >
              Empieza hoy →
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}