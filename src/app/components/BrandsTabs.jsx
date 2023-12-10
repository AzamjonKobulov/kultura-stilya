'use client';

import { useState } from 'react';
import Button from './common/Button';
import { useAppContext } from '../contexts/AppContext';

const data = [
  { brand: 'Все' },
  { brand: 'Nike' },
  { brand: 'New Balance' },
  { brand: 'Adidas' },
  { brand: 'Converse' },
  { brand: 'Puma' },
];

export default function BrandsTabs() {
  const { handleBrandName } = useAppContext();

  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className="scroll-none flex relative z-20 flex-nowrap overflow-auto gap-2.5 mt-24">
      {data.map((brand, index) => (
        <Button
          key={index}
          onClick={() => {
            handleBrandName(brand.brand);
            setActiveBtn(index);
          }}
          className={`${
            index === 0 ? 'ml-5' : index === data.length - 1 ? 'mr-5' : ''
          } ${
            activeBtn === index
              ? 'bg-brand-red text-white border-brand-red'
              : ''
          }  h-7 border border-brand-gray-200 rounded-full text-sm font-semibold text-brand-gray-200 whitespace-nowrap px-3 pt-0.5`}
        >
          {brand.brand}
        </Button>
      ))}
    </div>
  );
}
