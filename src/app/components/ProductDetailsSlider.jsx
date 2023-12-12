'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import Image from 'next/image';

export default function ProductDetailsSlider({ product }) {
  return (
    <div>
      <div className="h-72 xs:h-80 bg-brand-gray-100 pb-8 p-5">
        <Swiper
          pagination={true}
          speed={300}
          modules={[Pagination]}
          className="mySwiper2 details-slider"
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.image}
                alt={image.description}
                width={1000}
                height={500}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
