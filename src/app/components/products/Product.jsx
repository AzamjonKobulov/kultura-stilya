'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '../../contexts/AppContext';

export default function Product({ product }) {
  const { handleAddSearchedTerm, setSearchTerm } = useAppContext();

  return (
    <Link
      onClick={() => {
        handleAddSearchedTerm();
        setSearchTerm('');
      }}
      href={`/products/${product.id}`}
      className="space-y-2.5"
    >
      <div className="h-40 bg-brand-gray-100 rounded-18">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full"
          width={100}
          height={100}
        />
      </div>
      <div className="text-base">
        <h4 className="font-bold">{product.name}</h4>
        <p className="font-normal">
          {product.cost} <span>₽</span>
        </p>
      </div>
    </Link>
  );
}
