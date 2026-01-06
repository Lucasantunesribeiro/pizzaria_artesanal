// Conteúdo estruturado do site - PERSONALIZE AQUI

export type PizzaSize = 'P' | 'M' | 'G'

export interface MenuItem {
  id: string
  name: string
  description: string
  prices: Record<PizzaSize, number>
  category: 'tradicional' | 'especial' | 'doce' | 'bebida'
  tags?: string[] // ex: 'vegetariana', 'picante', 'sem lactose'
  image?: string
}

export interface Combo {
  id: string
  title: string
  description: string
  originalPrice: number
  discountPrice: number
  validity: string
  items: string[]
}

export interface Testimonial {
  id: string
  name: string
  neighborhood: string
  rating: number
  text: string
  date: string
}

export interface FAQ {
  question: string
  answer: string
}

// ==================== CARDÁPIO ====================

export const MENU_ITEMS: MenuItem[] = [
  // TRADICIONAIS
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Molho de tomate San Marzano, mussarela de búfala, manjericão fresco e azeite extravirgem',
    prices: { P: 35.00, M: 52.00, G: 68.00 },
    category: 'tradicional',
    image: '/assets/img/pizzas/margherita.jpg',
    tags: ['vegetariana']
  },
  {
    id: 'calabresa',
    name: 'Calabresa Artesanal',
    description: 'Calabresa defumada fatiada na hora, cebola roxa, azeitonas pretas e orégano',
    prices: { P: 38.00, M: 55.00, G: 72.00 },
    category: 'tradicional',
    image: '/assets/img/pizzas/calabresa.jpg'
  },
  {
    id: 'portuguesa',
    name: 'Portuguesa',
    description: 'Presunto, ovos, cebola, azeitonas, mussarela e orégano',
    prices: { P: 40.00, M: 58.00, G: 75.00 },
    category: 'tradicional',
    image: '/assets/img/pizzas/portuguesa.jpg'
  },
  {
    id: 'frango-catupiry',
    name: 'Frango com Catupiry',
    description: 'Frango desfiado temperado, catupiry original, milho e azeitonas',
    prices: { P: 39.00, M: 56.00, G: 73.00 },
    category: 'tradicional',
    image: '/assets/img/pizzas/frango-catupiry.jpg'
  },
  {
    id: 'quatro-queijos',
    name: 'Quatro Queijos',
    description: 'Mussarela, provolone, parmesão e gorgonzola suave',
    prices: { P: 42.00, M: 60.00, G: 78.00 },
    category: 'tradicional',
    image: '/assets/img/pizzas/quatro-queijos.jpg',
    tags: ['vegetariana']
  },
  {
    id: 'napolitana',
    name: 'Napolitana',
    description: 'Mussarela, tomate fatiado, parmesão, alho e manjericão',
    prices: { P: 37.00, M: 54.00, G: 70.00 },
    category: 'tradicional',
    image: '/assets/img/pizzas/napolitana.jpg',
    tags: ['vegetariana']
  },

  // ESPECIAIS
  {
    id: 'burrata-parma',
    name: 'Burrata com Parma',
    description: 'Burrata cremosa, presunto de Parma, rúcula, tomate seco e redução balsâmica',
    prices: { P: 52.00, M: 75.00, G: 95.00 },
    category: 'especial',
    image: '/assets/img/pizzas/burrata-parma.jpg'
  },
  {
    id: 'trufa-negra',
    name: 'Trufa Negra',
    description: 'Creme de funghi, mussarela de búfala, shimeji salteado e azeite trufado',
    prices: { P: 58.00, M: 82.00, G: 105.00 },
    category: 'especial',
    image: '/assets/img/pizzas/trufa-negra.jpg',
    tags: ['vegetariana']
  },
  {
    id: 'camarao-alho',
    name: 'Camarão ao Alho e Óleo',
    description: 'Camarões tigre, alho crocante, pimenta biquinho, cream cheese e salsinha',
    prices: { P: 55.00, M: 78.00, G: 98.00 },
    category: 'especial',
    image: '/assets/img/pizzas/camarao-alho.jpg'
  },
  {
    id: 'salmao-alcaparras',
    name: 'Salmão com Alcaparras',
    description: 'Salmão defumado, cream cheese, alcaparras, cebola roxa e endro',
    prices: { P: 54.00, M: 76.00, G: 96.00 },
    category: 'especial',
    image: '/assets/img/pizzas/salmao-alcaparras.jpg'
  },
  {
    id: 'ragu-cordeiro',
    name: 'Ragu de Cordeiro',
    description: 'Ragu de cordeiro lentamente cozido, mussarela, hortelã e pimenta rosa',
    prices: { P: 56.00, M: 80.00, G: 102.00 },
    category: 'especial',
    image: '/assets/img/pizzas/ragu-cordeiro.jpg'
  },
  {
    id: 'vegana-berinjela',
    name: 'Vegana de Berinjela',
    description: 'Molho de tomate, berinjela grelhada, abobrinha, pimentão, cogumelos e queijo vegano',
    prices: { P: 45.00, M: 65.00, G: 82.00 },
    category: 'especial',
    image: '/assets/img/pizzas/vegana-berinjela.jpg',
    tags: ['vegetariana', 'vegana']
  },

  // DOCES
  {
    id: 'brigadeiro',
    name: 'Brigadeiro',
    description: 'Brigadeiro cremoso, chocolate belga meio amargo e granulado',
    prices: { P: 32.00, M: 48.00, G: 62.00 },
    category: 'doce',
    image: '/assets/img/menu/brigadeiro.jpg',
    tags: ['vegetariana']
  },
  {
    id: 'romeu-julieta',
    name: 'Romeu e Julieta',
    description: 'Goiabada cascão, queijo minas artesanal e canela',
    prices: { P: 34.00, M: 50.00, G: 65.00 },
    category: 'doce',
    image: '/assets/img/menu/romeu-julieta.jpg',
    tags: ['vegetariana']
  },
  {
    id: 'banana-nutella',
    name: 'Banana com Nutella',
    description: 'Banana caramelizada, Nutella, castanhas e sorvete de creme (opcional)',
    prices: { P: 36.00, M: 52.00, G: 68.00 },
    category: 'doce',
    image: '/assets/img/menu/banana-nutella.jpg',
    tags: ['vegetariana']
  },

  // BEBIDAS
  {
    id: 'coca-cola-2l',
    name: 'Coca-Cola 2L',
    description: 'Refrigerante Coca-Cola 2 litros',
    prices: { P: 12.00, M: 12.00, G: 12.00 },
    category: 'bebida',
    image: '/assets/img/menu/coca-cola-2l.jpg'
  },
  {
    id: 'guarana-2l',
    name: 'Guaraná Antarctica 2L',
    description: 'Refrigerante Guaraná Antarctica 2 litros',
    prices: { P: 11.00, M: 11.00, G: 11.00 },
    category: 'bebida',
    image: '/assets/img/menu/guarana-2l.jpg'
  },
  {
    id: 'suco-laranja',
    name: 'Suco de Laranja Natural 500ml',
    description: 'Suco de laranja 100% natural, sem açúcar',
    prices: { P: 10.00, M: 10.00, G: 10.00 },
    category: 'bebida',
    image: '/assets/img/menu/suco-laranja.jpg',
    tags: ['natural']
  },
  {
    id: 'agua-500ml',
    name: 'Água Mineral 500ml',
    description: 'Água mineral sem gás',
    prices: { P: 4.00, M: 4.00, G: 4.00 },
    category: 'bebida',
    image: '/assets/img/menu/agua-500ml.jpg'
  },
  {
    id: 'cerveja-heineken',
    name: 'Heineken Long Neck',
    description: 'Cerveja Heineken 330ml',
    prices: { P: 9.00, M: 9.00, G: 9.00 },
    category: 'bebida',
    image: '/assets/img/menu/cerveja-heineken.jpg'
  }
]

