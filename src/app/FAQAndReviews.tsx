"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAndReviews() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Какова стоимость ваших услуг?",
      answer:
        "Стоимость зависит от типа проекта, материалов и сроков. Мы предлагаем бесплатную консультацию и предварительный расчёт сметы.",
    },
    {
      question: "Сколько времени занимает строительство?",
      answer: "Время зависит от сложности, но мы работаем быстро и в срок.",
    },
    {
      question: "Предоставляете ли вы гарантии?",
      answer:
        "Да, на все выполненные работы мы предоставляем гарантию. Также обеспечиваем постгарантийное обслуживание.",
    },
    {
      question: "Есть ли у вас скидки?",
      answer:
        "Да! Для постоянных клиентов и крупных заказов действуют индивидуальные скидки и бонусы.",
    },
    {
      question: "Какой стиль вы предпочитаете?",
      answer:
        "Мы работаем с любыми архитектурными стилями — от классики до хай-тека. Главное — ваши желания.",
    },
  ];

  return (
    <>
      {/* FAQ */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Часто задаваемые вопросы
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg bg-white shadow-sm transition-all duration-300 w-[700px] mx-auto"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-5 font-medium text-gray-800 hover:bg-orange-50 transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-600 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 bg-gray-50 border-t border-gray-200 w-full">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
