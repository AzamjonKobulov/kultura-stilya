'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const products = [
  {
    id: '1',
    image: '/assets/images/product-2.svg',
    name: 'Adidas',
    cost: '5 000',
    brand: 'Adidas',
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
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
  },
  {
    id: '2',
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    cost: '5 000',
    brand: 'Nike',
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
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
  },
  {
    id: '3',
    image: '/assets/images/product-2.svg',
    name: 'Puma',
    cost: '5 000',
    brand: 'Puma',
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
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
  },
  {
    id: '4',
    image: '/assets/images/product-3.svg',
    name: 'New Balance',
    cost: '5 000',
    brand: 'New Balance',
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
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
  },
  {
    id: '5',
    image: '/assets/images/product-2.svg',
    name: 'Converse',
    cost: '5 000',
    brand: 'Converse',
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
    sizes: [38, 39, 40, 41, 42],
    colors: ['#000', '#FFF', '#3F89E1', '#C184D0', '#DBD200'],
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
          return [...searchedTerms, searched];
        }
      });

      localStorage.setItem(
        'searched-terms',
        JSON.stringify([...searchedTerms, searched])
      );
    }

    return;
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
