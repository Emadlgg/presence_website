import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'

export async function getStaticPaths() {
  const slugs = await client.fetch(`*[_type == "post" && defined(slug.current)][]{ "slug": slug.current }`)
  return {
    paths: slugs.map(s => ({ params: { slug: s.slug } })),
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{title, date, category, content}`, { slug })
  if (!post) return { notFound: true }
  return { props: { post }, revalidate: 60 }
}

function RichText({ content = [] }) {
  // Simple renderer for block content (paragraphs and headings)
  return (
    <div className="prose prose-lg">
      {content.map((block, i) => {
        if (block._type === 'block') {
          const text = (block.children || []).map((c) => c.text).join('')
          if (block.style === 'h2') return <h2 key={i}>{text}</h2>
          if (block.style === 'h3') return <h3 key={i}>{text}</h3>
          return <p key={i}>{text}</p>
        }
        return null
      })}
    </div>
  )
}

export default function Post({ post }) {
  return (
    <div>
      <Header />
      <main className="container-max py-16">
        <div className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</div>
        <h1 className="font-display text-3xl mb-3" style={{color:'#16367d'}}>{post.title}</h1>
        {post.category && <div className="badge mb-6">{post.category}</div>}
        <RichText content={post.content} />
        <a href="/contact" className="btn-primary mt-10 inline-block">Hablemos de tu marca</a>
      </main>
      <Footer />
    </div>
  )
}
