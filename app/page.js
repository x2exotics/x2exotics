'use client'

import Link from 'next/link'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product-card'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">X2 Exotics</h1>
          <p className="text-xl mb-8">Premium Parts & Upgrades for Freego X2 & X2 Pro</p>
          <Link href="/products">
            <button className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <h2 className="section-title text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map(cat => (
            <Link key={cat.id} href={`/products?category=${cat.id}`}>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-orange-50 transition cursor-pointer">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="font-semibold text-sm">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-12">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="section-title text-center">Why Choose X2 Exotics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">All parts are tested and verified for quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick delivery to get you riding faster</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">Get help from Freego enthusiasts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
