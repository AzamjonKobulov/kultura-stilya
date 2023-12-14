'use client';

import { useState } from 'react';
import { useAppContext } from '@/app/contexts/AppContext';
import { useFilterContext } from '@/app/contexts/FilterContext';

import SortByBrands from './SortByBrands';
import SortBySexes from './SortBySexes';
import SortBySizes from './SortBySizes';
import SortByCost from './SortByCost';
import SortBySort from './SortBySort';

export default function SortingAndFilter() {
  const { isFilterOpen, products, setUpdatedProducts, setIsFilterOpen } =
    useAppContext();

  const {
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
  } = useFilterContext();

  const [startY, setStartY] = useState(0);

  const [activeBrandBtn, setActiveBrandBtn] = useState(0);
  const [activeSexBtn, setActiveSexBtn] = useState(0);
  const [activeSizeBtn, setActiveSizeBtn] = useState(0);
  const [activeSortsBtn, setActiveSortsBtn] = useState(0);

  const applyFilters = () => {
    const filteredProducts = products.filter((product) => {
      return (
        (selectedBrand === 'Все' || product.brand === selectedBrand) &&
        (selectedSex === 'Всех' ||
          (product.forMan && selectedSex === 'Мужчин') ||
          (product.forWomen && selectedSex === 'Женщин') ||
          (product.forChild && selectedSex === 'Детей')) &&
        (selectedSize === null || product.size === selectedSize) && // Use product.size instead of product.sizes
        (minCost === null || product.cost >= minCost) &&
        (maxCost === null || product.cost <= maxCost)
      );
    });

    const sortedProducts = sortProducts(filteredProducts, selectedSort);

    setUpdatedProducts(sortedProducts);

    setTimeout(() => {
      setIsFilterOpen(false);
      document.body.classList.remove('overflow-hidden');
    }, 300);
  };

  const resetFilters = () => {
    setActiveBrandBtn(0);
    setActiveSexBtn(0);
    setActiveSizeBtn(0);
    setActiveSortsBtn(0);

    handleBrandChange('Все');
    handleSexChange('Всех');
    handleSizeChange(null);
    handleMinCostChange(null);
    handleMaxCostChange(null);
    handleSortChange('Популярные');

    setUpdatedProducts(products);

    setIsFilterOpen(false);
  };

  const sortProducts = (products, sortOption) => {
    switch (sortOption) {
      case 'Популярные':
        return products.sort((a, b) => b.popularity - a.popularity);
      case 'Со скидкой':
        return products
          .filter((product) => product.discount)
          .sort((a, b) => b.popularity - a.popularity);
      case 'Увеличение цены':
        return products.sort((a, b) => b.cost - a.cost);
      case 'Снижение цены':
        return products.sort((a, b) => a.cost - b.cost);
      default:
        return products;
    }
  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 50) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsFilterOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div>
      <div
        className={`max-w-base mx-auto flex items-end inset-0 bg-brand-overlay z-40 ${
          isFilterOpen ? 'fixed' : 'hidden'
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`fixed max-w-base left-1/2 -translate-x-1/2 bottom-0 z-50 bg-white w-full transition-all duration-300 rounded-t-18 pt-3.5 pb-10 ${
          isFilterOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <div className="w-14 h-0.5 mx-auto bg-brand-gray-100"></div>
          <h4 className="text-base font-bold text-center mt-2.5">
            Сортировка и фильтр
          </h4>
        </div>

        <div className="space-y-4 mt-5">
          {/* BRANDS */}
          <SortByBrands
            brands={brands}
            setActiveBrandBtn={setActiveBrandBtn}
            activeBrandBtn={activeBrandBtn}
            handleBrandChange={handleBrandChange}
          />

          {/* SEXES */}
          <SortBySexes
            sexes={sexes}
            activeSexBtn={activeSexBtn}
            setActiveSexBtn={setActiveSexBtn}
            handleSexChange={handleSexChange}
          />

          {/* SIZES */}
          <SortBySizes
            sizes={sizes}
            activeSizeBtn={activeSizeBtn}
            setActiveSizeBtn={setActiveSizeBtn}
            handleSizeChange={handleSizeChange}
          />

          {/* COST */}
          <SortByCost
            minCost={minCost}
            maxCost={maxCost}
            handleMinCostChange={handleMinCostChange}
            handleMaxCostChange={handleMaxCostChange}
          />

          {/* SORT */}
          <SortBySort
            sorts={sorts}
            activeSortsBtn={activeSortsBtn}
            handleSortChange={handleSortChange}
            setActiveSortsBtn={setActiveSortsBtn}
          />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-2.5 text-base text-white font-semibold mt-12 px-5">
          <button
            onClick={resetFilters}
            className="min-w-[171px] w-full h-12 bg-brand-gray-200 rounded-full px-5"
          >
            Сбросить фильтр
          </button>
          <button
            onClick={applyFilters}
            className="min-w-[154px] w-full h-12 bg-black rounded-full px-5"
          >
            Применить
          </button>
        </div>
      </div>
    </div>
  );
}
