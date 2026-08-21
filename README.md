# 门禁系统销售网站

一个现代化的门禁系统销售平台，采用 Next.js + React + Tailwind CSS 构建。

## 功能特性

- ✨ 产品展示和详情页面
- 🔍 产品分类筛选
- 📱 响应式设计（移动端/平板/桌面）
- 🎨 现代化 UI 设计
- 🚀 SEO 优化
- ⚡ 高性能

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开浏览器访问
# http://localhost:3000
```

### 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1979468566-ctrl%2Faccess-control-sales)

## 项目结构

```
.
├── pages/              # Next.js 页面
│   ├── _app.tsx
│   ├── index.tsx       # 首页
│   └── products/
│       └── [id].tsx    # 产品详情页
├── components/         # React 组件
│   ├── Navigation.tsx
│   └── ProductCard.tsx
├── data/              # 产品数据
│   └── products.json
├── styles/            # 样式文件
│   └── globals.css
└── public/            # 静态资源
```

## 技术栈

- **框架**: Next.js 14
- **UI**: React 18
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel

## 许可证

MIT