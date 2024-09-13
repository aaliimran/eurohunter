import React from "react";
import HeaderAfterAuth from "@/components/headers/header-after-auth";
import DealSearch from "@/components/main-components/deals";
import Deals from "@/components/main-components/dealsfalsh";

const StatusCheck = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <HeaderAfterAuth />

      {/* Header Section */}
      <div className="w-full bg-[#FFCC05] flex justify-center items-center py-8 md:py-16">
        <h1 className="text-[#223F99] text-2xl md:text-4xl font-title font-bold text-center">
          ПРОВЕРКА СТАТУСА СОИСКАТЕЛЯ
        </h1>
      </div>

      {/* Instruction Section */}
      <div className="w-full bg-[#223F99] flex justify-center items-center py-6 md:py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-[#FFFFFF] text-lg md:text-2xl font-title font-semibold">
            Чтобы найти свой статус, напишите в поиске одно из ниже
            <br className="hidden md:inline" />
            перечисленных:
          </h1>
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li className="text-[#FFFFFF] text-base md:text-xl font-title font-medium">
              Ваше Имя и Фамилию латиницей или кириллицей
            </li>
            <li className="text-[#FFFFFF] text-base md:text-xl font-title font-medium">
              Ваш номер договора
            </li>
            <li className="text-[#FFFFFF] text-base md:text-xl font-title font-medium">
              Ваш номер телефона
            </li>
            <li className="text-[#FFFFFF] text-base md:text-xl font-title font-medium">
              Ваш ID соискателя у нас в системе
            </li>
          </ul>
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full bg-[#FFFFFF] flex justify-center items-center py-6 md:py-10 px-4 sm:px-6 lg:px-8">
        {/* <DealSearch /> */}
        <Deals />
      </div>
    </div>
  );
};

export default StatusCheck;
