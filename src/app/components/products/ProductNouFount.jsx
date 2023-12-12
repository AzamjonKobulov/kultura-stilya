import { useAppContext } from '../../contexts/AppContext';

import Image from 'next/image';
import Link from 'next/link';
import SearchingNumberOfResults from '../search/SearchingNumberOfResults';

export default function ProductNotFound() {
  const { updatedProducts, searchTerm } = useAppContext();

  return (
    <div className="space-y-10 mt-4">
      <SearchingNumberOfResults
        updatedProductsNumber={updatedProducts.length}
        searchedTerm={searchTerm}
      />
      <div className="space-y-10">
        <Image
          src="/assets/images/product-2.svg"
          className="w-1/2 mx-auto"
          alt="No item"
          width={100}
          height={100}
        />
        <div className="text-center space-y-1 px-3">
          <p className="font-bold text-black text-base">Не найдено</p>
          <p className="text-black font-medium">
            Не нашли у нас? Свяжитесь с менеджером, он оперативно поможет вам
            найти необходимую модель.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/how-to-order"
            className="text-base font-semibold text-white bg-black rounded-full py-[15px] px-[30px]"
          >
            Написать менеджеру
          </Link>
        </div>
      </div>
    </div>
  );
}
