import Header from '../components/Header'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'


export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1
        className="text-4xl sm:text-5xl font-display mb-6"
        style={{ color: '#16367D' }} // Azul principal
      >
        Blog
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
        No hay entradas en el blog por el momento.
        <br />
        Vuelve pronto para descubrir nuevos artículos y novedades.
      </p>
    </main>
  );
}

