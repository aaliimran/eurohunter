import React from "react";
import HeaderAfterAuth from "@/components/headers/header-after-auth";
import Deals from "@/components/main-components/deals";

const StatusCheck = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <HeaderAfterAuth />

      <div className="w-full bg-[#FFCC05] flex justify-center items-center py-8 md:py-16">
        <h1 className="text-[#223F99] text-2xl md:text-4xl font-title font-bold text-center">
          ПРОВЕРКА СТАТУСА СОИСКАТЕЛЯ
        </h1>
      </div>

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

      <div className="w-full bg-[#FFFFFF] flex justify-center items-center py-6 md:py-10 px-4 sm:px-6 lg:px-8">
        <Deals />
      </div>

      <footer className="bg-[#223F99] text-[#FFFFFF] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg md:text-xl font-bold">
            НАШИ ЕДИНСТВЕННЫЕ НАСТОЯЩИЕ НОМЕРА:
          </h2>
          <p className="mt-2 text-base md:text-lg">
            O! : +996 (509)-909-046 <br />
            Мегаком: +996 (552)-152-831
          </p>
          <p className="mt-2 text-sm md:text-base">
            ( WhatsApp звонки не работают, работает только телефонная линия в
            рабочее время по будням )
          </p>
          <div className="mt-6 text-sm md:text-base">
            <p>
              Компания ОсОО ЕВРОХАНТЕР КОМПАНИ, зарегистрирована 19.04.2023 г.,
            </p>
            <p>
              При регистрации организации присвоен БИН{" "}
              <a
                href="https://eurohunter.co/svedenie"
                className="text-[#FFCC05] underline"
              >
                01904202310223
              </a>
            </p>
            <p>Юридический адрес: ул. Панфилова 178, БЦ Орион-2</p>
          </div>
          <a
            href="mailto:info@eurohunter.co"
            className="mt-6 block text-[#FFCC05] text-sm md:text-base"
          >
            info@eurohunter.co
          </a>
        </div>
      </footer>
    </div>
  );
};

export default StatusCheck;
