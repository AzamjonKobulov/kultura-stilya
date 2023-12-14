'use client';

export default function SortByBrands({
  setActiveBrandBtn,
  handleBrandChange,
  activeBrandBtn,
  brands,
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-base font-bold ml-5">Бренд</h4>
      <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
        {brands.map((brand, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveBrandBtn(index);
              handleBrandChange(brand.brand);
            }}
            className={`${
              index === 0 ? 'ml-5' : index === brands.length - 1 ? 'mr-5' : ''
            } ${
              activeBrandBtn === index
                ? 'bg-brand-red rounded-full text-white border-brand-red'
                : ''
            }  h-7 text-sm font-semibold text-brand-gray-200 whitespace-nowrap px-3 pt-0.5`}
          >
            {brand.brand}
          </button>
        ))}
      </div>
    </div>
  );
}
