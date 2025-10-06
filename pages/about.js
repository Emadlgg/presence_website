import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Nosotras - PRessence</title>
      </Head>
      <Header />

      <main className="flex-1 container-max py-16">
        {/* Título principal con línea decorativa */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl inline-block relative" style={{ color: '#16367D' }}>
            Sobre Nosotras
            <span
              className="absolute left-0 bottom-0 w-full h-1"
              style={{ backgroundColor: '#F2994A', transform: 'translateY(6px)' }}
            ></span>
          </h1>
        </div>

        {/* Propósito */}
        <section className="mb-12">
          <div
            className="p-8 rounded-lg shadow-md border-l-4"
            style={{ borderColor: '#F2994A', backgroundColor: '#E6ECF8' }}
          >
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#16367D' }}>
              Propósito
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Somos una boutique que acompaña a fundadores y líderes visionarios a construir una marca personal auténtica y poderosa.
            </p>
          </div>
        </section>

        {/* Enfoque y metodología */}
        <section className="mb-12">
          <div
            className="p-8 rounded-lg shadow-md border-l-4"
            style={{ borderColor: '#16367D', backgroundColor: '#FFF6EF' }}
          >
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#16367D' }}>
              Enfoque y metodología
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Modelo de <strong>Bundling</strong> + <strong>Founder-Led Growth</strong> para soluciones personalizadas según objetivos y etapa.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16 bg-[#E6ECF8] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#16367D' }}>
            Valores
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: 'Autenticidad', descripcion: 'Espacio para descripción breve.' },
              { titulo: 'Excelencia', descripcion: 'Espacio para descripción breve.' },
              { titulo: 'Confianza', descripcion: 'Espacio para descripción breve.' },
              { titulo: 'Innovación estratégica', descripcion: 'Espacio para descripción breve.' },
              { titulo: 'Impacto positivo', descripcion: 'Espacio para descripción breve.' }
            ].map((valor) => (
              <li
                key={valor.titulo}
                className="p-4 bg-white rounded-lg shadow-sm border-l-4"
                style={{ borderColor: '#F2994A' }}
              >
                <h3 className="font-semibold text-lg" style={{ color: '#16367D' }}>
                  {valor.titulo}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{valor.descripcion}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Nuestro equipo */}
        <section>
          <h2 className="text-2xl font-semibold mb-10 text-center" style={{ color: '#16367D' }}>
            Nuestro equipo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Luisa Sosa', role: 'Comunicación estratégica y RP.', img: '/images/luisa.jpg' },
              { name: 'Isabel Morales', role: 'Imagen y expresión pública.', img: '/images/isabel.jpg' }
            ].map((m) => (
              <div
                key={m.name}
                className="bg-white p-6 rounded-lg shadow-md text-center border-2 hover:shadow-lg transition"
                style={{ borderColor: '#16367D' }}
              >
                <div
                  className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4"
                  style={{ borderColor: '#F2994A' }}
                >
                  <img src={m.img} alt={m.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="font-semibold text-lg" style={{ color: '#16367D' }}>
                  {m.name}
                </h3>
                <p className="text-sm text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}