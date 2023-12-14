'use client';

import { useAppContext } from '../contexts/AppContext';

import InfoBlocks from '../components/InfoBlocks';
import MainProductSlider from '../components/products/MainProductSlider';
import ProductsList from '../components/products/ProductsList';
import SearchInput from '../components/search/SearchInput';
import SelectAndOrder from '../components/search/SelectAndOrder';
import SearchHistory from '../components/search/SearchHistory';
import ProductNotFound from '../components/products/ProductNouFount';
import SortingAndFilter from '../components/sort/SortingAndFilter';
import { FilterContextProvider } from '../contexts/FilterContext';

export default function ProductsPage() {
  const { isSearching, productNotFound } = useAppContext();

  return (
    <div className="pb-10">
      <div className="px-5">
        <SearchInput />
        <FilterContextProvider>
          <SortingAndFilter />
        </FilterContextProvider>
        {isSearching && productNotFound && <ProductNotFound />}
        {isSearching && !productNotFound && <SearchHistory />}
        {!isSearching && (
          <div>
            <InfoBlocks />
            <SelectAndOrder />
            <MainProductSlider />
          </div>
        )}
      </div>
      <ProductsList />
    </div>
  );
}
