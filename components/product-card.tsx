import Image from 'next/image'
import Link from 'next/link'
import { type Product } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-wider text-white bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.tagline}
        </p>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-base font-semibold text-foreground">
            {product.price}
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
