'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { 
    name: 'Products', 
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      { name: 'All Products', href: '/products' },
      { name: 'Platforms', href: '/products?category=platforms' },
      { name: 'Docking Solutions', href: '/products?category=docking' },
      { name: 'Sea Pools', href: '/products?category=sea-pools' },
      { name: 'Professional', href: '/products?category=professional' },
    ]
  },
  { name: 'Services', href: '/about#services' },
  { name: 'Clients', href: '/about#clients' },
  { name: 'About us', href: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-6xl">
        {/* Desktop Navigation - Floating Pill */}
        <div className="hidden lg:flex items-center justify-between bg-white/50 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
          {/* Left Navigation */}
          <div className="flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-100"
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                    {dropdownOpen && item.dropdownItems && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-100"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/images/xflatable-logo.png"
              alt="Xflatable Logo"
              className="h-6 w-auto"
            />
          </Link>

          {/* Right - Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/build-your-platform"
              className="px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Build your Platform
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium text-neutral-700 border border-neutral-300 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between bg-white/50 backdrop-blur-md rounded-full px-4 py-3 shadow-lg">
          <Link href="/" className="h-10 flex items-center">
            <img
              src="/images/xflatable-logo.png"
              alt="Xflatable Logo"
              className="h-6 w-auto"
            />
          </Link>
          <button
            type="button"
            className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-neutral-900 px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="h-10 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src="/images/xflatable-logo.png"
                  alt="Xflatable Logo"
                  className="h-6 w-auto"
                />
              </Link>
              <button
                type="button"
                className="p-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-10 flow-root">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-3 text-lg font-medium text-white/90 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdownItems && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
