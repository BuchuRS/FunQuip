'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { products, categories, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'

interface ProductGridProps {
  initialCategory?: string
}

export function ProductGrid({ initialCategory = 'all' }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
        )

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-full transition-colors',
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No products found in this category.
        </p>
      )}
    </div>
  )
}