// ==================== COMBOS ====================

export const COMBOS: Combo[] = [
  {
    id: 'combo-familia',
    title: 'Combo Família',
    description: '2 Pizzas Grandes + 2 Refrigerantes 2L',
    originalPrice: 156.00,
    discountPrice: 139.90,
    validity: 'Válido de segunda a quinta',
    items: ['2 pizzas grandes (tradicionais)', '2 refrigerantes 2L']
  },
  {
    id: 'combo-casal',
    title: 'Combo Casal',
    description: '1 Pizza Média + 1 Pizza Doce Pequena + 1 Refrigerante 2L',
    originalPrice: 108.00,
    discountPrice: 94.90,
    validity: 'Todos os dias',
    items: ['1 pizza média (tradicional)', '1 pizza doce pequena', '1 refrigerante 2L']
  },
  {
    id: 'combo-especial',
    title: 'Combo Especial Premium',
    description: '1 Pizza Especial Grande + 2 Cervejas',
    originalPrice: 113.00,
    discountPrice: 99.90,
    validity: 'Válido de sexta a domingo',
    items: ['1 pizza especial grande', '2 cervejas long neck']
  }
]

// ==================== DEPOIMENTOS ====================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    neighborhood: 'Ipanema',
    rating: 5,
    text: 'A melhor pizza que já comi no Rio! A massa é leve, os ingredientes são frescos e a burrata com parma é divina. Sempre peço e nunca me decepciono.',
    date: '2024-12-10'
  },
  {
    id: '2',
    name: 'Roberto Santos',
    neighborhood: 'Botafogo',
    rating: 5,
    text: 'Massa fina e crocante, fermentação natural nota 10. A calabresa artesanal é sensacional. Entrega sempre no prazo!',
    date: '2024-12-08'
  },
  {
    id: '3',
    name: 'Juliana Costa',
    neighborhood: 'Leblon',
    rating: 5,
    text: 'Virei cliente fiel! A trufa negra é impecável e o atendimento no WhatsApp é super rápido e atencioso. Vale cada centavo.',
    date: '2024-12-05'
  },
  {
    id: '4',
    name: 'Fernando Oliveira',
    neighborhood: 'Copacabana',
    rating: 4,
    text: 'Pizza de qualidade excepcional. O combo família é ótimo custo-benefício. Única sugestão: mais opções veganas no cardápio!',
    date: '2024-12-01'
  }
]

