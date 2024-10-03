"use client";
import React, { useState } from "react";
import { mapStatus } from "@/utils/statusMapping";

interface Deal {
  "Название сделки": string;
  Контакт: string;
  "Контакт: Рабочий телефон": string;
  "Стадия сделки": string;
  "Номер договора": string;
  ID: number;
  Воронка:
    | "SAS Logistic"
    | "Посольства SAS"
    | "Eurokadra"
    | "Посольства EuroKadra"
    | "Transfer";
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
      const [
        sasConsulateResponse,
        sasLogisticsResponse,
        eurokadraResponse,
        eurokadraConsulateResponse,
        transferResponse,
      ] = await Promise.all([
        fetch("/deals/sas_consulate.json"),
        fetch("/deals/sas_logistics.json"),
        fetch("/deals/eurokadra.json"),
        fetch("/deals/eurokadra_consulate.json"),
        fetch("/deals/transfer.json"),
      ]);

      const sasConsulateData: Deal[] = await sasConsulateResponse.json();
      const sasLogisticsData: Deal[] = await sasLogisticsResponse.json();
      const eurokadraData: Deal[] = await eurokadraResponse.json();
      const eurokadraConsulateData: Deal[] =
        await eurokadraConsulateResponse.json();
      const transferData: Deal[] = await transferResponse.json();

      const combinedData = [
        ...sasConsulateData,
        ...sasLogisticsData,
        ...eurokadraData,
        ...eurokadraConsulateData,
        ...transferData,
      ];
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

  const maskContactName = (phone: string | undefined) => {
    if (!phone) {
      return "";
    }

    const cleanedPhone = phone.replace(/\D/g, "");

    if (cleanedPhone.length > 4) {
      const prefix = cleanedPhone.slice(0, 4);
      const maskedPart = "*".repeat(cleanedPhone.length - 4);
      return `${prefix}${maskedPart}`;
    }

    return cleanedPhone;
  };

  const maskPhone = (phone: string | undefined) => {
    if (phone === undefined) {
      return "";
    }
    return phone.replace(/(\d{4})\d{6}/, "$1******");
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4 w-full max-w-4xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl bg-white text-[#223F99] text-[20px]  font-title font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#223F99] focus:border-[#223F99] transition duration-150 ease-in-out"
          placeholder="ФИО / Номер договора / Номер телефона / ID соискателя"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#223F99] text-[#FFFFFF] text-[14px] sm:text-[16px] font-title font-bold rounded-xl"
        >
          {loading ? "Поиск..." : "Поиск"}
        </button>
      </div>

      <div className="flex flex-col p-4 md:p-6 gap-4 w-full max-w-4xl mx-auto">
        {selectedData ? (
          <ul className="flex flex-col gap-3">
            <li
              className="text-[18px] md:text-[20px] font-title flex flex-col gap-3"
              key={selectedData.ID}
            >
              <p className="text-[#000000] text-[20px] md:text-[24px] font-title font-bold">
                {selectedData["Название сделки"]}{" "}
                {maskContactName(selectedData["Контакт"])}
              </p>
              <div>
                <p>Номер договора: {selectedData["Номер договора"]}</p>
                <p>
                  Контакты соискателя:
                  {selectedData["Контакт: Рабочий телефон"]
                    .split(", ")
                    .map((phone) => maskPhone(phone))
                    .join(", ")}
                </p>
                <p className="flex gap-3">
                  <span className="font-title font-bold text-[20px]  ">
                    Статус соискателя:{" "}
                  </span>
                  <p className="font-title font-bold text-[#223F99]">
                    {mapStatus(
                      selectedData["Стадия сделки"],
                      selectedData.Воронка
                    )}
                  </p>
                </p>
                <p>ID соискателя: {selectedData["ID"]}</p>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Deals;
