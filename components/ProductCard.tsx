import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
  description,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
        <div className="relative h-64 bg-gray-200">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ¥{price.toLocaleString()}
            </span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              查看详情
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}