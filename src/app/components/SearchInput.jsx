import Image from 'next/image';
import { useSearchContext } from '../contexts/SearchContext';

export default function SearchInput() {
  const { handleSearchTerm, searchTerm, handleSubmit, setIsSearching } =
    useSearchContext();

  return (
    <div className="h-11 flex items-center gap-3 rounded-[10px] search-input-shadow mt-5 pl-5 pr-[18px]">
      <form className="flex-1" onSubmit={handleSubmit}>
        <input
          type="text"
          onFocus={() => setIsSearching(true)}
          placeholder="Найди свои кроссовки"
          className="w-full text-xs placeholder:text-brand-gray-200 placeholder:font-normal font-medium outline-none leading-normal"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </form>
      <Image
        src="/assets/images/icons/filter.svg"
        alt="filter icon"
        width={19}
        height={17}
      />
    </div>
  );
}
