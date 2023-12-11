'use client';

import { useState } from 'react';

export default function ProductDetails({ product }) {
  const [activeSizeBtn, setActiveSizeBtn] = useState(0);
  const [activeColorBtn, setActiveColorBtn] = useState(0);

  return (
    <div className="bg-white rounded-18 -mt-5  pt-6">
      <h3 className="ml-5">{product.name}</h3>
      {/* SIZES */}
      <div className="space-y-4 mt-5">
        <h4 className="text-base font-bold ml-5">Размер</h4>
        <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setActiveSizeBtn(index)}
              className={`${
                index === 0
                  ? 'ml-5'
                  : index === product.sizes.length - 1
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
                {size}
              </span>
              <span
                className={`text-xs font-normal ${
                  activeSizeBtn === index ? 'text-white' : 'text-brand-gray-200'
                }`}
              >
                {size} см
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* SIZES */}
      <div className="space-y-4 mt-5">
        <h4 className="text-base font-bold ml-5">Цвет</h4>
        <div className="scroll-none flex flex-nowrap overflow-auto gap-2.5">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setActiveColorBtn(index)}
              style={{
                backgroundColor: `${color}`,
                boxShadow: '1px 1px 10px 0px rgba(34, 39, 79, 0.10)',
              }}
              className={`${
                index === 0
                  ? 'ml-5'
                  : index === product.colors.length - 1
                  ? 'mr-5'
                  : ''
              } w-[26px] h-[26px] grid place-content-center rounded-full border border-brand-gray-100`}
            >
              {activeColorBtn === index && (
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className={color === '#FFF' ? 'fill-black' : 'fill-white'}
                >
                  <path d="M4.31077 10.3886L8.66129 14.7001C8.74371 14.7817 8.89 14.7934 9.06798 14.7325C9.24596 14.6717 9.44105 14.5432 9.61034 14.3755C9.77963 14.2077 9.90924 14.0143 9.97067 13.838C10.0321 13.6616 10.0203 13.5166 9.93788 13.4349L5.58736 9.12348C5.50495 9.04181 5.35866 9.03012 5.18068 9.09099C5.00269 9.15187 4.8076 9.28032 4.63832 9.44808C4.46903 9.61585 4.33942 9.80919 4.27799 9.98557C4.21656 10.162 4.22835 10.3069 4.31077 10.3886Z" />
                  <path d="M15.3258 6.48394L8.4893 13.2591C8.35979 13.3874 8.30283 13.5772 8.33096 13.7865C8.35908 13.9959 8.46999 14.2078 8.63928 14.3756C8.80857 14.5433 9.02237 14.6533 9.23365 14.6811C9.44494 14.709 9.63639 14.6526 9.7659 14.5242L16.6024 7.74908C16.7319 7.62073 16.7889 7.43099 16.7608 7.22161C16.7327 7.01222 16.6217 6.80034 16.4525 6.63257C16.2832 6.4648 16.0694 6.35489 15.8581 6.32702C15.6468 6.29914 15.4553 6.35559 15.3258 6.48394Z" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
