import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  return (
    <article className="card hover:shadow-lg transition">
      {post.image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div className="text-xs text-gray-500 mb-2">
        {new Date(post.date).toLocaleDateString('es-ES')}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition">
          {post.title}
        </Link>
      </h3>
      {post.category && <div className="badge mb-4">{post.category}</div>}
      <p className="text-gray-700 line-clamp-3">{post.excerpt || '...'}</p>
    </article>
  )
}