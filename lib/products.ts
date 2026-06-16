export interface Product {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  image: string
  specs: {
    label: string
    value: string
  }[]
  features: string[]
}

export const products: Product[] = [
  {
    id: 'classic-platform',
    name: 'Classic Platform',
    category: 'Platforms',
    tagline: 'The foundation of superyacht leisure',
    description:
      'Our flagship inflatable platform delivers exceptional stability and generous surface area for swimming, sunbathing, and water access. Engineered with premium TPU materials for durability and sustainability.',
    image: '/images/product-platform-classic.png',
    specs: [
      { label: 'Dimensions', value: '4m × 3m / Custom' },
      { label: 'Capacity', value: '100 kg/m²' },
      { label: 'Setup Time', value: '< 5 minutes' },
      { label: 'Weight', value: '45 kg' },
    ],
    features: [
      'Non-slip removable covers',
      'Integrated D-rings for securing',
      'Reinforced connection points',
      'UV-resistant materials',
    ],
  },
  {
    id: 'modular-platform',
    name: 'Modular Platform',
    category: 'Platforms',
    tagline: 'Endless configurations for any vessel',
    description:
      'Our modular platform system allows unlimited configurations. Connect multiple units with our heavy-duty zip joiners to create custom layouts that perfectly match your yacht and on-water lifestyle.',
    image: '/images/product-modular.png',
    specs: [
      { label: 'Unit Size', value: '2m × 2m per module' },
      { label: 'Capacity', value: '100 kg/m²' },
      { label: 'Connection', value: 'Zip joiner system' },
      { label: 'Max Configuration', value: 'Unlimited' },
    ],
    features: [
      'Seamless zip connections',
      'Mix and match modules',
      'Standardized anchor points',
      'Interchangeable covers',
    ],
  },
  {
    id: 'hex-single',
    name: 'Hex Single',
    category: 'Hexes',
    tagline: 'The versatile single-hex module',
    description:
      'The Hex Single is our core hexagonal platform module — a lightweight, interlocking unit that creates striking honeycomb layouts at the water\'s edge. Ideal as a standalone sun deck or the foundation for a larger Hex array.',
    image: '/images/hex-platforms-2.png',
    specs: [
      { label: 'Shape', value: 'Hexagonal' },
      { label: 'Diameter', value: '2.4m flat-to-flat' },
      { label: 'Capacity', value: '100 kg/m²' },
      { label: 'Setup Time', value: '< 3 minutes' },
    ],
    features: [
      'Interlocking hex connectors',
      'Non-slip deck surface',
      'Lightweight compact pack size',
      'Fully modular — grow your layout',
    ],
  },
  {
    id: 'hex-array',
    name: 'Hex Array',
    category: 'Hexes',
    tagline: 'Honeycomb luxury at scale',
    description:
      'Connect multiple Hex Singles to create a dramatic, large-format floating surface. The Hex Array is perfect for superyacht beach clubs, water-level lounges, and bespoke swim areas — configurable to any shape or size.',
    image: '/images/hex-platforms-2.png',
    specs: [
      { label: 'Configuration', value: 'Fully custom' },
      { label: 'Min. Array', value: '3 modules' },
      { label: 'Capacity', value: '100 kg/m²' },
      { label: 'Setup Time', value: '< 10 minutes' },
    ],
    features: [
      'Unlimited expansion',
      'Rigid inter-module locking',
      'Even weight distribution',
      'Optional anchor kit included',
    ],
  },
]

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'platforms', name: 'Platforms' },
  { id: 'hexes', name: 'Hexes' },
]
