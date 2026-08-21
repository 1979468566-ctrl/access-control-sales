import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import products from '../../data/products.json'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [quantity, setQuantity] = useState(1)

  if (!id) return <div>加载中...</div>

  const product = products.products.find((p) => p.id === parseInt(id as string))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">产品不存在</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            返回产品列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} - 门禁系统销售</title>
        <meta name="description" content={product.description} />
      </Head>

      <Navigation />

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 text-gray-600">
            <Link href="/" className="text-blue-600 hover:underline">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Image */}
              <div className="flex flex-col">
                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
                    图片1
                  </button>
                  <button className="flex-1 bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
                    图片2
                  </button>
                  <button className="flex-1 bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
                    图片3
                  </button>
                </div>
              </div>

              {/* Right: Details */}
              <div>
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">商品价格</div>
                    <div className="text-4xl font-bold text-blue-600">
                      ¥{product.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-8">
                    <label className="block text-lg font-semibold text-gray-800 mb-4">
                      数量
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 border-2 border-gray-300 rounded hover:bg-gray-100"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                        }
                        className="w-16 h-10 border-2 border-gray-300 rounded text-center"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 border-2 border-gray-300 rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mb-8">
                    <button className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
                      加入购物车
                    </button>
                    <button className="flex-1 bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition">
                      立即购买
                    </button>
                  </div>

                  {/* Features */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      主要特性
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="text-green-500 font-bold mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specs Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              产品规格参数
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-6 font-semibold text-gray-800">
                      参数
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-800">
                      规格
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="py-4 px-6 text-gray-700 font-medium">
                        {key}
                      </td>
                      <td className="py-4 px-6 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">相关产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.products
                .filter((p) => p.id !== product.id && p.category === product.category)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                      <div className="relative h-48 bg-gray-200">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-800 mb-2">
                          {relatedProduct.name}
                        </h3>
                        <div className="text-xl font-bold text-blue-600">
                          ¥{relatedProduct.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 门禁系统销售平台。All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}