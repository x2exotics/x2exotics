'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const count = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartCount(count)
  }, [])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-600">X2</span>
          <span className="text-sm font-semibold text-gray-900">Exotics</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-orange-600 transition">Home</Link>
          <Link href="/products" className="hover:text-orange-600 transition">Products</Link>
          <a href="#" className="hover:text-orange-600 transition">About</a>
          <a href="#" className="hover:text-orange-600 transition">Contact</a>
        </div>

        <Link href="/cart" className="relative">
          <button className="text-2xl hover:text-orange-600 transition">🛒</button>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
