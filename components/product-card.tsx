import Image from 'next/image'
import Link from 'next/link'
import { type Product } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-accent">
          <span>View Details</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
