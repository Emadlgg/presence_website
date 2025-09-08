import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover sm:object-center object-[center_top]"
        src="/videos/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido centrado */}
      <motion.div
        className="relative z-10 max-w-3xl px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="font-display text-5xl md:text-6xl font-bold mb-6"
          style={{ lineHeight: '1.2' }}
        >
          Be seen. <span className="text-primary">Lead loud.</span> Stay ahead.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          PRessence es una boutique dedicada a <span className="font-black">impulsar la huella única</span> de cada fundador.
          Transformamos su historia, experiencia y visión en una <span className="font-black">marca personal sólida </span>
           que inspire confianza, genere influencia y abra puertas a <span className="font-black">nuevas oportunidades</span>.
        </p>

        <Link
          href="/contact"
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Empieza hoy
        </Link>
      </motion.div>
    </section>
  )
}
