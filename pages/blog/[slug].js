import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getPostBySlug, getPosts } from '../../lib/notion'
import Image from 'next/image'
import Head from 'next/head'

export default function BlogPost({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Cargando...</div>
  }

  if (!post) {
    return (
      <>
        <Head>
          <title>Artículo no disponible - PRessence</title>
        </Head>
        <Header />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center text-center bg-gray-50">
          <h1 className="text-3xl sm:text-4xl font-display mb-4" style={{ color: '#16367D' }}>
            Artículo no disponible
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mb-6">
            El artículo no está disponible o no existe.
          </p>
          <Link
            href="/blog"
            className="px-5 py-3 rounded-full font-medium transition-colors"
            style={{ backgroundColor: '#16367D', color: '#FFFFFF' }}
          >
            Volver al blog
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} - PRessence Blog</title>
      </Head>
      <Header />
      <main className="flex-1 container-max py-16">
        <article className="max-w-3xl mx-auto">
          {post.image && (
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
            </div>
          )}

          <div className="mb-6">
            <div className="badge mb-4">{post.category}</div>
            <h1 className="font-display text-4xl mb-4" style={{ color: '#16367D' }}>
              {post.title}
            </h1>
            <div className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12">
            <Link href="/blog" className="text-primary hover:underline">
              ← Volver al blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
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