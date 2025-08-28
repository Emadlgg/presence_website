import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/tuusuario'
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/XXXXX'

  return (
    <div>
      <Header />
      <main className="container-max py-16 grid md:grid-cols-2 gap-10">
        <section>
          <h1 className="font-display text-3xl mb-6" style={{color:'#16367d'}}>Agenda tu diagnóstico</h1>
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <iframe src={calendly} width="100%" height="620" />
          </div>
        </section>
        <section>
          <h2 className="font-display text-2xl mb-4" style={{color:'#16367d'}}>Contacto</h2>
          <form action={formEndpoint} method="POST" className="card space-y-4">
            <input className="w-full border rounded-xl p-3" name="name" placeholder="Nombre" required />
            <input className="w-full border rounded-xl p-3" type="email" name="email" placeholder="Correo" required />
            <textarea className="w-full border rounded-xl p-3" name="message" placeholder="Mensaje" rows="5"></textarea>
            <button className="btn-primary" type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
