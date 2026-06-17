import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Inter, Barlow_Semi_Condensed } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({ 
  variable: '--font-playfair', 
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['700', '800', '900'],
})
const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
})
const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: '--font-barlow-semi-condensed',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Xflatable | Premium Inflatable Docks for Superyachts',
  description:
    'Xflatable engineers premium inflatable platforms, docking solutions, and sea pools for the superyacht industry. A sister company of Xquip.',
  keywords: [
    'inflatable dock',
    'superyacht',
    'yacht platform',
    'sea pool',
    'jet ski dock',
    'yacht equipment',
    'inflatable platform',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} ${barlowSemiCondensed.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
