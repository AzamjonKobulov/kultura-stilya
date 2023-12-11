'use client';

import { useState } from 'react';
import Button from './common/Button';

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
      {/* DESCRIPTION */}
      <div className="px-5 mt-4">
        <h4 className="text-base font-bold">Описание</h4>
        <p className="text-sm">{product.description}</p>
      </div>
      {/* COST */}
      <div className="flex items-center justify-between mt-8 px-5">
        <div>
          <p className="text-sm font-bold">Цена:</p>
          <h3>{product.cost} ₽</h3>
        </div>
        <Button className="h-[52px] flex items-center gap-4 bg-black text-white text-base font-semibold px-[30px]">
          <span>В корзину</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_445_262)">
              <path
                d="M17.5 5H15C15 3.67392 14.4732 2.40215 13.5355 1.46447C12.5979 0.526784 11.3261 0 10 0C8.67392 0 7.40215 0.526784 6.46447 1.46447C5.52678 2.40215 5 3.67392 5 5H2.5C1.83696 5 1.20107 5.26339 0.732233 5.73223C0.263392 6.20107 0 6.83696 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5C20 6.83696 19.7366 6.20107 19.2678 5.73223C18.7989 5.26339 18.163 5 17.5 5ZM10 1.66667C10.8841 1.66667 11.7319 2.01786 12.357 2.64298C12.9821 3.2681 13.3333 4.11594 13.3333 5H6.66667C6.66667 4.11594 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667ZM18.3333 15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V7.5C1.66667 7.27899 1.75446 7.06702 1.91074 6.91074C2.06702 6.75446 2.27899 6.66667 2.5 6.66667H5V8.33333C5 8.55435 5.0878 8.76631 5.24408 8.92259C5.40036 9.07887 5.61232 9.16667 5.83333 9.16667C6.05435 9.16667 6.26631 9.07887 6.42259 8.92259C6.57887 8.76631 6.66667 8.55435 6.66667 8.33333V6.66667H13.3333V8.33333C13.3333 8.55435 13.4211 8.76631 13.5774 8.92259C13.7337 9.07887 13.9457 9.16667 14.1667 9.16667C14.3877 9.16667 14.5996 9.07887 14.7559 8.92259C14.9122 8.76631 15 8.55435 15 8.33333V6.66667H17.5C17.721 6.66667 17.933 6.75446 18.0893 6.91074C18.2455 7.06702 18.3333 7.27899 18.3333 7.5V15.8333Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_445_262">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
    </div>
  );
}