// ==================== FAQ ====================

export const FAQS: FAQ[] = [
  {
    question: 'Quais bairros vocês entregam?',
    answer: 'Atendemos Copacabana, Ipanema, Leblon, Botafogo, Flamengo, Laranjeiras, Humaitá e Jardim Botânico. Taxa de entrega: R$ 8,00 para todos os bairros.'
  },
  {
    question: 'Qual o tempo médio de entrega?',
    answer: 'O tempo médio é de 40 a 50 minutos. Pizzas feitas sob encomenda no forno a lenha, garantindo frescor e qualidade.'
  },
  {
    question: 'Posso retirar no local?',
    answer: 'Sim! Aceitamos retirada em Copacabana (Rua das Pizzas, 123). Retire sem taxa adicional. Aguarde confirmação via WhatsApp antes de ir buscar.'
  },
  {
    question: 'Quais formas de pagamento?',
    answer: 'Aceitamos Pix, dinheiro, cartão de débito e crédito (na entrega). Pagamento online via Pix recebe 5% de desconto.'
  },
  {
    question: 'Vocês têm opções veganas e sem glúten?',
    answer: 'Sim! Temos a pizza Vegana de Berinjela. Massa sem glúten sob encomenda (avisar com 24h de antecedência). Entre em contato para mais opções.'
  },
  {
    question: 'Como funciona a massa com fermentação natural?',
    answer: 'Nossa massa fermenta por 48-72 horas, resultando em uma pizza mais leve, crocante e digestiva. Técnica italiana tradicional.'
  },
  {
    question: 'Informam alérgenos?',
    answer: 'Sim. Nossas pizzas contêm glúten e lactose (exceto a vegana). Para alergias específicas, consulte-nos via WhatsApp antes do pedido.'
  },
  {
    question: 'Qual o pedido mínimo?',
    answer: 'Não temos pedido mínimo. Você pode pedir apenas uma pizza pequena se desejar.'
  }
]

// ==================== BAIRROS ATENDIDOS ====================

export const DELIVERY_NEIGHBORHOODS = [
  'Copacabana',
  'Ipanema',
  'Leblon',
  'Botafogo',
  'Flamengo',
  'Laranjeiras',
  'Humaitá',
  'Jardim Botânico'
]

// ==================== HERO SECTION ====================

export const HERO_CONTENT = {
  headline: 'Pizza Artesanal de Verdade',
  subheadline: 'Massa com fermentação natural de 72h • Forno a lenha • Ingredientes premium selecionados',
  cta: 'Pedir no WhatsApp',
  features: [
    { icon: 'Truck', label: 'Entrega Rápida' },
    { icon: 'Store', label: 'Retirada no Local' },
    { icon: 'Flame', label: 'Forno a Lenha' }
  ]
}

// ==================== SOBRE/DIFERENCIAL ====================

export const ABOUT_CONTENT = {
  title: 'Por que somos diferentes?',
  items: [
    {
      title: 'Fermentação Lenta',
      description: 'Massa fermentada naturalmente por 72 horas para leveza e digestibilidade'
    },
    {
      title: 'Forno a Lenha 480°C',
      description: 'Cocção em alta temperatura para borda crocante e interior macio'
    },
    {
      title: 'Ingredientes Selecionados',
      description: 'Tomate San Marzano, mussarela de búfala, azeite extravirgem italiano'
    }
  ]
}

// ==================== COMO PEDIR ====================

export const HOW_TO_ORDER = [
  {
    step: 1,
    title: 'Escolha suas pizzas',
    description: 'Navegue pelo cardápio e adicione ao carrinho'
  },
  {
    step: 2,
    title: 'Finalize no WhatsApp',
    description: 'Envie seu pedido direto pelo WhatsApp'
  },
  {
    step: 3,
    title: 'Receba em casa',
    description: 'Entrega em 40-50min ou retire sem taxa'
  }
]
