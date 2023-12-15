export const brands = [
  { brand: 'Все' },
  { brand: 'Nike' },
  { brand: 'New Balance' },
  { brand: 'Adidas' },
  { brand: 'Converse' },
  { brand: 'Puma' },
];

export const sexes = [
  { sex: 'Всех' },
  { sex: 'Мужчин' },
  { sex: 'Женщин' },
  { sex: 'Детей' },
];

export const sizes = [
  { size: 38, sm: 38 },
  { size: 39, sm: 39 },
  { size: 40, sm: 40 },
  { size: 41, sm: 41 },
  { size: 42, sm: 42 },
];

export const sorts = [
  { sort: 'Популярные' },
  { sort: 'Со скидкой' },
  { sort: 'Увеличение цены' },
  { sort: 'Снижение цены' },
];

export const products = [
  {
    id: '1',
    image: '/assets/images/product-2.svg',
    name: 'Adidas',
    brand: 'Adidas',
    cost: 5000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 16,
    discount: true,
    size: 40,
    color: '#000',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '2',
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    brand: 'Nike',
    cost: 7000,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 10,
    discount: false,
    size: 38,
    color: '#FFF',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '3',
    image: '/assets/images/product-2.svg',
    name: 'Puma',
    brand: 'Puma',
    cost: 3000,
    forMan: false,
    forChild: true,
    forWomen: false,
    popularity: 5,
    discount: true,
    size: 39,
    color: '#3F89E1',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '4',
    image: '/assets/images/product-3.svg',
    name: 'New Balance',
    brand: 'New Balance',
    cost: 9000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 20,
    discount: false,
    size: 41,
    color: '#C184D0',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '5',
    image: '/assets/images/product-2.svg',
    name: 'Converse',
    brand: 'Converse',
    cost: 4500,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 9,
    discount: false,
    size: 42,
    color: '#DBD200',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '1',
    image: '/assets/images/product-2.svg',
    name: 'Adidas',
    brand: 'Adidas',
    cost: 5000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 16,
    discount: true,
    size: 40,
    color: '#000',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '2',
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    brand: 'Nike',
    cost: 7000,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 10,
    discount: false,
    size: 38,
    color: '#FFF',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '3',
    image: '/assets/images/product-2.svg',
    name: 'Puma',
    brand: 'Puma',
    cost: 3000,
    forMan: false,
    forChild: true,
    forWomen: false,
    popularity: 5,
    discount: true,
    size: 39,
    color: '#3F89E1',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '4',
    image: '/assets/images/product-3.svg',
    name: 'New Balance',
    brand: 'New Balance',
    cost: 9000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 20,
    discount: false,
    size: 41,
    color: '#C184D0',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '5',
    image: '/assets/images/product-2.svg',
    name: 'Converse',
    brand: 'Converse',
    cost: 4500,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 9,
    discount: false,
    size: 42,
    color: '#DBD200',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '1',
    image: '/assets/images/product-2.svg',
    name: 'Adidas',
    brand: 'Adidas',
    cost: 5000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 16,
    discount: true,
    size: 40,
    color: '#000',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '2',
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    brand: 'Nike',
    cost: 7000,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 10,
    discount: false,
    size: 38,
    color: '#FFF',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '3',
    image: '/assets/images/product-2.svg',
    name: 'Puma',
    brand: 'Puma',
    cost: 3000,
    forMan: false,
    forChild: true,
    forWomen: false,
    popularity: 5,
    discount: true,
    size: 39,
    color: '#3F89E1',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '4',
    image: '/assets/images/product-3.svg',
    name: 'New Balance',
    brand: 'New Balance',
    cost: 9000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 20,
    discount: false,
    size: 41,
    color: '#C184D0',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '5',
    image: '/assets/images/product-2.svg',
    name: 'Converse',
    brand: 'Converse',
    cost: 4500,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 9,
    discount: false,
    size: 42,
    color: '#DBD200',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '1',
    image: '/assets/images/product-2.svg',
    name: 'Adidas',
    brand: 'Adidas',
    cost: 5000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 16,
    discount: true,
    size: 40,
    color: '#000',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '2',
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    brand: 'Nike',
    cost: 7000,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 10,
    discount: false,
    size: 38,
    color: '#FFF',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '3',
    image: '/assets/images/product-2.svg',
    name: 'Puma',
    brand: 'Puma',
    cost: 3000,
    forMan: false,
    forChild: true,
    forWomen: false,
    popularity: 5,
    discount: true,
    size: 39,
    color: '#3F89E1',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '4',
    image: '/assets/images/product-3.svg',
    name: 'New Balance',
    brand: 'New Balance',
    cost: 9000,
    forMan: true,
    forChild: false,
    forWomen: false,
    popularity: 20,
    discount: false,
    size: 41,
    color: '#C184D0',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
  {
    id: '5',
    image: '/assets/images/product-2.svg',
    name: 'Converse',
    brand: 'Converse',
    cost: 4500,
    forMan: false,
    forChild: false,
    forWomen: true,
    popularity: 9,
    discount: false,
    size: 42,
    color: '#DBD200',
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
    description:
      'Описание самих кроссовок, модели, материалов и т.д. Описание самих кроссовок, мо....',
    images: [
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
      {
        description: 'lorem ipsum dolor',
        image: '/assets/images/img-product-detail.png',
      },
    ],
  },
];
