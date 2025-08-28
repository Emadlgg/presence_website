import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import { client } from '@/lib/sanity'

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"] | order(date desc){
    _id, title, slug, date, category,
    "excerpt": coalesce(string::join(select(content[]->text, content[].children[].text), " "), "")[0...220]
  }`)
  return { props: { posts }, revalidate: 60 }
}

export default function Blog({ posts = [] }) {
  return (
    <div>
      <Header />
      <main className="container-max py-16">
        <h1 className="font-display text-3xl mb-8" style={{color:'#16367d'}}>Blog</h1>
        {posts.length === 0 ? <p>No hay artículos publicados aún.</p> : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map(p => <PostCard key={p._id} post={p} />)}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
