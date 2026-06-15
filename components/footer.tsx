import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const navigation = {
  products: [
    { name: 'Platforms', href: '/products?category=platforms' },
    { name: 'Docking Solutions', href: '/products?category=docking-solutions' },
    { name: 'Sea Pools', href: '/products?category=sea-pools' },
    { name: 'Professional', href: '/products?category=professional' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/about#services' },
    { name: 'Clients', href: '/about#clients' },
    { name: 'Build your Platform', href: '/build-your-platform' },
    { name: 'Contact', href: '/contact' },
  ],
  brands: [
    { name: 'Xquip', href: 'https://xquip.com', external: true },
    { name: 'Xtenders', href: 'https://xtenders.com', external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-1">
              Ready to expand your deck?
            </p>
            <h2 className="text-xl font-bold tracking-tight text-balance">
              Build your custom platform today.
            </h2>
          </div>
          <Link
            href="/build-your-platform"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/90 transition-colors shrink-0"
          >
            Get started
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/xflatable-logo.png"
                alt="Xflatable"
                width={160}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-sm text-primary-foreground/65 leading-relaxed max-w-xs">
              Premium inflatable platforms engineered for the superyacht
              industry. A sub-brand of Xquip and Xtenders, delivering excellence
              on the water since day one.
            </p>

            {/* Contact info */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/65">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@xflatable.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@xflatable.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/65">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+33493000000"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +33 4 93 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/65">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Port de Fontvieille
                  <br />
                  98000 Monaco
                </span>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-5">
              Products
            </h3>
            <ul className="space-y-3">
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
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
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

          {/* Brands */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-5">
              Our Brands
            </h3>
            <ul className="space-y-3">
              {navigation.brands.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-primary-foreground/40">
              &copy; {new Date().getFullYear()} Xflatable. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40">
              A sub-brand of{' '}
              <a
                href="https://xquip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                Xquip
              </a>
              {' '}and{' '}
              <a
                href="https://xtenders.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                Xtenders
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
