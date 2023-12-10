'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Button from './common/Button';

const data = [
  { label: '20% cкидка', image: '/assets/images/product-1.svg' },
  { label: '30% cкидка', image: '/assets/images/product-2.svg' },
  { label: '15% cкидка', image: '/assets/images/product-3.svg' },
  { label: '54% cкидка', image: '/assets/images/product-2.svg' },
];

export default function MainProductSlider() {
  return (
    <div className="relative border border-black/10 rounded-18 mt-10">
      <Swiper
        loop={true}
        pagination={true}
        speed={800}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-5">
              <div className="col-span-2  gap-2">
                <div className="space-y-3 ml-7 py-5">
                  <h3 className="w-24 text-3xl font-semibold leading-none">
                    {item.label}
                  </h3>
                  <Button
                    secondary
                    className="h-8 bg-black whitespace-nowrap text-xxs text-white px-5 py-2.5"
                  >
                    Купить сейчас
                  </Button>
                </div>
              </div>
              <div className="relative col-span-3">
                <motion.div>
                  <Image
                    src={item.image}
                    alt={item.label}
                    className="w-96 xs:h-80 absolute translate-x-3 transition-all duration-1000 opacity-100 -top-10 xs:-top-2/3"
                    width={189}
                    height={250}
                  />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
