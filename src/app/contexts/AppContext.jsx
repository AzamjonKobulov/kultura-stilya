'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { products } from '../data/data';

const AppContext = createContext();

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
