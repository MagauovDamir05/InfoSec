"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center py-20 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">
        Реализованные проекты
      </h1>

      {/* Проект 1 */}
      <section className="bg-white shadow-md rounded-xl p-6 max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Деревянный дом из клееного бруса по  проекту “Австрия v4”
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl"
        >
          <SwiperSlide>
            <Image
              src="/img/Avstriya1_1.jpg"
              alt="ЖК Солнечный — фасад"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Avstriya1_2.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Avstriya1_3.jpg"
              alt="ЖК Солнечный — территория"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Avstriya1_4.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Avstriya1_5.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Проект 2 */}
      <section className="bg-white shadow-md rounded-xl p-6 max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
           Деревянный дом из клееного бруса по проекту “Палмерстон”
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl"
        >
          <SwiperSlide>
            <Image
              src="/img/Palmerston1.jpg"
              alt="ЖК Солнечный — фасад"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Palmerston2.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Palmerston3.jpg"
              alt="ЖК Солнечный — территория"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Palmerston4.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Palmerston5.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Проект 3 */}
      <section className="bg-white shadow-md rounded-xl p-6 max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
           Деревянный дом из клееного бруса по проекту “Ривертон”
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl"
        >
          <SwiperSlide>
            <Image
              src="/img/Riverton1.jpg"
              alt="ЖК Солнечный — фасад"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Riverton2.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Riverton3.jpg"
              alt="ЖК Солнечный — территория"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Riverton4.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Riverton5.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Проект 4 */}
      <section className="bg-white shadow-md rounded-xl p-6 max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
           Деревянный дом из клееного бруса по проекту “Денвер”
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl"
        >
          <SwiperSlide>
            <Image
              src="/img/Denver1.jpg"
              alt="ЖК Солнечный — фасад"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Denver2.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Denver3.jpg"
              alt="ЖК Солнечный — территория"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Denver4.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/Denver5.jpg"
              alt="ЖК Солнечный — интерьер"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full h-[500px]"
            />
          </SwiperSlide>
        </Swiper>
      </section>

    </main>
  );
}
