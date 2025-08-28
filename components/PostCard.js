import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <article className="card">
      <div className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</div>
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/blog/${post.slug?.current}`}>{post.title}</Link>
      </h3>
      {post.category && <div className="badge mb-4">{post.category}</div>}
      <p className="text-gray-700 line-clamp-3">{post.excerpt || '...'}</p>
    </article>
  )
}
