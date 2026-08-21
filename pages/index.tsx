import Head from 'next/head'
import Navigation from '../components/Navigation'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import { useState, useMemo } from 'react'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const categories = ['全部', ...new Set(products.products.map((p) => p.category))]

  const filteredProducts = useMemo(() => {
    if (selectedCategory === '全部') return products.products
    return products.products.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <Head>
        <title>门禁系统销售 - 专业门禁解决方案提供商</title>
        <meta name="description" content="提供人脸识别、指纹识别、IC卡等多种门禁系统" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">专业门禁系统解决方案</h1>
          <p className="text-xl mb-8 text-blue-100">
            我们提供最先进的门禁识别技术，为您的安全保驾护航
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">按分类筛选</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            热门产品
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 门禁系统销售平台。All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}