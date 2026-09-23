export interface PropertyImage {
  id: number;
  url: string;
  alt: string;
  category?: 'lazer' | 'residencia' | 'natureza';
}

export const PROPERTY_IMAGES: PropertyImage[] = [
  {
    id: 1,
    url: 'https://i.postimg.cc/TPdm1KWF/IMG-20260922-WA0000.jpg',
    alt: 'Chácara Condomínio Alphaville - Fachada principal e área externa',
    category: 'residencia',
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/8CZv6TRw/IMG-20260922-WA0002.jpg',
    alt: 'Chácara Condomínio Alphaville - Área da piscina e lazer',
    category: 'lazer',
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/hG2mdKLZ/IMG-20260922-WA0004.jpg',
    alt: 'Chácara Condomínio Alphaville - Espaço gourmet e varanda',
    category: 'lazer',
  },
  {
    id: 4,
    url: 'https://i.postimg.cc/d05CyJ2j/IMG-20260922-WA0006.jpg',
    alt: 'Chácara Condomínio Alphaville - Vista do terreno de 3.120 m²',
    category: 'natureza',
  },
  {
    id: 5,
    url: 'https://i.postimg.cc/JhpXkRNP/IMG-20260922-WA0008.jpg',
    alt: 'Chácara Condomínio Alphaville - Vista integrada da residência',
    category: 'residencia',
  },
  {
    id: 6,
    url: 'https://i.postimg.cc/hG2mdKLC/IMG-20260922-WA0010.jpg',
    alt: 'Chácara Condomínio Alphaville - Ampla área verde e paisagismo',
    category: 'natureza',
  },
  {
    id: 7,
    url: 'https://i.postimg.cc/9fL97cdL/IMG-20260922-WA0012.jpg',
    alt: 'Chácara Condomínio Alphaville - Estrutura residencial e acabamentos',
    category: 'residencia',
  },
  {
    id: 8,
    url: 'https://i.postimg.cc/JhpXkRNQ/IMG-20260922-WA0001.jpg',
    alt: 'Chácara Condomínio Alphaville - Ambientes e iluminação natural',
    category: 'residencia',
  },
  {
    id: 9,
    url: 'https://i.postimg.cc/cJF3ndRM/IMG-20260922-WA0003.jpg',
    alt: 'Chácara Condomínio Alphaville - Espaço de convivência e lazer',
    category: 'lazer',
  },
  {
    id: 10,
    url: 'https://i.postimg.cc/s2TWh3Y6/IMG-20260922-WA0005.jpg',
    alt: 'Chácara Condomínio Alphaville - Detalhes da edificação',
    category: 'residencia',
  },
  {
    id: 11,
    url: 'https://i.postimg.cc/mDhH3KjY/IMG-20260922-WA0009.jpg',
    alt: 'Chácara Condomínio Alphaville - Área livre e platôs',
    category: 'natureza',
  },
  {
    id: 12,
    url: 'https://i.postimg.cc/9Mz7PsbP/IMG-20260922-WA0011.jpg',
    alt: 'Chácara Condomínio Alphaville - Vista panorâmica da propriedade',
    category: 'natureza',
  },
  {
    id: 13,
    url: 'https://i.postimg.cc/GpXDybFS/IMG-20260922-WA0013.jpg',
    alt: 'Chácara Condomínio Alphaville - Perspectiva do condomínio e acesso',
    category: 'natureza',
  },
];

export const BROKER_INFO = {
  name: 'Marcello Soares',
  profession: 'Corretor de imóveis',
  creci: 'CRECI 66632',
  city: 'Bom Despacho - MG',
  whatsappUrl: 'https://wa.link/qq6qs2',
};

export const PROPERTY_INFO = {
  title: 'CHÁCARA CONDOMÍNIO ALPHAVILLE',
  city: 'Bom Despacho - MG',
  valueFormatted: 'R$ 1.300.000,00',
  valueRaw: 1300000,
  tagline: 'Um espaço pensado para viver, receber e aproveitar.',
  totalArea: '3.120 m²',
  builtArea: '320 m²',
  bedrooms: 2,
  suites: 1,
  bathrooms: 2,
  garageSpaces: 3,
  cameras: '7 câmaras',
  concierge: 'Portaria',
  highlights: [
    'Piscina',
    'Espaço gourmet',
    'Projeto pronto para construir dois chalés',
    'Portaria',
    '7 câmaras',
  ],
  houseFeatures: [
    '2 banheiros',
    '2 quartos',
    '1 suíte',
    '3 vagas na garagem',
    '7 câmaras',
    'Portaria',
  ],
  chaletOpportunityTitle: 'PROJETO PRONTO PARA CONSTRUIR DOIS CHALÉS',
  chaletOpportunityDescription:
    'A propriedade conta com projeto pronto para construir dois chalés em sua vasta área de 3.120 m², oferecendo grande potencial de valorização, expansão ou acolhimento para hóspedes com total privacidade.',
};
