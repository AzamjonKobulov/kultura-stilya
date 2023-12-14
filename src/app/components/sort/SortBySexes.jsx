'use client';

export default function SortBySexes({
  activeSexBtn,
  setActiveSexBtn,
  handleSexChange,
  sexes,
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-base font-bold ml-5">Подходят для</h4>
      <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
        {sexes.map((sex, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSexBtn(index);
              handleSexChange(sex.sex);
            }}
            className={`${
              index === 0 ? 'ml-5' : index === sexes.length - 1 ? 'mr-5' : ''
            } ${
              activeSexBtn === index
                ? 'bg-brand-red rounded-full text-white border-brand-red'
                : ''
            }  h-7 text-sm font-semibold text-brand-gray-200 whitespace-nowrap px-3 pt-0.5`}
          >
            {sex.sex}
          </button>
        ))}
      </div>
    </div>
  );
}
