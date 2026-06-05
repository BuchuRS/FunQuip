import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  products: [
    { name: 'Platforms', href: '/products?category=platforms' },
    { name: 'Docking Solutions', href: '/products?category=docking-solutions' },
    { name: 'Sea Pools', href: '/products?category=sea-pools' },
    { name: 'Professional', href: '/products?category=professional' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              X<span className="opacity-70">flatable</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Premium inflatable docks engineered for the superyacht industry. A
              sister company of Xquip, delivering excellence on the water.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@xflatable.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@xflatable.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+33493000000"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +33 4 93 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Port de Fontvieille
                  <br />
                  98000 Monaco
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} Xflatable. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/50">
              A sister company of{' '}
              <a
                href="https://xquip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Xquip
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
