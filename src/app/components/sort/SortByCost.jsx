'use client';

export default function SortByCost({
  minCost,
  maxCost,
  handleMinCostChange,
  handleMaxCostChange,
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-base font-bold ml-5">Цена от и до</h4>
      <div className="grid grid-cols-2 auto gap-5 px-5">
        <input
          type="number"
          className="h-11 rounded-[10px] font-medium bg-brand-gray-100 border border-brand-gray-100 focus:bg-white focus:border-brand-gray-200 outline-none px-5"
          placeholder="от 5 000 ₽"
          value={minCost === null ? '' : minCost}
          onChange={handleMinCostChange}
        />
        <input
          type="number"
          className="h-11 rounded-[10px] font-medium bg-brand-gray-100 border border-brand-gray-100 focus:bg-white focus:border-brand-gray-200 outline-none px-5"
          placeholder="до 150 000 ₽"
          value={maxCost === null ? '' : maxCost}
          onChange={handleMaxCostChange}
        />
      </div>
    </div>
  );
}
