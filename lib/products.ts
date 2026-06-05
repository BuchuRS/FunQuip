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
      { label: 'Material', value: 'Marine-X TPU' },
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
    id: 'jetski-dock',
    name: 'Jet Ski Dock',
    category: 'Docking Solutions',
    tagline: 'Secure docking for personal watercraft',
    description:
      'Purpose-built inflatable dock for jet skis and PWCs. Features integrated drive-on ramp and secure tie-down points. Perfect for keeping your watercraft ready for action.',
    image: '/images/product-jetski-dock.png',
    specs: [
      { label: 'Dimensions', value: '3.5m × 2.5m' },
      { label: 'Capacity', value: '150 kg/m²' },
      { label: 'Material', value: 'Marine-X TPU' },
      { label: 'Setup Time', value: '< 5 minutes' },
      { label: 'Max PWC Weight', value: '500 kg' },
    ],
    features: [
      'Drive-on ramp design',
      'Soft tie-down points',
      'Self-draining surface',
      'Side boarding rails',
    ],
  },
  {
    id: 'sea-pool',
    name: 'Sea Pool',
    category: 'Sea Pools',
    tagline: 'Safe sanctuary in open water',
    description:
      'Inflatable sea pools create a protected swimming area alongside your yacht. Ideal for families with children and guests learning to dive. Netted enclosure keeps jellyfish and marine life at bay.',
    image: '/images/product-seapool.webp',
    specs: [
      { label: 'Dimensions', value: '5m × 4m × 2m depth' },
      { label: 'Net Mesh', value: '3mm anti-jellyfish' },
      { label: 'Material', value: 'Marine-X TPU' },
      { label: 'Setup Time', value: '< 10 minutes' },
      { label: 'Includes', value: 'Weights & ladder mounts' },
    ],
    features: [
      'Detachable netting system',
      'Multiple ladder positions',
      'Integrated weights included',
      'Clear-view net panels',
    ],
  },
  {
    id: 'modular-system',
    name: 'Modular Dock System',
    category: 'Platforms',
    tagline: 'Endless configurations',
    description:
      'Our modular platform system allows unlimited configurations. Connect multiple units with our heavy-duty zip joiners to create custom layouts that match your yacht and water toys perfectly.',
    image: '/images/product-modular.png',
    specs: [
      { label: 'Unit Size', value: '2m × 2m per module' },
      { label: 'Capacity', value: '100 kg/m²' },
      { label: 'Material', value: 'Marine-X TPU' },
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
    id: 'maintenance-platform',
    name: 'Crew Maintenance Platform',
    category: 'Professional',
    tagline: 'Professional-grade workspace',
    description:
      'Engineered specifically for yacht crew. Provides a stable, spacious workspace for hull cleaning, maintenance, and exterior detailing. Built tough for professional use.',
    image: '/images/product-maintenance.png',
    specs: [
      { label: 'Dimensions', value: '3m × 2m' },
      { label: 'Capacity', value: '150 kg/m²' },
      { label: 'Material', value: 'Heavy-duty TPU' },
      { label: 'Edge Protection', value: 'Reinforced bumpers' },
      { label: 'Tool Mounts', value: 'Integrated D-rings' },
    ],
    features: [
      'High-visibility colours available',
      'Tool tether points',
      'Extra-thick construction',
      'Chemical-resistant surface',
    ],
  },
  {
    id: 'watertoy-dock',
    name: 'Water Toy Dock',
    category: 'Docking Solutions',
    tagline: 'Dedicated stations for e-foils & seabobs',
    description:
      'Compact inflatable docking stations designed specifically for e-foils, seabobs, and other water toys. Keep your equipment organized, accessible, and protected.',
    image: '/images/product-watertoy-dock.png',
    specs: [
      { label: 'Dimensions', value: '2.5m × 1.5m' },
      { label: 'Capacity', value: '80 kg/m²' },
      { label: 'Material', value: 'Marine-X TPU' },
      { label: 'Toy Slots', value: '2-4 positions' },
      { label: 'Charging', value: 'Cable pass-through' },
    ],
    features: [
      'Padded cradle design',
      'Easy boarding step',
      'Equipment tie-downs',
      'Compact storage footprint',
    ],
  },
]

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'platforms', name: 'Platforms' },
  { id: 'docking-solutions', name: 'Docking Solutions' },
  { id: 'sea-pools', name: 'Sea Pools' },
  { id: 'professional', name: 'Professional' },
]
