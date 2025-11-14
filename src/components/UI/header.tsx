"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const BuildLogo = () => {
  return (
    <svg
      fill="none"
      height="36"
      viewBox="0 0 32 32"
      width="36"
      className="text-white"
    >
      <path
        clipRule="evenodd"
        d="M4 24L16 4l12 20H4zm3.5-2h17L16 8l-8.5 14z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    setIsFormOpen(false);
    alert("Спасибо! Наш оператор скоро свяжется с вами.");
  };

  return (
    <>
      {/* Навигация */}
      <Navbar
        maxWidth="xl"
        className="bg-[#ff6600] text-white shadow-md"
        position="sticky"
      >
        <NavbarBrand>
          <BuildLogo />
          <p className="font-bold ml-2 text-lg">BuildPro</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Главная
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/projects"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Реализованные проекты
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              О компании
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#articles"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Наши статьи
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-orange-600 font-semibold hover:bg-gray-100 transition"
            >
              Связаться
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Модальное окно */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Оставьте заявку
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Заполните форму, и наш оператор свяжется с вами в ближайшее время.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9+() -]{7,}"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Отправить
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
