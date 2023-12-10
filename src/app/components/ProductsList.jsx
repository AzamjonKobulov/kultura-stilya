import { useSearchContext } from '../contexts/SearchContext';

import BrandsTabs from './BrandsTabs';
import Product from './Product';

export default function ProductsList() {
  const { updatedProducts, isSearching, brandName, searchTerm } =
    useSearchContext();

  return (
    <div>
      {!isSearching && <BrandsTabs />}
      <div className="grid grid-cols-2 gap-x-5 gap-y-2 px-5 mt-7">
        {brandName === 'Все'
          ? updatedProducts
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product, index) => (
                <Product key={index} product={product} />
              ))
          : updatedProducts
              .filter((item) => item.brand === brandName)
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
      </div>
    </div>
  );
}
