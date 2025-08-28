import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1
        className="text-3xl sm:text-4xl font-display mb-4"
        style={{ color: '#16367D' }} // Azul principal
      >
        Artículo no disponible
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        El artículo{' '}
        <span className="font-semibold text-gray-800">
          {slug}
        </span>{' '}
        no está disponible o no existe.
      </p>
      <Link
        href="/blog"
        className="px-5 py-3 rounded-full font-medium transition-colors"
        style={{
          backgroundColor: '#16367D', // Azul principal
          color: '#FFFFFF',
        }}
      >
        Volver al blog
      </Link>
    </main>
  );
}
