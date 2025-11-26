"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ff6600] text-white py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* О компании */}
        <div>
          <h3 className="text-xl font-semibold mb-4">О компании</h3>
          <p className="text-gray-100 leading-relaxed">
            BuildPro — надёжная строительная компания с более чем 15-летним опытом.
            Мы строим дома и бани из бревна, гарантируя качество и долговечность.
          </p>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Контакты</h3>
          <ul className="space-y-3 text-gray-100">
            <li className="flex items-center gap-2">
              <Phone size={18} /> <span>+7 (705) 123-45-67</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> <span>info@buildpro.ru</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> <span>г. Петропавловск, ул. Строителей, 10</span>
            </li>
          </ul>
        </div>

        {/* Соцсети / подписка */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Будем на связи</h3>
          <p className="text-gray-100 mb-4">
            Подпишитесь, чтобы получать новости и акции.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Спасибо за подписку!");
            }}
            className="flex bg-white rounded-lg overflow-hidden"
          >
            <input
              type="email"
              placeholder="Ваш email"
              required
              className="w-full px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-700 px-4 flex items-center justify-center hover:bg-orange-800 transition"
            >
              <Send size={18} />
            </button>
          </form>

          {/* Соцсети */}
          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-100 text-sm">
        © {new Date().getFullYear()} BuildPro. Все права защищены.
      </div>
    </footer>
  );
}
