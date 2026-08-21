import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-blue-100">
          🔐 门禁系统销售
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-100 transition">
            产品列表
          </Link>
          <Link href="#" className="hover:text-blue-100 transition">
            关于我们
          </Link>
          <Link href="#" className="hover:text-blue-100 transition">
            联系我们
          </Link>
        </div>
      </div>
    </nav>
  )
}