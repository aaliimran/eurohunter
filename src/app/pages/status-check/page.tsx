import React from "react";
import HeaderAfterAuth from "@/components/headers/header-after-auth";
import DealSearch from "@/components/main-components/deals";
import Deals from "@/components/main-components/dealsfalsh";

const StatusCheck = () => {
  return (
    <div>
      <HeaderAfterAuth />
      <div className="w-full bg-[#FFCC05] h-[160px] flex justify-center items-center pb-[30px] pt-[75px]">
        <h1 className="text-[#223F99] text-[42px] font-title font-bold">
          ПРОВЕРКА СТАТУСА СОИСКАТЕЛЯ
        </h1>
      </div>
      <div className="w-full bg-[#223F99]  flex justify-center items-center py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[#FFFFFF] text-[28px] font-title font-semibold">
              Чтобы найти свой статус, напишите в поиске одно из ниже
              <br />
              перечисленных:
            </h1>
          </div>
          <div>
            <li className=" text-[#FFFFFF] text-[24px] font-title font-medium">
              Ваше Имя и Фамилию латиницей или кириллицей
            </li>
            <li className=" text-[#FFFFFF] text-[24px] font-title font-medium">
              Ваш номер договора
            </li>
            <li className=" text-[#FFFFFF] text-[24px] font-title font-medium">
              Ваш номер телефона
            </li>
            <li className=" text-[#FFFFFF] text-[24px] font-title font-medium">
              Ваш ID соискателя у нас в системе
            </li>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF]  flex justify-center items-center py-10 px-4 sm:px-6 lg:px-8 ">
        {/* <DealSearch /> */}
        <Deals />
      </div>
    </div>
  );
};

export default StatusCheck;
