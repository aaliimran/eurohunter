import React from "react";
import MainHomeStatusList from "../common/main-home-status-list";

const MainHome = () => {
  return (
    <div className="flex flex-col justify-center items-start p-0 pb-20 gap-6">
      <h1 className="text-[#00000] text-[32px] font-title font-bold">
        Текущий статус соискателя
      </h1>
      <div className="bg-[#F3F4F6] flex flex-col rounded-3xl p-6 gap-5 max-w-[865px]">
        <h2 className="text-[#000000] text-[20px] font-title font-bold">
          Ниже предоставлена текущая информация о статусе
        </h2>
        <div>
          <MainHomeStatusList
            img={"/icons/line.svg"}
            title={
              "Подготовка документов со стороны Еврохантера для Польского работодателя"
            }
            text={
              "Команда Еврохантер собирает все необходимые документы для соискателя и отправляет<br> работодателю. "
            }
          />
          <MainHomeStatusList
            img={"/icons/mini-line.svg"}
            title={"Ожидание приглашения от работодателя"}
            text={
              "После отправки документов, мы ждем подготовки приглашения от работодателя."
            }
          />
          <MainHomeStatusList
            img={"/icons/line.svg"}
            title={"Запись в Польское консульство"}
            text={
              "Визовый отдел Еврохантера регистрирует соискателя в Польское консульство для получения <br/>визы."
            }
          />
          <div className="flex flex-row justify-center items-start gap-5">
            <img src="/icons/check.svg" alt="" />
            <div className="flex flex-col gap-2 pb-4">
              <p className="text-[#000000] text-[16px] font-title font-semibold">
                Запись в Польское консульство назначена на 18.07.2024
              </p>
              <h3 className="text-[#000000] text-[16px] font-title font-normal leading-7">
                <div className="flex flex-col gap-7">
                  <div>
                    Рады сообщить вам о назначенной дате вашего собеседования в
                    посольстве г. Алматы 18 июля в<br /> 09:10 утра
                    <h3>С собой необходимо иметь перечень документов:</h3>
                    <div className="pl-[10px]">
                      <li>формата 3.5 X 4.5 (2шт)</li>
                      <li>Оригинал ID паспорта</li>
                      <li>Оригинал загранпаспорта </li>
                      <li>
                        Оригинал свидетельства о браке (если женаты/замужем)
                      </li>
                      <li>
                        Оригинал свидетельства о рождении детей (если есть дети)
                      </li>
                      <li>
                        Справка из банка о наличии денежных средств на вашем
                        личном счету в размере 70 000 сом и выше. ( выписка с
                        мобильного приложения MBank и других мобильных
                        приложений банков НЕ ПОДХОДИТ) (банковские справки от
                        РСК банка и Айыл Банка так же не подходят)
                      </li>
                      <li>Справка о регистрационном учете с ЦОНа </li>
                    </div>
                  </div>
                  <div>
                    Оплата:
                    <div className="pl-[10px]">
                      <li>
                        Консульский сбор в размере 80 евро (купюры должны быть
                        не порванные и не помятые)
                      </li>
                      <li>
                        Остаток суммы по договору в размере 260 евро (оплачивать
                        в сомах по курсу евро нам в кассу)
                      </li>
                      <li>
                        Сумма страховки в размере 150 евро ( оплачивается сомами
                        по курсу евро нам в кассу)
                      </li>
                    </div>
                  </div>
                  <div>
                    Ждем вас 14 июля в 16:00 на предвизовую подготовку с полным
                    пакетом документов и оплатой. В нашем офисе БЦ
                    &quot;quoted&quot; Улица Панфилова 178 седьмой этаж. Лифт
                    справа.
                  </div>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
