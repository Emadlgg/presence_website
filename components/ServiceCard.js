export default function ServiceCard({ title, description }) {
  return (
    <div className="card hover:shadow-lg transition">
      <h3 className="font-display text-lg mb-2" style={{color:'#16367d'}}>{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}
