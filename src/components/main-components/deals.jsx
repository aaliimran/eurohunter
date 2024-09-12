"use client";
import { useState } from "react";
import axios from "axios";

const DealSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("/api/deals", {
        params: {
          search: searchTerm,
        },
      });

      console.log("Ответ от API:", response.data);

      const deals = response.data.deals;

      if (Array.isArray(deals) && deals.length > 0) {
        setSelectedDeal(deals[0]);
      } else {
        setSelectedDeal(null);
      }
    } catch (error) {
      setError("Ошибка при запросе данных.");
      console.error("Ошибка при запросе:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="p-4 flex justify-center items-center gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ФИО / Номер договора / Номер телефона / ID соискателя"
          className="p-4 border border-[#223F99] focus:border-[#FFCC05] rounded-xl text-[#223F99] font-title font-semibold w-[90%] "
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="p-4 bg-[#223F99] text-white rounded-xl font-title font-semibold hover:bg-[#1a2a6b] disabled:opacity-50"
        >
          {loading ? "Поиск..." : "Поиск"}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {selectedDeal ? (
        <ul className="mt-4">
          <li
            className="text-[20px] font-title flex flex-col gap-3"
            key={selectedDeal.ID}
          >
            <p className="text-[#000000] text-[24px] font-title font-bold">
              {selectedDeal.TITLE || "Название сделки отсутствует"}
            </p>
            <div>
              <p>
                Контакты соискателя:{" "}
                {selectedDeal.PHONE || "Телефон отсутствует"}
              </p>
              <p>
                Статус соискателя:{" "}
                {selectedDeal.STAGE_ID || "Статус отсутствует"}
              </p>
              <p>
                Номер договора:{" "}
                {selectedDeal.UF_CRM_XXXXXXXXX || "Номер договора отсутствует"}
              </p>
              <p>
                Дата начала:{" "}
                {selectedDeal.DATE_CREATE || "Дата начала отсутствует"}
              </p>
            </div>
          </li>
        </ul>
      ) : (
        <p className="mt-4">Ничего не найдено</p>
      )}
    </div>
  );
};

export default DealSearch;
