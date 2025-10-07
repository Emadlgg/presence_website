import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getPostBySlug, getPosts } from '../../lib/notion'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function BlogPost({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <Header />
        <div className="flex-1 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: '#F2994A' }}></div>
            <p className="text-gray-600">Cargando...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Head>
          <title>Artículo no disponible - PRessence</title>
        </Head>
        <Header />
        <main className="flex-1">
          <section className="py-20 bg-white">
            <div className="container-max text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl" style={{ backgroundColor: '#E6ECF8' }}>
                  📄
                </div>
                <h1 className="font-display text-3xl md:text-4xl mb-4" style={{ color: '#16367D' }}>
                  Artículo no disponible
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  El artículo que buscas no está disponible o no existe.
                </p>
                <Link
                  href="/blog"
                  className="inline-block px-8 py-4 rounded-full font-semibold shadow-soft hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#16367D', color: '#FFFFFF' }}
                >
                  ← Volver al blog
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} - PRessence Blog</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Head>
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Breadcrumb y botón volver */}
        <section className="py-6 border-b" style={{ borderColor: '#E6ECF8' }}>
          <div className="container-max">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-medium hover:underline"
              style={{ color: '#16367D' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
          </div>
        </section>

        {/* Header del artículo */}
        <article className="py-12">
          <div className="container-max max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Metadata */}
              <div className="flex items-center gap-4 mb-6">
                {post.category && (
                  <span 
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#E6ECF8', color: '#16367D' }}
                  >
                    {post.category}
                  </span>
                )}
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>

              {/* Título */}
              <h1 className="font-display text-4xl md:text-5xl mb-6 leading-tight" style={{ color: '#16367D' }}>
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              )}
            </motion.div>

            {/* Imagen destacada */}
            {post.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full h-96 md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-soft"
              >
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}

            {/* Contenido del artículo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
              style={{
                '--tw-prose-body': '#374151',
                '--tw-prose-headings': '#16367D',
                '--tw-prose-links': '#F2994A',
                '--tw-prose-bold': '#16367D',
                '--tw-prose-quotes': '#6B7280',
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Separador */}
            <div className="my-16 border-t" style={{ borderColor: '#E6ECF8' }}></div>

            {/* Footer del artículo */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center font-semibold hover:underline"
                style={{ color: '#16367D' }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ver más artículos
              </Link>

              {/* Compartir en redes sociales */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 font-medium">Compartir:</span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                    style={{ backgroundColor: '#0077B5' }}
                    aria-label="Compartir en LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                    style={{ backgroundColor: '#1DA1F2' }}
                    aria-label="Compartir en Twitter"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>


      </main>

      <Footer />

      <style jsx global>{`
        .prose h1 {
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .prose h2 {
          font-family: var(--font-display);
          font-size: 1.875rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .prose a {
          text-decoration: underline;
          font-weight: 500;
        }
        .prose a:hover {
          opacity: 0.8;
        }
        .prose strong {
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}