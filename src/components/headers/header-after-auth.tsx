"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const HeaderAfterAuth = () => {
  const route = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleRouteToUserProfile = () => {
  //   route.push("/pages/user-profile");
  // };

  // const handleRouteToHome = () => {
  //   route.push("/");
  // };

  // const handleRouteToQueue = () => {
  //   route.push("/#");
  // };

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
    <div className="w-full bg-[#223F99] flex justify-end p-3 sm:px-6 lg:px-8">
      {/* <div className="flex justify-center items-center">
        <button onClick={handleRouteToUserProfile}>
          <img src="/icons/profile.svg" alt="Profile" />
        </button>
      </div> */}
      <div className="relative flex justify-center items-center">
        <button onClick={toggleMenu}>
          <img src="/icons/burger-menu.svg" alt="Menu" />
        </button>
      </div>
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
          className="absolute top-4 right-4 text-[#FFCC05]"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="mt-16 flex flex-col items-start">
          {/* <button className="w-full" onClick={handleRouteToHome}>
            <li className="flex justify-start p-4 hover:bg-[#FFCC05] cursor-pointer transition duration-200 text-[#FFCC05] hover:text-[#223F99] text-[24px] font-title font-bold">
              Главная
            </li>
          </button>
          <button className="w-full" onClick={handleRouteToQueue}>
            <li className="flex justify-start p-4 hover:bg-[#FFCC05] cursor-pointer transition duration-200 text-[#FFCC05] hover:text-[#223F99] text-[24px] font-title font-bold">
              Очередь
            </li>
          </button> */}
          <button className="w-full" onClick={handleRouteToStatusCheck}>
            <li className="flex justify-start p-4 hover:bg-[#FFCC05] cursor-pointer transition duration-200 text-[#FFCC05] hover:text-[#223F99] text-[24px] font-title font-bold">
              Проверка статуса
            </li>
          </button>
          <button className="w-full" onClick={handleRouteToForm}>
            <li className="flex justify-start p-4 hover:bg-[#FFCC05] cursor-pointer transition duration-200 text-[#FFCC05] hover:text-[#223F99] text-[24px] font-title font-bold">
              Анкета
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderAfterAuth;
