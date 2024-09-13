"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const HeaderAfterAuth = () => {
  const route = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRouteToStatusCheck = () => {
    route.push("/pages/status-check");
  };

  const handleRouteToForm = () => {
    route.push("/pages/form");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-[#223F99] flex justify-end p-3 sm:px-6 lg:px-8 relative">
      <button onClick={toggleMenu} className="relative z-10">
        <img src="/icons/burger-menu.svg" alt="Menu" className="w-8 h-8" />
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#223F99] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-[#FFCC05] text-2xl font-bold"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="mt-16 flex flex-col items-start">
          <li
            className="w-full p-4 text-[#FFCC05] hover:bg-[#FFCC05] hover:text-[#223F99] cursor-pointer transition duration-200 text-xl font-bold"
            onClick={handleRouteToStatusCheck}
          >
            Проверка статуса
          </li>
          <li
            className="w-full p-4 text-[#FFCC05] hover:bg-[#FFCC05] hover:text-[#223F99] cursor-pointer transition duration-200 text-xl font-bold"
            onClick={handleRouteToForm}
          >
            Анкета
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderAfterAuth;
