import Header from '../components/Header'
import Footer from '../components/Footer'
import { getPosts } from '../lib/notion'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Blog({ posts }) {
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

  // Post destacado (el más reciente)
  const featuredPost = posts && posts.length > 0 ? posts[0] : null
  const regularPosts = posts && posts.length > 1 ? posts.slice(1) : []

  if (!posts || posts.length === 0) {
    return (
      <>
        <Head>
          <title>Blog - PRessence</title>
        </Head>
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#16367D' }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container-max relative z-10 text-center text-white">
              <h1 className="font-display text-5xl md:text-6xl mb-6">Blog</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Insights sobre marca personal y liderazgo
              </p>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container-max text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl" style={{ backgroundColor: '#E6ECF8' }}>
                  📝
                </div>
                <h2 className="font-display text-3xl mb-4" style={{ color: '#16367D' }}>
                  Próximamente
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Estamos preparando contenido valioso sobre marca personal, comunicación estratégica y liderazgo.
                  <br />
                  Vuelve pronto para descubrir nuevos artículos.
                </p>
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
        <title>Blog - PRessence</title>
        <meta name="description" content="Descubre insights sobre marca personal, comunicación estratégica y liderazgo" />
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
                Blog
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Insights sobre marca personal, comunicación estratégica y liderazgo
              </p>
            </div>
          </motion.div>
        </section>

        {/* Post Destacado */}
        {featuredPost && (
          <section className="py-20 bg-white">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F2994A' }}>
                  Artículo destacado
                </span>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className="grid md:grid-cols-2 gap-8 mt-6 bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow cursor-pointer">
                    {featuredPost.image && (
                      <div className="relative h-80 md:h-auto">
                        <Image 
                          src={featuredPost.image} 
                          alt={featuredPost.title} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col justify-center">
                      {featuredPost.category && (
                        <span 
                          className="inline-block w-fit px-4 py-1 rounded-full text-sm font-medium mb-4"
                          style={{ backgroundColor: '#E6ECF8', color: '#16367D' }}
                        >
                          {featuredPost.category}
                        </span>
                      )}
                      <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: '#16367D' }}>
                        {featuredPost.title}
                      </h2>
                      {featuredPost.excerpt && (
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {featuredPost.excerpt}
                        </p>
                      )}
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(featuredPost.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Lista de artículos */}
        {regularPosts.length > 0 && (
          <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl" style={{ color: '#16367D' }}>
                  Artículos recientes
                </h2>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                {regularPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="cursor-pointer">
                        {post.image && (
                          <div className="relative w-full h-56">
                            <Image 
                              src={post.image} 
                              alt={post.title} 
                              fill 
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            {post.category && (
                              <span 
                                className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                                style={{ backgroundColor: '#E6ECF8', color: '#16367D' }}
                              >
                                {post.category}
                              </span>
                            )}
                            <div className="text-xs text-gray-500">
                              {new Date(post.date).toLocaleDateString('es-ES', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          </div>
                          
                          <h3 className="font-display text-xl mb-3 hover:text-orange-500 transition-colors" style={{ color: '#16367D' }}>
                            {post.title}
                          </h3>
                          
                          {post.excerpt && (
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        )}


      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}