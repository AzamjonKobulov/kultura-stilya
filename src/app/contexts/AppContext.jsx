'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const products = [
  {
    id: 1,
    image: '/assets/images/product-2.svg',
    name: 'Adidas',
    cost: '5 000',
    brand: 'Adidas',
  },
  {
    id: 2,
    image: '/assets/images/product-3.svg',
    name: 'Adidas',
    cost: '5 000',
    brand: 'Adidas',
  },
  {
    id: 3,
    image: '/assets/images/product-2.svg',
    name: 'Puma',
    cost: '5 000',
    brand: 'Puma',
  },
  {
    id: 4,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 5,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 6,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 7,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 8,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 9,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 10,
    image: '/assets/images/product-2.svg',
    name: 'Adidas',
    cost: '5 000',
    brand: 'Adidas',
  },
  {
    id: 11,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 12,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 13,
    image: '/assets/images/product-2.svg',
    name: 'Puma',
    cost: '5 000',
    brand: 'Puma',
  },
  {
    id: 14,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 15,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 16,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 17,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 18,
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 19,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 20,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 21,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 22,
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 23,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 24,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 25,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 26,
    image: '/assets/images/product-3.svg',
    name: 'Nike',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 27,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 28,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 29,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 30,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 31,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 32,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 33,
    image: '/assets/images/product-3.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 34,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
  {
    id: 35,
    image: '/assets/images/product-2.svg',
    name: 'Air Max new',
    cost: '5 000',
    brand: 'Nike',
  },
];

export const AppContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const [brandName, setBrandName] = useState('Все');
  const [searchedTerms, setSearchedTerms] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  console.log(searchTerm);

  const handleBrandName = (brand) => {
    setBrandName(brand);
  };

  const productNotFound = updatedProducts.length === 0;

  const handleSearchTerm = (e) => {
    const inputValue = e.target.value.trim(); // Trim leading and trailing spaces

    setSearchTerm(inputValue);
    setBrandName('Все');

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setUpdatedProducts(() => {
      if (inputValue === '') {
        setIsSearching(false); // Set isSearching to false when input is empty
        return products;
      } else {
        setIsSearching(true); // Set isSearching to true when input is not empty
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

  return (
    <AppContext.Provider
      value={{
        products,
        searchTerm,
        searchedTerms,
        updatedProducts,
        brandName,
        searchedTerms,

        setSearchTerm,
        setIsSearching,
        setUpdatedProducts,

        handleBrandName,
        handleSearchTerm,
        handleAddSearchedTerm,
        handleClearSearchHistory,

        productNotFound,
        isSearching,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
