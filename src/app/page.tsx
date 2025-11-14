"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CheckCircle, Users, Star, Handshake, X } from "lucide-react";
import FAQAndReviews from "./FAQAndReviews";

export default function Home() {
  // Состояние модалки
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Большой баннер */}
      <section className="relative w-full h-[80vh]">
        <Image
          src="/img/index1.jpeg"
          alt="Строительная площадка"
          fill
          priority
          className="object-cover brightness-90"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Надёжное строительство под ключ
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-8">
            Мы строим дома из бревна по современным стандартам качества.
          </p>
          <div className="flex gap-4">
            <a
              href="/projects"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Наши проекты
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Связаться
            </button>
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="py-20 px-8 max-w-5xl text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Почему выбирают нас
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Более 15 лет опыта в строительстве. Мы используем только сертифицированные материалы, 
          предоставляем гарантии на все работы и сопровождаем проект на каждом этапе — 
          от проектирования до сдачи объекта.
        </p>
      </section>

      {/* Наша миссия, наш подход и т.д. */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-orange-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Наша миссия</h3>
              <p className="text-gray-600">
                Создавать уникальные и надёжные пространства, в которых каждый клиент чувствует себя комфортно и безопасно.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-orange-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Кто мы</h3>
              <p className="text-gray-600">
                Команда профессионалов, объединённых целью делать качественные строительные проекты с душой.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Handshake className="w-8 h-8 text-orange-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Наш подход</h3>
              <p className="text-gray-600">
                Прозрачность, ответственность и индивидуальный подход — ключевые принципы нашей работы.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Star className="w-8 h-8 text-orange-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Почему мы</h3>
              <p className="text-gray-600">
                Мы любим то, что делаем, ценим доверие клиентов и доказываем качество делом.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Слайдер изображений */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={900}
            className="rounded-2xl"
          >
            {[
              "/img/indexslide1.webp",
              "/img/indexslide2.webp",
              "/img/indexslide3.webp",
              "/img/indexslide4.webp",
              "/img/indexslide5.webp",
            ].map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[500px]">
                  <Image
                    src={src}
                    alt={`Проект ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl transition-all duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <FAQAndReviews />

      {/* Модальное окно */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Оставьте заявку
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Заполните форму, и наш оператор свяжется с вами в ближайшее время.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Спасибо! Наш оператор скоро свяжется с вами.");
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Введите имя"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Номер телефона</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500 text-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
