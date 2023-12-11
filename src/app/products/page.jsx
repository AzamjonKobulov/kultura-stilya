'use client';

import { useAppContext } from '../contexts/AppContext';

import InfoBlocks from '../components/InfoBlocks';
import MainProductSlider from '../components/MainProductSlider';
import ProductsList from '../components/ProductsList';
import SearchInput from '../components/SearchInput';
import SelectAndOrder from '../components/SelectAndOrder';
import SearchHistory from '../components/SearchHistory';
import ProductNotFound from '../components/ProductNouFount';
import SortingAndFilter from '../components/SortingAndFilter';

export default function ProductsPage() {
  const { isSearching, productNotFound } = useAppContext();

  return (
    <div className="pb-10">
      <div className="px-5">
        <SearchInput />
        <SortingAndFilter />
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
