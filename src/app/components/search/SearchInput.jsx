import Image from 'next/image';
import { useAppContext } from '../../contexts/AppContext';

export default function SearchInput() {
  const { handleSearchTerm, searchTerm, setIsSearching, handleOpenFilter } =
    useAppContext();

  return (
    <div className="h-11 flex items-center gap-3 rounded-[10px] search-input-shadow mt-5 pl-5 pr-[18px]">
      <input
        type="text"
        onFocus={() => setIsSearching(true)}
        placeholder="Найди свои кроссовки"
        className="w-full text-xs placeholder:text-brand-gray-200 placeholder:font-normal font-medium outline-none leading-normal"
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <button
        onClick={() => {
          setIsSearching(true);
          handleOpenFilter();
        }}
      >
        <Image
          src="/assets/images/icons/filter.svg"
          alt="filter icon"
          width={19}
          height={17}
        />
      </button>
    </div>
  );
}
