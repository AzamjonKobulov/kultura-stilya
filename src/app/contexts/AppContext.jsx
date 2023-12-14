'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const products = [
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

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const [brandName, setBrandName] = useState('Все');
  const [searchedTerms, setSearchedTerms] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleBrandName = (brand) => {
    setBrandName(brand);
  };

  const productNotFound = updatedProducts.length === 0;

  const handleSearchTerm = (e) => {
    const inputValue = e.target.value.trim();

    setSearchTerm(inputValue);
    setBrandName('Все');

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setUpdatedProducts(() => {
      if (inputValue === '') {
        setIsSearching(false);
        return products;
      } else {
        setIsSearching(true);
        return filteredProducts;
      }
    });
  };

  const handleAddSearchedTerm = () => {
    if (searchTerm !== '') {
      const searched = {
        term: searchTerm,
      };

      setSearchedTerms((prevTerms) => {
        if (prevTerms.some((item) => item.term === searched.term)) {
          return prevTerms;
        } else {
          const newTerms = [...prevTerms, searched];
          localStorage.setItem('searched-terms', JSON.stringify(newTerms));
          return newTerms;
        }
      });
    }
  };

  useEffect(() => {
    const storedSearchedTerms = localStorage.getItem('searched-terms');
    if (storedSearchedTerms) {
      setSearchedTerms(JSON.parse(storedSearchedTerms));
    }
  }, []);

  const handleClearSearchHistory = () => {
    setSearchedTerms([]);
    localStorage.removeItem('searched-terms');
  };

  const handleOpenFilter = () => {
    setIsFilterOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  return (
    <AppContext.Provider
      value={{
        products,
        searchTerm,
        searchedTerms,
        updatedProducts,
        brandName,
        searchedTerms,
        isFilterOpen,

        setSearchTerm,
        setIsSearching,
        setUpdatedProducts,
        setIsFilterOpen,

        handleBrandName,
        handleSearchTerm,
        handleAddSearchedTerm,
        handleClearSearchHistory,
        handleOpenFilter,

        productNotFound,
        isSearching,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
