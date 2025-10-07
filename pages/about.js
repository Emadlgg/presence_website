import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
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

  const valores = [
    { 
      titulo: 'Autenticidad', 
      descripcion: 'Creemos en la transparencia y en ser fieles a la esencia de cada fundador.',
      icon: '✨'
    },
    { 
      titulo: 'Excelencia', 
      descripcion: 'Nos comprometemos con la calidad en cada detalle de nuestro trabajo.',
      icon: '🎯'
    },
    { 
      titulo: 'Confianza', 
      descripcion: 'Construimos relaciones duraderas basadas en la credibilidad y el respeto.',
      icon: '🤝'
    },
    { 
      titulo: 'Innovación estratégica', 
      descripcion: 'Combinamos creatividad con metodología para resultados extraordinarios.',
      icon: '🚀'
    },
    { 
      titulo: 'Impacto positivo', 
      descripcion: 'Buscamos generar un cambio significativo en cada proyecto que emprendemos.',
      icon: '💡'
    }
  ]

  return (
    <>
      <Head>
        <title>Sobre Nosotras - PRessence</title>
      </Head>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#16367D' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-full blur-3xl"></div>
          </div>
          
          <motion.div 
            className="container-max relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="font-display text-5xl md:text-6xl mb-6">
                Sobre Nosotras
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Transformamos visiones en marcas personales poderosas
              </p>
            </div>
          </motion.div>
        </section>

        {/* Propósito */}
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
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
                  <Image
                    src="/images/quienes-somos.jpg"
                    alt="Nuestro propósito"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
                    Nuestro propósito
                  </span>
                  <div className="h-1 w-20 mt-2 rounded" style={{ backgroundColor: '#F2994A' }}></div>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl" style={{ color: '#16367D' }}>
                  Acompañamos a líderes visionarios
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Somos una boutique especializada que acompaña a fundadores y líderes visionarios 
                  a construir una marca personal auténtica y poderosa que inspire confianza, 
                  genere influencia y abra puertas a nuevas oportunidades.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Transformamos su historia, experiencia y visión en una presencia sólida 
                  que destaca en cada interacción.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Enfoque y metodología */}
        <section className="py-20" style={{ backgroundColor: '#FFF6EF' }}>
          <motion.div 
            className="container-max"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="order-2 md:order-1 space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#16367D' }}>
                    Nuestra metodología
                  </span>
                  <div className="h-1 w-20 mt-2 rounded" style={{ backgroundColor: '#16367D' }}></div>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl" style={{ color: '#16367D' }}>
                  Enfoque estratégico y personalizado
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style={{ backgroundColor: '#F2994A' }}>
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: '#16367D' }}>Bundling</h3>
                      <p className="text-gray-700">
                        Paquetes de servicios diseñados específicamente para tus necesidades y objetivos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl" style={{ backgroundColor: '#16367D' }}>
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: '#16367D' }}>Founder-Led Growth</h3>
                      <p className="text-gray-700">
                        Soluciones personalizadas según tu etapa de crecimiento y metas de posicionamiento.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="order-1 md:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-xl font-semibold">Estrategia personalizada</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Valores */}
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
                Lo que nos define
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-4" style={{ color: '#16367D' }}>
                Nuestros Valores
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {valores.map((valor, index) => (
                <motion.div
                  key={valor.titulo}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-4">{valor.icon}</div>
                  <h3 className="font-semibold text-xl mb-3" style={{ color: '#16367D' }}>
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valor.descripcion}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Nuestro equipo */}
        <section className="py-20" style={{ backgroundColor: '#E6ECF8' }}>
          <motion.div 
            className="container-max"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
                Conoce al equipo
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-4" style={{ color: '#16367D' }}>
                Expertas en marca personal
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                { name: 'Luisa Sosa', role: 'Comunicación estratégica y RP', img: '/images/luisa.jpg' },
                { name: 'Isabel Morales', role: 'Imagen y expresión pública', img: '/images/isabel.jpg' }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-2xl shadow-soft text-center group"
                >
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 group-hover:border-opacity-80 transition-all" style={{ borderColor: '#F2994A' }}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-2xl mb-2" style={{ color: '#16367D' }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


      </main>

      <Footer />
    </>
  )
}