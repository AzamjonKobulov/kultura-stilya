'use client';

import React, { createContext, useContext, useState } from 'react';
import { brands, sexes, sizes, sorts } from '../data/filterOptions'; // Adjust the path accordingly

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState('Все');
  const [selectedSex, setSelectedSex] = useState('Всех');
  const [selectedSize, setSelectedSize] = useState(null);
  const [minCost, setMinCost] = useState(null);
  const [maxCost, setMaxCost] = useState(null);
  const [selectedSort, setSelectedSort] = useState('Популярные');

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSexChange = (sex) => {
    setSelectedSex(sex);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleMinCostChange = (e) => {
    const minValue =
      e.target.value === '' ? null : parseInt(e.target.value, 10);
    setMinCost(minValue);
  };

  const handleMaxCostChange = (e) => {
    const maxValue =
      e.target.value === '' ? null : parseInt(e.target.value, 10);
    setMaxCost(maxValue);
  };

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <FilterContext.Provider
      value={{
        brands,
        sexes,
        sizes,
        sorts,
        selectedBrand,
        selectedSex,
        selectedSize,
        minCost,
        maxCost,
        selectedSort,
        handleBrandChange,
        handleSexChange,
        handleSizeChange,
        handleMinCostChange,
        handleMaxCostChange,
        handleSortChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
