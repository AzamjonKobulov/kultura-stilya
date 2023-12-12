'use client';

import { useAppContext } from '../../contexts/AppContext';

import ProductDetailsSlider from '@/app/components/products/ProductDetailsSlider';
import ProductDetails from '@/app/components/products/ProductDetails';

export default function ProductPage({ params }) {
  const { products } = useAppContext();

  const product = products.find((item) => item.id === params.productId);

  return (
    <div>
      <div className="">
        <ProductDetailsSlider product={product} />
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
