'use client';

import { useSearchContext } from '../contexts/SearchContext';

import SearchingNumberOfResults from './SearchingNumberOfResults';

export default function SearchHistory() {
  const {
    updatedProducts,
    searchTerm,
    searchedTerms,
    setSearchTerm,
    setUpdatedProducts,
    products,
  } = useSearchContext();

  const handleSearchedTermClick = (item) => {
    setUpdatedProducts(products);

    setSearchTerm(item.term);
  };

  return (
    <div className="space-y-5 mt-5">
      <SearchingNumberOfResults
        updatedProductsNumber={updatedProducts.length}
        searchedTerm={searchTerm}
      />
      <div className="flex flex-wrap items-center gap-2.5">
        {searchedTerms.map((item, index) => (
          <button
            key={index}
            className="h-8 bg-brand-gray-100 rounded-full px-3"
            onClick={() => handleSearchedTermClick(item)}
          >
            {item.term}
          </button>
        ))}
      </div>
    </div>
  );
}
