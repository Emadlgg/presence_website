import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'

const services = [
  { title: 'Cobertura de eventos', description: 'Fotografías y video profesional para potenciar presencia en LinkedIn y otros canales.' },
  { title: 'Redacción discursos estratégicos', description: 'Entrevista + construcción de mensaje persuasivo + sesión de práctica.' },
  { title: 'Asesoría de imagen', description: 'Estudio de colorimetría, proporciones y estilo alineado a metas profesionales.' },
  { title: 'Expresión persuasiva', description: 'Workshops intensivos para comunicar con influencia ante distintos públicos.' },
  { title: 'Fotografías profesionales', description: 'Retratos estratégicos para proyectar liderazgo y autoridad.' },
  { title: 'Media training', description: 'Preparación práctica para entrevistas y encuentros con medios.' },
  { title: 'Estrategia de contenido digital', description: 'Diagnóstico + diseño y ejecución de matriz de contenido.' },
  { title: 'Narrativa de impacto', description: 'Definición de pilares y mensajes clave para coherencia e influencia.' },
]

export default function Services() {
  return (
    <div>
      <Header />
      <main className="container-max py-16">
        <h1 className="font-display text-3xl mb-8" style={{color:'#16367d'}}>Servicios</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}
