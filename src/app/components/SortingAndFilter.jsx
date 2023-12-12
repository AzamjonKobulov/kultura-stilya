'use client';

import { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

const brands = [
  { brand: 'Все' },
  { brand: 'Nike' },
  { brand: 'New Balance' },
  { brand: 'Adidas' },
  { brand: 'Converse' },
  { brand: 'Puma' },
];

const sexes = [
  { sex: 'Всех' },
  { sex: 'Мужчин' },
  { sex: 'Женщин' },
  { sex: 'Детей' },
];

const sizes = [
  { size: 38, sm: 38 },
  { size: 39, sm: 39 },
  { size: 40, sm: 40 },
  { size: 41, sm: 41 },
  { size: 42, sm: 42 },
];

const sorts = [
  { sort: 'Популярные' },
  { sort: 'Со скидкой' },
  { sort: 'Увеличение цены' },
];

export default function SortingAndFilter() {
  const { setIsFilterOpen, isFilterOpen } = useAppContext();

  const [startY, setStartY] = useState(0);

  const [activeBrandBtn, setActiveBrandBtn] = useState(0);
  const [activeSexBtn, setActiveSexBtn] = useState(0);
  const [activeSizeBtn, setActiveSizeBtn] = useState(0);
  const [activeSortsBtn, setActiveSortsBtn] = useState(0);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 50) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsFilterOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div>
      <div
        className={`max-w-base left-1/2 -translate-x-1/2 flex items-end inset-0 bg-brand-overlay z-40 ${
          isFilterOpen ? 'absolute' : 'hidden'
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`absolute max-w-base left-1/2 -translate-x-1/2 bottom-0 z-50 bg-white w-full transition-all duration-300 rounded-t-18 pt-3.5 pb-10 ${
          isFilterOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <div className="w-14 h-0.5 mx-auto bg-brand-gray-100"></div>
          <h4 className="text-base font-bold text-center mt-2.5">
            Сортировка и фильтр
          </h4>
        </div>

        <div className="space-y-4 mt-5">
          {/* BRANDS */}
          <div className="space-y-4">
            <h4 className="text-base font-bold ml-5">Бренд</h4>
            <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
              {brands.map((brand, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBrandBtn(index)}
                  className={`${
                    index === 0
                      ? 'ml-5'
                      : index === brands.length - 1
                      ? 'mr-5'
                      : ''
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

          {/* SEXES */}
          <div className="space-y-4">
            <h4 className="text-base font-bold ml-5">Подходят для</h4>
            <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
              {sexes.map((sex, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSexBtn(index)}
                  className={`${
                    index === 0
                      ? 'ml-5'
                      : index === sexes.length - 1
                      ? 'mr-5'
                      : ''
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

          {/* SIZES */}
          <div className="space-y-4">
            <h4 className="text-base font-bold ml-5">Размер</h4>
            <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSizeBtn(index)}
                  className={`${
                    index === 0
                      ? 'ml-5'
                      : index === sizes.length - 1
                      ? 'mr-5'
                      : ''
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
                      activeSizeBtn === index
                        ? 'text-white'
                        : 'text-brand-gray-200'
                    }`}
                  >
                    {size.sm} см
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SORT */}
          <div className="space-y-4">
            <h4 className="text-base font-bold ml-5">Цена от и до</h4>
            <div className="grid grid-cols-2 auto gap-5 px-5">
              <input
                type="text"
                className="h-11 rounded-[10px] font-medium bg-brand-gray-100 border border-brand-gray-100 focus:bg-white focus:border-brand-gray-200 outline-none px-5"
                placeholder="от 5 000 ₽"
              />
              <input
                type="text"
                className="h-11 rounded-[10px] font-medium bg-brand-gray-100 border border-brand-gray-100 focus:bg-white focus:border-brand-gray-200 outline-none px-5"
                placeholder="до 150 000 ₽"
              />
            </div>
          </div>

          {/* SORT */}
          <div className="space-y-4">
            <h4 className="text-base font-bold ml-5">Подходят для</h4>
            <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
              {sorts.map((sort, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSortsBtn(index)}
                  className={`${
                    index === 0
                      ? 'ml-5'
                      : index === sorts.length - 1
                      ? 'mr-5'
                      : ''
                  } ${
                    activeSortsBtn === index
                      ? 'bg-brand-red rounded-full text-white border-brand-red'
                      : ''
                  }  h-7 flex items-center gap-1 text-sm font-semibold text-brand-gray-200 whitespace-nowrap px-3 pt-0.5`}
                >
                  {sort.sort}{' '}
                  {sort.sort === 'Со скидкой' && (
                    <span>
                      {' '}
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          activeSortsBtn === index
                            ? ' stroke-white fill-brand-red'
                            : ' stroke-brand-red fill-white'
                        }
                      >
                        <path
                          d="M10.5047 15.3825C9.84857 16.0387 8.78469 16.0387 8.1285 15.3825L1.49213 8.74615C1.17702 8.43106 1 8.00365 1 7.55807V2.8057C1 1.87774 1.75225 1.12549 2.68021 1.12549H7.43258C7.87816 1.12549 8.30557 1.30251 8.62066 1.61761L15.257 8.25399C15.9132 8.91018 15.9132 9.97406 15.257 10.6302L10.5047 15.3825Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.71692 3.84241L4.10505 4.23054"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-2.5 text-base text-white font-semibold mt-12 px-5">
          <button className="min-w-[171px] w-full h-12 bg-brand-gray-200 rounded-full px-5">
            Сбросить фильтр
          </button>
          <button className="min-w-[154px] w-full h-12 bg-black rounded-full px-5">
            Применить
          </button>
        </div>
      </div>
    </div>
  );
}
