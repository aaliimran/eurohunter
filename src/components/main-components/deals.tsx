"use client";
import React, { useState } from "react";

interface Deal {
  ID: number;
  "Название сделки": string;
  "Контакт: Рабочий телефон": string;
  "Стадия сделки": string;
  "Номер договора": string;
  "Дата начала": string;
}

const Deals: React.FC = () => {
  const [selectedData, setSelectedData] = useState<Deal | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    if (searchTerm.trim() === "") {
      setSelectedData(null);
      return;
    }

    try {
      const [docsResponse, consulateResponse] = await Promise.all([
        fetch("/deals/sasl_docs.json"),
        fetch("/deals/sasl_consulate.json"),
      ]);

      const docsData: Deal[] = await docsResponse.json();
      const consulateData: Deal[] = await consulateResponse.json();

      const combinedData = [...docsData, ...consulateData];
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      const firstMatch = combinedData.find((deal) =>
        Object.values(deal).some((value) =>
          value.toString().toLowerCase().includes(lowerCaseSearchTerm)
        )
      );

      setSelectedData(firstMatch || null);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
    setLoading(false);
  };

  // Функция для маскировки телефона
  const maskPhone = (phone: string) => {
    return phone.replace(/(\d{4})\d{6}/, "$1******");
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4 w-full max-w-2xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl bg-white text-[#223F99]  font-title font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
          placeholder="ФИО / Номер договора / Номер телефона / ID соискателя"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#223F99] text-[#FFFFFF] text-[14px] sm:text-[16px] font-title font-bold rounded-xl"
        >
          {loading ? "Поиск..." : "Поиск"}
        </button>
      </div>

      <div className="flex flex-col p-4 md:p-6 gap-4 w-full max-w-2xl mx-auto">
        {selectedData ? (
          <ul className="flex flex-col gap-3">
            <li
              className="text-[18px] md:text-[20px] font-title flex flex-col gap-3"
              key={selectedData.ID}
            >
              <p className="text-[#000000] text-[20px] md:text-[24px] font-title font-bold">
                {selectedData["Название сделки"]}
              </p>
              <div>
                <p>
                  Контакты соискателя:{" "}
                  {maskPhone(selectedData["Контакт: Рабочий телефон"])}
                </p>
                <p>Статус соискателя: {selectedData["Стадия сделки"]}</p>
                <p>Номер договора: {selectedData["Номер договора"]}</p>
                <p>Дата начала: {selectedData["Дата начала"]}</p>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Deals;
