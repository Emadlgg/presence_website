import Header from '../components/Header'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { getPosts } from '../lib/notion'
import Head from 'next/head'

export default function Blog({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <>
        <Head>
          <title>Blog - PRessence</title>
        </Head>
        <Header />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center text-center bg-gray-50">
          <h1 className="text-4xl sm:text-5xl font-display mb-6" style={{ color: '#16367D' }}>
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            No hay entradas en el blog por el momento.
            <br />
            Vuelve pronto para descubrir nuevos artículos y novedades.
          </p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Blog - PRessence</title>
      </Head>
      <Header />
      <main className="flex-1 container-max py-16">
        <h1 className="font-display text-4xl mb-8" style={{ color: '#16367D' }}>
          Blog
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
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