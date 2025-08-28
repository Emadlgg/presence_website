import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Header />
      <main className="container-max py-16 prose">
        <h1 style={{color:'#16367d'}}>Sobre Nosotros</h1>
        <h2>Propósito</h2>
        <p>Somos una boutique que acompaña a fundadores y líderes visionarios a construir una marca personal auténtica y poderosa.</p>
        <h2>Enfoque y metodología</h2>
        <p>Modelo de Bundling + Founder-Led Growth para soluciones personalizadas según objetivos y etapa.</p>
        <h2>Valores</h2>
        <ul>
          <li>Autenticidad</li>
          <li>Excelencia</li>
          <li>Confianza</li>
          <li>Innovación estratégica</li>
          <li>Impacto positivo</li>
        </ul>
        <h2>Nuestro equipo</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="card flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
              <img src="/images/luisa.jpg" alt="Luisa Sosa" className="object-cover w-full h-full" />
            </div>
            <h3 className="font-semibold">Luisa Sosa</h3>
            <p className="text-sm text-gray-600">Comunicación estratégica y RP.</p>
          </div>
          <div className="card flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
              <img src="/images/isabel.jpg" alt="Isabel Morales" className="object-cover w-full h-full" />
            </div>
            <h3 className="font-semibold">Isabel Morales</h3>
            <p className="text-sm text-gray-600">Imagen y expresión pública.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
