export type Tour = {
  name: string
  tag: string
  description: string
  price: string
  image: string
  categories: string[]
}

export const filterCategories = ['All', 'Beach', 'City', 'Adventure'] as const

export type FilterCategory = (typeof filterCategories)[number]

export const tours: Tour[] = [
  {
    name: 'Bacolod',
    tag: 'City & Culture',
    description:
      'Rich in heritage, festivals, and the iconic Ruins landmark.',
    price: 'PHP 14,888',
    image:
      'https://images.unsplash.com/photo-1509850629763-f55dbe6a607e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDc5OTd8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['City'],
  },
  {
    name: 'Batanes',
    tag: 'Island & Culture',
    description:
      'Remote northern islands with rolling hills, stone houses, and coastal cliffs.',
    price: 'PHP 28,888',
    image:
      'https://images.unsplash.com/photo-1582625053958-fb011f611c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgyODJ8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
  {
    name: 'Bohol',
    tag: 'Beach & Adventure',
    description:
      'Home of the Chocolate Hills, tarsiers, and beautiful Alona Beach.',
    price: 'PHP 16,888',
    image:
      'https://images.unsplash.com/photo-1714791641646-afe9c7ae641a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgyODd8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach', 'Adventure'],
  },
  {
    name: 'Boracay',
    tag: 'Beach & Islands',
    description:
      'World-famous White Beach, water sports, and vibrant nightlife.',
    price: 'PHP 11,888',
    image:
      'https://images.unsplash.com/photo-1646821195730-7089fe8d30d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgyOTl8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
  {
    name: 'Cagayan De Oro',
    tag: 'Adventure',
    description:
      'Gateway to white water rafting, canyoneering, and waterfalls.',
    price: 'PHP 13,888',
    image:
      'https://images.unsplash.com/photo-1690993962350-2526ad45f354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzMDl8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Adventure'],
  },
  {
    name: 'Camiguin',
    tag: 'Beach & Nature',
    description:
      'Volcanoes, waterfalls, white sand bars, and pristine marine life.',
    price: 'PHP 15,888',
    image:
      'https://images.unsplash.com/photo-1767167648861-00bbc5c5cf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzMjV8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
  {
    name: 'Cebu',
    tag: 'City & Beach',
    description:
      'History, whale sharks, stunning canyons, and beautiful beaches.',
    price: 'PHP 12,888',
    image:
      'https://images.unsplash.com/photo-1598111236631-d2ef4fca98ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzMzB8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach', 'City'],
  },
  {
    name: 'Coron',
    tag: 'Beach & Diving',
    description:
      'Crystal-clear lakes, WWII shipwrecks, and limestone karsts.',
    price: 'PHP 18,888',
    image:
      'https://images.unsplash.com/photo-1675397854643-7141a9aca6ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzNDB8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
  {
    name: 'Davao',
    tag: 'City & Nature',
    description:
      'Gateway to Mt. Apo, Philippine Eagle, and lush rainforests.',
    price: 'PHP 14,888',
    image:
      'https://images.unsplash.com/photo-1690248720324-7c7ac8320d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzNTN8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['City'],
  },
  {
    name: 'Dumaguete',
    tag: 'Beach & Diving',
    description:
      'Diving, whale sharks in Oslob, and the stunning Casaroro Falls.',
    price: 'PHP 13,888',
    image:
      'https://images.unsplash.com/flagged/photo-1552015079-01226be103c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzNTl8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
  {
    name: 'El Nido',
    tag: 'Beach & Islands',
    description:
      'Dramatic limestone cliffs, secret lagoons, and pristine beaches.',
    price: 'PHP 14,888',
    image:
      'https://images.unsplash.com/photo-1771533679926-65e53e4ea7e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzNjR8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
  {
    name: 'Iloilo',
    tag: 'City & Culture',
    description:
      'Ancestral houses, vibrant festivals, and fresh seafood.',
    price: 'PHP 12,888',
    image:
      'https://images.unsplash.com/photo-1771019973254-2e5fe9c51db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzNzB8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['City'],
  },
  {
    name: 'Puerto Princesa',
    tag: 'Nature & Adventure',
    description:
      'Home of the Underground River — a UNESCO World Heritage Site.',
    price: 'PHP 16,888',
    image:
      'https://images.unsplash.com/photo-1753482770920-aab0bc38319c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzODB8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Adventure'],
  },
  {
    name: 'Siargao',
    tag: 'Surf & Beach',
    description:
      'Surfing capital of the Philippines — Cloud 9 waves and lagoons.',
    price: 'PHP 15,888',
    image:
      'https://images.unsplash.com/photo-1622480981421-2f381dcd6e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzODV8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
  {
    name: 'Siquijor',
    tag: 'Beach & Mystical',
    description:
      'Mystical waterfalls, century-old balete trees, and turquoise coves.',
    price: 'PHP 13,888',
    image:
      'https://images.unsplash.com/photo-1725357347354-12478ffe10ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDgzOTJ8&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['Beach'],
  },
]
