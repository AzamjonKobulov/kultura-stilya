'use client';

export default function SortBySizes({
  activeSizeBtn,
  setActiveSizeBtn,
  handleSizeChange,
  sizes,
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-base font-bold ml-5">Размер</h4>
      <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSizeBtn(index);
              handleSizeChange(size.size);
            }}
            className={`${
              index === 0 ? 'ml-5' : index === sizes.length - 1 ? 'mr-5' : ''
            } ${
              activeSizeBtn === index
                ? 'bg-brand-red rounded-full border-brand-red'
                : ''
            }  flex flex-col text-center text-sm font-semibold text-brand-gray-200 whitespace-nowrap px-2.5 py-0.5`}
          >
            <span
              className={`text-sm font-semibold mx-auto ${
                activeSizeBtn === index ? 'text-white' : 'text-black'
              }`}
            >
              {size.size}
            </span>
            <span
              className={`text-xs font-normal ${
                activeSizeBtn === index ? 'text-white' : 'text-brand-gray-200'
              }`}
            >
              {size.sm} см
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
