'use client';

import React from 'react';

export default function SortBySort({
  activeSortsBtn,
  setActiveSortsBtn,
  handleSortChange,
  sorts,
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-base font-bold ml-5">Сортировка</h4>
      <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
        {sorts.map((sort, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSortsBtn(index);
              handleSortChange(sort.sort);
            }}
            className={`${
              index === 0 ? 'ml-5' : index === sorts.length - 1 ? 'mr-5' : ''
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
  );
}
